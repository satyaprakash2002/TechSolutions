import React from "react";
import "./Component5.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Component5 = () => {
  return (
    <>
      <div className="c5t">
        <p className="c5t1">Contact Us Today</p>
        <p className="c5t2">
          Reach to us using the contact form below. We are here to answer your
          needs. We look foreward to hearing from you !
        </p>
        <a className="link">Link Here (Google Form Link)</a>
      </div>
      <div className="footer">
        <div className="footer-text">
          <p className="ft1">Company Name</p>
          <p className="ft2">
            "Enpowering Dreams, Transforming Realities - Your Success,
            Commitment"
          </p>
        </div>
        <div className="icon-div">
          <FaSquareXTwitter className="icon" />
          <FaLinkedin className="icon" />
          <FaSquareInstagram className="icon" />
        </div>
      </div>
    </>
  );
};

export default Component5;
