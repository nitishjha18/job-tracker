"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendReminderEmail = void 0;
const resend_1 = require("resend");
const resend = new resend_1.Resend(process.env.RESEND_API_KEY);
const sendReminderEmail = async (toEmail, userName, companyName, jobTitle, notes) => {
    const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: toEmail,
        subject: `Reminder — ${jobTitle} at ${companyName}`,
        text: `
Hi ${userName},

You have a reminder today for your job application:

Role: ${jobTitle}
Company: ${companyName}
${notes ? `Note: ${notes}` : ""}

Good luck!
— ApplynTrack
    `.trim()
    });
    if (error) {
        console.error("Email send error:", error);
        throw new Error("Failed to send email");
    }
    return data;
};
exports.sendReminderEmail = sendReminderEmail;
