import React, { useEffect, useRef } from "react";
import LogoHeader from "./LogoHeader";
import MainPageOverlay from "./MainPageoverlay";
import CustomMarquee from "../../../CustomMarquee";
import "./MainPage.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import DownArrowSVG from "/public/Images/svgs/downArrow.svg";

const MainPage: React.FC = () => {
  return (
    <div className="main-page-wrapper">
      <LogoHeader />
      <MainPageOverlay />

      <div className="click-Info">
        <div className="click-info-text">
          <span>Click For A Blast</span>
        </div>
        <img src={DownArrowSVG} alt="" />
      </div>

      <div className="scroll-to-explore">
        <span>Scroll it like it’s hot!</span>
      </div>
    </div>
  );
};

export default MainPage;
