
"use client";

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
          Hover over a category to discover the key tools and technologies we leverage across our core service areas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Grid for category cards */}
          {techCategories.map((category) => (
            <div 
              key={category.categoryName} 
              className="relative group bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-default"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {category.categoryName}
              </h3>
              {category.description && (
                <p className="text-sm text-muted-foreground mb-4 min-h-[3rem] line-clamp-2"> 
                  {category.description}
                </p>
              )}
              
              {/* Hidden Tooltip/Popover that appears on hover */}
              <div 
                className="absolute left-0 right-auto top-[calc(100%_+_0.5rem)] w-full min-w-[280px] sm:min-w-[320px] max-w-md 
                           bg-popover text-popover-foreground p-4 border border-border rounded-xl shadow-2xl z-30 
                           opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                           transition-all duration-300 ease-in-out group-hover:delay-100 
                           transform group-hover:scale-100 scale-95 origin-top-left"
              >
                <h4 className="text-md font-semibold mb-3 text-accent border-b border-border pb-2">
                  Key Technologies & Tools:
                </h4>
                {category.technologies.length > 0 ? (
                  <ul className="space-y-1.5 max-h-48 overflow-y-auto pr-2 custom-scrollbar"> {/* Max height and scroll for long lists */}
                    {category.technologies.map((tech) => (
                      <li key={tech.name} className="text-xs text-muted-foreground flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-accent shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-muted-foreground">Specific tools and skills details coming soon.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
