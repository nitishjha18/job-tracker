"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = require("./middleware/auth");
const user_routes_1 = __importDefault(require("./modules/user/user.routes"));
const applications_routes_1 = __importDefault(require("./modules/applications/applications.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(auth_1.clerkAuth); // Clerk runs on every request
app.use("/api/user", user_routes_1.default);
app.use("/api/applications", applications_routes_1.default);
// Health check
app.get("/health", (req, res) => {
    res.status(200).json({ message: "Job tracker's server is live" });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
exports.default = app;
