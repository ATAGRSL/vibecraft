
import React from 'react';

interface ImageGridProps {
  images: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
          <img
            src={image}
            alt={`Generated moodboard image ${index + 1}`}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
