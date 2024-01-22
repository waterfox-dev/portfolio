import React from 'react';
import videoSource from '../data/language.mp4';

const AboutMe: React.FC = () => {
    return (
    <div id="about" className='bg-gray-900'>
        <div className="grid grid-cols-2 gap-4">
            <div className='ml-16  mr-16 mb-16 h-96 bg-indigo-800 rounded-xl'>
                <p className='text-gray-200 mt-8 font-mono text-4xl text-center'>About Me.</p>
                <p className='text-gray-200 m-8'>To enter in more details, I'm a passionate Python and Java developer with an insatiable curiosity for learning. Currently, I'm a versatile student exploring the vast world of code. From crafting elegant Python scripts to diving into the intricate realm of Java applications, I'm on a constant journey to expand my skills.</p>
                <p className='text-gray-200 m-8'>I'm also a huge fan of music. I like play piano, composing music and explore CAM software (Ableton for example).</p>
                <p className='text-gray-200 m-8'>Do not hesitate to see my Github here and to contact me</p>
            </div>
            <div>
                <video width={1700} height={800} autoPlay loop muted>
                    <source src={videoSource} type="video/mp4" />
                    You browser is not compatible with the video.
                </video>
            </div>
        </div>
    </div>)
}

export default AboutMe;