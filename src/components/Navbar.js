import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-customYellow">
      <div className="text-xl font-bold">Stephen Lumban</div>
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:text-blue-500">About Me</a></li>
        <li><a href="#education" className="hover:text-blue-500">Education</a></li>
        <li><a href="#hireme" className="hover:text-blue-500">Hire Me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;