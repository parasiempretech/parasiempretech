// src/app/faq/page.tsx
import type { Metadata } from "next";
import FAQ from "@/sections/FAQ/FAQ";
import { ModalProvider } from "@/context/ModalContext"; // ✅ Import del provider
import ContactModal from "@/components/ContactModal/ContactModal"; // ✅ Import del modal

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Para Siempre Tech",
  description:
    "Resolvemos tus dudas frecuentes sobre desarrollo a medida, software y servicios digitales.",
};

export default function FAQPage() {
  return (
    <ModalProvider>
      {/* ✅ Ahora el FAQ tiene acceso al contexto del modal */}
      <FAQ />
      <ContactModal /> {/* ✅ Modal montado globalmente en esta página */}
    </ModalProvider>
  );
}
