"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClerkId = exports.requireUser = exports.clerkAuth = void 0;
const express_1 = require("@clerk/express");
const db_1 = __importDefault(require("../config/db"));
// This verifies the Clerk token on every request
exports.clerkAuth = (0, express_1.clerkMiddleware)();
// This protects individual routes — returns 401 if not logged in
const requireUser = async (req, res, next) => {
    const { userId } = (0, express_1.getAuth)(req);
    if (!userId) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }
    const localUser = await db_1.default.user.findUnique({
        where: { clerkId: userId },
    });
    if (!localUser) {
        res.status(401).json({ error: "User not found. Please sync first." });
        return;
    }
    req.user = localUser;
    next();
};
exports.requireUser = requireUser;
// Helper to get the current user's clerkId from any request
const getClerkId = (req) => {
    const { userId } = (0, express_1.getAuth)(req);
    if (!userId)
        throw new Error("Unauthorized");
    return userId;
};
exports.getClerkId = getClerkId;
