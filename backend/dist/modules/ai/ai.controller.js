"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnswersController = exports.saveAnswersController = exports.interviewPrepController = exports.analyzeResumeController = void 0;
const ai_service_1 = require("./ai.service");
const ai_service_2 = require("./ai.service");
const analyzeResumeController = async (req, res) => {
    try {
        const user = req.user;
        const { applicationId } = req.body;
        if (!applicationId) {
            res.status(400).json({ error: "applicationId is required" });
            return;
        }
        const result = await (0, ai_service_1.analyzeResume)(user.id, applicationId);
        res.status(200).json({ analysis: result });
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
exports.analyzeResumeController = analyzeResumeController;
const interviewPrepController = async (req, res) => {
    try {
        const user = req.user;
        const { applicationId } = req.body;
        if (!applicationId) {
            res.status(400).json({ error: "applicationId is required" });
            return;
        }
        const result = await (0, ai_service_2.generateInterviewPrep)(user.id, applicationId);
        res.status(201).json({ interviewPrep: result });
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
exports.interviewPrepController = interviewPrepController;
const saveAnswersController = async (req, res) => {
    try {
        const user = req.user;
        const { answers } = req.body;
        if (!answers || !Array.isArray(answers) || answers.length === 0) {
            res.status(400).json({ error: "answers array is required" });
            return;
        }
        const result = await (0, ai_service_2.saveAnswers)(user.id, answers);
        res.status(200).json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.saveAnswersController = saveAnswersController;
const getAnswersController = async (req, res) => {
    try {
        const user = req.user;
        const appId = Array.isArray(req.params.appId) ? req.params.appId[0] : req.params.appId;
        const interviews = await (0, ai_service_2.getAnswers)(user.id, appId);
        res.status(200).json({ interviews });
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
exports.getAnswersController = getAnswersController;
