import React, { useRef } from "react";

import "./AboutUsComp.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const AboutUsComp: React.FC = () => {
  return (
    <div className="home-page-about-us-container">
      <div className="home-page-about-us-wrapper">
        <div className="about-us-heading">ABOUT US</div>
        <div className="about-us-content">
          <span>
            Kineticscape Studios is on a mission to{" "}
            <span className="red-text">redefine marketing</span> through
            immersive experiences. We blend{" "}
            <span className="red-text">
              creativity with advanced technology
            </span>
            to help brands connect with their audience in new and engaging ways.
            Our dream is to push the boundaries of storytelling, making every{" "}
            <span className="red-text">interaction unforgettable</span> and
            every brand vision a reality.{" "}
            <span className="about-us-see-more">See More...</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComp;
