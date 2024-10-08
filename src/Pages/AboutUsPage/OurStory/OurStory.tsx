import React from "react";
import "./OurStory.css";

const OurStory: React.FC = () => {
  return (
    <div className="our-story-wrapper">
      <div className="bg-image-our-story">
        <img
          src="/public/Images/Backgrounds/AboutUs/OurStory/OurStoryBG.png"
          alt=""
        />
      </div>
      <div className="our-story-content">
        <div className="our-story-info">
          <span>
            Lorem ipsum is the thing that looks like this its just random text
            that doesnt need anythning and doesnt mean anything its just a text
            that represents a colony a city or a fucking thing which doesnt
            matter as we are a small thing in this universe so this random text
            is more smaller
          </span>
        </div>
        <div className="head-ourstory">
          <h1>Our</h1>
          <h1>Story</h1>
        </div>
      </div>
    </div>
  );
};
export default OurStory;
