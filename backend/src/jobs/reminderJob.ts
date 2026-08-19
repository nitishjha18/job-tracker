import cron from "node-cron"
import prisma from "../config/db"
import { sendReminderEmail } from "../utils/email"

export const startReminderJob = () => {
  cron.schedule("0 9 * * *", async () => {
    console.log("Running daily reminder job...")

    const today = new Date()
    today.setUTCHours(0, 0, 0, 0)
    
    const tomorrow = new Date(today)
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1)

    const reminders = await prisma.reminder.findMany({
      where: {
        reminderDate: {
          gte: today,
          lt: tomorrow
        },
        isSent: false
      },
      include: {
        user: true,
        application: true
      }
    })

    console.log(`Found ${reminders.length} reminders to send`)

    for (const reminder of reminders) {
      try {
        await sendReminderEmail(
          reminder.user.email,
          reminder.user.name,
          reminder.application.companyName,
          reminder.application.jobTitle,
          reminder.notes ?? null
        )

        await prisma.reminder.update({
          where: { id: reminder.id },
          data: { isSent: true }
        })

        console.log(`Reminder sent to ${reminder.user.email}`)
      } catch (error) {
        console.error(`Failed to send reminder ${reminder.id}:`, error)
      }
    }
  })

  console.log("Reminder cron job scheduled — runs daily at 9am")
}