import React, { useRef } from "react";

import "./AboutUsComp.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
const AboutUsComp: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Split the text into individual characters using SplitType library
    const splitText = new SplitType(contentRef.current!, { types: "chars" });

    gsap.from(".about-us-heading", {
      opacity: 0,
      xPercent: -100,
      scrollTrigger: {
        trigger: ".home-page-about-us-container",
        start: "top 80%", // Start revealing when 80% from the top
        end: "top 30%", // End when 20% from the bottom
        scrub: true, // Smooth scroll animation
      },
    });
    // Apply GSAP animation to each character
    gsap.fromTo(
      splitText.chars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.05, // Delay between each character reveal
        scrollTrigger: {
          trigger: ".home-page-about-us-container",
          start: "top 80%", // Start revealing when 80% from the top
          end: "bottom 60%", // End when 20% from the bottom
          scrub: true, // Smooth scroll animation
        },
      }
    );

    return () => {
      // Clean up on unmount
      splitText.revert();
    };
  }, []);
  return (
    <div className="home-page-about-us-container">
      <div className="home-page-about-us-wrapper">
        <div className="about-us-heading">ABOUT US</div>
        <div className="about-us-content" ref={contentRef}>
          <span>
            Kineticscape Studios is on a mission to redefine marketing through
            immersive experiences. We blend creativity with advanced technology
            to help brands connect with their audience in new and engaging ways.
            Our dream is to push the boundaries of storytelling, making every{" "}
            interaction unforgettable and every brand vision a reality.{" "}
          </span>
        </div>
        <span className="about-us-see-more">See More...</span>
      </div>
    </div>
  );
};

export default AboutUsComp;
