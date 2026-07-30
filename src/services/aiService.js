import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error(
    "VITE_GEMINI_API_KEY is missing. Check your .env file and restart Vite."
  );
}

const ai = new GoogleGenAI({
  apiKey,
});

// Change this if needed.
const MODEL = "models/gemini-3.5-flash";

console.log("MODEL USED:", MODEL);

async function askAI(prompt) {
  try {
    console.log("Using model:", MODEL);

    const response = await ai.models.generateContent({
      model: "models/gemini-3.5-flash",
      contents: prompt,
    });

    let text = "";

    if (typeof response.text === "function") {
      text = response.text();
    } else if (typeof response.text === "string") {
      text = response.text;
    } else if (
      response.candidates &&
      response.candidates.length > 0 &&
      response.candidates[0].content?.parts
    ) {
      text = response.candidates[0].content.parts
        .map((part) => part.text || "")
        .join("");
    }

    text = text
      .replace(/^```json/i, "")
      .replace(/^```/i, "")
      .replace(/```$/i, "")
      .trim();

    return text;
  } catch (error) {
    console.error("Gemini Error:", error);

    if (error?.status === 404) {
      throw new Error(
        "Selected Gemini model was not found. Try another model."
      );
    }

    if (error?.status === 429) {
      throw new Error(
        "Gemini API quota exceeded. Please try again later."
      );
    }

    throw error;
  }
}

const aiService = {
  async analyzeIdea(project) {
    const prompt = `
You are an expert Startup Mentor, SIH Judge, and Hackathon Evaluator.

Analyze this project.

Title:
${project.title}

Description:
${project.description}

Return ONLY valid JSON.

{
  "innovationScore":0,
  "feasibilityScore":0,
  "marketPotential":0,
  "difficulty":"",
  "summary":"",
  "strengths":[],
  "weaknesses":[],
  "risks":[],
  "techStack":[],
  "improvements":[],
  "futureScope":[],
  "judgesFeedback":""
}

Rules:

innovationScore: 1-10
feasibilityScore: 1-10
marketPotential: 1-10
difficulty: Easy, Medium or Hard

strengths: exactly 5 items
weaknesses: exactly 5 items
risks: exactly 5 items
techStack: exactly 8 technologies
improvements: exactly 5 items
futureScope: exactly 5 items

Return ONLY JSON.
`;

    const result = await askAI(prompt);

    try {
      return JSON.parse(result);
    } catch {
      console.error(result);
      throw new Error("Gemini returned invalid JSON.");
    }
  },

  async generateRoadmap(project) {
    return askAI(`
Create a detailed 6-week development roadmap.

Project:
${project.title}

Description:
${project.description}
`);
  },

  async generateRiskReport(project) {
    return askAI(`
Generate a complete project risk report.

Project:
${project.title}

Description:
${project.description}

Include:

High Risks

Medium Risks

Low Risks

Mitigation Plan
`);
  },

  async generateChecklist(project) {
    return askAI(`
Generate a hackathon checklist.

Project:
${project.title}

Include:

Development

Testing

Documentation

Presentation

Deployment
`);
  },

  async generatePitch(project) {
    return askAI(`
Generate:

1. 60-second pitch

2. 3-minute pitch

3. 5-minute pitch

Project:
${project.title}

Description:
${project.description}
`);
  },

  async chat(message) {
    return askAI(message);
  },
};

export default aiService;