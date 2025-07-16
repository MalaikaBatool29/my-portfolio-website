import React from 'react';
import './Skills.css';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import SectionHeading from '../SectionHeading/SectionHeading';
import SkillsCard from '../Cards/SkillsCard';
import mypicture from '../../assets/images/women.jpg';



const Skills = () => {
  const skillsData = [{
icon : <FaHtml5 />,
title : "HTML"
},
{
icon : <IoLogoCss3 />,
title : "CSS"

},
{
  icon : <IoLogoJavascript />,
title : "JAVASCRIPT"
},
{
  icon : <SiTypescript />,
title : "TYPESCRIPT"
},
{
 icon :<FaReact /> ,
title : "REACT JS" 
},


];
 const experienceData = [
  {
    date : '2024',
    position : 'BS FINANCE',
    location : 'University of Karachi',
  },
  {
    date : '2020',
    position : 'INTERMEDIATE',
    location : 'Malir Cantt College',
  },
  { date : '2018',
    position : 'MATRICULATION',
    location : 'Allama Iqbal School',
  },
 ];

  return (
    <div className='skills-section'>
      <div className='skills-section-left'>
        <div className='skills-section-top'>
          <SectionHeading
              sectionheading={"Skills and Qualification"}
              tag = {"Experience"}
              headingcss= "headingcss"

          />
          <p>
            I design and develop user-friendly websites and web solutions for clients of all sizes, with a focus on clean design, responsiveness, and modern technologies.
          </p>
          </div>

<div className='skills-section-bottom'>
<h1>My Skills</h1>
<div className='skills-sections-bottom-cards'>

{skillsData.map((item , index) => (
<>
<SkillsCard
skillsIcon = {item.icon}
skillsTitle = {item.title}
key={index}
/>
</>
))}

</div>
</div>
</div>
      
   <div className='skills-section-right'>
    <div className='experience'>
      <h1>Qualification</h1>
      <div className='experience-parent'>
        {experienceData.map((item, index) => (
          <div className='experience-data'>
          <span>{item.date}</span>

          <div className='position-location'>
           <h3>{item.position}</h3>
           <span>{item.location}</span>

          </div>
      </div>
     ))}
</div>
</div>

<div className='skills-section-picture'>
  <img src = {mypicture} className='skills-img' />
 </div>
 <button className='hire-me-button'>Hire me</button>
 </div>
 </div>
    );
  };



export default Skills;
