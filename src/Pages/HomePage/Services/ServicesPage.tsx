import React, { useRef, useEffect } from "react";
import "./ServicesPage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EngageSVG from "/public/SVGs/Engagesvg.svg";
import InnovateSVG from "/public/SVGs/Innovatesvg.svg";
import TrasformSVG from "/public/SVGs/Transformsvg.svg";
import ArrowSVG from "/public/SVGs/rightarrow.svg";
import TriangleSVG from "/public/SVGs/triangleSVG.svg";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const ServicesPage: React.FC = () => {
  useGSAP(() => {
    gsap.from(".services-heading-black", {
      opacity: 0,
      xPercent: -100,
      scrollTrigger: {
        trigger: ".services-heading-wrapper",
        start: "top bottom",
        end: "top 30%",
        scrub: true,
      },
    });
    gsap.from(".services-heading-blue", {
      opacity: 0,
      xPercent: -100,
      scrollTrigger: {
        trigger: ".services-heading-wrapper",
        start: "top bottom",
        end: "top 30%",
        scrub: true,
      },
    });
    gsap.from(".services-content-wrapper", {
      opacity: 0,
      xPercent: 100,
      scrollTrigger: {
        trigger: ".services-sticky-wrapper",
        start: "top bottom",
        end: "top 30%",
        scrub: true,
      },
    });

    const servicesHeading = gsap.utils.toArray<HTMLDivElement>(
      ".services-sticky-content-heading"
    );
    servicesHeading.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        xPercent: 100,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "top 30%",
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <div className="services-page-wrapper">
      <div className="services-heading-wrapper">
        <span className="services-heading-black">OUR SERVICES</span>
        <span className="services-heading-blue">Immersive solutions</span>
        <span className="services-heading-blue border-bottom">
          Unmatched experiences
        </span>
      </div>
      <div className="services-pinning-wrapper">
        <div className="services-innovate-wrapper services-sticky-wrapper">
          <div className="services-content-wrapper">
            <div className="innovate-heading services-sticky-heading">
              <span>01</span>
            </div>
            <div className="innovate-content services-sticky-content">
              <div className="innovate-content-heading services-sticky-content-heading">
                <span>AI Powered content personalization</span>
              </div>
              <div className="innovate-content-heading services-sticky-content-heading">
                <span>AR Campaigns</span>
              </div>
              <div className="innovate-content-heading services-sticky-content-heading">
                <span>Holographic displays</span>
              </div>
              <div className="innovate-content-heading services-sticky-content-heading">
                <span>VR/MR Experiences</span>
              </div>
            </div>
            <div className="innovate-content-image services-content-image"></div>
          </div>
        </div>

        <div className="services-engage-wrapper services-sticky-wrapper">
          <div className="services-content-wrapper services-content-different">
            <div className="engage-heading services-sticky-heading">
              <span>02</span>
            </div>
            <div className="engage-content services-sticky-content">
              <div className="engage-content-heading services-sticky-content-heading">
                <span>Interactive website development</span>
              </div>
              <div className="engage-content-heading services-sticky-content-heading">
                <span>Marketing campaign designs</span>
              </div>
              <div className="engage-content-heading services-sticky-content-heading">
                <span>VR Training programs</span>
              </div>
              <div className="engage-content-heading services-sticky-content-heading">
                <span>3D Motion graphics</span>
              </div>
            </div>
            <div className="engage-content-image services-content-image"></div>
          </div>
        </div>
        <div className="services-transform-wrapper services-sticky-wrapper">
          <div className="services-content-wrapper transform-content-wrapper">
            <div className="transform-heading services-sticky-heading">
              <span>03</span>
            </div>
            <div className="transform-content services-sticky-content">
              <div className="transform-content-heading services-sticky-content-heading">
                <span>Product launch event activations</span>
              </div>
              <div className="transform-content-heading services-sticky-content-heading">
                <span>Next-Gen Event installations</span>
              </div>
              <div className="transform-content-heading services-sticky-content-heading">
                <span>Virtual events</span>
              </div>
              <div className="transform-content-heading services-sticky-content-heading">
                <span>Metaverse development</span>
              </div>
            </div>
            <div className="transform-content-image services-content-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesPage;
