import React, { useRef } from "react";
import "./LogoHeader.css"; // Import the CSS for styling
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import KSLogoSVG from "/public/Images/Logo/KSLogo.svg";
const LogoHeader: React.FC = () => {
  return (
    <div className="logo-container">
      <div className="logo-header">
        <img
          className="logo-img"
          src={KSLogoSVG}
          alt="Kineticscape Studios Logo"
        />
        <span className="logo-first">Kineticscape Studios</span>
      </div>
    </div>
  );
};

export default LogoHeader;
