import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-customYellow p-4 flex justify-between items-center">
      <div className="text-4xl font-bold">Stephen Lumban</div>
      <div className="space-x-8 text-2xg">
        <a href="#home" className="hover:text-customBlue">Home</a>
        <a href="#about" className="hover:text-customBlue">About Me</a>
        <a href="#education" className="hover:text-customBlue">Education</a>
        <a href="#hire-me" className="hover:text-customBlue">Hire me</a>
      </div>
    </nav>
  );
}

export default Navbar;
