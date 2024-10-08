import React from "react";
import HarnessingSVG from "/public/SVGs/harnessing.svg";
import interactiveSVG from "/public/SVGs/interactiveweb.svg";
import FutureProofSVG from "/public/SVGs/futureproof.svg";
import storySVG from "/public/SVGs/storysvg.svg";
import boldSVG from "/public/SVGs/boldsvg.svg";
import boundarySVG from "/public/SVGs/boundarysvg.svg";
import ToolsSVG from "/public/SVGs/toolssvg.svg";
import integrationSvg from "/public/SVGs/integrationsvg.svg";
import qualitySVG from "/public/SVGs/qualitysvg.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./WhyUS.css";

const WhyUS: React.FC = () => {
  useGSAP(() => {
    // Apply GSAP animations to each card
    gsap.utils.toArray(".why-us-sub-info").forEach((card: any) => {
      gsap.set(card, {
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      });

      const front = card.querySelector(".front");
      const back = card.querySelector(".back");

      gsap.set(back, { rotationY: -180 });

      const tl = gsap
        .timeline({ paused: true })
        .to(front, { duration: 1, rotationY: 180 })
        .to(back, { duration: 1, rotationY: 0 }, 0)
        .to(card, { z: 50 }, 0)
        .to(card, { z: 0 }, 0.5);

      card.addEventListener("mouseenter", () => {
        tl.play();
      });

      card.addEventListener("mouseleave", () => {
        tl.reverse();
      });
    });
  }, []);

  return (
    <div className="why-us-container">
      <div className="why-us-wrapper">
        <div className="why-us-heading">
          <div className="why-us-heading-left">
            <span>WHY US?</span>
            <span>We go beyond</span>
            <span>Here’s why you should choose us</span>
          </div>
          <div className="wh-us-heading-right"></div>
        </div>
        <div className="why-us-content">
          <div className="why-us-sub-content">
            <div className="why-us-card">
              <div className="why-us-sub-info sub-blue">
                <div className="why-us-sub-inner">
                  <div className="front">
                    <img src={HarnessingSVG} alt="" />
                    <div className="why-us-sub-content-heading ">
                      Harnessing the latest in AR/VR
                    </div>
                  </div>
                  <div className="back">
                    <span>
                      We leverage advanced techonologies to create unforgettable
                      experiences.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-us-card">
              <div className="why-us-sub-info sub-white">
                <div className="why-us-sub-inner">
                  <div className="front">
                    <img src={interactiveSVG} alt="" />
                    <div className="why-us-sub-content-heading ">
                      Interactive web 3D experiences
                    </div>
                  </div>
                  <div className="back">
                    <span>
                      We bring your brand to life through immersive 3D web
                      elements.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-us-card">
              <div className="why-us-sub-info sub-white">
                <div className="why-us-sub-inner">
                  <div className="front">
                    <img src={FutureProofSVG} alt="" />
                    <div className="why-us-sub-content-heading ">
                      Future proof solutions
                    </div>
                  </div>
                  <div className="back">
                    <span>
                      Implementation of scalable solutions designed to adapt to
                      evolving tech trends.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="why-us-sub-content">
            <div className="why-us-card">
              <div className="why-us-sub-info sub-white">
                <div className="why-us-sub-inner">
                  <div className="front">
                    <img src={boldSVG} alt="" />
                    <div className="why-us-sub-content-heading ">
                      Bold, Out-Of-The-Box concepts
                    </div>
                  </div>
                  <div className="back">
                    <span>
                      We craft unique ideas that capture your audience’s
                      imagination.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-us-card">
              <div className="why-us-sub-info sub-black">
                <div className="why-us-sub-inner">
                  <div className="front">
                    <img src={storySVG} alt="" />
                    <div className="why-us-sub-content-heading ">
                      Storytelling through Immersion
                    </div>
                  </div>
                  <div className="back">
                    <span>
                      We use immersive techniques to create compelling brand
                      narratives.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-us-card">
              <div className="why-us-sub-info sub-white">
                <div className="why-us-sub-inner">
                  <div className="front">
                    <img src={boundarySVG} alt="" />
                    <div className="why-us-sub-content-heading ">
                      Pushing boundaries
                    </div>
                  </div>
                  <div className="back">
                    We Always explore new creative frontiers to set your brand
                    apart.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="why-us-sub-content">
            <div className="why-us-card">
              <div className="why-us-sub-info sub-black">
                <div className="why-us-sub-inner">
                  <div className="front">
                    <img src={ToolsSVG} alt="" />
                    <div className="why-us-sub-content-heading ">
                      Industry-Leading tools
                    </div>
                  </div>
                  <div className="back">
                    <span>
                      We are skilled in utilizing cutting-edge software and
                      tools for seamless and flawless event activations.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-us-card">
              <div className="why-us-sub-info sub-white">
                <div className="why-us-sub-inner">
                  <div className="front">
                    <img src={integrationSvg} alt="" />
                    <div className="why-us-sub-content-heading ">
                      Seamless integration
                    </div>
                  </div>
                  <div className="back">
                    <span>
                      We ensure our solutions integrate smoothly with your
                      existing platforms.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-us-card">
              <div className="why-us-sub-info sub-blue">
                <div className="why-us-sub-inner">
                  <div className="front">
                    <img src={qualitySVG} alt="" />
                    <div className="why-us-sub-content-heading ">
                      Quality assurance
                    </div>
                  </div>
                  <div className="back">
                    <span>
                      Rigorous testing and optimization to deliver
                      high-performance experiences.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyUS;
