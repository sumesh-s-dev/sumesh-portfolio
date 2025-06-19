import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">S SUMESH</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Full-Stack Developer | React.js & Node.js Specialist
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building modern web applications with React.js, Redux, Node.js, Express.js, and MongoDB. Passionate about
            creating scalable, user-friendly solutions with 95% cross-browser compatibility.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="mailto:sumesh2003nov5@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a href="tel:+919778716121" className="text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/s-sumesh-759132308"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/sumesh-s-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
