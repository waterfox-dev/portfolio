import React from 'react';
import { Language, findLanguageLabel } from '../enum/Language';

interface ProjectProps {
    name: string;
    description: string;
    link: string;
    language: Array<Language>
}

const Project: React.FC<ProjectProps & { projectKey: string }> = ({ name, description, link, projectKey, language: projectLanguages }) => {
    return (
        <div key={projectKey} className="bg-gradient-to-r opacity-85 from-indigo-500 via-purple-500 to-pink-500 p-5 m-2 rounded-xl h-64 
                                        hover:scale-105  hover:opacity-100 hover: transition-all duration-300 ease-in-out">
            <h3 className='text-zinc-200 text-2xl'>{name}.</h3>
            <p>{description}</p>
            <a className="text-gray-100" href={link}>Link</a>
            <ul>
                {projectLanguages.map((langKey) => (
                    <li key={langKey}>{findLanguageLabel(langKey)}</li>
                ))}
            </ul>
        </div>
    )
}

export default Project;