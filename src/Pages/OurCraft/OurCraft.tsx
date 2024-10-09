import React from "react";
import Footer from "../../Footer/Footer";
import CTA from "../HomePage/CTA/cta";
import OurCraftCarousel from "./Carousel/OurCraftCarousel";
import LogoHeader from "../HomePage/MainPage/LogoHeader";
import "./OurCraft.css";

const OurCraft: React.FC = () => {
  return (
    <div className="our-craft-wrapper">
      <LogoHeader></LogoHeader>

      <div className="our-craft-projects--container">
        <OurCraftCarousel></OurCraftCarousel>
      </div>
      <div className="our-crafts-cta">
        <CTA></CTA>
      </div>
    </div>
  );
};

export default OurCraft;
