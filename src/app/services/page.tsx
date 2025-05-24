
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // CardContent added
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ClipboardCheck, Code2, BarChart3, ServerCog, CheckCircle,
  Workflow, Container, Cloud, FileCode, Gauge, ShieldCheck, // DevOps
  TestTube2, Bot, Activity, // QA (TestTube2 for testing, Bot for AI, Activity for performance)
  Smartphone, Database, Users, // Development (Smartphone for mobile, Database, Users for CRM/ERP)
  Brain, Palette, LineChart // Data Analytics (Brain for ML/Predictive, Palette for Visualization, LineChart for BI)
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Core IT Services - QA, Development, Data Analytics, DevOps",
  description: "Explore TechnoNspace's core services: Advanced Quality Assurance, full-stack Development, insightful Data Analytics, and efficient DevOps practices, each detailed with key technology groups and tools.",
  keywords: ["IT services", "Quality Assurance", "Software Development", "Data Analytics", "DevOps", "TechnoNspace", "technology stack", "CI/CD", "cloud solutions", "AI testing"],
};

interface Technology {
  name: string;
  // icon?: React.ReactNode; // Optional: for individual tool icons later
}

interface TechnologyGroup {
  groupTitle: string;
  groupIcon: React.ReactNode;
  tools: Technology[];
}

interface Service {
  id: string;
  title: string;
  iconPlaceholder: { src: string; alt: string; hint: string };
  description: string;
  technologyGroups: TechnologyGroup[];
}

const services: Service[] = [
  {
    id: "qa",
    title: "Quality Assurance (QA)",
    iconPlaceholder: { src: "https://placehold.co/64x64.png", alt: "Quality Assurance icon", hint: "test report" },
    description: "Ensuring product quality through rigorous manual and automated testing, performance testing, and innovative AI-driven QA solutions. We guarantee your applications meet the highest standards of reliability and user satisfaction.",
    technologyGroups: [
      {
        groupTitle: "Manual & Exploratory Testing",
        groupIcon: <TestTube2 className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "Test Case Design & Execution" },
          { name: "Usability Testing" },
          { name: "Compatibility Testing" },
          { name: "Regression Testing Suites" },
        ],
      },
      {
        groupTitle: "Test Automation",
        groupIcon: <Bot className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "Selenium WebDriver" },
          { name: "Cypress.io" },
          { name: "Playwright" },
          { name: "Appium (Mobile)" },
          { name: "AI-driven Test Generation" },
        ],
      },
      {
        groupTitle: "API & Performance Testing",
        groupIcon: <Activity className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "Postman" },
          { name: "REST Assured" },
          { name: "JMeter" },
          { name: "k6 (Load Testing)" },
        ],
      },
      {
        groupTitle: "Test Management & Reporting",
        groupIcon: <ClipboardCheck className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "Jira (with Xray/Zephyr)" },
          { name: "TestRail" },
          { name: "QMetry" },
          { name: "Comprehensive Dashboards" },
        ],
      },
    ],
  },
  {
    id: "development",
    title: "Development Services",
    iconPlaceholder: { src: "https://placehold.co/64x64.png", alt: "Software Development icon", hint: "software architecture" },
    description: "Building scalable, performant, and maintainable web and mobile applications. Our expertise covers custom software development, and robust CRM/ERP solutions tailored to your specific business needs and growth objectives.",
    technologyGroups: [
      {
        groupTitle: "Frontend Development",
        groupIcon: <Code2 className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "React.js & Next.js" },
          { name: "Angular" },
          { name: "Vue.js" },
          { name: "HTML5, CSS3, Sass/LESS" },
          { name: "TypeScript" },
        ],
      },
      {
        groupTitle: "Backend Development",
        groupIcon: <ServerCog className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "Node.js (Express, NestJS)" },
          { name: "Python (Django, Flask, FastAPI)" },
          { name: "Java (Spring Boot)" },
          { name: ".NET Core / ASP.NET" },
          { name: "REST APIs & GraphQL" },
        ],
      },
      {
        groupTitle: "Mobile App Development",
        groupIcon: <Smartphone className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "React Native" },
          { name: "Flutter" },
          { name: "Swift (iOS Native)" },
          { name: "Kotlin (Android Native)" },
        ],
      },
      {
        groupTitle: "Databases & Storage",
        groupIcon: <Database className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "PostgreSQL" },
          { name: "MySQL" },
          { name: "MongoDB (NoSQL)" },
          { name: "Firebase Firestore/Realtime DB" },
          { name: "Redis (Caching)" },
        ],
      },
      {
        groupTitle: "Custom Software & Enterprise",
        groupIcon: <Users className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "CRM/ERP System Integration" },
          { name: "Custom Business Applications" },
          { name: "Microservices Architecture" },
          { name: "Enterprise Software Development" },
        ],
      },
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics & BI",
    iconPlaceholder: { src: "https://placehold.co/64x64.png", alt: "Data Analytics icon", hint: "bi dashboard" },
    description: "Transforming raw data into strategic assets. We offer expertise in data visualization, predictive analytics, and comprehensive business intelligence solutions to unlock actionable insights and drive informed decision-making.",
    technologyGroups: [
      {
        groupTitle: "Data Processing & ETL",
        groupIcon: <BarChart3 className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "Python (Pandas, NumPy, Dask)" },
          { name: "Apache Spark" },
          { name: "SQL" },
          { name: "Apache Airflow (Workflow Orchestration)" },
          { name: "Talend, Informatica" },
        ],
      },
      {
        groupTitle: "Data Warehousing & Storage",
        groupIcon: <Database className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "Google BigQuery" },
          { name: "Amazon Redshift" },
          { name: "Snowflake" },
          { name: "Azure Synapse Analytics" },
          { name: "Data Lakes (S3, Azure Blob)" },
        ],
      },
      {
        groupTitle: "BI & Visualization",
        groupIcon: <Palette className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "Tableau" },
          { name: "Microsoft Power BI" },
          { name: "Looker" },
          { name: "Qlik Sense" },
          { name: "Grafana, Kibana" },
        ],
      },
      {
        groupTitle: "Predictive Analytics & ML",
        groupIcon: <Brain className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "Scikit-learn" },
          { name: "TensorFlow & Keras" },
          { name: "PyTorch" },
          { name: "R Language" },
          { name: "Statistical Modeling" },
        ],
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud Solutions",
    iconPlaceholder: { src: "https://placehold.co/64x64.png", alt: "DevOps and Cloud icon", hint: "cloud automation" },
    description: "Streamlining development pipelines and enhancing operational efficiency. Our DevOps services include continuous integration/deployment (CI/CD), cloud infrastructure management, and automation to accelerate your delivery cycles and ensure system reliability.",
    technologyGroups: [
      {
        groupTitle: "CI/CD Tools",
        groupIcon: <Workflow className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "GitHub Actions" },
          { name: "Jenkins" },
          { name: "GitLab CI" },
          { name: "Azure DevOps" },
          { name: "CircleCI" },
        ],
      },
      {
        groupTitle: "Containerization & Orchestration",
        groupIcon: <Container className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "Docker" },
          { name: "Kubernetes (K8s)" },
          { name: "Helm" },
          { name: "Docker Swarm" },
          { name: "Amazon ECS/EKS" },
        ],
      },
      {
        groupTitle: "Cloud Providers",
        groupIcon: <Cloud className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "Amazon Web Services (AWS)" },
          { name: "Microsoft Azure" },
          { name: "Google Cloud Platform (GCP)" },
        ],
      },
      {
        groupTitle: "Infrastructure as Code (IaC)",
        groupIcon: <FileCode className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "Terraform" },
          { name: "Ansible" },
          { name: "AWS CloudFormation" },
          { name: "Azure Resource Manager (ARM)" },
        ],
      },
      {
        groupTitle: "Monitoring & Logging",
        groupIcon: <Gauge className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "Prometheus & Grafana" },
          { name: "ELK Stack (Elasticsearch, Logstash, Kibana)" },
          { name: "Datadog" },
          { name: "Splunk" },
          { name: "AWS CloudWatch, Azure Monitor" },
        ],
      },
      {
        groupTitle: "Security & DevSecOps",
        groupIcon: <ShieldCheck className="h-5 w-5 text-primary mr-2" />,
        tools: [
          { name: "SonarQube" },
          { name: "OWASP ZAP" },
          { name: "Trivy, Snyk (Container Scanning)" },
          { name: "Vault (Secrets Management)" },
          { name: "Security Best Practices Integration" },
        ],
      },
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
          TechnoNspace provides a comprehensive suite of IT services designed to empower your business. From ensuring software quality to leveraging data for strategic advantage, our expert teams are here to support your digital transformation.
        </p>
      </header>

      <Accordion type="single" collapsible className="w-full space-y-6">
        {services.map((service) => (
          <AccordionItem value={service.id} key={service.id} className="border-none">
            <Card id={service.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 scroll-mt-20 bg-card">
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-center gap-4 w-full">
                   <Image
                    src={service.iconPlaceholder.src}
                    alt={service.iconPlaceholder.alt}
                    width={56}
                    height={56}
                    data-ai-hint={service.iconPlaceholder.hint}
                    className="rounded-md"
                  />
                  <CardTitle className="text-2xl leading-tight text-left">{service.title}</CardTitle>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-6">
                  {service.technologyGroups.map((group, groupIndex) => (
                    <div key={group.groupTitle}>
                      {groupIndex > 0 && <Separator className="my-4" />}
                      <h4 className="text-lg font-semibold text-primary mb-3 flex items-center">
                        {group.groupIcon}
                        <span>{group.groupTitle}</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.tools.map((tech) => (
                          <Badge
                            key={tech.name}
                            variant="secondary"
                            className="px-3 py-1 text-sm transition-all duration-200 ease-in-out hover:bg-primary/80 hover:text-primary-foreground hover:scale-105 cursor-default"
                          >
                            {tech.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>

      <section className="text-center py-10 mt-16 bg-secondary rounded-lg shadow-md">
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

    