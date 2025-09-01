
import { GoogleGenAI, Type } from "@google/genai";
import type { MoodboardData, TextAndPaletteResponse } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const generateTextAndPalette = async (prompt: string): Promise<TextAndPaletteResponse> => {
  const model = "gemini-2.5-flash";
  const result = await ai.models.generateContent({
    model,
    contents: `Based on the following theme, generate a short, evocative description (2-3 sentences) and a 5-color palette that captures the essence of the mood. The theme is: "${prompt}". Provide descriptive names for each color that match the vibe.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          description: {
            type: Type.STRING,
            description: "A short, 2-3 sentence evocative description of the theme."
          },
          palette: {
            type: Type.ARRAY,
            description: "An array of 5 color objects.",
            items: {
              type: Type.OBJECT,
              properties: {
                hex: {
                  type: Type.STRING,
                  description: "The hex color code, e.g., #1A2B3C"
                },
                name: {
                  type: Type.STRING,
                  description: "A descriptive name for the color that fits the theme."
                }
              },
              required: ["hex", "name"],
            }
          }
        },
        required: ["description", "palette"],
      },
    },
  });
  
  const jsonString = result.text.trim();
  return JSON.parse(jsonString) as TextAndPaletteResponse;
};

const generateImages = async (prompt: string): Promise<string[]> => {
  const imagePrompt = `A collection of 4 high-quality, aesthetic, evocative images that visually represent the mood of: "${prompt}". Photographic and artistic style.`;
  const result = await ai.models.generateImages({
    model: 'imagen-4.0-generate-001',
    prompt: imagePrompt,
    config: {
      numberOfImages: 4,
      outputMimeType: 'image/jpeg',
      aspectRatio: '3:4',
    },
  });

  return result.generatedImages.map(img => `data:image/jpeg;base64,${img.image.imageBytes}`);
};

export const generateMoodboard = async (prompt: string): Promise<MoodboardData> => {
  try {
    const [textAndPalette, images] = await Promise.all([
      generateTextAndPalette(prompt),
      generateImages(prompt)
    ]);
    
    return {
      description: textAndPalette.description,
      palette: textAndPalette.palette,
      images: images,
    };
  } catch (error) {
    console.error("Error generating moodboard:", error);
    throw new Error("Failed to generate moodboard from Gemini API.");
  }
};
