import React from 'react';
import './Skills.css';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { FaAngular } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { GiVintageRobot } from "react-icons/gi";
import SectionHeading from '../SectionHeading/SectionHeading';
import SkillsCard from '../Cards/SkillsCard';
import mypicture from '../../assets/images/images.jpeg';



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
 icon : <RiReactjsLine />,
title : "REACT JS" 
},
{
  icon : <FaAngular />,
title : "ANGULAR"
},
{
  icon : <FaApple />,
title : "IOS APP"
},
{
  icon : <GiVintageRobot />,
title : "APP DEV"
},

];
 const experienceData = [
  {
    date : 'Jan 21 - Present',
    position : 'Chief Operating Officer',
    location : 'pxdraft Ltd, UK',
  },
  {
    date : 'Apr 29 - Present',
    position : 'Operations Director',
    location : 'pxdraft Ltd, UK',
  },
  { date : 'Jan 21 - Present',
    position : 'Operations Manager',
    location : 'pxdraft Ltd, UK',
  },
 ];

  return (
    <div className='skills-section'>
      <div className='skills-section-left'>
        <div className='skills-section-top'>
          <SectionHeading
              sectionheading={"Skills and Experience"}
              tag = {"Experience"}
              headingcss= "headingcss"
              shapeVisible ={true}
          />
          <p>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
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
      <h1>Experience</h1>
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
 </div>
 </div>
    );
  };



export default Skills;
