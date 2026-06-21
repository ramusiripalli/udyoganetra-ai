import { createRequire } from "module";
import { analyzeJobMatch } from "../services/jobmatch.service.js";

// CommonJS support for pdf-parse
const require = createRequire(
  import.meta.url
);

const pdfParse = require(
  "pdf-parse"
);

export const generateJobMatch =
  async (req, res) => {
    try {
      // check file
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message:
            "Please upload resume",
        });
      }

      console.log(
        "Resume received for job match"
      );

      // extract PDF text
      const pdfData =
        await pdfParse(
          req.file.buffer
        );

      const extractedText =
        pdfData.text;

      // clean text
      const cleanedText =
        extractedText
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 12000);

      console.log(
        "Sending Resume to AI..."
      );

      // AI analysis
      const result =
        await analyzeJobMatch(
          cleanedText
        );

      return res.status(200).json({
        success: true,
        jobMatch: result,
      });

    } catch (error) {
      console.log(error);

      return res.status(500).json({
        success: false,
        message:
          "Job Match failed",
      });
    }
  };