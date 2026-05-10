import { clerkMiddleware, requireAuth, getAuth } from "@clerk/express";
import { Request, Response, NextFunction } from "express";

// This verifies the Clerk token on every request
export const clerkAuth = clerkMiddleware();

// This protects individual routes — returns 401 if not logged in
export const requireUser = requireAuth();

// Helper to get the current user's clerkId from any request
export const getClerkId = (req: Request): string => {
  const { userId } = getAuth(req);
  if (!userId) throw new Error("Unauthorized");
  return userId;
};
