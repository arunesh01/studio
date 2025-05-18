
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
    </footer>
  );
}
