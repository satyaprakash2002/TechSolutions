import React from 'react'
import './Navigation.css';
const Navigation = () => {
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