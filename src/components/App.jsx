import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Education from './Education/Education';
import WorkEx from './WorkEx/WorkEx';
import Skills from './Skills/Skills';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData, educationData, workexData,skillsData } from '../mock/data';

function App() {
  const header=useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [education, setEducation] = useState([]);
  const [workex, setWorkex] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setEducation([ ...educationData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setWorkex([...workexData]);
	setSkills([ ...skillsData ]);
  }, []);

  return (
    <PortfolioProvider value={{ header, hero, about, skills, education, workex, projects, contact, footer }}>
      <Header />
	  <Hero />
      <About />
	  <Skills />
      <Education />
      <WorkEx />
      <Projects />     
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
