// src/app/servicios/page.tsx

import type { Metadata } from "next";
import Servicios from "@/sections/Servicios/Servicios";
// Ya NO se importa el componente FAQ

export const metadata: Metadata = {
  title: "Servicios | Para Siempre Tech",
  description: "Desarrollo de software, sitios web y sistemas a medida.",
};

export default function ServiciosPage() {
  return (
    <>
            <Servicios />      {/* Ya NO se renderiza el componente <FAQ /> */} 
       {" "}
    </>
  );
}
