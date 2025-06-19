import "./About.css"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>A dedicated Full-Stack Developer with expertise in modern web technologies</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>My Journey</h3>
            <p>
              Currently pursuing Master of Computer Applications (MCA) at Lead College, with a strong foundation from my
              Bachelor's degree in Computer Applications (CGPA: 7.48/10).
            </p>
            <p>
              I specialize in full-stack development using React.js with Redux for state management, Node.js and
              Express.js for backend APIs, and MongoDB for database solutions.
            </p>
          </div>

          <div className="about-skills">
            <h3>Technical Stack</h3>
            <div className="skill-categories">
              <div className="skill-category">
                <h4>Frontend</h4>
                <p>React.js, Redux, JavaScript, TypeScript, HTML5, CSS3</p>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <p>Node.js, Express.js, RESTful APIs</p>
              </div>
              <div className="skill-category">
                <h4>Database</h4>
                <p>MongoDB, MySQL</p>
              </div>
              <div className="skill-category">
                <h4>Achievements</h4>
                <p>95% cross-browser compatibility, 3+ deployed applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
