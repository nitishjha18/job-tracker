import { Router } from "express"
import { requireUser } from "../../middleware/auth"
import { getDashboardStatsController } from "./dashboard.controller"

const router = Router()

router.use(requireUser)

router.get("/stats", getDashboardStatsController)

export default router