
import React from 'react';
import type { PaletteColor } from '../types';

interface ColorPaletteProps {
  palette: PaletteColor[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ palette }) => {
  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
  };
  
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {palette.map((color, index) => (
        <div 
          key={index} 
          className="group relative flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => handleCopy(color.hex)}
        >
          <div
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-700 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: color.hex }}
          />
          <div className="text-center">
            <p className="font-semibold text-sm text-gray-300">{color.name}</p>
            <p className="text-xs text-gray-500 uppercase transition-opacity duration-300 opacity-0 group-hover:opacity-100">{color.hex}</p>
          </div>
          <div className="absolute -bottom-8 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Click to copy
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
