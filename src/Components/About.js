import React from 'react'
import image from "../assets/profile.jpg";
import Skills from './Skills.js';
const About = () => {
  return (
    <div id="about" className="px-10 dark:bg-slate-900 my-1">
      <div
        className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20"
      >
        {/* <!-- left --> */}
        <div className="left">
          <img
            className="h-1/4 absolute top-0 left-0 -z-10"
            src="./img/dots.png"
            alt=""
          />
          <div className="h-full rounded overflow-hidden mx-3">
            <img src={image} alt="" className='profile' />
          </div>
        </div>
        {/* <!-- right --> */}
        <div className="my-auto flex flex-col gap-3" style={{width:"59%"}}>
          <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
          <h1 className="text-3xl font-medium dark:text-white"></h1>
          <h1 className="text-3xl font-medium dark:text-white">
        
          </h1>
          <p className="text-gray-400">
            Hey!!! My name is Arbaz Solkar And I am From Mumbai,India
            
             I'm passionate about learning new technologies and building projects. Right now I'm learning Full Stack Web Development at Masai School, Bengaluru, Karnataka. I love to learn and explore new web technologies. My interests and hobbies revolves around Coding, Singing and Photography.
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default About
