import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

async function askAI(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.o-flash",
      contents: prompt,
    });

    return response.text;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

const aiService = {
  analyzeIdea(project) {
  return askAI(`
You are an expert Hackathon Mentor, Startup Advisor and SIH Judge.

Analyze this hackathon project.

Title:
${project.title}

Description:
${project.description}

Return ONLY valid JSON.

{
  "innovationScore": 0,
  "feasibilityScore": 0,
  "marketPotential": 0,
  "difficulty": "Easy",
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "risks": [],
  "techStack": [],
  "improvements": [],
  "futureScope": [],
  "judgesFeedback": ""
}

Rules:

- innovationScore must be between 1 and 10
- feasibilityScore must be between 1 and 10
- marketPotential must be between 1 and 10
- difficulty must be Easy, Medium or Hard
- strengths must contain exactly 5 points
- weaknesses must contain exactly 5 points
- risks must contain exactly 5 points
- techStack must contain exactly 8 technologies
- improvements must contain exactly 5 points
- futureScope must contain exactly 5 points
- summary should be around 150 words
- judgesFeedback should be around 100 words

Return ONLY JSON.

Do not write markdown.

Do not use code fences.

Do not explain anything outside JSON.
`);
},

  generateRoadmap(project) {
    return askAI(`
Create a complete development roadmap.

Project:
${project.title}

Description:
${project.description}

Return:

Week 1

Week 2

Week 3

Week 4

Week 5

Week 6
`);
  },

  generateRiskReport(project) {
    return askAI(`
Analyze risks for this project.

${project.title}

Return:

High Risks

Medium Risks

Low Risks

Mitigation Plan
`);
  },

  generateChecklist(project) {
    return askAI(`
Generate a hackathon checklist for

${project.title}

Include

Development

Testing

Documentation

Presentation

Deployment
`);
  },

  generatePitch(project) {
    return askAI(`
Generate

60 second pitch

3 minute pitch

5 minute pitch

for

${project.title}
`);
  },

  chat(message) {
    return askAI(message);
  },
};

export default aiService;