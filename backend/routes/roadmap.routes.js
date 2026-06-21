import express from "express";
import { generateRoadmap } from "../controllers/roadmap.controller.js";

const router = express.Router();

// POST → generate roadmap
router.post("/generate", generateRoadmap);

export default router;