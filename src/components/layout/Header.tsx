
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AnalogClock } from "@/components/AnalogClock";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/dashboard", label: "Dashboard" },
];

interface ClockCityConfig {
  key: string;
  label: string;
  timeZone: string;
}

const CITIES_CONFIG: ClockCityConfig[] = [
  { key: "dubai", label: "Dubai", timeZone: "Asia/Dubai" },
  { key: "india", label: "India", timeZone: "Asia/Kolkata" },
  { key: "zurich", label: "Zurich", timeZone: "Europe/Zurich" },
  { key: "london", label: "London", timeZone: "Europe/London" },
  { key: "sydney", label: "Sydney", timeZone: "Australia/Sydney" },
];


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="TechnoNspace Home">
          <Logo className="h-8 w-8" />
          <span className="font-semibold text-xl hidden sm:inline-block">TechnoNspace</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-foreground/60"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2"> {/* Reduced gap for more space */}
          <div className="hidden lg:flex items-end gap-2 ml-auto"> {/* Reduced gap */}
            {CITIES_CONFIG.map(city => (
              <div key={city.key} className="flex flex-col items-center">
                <AnalogClock timeZone={city.timeZone} size={22} idSuffix={`header-${city.key}`} /> {/* Slightly smaller clock */}
                <span className="text-[9px] text-muted-foreground mt-0.5 tracking-tighter">{city.label}</span> {/* Smaller, tighter text */}
              </div>
            ))}
          </div>
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <SheetTitle asChild>
                  <Link href="/" className="flex items-center gap-2 mb-6" aria-label="TechnoNspace Home" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo className="h-8 w-8" />
                    <span className="font-semibold text-xl">TechnoNspace</span>
                  </Link>
              </SheetTitle>
              
              <div className="flex flex-col space-y-5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary py-2",
                      pathname === item.href ? "text-primary" : "text-foreground/80"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
               <div className="mt-8 space-y-3 lg:hidden">
                <p className="text-sm font-medium text-muted-foreground">Global Times:</p>
                {CITIES_CONFIG.map(city => (
                  <div key={`mobile-${city.key}`} className="flex items-center justify-between text-sm">
                    <span className="text-xs">{city.label}</span>
                     <AnalogClock timeZone={city.timeZone} size={20} idSuffix={`mobile-header-${city.key}`} />
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
