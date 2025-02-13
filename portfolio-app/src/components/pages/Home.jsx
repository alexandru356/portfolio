import "/src/components/styles/Home.css";
import pfp from "/src/components/img/pfp.jpg";
import user from "/src/components/img/software-engineer.png";
import javaLogo from "/src/components/img/java.png";
import jsIcon from "/src/components/img/logo-javascript.svg";
import reactIcon from "/src/components/img/logo-react.svg";
import githubIcon from "/src/components/img/github-mark.svg";
import fastapi from "/src/components/img/fastapilogo.svg";
import python from "/src/components/img/python.png";
import bootstrap from "/src/components/img/logo-bootstrap.svg";
import nodejs from "/src/components/img/nodejs.png";
import tools from "/src/components/img/tools.png";
import diploma from "/src/components/img/graduation-diploma.png";
import bgpic from "/src/components/img/unsplash1.jpg";
import Resume from "/resume/Resume2025.pdf";
import link from '/src/components/img/link.png';

function Home() {

  

  return (
    <>
      <div className="profile-card">
        <img src={pfp} alt="Alexandru Ciuca" className="profile-img" />
        <h1 className="name">Alexandru Ciuca</h1>
        <div className="resume">
          <a href={Resume} download>
            <p>Resume <img src={link} className="" alt="" /> </p>
          </a>
        </div>
      </div>

      <div className="who-card">
        <h1 className="header">
          {" "}
          <img src={user} className="userIcon" alt="" /> About
        </h1>
        <p className="text">
          Hey! I'm Alexandru Ciuca, a passionate student from{" "}
          <span className="mtl">Montreal</span> currently looking for internship
          opportunities to enhance my skills and become a better developer. I'm
          eager to work on new projects and learn along the way. Feel free to
          reach out to me !
        </p>
      </div>

      <div className="tech-card">
        <h1 className="header">
          {" "}
          <img src={tools} alt="Tool box" className="techicon" />
          Tech Stack
        </h1>
        <div className="tech-icons">
          <img src={javaLogo} alt="Java" className="tech-icon" />
          <img src={jsIcon} alt="JavaScript" className="tech-icon" />
          <img src={reactIcon} alt="React" className="tech-icon" />
          <img src={githubIcon} alt="github" className="tech-icon" />
          <img src={fastapi} alt="fastapi" className="tech-icon" />
          <img src={python} alt="python" className="tech-icon" />
          <img src={bootstrap} alt="bootstrap" className="tech-icon" />
          <img src={nodejs} alt="nodejs" className="tech-icon" />
        </div>
      </div>

      <div className="edu-card">
        <h1 className="header">
          {" "}
          <img src={diploma} className="userIcon" alt="" /> Education
        </h1>
        <div className="education-content">
          <div className="edu-item">
            <h2 className="edu-title">Computer Science</h2>
            <p className="edu-subtitle">Cégep Gérald-Godin</p>
            <p className="edu-duration">2023 - 2026</p>
          </div>
        </div>
      </div>

      <div className="background">
        <img src={bgpic} className="bgpicture" alt="" />
      </div>
    </>
  );
}

export default Home;
