import React from 'react'
import SectionHeading from "../SectionHeading/SectionHeading";
import mypicture from '../../assets/images/images.jpeg';
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='herosection'>
        <div className='herosection-firstsection'>

        <SectionHeading 
        sectionheading={"We Have Design Experience"}
        tag={"Hello."}
        headingcss= "headingcss"
        />

        <p>
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
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
