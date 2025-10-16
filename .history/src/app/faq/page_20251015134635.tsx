// src/app/faq/page.tsx
import type { Metadata } from "next";
import FAQ from "@/sections/FAQ/FAQ";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Para Siempre Tech",
  description:
    "Resolvemos tus dudas frecuentes sobre desarrollo a medida, software y servicios digitales.",
};

export default function FAQPage() {
  return <FAQ />;
}
