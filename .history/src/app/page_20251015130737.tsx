// src/app/page.tsx

import { Hero } from "@/sections/Hero/Hero";
// ❌ ELIMINAR: import Servicios from "@/sections/Servicios/Servicios";
import CTA from "@/sections/CTA/CTA";
// ❌ ELIMINAR: import Proceso from "@/sections/Proceso/Proceso";
// ❌ ELIMINAR: import Principios from "@/sections/Principios/Principios";
// ❌ ELIMINAR: import Tecnologias from "@/sections/Tecnologias/Tecnologias";
// ❌ ELIMINAR: import Industrias from "@/sections/Industrias/Industrias";
// ❌ ELIMINAR: import FAQ from "@/sections/FAQ/FAQ";
import Contacto from "@/sections/Contacto/Contacto";

export default function HomePage() {
  return (
    <>
            <Hero />      {/* ❌ ELIMINAR: <Servicios /> */}
            <CTA />      {/* ❌ ELIMINAR: <Proceso /> */}     {" "}
      {/* ❌ ELIMINAR: <Principios /> */}     {" "}
      {/* ❌ ELIMINAR: <Tecnologias /> */}     {" "}
      {/* ❌ ELIMINAR: <Industrias /> */}      {/* ❌ ELIMINAR: <FAQ /> */}
            <Contacto />   {" "}
    </>
  );
}
