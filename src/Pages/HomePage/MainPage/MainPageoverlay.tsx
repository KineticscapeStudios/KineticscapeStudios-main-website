import React, { useRef } from "react";
import "./MainPageOverlay.css"; // Import the CSS for styling
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const MainPageOverlay: React.FC = () => {
  return (
    <div className="main-page-overlay-wrapper">
      <div className="main-head">
        <span className="anim-text">Enter the digital realm</span>
      </div>
    </div>
  );
};

export default MainPageOverlay;
