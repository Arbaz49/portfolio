import React from 'react'
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/skills.js'

const Skills = () => {
  
    const skillBoxStyle = {
        backgroundColor: "#0f172a",
    }

    return (
        <div className="skills" style={{backgroundColor: "#0f172a"}}>
            <div className="skillsHeader">
                <h1 style={{color:"white",textAlign:"center"}}>Skills</h1>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skill.path} alt={skill.name} style={{width:"200px",height:"200px",margin:"0px 20px"}} />
                                <h3 style={{color: "white",textAlign:"center"}}>
                                    {skill.name}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
