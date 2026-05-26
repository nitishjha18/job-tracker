import { Request, Response } from "express";
import { getAuth, clerkClient } from "@clerk/express";
import multer from "multer";
import { supabase } from "../../config/supabase";
import { syncUser, getUserByClerkId, updateResumeUrl } from "./user.service";

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

const upload = multer({ storage: multer.memoryStorage() });
export const uploadMiddleware = upload.single("resume");

export const uploadResumeController = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    if (req.file.mimetype !== "application/pdf") {
      res.status(400).json({ error: "Only PDF files are allowed" });
      return;
    }

    const user = (req as any).user;
    const filePath = `${user.id}/resume.pdf`;

    const { error } = await supabase.storage
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

    const updatedUser = await updateResumeUrl(user.id, publicUrl);

    res.status(200).json({
      message: "Resume uploaded successfully",
      resumeUrl: updatedUser.resumeUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
