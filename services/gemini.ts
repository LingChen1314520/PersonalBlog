
import { GoogleGenAI } from "@google/genai";

// Use process.env.API_KEY directly for initialization as per @google/genai guidelines
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const summarizeArticle = async (content: string) => {
  try {
    const ai = getAI();
    // Using gemini-3-flash-preview for basic text summarization tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `请用简明扼要的几个要点总结以下文章内容，请使用中文回答： \n\n${content}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });
    // Accessing the .text property directly as recommended in the SDK documentation
    return response.text;
  } catch (error) {
    console.error("AI Summarization failed:", error);
    return "无法生成摘要。请检查网络连接或稍后重试。";
  }
};

export const chatWithAssistant = async (history: { role: 'user' | 'model', parts: { text: string }[] }[], message: string) => {
  try {
    const ai = getAI();
    // Initializing chat with history to maintain context
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      history: history,
      config: {
        systemInstruction: "你是 Nova，一个个人作品集网站的智能助手。你负责帮助访客了解作者的文章、项目和技能。请保持回答简洁、专业且友好。请始终使用中文交流。",
      }
    });
    
    // Using sendMessage with the required message parameter as per Chat guidelines
    const result = await chat.sendMessage({ message });
    // Accessing the .text property directly from GenerateContentResponse
    return result.text;
  } catch (error) {
    console.error("AI Chat failed:", error);
    return "我的大脑连接似乎出了一点小状况，请稍后再试！";
  }
};
