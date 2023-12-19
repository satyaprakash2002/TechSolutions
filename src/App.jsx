import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./SubComponents/Navigation";
import char from "./images/char.png";

function App() {
  return (
    <>
      <div className="main-container">
        <Navigation />
        <img src={char} className="char" alt="Character" />
      </div>
      <div className="container2"></div>
      <div className="container3"></div>
      <div className="container4"></div>
      <div className="container5"></div>
    </>
  );
}

export default App;
