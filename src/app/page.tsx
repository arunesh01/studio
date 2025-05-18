
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardComponent } from "@/components/CardComponent";
import { CheckCircle, Zap, Users, BarChart } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Empowering Your Business with <span className="text-primary">TechFlow Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            We provide cutting-edge IT solutions tailored to drive growth, efficiency, and innovation for your enterprise.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
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
            <CardComponent
              title="Managed IT Services"
              description="Proactive IT support and management to keep your systems running smoothly."
              icon={<Zap size={28} />}
              link="/services#managed-it"
              linkText="Explore Managed IT"
            />
            <CardComponent
              title="Cloud Solutions"
              description="Scalable and secure cloud infrastructure to power your applications."
              icon={<CheckCircle size={28} />}
              link="/services#cloud-solutions"
              linkText="Discover Cloud Options"
            />
            <CardComponent
              title="Cybersecurity"
              description="Protect your valuable assets with our comprehensive security services."
              icon={<Users size={28} />}
              link="/services#cybersecurity"
              linkText="Strengthen Security"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="collaboration team"
              />
            </div>
            <div className="md:w-1/2">
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

      {/* CTA to Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
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
