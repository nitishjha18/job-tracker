import { Request, Response } from "express"
import { createReminder, updateReminder, deleteReminder } from "./reminders.service"

export const createReminderController = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user
    const { applicationId, reminderDate, notes } = req.body

    if (!applicationId || !reminderDate) {
      res.status(400).json({ error: "applicationId and reminderDate are required" })
      return
    }

    const reminder = await createReminder(
      user.id,
      applicationId,
      new Date(reminderDate),
      notes
    )

    res.status(201).json({ reminder })
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
      return
    }
    res.status(500).json({ error: "Internal server error" })
  }
}

export const updateReminderController = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user
    const reminderId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id
    const { reminderDate, notes } = req.body

    if (!reminderDate) {
      res.status(400).json({ error: "reminderDate is required" })
      return
    }

    const reminder = await updateReminder(
      user.id,
      reminderId,
      new Date(reminderDate),
      notes
    )

    res.status(200).json({ reminder })
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
      return
    }
    res.status(500).json({ error: "Internal server error" })
  }
}

export const deleteReminderController = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user
    const reminderId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id

    const result = await deleteReminder(user.id, reminderId)
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
      return
    }
    res.status(500).json({ error: "Internal server error" })
  }
}