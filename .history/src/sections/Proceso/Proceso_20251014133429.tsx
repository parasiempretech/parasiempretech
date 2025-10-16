// src/sections/Proceso/Proceso.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import Timeline from "@/components/sections/TimelineSection"; // <-- RUTA CORREGIDA

// --- Tipos de Datos y Contenido para el Timeline ---
type TimelineStep = {
  title: string;
  children: string;
};

const TIMELINE_STEPS: TimelineStep[] = [
  {
    title: "1. Descubrimiento",
    children:
      "Reunión inicial para entender tus objetivos, audiencia y desafíos. Definimos el alcance y las métricas de éxito.",
  },
  {
    title: "2. Diseño y Estrategia",
    children:
      "Creación de wireframes y prototipos. Definimos la arquitectura técnica y el plan de trabajo detallado.",
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

      {/* Envolvemos el Timeline en un motion.div para animarlo */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Timeline steps={TIMELINE_STEPS} />
      </motion.div>

      {/* Hacemos lo mismo con el botón, pero con un delay mayor */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link href="/contacto" className="btn btn-glow">
          Agendar una conversación
        </Link>
      </motion.div>
    </section>
  );
}
