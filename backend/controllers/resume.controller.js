// backend/controllers/resume.controller.js

import { createRequire } from "module";
import { analyzeResumeWithAI } from "../services/ai.service.js";
// CommonJS package support inside ES Module project
const require = createRequire(import.meta.url);

// import pdf-parse using require
const pdfParse = require("pdf-parse");

export const analyzeResume = async (req, res) => {
  try {
    // check if file uploaded
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No resume uploaded",
      });
    }

    console.log("File received:", req.file.originalname);

    // parse PDF buffer
    const pdfData = await pdfParse(req.file.buffer);

    // extracted text
    const extractedText = pdfData.text;

    //console.log("Extracted Text:", extractedText);

    const cleanedText = extractedText
  .replace(/\s+/g, " ")
  .trim()
  .slice(0, 2500);   // limit text length
 console.log("Sending to Gemini...");

  const aiResult = await analyzeResumeWithAI(
      cleanedText
    );

    return res.status(200).json({
      success: true,
       analysis: aiResult,
    });

  } catch (error) {
    console.error("PDF Parse Error:", error);

    return res.status(500).json({
      success: false,
      message: "Resume analysis failed",
      error: error.message,
    });
  }
};