"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadResumeController = exports.uploadMiddleware = exports.getProfileController = exports.syncUserController = void 0;
const express_1 = require("@clerk/express");
const multer_1 = __importDefault(require("multer"));
const supabase_1 = require("../../config/supabase");
const user_service_1 = require("./user.service");
const syncUserController = async (req, res) => {
    try {
        const { userId } = (0, express_1.getAuth)(req);
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const clerkUser = await express_1.clerkClient.users.getUser(userId);
        const name = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") ||
            clerkUser.emailAddresses[0].emailAddress;
        const user = await (0, user_service_1.syncUser)(userId, name, clerkUser.emailAddresses[0].emailAddress, clerkUser.imageUrl);
        res.status(200).json({ user });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.syncUserController = syncUserController;
const getProfileController = async (req, res) => {
    try {
        const { userId } = (0, express_1.getAuth)(req);
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const user = await (0, user_service_1.getUserByClerkId)(userId);
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        res.status(200).json({ user });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getProfileController = getProfileController;
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
exports.uploadMiddleware = upload.single("resume");
const uploadResumeController = async (req, res) => {
    try {
        if (!req.file) {
            res.status(400).json({ error: "No file uploaded" });
            return;
        }
        if (req.file.mimetype !== "application/pdf") {
            res.status(400).json({ error: "Only PDF files are allowed" });
            return;
        }
        const user = req.user;
        const filePath = `${user.id}/resume.pdf`;
        const { error } = await supabase_1.supabase.storage
            .from("resumes")
            .upload(filePath, req.file.buffer, {
            contentType: "application/pdf",
            upsert: true,
        });
        if (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to upload to storage" });
            return;
        }
        const publicUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/resumes/${filePath}`;
        const updatedUser = await (0, user_service_1.updateResumeUrl)(user.id, publicUrl);
        res.status(200).json({
            message: "Resume uploaded successfully",
            resumeUrl: updatedUser.resumeUrl,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.uploadResumeController = uploadResumeController;
