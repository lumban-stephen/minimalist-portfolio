import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const CTA = ({ colorMode }) => {
  const qualities = ["a PASSIONATE", "an INNOVATIVE", "a DEDICATED", "a SKILLED"];
  const [currentQuality, setCurrentQuality] = useState("");
  const [qualityIndex, setQualityIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < qualities[qualityIndex].length) {
        setCurrentQuality(prev => prev + qualities[qualityIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentQuality("");
          setCharIndex(0);
          setQualityIndex((qualityIndex + 1) % qualities.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [qualityIndex, charIndex]);

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-customYellow section">
      <div className="text-center max-w-2xl">
        <p className="text-2xl md:text-3xl mb-4">
          Are you looking for <span className="font-bold">{currentQuality}</span>
        </p>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Software Engineer</h2>
        
        <p className="text-xl md:text-2xl mb-8">
          You've come to the right place. Let's connect!
        </p>
        
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/lumbanstephen/" className="text-4xl hover:text-blue-600 transition-colors duration-300"><FaLinkedin /></a>
          <a href="https://github.com/lumban-stephen" className="text-4xl hover:text-gray-800 transition-colors duration-300"><FaGithub /></a>
          <a href="https://www.facebook.com/lmbnstpn" className="text-4xl hover:text-blue-800 transition-colors duration-300"><FaFacebook /></a>
        </div>
      </div>
    </div>
  );
};

export default CTA;