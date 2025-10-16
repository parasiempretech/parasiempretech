// src/app/proceso/page.tsx

import type { Metadata } from "next";

// ✅ 1. Importaciones Corregidas y Limpias
// (Asegúrate de que estas rutas son correctas en tu proyecto)
import Proceso from "@/sections/Proceso/Proceso";
import Principios from "@/sections/Principios/Principios";
import ContactModal from "@/components/ContactModal/ContactModal";
import { ModalProvider } from "@/context/ModalContext";

export const metadata: Metadata = {
  title: "Proceso | Para Siempre Tech",
  description:
    "Cómo trabajamos: un proceso claro, ágil y artesanal para resultados reales.",
};

export default function ProcesoPage() {
  return (
    // ✅ 2. Se usa un Fragment (<>) dentro del ModalProvider para agrupar los componentes
    <ModalProvider>
      <>
        <Proceso />
        <Principios />
        <ContactModal />
      </>
    </ModalProvider>
  );
}
