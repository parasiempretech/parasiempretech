import { Hero } from "@/sections/Hero/Hero";
import Servicios from "@/sections/Servicios/Servicios";
import CTA from "@/sections/CTA/CTA"; // Solo en Home
import Proceso from "@/sections/Proceso/Proceso";
import Principios from "@/sections/Principios/Principios";
import Tecnologias from "@/sections/Tecnologias/Tecnologias";
import Industrias from "@/sections/Industrias/Industrias";
import FAQ from "@/sections/FAQ/FAQ";
import Contacto from "@/sections/Contacto/Contacto";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Servicios />
      <CTA />
      <Proceso />
      <Principios />
      <Tecnologias />
      <Industrias />
      <FAQ />
      <Contacto />
    </>
  );
}
