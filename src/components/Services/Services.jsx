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
cardTitle: "Responsive Website Design",
cardDescription : "I can create mobile-friendly and responsive websites using HTML, CSS, and JavaScript that look great on all devices",
cardIcon : <CiMobile2 />


    },
    {
sno : "02",
cardTitle: "React JS Web Applications",
cardDescription : "I build dynamic and interactive frontend applications using React JS and Typescript with a clean and reusable component structure.",
cardIcon : <GrPersonalComputer />


    },
    {
sno : "03",
cardTitle: "Landing Page Development",
cardDescription : "Need a simple, beautiful one-page website? I can build modern, fast-loading landing pages for your product or business.",
cardIcon : <FiTriangle />


    } ,
    {
sno : "04",
cardTitle: "Custom JavaScript Tools",
cardDescription : "I develop small interactive tools like calculators, to-do lists, and form validations using JavaScript or TypeScript.",
cardIcon : <RiLayout2Line />

    }, 
    {
sno : "05",
cardTitle: "Website Fixes & Edits",
cardDescription : "Have an existing site? I can help fix layout issues, add new sections, or make style and responsiveness improvements .",
cardIcon : <MdOutlineVerticalDistribute />
    },
    {
sno : "06",
cardTitle: "Portfolio or Resume Website",
cardDescription : 'I can design and build personal portfolio websites for job seekers, students, and freelancers',
cardIcon : <TfiWorld />
    },
  ] ;
    


return (

<div className='services'>
<SectionHeading
tag={'Services'}
sectionheading = {"Services I Offer"}
headingcss={"headingcss"}

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
