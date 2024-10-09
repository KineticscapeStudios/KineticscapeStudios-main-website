import React, { useRef } from "react";
import "./OurCraftCarousel.css";
import { gsap } from "gsap";
import { Power3, Power4 } from "gsap";
import { TweenMax } from "gsap/gsap-core";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
const projects = [
  {
    id: 1,
    title: "3D Interactive Web Store",
    videoUrl: "/path/to/your/video1.mp4",
    route: "3dinteractivewebstore",
  },
  {
    id: 2,
    title: "Real Estate Virtual Tour",
    videoUrl: "/path/to/your/video2.mp4",
    route: "realestatevirtualtour",
  },
  {
    id: 3,
    title: "Zero Gravity Simulator (VR)",
    videoUrl: "/path/to/your/video3.mp4",
    route: "zerogravitysimulator",
  },
  {
    id: 4,
    title: "Virtual E-Commerce Store",
    videoUrl: "/path/to/your/video4.mp4",
    route: "virtualecommercestore",
  },
  {
    id: 5,
    title: "AR Advertisement",
    videoUrl: "/path/to/your/video5.mp4",
    route: "aradvertisement",
  },
  {
    id: 6,
    title: "Race 2 Win (IoT Integrated Game)",
    videoUrl: "/path/to/your/video6.mp4",
    route: "race2winiotgame",
  },
  {
    id: 7,
    title: "Interactive Websites",
    videoUrl: "/path/to/your/video7.mp4",
    route: "interactivewebsites",
  },
];
const OurCraftCarousel: React.FC = () => {
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const logoHeader =
      document.querySelector<HTMLDivElement>(".logo-container");
    const ctaSection =
      document.querySelector<HTMLDivElement>(".our-crafts-cta");
    if (logoHeader) {
      const offsetHeight = logoHeader.offsetHeight;
      console.log(offsetHeight);
      wrapperRef.current!.style.top = offsetHeight + "px";
      ctaSection!.style.marginTop = offsetHeight + "px";
    }
  });
  return (
    <div className="our-craft-carousel-wrapper" ref={wrapperRef}>
      <div className="our-craft-heading">
        <h1>OUR CRAFTS</h1>
      </div>

      <div className="carousel-list">
        {projects.map((project, index) => (
          <div
            className="carousel-item"
            key={project.id}
            data-item-id={index}
            onClick={() => {
              console.log("clicked");
              navigate(`/case-studies/${project.route}`);
            }}
          >
            <div className="carousel-project-image">
              {/* <img className="carousel-video" src={project.videoUrl} /> */}
            </div>

            <div className="carousel-item-content">
              <h2 className="carousel-item-title">{project.title}</h2>
              <div className="carousel-item-tags">
                <div className="carousel-project-tag">Lorem</div>
              </div>
              <div className="view-project-btn">
                <span>View project</span>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="c-gradient-overlay"></div>
    </div>
  );
};
export default OurCraftCarousel;
