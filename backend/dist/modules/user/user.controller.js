"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileController = exports.syncUserController = void 0;
const express_1 = require("@clerk/express");
const user_service_1 = require("./user.service");
const syncUserController = async (req, res) => {
    try {
        const { userId } = (0, express_1.getAuth)(req);
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const clerkUser = await express_1.clerkClient.users.getUser(userId);
        const user = await (0, user_service_1.syncUser)(userId, `${clerkUser.firstName} ${clerkUser.lastName}`, clerkUser.emailAddresses[0].emailAddress, clerkUser.imageUrl);
        res.status(200).json({ user });
    }
    catch (error) {
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
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getProfileController = getProfileController;
