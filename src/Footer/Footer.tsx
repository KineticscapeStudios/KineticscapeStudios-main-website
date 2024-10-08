import React, { useRef } from "react";
import "./Footer.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const Footer: React.FC = () => {
  const refs = useRef<HTMLDivElement[]>([]);

  // Add span refs dynamically to the refs array
  const addtoRefs = (el: HTMLDivElement) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  useGSAP(() => {
    // Animate the fade-in and movement for each section
    refs.current.forEach((element) => {
      gsap.from(element, {
        opacity: 0.1,
        x: -100,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <div className="footer-wrapper" ref={addtoRefs}>
      <div className="footer-content-wrapper">
        <div className="logo-wrapper">
          <img src="/public/Images/KineticscapestudiosLogo.png" alt="" />
        </div>
        <div className="socials-wrapper">
          <div className="socials-heading">
            <h1>FOLLOW US</h1>
          </div>
          <div className="social-link">
            <img src="/public/Images/socials/insta.png" alt="" />
            <h1>Instagram</h1>
          </div>
          <div className="social-link">
            <img src="/public/Images/socials/LinkedIn.png" alt="" />
            <h1>LinkedIn</h1>
          </div>
        </div>
        <div className="newsletter-wrapper">
          <h1>
            Stay up to date on the latest features and releases by joining our
            newsletter.
          </h1>
          <div className="subscribe-wrapper">
            <div className="email-wrapper">
              <input
                type="email"
                placeholder="Your email address"
                className="email-input"
              />
            </div>
            <div className="subscribe-btn">
              <h1>Subscribe</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-img-wrapper">
        <img src="/public/Images/footer/footerImage.png" alt="" />
      </div>
    </div>
  );
};
export default Footer;
