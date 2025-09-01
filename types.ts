
export interface PaletteColor {
  hex: string;
  name: string;
}

export interface MoodboardData {
  description: string;
  palette: PaletteColor[];
  images: string[];
}

// Type for the structured JSON response from Gemini
export interface TextAndPaletteResponse {
  description: string;
  palette: PaletteColor[];
}
