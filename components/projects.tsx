import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Database, Server, Globe } from "lucide-react"

export function Projects() {
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full-stack applications demonstrating expertise in React.js, Redux, Node.js, Express.js, and MongoDB
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-muted/50 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Full-Stack Development</h3>
            <p className="text-muted-foreground text-sm">
              All projects demonstrate end-to-end development skills from frontend React.js components to backend APIs
              and database integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
