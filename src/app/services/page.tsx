
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react"; // Kept for skills list
import Image from "next/image"; // Added for service icons

export const metadata: Metadata = {
  title: "Our Core IT Services - QA, Development, Data Analytics, DevOps",
  description: "Explore TechFlow Hub's core services: Advanced Quality Assurance including AI-driven solutions, full-stack Development, insightful Data Analytics, and efficient DevOps practices to streamline your operations.",
  keywords: ["QA services", "AI testing", "software development", "web development", "mobile app development", "data analytics", "business intelligence", "DevOps", "CI/CD", "cloud solutions", "IT consulting"],
};

const services = [
  {
    id: "qa",
    title: "Quality Assurance (QA)",
    iconPlaceholder: { src: "https://placehold.co/128x128.png", alt: "Quality Assurance Icon", hint: "quality seal" },
    description: "Ensuring product quality through rigorous manual and automated testing, performance testing, and innovative AI-driven QA solutions. We guarantee your applications meet the highest standards of reliability and user satisfaction.",
    skills: [
      "Manual & Exploratory Testing",
      "Test Automation (Selenium, Cypress, Playwright)",
      "API Testing (Postman, REST Assured)",
      "Performance & Load Testing (JMeter, k6)",
      "Security Testing Basics",
      "Mobile Application Testing",
      "AI-driven QA Solutions",
      "Test Management (Jira, TestRail, Xray)",
    ],
  },
  {
    id: "development",
    title: "Development Services",
    iconPlaceholder: { src: "https://placehold.co/128x128.png", alt: "Development Services Icon", hint: "dev tools" },
    description: "Building scalable, performant, and maintainable web and mobile applications. Our expertise covers custom software development, and robust CRM/ERP solutions tailored to your specific business needs and growth objectives.",
    skills: [
      "Frontend: React, Next.js, Angular, Vue.js, HTML5, CSS3, TypeScript",
      "Backend: Node.js (Express, NestJS), Python (Django, Flask), Java (Spring), .NET",
      "Mobile: React Native, Flutter, Swift (iOS), Kotlin (Android)",
      "Databases: PostgreSQL, MongoDB, MySQL, Firebase Firestore, Redis",
      "Custom Software & Enterprise Solutions",
      "CRM/ERP System Integration & Development",
      "API Design & Development (REST, GraphQL)",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    iconPlaceholder: { src: "https://placehold.co/128x128.png", alt: "Data Analytics Icon", hint: "data insight" },
    description: "Transforming raw data into strategic assets. We offer expertise in data visualization, predictive analytics, and comprehensive business intelligence solutions to unlock actionable insights and drive informed decision-making.",
    skills: [
      "Data Processing & ETL (Python, Pandas, Apache Spark, Airflow)",
      "Data Warehousing (BigQuery, Redshift, Snowflake)",
      "BI & Visualization (Tableau, Power BI, Looker, Grafana)",
      "Predictive Analytics & Basic ML (Scikit-learn, TensorFlow Lite)",
      "Statistical Analysis & Reporting",
      "Data Governance & Quality Management",
      "SQL & NoSQL Database Expertise",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud Solutions",
    iconPlaceholder: { src: "https://placehold.co/128x128.png", alt: "DevOps Services Icon", hint: "process gears" },
    description: "Streamlining development pipelines and enhancing operational efficiency. Our DevOps services include continuous integration/deployment (CI/CD), cloud infrastructure management, and automation to accelerate your delivery cycles and ensure system reliability.",
    skills: [
      "CI/CD Pipelines (GitHub Actions, Jenkins, GitLab CI, Azure DevOps)",
      "Containerization & Orchestration (Docker, Kubernetes, Helm)",
      "Cloud Platforms (AWS, Azure, Google Cloud Platform)",
      "Infrastructure as Code (Terraform, Ansible, CloudFormation)",
      "Monitoring & Logging (Prometheus, Grafana, ELK Stack, Datadog)",
      "Automated Testing Integration",
      "Site Reliability Engineering (SRE) Principles",
      "Security Best Practices (DevSecOps)",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Our Core IT Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          TechFlow Hub provides a comprehensive suite of IT services designed to empower your business. From ensuring software quality to leveraging data for strategic advantage, our expert teams are here to support your digital transformation.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service) => (
          <Card key={service.id} id={service.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col scroll-mt-20">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <Image 
                    src={service.iconPlaceholder.src} 
                    alt={service.iconPlaceholder.alt} 
                    width={64} 
                    height={64}
                    className="text-primary" 
                    data-ai-hint={service.iconPlaceholder.hint}
                />
                <CardTitle className="text-2xl leading-tight">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                {service.description}
              </p>
              <div>
                <h4 className="font-semibold mb-3 text-md text-foreground">
                  Key Skills & Technologies:
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
              {/* Example:
                <div className="mt-6">
                  <Image src="https://placehold.co/500x250.png" alt={`${service.title} Diagram`} width={500} height={250} className="rounded-md" data-ai-hint="infographic diagram" />
                </div>
              */}
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="text-center py-10 bg-secondary rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to Discuss Your Project?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Let our experts help you find the best solutions for your business. Contact us for a personalized consultation.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/contact">Get a Free Consultation</Link>
        </Button>
      </section>
    </div>
  );
}
