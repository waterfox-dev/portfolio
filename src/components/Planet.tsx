import React, { useEffect, useState } from 'react';

interface PlanetProps {
  color: string;
  size: number;
  rotationSpeed: number;
  orbitRadius: number;
}

const Planet: React.FC<PlanetProps> = ({ color, size, rotationSpeed, orbitRadius }) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + rotationSpeed) % 360);
    }, 1); 

    return () => clearInterval(interval);
  }, [rotationSpeed]);

  const planetStyle: React.CSSProperties = {
    backgroundColor: color,
    width: `${size}px`,
    height: `${size}px`,
    position: 'absolute',
    top: '50%',
    left: '25%',
    transformOrigin: 'center',
    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${orbitRadius}px)`,
    
};

  return <div className="planet rounded-full" style={planetStyle}></div>;
};

export default Planet;
