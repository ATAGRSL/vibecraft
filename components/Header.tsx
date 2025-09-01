
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-6 md:py-10">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          VibeCraft AI
        </span>
      </h1>
      <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
        AI-Powered Moodboard Generator
      </p>
    </header>
  );
};

export default Header;
