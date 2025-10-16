// src/sections/Proceso/Proceso.tsx

import SectionTitle from "@/components/common/SectionTitle";
import Timeline from "@/components/timeline/Timeline";
import Link from "next/link";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";

// --- Tipos de Datos y Contenido para PROCESO ---
type TimelineItemProps = {
  title: string;
  children: React.ReactNode;
};

const TIMELINE_STEPS: TimelineItemProps[] = [
  {
    title: "1. Descubrimiento",
    children:
      "Conversación inicial para entender contexto, restricciones y prioridades. Definimos entregables posibles y un alcance razonable.",
  },
  {
    title: "2. Prototipo",
    children:
      "Wireframes y flujos. Revisión temprana para evitar cambios tardíos y ganar velocidad en la implementación.",
  },
  {
    title: "3. Desarrollo",
    children:
      "Implementación con estándares, componentes reutilizables y documentación. Despliegue a ambientes de prueba.",
  },
  {
    title: "4. Lanzamiento",
    children:
      "Puesta en producción, checklist final y acompañamiento inicial. Opcional: plan de mantenimiento evolutivo.",
  },
];

// --- Componente Principal de la Sección ---
export default function Proceso() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionTitle id="proceso-title" kicker="Cómo trabajamos">
        Proceso claro y definido
      </SectionTitle>

      <div className="mt-12">
        <Timeline steps={TIMELINE_STEPS} />
      </div>

      <AnimateOnScroll className="mt-12 text-center">
        <Link href="/contacto" className="btn btn-glow">
          Agendar una conversación
        </Link>
      </AnimateOnScroll>
    </section>
  );
}
