import React from "react";
import "./Header.css";
import { TbCircleLetterMFilled } from "react-icons/tb";


const Header = () => {
  const headerData = [
    {
      item: "Malaika",
      address: "/home",
    },
    {
      item: "Home",
      address: "/home",
    },
    {
      item: "Services",
      address: "/services",
    },
    {
      item: "Skills",
      address: "/skills",
    },
    {
      item: "Portfolio",
      address: "/portfolio",
    },
    {
      item: "Contact",
      address: "/contact",
    },
  ];

  return (
    <header className="header">
      <ul className="header-items">
        {headerData.map((i, index) => (
          <li 
          key={index}
          
          className={index===0 ? "header-item-icon header-item-username " : "header-items"}
          >
            {index===0 && <span className="icon"><TbCircleLetterMFilled /></span> }
            {i.item}
            </li>
      
))}
</ul>
      <button className="header-button">Contact Now</button>
    </header>
  );
};

export default Header;