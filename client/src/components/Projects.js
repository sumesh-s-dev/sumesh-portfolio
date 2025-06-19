import { Github, Globe, Server, Database } from "lucide-react"
import "./Projects.css"

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website with Contact Management",
      description:
        "Full-stack portfolio website built with React.js, Redux for state management, Node.js/Express.js backend, and MongoDB for data storage. Features responsive design with 95% cross-browser compatibility and working contact form.",
      technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "TypeScript"],
      github: "https://github.com/sumesh-s-dev/portfolio-website",
      features: ["Redux State Management", "REST API", "MongoDB Integration", "Responsive Design"],
      icon: Globe,
    },
    {
      title: "Task Management Application",
      description:
        "Full-stack task management system with user authentication, CRUD operations, and real-time updates. Built with React.js frontend, Node.js/Express.js backend, and MySQL database.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
      github: "https://github.com/sumesh-s-dev/task-manager",
      features: ["User Authentication", "CRUD Operations", "Real-time Updates", "Secure API"],
      icon: Server,
    },
    {
      title: "Student Grade Calculator",
      description:
        "Interactive web application for calculating grades and tracking academic progress. Features real-time GPA calculation, data persistence, and intuitive user interface.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      github: "https://github.com/sumesh-s-dev/grade-calculator",
      features: ["Real-time Calculations", "Data Persistence", "Progress Tracking", "Mobile Responsive"],
      icon: Database,
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Full-stack applications demonstrating expertise in React.js, Redux, Node.js, Express.js, and MongoDB</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <project.icon size={24} />
                </div>
                <h3>{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <Github size={16} />
                View Code
              </a>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <h3>Full-Stack Development</h3>
          <p>
            All projects demonstrate end-to-end development skills from frontend React.js components to backend APIs and
            database integration.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
