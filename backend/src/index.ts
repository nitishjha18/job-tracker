import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { clerkAuth } from "./middleware/auth";
import userRoutes from "./modules/user/user.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(clerkAuth); // Clerk runs on every request
app.use("/api/user", userRoutes);
// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Job tracker's server is live" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
