
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardComponent } from "@/components/CardComponent";
import { CheckCircle, BarChart3, ServerCog, ClipboardCheck, Code2 } from "lucide-react"; // Added ClipboardCheck and Code2 for service icons
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { LeadershipSection } from "@/components/LeadershipSection";
import { TechStackShowcase } from "@/components/TechStackShowcase"; // Import the new component

const serviceHighlights = [
  {
    title: "Quality Assurance (QA)",
    description: "Ensuring product excellence with AI-driven and automated testing solutions.",
    icon: <Image src="https://placehold.co/64x64.png" alt="Quality Assurance Icon for TechnoNspace" width={48} height={48} data-ai-hint="quality seal" />,
    link: "/services#qa",
    linkText: "Explore QA Solutions",
    refHook: "serviceCard1Ref",
    visibleHook: "isServiceCard1Visible",
    delay: "",
  },
  {
    title: "Development Services",
    description: "Custom web, mobile, and CRM/ERP solutions for scalable growth.",
    icon: <Image src="https://placehold.co/64x64.png" alt="Development Services Icon for TechnoNspace" width={48} height={48} data-ai-hint="dev tools" />,
    link: "/services#development",
    linkText: "Discover Development",
    refHook: "serviceCard2Ref",
    visibleHook: "isServiceCard2Visible",
    delay: "delay-200",
  },
  {
    title: "Data Analytics & BI",
    description: "Actionable insights through data visualization and business intelligence.",
    icon: <Image src="https://placehold.co/64x64.png" alt="Data Analytics Icon for TechnoNspace" width={48} height={48} data-ai-hint="data insight" />,
    link: "/services#data-analytics",
    linkText: "Unlock Data Insights",
    refHook: "serviceCard3Ref",
    visibleHook: "isServiceCard3Visible",
    delay: "delay-[400ms]",
  },
  {
    title: "DevOps & Cloud Solutions",
    description: "Efficient development pipelines with CI/CD and cloud automation.",
    icon: <Image src="https://placehold.co/64x64.png" alt="DevOps Services Icon for TechnoNspace" width={48} height={48} data-ai-hint="process gears" />,
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

  const leadershipSectionRef = useRef<HTMLDivElement>(null);
  const [isLeadershipSectionVisible, setIsLeadershipSectionVisible] = useState(false);

  const techStackSectionRef = useRef<HTMLDivElement>(null); // Ref for new section
  const [isTechStackSectionVisible, setIsTechStackSectionVisible] = useState(false); // State for new section

  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const [isCtaSectionVisible, setIsCtaSectionVisible] = useState(false);

  const refsAndSetters = [
    { ref: whyChooseUsImageRef, setter: setIsWhyChooseUsImageVisible, threshold: 0.2 },
    { ref: whyChooseUsTextRef, setter: setIsWhyChooseUsTextVisible, threshold: 0.2 },
    { ref: serviceCard1Ref, setter: setIsServiceCard1Visible },
    { ref: serviceCard2Ref, setter: setIsServiceCard2Visible },
    { ref: serviceCard3Ref, setter: setIsServiceCard3Visible },
    { ref: serviceCard4Ref, setter: setIsServiceCard4Visible },
    { ref: leadershipSectionRef, setter: setIsLeadershipSectionVisible },
    { ref: techStackSectionRef, setter: setIsTechStackSectionVisible }, // Added for new section
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
              obs.unobserve(entry.target);
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
  }, []); // refsAndSetters is stable

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary to-accent text-primary-foreground overflow-hidden">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract technology background for TechnoNspace hero section"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-20"
          data-ai-hint="tech abstract"
          priority
        />
        <div className="absolute inset-0 bg-black/30 z-0"></div> {/* Optional: Dark overlay for better text contrast */}
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
                  className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl h-full"
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

      {/* CTA to Contact Section */}
      <section className="py-20 bg-background">
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
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
