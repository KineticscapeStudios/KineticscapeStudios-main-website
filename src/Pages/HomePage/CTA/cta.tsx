import React, { useRef } from "react";
import CustomMarquee from "../../../CustomMarquee";
import "./cta.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LetsTalkArrowSVG from "/public/SVGs/letstalkArrow.svg";
import linkedinSocials from "/public/SVGs/socials/linkedin.svg";
import instaSocials from "/public/SVGs/socials/insta.svg";
const CTA: React.FC = () => {
  return (
    <div className="cta-container">
      <div className="cta-wrapper">
        <div className="cta-heading-wrapper">
          <span>LET'S TALK</span>
          <div className="arrow-cta-image">
            <img src={LetsTalkArrowSVG} alt="" />
          </div>
        </div>
      </div>
      <div className="cta-socials-wrapper">
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
export default CTA;
