
import React from 'react';
import type { MoodboardData } from '../types';
import ColorPalette from './ColorPalette';
import ImageGrid from './ImageGrid';

interface MoodboardDisplayProps {
  data: MoodboardData;
}

const MoodboardDisplay: React.FC<MoodboardDisplayProps> = ({ data }) => {
  return (
    <div className="space-y-12 animate-fade-in-up">
      <div className="text-center max-w-3xl mx-auto p-6 bg-gray-800/50 rounded-lg">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-400 text-transparent bg-clip-text mb-4">The Vibe</h2>
        <p className="text-gray-300 leading-relaxed">{data.description}</p>
      </div>
      
      <div>
        <h2 className="text-center text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-400 text-transparent bg-clip-text mb-6">Color Palette</h2>
        <ColorPalette palette={data.palette} />
      </div>

      <div>
        <h2 className="text-center text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-400 text-transparent bg-clip-text mb-6">Image Gallery</h2>
        <ImageGrid images={data.images} />
      </div>
    </div>
  );
};

export default MoodboardDisplay;
