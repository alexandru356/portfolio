import '/src/components/styles/Projects.css';
import link from '/src/components/img/link.png';

function Projects() {
  const projects = [
    {
      name: "Project Mediatheque",
      description: "A media library management system using JavaFX, enabling users to organize and access multimedia files efficiently.",
      link: "https://github.com/alexandru356/Projet-Mediatheque",
      techStack: ["JavaFX", "Java"],
    },
    {
      name: "Wanner Peinture",
      description: "Responsive website for a local painting company, improving their online visibility and customer engagement.",
      link: "https://www.wannerpeinture.com/",
      techStack: ["React", "CSS", "HTML"],
    },
    {
      name: "Live Sync (Coming Soon)",
      description: "Real-time collaboration application in Python, allowing users to edit documents simultaneously with live updates.",
      link: "https://github.com/alexandru356/livesync-app",
      techStack: ["Python", "FastAPI", "React"],
    }
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-info">
              <h3>{project.name}</h3>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-bubble">{tech}</span>
                ))}
              </div>
              <p>{project.description}</p>
              <a className="alink" href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={link} className="link" alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
