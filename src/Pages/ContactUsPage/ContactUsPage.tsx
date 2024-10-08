import React from "react";
import "./ContactUsPage.css";
import Footer from "../../Footer/Footer";
import ContactForm from "./Form/ContactForm";
import LogoHeader from "../HomePage/MainPage/LogoHeader";
const ContactUsPage: React.FC = () => {
  return (
    <div className="contact-us-page-wrapper">
      <LogoHeader></LogoHeader>
      <div className="contact-us-main-header">
        <span>CONTACT</span>
        <span>US</span>
      </div>
      <div className="contact-us-page-header">
        <h1>SAY HELLO</h1>
        <span>We're Excited To Talk About Your Next Big Idea!</span>
      </div>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};
export default ContactUsPage;
