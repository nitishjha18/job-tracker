"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteApplicationController = exports.updateApplicationController = exports.getApplicationByIdController = exports.getAllApplicationsController = exports.createApplicationController = void 0;
const applications_service_1 = require("./applications.service");
const getLocalUserId = (req) => {
    return req.user?.id ?? null;
};
const createApplicationController = async (req, res) => {
    try {
        const userId = getLocalUserId(req);
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const { companyName, role, jobDescription, source, notes, appliedAt } = req.body;
        if (!companyName || !role || !source) {
            res.status(400).json({
                error: "companyName, role, and source are required",
            });
            return;
        }
        const application = await (0, applications_service_1.createApplication)(userId, {
            companyName,
            role,
            jobDescription,
            source,
            notes,
            appliedAt: appliedAt ? new Date(appliedAt) : undefined,
        });
        res.status(201).json({ application });
    }
    catch (error) {
        res.status(500).json({
            error: error instanceof Error ? error.message : "Internal server error",
        });
    }
};
exports.createApplicationController = createApplicationController;
const getAllApplicationsController = async (req, res) => {
    try {
        const userId = getLocalUserId(req);
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const applications = await (0, applications_service_1.getAllApplications)(userId);
        res.status(200).json({ applications });
    }
    catch (error) {
        res.status(500).json({
            error: error instanceof Error ? error.message : "Internal server error",
        });
    }
};
exports.getAllApplicationsController = getAllApplicationsController;
const getApplicationByIdController = async (req, res) => {
    try {
        const userId = getLocalUserId(req);
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const application = await (0, applications_service_1.getApplicationById)(userId, id);
        res.status(200).json({ application });
    }
    catch (error) {
        if (error instanceof Error && error.message === "Application not found") {
            res.status(404).json({ error: error.message });
            return;
        }
        res.status(500).json({
            error: error instanceof Error ? error.message : "Internal server error",
        });
    }
};
exports.getApplicationByIdController = getApplicationByIdController;
const updateApplicationController = async (req, res) => {
    try {
        const userId = getLocalUserId(req);
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const { companyName, role, jobDescription, source, status, notes, reminderDate, appliedAt, } = req.body;
        const application = await (0, applications_service_1.updateApplication)(userId, id, {
            companyName,
            role,
            jobDescription,
            source,
            status,
            notes,
            reminderDate: reminderDate ? new Date(reminderDate) : undefined,
            appliedAt: appliedAt ? new Date(appliedAt) : undefined,
        });
        res.status(200).json({ application });
    }
    catch (error) {
        if (error instanceof Error && error.message === "Application not found") {
            res.status(404).json({ error: error.message });
            return;
        }
        res.status(500).json({
            error: error instanceof Error ? error.message : "Internal server error",
        });
    }
};
exports.updateApplicationController = updateApplicationController;
const deleteApplicationController = async (req, res) => {
    try {
        const userId = getLocalUserId(req);
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const result = await (0, applications_service_1.deleteApplication)(userId, id);
        res.status(200).json(result);
    }
    catch (error) {
        if (error instanceof Error && error.message === "Application not found") {
            res.status(404).json({ error: error.message });
            return;
        }
        res.status(500).json({
            error: error instanceof Error ? error.message : "Internal server error",
        });
    }
};
exports.deleteApplicationController = deleteApplicationController;
