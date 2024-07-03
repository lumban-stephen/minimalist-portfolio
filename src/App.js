import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './sections/About';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [colorMode, setColorMode] = useState('customYellow');

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'customYellow' ? 'customBlue' : 'customYellow'));
  };

  return (
    <div className={`${colorMode} flex-col`}>
      <Navbar />
      <div className="flex overflow-x-auto overflow-y-hidden h-full">
        <About />
        {/* Add more sections here if needed */}
      </div>
      <Footer toggleColorMode={toggleColorMode} />
    </div>
  );
}

export default App;