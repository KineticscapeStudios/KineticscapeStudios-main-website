import React from "react";

import LogoHeader from "../../HomePage/MainPage/LogoHeader";
import "./HeadAboutUs.css";

const HeadAboutUs: React.FC = () => {
  return (
    <div className="head-about-us-wrapper">
      <LogoHeader />
      <div className="overlay-wrapper">
        <h1>Where Creativity Meets Code and Occasionally Grabs a Coffee</h1>
      </div>
      <div className="images-wrapper"></div>
      <div className="scroll-to-explore">
        <span>Scroll it like it’s hot!</span>
      </div>
    </div>
  );
};
export default HeadAboutUs;
