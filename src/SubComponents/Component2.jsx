// Component2.jsx

import React from 'react';
import img1 from '../images/techAiB.jpg'; // Update the file extension

const Component2 = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="text">
          {/* Write your content here */}
          <p> Welcome to [Your Company Name], where innovation meets excellence!
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
            build the future together!</p>
        </div>
        <div className="imageSize">
          {/* Insert your image source here */}
          <img src={img1} alt="Description" />
        </div>
      </div>
      <div className="carousel">
        {/* Add your carousel component here */}
        <p>This is the carousel at the bottom of the container.</p>
      </div>
    </div>
  );
};

export default Component2;
