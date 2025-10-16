// src/app/industrias/page.tsx

import type { Metadata } from "next";
import Industrias from "@/sections/Industrias/Industrias";

export const metadata: Metadata = {
  title: "Industrias | Para Siempre Tech",
  description: "Soluciones digitales para distintas industrias y negocios.",
};

export default function IndustriasPage() {
  return <Industrias />;
}
