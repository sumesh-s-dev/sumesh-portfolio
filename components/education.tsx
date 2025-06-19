import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Lead College (Autonomous)",
      period: "2024 - 2026 (Expected)",
      status: "In Progress",
      description:
        "Advanced studies in computer applications with focus on software development, algorithms, and system design.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Nehru Arts and Science College",
      period: "2021 - 2024",
      cgpa: "7.48/10",
      status: "Completed",
      description:
        "Comprehensive foundation in computer science, programming languages, and software development principles.",
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <p className="text-lg font-medium text-muted-foreground">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                    <Badge variant={edu.status === "Completed" ? "default" : "secondary"}>{edu.status}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                {edu.cgpa && (
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="font-semibold text-primary">CGPA: {edu.cgpa}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
