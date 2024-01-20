import React, { useState, useEffect } from 'react';
import Planet, { PlanetProps } from '../components/Planet'; 
import projectData from '../data/projects.json';
import { TypeAnimation } from 'react-type-animation';

interface SolarSystemProps {}

const SolarSystem: React.FC<SolarSystemProps> = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [selectedDescription , setSelectedDescription] = useState<string | null>(null);

  const handlePlanetClick = (planetName: string) => {
    console.log(`Clicked on ${planetName}`);
    setSelectedPlanet(planetName);
    setSelectedDescription(projectData[planetName as keyof typeof projectData].description);
  };

  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1">
        <div className="solar-system bg-gray-900 h-screen p-16">
          <div className="sun"></div>
          {Object.entries(projectData).map(([projectName, projectDetails], index) => (
            <Planet
              key={projectName}
              color={projectDetails.color}
              size={40 + index * 10}
              rotationSpeed={getRandomSpeed()}
              orbitRadius={150 + index * 50}
              onPlanetClick={() => handlePlanetClick(projectName)}
            />
          ))}
        </div>
      </div>
      <div className="col-span-1 bg-gradient-to-t bg-gray-900 border-gray-800">
        <div>
          <p className="text-3xl text-gray-100 text-center font-bold font-mono font-bold mt-16">My Portfolio.</p>
          <div className="info-box mt-16 mr-16">
            <p id="planetName" className='text-gray-200'>
                <u>PLANET</u> : {selectedPlanet ? selectedPlanet : "NONE"}
            </p>
            <p id="planetDescription" className='text-gray-200'>
                <u>DESCRIPTION</u> : {selectedDescription ? selectedDescription : "???"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const getRandomSpeed = (): number => {
  return (Math.random() / 5) + 0.1;
};

export default SolarSystem;
