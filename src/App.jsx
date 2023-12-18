import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './SubComponents/Navigation'
import char from './images/char.png'

function App() {
  

  return (
    <>
      <div className="main-container">
        <Navigation />
        <div>
          <img src={char} className='char'/>
        </div>
      </div>
    </>
  );
}

export default App
