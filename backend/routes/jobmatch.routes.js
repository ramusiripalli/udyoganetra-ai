import express from "express";
import multer from "multer";

import { generateJobMatch } from "../controllers/jobmatch.controller.js";

const router = express.Router();

/*
  multer memory storage
  (same like resume analyzer)
*/
const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

// POST route
router.post(
  "/analyze",
  upload.single("resume"),
  generateJobMatch
);

export default router;