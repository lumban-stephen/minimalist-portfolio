import React from 'react';
import avatar from '../assets/avatar.png'; // Adjust the path based on your actual file location
import nature from '../assets/nature.png'; // Adjust the path based on your actual file location

const About = () => {
  return (
    <div className="min-h-screen bg-customYellow p-4 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
        {/* First Row */}
        <div className="flex justify-center items-center">
          <img
            src={avatar}
            alt="Stephen"
            className="w-283 h-385 md:w-48 md:h-48 rounded-full mb-4"
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-lg md:text-xl text-center">
            When I'm not coding, I love connecting with nature through hiking and immersing myself in the tranquility of the outdoors. Music is another passion of mine, providing a perfect balance to my technical pursuits.
          </p>
        </div>

        {/* Second Row */}
        <div className="flex justify-center items-center">
          <p className="text-lg md:text-xl text-center">
            Hi, I’m Stephen, an aspiring software engineer with a passion for creating innovative and efficient software solutions. Currently, I'm a 4th year Computer Science student at University of Cebu, where I am honing my skills in various programming languages and technologies.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={nature}
            alt="Nature"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4"
          />
        </div>
      </div>
    </div>
  );
}

export default About;