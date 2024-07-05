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
    <div className={`${colorMode} min-h-screen flex flex-col`}>
      <Navbar />
      <div className="flex overflow-x-auto overflow-y-hidden h-full snap-x snap-mandatory">
        <section id="home" className="snap-start w-screen">
          <Home />
        </section>
        <section id="about" className="snap-start w-screen">
          <About />
        </section>
        <section id="education" className="snap-start w-screen">
          <Education />
        </section>
        <section id="education" className="snap-start w-screen">
          <CTA />
        </section>
      </div>
      <Footer toggleColorMode={toggleColorMode} />
    </div>
  );
}

export default App;
