import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
      <rect width="100" height="100" rx="28" fill="#1e293b" />
      <path d="M31 24h19c16 0 27 10 27 26S66 76 50 76H31V24Z" fill="none" stroke="white" strokeWidth="8" strokeLinejoin="round" />
      <path d="M47 39h3c7 0 11 4 11 11s-4 11-11 11h-3V39Z" fill="#3B5BDB" />
      <path d="M23 50h26" stroke="white" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m12 2.5 2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.57l-5.9 3.1 1.13-6.57-4.78-4.66 6.6-.96L12 2.5Z" />
    </svg>
  );
}
