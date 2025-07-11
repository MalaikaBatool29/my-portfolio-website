import React from 'react';
import './Cards.css';
import { CiStickyNote } from "react-icons/ci";

const Cards = ({cardNo, title, description, icon}) => {
  return (
    <div className='cards'>
    <h1>{cardNo}</h1>
    <span className='cards-title'>{title}</span>
    <p>{description}</p>
    <span className='cards-icon'>{icon}</span>
    </div>
  );
};

export default Cards;
