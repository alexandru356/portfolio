import React from "react";
import "/src/components/styles/Contact.css";
import mail from "/src/components/img/communication.png";
import github from "/src/components/img/github.png";
import linked from "/src/components/img/linkedin.png";
const Contact = () => {
  return (
    <>
      <div className="linkedin-card">
        <a
          className=""
          href="https://www.linkedin.com/in/alexandru356"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="atag">
            <img src={linked} alt="linkedin" />
          </div>
        </a>
      </div>

      <div className="email-card">
        <a
          href="mailto:alexandru356.c@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bubble-email">
            <img src={mail} className="mailicon" alt="" />

            <p className="text">alexandru356.c@gmail.com</p>
          </div>
        </a>
      </div>
      <div className="github-card">
        <a
          href="https://github.com/alexandru356"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="gitag">
            <img className="github" src={github} alt="" />
            <h1 className="gitH1">Github Profile</h1>
            <p className="gitP">Find more of my repositories</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Contact;
