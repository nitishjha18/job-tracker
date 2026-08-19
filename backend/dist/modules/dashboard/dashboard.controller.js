"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardStatsController = void 0;
const dashboard_service_1 = require("./dashboard.service");
const getDashboardStatsController = async (req, res) => {
    try {
        const user = req.user;
        const stats = await (0, dashboard_service_1.getDashboardStats)(user.id);
        res.status(200).json({ stats });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getDashboardStatsController = getDashboardStatsController;
