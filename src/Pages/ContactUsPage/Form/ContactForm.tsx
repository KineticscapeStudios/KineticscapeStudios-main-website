import React from "react";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form-wrapper">
      <div className="contact-form">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="">Select your country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            {/* Add more country options as needed */}
          </select>

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" />

          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="description">Short Project Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Describe your project..."
          ></textarea>

          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
