import axios from "axios";

export const analyzeSkillGap =
  async (
    resumeText,
    targetCompany,
    targetRole
  ) => {
    try {
      console.log(
        "Calling Skill Gap AI..."
      );

      const prompt = `

You are an expert technical recruiter.

Analyze this software engineer resume.

Candidate wants:

Company:

${targetCompany}

Target Role:

${targetRole}

Compare candidate skills with industry expectations.

Return ONLY valid JSON.

Do not write explanation.

Format:

{
  "readinessScore": 68,

  "existingSkills": [
    "React",
    "JavaScript",
    "Node.js"
  ],

  "missingSkills": [
    "Docker",
    "Redis",
    "System Design",
    "AWS"
  ],

  "priorityLearning": [
    "Advanced DSA",
    "System Design",
    "Docker",
    "Cloud AWS"
  ]
}

Resume:

${resumeText}

`;

      const response =
        await axios.post(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            model:
              "deepseek/deepseek-chat",
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
              "Content-Type":
                "application/json",
            },
          }
        );

      const result =
        response.data.choices[0]
          .message.content;

      console.log(
        "RAW SKILL GAP RESPONSE:"
      );

      console.log(result);

      // cleanup
      let cleanedResult =
        result
          .replace(
            /```json/g,
            ""
          )
          .replace(
            /```/g,
            ""
          )
          .trim();

      const jsonMatch =
        cleanedResult.match(
          /\{[\s\S]*\}/
        );

      if (!jsonMatch) {
        throw new Error(
          "Invalid AI JSON"
        );
      }

      const finalJson =
        jsonMatch[0];

      return JSON.parse(
        finalJson
      );

    } catch (error) {
      console.log(
        "SKILL GAP ERROR:"
      );

      console.log(
        error.response?.data ||
          error.message
      );

      throw error;
    }
  };