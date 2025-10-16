import type { Metadata } from "next";
import Tecnologias from "@/sections/Tecnologias/Tecnologias";

export const metadata: Metadata = {
  title: "Tecnologías | Para Siempre Tech",
  description:
    "Nuestro stack moderno: React, Next.js, Tailwind, Node, y más tecnologías líderes.",
};

export default function TecnologiasPage() {
  return <Tecnologias />;
}
