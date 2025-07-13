import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';



const App = () => {
  return (
    <>
      <Header />
      
      <HeroSection />
      <Services />
      <Skills />
      <Projects />
      
    </>
  );
};

export default App;
