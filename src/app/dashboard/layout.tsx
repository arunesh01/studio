
"use client"; // Sidebar component might require client context

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  BarChart2,
  Users,
  Briefcase,
  LifeBuoy,
  LogOut,
} from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Image from "next/image"; // Added for Next Image

const sidebarNavItems = [
  { href: "/dashboard", label: "Overview", icon: <LayoutDashboard /> },
  { href: "/dashboard/analytics", label: "Analytics", icon: <BarChart2 /> },
  { href: "/dashboard/projects", label: "Projects", icon: <Briefcase /> },
  { href: "/dashboard/clients", label: "Clients", icon: <Users /> },
  { href: "/dashboard/settings", label: "Settings", icon: <Settings /> },
];

const userNavItems = [
  { label: "Profile", icon: <Users size={16} /> },
  { label: "Billing", icon: <Briefcase size={16} /> },
  { label: "Settings", icon: <Settings size={16} /> },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen bg-background">
        <Sidebar collapsible="icon" className="border-r">
          <SidebarHeader className="p-4">
            <Link href="/dashboard" className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-semibold text-xl text-foreground group-data-[collapsible=icon]:hidden">
                TechFlow Hub
              </span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {sidebarNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <SidebarMenuButton
                      className="w-full justify-start"
                      isActive={pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))}
                      tooltip={{ children: item.label, className: "ml-2" }}
                    >
                      <span className="mr-2 group-data-[collapsible=icon]:mr-0">{item.icon}</span>
                      <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-2">
             <SidebarMenu>
                <SidebarMenuItem>
                     <SidebarMenuButton 
                        className="w-full justify-start"
                        tooltip={{ children: "Support", className: "ml-2" }}
                     >
                        <span className="mr-2 group-data-[collapsible=icon]:mr-0"><LifeBuoy/></span>
                        <span className="group-data-[collapsible=icon]:hidden">Support</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
             </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1 flex flex-col">
          <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
            <SidebarTrigger className="md:hidden" /> {/* Mobile Trigger */}
             <div className="hidden md:block">
                {/* Desktop trigger can be a button or part of rail interaction from sidebar component */}
             </div>
            <div className="flex-1">
              {/* Optional: Breadcrumbs or Page Title */}
              {/* <h1 className="text-xl font-semibold">Dashboard</h1> */}
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-9 w-9">
                      {/* Using Next Image for avatar */}
                      <AvatarImage asChild>
                        <Image src="https://placehold.co/100x100.png" alt="User Avatar" width={36} height={36} data-ai-hint="person user avatar" />
                      </AvatarImage>
                      <AvatarFallback>TF</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Admin User</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        admin@techflowhub.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
