
"use client";

interface TechItem { // This interface is no longer directly used for rendering skills in this reverted version
  name: string;
}

interface TechCategory {
  categoryName: string;
  technologies: TechItem[]; // This will exist in the data but won't be used for popovers
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
          Explore the key technology categories we specialize in.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {techCategories.map((category) => (
            <div
              key={category.categoryName}
              className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-default"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {category.categoryName}
              </h3>
              {category.description && (
                <p className="text-sm text-muted-foreground min-h-[3rem] line-clamp-3">
                  {category.description}
                </p>
              )}
              {/* Popover for detailed skills is removed in this reverted version */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
