import { Router } from "express"
import { requireUser } from "../../middleware/auth"
import {
  createReminderController,
  updateReminderController,
  deleteReminderController
} from "./reminders.controller"

const router = Router()

router.use(requireUser)

router.post("/", createReminderController)
router.put("/:id", updateReminderController)
router.delete("/:id", deleteReminderController)

export default router