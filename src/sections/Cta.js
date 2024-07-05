import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const CallToAction = () => {
  const qualities = ["PASSIONATE", "INNOVATIVE", "DEDICATED", "SKILLED"];
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
        }, 1500); // Wait 1.5 seconds before changing to the next word
      }
    }, 100); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, [qualityIndex, charIndex]);

  return (
    <div className="bg-yellow-200 min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="max-w-2xl">
        <p className="text-xl mb-4">
          If you are looking for a <span className="font-bold">{currentQuality}</span>
        </p>
        <h2 className="text-4xl font-bold mb-6">Software Engineer</h2>
        
        <p className="text-lg mb-8">
          You've come to the right place. Let's connect!
        </p>
        
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-3xl hover:text-blue-600"><FaLinkedin /></a>
          <a href="#" className="text-3xl hover:text-gray-800"><FaGithub /></a>
          <a href="#" className="text-3xl hover:text-blue-800"><FaFacebook /></a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;