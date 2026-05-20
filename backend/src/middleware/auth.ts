import { clerkMiddleware, getAuth } from "@clerk/express";
import { Request, Response, NextFunction } from "express";
import prisma from "../config/db";

// This verifies the Clerk token on every request
export const clerkAuth = clerkMiddleware();

// This protects individual routes — returns 401 if not logged in
export const requireUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = getAuth(req);

  if (!userId) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const localUser = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (!localUser) {
    res.status(401).json({ error: "User not found. Please sync first." });
    return;
  }

  (req as any).user = localUser;
  next();
};

// Helper to get the current user's clerkId from any request
export const getClerkId = (req: Request): string => {
  const { userId } = getAuth(req);
  if (!userId) throw new Error("Unauthorized");
  return userId;
};
