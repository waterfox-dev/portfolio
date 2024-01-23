import { faCss3, faHtml5, faJava, faJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faC, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Skills: React.FC = () => {
    return(
        <div className='bg-gray-900 pt-16'>
            <p className='text-gray-200 mt-8 font-mono text-4xl text-center'>My Skills.</p>
            <div className='text-center'>
                <p className='text-gray-200 mt-8 font-mono text-2xl text-center'>Back-End</p>
                <div className='grid grid-cols-4 gap-4' >
                    <div className='mt-8'>
                        <FontAwesomeIcon className="text-gray-200 text-6xl" icon={faPython}/>
                        <ul className='text-left ml-40 text-gray-300 mt-8 text-xl'>
                            <li> - Django</li>
                            <li> - Flask</li>
                            <li> - PyQt5</li>
                            <li> - Panda</li>
                        </ul>
                    </div>
                    <div className='mt-8'>
                        <FontAwesomeIcon className="text-gray-200 text-6xl" icon={faC}/>
                        <ul className='text-left ml-40 text-gray-300 mt-8 text-xl'>
                            <li> - Thread</li>
                            <li> - Shared Memory</li>
                            <li> - Networking / Socket</li>
                        </ul>
                    </div>
                    <div className='mt-8'>
                        <FontAwesomeIcon className="text-gray-200 text-6xl" icon={faJava}/> 
                        <ul className='text-left ml-40 text-gray-300 mt-8 text-xl'>
                            <li> - Forge SDK</li>
                            <li> - JavaFX </li>
                            <li> - Junit</li>
                        </ul>
                    </div>
                    <div className='mt-8'>
                        <FontAwesomeIcon className="text-gray-200 text-6xl" icon={faDatabase}/>
                        <ul className='text-left ml-40 text-gray-300 mt-8 text-xl'>
                            <li> - Oracle SQL</li>
                            <li> - PL/SQL </li>
                            <li> - MySQL </li>
                            <li> - SQLite </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <p className='text-gray-200 mt-8 font-mono text-2xl text-center'>Front-End</p>   
                <div className='grid grid-cols-3 gap-4'>
                    <div>
                        <FontAwesomeIcon className="text-gray-200 text-6xl" icon={faJs}/>   
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-gray-200 text-6xl" icon={faCss3}/>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-gray-200 text-6xl" icon={faHtml5}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;