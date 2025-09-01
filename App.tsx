
import React, { useState, useCallback } from 'react';
import type { MoodboardData } from './types';
import { generateMoodboard } from './services/geminiService';
import Header from './components/Header';
import PromptForm from './components/PromptForm';
import MoodboardDisplay from './components/MoodboardDisplay';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [moodboardData, setMoodboardData] = useState<MoodboardData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Please enter a description for your vibe.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setMoodboardData(null);

    try {
      const data = await generateMoodboard(prompt);
      setMoodboardData(data);
    } catch (err) {
      console.error(err);
      setError('Failed to generate moodboard. The model may be unavailable or the request was filtered. Please try again with a different prompt.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  const initialMessage = (
    <div className="text-center text-gray-400 mt-16 animate-fade-in">
      <h2 className="text-2xl font-semibold">Describe a Vibe, Create a World</h2>
      <p className="mt-2 max-w-xl mx-auto">Enter a concept like "a lonely cyberpunk city in the rain" or "a serene magical forest at dawn" to begin.</p>
    </div>
  );

  const errorMessage = error && (
    <div className="text-center text-red-400 bg-red-900/20 p-4 rounded-lg mt-8 animate-fade-in">
      <p className="font-semibold">An Error Occurred</p>
      <p>{error}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <Header />
        <main>
          <PromptForm 
            prompt={prompt} 
            setPrompt={setPrompt} 
            onSubmit={handleGenerate} 
            isLoading={isLoading} 
          />
          <div className="mt-8">
            {isLoading && <LoadingSpinner />}
            {errorMessage}
            {!isLoading && !moodboardData && !error && initialMessage}
            {moodboardData && <MoodboardDisplay data={moodboardData} />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
