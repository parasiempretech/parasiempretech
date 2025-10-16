import type { Metadata } from "next";
import Proceso from "@/sections/Proceso/Proceso";
import Principios from "@/sections/Principios/Principios";

export const metadata: Metadata = {
  title: "Proceso | Para Siempre Tech",
  description:
    "Cómo trabajamos: un proceso claro, ágil y artesanal para resultados reales.",
};

export default function ProcesoPage() {
  return (
    <>
      <Proceso />
      <Principios />
    </>
  );
}
