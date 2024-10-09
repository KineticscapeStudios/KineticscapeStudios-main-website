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
              <div className="why-us-sub-inner">
                <div className="front content-blue">
                  <img src={HarnessingSVG} alt="" />
                  <div className="why-us-sub-content-heading ">
                    Harnessing the latest in AR/VR
                  </div>
                </div>
                <div className="back content-black">
                  <span>
                    We leverage advanced techonologies to create unforgettable
                    experiences.
                  </span>
                </div>
              </div>
            </div>
            <div className="why-us-card">
              <div className="why-us-sub-inner">
                <div className="front content-white">
                  <img src={interactiveSVG} alt="" />
                  <div className="why-us-sub-content-heading ">
                    Interactive web 3D experiences
                  </div>
                </div>
                <div className="back content-blue">
                  <span>
                    We leverage advanced techonologies to create unforgettable
                    experiences.
                  </span>
                </div>
              </div>
            </div>
            <div className="why-us-card">
              <div className="why-us-sub-inner">
                <div className="front content-white">
                  <img src={FutureProofSVG} alt="" />
                  <div className="why-us-sub-content-heading ">
                    Future-Proof solutions
                  </div>
                </div>
                <div className="back content-blue">
                  <span>
                    We leverage advanced techonologies to create unforgettable
                    experiences.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="why-us-sub-content">
            <div className="why-us-card">
              <div className="why-us-sub-inner">
                <div className="front content-blue">
                  <img src={boldSVG} alt="" />
                  <div className="why-us-sub-content-heading ">
                    Bold, Out-Of-The-Box concepts
                  </div>
                </div>
                <div className="back content-black">
                  <span>
                    We leverage advanced techonologies to create unforgettable
                    experiences.
                  </span>
                </div>
              </div>
            </div>
            <div className="why-us-card">
              <div className="why-us-sub-inner">
                <div className="front content-black">
                  <img src={storySVG} alt="" />
                  <div className="why-us-sub-content-heading ">
                    Storytelling through immersion
                  </div>
                </div>
                <div className="back content-white">
                  <span>
                    We leverage advanced techonologies to create unforgettable
                    experiences.
                  </span>
                </div>
              </div>
            </div>
            <div className="why-us-card">
              <div className="why-us-sub-inner">
                <div className="front content-white">
                  <img src={boundarySVG} alt="" />
                  <div className="why-us-sub-content-heading ">
                    Pushing boundaries
                  </div>
                </div>
                <div className="back content-blue">
                  <span>
                    We leverage advanced techonologies to create unforgettable
                    experiences.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="why-us-sub-content">
            <div className="why-us-card">
              <div className="why-us-sub-inner">
                <div className="front content-black">
                  <img src={ToolsSVG} alt="" />
                  <div className="why-us-sub-content-heading ">
                    Indistry-Leading tools
                  </div>
                </div>
                <div className="back content-white">
                  <span>
                    We leverage advanced techonologies to create unforgettable
                    experiences.
                  </span>
                </div>
              </div>
            </div>
            <div className="why-us-card">
              <div className="why-us-sub-inner">
                <div className="front content-white">
                  <img src={integrationSvg} alt="" />
                  <div className="why-us-sub-content-heading ">
                    Seamless integration
                  </div>
                </div>
                <div className="back content-blue">
                  <span>
                    We leverage advanced techonologies to create unforgettable
                    experiences.
                  </span>
                </div>
              </div>
            </div>
            <div className="why-us-card">
              <div className="why-us-sub-inner">
                <div className="front content-blue">
                  <img src={qualitySVG} alt="" />
                  <div className="why-us-sub-content-heading ">
                    Quality assuarance
                  </div>
                </div>
                <div className="back content-black">
                  <span>
                    We leverage advanced techonologies to create unforgettable
                    experiences.
                  </span>
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
