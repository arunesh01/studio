
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, Code2, BarChart3, ServerCog, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services - TechFlow Hub",
  description: "Explore our core services: Quality Assurance, Development, Data Analytics, and DevOps.",
};

const services = [
  {
    id: "qa",
    title: "Quality Assurance (QA)",
    icon: <ClipboardCheck size={36} className="text-primary" />,
    description: "Detailed information on manual and automated testing, performance testing, and AI-driven QA solutions. We ensure your products meet the highest standards of quality and reliability.",
    skills: [
      "Manual Testing",
      "Automation (Selenium, Cypress)",
      "API Testing (Postman, REST Assured)",
      "Performance Testing (JMeter)",
      "Test Management (Jira, TestRail)",
      "AI-driven QA Solutions",
    ],
  },
  {
    id: "development",
    title: "Development Services",
    icon: <Code2 size={36} className="text-primary" />,
    description: "Showcasing expertise in web and mobile app development, custom software development, and robust CRM/ERP solutions tailored to your business needs.",
    skills: [
      "Frontend: React, Angular, HTML5, CSS3, JavaScript",
      "Backend: Node.js, .NET, Java, Python",
      "Mobile: Flutter, React Native",
      "Custom Software Development",
      "CRM/ERP Solutions",
      "Databases: MongoDB, MySQL, PostgreSQL",
      "CI/CD: GitHub Actions, Jenkins",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    icon: <BarChart3 size={36} className="text-primary" />,
    description: "Highlighting capabilities in data visualization, predictive analytics, and business intelligence solutions to transform your raw data into strategic assets.",
    skills: [
      "Data Processing: Python, Pandas, SQL",
      "Data Visualization: Power BI, Tableau",
      "Predictive Analytics",
      "Business Intelligence Solutions",
      "ETL Tools: Apache NiFi, Airflow",
      "Machine Learning (Scikit-learn)",
    ],
  },
  {
    id: "devops",
    title: "DevOps Services",
    icon: <ServerCog size={36} className="text-primary" />,
    description: "Explaining our approach to continuous integration/continuous deployment (CI/CD) pipelines, comprehensive cloud infrastructure management, and automation to accelerate your delivery cycles.",
    skills: [
      "CI/CD Pipelines (Jenkins, GitLab CI, GitHub Actions)",
      "Cloud Infrastructure Management (AWS, Azure, Google Cloud)",
      "Automation & Orchestration",
      "Containerization: Docker, Kubernetes",
      "Monitoring: Prometheus, Grafana, ELK Stack",
      "Infrastructure as Code: Terraform, Ansible",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Leverage our expertise in QA, Development, Data Analytics, and DevOps to achieve your business goals. We provide a range of specialized services tailored to your needs.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service) => (
          <Card key={service.id} id={service.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col scroll-mt-20">
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
