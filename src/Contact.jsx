import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-details">
        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <span> ssalcedo@gbox.ncf.edu.ph</span>
        </div>
        <div className="contact-item">
          <span className="contact-label">Phone:</span>
          <span> 0994 889 4661</span>
        </div>
        <div className="contact-item">
          <span className="contact-label">Address:</span>
          <span> Zone 3, Tibgao, Canaman Camarines Sur</span>
        </div>
      </div> 

      {/* Social Media Section */}
      <div className="social-media">
        <h2>Follow Me on My Social Media: </h2>
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/shenn.salcedo3" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/love_aphrodeity/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/Shen-is-pretty" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
