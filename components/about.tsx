import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated Full-Stack Developer with expertise in modern web technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                  <p className="text-muted-foreground mb-4">
                    Currently pursuing Master of Computer Applications (MCA) at Lead College, with a strong foundation
                    from my Bachelor's degree in Computer Applications (CGPA: 7.48/10).
                  </p>
                  <p className="text-muted-foreground">
                    I specialize in full-stack development using React.js with Redux for state management, Node.js and
                    Express.js for backend APIs, and MongoDB for database solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Technical Stack</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm mb-1">Frontend</h4>
                      <p className="text-muted-foreground text-sm">React.js, Redux, TypeScript, HTML5, CSS3</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Backend</h4>
                      <p className="text-muted-foreground text-sm">Node.js, Express.js, RESTful APIs</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Database</h4>
                      <p className="text-muted-foreground text-sm">MongoDB, MySQL</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Achievements</h4>
                      <p className="text-muted-foreground text-sm">95% cross-browser compatibility, 3+ deployed apps</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
