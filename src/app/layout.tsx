
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002'),
  title: {
    default: "TechnoNspace - Innovative IT Solutions & Services",
    template: "%s | TechnoNspace",
  },
  description: "TechnoNspace offers expert IT solutions in QA, Development, Data Analytics, and DevOps to drive business growth and efficiency. Partner with us for cutting-edge technology services.",
  keywords: ["IT solutions", "QA services", "software development", "data analytics", "DevOps", "TechnoNspace", "technology consulting"],
  openGraph: {
    title: "TechnoNspace - Innovative IT Solutions & Services",
    description: "Expert IT solutions in QA, Development, Data Analytics, and DevOps.",
    type: "website",
    locale: "en_US",
    // url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002', // Add your production URL
    // siteName: "TechnoNspace",
    // images: [ // Add a default OG image
    //   {
    //     url: '/og-image.png', // Path to your default OG image
    //     width: 1200,
    //     height: 630,
    //     alt: 'TechnoNspace Logo',
    //   },
    // ],
  },
  // twitter: { // Add Twitter specific card details if desired
  //   card: 'summary_large_image',
  //   title: 'TechnoNspace - Innovative IT Solutions',
  //   description: 'Expert IT solutions to empower your business.',
  //   // site: '@yourtwitterhandle',
  //   // creator: '@yourtwitterhandle',
  //   // images: ['/twitter-image.png'], // Path to your Twitter image
  // },
  // icons: { // Add favicon and other icons
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
