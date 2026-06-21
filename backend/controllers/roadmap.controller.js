import { generateRoadmapAI } from "../services/roadmap.service.js";

export const generateRoadmap = async (req, res) => {
  try {
    // get data from frontend
    const {
      currentSkills,
      targetRole,
      durationDays,
    } = req.body;

    // validation
    if (
      !currentSkills ||
      !targetRole ||
      !durationDays
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    console.log("Generating roadmap...");

    // call AI
    const roadmap = await generateRoadmapAI(
      currentSkills,
      targetRole,
      durationDays
    );

    // send response
    return res.status(200).json({
      success: true,
      message: "Roadmap generated successfully",
      roadmap,
    });

  } catch (error) {
    console.log("Roadmap Error:", error);

    return res.status(500).json({
      success: false,
      message: "Roadmap generation failed",
      error: error.message,
    });
  }
};