import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-customYellow p-4 flex justify-between items-center z-10">
      <div className="text-4xl font-bold">Stephen Lumban</div>
      <div className="space-x-8 text-2xl">
        <button onClick={() => scrollToSection('home')} className="hover:text-customBlue">Home</button>
        <button onClick={() => scrollToSection('about')} className="hover:text-customBlue">About Me</button>
        <button onClick={() => scrollToSection('education')} className="hover:text-customBlue">Education</button>
        <button onClick={() => scrollToSection('cta')} className="hover:text-customBlue">Hire me</button>
      </div>
    </nav>
  );
}

export default Navbar;