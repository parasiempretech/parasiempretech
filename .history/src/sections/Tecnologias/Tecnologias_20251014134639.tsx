// src/sections/Tecnologias/Tecnologias.tsx

import SectionTitle from "@/components/common/SectionTitle";
import TechCloud from "@/components/sections/TechCloud"; // <-- Importamos el nuevo componente

// --- Componente Principal de la Sección ---
// Este archivo ahora es muy limpio y solo se encarga de la estructura general.
export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tech-title"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionTitle id="tech-title" kicker="Stack Tecnológico">
        Tecnologías y Conceptos
      </SectionTitle>

      {/* Reemplazo de los dos DraggableCarousel por el componente visual TechCloud */}
      <div className="mt-12">
        <TechCloud />
      </div>
    </section>
  );
}
