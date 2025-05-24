
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, BarChartHorizontalBig, MapPinned, Briefcase, Users, Settings, Sparkles, Workflow, BarChart3, TestTube2, Activity, Smartphone, ClipboardCheck, Code2, ServerCog, Container, Cloud, FileCode, Gauge, ShieldCheck, Brain, Palette, Database } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { LeadershipSection } from "@/components/LeadershipSection";
import { TechStackShowcase } from "@/components/TechStackShowcase";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, Cell } from "recharts";

const techCategoriesData = [
  {
    categoryName: "Quality Assurance",
    description: "Ensuring robust application quality through comprehensive testing methodologies and advanced automation tools.",
    technologyGroups: [
      {
        groupTitle: "Web & E2E Automation",
        groupIcon: <TestTube2 className="h-5 w-5 text-primary" />,
        tools: [ { name: "Selenium WebDriver & Grid" }, { name: "Cypress.io for E2E Testing" }, { name: "Playwright by Microsoft" } ],
      },
      {
        groupTitle: "API & Performance Testing",
        groupIcon: <Activity className="h-5 w-5 text-primary" />,
        tools: [ { name: "Postman for API Testing" }, { name: "REST Assured (Java API Automation)" }, { name: "JMeter for Performance Testing" }, { name: "k6 for Load Testing" } ],
      },
      {
        groupTitle: "Mobile & Cross-Browser",
        groupIcon: <Smartphone className="h-5 w-5 text-primary" />,
        tools: [ { name: "Appium for Mobile Automation" }, { name: "BrowserStack/Sauce Labs for Cross-Browser Testing" }],
      },
      {
        groupTitle: "Management & Methodology",
        groupIcon: <ClipboardCheck className="h-5 w-5 text-primary" />,
        tools: [ { name: "TestRail for Test Case Management" }, { name: "Jira with Xray or Zephyr" }, { name: "AI in Testing (Test Data Generation, Anomaly Detection)" }, { name: "Cucumber/Gherkin for BDD" } ],
      }
    ],
  },
  {
    categoryName: "Development",
    description: "Building scalable and performant web and mobile applications using modern frameworks and best practices.",
    technologyGroups: [
      {
        groupTitle: "Frontend Frameworks",
        groupIcon: <Code2 className="h-5 w-5 text-primary" />,
        tools: [ { name: "React.js, Next.js, Remix" }, { name: "Angular, Vue.js" }, { name: "TypeScript, JavaScript (ESNext)" }, { name: "HTML5, CSS3, Sass/LESS" } ],
      },
      {
        groupTitle: "Backend Technologies",
        groupIcon: <ServerCog className="h-5 w-5 text-primary" />,
        tools: [ { name: "Node.js (Express.js, NestJS)" }, { name: "Python (Django, Flask, FastAPI)" }, { name: "Java (Spring Boot, Quarkus)" }, { name: ".NET (ASP.NET Core)" }, { name: "GraphQL, REST APIs" } ],
      },
      {
        groupTitle: "Mobile Development",
        groupIcon: <Smartphone className="h-5 w-5 text-primary" />,
        tools: [ { name: "React Native, Flutter for Cross-Platform Mobile" }, { name: "Swift (iOS), Kotlin (Android) for Native Mobile" } ],
      },
      {
        groupTitle: "Databases",
        groupIcon: <Database className="h-5 w-5 text-primary" />,
        tools: [ { name: "PostgreSQL, MySQL, SQL Server" }, { name: "MongoDB, Cassandra, DynamoDB (NoSQL)" }, { name: "Firebase Realtime Database & Firestore" } ],
      }
    ],
  },
  {
    categoryName: "Data Analytics & BI",
    description: "Transforming complex data into actionable insights with powerful analytics, visualization, and BI tools.",
    technologyGroups: [
      {
        groupTitle: "Data Processing & Analysis",
        groupIcon: <BarChart3 className="h-5 w-5 text-primary" />,
        tools: [ { name: "Python (Pandas, NumPy, SciPy, Scikit-learn)" }, { name: "R Language for Statistical Computing" }, { name: "Apache Spark, Apache Hadoop" }, { name: "SQL (Advanced Querying, Window Functions)" } ],
      },
      {
        groupTitle: "Workflow & ETL",
        groupIcon: <Workflow className="h-5 w-5 text-primary" />,
        tools: [ { name: "Apache Airflow for Workflow Orchestration" }, { name: "ETL/ELT Tools (Talend, Informatica, Fivetran)" } ],
      },
      {
        groupTitle: "Visualization & BI Platforms",
        groupIcon: <Palette className="h-5 w-5 text-primary" />,
        tools: [ { name: "Tableau, Power BI, Looker" }, { name: "Google Data Studio, Grafana" } ],
      },
      {
        groupTitle: "Data Warehousing & Big Data",
        groupIcon: <Database className="h-5 w-5 text-primary" />,
        tools: [ { name: "Google BigQuery, AWS Redshift, Snowflake" }, { name: "Azure Synapse Analytics" }, { name: "Data Warehousing & Data Lakes" } ],
      },
      {
        groupTitle: "Machine Learning & AI",
        groupIcon: <Brain className="h-5 w-5 text-primary" />,
        tools: [ { name: "TensorFlow, PyTorch for Deep Learning" } ],
      }
    ],
  },
  {
    categoryName: "DevOps & Cloud Solutions",
    description: "Streamlining development lifecycle and infrastructure management with CI/CD, containerization, and cloud-native solutions.",
    technologyGroups: [
      {
        groupTitle: "CI/CD & Automation",
        groupIcon: <Workflow className="h-5 w-5 text-primary" />,
        tools: [ { name: "Jenkins, GitLab CI/CD, GitHub Actions" }, { name: "Azure DevOps, CircleCI" } ],
      },
      {
        groupTitle: "Containerization & Orchestration",
        groupIcon: <Container className="h-5 w-5 text-primary" />,
        tools: [ { name: "Docker, Docker Swarm" }, { name: "Kubernetes (EKS, GKE, AKS)" }, { name: "Helm for Kubernetes Package Management" } ],
      },
      {
        groupTitle: "Cloud Platforms",
        groupIcon: <Cloud className="h-5 w-5 text-primary" />,
        tools: [ { name: "AWS (EC2, S3, Lambda, RDS, VPC, IAM, CloudFormation)" }, { name: "Azure (VMs, Blob Storage, Functions, SQL Database, VNet)" }, { name: "Google Cloud Platform (GCP - Compute Engine, Cloud Storage, Cloud Functions)" }, { name: "Serverless Computing (AWS Lambda, Azure Functions)"} ],
      },
      {
        groupTitle: "Infrastructure as Code (IaC)",
        groupIcon: <FileCode className="h-5 w-5 text-primary" />,
        tools: [ { name: "Terraform, Ansible, Pulumi (Infrastructure as Code)" } ],
      },
      {
        groupTitle: "Monitoring & Logging",
        groupIcon: <Gauge className="h-5 w-5 text-primary" />,
        tools: [ { name: "Prometheus, Grafana for Monitoring" }, { name: "ELK Stack (Elasticsearch, Logstash, Kibana), Splunk, Datadog" } ],
      },
      {
        groupTitle: "Security & Version Control",
        groupIcon: <ShieldCheck className="h-5 w-5 text-primary" />,
        tools: [ { name: "Git, SVN for Version Control" }, { name: "DevSecOps Practices & Tools (SonarQube, Trivy)" } ],
      }
    ],
  },
];


const analyticsPreviewData = [
  { metric: "Efficiency Gain", value: 75, fill: "hsl(var(--chart-1))" },
  { metric: "Cost Reduction", value: 60, fill: "hsl(var(--chart-2))" },
  { metric: "Process Speed-up", value: 85, fill: "hsl(var(--chart-3))" },
  { metric: "Risk Mitigation", value: 70, fill: "hsl(var(--chart-4))" },
];

const analyticsPreviewChartConfig = {
  value: {
    label: "Percentage",
  },
  "Efficiency Gain": {
    label: "Efficiency Gain",
    color: "hsl(var(--chart-1))",
  },
  "Cost Reduction": {
    label: "Cost Reduction",
    color: "hsl(var(--chart-2))",
  },
  "Process Speed-up": {
    label: "Process Speed-up",
    color: "hsl(var(--chart-3))",
  },
  "Risk Mitigation": {
    label: "Risk Mitigation",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;


export default function HomePage() {
  const [isWhyChooseUsImageVisible, setIsWhyChooseUsImageVisible] = useState(false);
  const [isWhyChooseUsTextVisible, setIsWhyChooseUsTextVisible] = useState(false);
  const whyChooseUsImageRef = useRef<HTMLDivElement>(null);
  const whyChooseUsTextRef = useRef<HTMLDivElement>(null);

  const techStackSectionRef = useRef<HTMLDivElement>(null);
  const [isTechStackSectionVisible, setIsTechStackSectionVisible] = useState(false);

  const leadershipSectionRef = useRef<HTMLDivElement>(null);
  const [isLeadershipSectionVisible, setIsLeadershipSectionVisible] = useState(false);

  const combinedSectionRef = useRef<HTMLDivElement>(null);
  const [isCombinedSectionVisible, setIsCombinedSectionVisible] = useState(false);
  
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const [isCtaSectionVisible, setIsCtaSectionVisible] = useState(false);

  const refsAndSetters = [
    { ref: whyChooseUsImageRef, setter: setIsWhyChooseUsImageVisible, threshold: 0.2 },
    { ref: whyChooseUsTextRef, setter: setIsWhyChooseUsTextVisible, threshold: 0.2 },
    { ref: techStackSectionRef, setter: setIsTechStackSectionVisible },
    { ref: leadershipSectionRef, setter: setIsLeadershipSectionVisible },
    { ref: combinedSectionRef, setter: setIsCombinedSectionVisible, threshold: 0.1 },
    { ref: ctaSectionRef, setter: setIsCtaSectionVisible },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Default threshold
    };

    const observers: IntersectionObserver[] = [];

    refsAndSetters.forEach(({ ref, setter, threshold }) => {
      const currentObserverOptions = { ...observerOptions, threshold: threshold || observerOptions.threshold };
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setter(true);
              if (ref.current) {
                obs.unobserve(ref.current);
              }
            }
          });
        },
        currentObserverOptions
      );

      if (ref.current) {
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer, index) => {
        const ref = refsAndSetters[index]?.ref;
        if (ref?.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary to-accent text-primary-foreground overflow-hidden">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract technology background representing TechnoNspace innovation"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-20"
          data-ai-hint="tech abstract"
          priority
        />
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-primary-foreground">
            Empowering Your Business with <span className="text-white">TechnoNspace</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10">
            We provide cutting-edge IT solutions tailored to drive growth, efficiency, and innovation for your enterprise.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" variant="secondary" className="text-secondary-foreground hover:bg-secondary/90">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="text-secondary-foreground hover:bg-secondary/90">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div
              ref={whyChooseUsImageRef}
              className={cn(
                "md:w-1/2 transition-all duration-700 ease-out transform",
                isWhyChooseUsImageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              )}
            >
              <Image
                src="https://placehold.co/600x400.png"
                alt="TechnoNspace team collaborating on a technical project"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="tech collaboration"
              />
            </div>
            <div
              ref={whyChooseUsTextRef}
              className={cn(
                "md:w-1/2 transition-all duration-700 ease-out transform",
                isWhyChooseUsTextVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              )}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Partner with TechnoNspace?</h2>
              <p className="text-muted-foreground mb-6">
                We are committed to your success. Our team of experts leverages the latest technologies and best practices to deliver solutions that make a real impact.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <span><strong>Expert Team:</strong> Certified professionals dedicated to your project.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <span><strong>Tailored Solutions:</strong> Custom strategies that fit your unique business needs.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <span><strong>Proven Results:</strong> A track record of delivering successful outcomes for our clients.</span>
                </li>
                 <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <span><strong>24/7 Support:</strong> Reliable assistance whenever you need it.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase Section */}
      <div
        ref={techStackSectionRef}
        className={cn(
          "transition-all transform duration-700 ease-out",
          isTechStackSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <TechStackShowcase techCategories={techCategoriesData} />
      </div>

      {/* Leadership Section */}
      <div
        ref={leadershipSectionRef}
        className={cn(
          "transition-all transform duration-700 ease-out",
          isLeadershipSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <LeadershipSection />
      </div>

      {/* Combined Global Reach & Analytics Preview Section */}
      <section
        ref={combinedSectionRef}
        className={cn(
          "py-16 bg-background transition-all transform duration-700 ease-out",
          isCombinedSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Column 1: Global Reach */}
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center mb-4">
                  <MapPinned className="h-10 w-10 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Our Global Reach</h2>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-8">
                  Visualizing our impact and client collaborations across the globe. We are dedicated to providing top-tier IT solutions to businesses worldwide.
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg shadow-md">
                <Image
                  src="https://placehold.co/800x400.png"
                  alt="World map graphic showing global client locations or service areas"
                  width={800}
                  height={400}
                  className="rounded-md w-full"
                  data-ai-hint="world map graphic"
                />
              </div>
            </div>

            {/* Column 2: Analytics Preview */}
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center mb-4">
                    <BarChartHorizontalBig className="h-10 w-10 text-primary mr-3" />
                    <h2 className="text-3xl font-bold text-foreground">Analytics Preview</h2>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-8">
                  Get a glimpse of our powerful analytics capabilities. We transform data into actionable insights.
                </p>
              </div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle>Key Performance Indicators (Sample)</CardTitle>
                  <CardDescription>Illustrative data showing typical project outcomes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={analyticsPreviewChartConfig} className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={analyticsPreviewData} layout="vertical" margin={{ right: 20, left:20 }}>
                        <CartesianGrid horizontal={false} />
                        <XAxis type="number" hide/>
                        <YAxis dataKey="metric" type="category" tickLine={false} axisLine={false} tickMargin={5} width={120} />
                        <RechartsTooltip
                          cursor={{ fill: 'hsl(var(--muted))' }}
                          content={<ChartTooltipContent indicator="dot" />}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="value" radius={5}>
                           {analyticsPreviewData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={entry.fill} />
                           ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Contact Section */}
      <section className="py-20 bg-secondary">
        <div
          ref={ctaSectionRef}
          className={cn(
            "container mx-auto px-4 text-center transition-all transform duration-700 ease-out",
            isCtaSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Elevate Your IT?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Let's discuss how TechnoNspace can help your business thrive. Get in touch with our experts today.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

    