
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardComponent } from "@/components/CardComponent";
import { CheckCircle, BarChartHorizontalBig, MapPinned, Briefcase, Users, Settings, Sparkles, Workflow, BarChart3, Clock, ServerCog, ClipboardCheck, Code2 } from "lucide-react"; 
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { LeadershipSection } from "@/components/LeadershipSection";
import { TechStackShowcase } from "@/components/TechStackShowcase";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, Cell } from "recharts";
import { WorldClockDisplay } from "@/components/WorldClockDisplay";


const serviceHighlights = [
  {
    title: "Quality Assurance (QA)",
    description: "Ensuring product excellence with AI-driven and automated testing solutions.",
    icon: <Image src="https://placehold.co/64x64.png" alt="Quality Assurance Lottie Animation for TechnoNspace" width={48} height={48} data-ai-hint="QA animation" />,
    link: "/services#qa",
    linkText: "Explore QA Solutions",
    refHook: "serviceCard1Ref",
    visibleHook: "isServiceCard1Visible",
    delay: "",
  },
  {
    title: "Development Services",
    description: "Custom web, mobile, and CRM/ERP solutions for scalable growth.",
    icon: <Image src="https://placehold.co/64x64.png" alt="Development Services 3D Illustration for TechnoNspace" width={48} height={48} data-ai-hint="dev illustration" />,
    link: "/services#development",
    linkText: "Discover Development",
    refHook: "serviceCard2Ref",
    visibleHook: "isServiceCard2Visible",
    delay: "delay-200",
  },
  {
    title: "Data Analytics & BI",
    description: "Actionable insights through data visualization and business intelligence.",
    icon: <Image src="https://placehold.co/64x64.png" alt="Data Analytics Lottie Animation for TechnoNspace" width={48} height={48} data-ai-hint="data animation" />,
    link: "/services#data-analytics",
    linkText: "Unlock Data Insights",
    refHook: "serviceCard3Ref",
    visibleHook: "isServiceCard3Visible",
    delay: "delay-[400ms]",
  },
  {
    title: "DevOps & Cloud Solutions",
    description: "Efficient development pipelines with CI/CD and cloud automation.",
    icon: <Image src="https://placehold.co/64x64.png" alt="DevOps Cloud 3D Illustration for TechnoNspace" width={48} height={48} data-ai-hint="devops illustration" />,
    link: "/services#devops",
    linkText: "Optimize Your DevOps",
    refHook: "serviceCard4Ref",
    visibleHook: "isServiceCard4Visible",
    delay: "delay-[600ms]",
  },
];

const techCategoriesData = [
  {
    categoryName: "Quality Assurance",
    technologies: [
      { name: "Selenium" }, { name: "Cypress" }, { name: "Playwright" },
      { name: "Postman" }, { name: "REST Assured" }, { name: "JMeter" },
      { name: "k6" }, { name: "TestRail" }, { name: "Jira Xray" },
      { name: "AI in Testing" },
    ],
  },
  {
    categoryName: "Development",
    technologies: [
      { name: "React" }, { name: "Next.js" }, { name: "Angular" }, { name: "Vue.js" },
      { name: "Node.js" }, { name: "Express.js" }, { name: "NestJS" },
      { name: "Python" }, { name: "Django" }, { name: "Flask" },
      { name: "Java" }, { name: "Spring Boot" }, { name: ".NET" },
      { name: "React Native" }, { name: "Flutter" }, { name: "Swift" }, { name: "Kotlin" },
      { name: "PostgreSQL" }, { name: "MongoDB" }, { name: "Firebase" }, { name: "GraphQL" },
    ],
  },
  {
    categoryName: "Data Analytics & BI",
    technologies: [
      { name: "Python (Pandas, NumPy)" }, { name: "Apache Spark" }, { name: "Airflow" },
      { name: "Tableau" }, { name: "Power BI" }, { name: "Looker" }, { name: "Grafana" },
      { name: "Google BigQuery" }, { name: "AWS Redshift" }, { name: "Snowflake" },
      { name: "SQL" }, { name: "Scikit-learn" }, { name: "TensorFlow" },
    ],
  },
  {
    categoryName: "DevOps & Cloud Solutions",
    technologies: [
      { name: "Docker" }, { name: "Kubernetes" }, { name: "Helm" },
      { name: "Jenkins" }, { name: "GitHub Actions" }, { name: "GitLab CI" },
      { name: "AWS" }, { name: "Azure" }, { name: "Google Cloud (GCP)" },
      { name: "Terraform" }, { name: "Ansible" },
      { name: "Prometheus" }, { name: "Grafana (Monitoring)" }, { name: "ELK Stack" }, { name: "Datadog" },
      { name: "DevSecOps" },
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

  const serviceCard1Ref = useRef<HTMLDivElement>(null);
  const serviceCard2Ref = useRef<HTMLDivElement>(null);
  const serviceCard3Ref = useRef<HTMLDivElement>(null);
  const serviceCard4Ref = useRef<HTMLDivElement>(null);
  const [isServiceCard1Visible, setIsServiceCard1Visible] = useState(false);
  const [isServiceCard2Visible, setIsServiceCard2Visible] = useState(false);
  const [isServiceCard3Visible, setIsServiceCard3Visible] = useState(false);
  const [isServiceCard4Visible, setIsServiceCard4Visible] = useState(false);

  const techStackSectionRef = useRef<HTMLDivElement>(null);
  const [isTechStackSectionVisible, setIsTechStackSectionVisible] = useState(false);
  
  const worldClockSectionRef = useRef<HTMLDivElement>(null);
  const [isWorldClockSectionVisible, setIsWorldClockSectionVisible] = useState(false);

  const leadershipSectionRef = useRef<HTMLDivElement>(null);
  const [isLeadershipSectionVisible, setIsLeadershipSectionVisible] = useState(false);

  const combinedSectionRef = useRef<HTMLDivElement>(null);
  const [isCombinedSectionVisible, setIsCombinedSectionVisible] = useState(false);

  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const [isCtaSectionVisible, setIsCtaSectionVisible] = useState(false);

  const refsAndSetters = [
    { ref: whyChooseUsImageRef, setter: setIsWhyChooseUsImageVisible, threshold: 0.2 },
    { ref: whyChooseUsTextRef, setter: setIsWhyChooseUsTextVisible, threshold: 0.2 },
    { ref: serviceCard1Ref, setter: setIsServiceCard1Visible },
    { ref: serviceCard2Ref, setter: setIsServiceCard2Visible },
    { ref: serviceCard3Ref, setter: setIsServiceCard3Visible },
    { ref: serviceCard4Ref, setter: setIsServiceCard4Visible },
    { ref: techStackSectionRef, setter: setIsTechStackSectionVisible },
    { ref: worldClockSectionRef, setter: setIsWorldClockSectionVisible, threshold: 0.1 },
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

      {/* Services Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">Service Highlights</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Discover how our expertise in QA, Development, Data Analytics, and DevOps can transform your business.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.map((service, index) => (
              <div
                key={index}
                ref={
                  index === 0 ? serviceCard1Ref :
                  index === 1 ? serviceCard2Ref :
                  index === 2 ? serviceCard3Ref : serviceCard4Ref
                }
                className={cn(
                  "transition-all transform duration-700 ease-out",
                  service.delay,
                  (
                    index === 0 ? isServiceCard1Visible :
                    index === 1 ? isServiceCard2Visible :
                    index === 2 ? isServiceCard3Visible : isServiceCard4Visible
                  ) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  "h-full" 
                )}
              >
                <CardComponent
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                  linkText={service.linkText}
                  className="transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl h-full"
                />
              </div>
            ))}
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
                alt="TechnoNspace team collaborating in a modern office environment"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="team meeting"
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

      {/* World Clock Display Section - Removed, clocks moved to header */}
      {/*
      <section
        ref={worldClockSectionRef}
        className={cn(
          "py-16 bg-muted transition-all transform duration-700 ease-out",
          isWorldClockSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <WorldClockDisplay />
      </section>
      */}
      
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
                  alt="Global reach map placeholder for TechnoNspace"
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

