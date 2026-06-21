import { generateInterviewQuestions } from "../services/interview.service.js";

export const generateInterview = async (
  req,
  res
) => {
  try {
    const {
      skills,
      experience,
      difficulty,
    } = req.body;

    if (
      !skills ||
      !experience ||
      !difficulty
    ) {
      return res.status(400).json({
        success: false,
        message: "Fill all fields",
      });
    }

    const result =
      await generateInterviewQuestions(
        skills,
        experience,
        difficulty
      );

    return res.status(200).json({
      success: true,
      interview: result,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Interview generation failed",
    });
  }
};