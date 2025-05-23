
import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TechnoNspace Logo"
      {...props}
    >
      <path d="M20 80V20L50 35V65L20 80Z" className="fill-primary" />
      <path d="M50 35L80 20V50L50 65V35Z" className="fill-accent" />
      <path d="M50 65L80 50V80L50 95V65Z" className="fill-primary opacity-70" />
    </svg>
  );
}
