import React from 'react'
import SectionHeading from "../SectionHeading/SectionHeading";
import mypicture from '../../assets/images/images.jpeg';
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='herosection'>
        <div className='herosection-firstsection'>

        <SectionHeading 
        sectionheading={"Hi, I'm Malaika Batool"}
        
        tag={"Hello."}
        headingcss= "headingcss"
        />
<div className="developer-title">
  <h1 className="frontend-heading">Frontend Developer</h1>
  <span className="skills">React | TypeScript | JavaScript</span>
</div>
        <p>
            I'm a passionate Frontend Developer with a Master's degree in Finance.  
My journey began in the world of numbers, but my curiosity for technology led me to frontend development.  
Now I love crafting clean, user-friendly, and responsive web applications.
        </p>
        <button>Let's Talk</button>
        </div>
<div className='herosection-imagediv'>
<div className='herosection-imagestyling'></div>
<img src= {mypicture} alt = "User picture" />
</div>
      
    </div>
  );
};

export default HeroSection;
