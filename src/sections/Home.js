import React, { useState } from 'react';

const Home = ({ colorMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-customYellow section relative">
      <div className="text-center">
        <p className="text-2xl md:text-3xl italic text-gray-700 mb-4">Hi I'm <span className="font-bold">Stephen</span>,</p>
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
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 origin-center flex flex-col items-center">
        <p className="text-gray-700 text-base md:text-lg font-semibold whitespace-nowrap p-4">
          You may use arrow keys for navigation
        </p>
        <div className="mt-2 flex">
          <kbd class="inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
            <path d="M9.207 1A2 2 0 0 0 6.38 1L.793 6.586A2 2 0 0 0 2.207 10H13.38a2 2 0 0 0 1.414-3.414L9.207 1Z"/>
            </svg>
            <span class="sr-only">Arrow key up</span>
          </kbd>
          <kbd class="inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
            </svg>
            <span class="sr-only">Arrow key down</span>
          </kbd>
        </div>
      </div>
    </div>
  );
}

export default Home;
