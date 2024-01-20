import React from 'react';
import ProjectList from './pages/ProjectList';
import SolarSystem from './pages/SolarSystem';
import './index.css'

const App: React.FC = () => {
  return (
    <div>
        <SolarSystem /> 
        <ProjectList />
    </div>
  );
};

export default App;