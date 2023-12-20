import React from 'react'
import './Navigation.css';
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useRef } from 'react';

const Navigation = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <div className='nav'>
        <p style={{fontWeight:'bold',fontSize:'1.2rem'}}>LOGO</p>
        
        <div className="nav-items">
          <p>Projects</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </>
  );
}

export default Navigation