import React from 'react';
import Planet from '../components/Planet';
import projectData from '../data/projects.json';

const SolarSystem: React.FC = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <div className="solar-system bg-gray-900 h-screen p-16">
                    <div className="sun"></div>
                    {Object.entries(projectData).map(([projectName, projectDetails], index) => (
                        <Planet
                            key={projectName}
                            color={projectDetails.color}
                            size={20 + index * 10}
                            rotationSpeed={getRandomSpeed()}
                            orbitRadius={90 + index * 50}
                        />
                    ))}
                </div>
            </div>
            <div className="col-span-1 bg-gradient-to-t bg-gray-900 border-gray border-2 border-gray-800">
                <p className="text-3xl text-gray-100 text-center font-bold font-mono font-bold mt-16">My Portfolio.</p>
            </div>
        </div>
    );
};

const getRandomSpeed = () => {
    return (Math.random() / 5) + 0.1;
};


export default SolarSystem;
