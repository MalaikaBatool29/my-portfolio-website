import React, { useState } from 'react';
import './Projects.css'
import SectionHeading from '../SectionHeading/SectionHeading';
import img1 from '../../assets/images/calculator.jpeg';
import img2 from '../../assets/images/atms.jpeg';
import img3 from '../../assets/images/counter.png';
import img4 from '../../assets/images/number.webp';
import img5 from '../../assets/images/currency.jpg';
import img6 from '../../assets/images/todo.png';
import ImageCard from '../Cards/ImageCard';


const Project = () => {
const [modalOpen, setModalOpen] =useState(false);
const [imageAvailable, setImageAvailable] = useState(null);

const handleClick = (image) => {
  setModalOpen(true);
  setImageAvailable(image);
};

  const imageData = [ 
    {
 image: img1,
 title: "CALCULATOR",
 subtitle: "A basic arithmetic calculator built with JavaScript for real-time calculations.",
    },
  {
 image: img2,
 title: "ATM STIMULATOR",
 subtitle: "ATM simulation with basic transactions in TypeScript..",
    },
      {
 image: img3,
 title: "WORD COUNTER",
 subtitle: "Counts words and characters from user input — useful for writers and students",
    },
      {
 image: img4,
 title: "NUMBER GUESSING GAME",
 subtitle: "A fun game built in JavaScript where users guess a random number within a set range.",
    },
      {
 image: img5,
 title: "CURRENCY CONVERTER",
 subtitle: "Converts between currencies using static exchange rates with clean UI.",
    },
      {
 image: img6,
 title: "To-Do LIST",
 subtitle: "A React-based app to add, complete, and remove daily tasks with ease.",
    },

];
  
  
    return (

    <div className='project-section'>
        
            <SectionHeading
sectionheading={"Latest Project"}
tag={"Portfolio"}
headingcss="headingcss"

                />
<div className='project-section-bottom'>
    
        {imageData.map((item, index) => (

        <ImageCard
        key={index}
        imageSrc={item.image}
        imgTitle={item.title}
        imgSubtitle={item.subtitle}
        handleClick={()=> handleClick(item.image)}
        />
    )) }

</div>

{modalOpen && (
  <div className='modalopen' onClick={()=> setModalOpen(false)}>
    <img src={imageAvailable} />
    </div>
)}
</div>
  );
};

export default Project;
