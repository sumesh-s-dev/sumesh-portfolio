import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
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
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full-stack development technologies I use to build modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Full-Stack Architecture</h3>
            <p className="text-muted-foreground text-sm">React.js + Redux → Node.js + Express.js → MongoDB</p>
            <p className="text-muted-foreground text-sm mt-2">
              Complete MERN stack development with modern best practices
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
