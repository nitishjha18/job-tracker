import { Request, Response } from "express";
import { getAuth, clerkClient } from "@clerk/express";
import { syncUser, getUserByClerkId } from "./user.service";

export const syncUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const clerkUser = await clerkClient.users.getUser(userId);
    const name =
      [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") ||
      clerkUser.emailAddresses[0].emailAddress;

    const user = await syncUser(
      userId,
      name,
      clerkUser.emailAddresses[0].emailAddress,
      clerkUser.imageUrl,
    );

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProfileController = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const user = await getUserByClerkId(userId);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
