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
  const innovateRef = useRef<HTMLDivElement>(null);
  const engageRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef<HTMLDivElement>(null);

  const engageHeadingRef = useRef<HTMLDivElement>(null);
  const pinningWrapperRef = useRef<HTMLDivElement>(null);
  const spacing = 10; // Spacing between each wrapper

  useGSAP(() => {
    const servicesWrappers = [
      innovateRef.current,
      engageRef.current,
      transformRef.current,
    ];

    let accumulatedHeight = 0;

    // Position each sticky wrapper dynamically within the `.services-pinning-wrapper`
    servicesWrappers.forEach((wrapper) => {
      if (wrapper) {
        // Set the top position based on the accumulated height plus spacing
        console.log(accumulatedHeight);
        wrapper.style.top = `${accumulatedHeight}px`;
        console.log(wrapper.className + ": " + wrapper.style.top);
        accumulatedHeight += wrapper.offsetHeight + spacing; // Add spacing between sections
      }
    });

    // Set the height of the pinning wrapper based on the accumulated height of its children
    if (pinningWrapperRef.current) {
      pinningWrapperRef.current.style.height = `${accumulatedHeight}px`;
    }

    // Calculate the common end point based on transformRef's top reaching engageHeadingRef's bottom
    const calculateEnd = () => {
      if (transformRef.current && engageHeadingRef.current) {
        const transformTop = transformRef.current.getBoundingClientRect().top;
        const engageBottom =
          engageHeadingRef.current.getBoundingClientRect().bottom;
        return `+=${transformTop - engageBottom}`;
      }
      return "top top";
    };

    ScrollTrigger.create({
      trigger: innovateRef.current,
      start: "top+=10% top",
      pin: true,
      endTrigger: transformRef.current,
      end: "top top+=10%",
    });
    ScrollTrigger.create({
      trigger: engageRef.current,
      start: "top-=5% top+=10%",
      pin: true,
      end: () => calculateEnd(),
    });
  }, []);
  return (
    <div className="services-page-wrapper">
      <div className="services-heading-wrapper">
        <span className="services-heading-black">OUR SERCVICES</span>
        <span className="services-heading-blue">Immersive solutions</span>
        <span className="services-heading-blue border-bottom">
          Unmatched experiences
        </span>
      </div>
      <div className="services-pinning-wrapper" ref={pinningWrapperRef}>
        <div
          className="services-innovate-wrapper services-sticky-wrapper"
          ref={innovateRef}
        >
          <div className="services-content-wrapper">
            <div className="services-content-left">
              <div className="innovate-heading services-sticky-heading">
                <span>
                  <img src={InnovateSVG} alt="" />
                </span>
                <span>Innovate</span>
              </div>
              <div className="innovate-content services-sticky-content">
                <div className="innovate-content-heading services-sticky-content-heading">
                  <span>
                    <img src={TriangleSVG} alt="" />
                  </span>
                  <span>AI Powered content personalization</span>
                </div>
                <div className="innovate-content-heading services-sticky-content-heading">
                  <span>
                    <img src={TriangleSVG} alt="" />
                  </span>
                  <span>AR Campaigns</span>
                </div>
                <div className="innovate-content-heading services-sticky-content-heading">
                  <span>
                    <img src={TriangleSVG} alt="" />
                  </span>
                  <span>Holographic displays</span>
                </div>
                <div className="innovate-content-heading services-sticky-content-heading">
                  <span>
                    <img src={TriangleSVG} alt="" />
                  </span>
                  <span>VR/MR Experiences</span>
                </div>
              </div>
            </div>
            <div className="services-content-right">
              <div className="innovate-content-image services-content-image"></div>
            </div>
          </div>
        </div>

        <div
          className="services-engage-wrapper services-sticky-wrapper"
          ref={engageRef}
        >
          <div className="services-content-wrapper services-content-different">
            <div className="services-content-left">
              <div
                className="engage-heading services-sticky-heading"
                ref={engageHeadingRef}
              >
                <span>
                  <img src={EngageSVG} alt="" />
                </span>
                <span>Engage</span>
              </div>
              <div className="engage-content services-sticky-content">
                <div className="engage-content-heading services-sticky-content-heading">
                  <span>
                    <img src={TriangleSVG} alt="" />
                  </span>
                  <span>Interactive website development</span>
                </div>
                <div className="engage-content-heading services-sticky-content-heading">
                  <span>
                    <img src={TriangleSVG} alt="" />
                  </span>
                  <span>Marketing campaign designs</span>
                </div>
                <div className="engage-content-heading services-sticky-content-heading">
                  <span>
                    <img src={TriangleSVG} alt="" />
                  </span>
                  <span>VR Training programs</span>
                </div>
                <div className="engage-content-heading services-sticky-content-heading">
                  <span>
                    <img src={TriangleSVG} alt="" />
                  </span>
                  <span>3D Motion graphics</span>
                </div>
              </div>
            </div>
            <div className="services-content-right">
              <div className="engage-content-image services-content-image"></div>
            </div>
          </div>
        </div>
        <div
          className="services-transform-wrapper services-sticky-wrapper"
          ref={transformRef}
        >
          <div className="services-content-wrapper">
            <div className="services-content-left">
              <div className="transform-heading services-sticky-heading">
                <span>
                  <img src={TrasformSVG} alt="" />
                </span>
                <span>Transform</span>
              </div>
              <div className="transform-content services-sticky-content">
                <div className="transform-content-heading services-sticky-content-heading">
                  <span>
                    <img src={TriangleSVG} alt="" />
                  </span>
                  <span>Product launch event activations</span>
                </div>
                <div className="transform-content-heading services-sticky-content-heading">
                  <span>
                    <img src={TriangleSVG} alt="" />
                  </span>
                  <span>Next-Gen Event installations</span>
                </div>
                <div className="transform-content-heading services-sticky-content-heading">
                  <span>
                    <img src={TriangleSVG} alt="" />
                  </span>
                  <span>Virtual events</span>
                </div>
                <div className="transform-content-heading services-sticky-content-heading">
                  <span>
                    <img src={TriangleSVG} alt="" />
                  </span>
                  <span>Metaverse development</span>
                </div>
              </div>
            </div>
            <div className="services-content-right">
              <div className="transform-content-image services-content-image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesPage;
