import { GoogleGenAI } from "@google/genai";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { SYSTEM_INSTRUCTION } from "../constants";

const clientCache = {
  instance: null as GoogleGenAI | null,
};

const getClient = (apiKey: string) => {
  if (!clientCache.instance) {
    clientCache.instance = new GoogleGenAI({ apiKey });
  }
  return clientCache.instance;
};

type GeminiRequestBody = {
  message?: unknown;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Gemini API key is not configured" });
  }

  const body: GeminiRequestBody = typeof req.body === "string" ? safeParseJSON(req.body) : req.body;
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const client = getClient(apiKey);
    const response = await client.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 },
      },
    });

    const reply = response.text || "I apologize, I couldn't generate a response at this moment.";
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Gemini API Route Error:", error);
    return res.status(500).json({ error: "Failed to get response from Gemini" });
  }
}

function safeParseJSON(input: string): GeminiRequestBody {
  try {
    return JSON.parse(input);
  } catch (error) {
    console.warn("Unable to parse request body as JSON", error);
    return {};
  }
}
