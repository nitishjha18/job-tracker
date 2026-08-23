import { Router } from "express";
import { clerkAuth, requireUser } from "../../middleware/auth";
import { syncUserController, getProfileController } from "./user.controller";
import { uploadMiddleware, uploadResumeController } from "./user.controller";
import { updateProfileController } from "./user.controller";

const router = Router();

router.post("/sync", clerkAuth, syncUserController); // ← only clerkAuth, no requireUser
router.get("/profile", requireUser, getProfileController);
router.post("/resume", requireUser, uploadMiddleware, uploadResumeController);
router.put("/profile", requireUser, updateProfileController);

export default router;