import { Router } from "express";
import { requireUser } from "../../middleware/auth";
import {
  createApplicationController,
  deleteApplicationController,
  getAllApplicationsController,
  getApplicationByIdController,
  updateApplicationController,
} from "./applications.controller";

const router = Router();

router.use(requireUser);

router.post("/", createApplicationController);
router.get("/", getAllApplicationsController);
router.get("/:id", getApplicationByIdController);
router.put("/:id", updateApplicationController);
router.delete("/:id", deleteApplicationController);

export default router;
