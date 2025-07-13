import React from 'react';
import './Cards.css';

const ImageCard = ({imageSrc, imgTitle, imgSubtitle}) => {
    
  return (
    <div className='image-cards'>
        <img src={imageSrc} alt={imgTitle} className='project-card-image' />
      <h3 className='project-card-title'>{imgTitle}</h3>
      <p className='project-card-subtitle'>{imgSubtitle}</p>
      
    </div>
    
    
  );
};

export default ImageCard;
