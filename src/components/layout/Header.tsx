
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AnalogClock } from "@/components/AnalogClock";

const mainNavItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  // "About Us" will be a dropdown
  { href: "/dashboard", label: "Dashboard" },
];

const aboutSubNavItems = [
  { href: "/about", label: "About Us Overview" },
  { href: "/about#our-vision", label: "Our Vision" },
  { href: "/about#company-culture", label: "Company Culture" },
  { href: "/about#our-team", label: "Our Team" },
  { href: "/about#openings", label: "Career Opportunities" },
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
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="TechnoNspace Home"
        >
          <Logo className="h-8 w-8" />
          <span className="font-semibold text-xl hidden sm:inline-block">
            TechnoNspace
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          {mainNavItems.map((item) => (
            <Button key={item.href} variant="link" asChild className="text-sm font-medium">
              <Link
                href={item.href}
                className={cn(
                  "transition-colors hover:text-primary px-3 py-2", // Adjusted padding
                  pathname === item.href
                    ? "text-primary"
                    : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            </Button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className={cn(
                  "transition-colors hover:text-primary px-3 py-2 text-sm font-medium", // Adjusted padding
                  pathname.startsWith("/about")
                    ? "text-primary"
                    : "text-foreground/60"
                )}>
                About Us
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {aboutSubNavItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
           <Button variant="link" asChild className="text-sm font-medium">
             <Link
                href="/contact"
                className={cn(
                  "transition-colors hover:text-primary px-3 py-2", 
                  pathname === "/contact"
                    ? "text-primary"
                    : "text-foreground/60"
                )}
              >
                Contact
              </Link>
            </Button>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          {" "}
          {/* Reduced gap for more space */}
          <div className="hidden lg:flex items-end gap-2 ml-auto">
            {" "}
            {/* Reduced gap */}
            {CITIES_CONFIG.map((city) => (
              <div key={city.key} className="flex flex-col items-center">
                <AnalogClock
                  timeZone={city.timeZone}
                  size={22}
                  idSuffix={`header-${city.key}`}
                />{" "}
                {/* Slightly smaller clock */}
                <span className="text-[9px] text-muted-foreground mt-0.5 tracking-tighter">
                  {city.label}
                </span>{" "}
                {/* Smaller, tighter text */}
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
            <SheetContent
              side="right"
              className="w-full max-w-xs bg-background p-6"
            >
              <SheetTitle asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 mb-6"
                  aria-label="TechnoNspace Home"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Logo className="h-8 w-8" />
                  <span className="font-semibold text-xl">TechnoNspace</span>
                </Link>
              </SheetTitle>

              <div className="flex flex-col space-y-3"> {/* Reduced space-y for more items */}
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary py-1.5", // Reduced py
                      pathname === item.href
                        ? "text-primary"
                        : "text-foreground/80"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                {/* About Us sub-items for mobile */}
                <span className="text-lg font-medium text-foreground/80 py-1.5">About Us</span>
                <div className="flex flex-col space-y-2 pl-4">
                  {aboutSubNavItems.map((item) => (
                     <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "text-md font-medium transition-colors hover:text-primary py-1", // Smaller font, reduced py
                          pathname === item.href || (pathname === "/about" && item.href === "/about")
                            ? "text-primary"
                            : "text-foreground/70"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                  ))}
                </div>
                 <Link
                    href="/contact"
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary py-1.5",
                      pathname === "/contact"
                        ? "text-primary"
                        : "text-foreground/80"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
              </div>
              <div className="mt-8 space-y-3 lg:hidden">
                <p className="text-sm font-medium text-muted-foreground">
                  Global Times:
                </p>
                {CITIES_CONFIG.map((city) => (
                  <div
                    key={`mobile-${city.key}`}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-xs">{city.label}</span>
                    <AnalogClock
                      timeZone={city.timeZone}
                      size={20}
                      idSuffix={`mobile-header-${city.key}`}
                    />
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
