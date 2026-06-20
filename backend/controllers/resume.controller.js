// backend/controllers/resume.controller.js

import { createRequire } from "module";

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

    console.log("Extracted Text:", extractedText);

    const cleanedText = extractedText
  .replace(/\s+/g, " ")
  .trim()
  .slice(0, 12000);   // limit text length

    // send response temporarily
    return res.status(200).json({
      success: true,
      message: "Resume text extracted successfully",
      cleanedText,
    });

  } catch (error) {
    console.error("PDF Parse Error:", error);

    return res.status(500).json({
      success: false,
      message: "Error parsing PDF",
      error: error.message,
    });
  }
};