
import type { ReactNode } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface CardComponentProps {
  title: string;
  description?: string | ReactNode;
  icon?: ReactNode;
  link?: string;
  linkText?: string;
  children?: ReactNode;
  className?: string;
  footerContent?: ReactNode;
}

export function CardComponent({
  title,
  description,
  icon,
  link,
  linkText = "Learn More",
  children,
  className,
  footerContent,
}: CardComponentProps) {
  return (
    <Card className={cn("flex flex-col", className)}>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          {icon && <div className="text-primary">{icon}</div>}
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {children && <CardContent className="flex-grow">{children}</CardContent>}
      {(link || footerContent) && (
        <CardFooter className="mt-auto">
          {link && (
            <Button asChild variant="link" className="p-0 h-auto">
              <Link href={link}>
                {linkText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          {footerContent && <div className="ml-auto">{footerContent}</div>}
        </CardFooter>
      )}
    </Card>
  );
}

// Helper cn function if not globally available for this component context
// (Usually it's imported from "@/lib/utils")
function cn(...inputs: Array<string | undefined | null | false>) {
  return inputs.filter(Boolean).join(' ');
}
