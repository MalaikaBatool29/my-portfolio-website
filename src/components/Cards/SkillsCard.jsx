import React from 'react';
import './Cards.css';

const SkillsCard = ({skillsIcon, skillsTitle}) => {
  return (
    <div className='skills-card'>
      <span className='skills-icon'>{skillsIcon}</span>
      <span>{skillsTitle}</span>
    </div>
  );
};

export default SkillsCard;
