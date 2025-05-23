
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building, Eye, Group, Mail, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About TechnoNspace",
  description: "Learn more about TechnoNspace, our vision, company culture, our dedicated team, and career opportunities. Discover what drives our innovation in IT solutions.",
  keywords: ["TechnoNspace about", "company vision", "IT company culture", "TechnoNspace team", "IT careers", "job openings"],
};

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          About TechnoNspace
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Driving innovation and excellence in IT solutions. Discover who we are, what we stand for, and the opportunities to join our journey.
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-6">
          <AccordionItem value="contact-us" className="border-none">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-center gap-4 w-full">
                  <Mail className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl leading-tight text-left">Get in Touch</CardTitle>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-muted-foreground mb-4">
                  We're always here to help and answer any questions you might have. For detailed contact information, to send us a message, or to find our office locations, please visit our dedicated contact page.
                </p>
                <Button asChild>
                  <Link href="/contact">Go to Contact Page</Link>
                </Button>
              </AccordionContent>
            </Card>
          </AccordionItem>

          <AccordionItem value="our-vision" className="border-none">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-center gap-4 w-full">
                  <Eye className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl leading-tight text-left">Our Vision</CardTitle>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At TechnoNspace, our vision is to be a globally recognized leader in IT solutions, pioneering advancements in technology and empowering businesses to achieve their full potential. We strive to create a future where technology seamlessly integrates with business processes, driving innovation, efficiency, and sustainable growth.
                  </p>
                  <Image
                    src="https://placehold.co/600x300.png"
                    alt="Illustrative image representing future technology and innovation"
                    width={600}
                    height={300}
                    className="rounded-md mt-4"
                    data-ai-hint="future tech"
                  />
                </div>
              </AccordionContent>
            </Card>
          </AccordionItem>

          <AccordionItem value="company-culture" className="border-none">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-center gap-4 w-full">
                  <Building className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl leading-tight text-left">Our Company Culture</CardTitle>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    TechnoNspace fosters a culture of collaboration, continuous learning, and innovation. We believe in empowering our team members, encouraging creativity, and maintaining a supportive work environment where everyone can thrive and contribute to our collective success. Integrity, client-centricity, and a passion for technology are at the heart of everything we do.
                  </p>
                   <Image
                    src="https://placehold.co/600x300.png"
                    alt="Team collaborating in a positive work environment"
                    width={600}
                    height={300}
                    className="rounded-md mt-4"
                    data-ai-hint="team collaboration"
                  />
                </div>
              </AccordionContent>
            </Card>
          </AccordionItem>

          <AccordionItem value="our-team" className="border-none">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-center gap-4 w-full">
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl leading-tight text-left">Our Team</CardTitle>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                 <div className="space-y-4 text-muted-foreground">
                    <p>
                        Our team is composed of passionate, skilled, and dedicated professionals who are experts in their respective fields. We believe in the power of teamwork and continuous improvement. While detailed profiles are best viewed on our leadership section, know that every member of TechnoNspace is committed to delivering excellence.
                    </p>
                    <p>
                        You can meet our founders on the <Link href="/#leadership-section" className="text-primary hover:underline">Homepage Leadership Section</Link>.
                    </p>
                    <Image
                        src="https://placehold.co/600x300.png"
                        alt="Diverse group of professionals working together"
                        width={600}
                        height={300}
                        className="rounded-md mt-4"
                        data-ai-hint="professional team"
                    />
                 </div>
              </AccordionContent>
            </Card>
          </AccordionItem>

          <AccordionItem value="openings" className="border-none">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-center gap-4 w-full">
                  <Briefcase className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl leading-tight text-left">Career Opportunities</CardTitle>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-muted-foreground">
                    <p>
                        We are always looking for talented individuals to join our dynamic team. If you are passionate about technology and eager to make an impact, we would love to hear from you.
                    </p>
                    <p>
                        Currently, we do not have specific openings listed here. Please check back soon or visit our (upcoming) dedicated careers page for the latest opportunities.
                    </p>
                    <Button variant="outline" disabled>View Current Openings (Coming Soon)</Button>
                </div>
              </AccordionContent>
            </Card>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
