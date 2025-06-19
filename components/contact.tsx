"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm, resetContactState } from "@/store/slices/contactSlice"
import type { RootState, AppDispatch } from "@/store/store"

export function Contact() {
  const dispatch = useDispatch<AppDispatch>()
  const { isSubmitting, submitSuccess, error } = useSelector((state: RootState) => state.contact)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(submitContactForm(formData))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    if (submitSuccess) {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => {
        dispatch(resetContactState())
      }, 3000)
    }
  }, [submitSuccess, dispatch])

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities or collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <a
                  href="mailto:sumesh2003nov5@gmail.com"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>sumesh2003nov5@gmail.com</span>
                </a>
                <a
                  href="tel:+919778716121"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+91 9778716121</span>
                </a>
                <a
                  href="https://linkedin.com/in/s-sumesh-759132308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/sumesh-s-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h4 className="font-semibold mb-2">Technologies Used</h4>
              <p className="text-muted-foreground text-sm mb-3">This portfolio is built with:</p>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Redux", "Node.js", "Express.js", "MongoDB"].map((tech) => (
                  <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {submitSuccess && (
                <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-700 dark:text-green-300 text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              )}

              {error && (
                <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <span className="text-red-700 dark:text-red-300 text-sm">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
