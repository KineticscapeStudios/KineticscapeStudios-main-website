import React, { useRef } from "react";
import "./OurProjects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
interface Project {
  heading: string;
  videoUrl: string;
  description: string;
}

gsap.registerPlugin(ScrollTrigger);

const projectList: Project[] = [
  {
    heading: "Project 1",
    videoUrl: "https://path-to-your-video1.mp4", // Replace with actual video URL
    description: `This is a project description with colorful text.`,
  },
  {
    heading: "Project 2",
    videoUrl: "https://path-to-your-video1.mp4", // Replace with actual video URL
    description: `This is a project description with colorful text.`,
  },
  {
    heading: "Project 3",
    videoUrl: "https://path-to-your-video1.mp4", // Replace with actual video URL
    description: `This is a project description with colorful text.`,
  },
  {
    heading: "Project 4",
    videoUrl: "https://path-to-your-video1.mp4", // Replace with actual video URL
    description: `This is a project description with colorful text.`,
  },
  {
    heading: "Project 5",
    videoUrl: "https://path-to-your-video1.mp4", // Replace with actual video URL
    description: `This is a project description with colorful text.`,
  },
  // Add more projects here
];
const OurProjects: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const projectSections =
      gsap.utils.toArray<HTMLElement>(".projects-wrapper");
    let tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".our-projects-container",
        pin: true,
        scrub: 1,
        snap: 1 / (projectList.length - 1),
        end: () => "+=" + listRef.current!.offsetWidth,
      },
    });
    tl.to(".projects-wrapper", {
      xPercent: -100 * (projectList.length - 1),
    });

    projectSections.forEach((el, index) => {
      const content = el!.querySelector(".project-description-wrapper");
      const video = el!.querySelector(".project-video");
      tl.from(content, {
        yPercent: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "left center",
          end: "center center",
          containerAnimation: tl,
          scrub: true,
        },
      }).from(video, {
        yPercent: 50,
        xPercent: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "left center",
          end: "center center",
          containerAnimation: tl,
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <div className="our-projects-container">
      <div className="our-projects-wrapper">
        <div className="our-projects-heading">
          <span>Our crafts</span>
        </div>
        <div className="our-projects-list" ref={listRef}>
          {projectList.map((project, index) => (
            <div className="projects-wrapper" key={index}>
              <div className="project-description-wrapper">
                <div className="project-heading">{project.heading}</div>
                <div
                  className="project-content"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></div>
                <div className="projects-viewmore-btn">
                  <span>View More...</span>
                </div>
              </div>
              <div className="project-video">
                {/* <video src={project.videoUrl} controls /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurProjects;
