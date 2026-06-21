import axios from "axios";

export const generateRoadmapAI = async (
  currentSkills,
  targetRole,
  durationDays
) => {
  try {
    console.log("Calling DeepSeek for roadmap...");

    const prompt = `

You are an expert software engineering mentor.

Create a personalized learning roadmap.

Current Skills:

${currentSkills}

Target Role:

${targetRole}

Study Duration Available:

${durationDays} days

IMPORTANT RULES:

1. Return ONLY valid JSON
2. No explanation
3. No markdown
4. Divide roadmap into phases

Return EXACTLY in this format:

{
  "roadmap": [
    {
      "phase": "Phase 1",
      "title": "Foundation Building",
      "duration": "30 Days",
      "topics": [
        "Arrays",
        "JavaScript Advanced",
        "Problem Solving"
      ]
    },
    {
      "phase": "Phase 2",
      "title": "Frontend Mastery",
      "duration": "30 Days",
      "topics": [
        "React",
        "Redux Toolkit",
        "Performance Optimization"
      ]
    },
    {
      "phase": "Phase 3",
      "title": "Interview Preparation",
      "duration": "30 Days",
      "topics": [
        "System Design",
        "Mock Interviews",
        "Projects"
      ]
    }
  ]
}

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
        temperature: 0.3,
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

    console.log("Raw AI Response:", result);

    // remove markdown if AI sends ```json
    result = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // parse safely
    try {
      return JSON.parse(result);
    } catch (err) {
      console.log("JSON Parse Error");

      return {
        roadmap: [
          {
            phase: "Phase 1",
            title: "Fallback Plan",
            duration: "30 Days",
            topics: [
              "Retry AI generation",
              "Check API response",
            ],
          },
        ],
      };
    }

  } catch (error) {
    console.log(
      "DeepSeek Roadmap Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};