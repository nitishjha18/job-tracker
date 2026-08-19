import { Request, Response } from "express"
import { getDashboardStats } from "./dashboard.service"

export const getDashboardStatsController = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user
    const stats = await getDashboardStats(user.id)
    res.status(200).json({ stats })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}