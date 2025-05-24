
"use client";

import { Badge } from "@/components/ui/badge"; // Import Badge component

interface TechItem {
  name: string;
}

interface TechCategory {
  categoryName: string;
  technologies: TechItem[];
  description?: string;
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
          Explore the key technology categories we specialize in, and the tools we use.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {techCategories.map((category) => (
            <div
              key={category.categoryName}
              className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {category.categoryName}
              </h3>
              {category.description && (
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
              )}
              {category.technologies && category.technologies.length > 0 && (
                <div className="mt-auto pt-4 border-t border-border/50">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Key Technologies & Tools:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <Badge key={tech.name} variant="secondary" className="text-xs">
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
