// src/sections/Proceso/Proceso.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import Timeline from "@/components/sections/TimelineSection";

// --- Tipos de Datos y Contenido para el Timeline ---
type TimelineStep = {
  title: string;
  children: string;
};

const TIMELINE_STEPS: TimelineStep[] = [
  {
    title: "1. Descubrimiento Estratégico",
    children:
      "Reunión inicial para entender tus objetivos, necesidades del negocio y público objetivo. Identificamos oportunidades de mejora y definimos las métricas de éxito que guiarán todo el proyecto.",
  },
  {
    title: "2. Diseño y Arquitectura",
    children:
      "Creamos wireframes, flujos y prototipos interactivos. Definimos la arquitectura técnica, componentes clave y la experiencia de usuario más eficiente para tu caso de uso.",
  },
  {
    title: "3. Desarrollo y Validación",
    children:
      "Construimos con estándares de ingeniería, código limpio y componentes reutilizables. Integramos APIs, autenticación y pruebas automáticas. Se realizan revisiones semanales y despliegues a entornos de staging.",
  },
  {
    title: "4. Lanzamiento y Optimización",
    children:
      "Publicación en producción, checklist final y acompañamiento post-lanzamiento. Monitoreamos el rendimiento, aplicamos mejoras continuas y, si lo necesitás, activamos un plan de mantenimiento evolutivo.",
  },
  {
    title: "5. Consideraciones Clave del Cliente",
    children:
      "El éxito depende de la colaboración: claridad en los objetivos, validaciones ágiles, comunicación continua y compromiso mutuo. Nosotros garantizamos transparencia, metodología y resultados medibles.",
  },
];

// --- Componente Principal de la Sección ---
export default function Proceso() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionTitle id="proceso-title" kicker="Cómo trabajamos">
        Proceso estratégico y transparente
      </SectionTitle>

      {/* Timeline con animación progresiva */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Timeline steps={TIMELINE_STEPS} />
      </motion.div>

      {/* Bloque de cierre con CTA */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold mb-4 text-foreground/90">
          ¿Listo para transformar tu idea en un proyecto real?
        </h3>
        <Link href="/contacto" className="btn btn-ultimate-glow">
          Agendar una conversación
        </Link>
      </motion.div>
    </section>
  );
}
