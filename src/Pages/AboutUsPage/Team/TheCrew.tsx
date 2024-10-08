import React, { useRef } from "react";
import "./TheCrew.css";
import ArrowSVG from "/public/Images/svgs/Arrow.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const images = [
  "/public/Images/KeyBenefits/brandRecall.png", // Replace with your images
  "/public/Images/KeyBenefits/brandRecall.png",
  "/public/Images/KeyBenefits/brandRecall.png",
];
const TheCrew: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  useGSAP(() => {
    const container = containerRef.current;
    if (container) {
      gsap.to(slidesRef.current, {
        xPercent: -100 * (slidesRef.current.length - 1), // Move all slides left
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${container.offsetWidth}`, // Scroll distance equal to the container width
          scrub: true, // Smoothly animate based on scroll
          pin: true, // Pin the container while scrolling
        },
      });
    }
  }, []);
  return (
    <div className="the-crew-wrapper">
      <div className="the-crew-arrow">
        <img src={ArrowSVG} alt="" />
      </div>
      <div className="the-crew-content">
        <div className="the-crew-head">
          <span>BEHIND THE SCENES</span>
        </div>
      </div>
      <div className="the-crew-carousel">
        {images.map((image, index) => (
          <div
            className="carousel-item"
            key={index}
            ref={(el) => (slidesRef.current[index] = el!)}
          >
            <img src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheCrew;
