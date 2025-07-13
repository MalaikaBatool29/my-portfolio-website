import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading';
import img1 from '../../assets/images/image1.avif';
import img2 from '../../assets/images/image2.jpeg';
import img3 from '../../assets/images/image3.jpg';
import img4 from '../../assets/images/image4.gif';
import img5 from '../../assets/images/image5.webp';
import img6 from '../../assets/images/image6.png';
import ImageCard from '../Cards/ImageCard';


const Project = () => {
  const imageData = [ 
    {
 image: img1,
 title: "Landing page",
 subtitle: "Web/WordPress",
    },
  {
 image: img2,
 title: "Landing page",
 subtitle: "Web/WordPress",
    },
      {
 image: img3,
 title: "Landing page",
 subtitle: "Web/WordPress",
    },
      {
 image: img4,
 title: "Landing page",
 subtitle: "Web/WordPress",
    },
      {
 image: img5,
 title: "Landing page",
 subtitle: "Web/WordPress",
    },
      {
 image: img6,
 title: "Landing page",
 subtitle: "Web/WordPress",
    },

];
  
  
    return (

    <div className='project-section'>
        <div className='project-section-top'>
            <SectionHeading
sectionheading={"Latest Project"}
tag={"Portfolio"}
headingcss="headingcss"
shapeVisible={true}

                />
 </div>
<div className='project-section-bottom'>
    <div className='project-section-bottom-cards'>
        {imageData.map((item, index) => (

        <ImageCard
        key={index}
        imageSrc={item.image}
        imgTitle={item.title}
        imgSubtitle={item.subtitle}
        />
    )) }

    </div>
</div>
    </div>
  );
};

export default Project;
