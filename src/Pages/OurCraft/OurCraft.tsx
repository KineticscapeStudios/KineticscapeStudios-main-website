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
      <OurCraftCarousel></OurCraftCarousel>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
};

export default OurCraft;
