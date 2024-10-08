import React from "react";
import "./AboutUsPage.css";
import HeadAboutUs from "./HeadAboutUs/HeadAboutUs";
import OurStory from "./OurStory/OurStory";
import CTA from "../HomePage/CTA/cta";
import Footer from "../../Footer/Footer";
import TheCrew from "./Team/TheCrew";

const AboutUsPage: React.FC = () => {
  return (
    <div className="about-us-page-wrapper">
      <HeadAboutUs></HeadAboutUs>
      <OurStory></OurStory>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
};
export default AboutUsPage;
