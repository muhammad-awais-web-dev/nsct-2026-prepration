import { GoogleGenAI, Type } from "@google/genai";
import { Question } from "./quizData";

export async function generateQuestions(category: string, count: number = 5): Promise<Question[]> {
  const apiKey = localStorage.getItem('gemini_api_key');
  
  if (!apiKey) {
    throw new Error("API key not found. Please set your Gemini API key in the settings.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `Generate ${count} high-quality multiple-choice questions for the NSCT 2026 (National Skills Competency Test) in the category: "${category}". 
  
  Each question must have:
  1. A clear, challenging question text.
  2. Exactly 4 options.
  3. Exactly one correct option.
  4. A detailed explanation for the correct answer.
  5. A specific reason why each incorrect answer is wrong.
  
  The tone should be professional and technical. Focus on core concepts, industry best practices, and practical scenarios.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              q: { type: Type.STRING, description: "The question text" },
              options: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    text: { type: Type.STRING, description: "The option text" },
                    isCorrect: { type: Type.BOOLEAN, description: "Whether this is the correct answer" },
                    feedback: { type: Type.STRING, description: "Detailed explanation or reason why this is correct/incorrect" }
                  },
                  required: ["text", "isCorrect", "feedback"]
                }
              }
            },
            required: ["q", "options"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini");
    
    return JSON.parse(text) as Question[];
  } catch (error: any) {
    console.error("Error generating questions:", error);
    throw new Error(error.message || "Failed to generate questions from AI.");
  }
}
