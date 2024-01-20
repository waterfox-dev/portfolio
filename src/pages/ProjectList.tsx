import React from 'react';
import Project from '../components/Project'; 
import { Language } from '../enum/Language';

import projectData from '../data/projects.json';

const ProjectList: React.FC = () => {
    return (
        <div className='bg-gray-900'>
            <h1>Portfolio</h1>
            <div className="grid grid-cols-3 gap-4 mt-10 ml-40 mr-40">
            {Object.entries(projectData).map(([projectName, projectDetails]) => (
                <Project
                    key={projectName}
                    projectKey={projectName}
                    name={projectName}
                    description={projectDetails.description}
                    link={projectDetails.link}
                    language={projectDetails.language as Language[]}
                />
            ))}
            </div>

        </div>
    )
}

export default ProjectList;