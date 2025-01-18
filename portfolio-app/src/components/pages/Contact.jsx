import React from "react";
import "/src/components/styles/Contact.css";
import mail from "/src/components/img/communication.png";
import github from "/src/components/img/github.png";
import linked from "/src/components/img/linkedin.png";
const Contact = () => {
  return (
    <div className="contact">
      <div className="linkedin-card">
        <a href="https://www.linkedin.com/in/yourprofile/" target="_blank" rel="noopener noreferrer">
        <img src={linked} alt="linkedin" />
        </a>
      </div>
      <div className="email-card">
        <a href="mailto:alexandru356.c@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={mail} className="mailicon" alt="" />
                    <p className="text">alexandru356.c@gmail.com</p>
        </a>
      </div>
      <div className="github-card">
        <a href="https://github.com/alexandru356" target="_blank" rel="noopener noreferrer">
          <img className="github" src={github} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
