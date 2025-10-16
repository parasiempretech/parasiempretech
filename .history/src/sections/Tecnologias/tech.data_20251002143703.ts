// Define el tipo de dato para cada tecnología para asegurar consistencia.
export type Technology = {
  name: string;
  logo: React.FC<React.SVGProps<SVGSVGElement>>; // Tipo para componentes de logo SVG
};

// --- Logos ---
// Aquí importarías tus propios logos SVG como componentes de React.
// Ejemplo: import ReactLogo from '@/assets/logos/react.svg';
// Por ahora, usaremos placeholders.

// Placeholder simple si no tienes SVGs
const PlaceholderLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
    <rect width="100" height="100" rx="8" />
  </svg>
);

export const TECHNOLOGIES: Technology[] = [
  { name: "React", logo: PlaceholderLogo },
  { name: "Next.js", logo: PlaceholderLogo },
  { name: "TypeScript", logo: PlaceholderLogo },
  { name: "Node.js", logo: PlaceholderLogo },
  { name: "PostgreSQL", logo: PlaceholderLogo },
  { name: "Docker", logo: PlaceholderLogo },
  { name: "AWS", logo: PlaceholderLogo },
  { name: "Figma", logo: PlaceholderLogo },
  { name: "Tailwind CSS", logo: PlaceholderLogo },
];
