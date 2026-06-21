import express from "express";
import multer from "multer";

import { generateSkillGap } from "../controllers/skillgap.controller.js";

const router = express.Router();

/*
  multer memory storage
  same as resume + jobmatch
*/

const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

/*
  POST route
*/

router.post(
  "/analyze",
  upload.single("resume"),
  generateSkillGap
);

export default router;