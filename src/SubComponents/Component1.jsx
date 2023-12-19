import React from "react";
import "./Component1.css";
import Navigation from "./Navigation";
import char from "../images/char.png";
import light from "../images/light.png";
import { useState, useEffect } from "react";

const Component1 = () => {
  const [isFlickering, setIsFlickering] = useState(false);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setInterval(()=>{
        setIsFlickering(prev=>!prev)
      },1000)
    }, 100000);
    return () => {
      clearInterval(flickerInterval);
    };
  }, []);

  return (
    <>
      <Navigation />
      <div style={{ position: "absolute", right: "26rem", top: "10rem" }}>
        <img
          src={char}
          className=""
          style={{ position: "absolute", width: "20rem" }}
        />
        <img
          src={light}
          style={{
            position: "absolute",
            width: "20rem",
            opacity: isFlickering ? 0.5 : 1,
          }}
        />
      </div>
    </>
  );
};

export default Component1;
