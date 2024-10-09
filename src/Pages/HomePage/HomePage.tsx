import React, { useEffect, useRef } from "react";
import "./HomePage.css";
import MainPage from "./MainPage/MainPage";
import AboutUsComp from "./AboutUS/AboutUsComp";
import CustomMarquee from "../../CustomMarquee";
import ServicesPage from "./Services/ServicesPage";
import CTA from "./CTA/cta";
import Footer from "../../Footer/Footer";
import WhyUS from "./Why US/WhyUS";
import SmallPyramid from "./WebGI/SmallPyramid";
import LogoAnimated from "./LogoAnimated/LogoAnimated";
import OurProjects from "./OurCrafts/OurProjects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const HomePage: React.FC = () => {
  return (
    <div className="home-page-wrapper">
      <SmallPyramid />
      <div className="panel main-page-home-wrapper">
        <MainPage></MainPage>
      </div>
      <div className="main-page-logo-animated">
        <LogoAnimated></LogoAnimated>
      </div>
      <div className="empty-space-forreveal"></div>
      <div className="main-page-about-us">
        <AboutUsComp></AboutUsComp>
      </div>
      <div className="main-page-services">
        <ServicesPage></ServicesPage>
      </div>
      {/* <div className="main-page-why-us">
        <WhyUS />
      </div> */}
      <div className="main-page-our-craft">
        <OurProjects></OurProjects>
      </div>
      <div className="main-page-cta">
        <CTA />
      </div>
      {/* <div className="main-page-footer">
        <Footer></Footer>
      </div> */}
    </div>
  );
};
export default HomePage;
