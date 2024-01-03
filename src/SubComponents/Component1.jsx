import React from "react";
import "./Component1.css";
import Navigation from "./Navigation";
import char from "../images/char.png";
import light from "../images/light.png";
import { useState, useEffect } from "react";
import gsap from "gsap";

const Component1 = () => {
  const [isFlickering, setIsFlickering] = useState(false);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setInterval(()=>{
        setIsFlickering(prev=>!prev)
      },3500)
    }, 3490);
    return () => {
      clearInterval(flickerInterval);
    };
  }, []);

  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".text1, .text2", {
      y: 150,
    });
    t1.to(".text1, .text2", {
      y: 0,
      ease: "power4.out",
      delay: 1,
      duration: 0.5,
      stagger: {
        amount: 0.5,
      },
    });
  }, []);

  return (
    <>
      {/* <Navigation/> */}
      <div className="char-container">
        <img src={char} className="char1" />
        <img
          src={light}
          style={{
            opacity: isFlickering ? 0.5 : 1,
          }}
          className="light"
        />
      </div>
      <div className="text-container">
        <div className="text-div">
          <p className="text1">
            <span>"</span>DE<span>V</span>ELOP<span>M</span>E<span>N</span>T WO
            <span>R</span>
            LD<span>"</span>
          </p>
        </div>
        <div className="text-div">
          <p className="text2">
            ONE STOP SOLUTION TO ALL YOUR BUSINESS PROBLEMS
          </p>
        </div>
        <div className="text-div">
          <p className="text3">
            Welcome to [Your Company Name], where innovation meets excellence!
            As a premier development service agency, we bring your digital
            dreams to life. Whether you're seeking cutting-edge web development,
            seamless mobile app solutions, or transformative digital
            experiences, we've got you covered. Our team of dedicated experts is
            passionate about turning ideas into reality, pushing the boundaries
            of technology to deliver solutions that not only meet but exceed
            your expectations. From bespoke software development to user-centric
            design, we are your trusted partner on the journey to digital
            success. Elevate your online presence with us – where creativity
            meets functionality, and your vision becomes our mission. Let's
            build the future together!
          </p>
        </div>
      </div>
    </>
  );
};

export default Component1;
