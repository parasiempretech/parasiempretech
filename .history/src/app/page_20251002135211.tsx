// src/app/page.tsx

// --- Importación de las Secciones de la Página ---
// Corregimos las importaciones para que usen "named exports" (con llaves {})
import { Hero } from "@/sections/Hero/Hero";
import { Servicios } from "@/sections/Servicios/Servicios";
import { Proceso } from "@/sections/Proceso/Proceso";
import { Tecnologias } from "@/sections/Tecnologias/Tecnologias";
import { Principios } from "@/sections/Principios/Principios";
import { Industrias } from "@/sections/Industrias/Industrias";
import { FAQ } from "@/sections/FAQ/FAQ";
import { CTA } from "@/sections/CTA/CTA"; // Call to Action (Llamada a la acción)
import { Contacto } from "@/sections/Contacto/Contacto";

// --- Componente de la Página de Inicio ---
export default function HomePage() {
  return (
    // Usamos un Fragment (<>) para agrupar las secciones sin agregar un div innecesario al DOM.
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
