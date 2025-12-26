import { GoogleGenAI } from "@google/genai";

// 仅保留初始化逻辑，暂不导出未使用的业务函数以精简代码
export const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
