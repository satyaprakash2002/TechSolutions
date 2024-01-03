import React from "react";
import "./Component4.css";
import Slider from "react-slick";
import PData from "./Component4PData";
import RData from "./Component4RData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Component4 = () => {
  const settings1 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    dots: true,
    responsive:[{
      breakpoint: 1024,
      settings:{
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  const settings2 = {
    
    
    infinite: true,
    
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    dots: true,
  };
  return (
    <>
      <div className="project-container">
        <p className="Project-Text">Our Projects</p>
        <div className="PCard">
          <Slider {...settings1} className="slider1">
            {PData.map((data) => (
              <div className="PCardContainer" key={data.key}>
                <div className="PCardImage">
                  <img src={data.img} className="PImage" />
                </div>
                <div className="PCardText">
                  <p>{data.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="review-container">
        <p className="Review-Text">What Do They Say</p>
        <div className="RCard">
          <Slider {...settings2} className="slider2">
            {RData.map((data) => (
              <div key={data.key} className="RCardContainer">
                <div className="RHead">
                  <p>{data.name}</p>
                </div>
                <div className="RBody">
                  <p>{data.quote}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
    style={{ display: "block", background: "black", borderRadius:"50%" }}
  >
    Previous
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
    style={{ display: "block", background: "black", borderRadius: "50%" }}
  >
    Next
  </button>
);

export default Component4;
