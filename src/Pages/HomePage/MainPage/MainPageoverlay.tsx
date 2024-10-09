import React, { useRef } from "react";
import "./MainPageOverlay.css"; // Import the CSS for styling
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const MainPageOverlay: React.FC = () => {
  const landingText = [
    "Enter the digital realm",
    "Step Into the Future of Digital Experiences",
    "Experience Innovation Beyond Reality",
  ];
  const scrambleTextEffect = (
    text: string,
    scrambleChars: string,
    revealProgress: number
  ) => {
    const length = text.length;
    let scrambledText = text.split("");

    for (let i = 0; i < length; i++) {
      const revealThreshold = i / length; // Revealing progressively based on character position
      if (revealProgress > revealThreshold) {
        scrambledText[i] = text[i]; // Reveal the character
      } else {
        scrambledText[i] =
          scrambleChars[Math.floor(Math.random() * scrambleChars.length)]; // Scramble
      }
    }
    return scrambledText.join("");
  };
  useGSAP(() => {
    const animText = document.querySelector(".anim-text");
    const scrambleChars = "!<>-_\\/[]{}-=+*";

    const masterTl = gsap.timeline({ repeat: -1, delay: 1 });

    landingText.forEach((sentence, i) => {
      const tl = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1,
        ease: "power2.out",
      });

      tl.to(
        { progress: 0 },
        {
          progress: 1,
          duration: 3,
          onUpdate: function () {
            const progress = this.targets()[0].progress;
            let currentText = scrambleTextEffect(
              sentence,
              scrambleChars,
              progress
            );
            animText!.textContent = currentText;
          },
          onComplete: () => {
            animText!.textContent = sentence; // Set final text after scrambling
          },
        }
      );

      masterTl.add(tl, i * 4); // Adjust timing for each sentence
    });
  }, []);
  return (
    <div className="main-page-overlay-wrapper">
      <div className="main-head">
        <span className="anim-text">Enter the digital realm</span>
      </div>
    </div>
  );
};

export default MainPageOverlay;
