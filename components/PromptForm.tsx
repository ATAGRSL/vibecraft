
import React from 'react';
import { SparklesIcon } from './icons';

interface PromptFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const PromptForm: React.FC<PromptFormProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe a vibe, a feeling, or a place..."
          className="w-full p-4 pr-32 bg-gray-800 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none text-gray-200 placeholder-gray-500"
          rows={3}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center justify-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            'Generating...'
          ) : (
            <>
              <SparklesIcon className="w-5 h-5 mr-2" />
              Generate
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default PromptForm;
