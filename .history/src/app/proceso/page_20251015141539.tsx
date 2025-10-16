// src/app/proceso/page.tsx

import type { Metadata } from "next";
import Proceso from "@/sections/Proceso/Proceso";
import Principios from "@/sections/Principios/Principios";

// ⚠️ Nota: Debes crear este componente en src/components/ContactModal/ContactModal.tsx
// Si el formulario que me mostraste se abre al hacer clic, debe ser un modal o componente de contacto que maneja su estado.
import ContactModal from "@/components/ContactModal/ContactModal";
import { ModalProvider } from "@/context/ModalContext"; // Importamos el contexto

export const metadata: Metadata = {
  title: "Proceso | Para Siempre Tech",
  description:
    "Cómo trabajamos: un proceso claro, ágil y artesanal para resultados reales.",
};

export default function ProcesoPage() {
  return (
    // Envolvemos la página completa con el ModalProvider
    <ModalProvider>
      <>
        <Proceso />
        <Principios />
        {/* Este componente renderizará el formulario,
            y usará 'isModalOpen' del contexto para mostrarse/ocultarse. */}
        <ContactModal />
      </>
    </ModalProvider>
  );
}
