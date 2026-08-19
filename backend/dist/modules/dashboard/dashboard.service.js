"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardStats = void 0;
const db_1 = __importDefault(require("../../config/db"));
const client_1 = require("@prisma/client");
const getDashboardStats = async (userId) => {
    const applications = await db_1.default.application.findMany({
        where: { userId }
    });
    const total = applications.length;
    if (total === 0) {
        return {
            totalApplications: 0,
            responseRate: 0,
            rejectionRate: 0,
            bestSource: null,
            staleApplications: 0
        };
    }
    const responded = applications.filter((app) => app.status !== client_1.ApplicationStatus.APPLIED).length;
    const rejected = applications.filter((app) => app.status === client_1.ApplicationStatus.REJECTED).length;
    const responseRate = Math.round((responded / total) * 100);
    const rejectionRate = Math.round((rejected / total) * 100);
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
    const staleApplications = applications.filter((app) => app.status === client_1.ApplicationStatus.APPLIED &&
        new Date(app.dateApplied) < fourteenDaysAgo).length;
    const sourceMap = {};
    applications
        .filter((app) => app.status !== client_1.ApplicationStatus.APPLIED)
        .forEach((app) => {
        sourceMap[app.source] = (sourceMap[app.source] || 0) + 1;
    });
    const bestSource = Object.keys(sourceMap).length > 0
        ? Object.entries(sourceMap).sort((a, b) => b[1] - a[1])[0][0]
        : null;
    return {
        totalApplications: total,
        responseRate,
        rejectionRate,
        bestSource,
        staleApplications
    };
};
exports.getDashboardStats = getDashboardStats;
