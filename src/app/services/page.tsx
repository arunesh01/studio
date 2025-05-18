
import { CardComponent } from "@/components/CardComponent";
import { Zap, Cloud, ShieldCheck, Network, Database, MessageSquare } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "managed-it",
    title: "Managed IT Services",
    description: "Comprehensive IT support, monitoring, and management to ensure your systems are always operational and efficient. We handle everything from helpdesk to strategic IT planning.",
    icon: <Zap size={32} />,
    details: [
      "24/7 System Monitoring",
      "Proactive Maintenance & Updates",
      "Helpdesk Support",
      "Vendor Management",
      "IT Asset Management",
    ],
    image: "https://placehold.co/600x400.png?text=Managed+IT",
    imageHint: "server room",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Leverage the power of the cloud with our tailored solutions. We offer cloud migration, infrastructure management, and SaaS integration to enhance scalability and collaboration.",
    icon: <Cloud size={32} />,
    details: [
      "Cloud Migration & Strategy",
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS) Integration",
      "Cloud Backup & Disaster Recovery",
    ],
    image: "https://placehold.co/600x400.png?text=Cloud+Solutions",
    imageHint: "cloud computing",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Services",
    description: "Protect your digital assets with our robust cybersecurity services. We provide threat detection, vulnerability assessments, and security awareness training.",
    icon: <ShieldCheck size={32} />,
    details: [
      "Threat Detection & Response",
      "Vulnerability Assessments",
      "Penetration Testing",
      "Security Awareness Training",
      "Firewall & Network Security",
    ],
    image: "https://placehold.co/600x400.png?text=Cybersecurity",
    imageHint: "security lock",
  },
  {
    id: "network-solutions",
    title: "Network Solutions",
    description: "Design, implementation, and management of reliable and high-performance network infrastructures. Ensuring seamless connectivity for your business.",
    icon: <Network size={32} />,
    details: [
        "Network Design & Implementation",
        "Wireless Network Solutions",
        "VPN & Remote Access",
        "Network Monitoring & Optimization",
        "SD-WAN Solutions"
    ],
    image: "https://placehold.co/600x400.png?text=Network+Solutions",
    imageHint: "network cables",
  },
  {
    id: "data-management",
    title: "Data Management & Analytics",
    description: "Unlock the power of your data with our comprehensive data management and analytics services. From data warehousing to business intelligence.",
    icon: <Database size={32} />,
    details: [
        "Data Warehousing",
        "Database Administration",
        "Business Intelligence & Reporting",
        "Data Backup & Recovery",
        "Big Data Solutions"
    ],
    image: "https://placehold.co/600x400.png?text=Data+Management",
    imageHint: "data charts",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description: "Strategic IT guidance to help you make informed technology decisions, optimize your IT investments, and align technology with your business goals.",
    icon: <MessageSquare size={32} />,
    details: [
        "IT Strategy & Roadmap",
        "Digital Transformation",
        "Technology Assessment",
        "Project Management",
        "Compliance & Governance"
    ],
    image: "https://placehold.co/600x400.png?text=IT+Consulting",
    imageHint: "business meeting",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Our IT Services</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Tailored technology solutions designed to propel your business forward. Explore our comprehensive range of IT services.
        </p>
      </header>

      <div className="space-y-16">
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className="scroll-mt-20">
            <div className={`flex flex-col gap-8 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover aspect-[3/2]"
                  data-ai-hint={service.imageHint}
                />
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <span className="text-primary mr-3">{service.icon}</span>
                  <h2 className="text-3xl font-semibold text-foreground">{service.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

// Helper for CheckCircle icon (assuming it's from lucide-react)
const CheckCircle = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);
