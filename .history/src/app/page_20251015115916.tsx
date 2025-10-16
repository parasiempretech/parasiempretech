// src/app/page.tsx

// --- Importación de las Secciones ---
import { Hero } from "@/sections/Hero/Hero";
import Servicios from "@/sections/Servicios/Servicios";
import CTA from "@/sections/CTA/CTA"; // ✅ Lo usamos solo en Home
import Proceso from "@/sections/Proceso/Proceso";
import Principios from "@/sections/Principios/Principios";
import Tecnologias from "@/sections/Tecnologias/Tecnologias";
import Industrias from "@/sections/Industrias/Industrias";
import FAQ from "@/sections/FAQ/FAQ";
import Contacto from "@/sections/Contacto/Contacto";

// --- Página de Inicio ---
export default function HomePage() {
  return (
    <>
      {/* Hero: Presentación principal */}
      <Hero />

      {/* Servicios: Qué ofrecemos */}
      <Servicios />

      {/* CTA: Explicación estratégica (solo en Home) */}
      <CTA />

      {/* Proceso y valores */}
      <Proceso />
      <Principios />

      {/* Stack tecnológico e industrias */}
      <Tecnologias />
      <Industrias />

      {/* FAQ y contacto */}
      <FAQ />
      <Contacto />
    </>
  );
}
