// --- Importación de las Secciones de la Página ---
import { Hero } from "@/sections/Hero/Hero";
import { Servicios } from "@/sections/Servicios/Servicios";
import { Proceso } from "@/sections/Proceso/Proceso";
import { Tecnologias } from "@/sections/Tecnologias/Tecnologias";
import { Principios } from "@/sections/Principios/Principios";
import { Industrias } from "@/sections/Industrias/Industrias";
import { FAQ } from "@/sections/FAQ/FAQ";
import { CTA } from "@/sections/CTA/CTA";
import { Contacto } from "@/sections/Contacto/Contacto";

// --- Componente de la Página de Inicio ---
export default function HomePage() {
  return (
    <>
      <Hero />
      <Servicios />
      <Proceso />
      <Principios />
      <Tecnologias />
      <Industrias />
      <FAQ />
      <CTA />
      <Contacto />
    </>
  );
}
