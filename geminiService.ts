
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCarRecommendation = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User wants to know about cars in our showroom. We sell Honda (City, Elevate, Amaze) and Kia (Seltos, Sonet, EV6).
      User Query: "${query}"
      Please provide a brief, professional, and helpful response acting as a "Premium Car Showroom Assistant". 
      Highlight specific car features or pricing based on their query if relevant.`,
      config: {
        systemInstruction: "You are a professional car showroom assistant for 'Premium Car Showroom'. You are knowledgeable about Honda and Kia cars. Keep your tone luxury and helpful.",
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Assistant Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. How else can I assist you with our Honda and Kia collection?";
  }
};
