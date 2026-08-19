"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReminderController = exports.updateReminderController = exports.createReminderController = void 0;
const reminders_service_1 = require("./reminders.service");
const createReminderController = async (req, res) => {
    try {
        const user = req.user;
        const { applicationId, reminderDate, notes } = req.body;
        if (!applicationId || !reminderDate) {
            res.status(400).json({ error: "applicationId and reminderDate are required" });
            return;
        }
        const reminder = await (0, reminders_service_1.createReminder)(user.id, applicationId, new Date(reminderDate), notes);
        res.status(201).json({ reminder });
    }
    catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.createReminderController = createReminderController;
const updateReminderController = async (req, res) => {
    try {
        const user = req.user;
        const reminderId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const { reminderDate, notes } = req.body;
        if (!reminderDate) {
            res.status(400).json({ error: "reminderDate is required" });
            return;
        }
        const reminder = await (0, reminders_service_1.updateReminder)(user.id, reminderId, new Date(reminderDate), notes);
        res.status(200).json({ reminder });
    }
    catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.updateReminderController = updateReminderController;
const deleteReminderController = async (req, res) => {
    try {
        const user = req.user;
        const reminderId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const result = await (0, reminders_service_1.deleteReminder)(user.id, reminderId);
        res.status(200).json(result);
    }
    catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.deleteReminderController = deleteReminderController;
