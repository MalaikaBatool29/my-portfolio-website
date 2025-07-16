import React from 'react';
import './Cards.css';
import { FaArrowRight } from "react-icons/fa";

const ImageCard = ({imageSrc, imgTitle, imgSubtitle, handleClick}) => {
   
  return (
    <div className='image-cards' onClick={handleClick}>
      <div className='projectcard-image'>
        <img src={imageSrc} alt={imgTitle}  />
      </div>
      <div className='projectcards-bottom'>
        <div>
      <h3 >{imgTitle}</h3>
      <p >{imgSubtitle}</p>
      </div>
      <FaArrowRight className='projectcard-icon'/>
      </div>
    </div>
    
    
  );
};

export default ImageCard;
