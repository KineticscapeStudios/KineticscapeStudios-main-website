import React from "react";
import "./SmallCTA.css";

import linkedinSocials from "/public/SVGs/socials/linkedin.svg";
import instaSocials from "/public/SVGs/socials/insta.svg";

const SmallCTA: React.FC = () => {
  return (
    <div className="small-cta-container">
      <div className="small-cta-wrapper">
        <div className="linkedin-socials socials">
          <img src={linkedinSocials} alt="" />
          <span>Linkedin</span>
        </div>
        <div className="insta-socials socials">
          <img src={instaSocials} alt="" />
          <span>Instagram</span>
        </div>
        <div className="email-socials socials">
          <span>archit@kineticscapestudios.com</span>
        </div>
      </div>
    </div>
  );
};
export default SmallCTA;
