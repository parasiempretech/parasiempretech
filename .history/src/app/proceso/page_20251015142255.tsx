// src/app/proceso/page.tsx

// ... (líneas 1 a 8)

// ❌ ANTES: import ContactModal from "@/components/ContactModal/ContactModal";
// ✅ DESPUÉS: Asegúrate que la ruta solo apunta a la carpeta (esto suele funcionar)

import ContactModal from "@/components/ContactModal/ContactModal"; // Cambia esta línea
import { ModalProvider } from "@/context/ModalContext";

// ... (resto del código)

export default function ProcesoPage() {
  return (
    <ModalProvider>
      <>
        <Proceso />
        <Principios />
        <ContactModal />
      </>
    </ModalProvider>
  );
}
