"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteApplicationController = exports.updateApplicationController = exports.getApplicationByIdController = exports.getAllApplicationsController = exports.createApplicationController = void 0;
const applications_service_1 = require("./applications.service");
const getLocalUserId = (req) => {
    return req.user.id;
};
const createApplicationController = async (req, res) => {
    try {
        const userId = getLocalUserId(req);
        const { companyName, jobTitle, jobDescription, source, notes, dateApplied } = req.body;
        if (!companyName || !jobTitle || !source) {
            res.status(400).json({
                error: "companyName, jobTitle, and source are required",
            });
            return;
        }
        const application = await (0, applications_service_1.createApplication)(userId, {
            companyName,
            jobTitle,
            jobDescription,
            source,
            notes,
            dateApplied: dateApplied ? new Date(dateApplied) : undefined,
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
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const { companyName, jobTitle, jobDescription, source, status, notes, dateApplied, } = req.body;
        const application = await (0, applications_service_1.updateApplication)(userId, id, {
            companyName,
            jobTitle,
            jobDescription,
            source,
            status,
            notes,
            dateApplied: dateApplied ? new Date(dateApplied) : undefined,
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
