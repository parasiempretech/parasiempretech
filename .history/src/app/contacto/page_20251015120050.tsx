// src/app/contacto/page.tsx

import type { Metadata } from "next";
import Contacto from "@/sections/Contacto/Contacto";
import FAQ from "@/sections/FAQ/FAQ";

export const metadata: Metadata = {
  title: "Contacto | Para Siempre Tech",
  description: "Escribinos y transformemos tu idea en un proyecto real.",
};

export default function ContactoPage() {
  return (
    <>
      <Contacto />
      <FAQ />
    </>
  );
}
