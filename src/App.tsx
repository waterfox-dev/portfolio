import React from 'react';
import ProjectList from './pages/ProjectList';
import SolarSystem from './pages/SolarSystem';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';

import './index.css'


const App: React.FC = () => {
  return (
    <div>

        <SolarSystem /> 
        <AboutMe />
        <ProjectList />
        <Skills />
    </div>
  );
};

export default App;