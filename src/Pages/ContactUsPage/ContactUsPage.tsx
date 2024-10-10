import React, { useRef } from "react";
import "./ContactUsPage.css";
import SmallCTA from "../../SmallCTA";
import ContactForm from "./Form/ContactForm";
import LogoHeader from "../HomePage/MainPage/LogoHeader";
import { useGSAP } from "@gsap/react";
const ContactUsPage: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const logoHeader =
      document.querySelector<HTMLDivElement>(".logo-container");
    if (logoHeader) {
      const offsetHeight = logoHeader.offsetHeight;
      console.log(offsetHeight);
      wrapperRef.current!.style.top = offsetHeight + "px";
    }
  });
  return (
    <div className="contact-us-page-container">
      <LogoHeader></LogoHeader>
      <div className="contact-us-page-wrapper" ref={wrapperRef}>
        <div className="contact-us-page-header">
          <span>Contact US</span>
          <span>We're Excited To Talk About Your Next Big Idea!</span>
        </div>
        <div className="contact-us-form-container">
          <ContactForm></ContactForm>
        </div>
        <SmallCTA></SmallCTA>
      </div>
    </div>
  );
};
export default ContactUsPage;
