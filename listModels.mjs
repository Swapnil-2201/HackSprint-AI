import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.VITE_GEMINI_API_KEY,
});

async function main() {
  const models = await ai.models.list();

  for await (const model of models) {
    console.log(model.name);
  }
}

main().catch(console.error);