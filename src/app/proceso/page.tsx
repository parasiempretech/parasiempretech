// src/app/proceso/page.tsx

// -----------------------------------------------------------------------------
// 1. Importaciones principales
// -----------------------------------------------------------------------------
import type { Metadata } from "next";

// Secciones internas del sitio
import Proceso from "@/sections/Proceso/Proceso";
import Principios from "@/sections/Principios/Principios";

// Contexto para controlar el estado del modal
import { ModalProvider } from "@/context/ModalContext";

// Componente Modal (corregido según estructura de carpetas ✅)
import ContactModal from "@/components/ContactModal/ContactModal";

// -----------------------------------------------------------------------------
// 2. Metadatos de la página (SEO / Navegador)
// -----------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Proceso | Para Siempre Tech",
  description:
    "Cómo trabajamos: un proceso claro, ágil y artesanal para resultados reales.",
};

// -----------------------------------------------------------------------------
// 3. Componente principal de la página
// -----------------------------------------------------------------------------
export default function ProcesoPage() {
  return (
    // El proveedor del contexto permite abrir/cerrar el modal desde cualquier parte
    <ModalProvider>
      <>
        {/* Sección principal del proceso de trabajo */}
        <Proceso />

        {/* Principios que guían la filosofía de trabajo */}
        <Principios />

        {/* Modal de contacto global (visible según estado del contexto) */}
        <ContactModal />
      </>
    </ModalProvider>
  );
}
