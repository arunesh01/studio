
import * as React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building, Eye, Users, CloudCog, TrendingUp, Target, Brain, UserCheck, Group } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About TechnoNspace",
  description: "Learn more about TechnoNspace, our vision, company culture, our dedicated team, and career opportunities. Discover what drives our innovation in IT solutions.",
  keywords: ["TechnoNspace about", "company vision", "IT company culture", "TechnoNspace team", "IT careers", "job openings"],
};

interface TeamMember {
  name: string;
  role: string;
  subtitle: string;
  icon: React.ReactElement;
  imageSrc: string;
  imageHint: string;
}

interface Department {
  departmentName: string;
  departmentIcon: React.ReactElement;
  members: TeamMember[];
}

const departmentalTeamData: Department[] = [
  {
    departmentName: "Human Resources",
    departmentIcon: <UserCheck className="h-6 w-6 text-primary" />,
    members: [
      {
        name: "Shreya Singh",
        role: "Head of Human Resources",
        subtitle: "Empowering people, shaping culture",
        icon: <Users className="h-8 w-8 text-primary" />,
        imageSrc: "https://placehold.co/200x200.png",
        imageHint: "hr headshot",
      },
    ],
  },
  {
    departmentName: "Technology & Operations",
    departmentIcon: <CloudCog className="h-6 w-6 text-primary" />,
    members: [
      {
        name: "Omesh Singh",
        role: "DevOps & Cloud Head",
        subtitle: "Automating operations, ensuring scalability",
        icon: <CloudCog className="h-8 w-8 text-primary" />,
        imageSrc: "https://placehold.co/200x200.png",
        imageHint: "devops headshot",
      },
    ],
  },
  {
    departmentName: "Growth & Strategy",
    departmentIcon: <TrendingUp className="h-6 w-6 text-primary" />,
    members: [
      {
        name: "Anjnesh Singh",
        role: "Head of Sales",
        subtitle: "Driving growth through customer success",
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        imageSrc: "https://placehold.co/200x200.png",
        imageHint: "sales headshot",
      },
      {
        name: "Aditya Singh",
        role: "Head of Marketing & Finance",
        subtitle: "Strategizing growth and financial insights",
        icon: <Target className="h-8 w-8 text-primary" />,
        imageSrc: "https://placehold.co/200x200.png",
        imageHint: "marketing finance headshot",
      },
    ],
  },
  {
    departmentName: "Data & Analytics",
    departmentIcon: <Brain className="h-6 w-6 text-primary" />,
    members: [
      {
        name: "Anshuman Singh",
        role: "Data Analytics Lead",
        subtitle: "Turning data into actionable intelligence",
        icon: <Brain className="h-8 w-8 text-primary" />,
        imageSrc: "https://placehold.co/200x200.png",
        imageHint: "data analytics headshot",
      },
    ],
  },
];


const aboutSections = [
  {
    id: "our-vision",
    title: "Our Vision",
    icon: <Eye className="h-8 w-8 text-primary" />,
    content: (
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
    ),
  },
  {
    id: "company-culture",
    title: "Our Company Culture",
    icon: <Building className="h-8 w-8 text-primary" />,
    content: (
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
    ),
  },
  {
    id: "our-team",
    title: "Our Team",
    icon: <Users className="h-8 w-8 text-primary" />,
    content: (
       <div className="space-y-8 text-muted-foreground">
          <p className="text-lg">
              Our strength lies in our diverse and dedicated teams, each specializing in key areas to drive innovation and deliver exceptional results.
          </p>
          {departmentalTeamData.map((department) => (
            <div key={department.departmentName} className="space-y-4">
              <div className="flex items-center gap-3 mb-4 border-b pb-2">
                {React.cloneElement(department.departmentIcon, { className: "h-7 w-7 text-primary" })}
                <h2 className="text-2xl font-semibold text-foreground">{department.departmentName}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {department.members.map((member, index) => (
                  <Card
                    key={index}
                    className="flex flex-col items-center text-center p-6 shadow-md rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 bg-card"
                  >
                    <div className="relative mb-4">
                      <Image
                        src={member.imageSrc}
                        alt={`Photo of ${member.name}`}
                        width={100}
                        height={100}
                        className="rounded-full object-cover border-4 border-primary/20"
                        data-ai-hint={member.imageHint}
                      />
                      <div className="absolute -bottom-2 -right-2 bg-accent p-1.5 rounded-full shadow-md">
                        {React.cloneElement(member.icon, { className: "h-6 w-6 text-primary"})}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-xs mb-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.subtitle}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
          <p className="mt-8 text-center text-lg">
              You can meet our founders on the <Link href="/#leadership-section" className="text-primary hover:underline">Homepage Leadership Section</Link>.
          </p>
          <Image
              src="https://placehold.co/600x300.png"
              alt="Diverse group of professionals working together"
              width={600}
              height={300}
              className="rounded-md mt-6 mx-auto"
              data-ai-hint="professional team"
          />
       </div>
    ),
  },
  {
    id: "openings",
    title: "Career Opportunities",
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    content: (
      <div className="space-y-4 text-muted-foreground">
          <p>
              We are always looking for talented individuals to join our dynamic team. If you are passionate about technology and eager to make an impact, we would love to hear from you.
          </p>
          <p>
              Currently, we do not have specific openings listed here. Please check back soon or visit our (upcoming) dedicated careers page for the latest opportunities.
          </p>
          <Button variant="outline" disabled>View Current Openings (Coming Soon)</Button>
      </div>
    ),
  },
];


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
          {aboutSections.map((section) => (
            <AccordionItem value={section.id} key={section.id} className="border-none">
              <Card id={section.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 scroll-mt-20">
                <AccordionTrigger className="p-6 hover:no-underline">
                  <div className="flex items-center gap-4 w-full">
                    {section.icon}
                    <CardTitle className="text-2xl leading-tight text-left">{section.title}</CardTitle>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  {section.content}
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
