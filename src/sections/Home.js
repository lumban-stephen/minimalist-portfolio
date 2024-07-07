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
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 origin-center">
        <p className="text-gray-700 text-base md:text-lg font-semibold whitespace-nowrap p-4">
          You may use arrow keys for navigation
        </p>
      </div>
    </div>
  );
}

export default Home;