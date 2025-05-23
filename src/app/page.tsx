
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardComponent } from "@/components/CardComponent";
import { CheckCircle, Zap, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { LeadershipSection } from "@/components/LeadershipSection"; // Import the new section

export default function HomePage() {
  const [isWhyChooseUsImageVisible, setIsWhyChooseUsImageVisible] = useState(false);
  const [isWhyChooseUsTextVisible, setIsWhyChooseUsTextVisible] = useState(false);
  const whyChooseUsImageRef = useRef<HTMLDivElement>(null);
  const whyChooseUsTextRef = useRef<HTMLDivElement>(null);

  const serviceCard1Ref = useRef<HTMLDivElement>(null);
  const serviceCard2Ref = useRef<HTMLDivElement>(null);
  const serviceCard3Ref = useRef<HTMLDivElement>(null);
  const [isServiceCard1Visible, setIsServiceCard1Visible] = useState(false);
  const [isServiceCard2Visible, setIsServiceCard2Visible] = useState(false);
  const [isServiceCard3Visible, setIsServiceCard3Visible] = useState(false);

  const leadershipSectionRef = useRef<HTMLDivElement>(null); // Ref for LeadershipSection
  const [isLeadershipSectionVisible, setIsLeadershipSectionVisible] = useState(false); // State for LeadershipSection

  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const [isCtaSectionVisible, setIsCtaSectionVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, 
    };

    const genericObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
      setter: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setter(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const whyChooseUsImageObserver = new IntersectionObserver(
      (entries, obs) => genericObserverCallback(entries, obs, setIsWhyChooseUsImageVisible),
      { ...observerOptions, threshold: 0.2 }
    );
    if (whyChooseUsImageRef.current) {
      whyChooseUsImageObserver.observe(whyChooseUsImageRef.current);
    }

    const whyChooseUsTextObserver = new IntersectionObserver(
      (entries, obs) => genericObserverCallback(entries, obs, setIsWhyChooseUsTextVisible),
      { ...observerOptions, threshold: 0.2 }
    );
    if (whyChooseUsTextRef.current) {
      whyChooseUsTextObserver.observe(whyChooseUsTextRef.current);
    }

    const serviceCard1Observer = new IntersectionObserver(
      (entries, obs) => genericObserverCallback(entries, obs, setIsServiceCard1Visible),
      observerOptions
    );
    if (serviceCard1Ref.current) serviceCard1Observer.observe(serviceCard1Ref.current);

    const serviceCard2Observer = new IntersectionObserver(
      (entries, obs) => genericObserverCallback(entries, obs, setIsServiceCard2Visible),
      observerOptions
    );
    if (serviceCard2Ref.current) serviceCard2Observer.observe(serviceCard2Ref.current);

    const serviceCard3Observer = new IntersectionObserver(
      (entries, obs) => genericObserverCallback(entries, obs, setIsServiceCard3Visible),
      observerOptions
    );
    if (serviceCard3Ref.current) serviceCard3Observer.observe(serviceCard3Ref.current);
    
    const leadershipSectionObserver = new IntersectionObserver( // Observer for LeadershipSection
      (entries, obs) => genericObserverCallback(entries, obs, setIsLeadershipSectionVisible),
      observerOptions
    );
    if (leadershipSectionRef.current) leadershipSectionObserver.observe(leadershipSectionRef.current);

    const ctaSectionObserver = new IntersectionObserver(
      (entries, obs) => genericObserverCallback(entries, obs, setIsCtaSectionVisible),
      observerOptions
    );
    if (ctaSectionRef.current) ctaSectionObserver.observe(ctaSectionRef.current);

    return () => {
      if (whyChooseUsImageRef.current) whyChooseUsImageObserver.unobserve(whyChooseUsImageRef.current);
      if (whyChooseUsTextRef.current) whyChooseUsTextObserver.unobserve(whyChooseUsTextRef.current);
      if (serviceCard1Ref.current) serviceCard1Observer.unobserve(serviceCard1Ref.current);
      if (serviceCard2Ref.current) serviceCard2Observer.unobserve(serviceCard2Ref.current);
      if (serviceCard3Ref.current) serviceCard3Observer.unobserve(serviceCard3Ref.current);
      if (leadershipSectionRef.current) leadershipSectionObserver.unobserve(leadershipSectionRef.current); // Cleanup
      if (ctaSectionRef.current) ctaSectionObserver.unobserve(ctaSectionRef.current);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary-foreground mb-6">
            Empowering Your Business with <span className="text-white">TechFlow Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10">
            We provide cutting-edge IT solutions tailored to drive growth, efficiency, and innovation for your enterprise.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" variant="secondary" className="text-secondary-foreground hover:bg-secondary/90">
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">Our Core Services</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Discover how our expertise can transform your business operations.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              ref={serviceCard1Ref}
              className={cn(
                "transition-all transform duration-700 ease-out",
                isServiceCard1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <CardComponent
                title="Managed IT Services"
                description="Proactive IT support and management to keep your systems running smoothly."
                icon={<Zap size={28} />}
                link="/services#managed-it"
                linkText="Explore Managed IT"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl h-full" 
              />
            </div>
            <div
              ref={serviceCard2Ref}
              className={cn(
                "transition-all transform duration-700 ease-out delay-200",
                isServiceCard2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <CardComponent
                title="Cloud Solutions"
                description="Scalable and secure cloud infrastructure to power your applications."
                icon={<CheckCircle size={28} />} 
                link="/services#cloud-solutions"
                linkText="Discover Cloud Options"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl h-full"
              />
            </div>
            <div
              ref={serviceCard3Ref}
              className={cn(
                "transition-all transform duration-700 ease-out delay-[400ms]",
                isServiceCard3Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <CardComponent
                title="Cybersecurity"
                description="Protect your valuable assets with our comprehensive security services."
                icon={<Users size={28} />} 
                link="/services#cybersecurity"
                linkText="Strengthen Security"
                className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl h-full"
              />
            </div>
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
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="collaboration team"
              />
            </div>
            <div
              ref={whyChooseUsTextRef}
              className={cn(
                "md:w-1/2 transition-all duration-700 ease-out transform",
                isWhyChooseUsTextVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              )}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Partner with TechFlow Hub?</h2>
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
            Let's discuss how TechFlow Hub can help your business thrive. Get in touch with our experts today.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
