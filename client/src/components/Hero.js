"use client"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import "./Hero.css"

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">S SUMESH</h1>
          <h2 className="hero-subtitle">Full-Stack Developer | MERN Stack Specialist</h2>
          <p className="hero-description">
            Building modern web applications with React.js, Redux, Node.js, Express.js, and MongoDB. Passionate about
            creating scalable, user-friendly solutions with 95% cross-browser compatibility.
          </p>

          <div className="hero-buttons">
            <button onClick={() => scrollToSection("#contact")} className="btn btn-primary">
              Get In Touch
            </button>
            <button onClick={() => scrollToSection("#projects")} className="btn btn-secondary">
              View Projects
            </button>
          </div>

          <div className="hero-social">
            <a href="mailto:sumesh2003nov5@gmail.com" className="social-link" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href="tel:+919778716121" className="social-link" aria-label="Phone">
              <Phone size={24} />
            </a>
            <a
              href="https://linkedin.com/in/s-sumesh-759132308"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/sumesh-s-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
