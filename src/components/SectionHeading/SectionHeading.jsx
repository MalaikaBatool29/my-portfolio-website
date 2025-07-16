import React from 'react';
import './SectionHeading.css';

const SectionHeading = ({sectionheading , tag, headingcss}) => {
  return (
    <div className='sectionheading'>
      {tag && <span className='tag'>{tag}</span>}
<h1 className={headingcss}>{sectionheading}</h1>


    </div>
  );
};

export default SectionHeading; 

