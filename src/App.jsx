import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./SubComponents/Navigation";
import char from "./images/char.png";
import Component1 from "./SubComponents/Component1";
import Component2 from "./SubComponents/Component2";
import Component3 from "./SubComponents/Component3";
import Component4 from "./SubComponents/Component4";
import Component5 from "./SubComponents/Component5";

function App() {
  return (
    <>
      <div className="main-container">
        <Component1 />
      </div>
      <div className="container2">
        <Component2 />
      </div>
      <div className="container3">
        <Component3 />
      </div>
      <div className="container4">
        <Component4 />
      </div>
      <div className="container5">
        <Component5 />
      </div>
    </>
  );
}

export default App;
