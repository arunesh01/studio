
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { NewsletterSignupForm } from "@/components/NewsletterSignupForm";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Stay Connected</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates on our services and industry insights.
            </p>
            <NewsletterSignupForm />
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services#qa" className="text-muted-foreground hover:text-primary">Quality Assurance</Link></li>
                <li><Link href="/services#development" className="text-muted-foreground hover:text-primary">Development</Link></li>
                <li><Link href="/services#data-analytics" className="text-muted-foreground hover:text-primary">Data Analytics</Link></li>
                <li><Link href="/services#devops" className="text-muted-foreground hover:text-primary">DevOps</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} TechFlow Hub. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
