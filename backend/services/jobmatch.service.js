import axios from "axios";

export const analyzeJobMatch = async (
  resumeText
) => {
  try {
    console.log(
      "Calling AI Job Match..."
    );

    const prompt = `

You are an expert technical recruiter.

Analyze this software engineer resume.

Find best matching jobs.

Return ONLY valid JSON.

Do NOT write explanation.

Format:

{
  "matchedJobs": [
    {
      "company": "Google",
      "role": "Frontend Engineer",
      "matchScore": 92,
      "reason": "Strong React and JavaScript skills"
    },
    {
      "company": "Razorpay",
      "role": "Full Stack Developer",
      "matchScore": 88,
      "reason": "Good MERN stack experience"
    }
  ],

  "missingSkills": [
    "Docker",
    "System Design",
    "Redis"
  ],

  "careerAdvice": [
    "Improve DSA",
    "Learn TypeScript",
    "Build scalable backend projects"
  ]
}

Resume:

${resumeText}

`;

    const response = await axios.post(
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
      "RAW JOB MATCH RESPONSE:"
    );
    console.log(result);

    // cleanup
    let cleanedResult = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // extract JSON
    const jsonMatch =
      cleanedResult.match(
        /\{[\s\S]*\}/
      );

    if (!jsonMatch) {
      throw new Error(
        "AI did not return valid JSON"
      );
    }

    const finalJson =
      jsonMatch[0];

    console.log(
      "FINAL JOB JSON:"
    );

    console.log(finalJson);

    return JSON.parse(
      finalJson
    );

  } catch (error) {
    console.log(
      "JOB MATCH ERROR:"
    );

    console.log(
      error.response?.data ||
        error.message
    );

    throw error;
  }
};