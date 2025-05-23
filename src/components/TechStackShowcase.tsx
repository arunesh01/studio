
"use client";

import { Check } from "lucide-react"; // Or any other icon you prefer

interface TechItem {
  name: string;
  // icon?: React.ReactNode; // Optional: if you want to add icons later
}

interface TechCategory {
  categoryName: string;
  technologies: TechItem[];
  // icon?: React.ReactNode; // Optional: category icon
}

interface TechStackShowcaseProps {
  techCategories: TechCategory[];
}

export function TechStackShowcase({ techCategories }: TechStackShowcaseProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">
          Technologies We Master
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Leveraging a robust stack of modern tools and technologies to deliver cutting-edge solutions across all our service areas.
        </p>

        <div className="space-y-12">
          {techCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-primary mb-6 text-center md:text-left flex items-center justify-center md:justify-start">
                {/* category.icon && <span className="mr-3">{category.icon}</span> */}
                {category.categoryName}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-card p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex items-center justify-center text-center transform hover:scale-105"
                  >
                    {/* tech.icon && <span className="mr-2 text-accent">{tech.icon}</span> */}
                    <span className="text-sm font-medium text-card-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
