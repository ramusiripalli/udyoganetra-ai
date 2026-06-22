import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import resumeRoutes from "./routes/resume.routes.js";
import roadmapRoutes from "./routes/roadmap.routes.js";
import interviewRoutes from "./routes/interview.routes.js";
import jobMatchRoutes from "./routes/jobmatch.routes.js";
import skillGapRoutes from "./routes/skillgap.routes.js";

dotenv.config();

const app = express();

// database connection
connectDB();

// middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://udyoganetra-ai.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use('/api/interview',interviewRoutes);
app.use("/api/jobmatch", jobMatchRoutes);
app.use("/api/skillgap", skillGapRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});