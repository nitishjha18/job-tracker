"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startReminderJob = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const db_1 = __importDefault(require("../config/db"));
const email_1 = require("../utils/email");
const startReminderJob = () => {
    node_cron_1.default.schedule("0 9 * * *", async () => {
        console.log("Running daily reminder job...");
        const today = new Date();
        today.setUTCHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
        const reminders = await db_1.default.reminder.findMany({
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
        });
        console.log(`Found ${reminders.length} reminders to send`);
        for (const reminder of reminders) {
            try {
                await (0, email_1.sendReminderEmail)(reminder.user.email, reminder.user.name, reminder.application.companyName, reminder.application.jobTitle, reminder.notes ?? null);
                await db_1.default.reminder.update({
                    where: { id: reminder.id },
                    data: { isSent: true }
                });
                console.log(`Reminder sent to ${reminder.user.email}`);
            }
            catch (error) {
                console.error(`Failed to send reminder ${reminder.id}:`, error);
            }
        }
    });
    console.log("Reminder cron job scheduled — runs daily at 9am");
};
exports.startReminderJob = startReminderJob;
