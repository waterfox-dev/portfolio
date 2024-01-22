import { faCss3, faHtml5, faJava, faJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faC, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Skills: React.FC = () => {
    return(
        <div className='bg-gray-900 pt-16'>
            <p className='text-gray-200 mt-8 font-mono text-4xl text-center'>My Skills.</p>
                <FontAwesomeIcon className="text-gray-200 text-6xl" icon={faPython}/>
                <FontAwesomeIcon className="text-gray-200 text-6xl" icon={faC}/>
                <FontAwesomeIcon className="text-gray-200 text-6xl" icon={faJava}/>
                <FontAwesomeIcon className="text-gray-200 text-6xl" icon={faJs}/>
                <FontAwesomeIcon className="text-gray-200 text-6xl" icon={faDatabase}/>
                <FontAwesomeIcon className="text-gray-200 text-6xl" icon={faCss3}/>
                <FontAwesomeIcon className="text-gray-200 text-6xl" icon={faHtml5}/>

            </div>
    )
}

export default Skills;