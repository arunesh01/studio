
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, Code2, BarChart3, ServerCog, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archived Offerings - TechFlow Hub",
  description: "This page lists a previous version of our service offerings. For the most current information, please visit our main Services page.",
  robots: "noindex, follow", // Discourage indexing for this potentially redundant page
};


const services = [
  {
    id: "qa",
    title: "Quality Assurance (QA)",
    icon: <ClipboardCheck size={36} className="text-primary" />,
    description: "Ensuring product quality through rigorous manual and automated testing processes.",
    skills: [
      "Manual Testing",
      "Automation (Selenium, Cypress)",
      "API Testing (Postman, REST Assured)",
      "Performance Testing (JMeter)",
      "Test Management (Jira, TestRail)",
    ],
  },
  {
    id: "development",
    title: "Development",
    icon: <Code2 size={36} className="text-primary" />,
    description: "Building scalable, performant, and maintainable web and mobile applications.",
    skills: [
      "Frontend: React, Angular, HTML5, CSS3, JavaScript",
      "Backend: Node.js, .NET, Java, Python",
      "Mobile: Flutter, React Native",
      "Databases: MongoDB, MySQL, PostgreSQL",
      "CI/CD: GitHub Actions, Jenkins",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    icon: <BarChart3 size={36} className="text-primary" />,
    description: "Turning data into actionable insights through reporting, visualization, and predictive analytics.",
    skills: [
      "Data Processing: Python, Pandas, SQL",
      "Visualization: Power BI, Tableau",
      "ETL Tools: Apache NiFi, Airflow",
      "Machine Learning (basic): Scikit-learn",
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    icon: <ServerCog size={36} className="text-primary" />,
    description: "Streamlining development pipelines with automation, monitoring, and cloud infrastructure.",
    skills: [
      "CI/CD: Jenkins, GitLab CI, GitHub Actions",
      "Containerization: Docker, Kubernetes",
      "Cloud: AWS, Azure, Google Cloud",
      "Monitoring: Prometheus, Grafana, ELK Stack",
      "Infrastructure as Code: Terraform, Ansible",
    ],
  },
];

export default function OfferingsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Our Offerings (Archived)
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          This is a previous version of our services. Please see our updated <Link href="/services" className="text-primary hover:underline">Services Page</Link> for the latest information.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service) => (
          <Card key={service.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                {service.icon}
                <CardTitle className="text-2xl leading-tight">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-muted-foreground mb-6 text-base">
                {service.description}
              </p>
              <div>
                <h4 className="font-semibold mb-3 text-md text-foreground">
                  Key Skills & Tools:
                </h4>
                <ul className="space-y-2">
                  {service.skills.map((skill) => (
                    <li key={skill} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="text-center py-10 bg-secondary rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to Discuss Your Project?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Let our experts help you find the best solutions for your business.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/contact">Contact Us for a Consultation</Link>
        </Button>
      </section>
    </div>
  );
}
