
import React, { useState, useEffect } from 'react';

const loadingMessages = [
  "Dreaming up visuals...",
  "Mixing digital paints...",
  "Consulting the color spirits...",
  "Weaving pixels into art...",
  "Capturing the essence of your vibe...",
  "This might take a moment, great art needs patience!"
];

const LoadingSpinner: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="relative w-16 h-16">
        <div className="absolute border-4 border-t-4 border-gray-600 border-t-purple-500 rounded-full w-full h-full animate-spin"></div>
        <div className="absolute border-4 border-t-4 border-gray-600 border-t-pink-500 rounded-full w-full h-full animate-spin" style={{ animationDelay: '0.2s' }}></div>
      </div>
      <p className="text-lg text-gray-300 transition-opacity duration-500">
        {loadingMessages[messageIndex]}
      </p>
    </div>
  );
};

export default LoadingSpinner;
