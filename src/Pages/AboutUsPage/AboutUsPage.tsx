import React from "react";
import "./AboutUsPage.css";
import HeadAboutUs from "./HeadAboutUs/HeadAboutUs";
import OurStory from "./OurStory/OurStory";
import CTA from "../HomePage/CTA/cta";
import Footer from "../../Footer/Footer";
import TheCrew from "./Team/TheCrew";
import PipeLine from "./PipeLine/PipeLine";

const AboutUsPage: React.FC = () => {
  return (
    <div className="about-us-page-wrapper">
      <HeadAboutUs></HeadAboutUs>
      <OurStory></OurStory>
       <PipeLine></PipeLine>  
      <CTA></CTA>
    </div>
  );
};
export default AboutUsPage;
