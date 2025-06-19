import "./Skills.css"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Redux", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL", "Mongoose ODM"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Webpack", "Jest", "Linux"],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <p>Full-stack development technologies I use to build modern web applications</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mern-stack">
          <h3>Full-Stack Architecture</h3>
          <p>React.js + Redux → Node.js + Express.js → MongoDB</p>
          <p>Complete MERN stack development with modern best practices</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
