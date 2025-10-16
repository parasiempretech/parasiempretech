// src/app/proceso/page.tsx (ProcesoPage.tsx)

import type { Metadata } from "next";
import Proceso from "@/sections/Proceso/Proceso";
import Principios from "@/sections/Principios/Principios";
import ContactModal from "@/components/ContactModal/ContactModal"; // <-- ¡Nuevo componente!

// ... metadata ...

export default function ProcesoPage() {
  return (
    <>
      <Proceso />
      <Principios />
      <ContactModal />{" "}
      {/* <-- El formulario de la imagen está aquí, pero inicialmente oculto */}
    </>
  );
}
