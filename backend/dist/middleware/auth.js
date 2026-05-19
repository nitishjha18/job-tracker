"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClerkId = exports.requireUser = exports.clerkAuth = void 0;
const express_1 = require("@clerk/express");
// This verifies the Clerk token on every request
exports.clerkAuth = (0, express_1.clerkMiddleware)();
// This protects individual routes — returns 401 if not logged in
exports.requireUser = (0, express_1.requireAuth)();
// Helper to get the current user's clerkId from any request
const getClerkId = (req) => {
    const { userId } = (0, express_1.getAuth)(req);
    if (!userId)
        throw new Error("Unauthorized");
    return userId;
};
exports.getClerkId = getClerkId;
