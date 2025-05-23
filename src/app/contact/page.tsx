
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - TechFlow Hub",
  description: "Get in touch with TechFlow Hub. Send us a message, find our office location, or reach out via email or phone. We're here to help with your IT needs.",
  keywords: ["contact TechFlow Hub", "IT support contact", "TechFlow Hub address", "request consultation"],
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Get In Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We're here to help and answer any question you might have. We look forward to hearing from you. Fill out the form below or reach out through our contact details.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Our Office</h3>
                <p>123 Tech Avenue, Innovation City, TX 75001, USA</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Email Us</h3>
                <a href="mailto:info@techflowhub.com" className="hover:text-primary transition-colors">info@techflowhub.com</a>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Call Us</h3>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a>
              </div>
            </div>
            <div className="pt-4">
                <Image 
                    src="https://placehold.co/600x300.png" 
                    alt="Placeholder map showing TechFlow Hub office location" 
                    width={600} 
                    height={300}
                    className="rounded-md"
                    data-ai-hint="map office city"
                />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
