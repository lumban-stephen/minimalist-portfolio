import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import Footer from './components/Footer';
import CTA from './sections/Cta';
import './App.css';
import withFadeIn from './components/withFadeIn';

const HomeWithFadeIn = withFadeIn(Home);
const AboutWithFadeIn = withFadeIn(About);
const EducationWithFadeIn = withFadeIn(Education);

const App = () => {
  const [colorMode, setColorMode] = useState('customYellow');

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'customYellow' ? 'customBlue' : 'customYellow'));
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar colorMode={colorMode} />
      <div className={`flex-grow overflow-x-auto snap-x snap-mandatory ${colorMode}`}>
        <div className="flex h-full">
          <section id="home" className="w-screen flex-shrink-0 snap-start">
            <HomeWithFadeIn colorMode={colorMode} />
          </section>
          <section id="about" className="w-screen flex-shrink-0 snap-start">
            <AboutWithFadeIn colorMode={colorMode} />
          </section>
          <section id="education" className="w-screen flex-shrink-0 snap-start">
            <EducationWithFadeIn colorMode={colorMode} />
          </section>
          <section id="cta" className="w-screen flex-shrink-0 snap-start">
            <CTA colorMode={colorMode} />
          </section>
        </div>
      </div>
      <Footer toggleColorMode={toggleColorMode} colorMode={colorMode} />
    </div>
  );
}

export default App;
