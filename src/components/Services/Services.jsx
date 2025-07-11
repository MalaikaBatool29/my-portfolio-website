import React from 'react'
import "./Services.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import { CiMobile2 } from "react-icons/ci";
import { GrPersonalComputer } from "react-icons/gr";
import { FiTriangle } from "react-icons/fi";
import { RiLayout2Line } from "react-icons/ri";
import { MdOutlineVerticalDistribute } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import Cards from '../Cards/Cards';

const Services = () => {
  const cardsData = [
    {
sno : "01",
cardTitle: "Web Design",
cardDescription : "Designing clean, functional, and engaging websites that deliver seamless user experiences. Skilled in HTML, CSS, JavaScript, and responsive design",
cardIcon : <CiMobile2 />


    },
    {
sno : "02",
cardTitle: "Web Development",
cardDescription : "Passionate about coding clean and efficient web solutions. Proficient in creating dynamic, responsive websites using modern frameworks like React, Node.js, and Laravel.",
cardIcon : <GrPersonalComputer />


    },
    {
sno : "03",
cardTitle: "SEO Marketing",
cardDescription : "Results-driven SEO marketer with expertise in on-page, off-page, and technical SEO. Skilled in boosting website rankings, traffic, and visibility through data-driven strategies.",
cardIcon : <FiTriangle />


    } ,
    {
sno : "04",
cardTitle: "Mern Stack development",
cardDescription : "Full-stack developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). Skilled in building dynamic, scalable, and high-performance web applications from scratch.",
cardIcon : <RiLayout2Line />

    }, 
    {
sno : "05",
cardTitle: "Data Analyst",
cardDescription : "Detail-oriented data analyst skilled in collecting, cleaning, and interpreting large datasets to drive business decisions. Proficient in tools like Excel, SQL, Python, and Power BI.",
cardIcon : <MdOutlineVerticalDistribute />
    },
    {
sno : "06",
cardTitle: "Generative AI Engineer",
cardDescription : 'Passionate Generative AI Engineer skilled in building intelligent systems using deep learning and transformer models',
cardIcon : <TfiWorld />
    },
  ] ;
    


return (

<div className='services'>
<SectionHeading
tag={'Services'}
sectionheading = {"Services I Offer"}
headingcss={"headingcss"}
shapeVisible={true}

/>

<div className='services-cards'>
{cardsData.map((items , index) => (
<Cards
key={index}
cardNo = {items.sno}
title={items.cardTitle}
description={items.cardDescription}
icon={items.cardIcon}
/>
))}

</div>
</div>
);
};
export default Services
