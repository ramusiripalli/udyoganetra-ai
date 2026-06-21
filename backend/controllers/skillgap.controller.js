import { createRequire } from "module";
import { analyzeSkillGap } from "../services/skillgap.service.js";

// CommonJS support for pdf-parse
const require = createRequire(import.meta.url);

const pdfParse = require("pdf-parse");

export const generateSkillGap = async (
  req,
  res
) => {
  try {
    /*
      get form fields
    */

    const {
      targetCompany,
      targetRole,
    } = req.body;

    /*
      validations
    */

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message:
          "Please upload resume PDF",
      });
    }

    if (
      !targetCompany ||
      !targetRole
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter company and role",
      });
    }

    console.log(
      "Resume received for Skill Gap Analysis"
    );

    /*
      extract PDF text
    */

    const pdfData =
      await pdfParse(
        req.file.buffer
      );

    const extractedText =
      pdfData.text;

    /*
      clean resume text
    */

    const cleanedText =
      extractedText
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 12000);

    console.log(
      "Sending Resume to Skill Gap AI..."
    );

    /*
      AI analysis
    */

    const result =
      await analyzeSkillGap(
        cleanedText,
        targetCompany,
        targetRole
      );

    /*
      return response
    */

    return res.status(200).json({
      success: true,
      skillGap: result,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message:
        "Skill Gap Analysis failed",
    });
  }
};