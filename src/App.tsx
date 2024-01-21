import React from 'react';
import ProjectList from './pages/ProjectList';
import SolarSystem from './pages/SolarSystem';
import './index.css'
import AboutMe from './pages/AboutMe';

const App: React.FC = () => {
  return (
    <div>
        <SolarSystem /> 
        <AboutMe />
        <ProjectList />
    </div>
  );
};

export default App;