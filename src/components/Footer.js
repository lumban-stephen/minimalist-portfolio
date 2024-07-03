import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = ({ toggleColorMode }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-customYellow p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-500" />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-blue-500" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl hover:text-blue-500" />
        </a>
      </div>
      <div
        className="w-8 h-8 bg-black rounded-full cursor-pointer"
        onClick={toggleColorMode}
      ></div>
    </footer>
  );
}

export default Footer;