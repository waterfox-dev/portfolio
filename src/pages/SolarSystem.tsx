import React, { useState, useEffect, useRef } from 'react';
import Planet, { PlanetProps } from '../components/Planet';
import projectData from '../data/projects.json';
import { TypeAnimation } from 'react-type-animation';

interface SolarSystemProps { }

const SolarSystem: React.FC<SolarSystemProps> = () => {
    const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
    const [selectedDescription, setSelectedDescription] = useState<string | null>(null);
    const planetName = useRef(null);

    const handlePlanetClick = (planetName: string) => {
        setSelectedPlanet(planetName);
        setSelectedDescription(projectData[planetName as keyof typeof projectData].description);
    };

    return (
        <div className="grid grid-cols-2" id="solar">
            <div className="col-span-1">
                <div className="solar-system bg-gray-900 h-screen p-16">
                    <div className="sun"></div>
                    {Object.entries(projectData).map(([projectName, projectDetails], index) => (
                        <Planet
                            key={projectName}
                            color={projectDetails.color}
                            size={40 + index * 1.1}
                            rotationSpeed={getRandomSpeed()}
                            orbitRadius={100 + index * 80}
                            onPlanetClick={() => handlePlanetClick(projectName)}
                        />
                    ))}
                </div>
            </div>
            <div className="col-span-1 bg-gradient-to-t bg-gray-900 border-gray-800">
                <div>
                    <p className="text-3xl text-gray-100 text-center font-bold font-mono mt-16">My Portfolio.</p>
                    <div className="info-box mt-16 mr-16 text-gray-200">
                        <p className='text-center text-xl mb-16'>
                            Hello there ! I'm Clément Baratin, IT Student and passionate developer. I'm currently studying at the University of Technology of Caen. Click on a planet to discover one of my project.
                        </p>
                        <p id="planetName">
                            <u>PLANET</u> : {selectedPlanet ? selectedPlanet : "NONE"}
                        </p>
                        <p id="planetDescription">
                            <u>DESCRIPTION</u> : {selectedDescription ? selectedDescription : "???"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const getRandomSpeed = (): number => {
    return (Math.random() / 100) + 0.07; 
};

export default SolarSystem;
