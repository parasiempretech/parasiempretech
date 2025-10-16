// src/app/proceso/page.tsx

// Importaciones de Next.js
import type { Metadata } from "next";

// 1. Importaciones de SECCIONES (Asegúrate que estas rutas existan)
import Proceso from "@/sections/Proceso/Proceso";
import Principios from "@/sections/Principios/Principios";

// 2. Importación del CONTEXTO para gestionar el Modal
import { ModalProvider } from "@/context/ModalContext";

// 3. Importación del COMPONENTE Modal
// El alias @/components/ContactModal debe funcionar si tu 'tsconfig.json' está bien.
// Si no funciona, la importación debe ser así:
import ContactModal from "@/components/ContactModal/ContactModal";

// Definición de Metadata (si la usas)
export const metadata: Metadata = {
  title: "Proceso | Para Siempre Tech",
  description:
    "Cómo trabajamos: un proceso claro, ágil y artesanal para resultados reales.",
};

// Componente de Página
export default function ProcesoPage() {
  return (
    // 4. Se envuelve toda la página en el ModalProvider
    <ModalProvider>
      {/* Se usa un Fragment (<>) como contenedor */}
      <>
        {/* Secciones de la página */}
        <Proceso />
        <Principios />

        {/* El Modal de Contacto (siempre visible, pero oculto por estado) */}
        <ContactModal />
      </>
    </ModalProvider>
  );
}
