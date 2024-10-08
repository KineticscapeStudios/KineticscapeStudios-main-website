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
  const listRef = useRef<HTMLUListElement | null>(null);
  const videosRef = useRef<HTMLVideoElement[]>([]);
  const navigate = useNavigate();
  useGSAP(() => {
    const listItems = listRef.current?.querySelectorAll(".carousel-item");

    // Set initial styles for carousel items
    gsap.set(listItems!, { opacity: 0.6, scale: 0.9 });

    // Mouse hover and leave animations
    listItems?.forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, { opacity: 1, scale: 1.1, duration: 0.3 });
        videosRef.current[index].play();
        gsap.to(videosRef.current[index], { autoAlpha: 1, duration: 0.5 });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, { opacity: 0.6, scale: 0.9, duration: 0.3 });
        videosRef.current[index].pause();
        videosRef.current[index].currentTime = 0;
        gsap.to(videosRef.current[index], { autoAlpha: 0, duration: 0.5 });
      });
    });

    // Vertical scroll effect
    const handleMouseMove = (event: MouseEvent) => {
      const listHeight = listRef.current!.clientHeight;
      const posY = event.clientY - listRef.current!.offsetTop;
      const offset = (-posY / window.innerHeight) * listHeight;
      gsap.to(listRef.current, { y: offset, ease: "power4.out" });
    };

    // Add the mousemove event listener to the container
    listRef.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up event listeners on component unmount
      listRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="our-craft-carousel-wrapper">
      <h1>OUR</h1>
      <h1>CRAFTS</h1>

      <ul className="carousel-list" ref={listRef}>
        {projects.map((project, index) => (
          <li
            className="carousel-item"
            key={project.id}
            data-item-id={index}
            onClick={() => {
              console.log("clicked");
              navigate(`/case-studies/${project.route}`);
            }}
          >
            <div className="carousel-item-content">
              <h2 className="carousel-item-title">{project.title}</h2>
            </div>
            <video
              ref={(el) => (videosRef.current[index] = el!)}
              className="carousel-video"
              src={project.videoUrl}
              muted
            />
          </li>
        ))}
      </ul>
      <div className="c-gradient-overlay"></div>
    </div>
  );
};
export default OurCraftCarousel;
