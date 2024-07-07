import React, { useState } from 'react';
import useTypewriter from '../hooks/useTypewriter';

const Home = ({ colorMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { displayedText, isTypingComplete } = useTypewriter("Hi I'm Stephen", 100, 500);

  return (
    <div className={`min-h-screen w-screen flex items-center justify-center ${colorMode} section relative`}>
      <div className="text-center">
        <p className="text-2xl md:text-3xl italic text-gray-700 mb-4">
          Hi I'm <span className="font-bold text-customBlue">{displayedText.slice(7)}</span>
          <span className="animate-blink">|</span>
        </p>
        <div
          className="cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className={`text-5xl md:text-7xl font-bold transition-colors duration-300 ${isHovered ? 'text-white' : ''}`}>
            Aspiring Software
          </p>
          <p className={`text-5xl md:text-7xl font-bold transition-colors duration-300 ${isHovered ? 'text-white' : ''}`}>
            Engineer
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 origin-center flex flex-col items-center">
        <p className="text-gray-700 text-base md:text-lg font-semibold whitespace-nowrap p-4">
          You may use arrow keys for navigation
        </p>
        <div className="mt-2 flex">
        <kbd class="rtl:rotate-180 inline-flex items-center me-1  px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
          <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
            <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"/>
          </svg>
          <span class="sr-only">Arrow key left</span>
        </kbd>
        <kbd class="rtl:rotate-180 inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
              <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"/>
            </svg>
            <span class="sr-only">Arrow key right</span>
          </kbd>
        </div>
      </div>
    </div>
  );
}

export default Home;
