import axios from "axios";

export const analyzeResumeWithAI = async (resumeText) => {
  try {
    console.log("Calling DeepSeek AI...");

    const prompt = `
You are a strict ATS Resume Analyzer.

Analyze this software engineer resume.

Rules:

1. Return ONLY valid JSON
2. No explanation
3. No markdown
4. No code blocks

Use exact format:

{
  "atsScore": 85,
  "strengths": ["point1", "point2", "point3"],
  "weaknesses": ["point1", "point2", "point3"],
  "suggestions": ["point1", "point2", "point3"]
}

Resume:

${resumeText}
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-chat",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 20000,
      }
    );

    let result =
      response.data.choices[0].message.content;

    result = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    try {
      return JSON.parse(result);
    } catch {
      return {
        atsScore: 70,
        strengths: ["Resume analyzed"],
        weaknesses: ["AI formatting issue"],
        suggestions: ["Please retry analysis"],
      };
    }
  } catch (error) {
    console.error(
      "DeepSeek Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};