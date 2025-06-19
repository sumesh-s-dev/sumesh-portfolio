"use client"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { submitContactForm, resetContactState } from "../store/slices/contactSlice"
import { Mail, Phone, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react"
import "./Contact.css"

const Contact = () => {
  const dispatch = useDispatch()
  const { isSubmitting, submitSuccess, error } = useSelector((state) => state.contact)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(submitContactForm(formData))
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (submitSuccess) {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => {
        dispatch(resetContactState())
      }, 5000)
    }
  }, [submitSuccess, dispatch])

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's connect and discuss opportunities or collaborations</p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-links">
              <a href="mailto:sumesh2003nov5@gmail.com" className="contact-link">
                <Mail size={20} />
                <span>sumesh2003nov5@gmail.com</span>
              </a>
              <a href="tel:+919778716121" className="contact-link">
                <Phone size={20} />
                <span>+91 9778716121</span>
              </a>
              <a
                href="https://linkedin.com/in/s-sumesh-759132308"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/sumesh-s-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Github size={20} />
                <span>GitHub Profile</span>
              </a>
            </div>

            <div className="tech-stack">
              <h4>Built With</h4>
              <p>This portfolio demonstrates full-stack development using:</p>
              <div className="tech-badges">
                {["React.js", "Redux", "Node.js", "Express.js", "MongoDB"].map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h3>Send a Message</h3>

            {submitSuccess && (
              <div className="alert alert-success">
                <CheckCircle size={20} />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            {error && (
              <div className="alert alert-error">
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
