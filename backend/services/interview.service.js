import axios from "axios";

export const generateInterviewQuestions = async (
  skills,
  experience,
  difficulty
) => {
  try {
    console.log("Calling Interview AI...");

    const prompt = `

You are a senior software engineering interviewer.

Generate TOP 50 technical interview questions.

Candidate skills:

${skills}

Experience:

${experience}

Difficulty:

${difficulty}

Rules:

1. Give exactly 50 questions
2. Mix questions based on skills mentioned
3. Return ONLY valid JSON
4. Do NOT write explanations
5. Do NOT write "Here is JSON"
6. Do NOT use markdown

Return format:

{
  "questions": [
    {
      "category": "React",
      "question": "Explain React Virtual DOM",
      "answer": "Virtual DOM is a lightweight copy of real DOM...",
      "tip": "Explain reconciliation process"
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
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const result =
      response.data.choices[0].message.content;

    console.log("RAW AI RESPONSE:");
    console.log(result);

    /*
      STEP 1 → remove markdown
    */

    let cleanedResult = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    /*
      STEP 2 → extract only JSON block
    */

    const jsonMatch =
      cleanedResult.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      throw new Error(
        "AI did not return valid JSON"
      );
    }

    const finalJson = jsonMatch[0];

    console.log("FINAL JSON:");
    console.log(finalJson);

    /*
      STEP 3 → parse safely
    */

    const parsedData =
      JSON.parse(finalJson);

    return parsedData;

  } catch (error) {
    console.log("INTERVIEW AI ERROR:");

    console.log(
      error.response?.data || error.message
    );

    throw error;
  }
};