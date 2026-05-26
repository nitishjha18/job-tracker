import { Router } from "express";
import { requireUser } from "../../middleware/auth";
import { syncUserController, getProfileController } from "./user.controller";
import { uploadMiddleware, uploadResumeController } from "./user.controller";

const router = Router();

router.post("/sync", requireUser, syncUserController);
router.get("/profile", requireUser, getProfileController);
router.post("/resume", requireUser, uploadMiddleware, uploadResumeController);

export default router;
