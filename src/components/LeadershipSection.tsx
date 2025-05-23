
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';
// To enable actual Firebase fetching, uncomment these lines:
// import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { firebaseApp } from '@/lib/firebase'; // Assuming you create this file

interface FounderProfile {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageURL: string;
  imageHint: string;
  skills: string[];
  linkedinURL?: string;
}

export function LeadershipSection() {
  const [founders, setFounders] = useState<FounderProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFounders = async () => {
      setLoading(true);
      setError(null);
      try {
        // --- Firestore fetching logic (currently commented out) ---
        // Make sure you have Firebase initialized and a 'firebase.ts' file in src/lib
        // For example, in src/lib/firebase.ts:
        //   import { initializeApp, getApps, getApp } from 'firebase/app';
        //   const firebaseConfig = { apiKey: "YOUR_API_KEY", ... };
        //   export const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
        //   export const db = getFirestore(firebaseApp);
        // Then import db here: import { db } from '@/lib/firebase';

        // const dbInstance = getFirestore(firebaseApp); // Or use the imported 'db'
        // const foundersCol = collection(dbInstance, 'founders');
        // const founderSnapshot = await getDocs(foundersCol);
        // if (founderSnapshot.empty) {
        //   console.warn("No founders found in Firestore. Displaying placeholder data.");
        // }
        // const foundersList = founderSnapshot.docs.map(doc => ({
        //   id: doc.id,
        //   name: doc.data().name || 'N/A',
        //   title: doc.data().title || 'N/A',
        //   bio: doc.data().bio || 'Bio not available.',
        //   imageURL: doc.data().imageURL || `https://placehold.co/300x300.png?text=${doc.data().name?.[0] || 'P'}`,
        //   imageHint: doc.data().imageHint || 'portrait person',
        //   skills: doc.data().skills || [],
        //   linkedinURL: doc.data().linkedinURL,
        // } as FounderProfile));
        // setFounders(foundersList.length > 0 ? foundersList : getPlaceholderFounders());
        // --- End of Firestore fetching logic ---

        // Using placeholder data for now. Replace this with the Firestore logic above.
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
        setFounders(getPlaceholderFounders());

      } catch (e) {
        console.error("Error fetching founders: ", e);
        setError("Failed to load leadership profiles.");
        setFounders(getPlaceholderFounders()); // Show placeholders on error too for demo
      } finally {
        setLoading(false);
      }
    };

    fetchFounders();
  }, []);

  const getPlaceholderFounders = (): FounderProfile[] => [
    {
      id: 'placeholder-1',
      name: 'Alex Johnson',
      title: 'Founder & CEO',
      bio: 'Alex is a visionary leader with over 15 years of experience in the tech industry, passionate about driving innovation and helping businesses thrive through technology. His expertise spans across software development, strategic planning, and team building.',
      imageURL: 'https://placehold.co/400x400.png',
      imageHint: 'founder portrait man',
      skills: ['Strategic Planning', 'Software Architecture', 'Team Leadership', 'Product Management'],
      linkedinURL: '#',
    },
    {
      id: 'placeholder-2',
      name: 'Maria Garcia',
      title: 'Co-Founder & CTO',
      bio: 'Maria is a tech enthusiast and a problem-solver at heart. With a strong background in DevOps and cloud computing, she ensures our technical operations are efficient, scalable, and secure. Maria champions agile methodologies and cutting-edge solutions.',
      imageURL: 'https://placehold.co/400x400.png',
      imageHint: 'cofounder portrait woman',
      skills: ['DevOps Strategy', 'Cloud Infrastructure', 'CI/CD Pipelines', 'Cybersecurity'],
      linkedinURL: '#',
    },
  ];

  if (loading) {
    return (
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[1, 2].map(i => (
              <Card key={i} className="shadow-xl">
                <div className="relative w-full h-72 md:h-80 bg-muted animate-pulse"></div>
                <CardHeader className="pt-6">
                  <CardTitle className="h-8 bg-muted animate-pulse rounded w-3/4"></CardTitle>
                  <CardDescription className="h-4 bg-muted animate-pulse rounded w-1/2 mt-1"></CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-20 bg-muted animate-pulse rounded"></div>
                  <div className="h-4 bg-muted animate-pulse rounded w-1/4 mt-4"></div>
                  <div className="space-y-1">
                    <div className="h-3 bg-muted animate-pulse rounded w-3/5"></div>
                    <div className="h-3 bg-muted animate-pulse rounded w-4/6"></div>
                    <div className="h-3 bg-muted animate-pulse rounded w-1/2"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error && founders.length === 0) { // Only show full error if no placeholders are shown
    return (
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Leadership</h2>
          <p className="text-destructive">{error}</p>
        </div>
      </section>
    );
  }
  
  if (founders.length === 0 && !loading) {
     return (
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Leadership</h2>
          <p className="text-muted-foreground">Leadership profiles will be available soon.</p>
          <p className="text-sm text-muted-foreground mt-2"> (Admin: Please ensure the 'founders' collection in Firestore is populated and Firebase is configured correctly.)</p>
        </div>
      </section>
    );
  }


  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {founders.map((founder) => (
            <Card key={founder.id} className="flex flex-col shadow-xl overflow-hidden rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-72 md:h-80 lg:h-96">
                <Image
                  src={founder.imageURL}
                  alt={`Photo of ${founder.name}`}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={founder.imageHint}
                  className="transition-transform duration-300 group-hover:scale-105" // Example hover effect on image
                />
              </div>
              <CardHeader className="pt-6">
                <CardTitle className="text-2xl font-semibold">{founder.name}</CardTitle>
                <CardDescription className="text-primary font-medium text-base">{founder.title}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4 pb-6">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">{founder.bio}</p>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-md">Key Strengths:</h4>
                  <ul className="space-y-1">
                    {founder.skills.map((skill, index) => (
                       <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <Briefcase className="h-4 w-4 text-accent mr-2 shrink-0" /> 
                        {/* Using Briefcase as a generic "skill" icon */}
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                {founder.linkedinURL && founder.linkedinURL !== '#' && (
                  <Button variant="outline" asChild className="mt-auto">
                    <Link href={founder.linkedinURL} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Linkedin className="mr-2 h-4 w-4" /> View LinkedIn Profile
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper icon (can be removed if Briefcase is directly imported from lucide-react globally or is not preferred)
const Briefcase = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("lucide lucide-briefcase", className)}>
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);
// Helper cn function if not globally available for this component context
function cn(...inputs: Array<string | undefined | null | false>) {
  return inputs.filter(Boolean).join(' ');
}
