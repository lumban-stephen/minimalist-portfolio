import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import Footer from './components/Footer';
import CTA from './sections/Cta';
import './App.css';

const App = () => {
  const [colorMode, setColorMode] = useState('customYellow');

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'customYellow' ? 'customBlue' : 'customYellow'));
  };

  return (
    <div className={`${colorMode} h-screen flex flex-col`}>
      <Navbar />
      <div className="flex-grow overflow-x-auto">
        <div className="flex h-full">
          <section id="home" className="w-screen flex-shrink-0">
            <Home />
          </section>
          <section id="about" className="w-screen flex-shrink-0">
            <About />
          </section>
          <section id="education" className="w-screen flex-shrink-0">
            <Education />
          </section>
          <section id="cta" className="w-screen flex-shrink-0">
            <CTA />
          </section>
        </div>
      </div>
      <Footer toggleColorMode={toggleColorMode} />
    </div>
  );
}

export default App;