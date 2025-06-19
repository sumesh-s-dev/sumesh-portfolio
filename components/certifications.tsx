import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      title: "Introduction to Linux (LFS101x)",
      issuer: "The Linux Foundation",
      date: "January 2025",
      certificateId: "LF-LIN20250115",
      description: "Comprehensive introduction to Linux operating system fundamentals and command-line operations.",
    },
    {
      title: "Linux Essentials",
      issuer: "Cisco Networking Academy",
      date: "March 2025",
      certificateId: "CSCO-LE20250310",
      description: "Essential Linux skills including system administration and networking concepts.",
    },
    {
      title: "Data Analysis with Python",
      issuer: "FreeCodeCamp",
      date: "February 2025",
      certificateId: "FA-DS20250201",
      description: "Data analysis techniques using Python, NumPy, Pandas, and data visualization libraries.",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "January 2025",
      certificateId: "FC-JS20250121",
      description: "Advanced JavaScript programming concepts, algorithms, and data structure implementations.",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications demonstrating continuous learning and skill development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-1">{cert.title}</CardTitle>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{cert.description}</p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm font-mono text-muted-foreground">Certificate ID: {cert.certificateId}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Additional Achievements</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Completed 30-day Linux Command Line Mastery Challenge</li>
              <li>• Mastered 100+ shell commands and automation scripting</li>
              <li>• Created reusable React.js component library</li>
              <li>• Contributed to open-source JavaScript projects on GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
