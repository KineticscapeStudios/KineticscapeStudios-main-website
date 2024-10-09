import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import LogoHeader from "../HomePage/MainPage/LogoHeader";
import CTA from "../HomePage/CTA/cta";
import Footer from "../../Footer/Footer";
import "./CaseStudy.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Import Splide styles
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ArrowSVG from "/public/Images/svgs/Arrow.svg";

gsap.registerPlugin(ScrollToPlugin);
const projectData = {
  "3dinteractivewebstore": {
    title: "3D Interactive Web Store",
    tags: ["RETAIL", "WEB DEVELOPMENT"],
    videoUrl: "/public/CaseStudies/Videos/ImmersiveRealEstate.mp4",
    titleImgUrl:
      "/public/CaseStudies/ImmersiveEstate/Images/dummies/dummy1.png",
    infoImgUrl: "/public/CaseStudies/ImmersiveEstate/Images/dummies/dummy1.png",
    how: 'Lorem ipsum is the thing that looks like this its just random text that <span style="color: #6B8CF2;">doesnt need anythning</span> and doesnt mean anything its just a text that represents a colony a city or a fucking thing which doesnt matter as we are a small thing in this universe so this random text is more smaller',
    imageUrls: [
      "/public/CaseStudies/ImmersiveEstate/Images/dummies/dummy1.png",
      "/public/CaseStudies/ImmersiveEstate/Images/dummies/dummy1.png",
      "/public/CaseStudies/ImmersiveEstate/Images/dummies/dummy1.png",
      "/public/CaseStudies/ImmersiveEstate/Images/dummies/dummy1.png",
      "/public/CaseStudies/ImmersiveEstate/Images/dummies/dummy1.png",
      "/public/CaseStudies/ImmersiveEstate/Images/dummies/dummy1.png",
      "/public/CaseStudies/ImmersiveEstate/Images/dummies/dummy1.png",
      "/public/CaseStudies/ImmersiveEstate/Images/dummies/dummy1.png",
    ],
    catchyHeading: "Step into Shopping: Explore the 3D Interactive Webstore",
  },
  // Add other project data similarly...
};

type ProjectDataKey = keyof typeof projectData;
const CaseStudy: React.FC = () => {
  const { projectId } = useParams<{ projectId: ProjectDataKey }>();
  const project = projectData[projectId!];
  const ctaRef = useRef<HTMLDivElement>(null);
  const handleMove = (splide: any) => {
    // Check if we've reached the end of the slides
    if (splide.index === splide.length - 1) {
      // Scroll to the CTA section smoothly using gsap
      gsap.to(window, {
        scrollTo: { y: "#case-study-cta", autoKill: false },
        duration: 1.5,
        ease: "power2.inOut",
      });
    }
    if (splide.index === 0) {
      gsap.to(window, {
        scrollTo: { y: "#point-text-id", autoKill: false },
        duration: 1.5,
        ease: "power2.inOut",
        offsetY: 100,
      });
    }
  };
  return (
    <div className="case-study-wrapper">
      <LogoHeader></LogoHeader>
      <div className="case-study-main-page">
        <img src={project!.titleImgUrl} alt="." />
      </div>
      <div className="case-study-heading">
        <div className="case-study-tags">
          {project?.tags.map((tag, index) => (
            <h2 key={index} className="case-study-perTag">
              {tag}
            </h2>
          ))}
        </div>
        <div className="case-study-title">
          <span>{project!.title}</span>
        </div>
      </div>
      <div className="case-study-video">
        <video src={project.videoUrl} autoPlay loop muted playsInline></video>
      </div>
      <div id="point-text-id" className="case-study-point">
        <div className="point-image-container">
          <div className="point-image-border"></div>
          <div className="point-image">
            <img src={project!.infoImgUrl} alt="" />
          </div>
        </div>
        <div className="point-text-wrapper">
          <div className="point-text-content">
            <div className="point-text-heading">
              <span>
                HOW WE <span className="text-color">DID IT</span>
              </span>
            </div>
            <div className="point-text-para">
              <span dangerouslySetInnerHTML={{ __html: project.how }}></span>
            </div>
          </div>
          <img src={ArrowSVG} alt="" />
        </div>
      </div>
      <div className="case-study-images-carousel">
        <Splide
          options={{
            perPage: 3,
            start: 0,
            focus: "center",
            gap: "1rem",
            autoplay: false,
            wheel: true,
            padding: { left: "5rem", right: "5rem" },
            arrows: false,
            pagination: false,
          }}
          onMove={handleMove}
        >
          <SplideSlide>
            <div className="carousel-image-container">
              <div className="carousel-image"></div>
            </div>
          </SplideSlide>
          {project.imageUrls.map((image, index) => (
            <SplideSlide key={index}>
              <div className="carousel-image-container">
                <div className="carousel-image-border"></div>
                <div className="carousel-image">
                  <img src={image} alt="" />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="catchy-wrapper">
        <img
          className="catchy-bg"
          src="/public/Images/Backgrounds/CaseStudy/catchy.png"
          alt=""
        />
        <div id="case-study-cta" className="case-study-catchy-heading">
          <span>Step into Shopping: Explore the 3D Interactive Webstore</span>
        </div>
      </div>
      <CTA></CTA>
    </div>
  );
};
export default CaseStudy;
