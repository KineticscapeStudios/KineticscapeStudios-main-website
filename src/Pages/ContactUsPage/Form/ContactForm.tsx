import React from "react";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <div className="contact-form-heading">
          <span>Discuss the project</span>
          <span>Fill out the form below we will contact you</span>
        </div>
        <div className="contact-form-div">
          <form className="contact-form">
            <label htmlFor="name">Type your name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="what's your name?"
            />

            <label htmlFor="email">Type your email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="what's your email?"
            />

            <button type="submit" className="submit-btn">
              DISCUSS THE PROJECT{" "}
              <svg
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6493 48.4184L48.3762 15.6914"
                  stroke="black"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M49.3795 48.0734L48.3785 15.6908L15.996 16.6918"
                  stroke="black"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
