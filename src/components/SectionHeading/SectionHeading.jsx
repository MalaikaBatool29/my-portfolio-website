import React from 'react';
import './SectionHeading.css';

const SectionHeading = ({sectionheading , tag, headingcss, shapeVisible}) => {
  return (
    <div className='sectionheading'>
      {tag && <span className='tag'>{tag}</span>}
<h1 className={headingcss}>{sectionheading}</h1>
{shapeVisible && <span className='shape'></span>}

    </div>
  );
};

export default SectionHeading;
