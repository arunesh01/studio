
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { ReactNode } from "react";

interface Technology {
  name: string;
}

export interface TechnologyGroup {
  groupTitle: string;
  groupIcon: ReactNode;
  tools: Technology[];
}

export interface TechCategory {
  categoryName: string;
  description?: string;
  iconPlaceholder?: { src: string; alt: string; hint: string }; // Not currently used here
  technologyGroups: TechnologyGroup[];
}

interface TechStackShowcaseProps {
  techCategories: TechCategory[];
}

export function TechStackShowcase({ techCategories }: TechStackShowcaseProps) {
  return (
    <section className="py-16 bg-background"> {/* Ensures solid background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">
          Technology We Master
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Explore our core technology competencies and the tools we leverage to deliver cutting-edge solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category) => (
            <Card
              key={category.categoryName}
              className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary mb-1">
                  {category.categoryName}
                </CardTitle>
                 {category.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                {category.technologyGroups.map((group, groupIndex) => (
                  <div key={group.groupTitle}>
                    {groupIndex > 0 && <Separator className="my-4" />}
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-2"> {/* heading for group */}
                       {group.groupIcon}
                       <span>{group.groupTitle}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-2 gap-y-2.5">
                      {group.tools.map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="secondary"
                          className="px-3 py-1.5 text-sm transition-all duration-200 ease-in-out hover:bg-primary/80 hover:text-primary-foreground hover:scale-105 cursor-default"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

