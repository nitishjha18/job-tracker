import { Router } from "express"
import { requireUser } from "../../middleware/auth"
import { analyzeResumeController, interviewPrepController, saveAnswersController, getAnswersController  } from "./ai.controller"


const router = Router()

router.use(requireUser)
router.post("/analyze-resume", analyzeResumeController)
router.post("/interview-prep", interviewPrepController)
router.post("/save-answers", saveAnswersController)
router.get("/answers/:appId", getAnswersController)
export default router