import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import LogoHeader from "../HomePage/MainPage/LogoHeader";
import CTA from "../HomePage/CTA/cta";
import Footer from "../../Footer/Footer";
import "./CaseStudy.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Import Splide styles
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowSVG from "/public/Images/svgs/Arrow.svg";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const projectData = {
  "3dinteractivewebstore": {
    title: '3D Interactive <span style="color: #DA5049;">Web Store',
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
    ],
    catchyHeading: "Step into Shopping: Explore the 3D Interactive Webstore",
  },
  // Add other project data similarly...
};

type ProjectDataKey = keyof typeof projectData;
const CaseStudy: React.FC = () => {
  const { projectId } = useParams<{ projectId: ProjectDataKey }>();
  const project = projectData[projectId!];
  const imageRefs = useRef<HTMLImageElement[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Function to load all images and video asynchronously
  const loadContent = async () => {
    const imagePromises = imageRefs.current.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve(); // Already loaded
          } else {
            img.onload = () => resolve(); // Wait for load
          }
        })
    );

    const videoPromise = new Promise<void>((resolve) => {
      if (videoRef.current?.readyState === 4) {
        resolve(); // Video is ready
      } else {
        videoRef.current!.onloadeddata = () => resolve(); // Wait for video load
      }
    });

    await Promise.all([...imagePromises, videoPromise]);
  };

  // Function to initialize GSAP animations
  const initializeAnimations = () => {
    gsap.from(".case-study-title", {
      opacity: 0,
      xPercent: -50,
      scrollTrigger: {
        trigger: ".case-study-title",
        start: "top bottom",
      },
    });
    gsap.from(".case-study-video", {
      opacity: 0,
      xPercent: -50,
      scrollTrigger: {
        trigger: ".case-study-video",
        start: "top bottom",
        end: "top 30%",
        scrub: true,
        markers: true,
      },
    });

    gsap.from(".point-image", {
      opacity: 0,
      xPercent: -50,
      scrollTrigger: {
        trigger: ".case-study-point-wrapper",
        start: "top bottom",
        end: "top 30%",
        scrub: true,
      },
    });
    gsap.from(".point-text-heading", {
      opacity: 0,
      xPercent: 50,
      scrollTrigger: {
        trigger: ".case-study-point-wrapper",
        start: "top bottom",
        end: "top 30%",
        scrub: true,
      },
    });
    gsap.from(".point-text-para", {
      opacity: 0,
      xPercent: 50,
      scrollTrigger: {
        trigger: ".case-study-point-wrapper",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });
    gsap.from(".case-study-catchy-heading", {
      opacity: 0,
      xPercent: 50,
      scrollTrigger: {
        trigger: ".case-study-catchy-heading",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
        markers: false,
      },
    });

    const gridItems = gsap.utils.toArray<HTMLDivElement>(".grid-item");
    gridItems.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        xPercent: 50,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });

    ScrollTrigger.refresh();
  };
  useGSAP(async () => {
    await loadContent(); // Wait for all content to load
    initializeAnimations(); // Initialize GSAP animations after loading
    ScrollTrigger.refresh();
  }, [projectId]);

  return (
    <div className="case-study-wrapper">
      <LogoHeader></LogoHeader>
      <div className="case-study-main-page">
        <img
          ref={(el) => el && imageRefs.current.push(el)}
          src={project!.titleImgUrl}
          alt="."
        />
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
          <span dangerouslySetInnerHTML={{ __html: project.title }}></span>
        </div>
      </div>
      <div className="case-study-video">
        <video
          ref={videoRef}
          src={project.videoUrl}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="case-study-point-wrapper">
        <div id="point-text-id" className="case-study-point">
          <div className="point-image-container">
            <div className="point-image">
              <img
                ref={(el) => el && imageRefs.current.push(el)}
                src={project!.infoImgUrl}
                alt=""
              />
            </div>
          </div>
          <div className="point-text-wrapper">
            <div className="point-text-content">
              <div className="point-text-heading">
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="27.5" cy="27.5" r="27.5" fill="#F3B1AE" />
                </svg>

                <span
                  dangerouslySetInnerHTML={{ __html: project.title }}
                ></span>
              </div>
              <div className="point-text-para">
                <span dangerouslySetInnerHTML={{ __html: project.how }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="case-study-image-grid-wrapper">
        {project.imageUrls.map((url, index) => (
          <div className={`grid-item grid-item-${index + 1}`} key={index}>
            <img
              ref={(el) => el && imageRefs.current.push(el)}
              src={url}
              alt={`Project image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="catchy-wrapper">
        <div id="case-study-cta" className="case-study-catchy-heading">
          <span>Step into Shopping: Explore the 3D Interactive Webstore</span>
        </div>
      </div>
      <CTA></CTA>
    </div>
  );
};
export default CaseStudy;
