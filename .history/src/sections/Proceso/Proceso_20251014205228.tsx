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
    title: "1. Diagnóstico Estratégico",
    children:
      "Analizamos tu modelo de negocio, objetivos y procesos internos. Detectamos oportunidades tecnológicas reales y diseñamos una hoja de ruta clara que combine visión y resultados medibles.",
  },
  {
    title: "2. Diseño y Experiencia",
    children:
      "Transformamos la estrategia en experiencia: diseñamos wireframes, flujos, prototipos y arquitectura visual. Cada decisión combina estética, usabilidad y eficiencia técnica.",
  },
  {
    title: "3. Desarrollo y Optimización",
    children:
      "Construimos con estándares de ingeniería: Next.js 14, TypeScript, Tailwind, Prisma y CI/CD. Cada línea de código sigue principios de escalabilidad, seguridad y rendimiento.",
  },
  {
    title: "4. Lanzamiento y Evolución",
    children:
      "Desplegamos en entornos controlados, realizamos pruebas integrales y lanzamos con checklist completo. Incluye acompañamiento post-lanzamiento, métricas y optimización continua.",
  },
  {
    title: "5. Consideraciones y Sinergia",
    children:
      "El éxito de un desarrollo a medida surge del trabajo conjunto. Vos aportás claridad y feedback ágil; nosotros garantizamos metodología, transparencia y resultados tangibles.",
  },
];

// --- Componente Principal de la Sección ---
export default function Proceso() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Fondo visual dinámico */}
      <motion.div
        className="absolute inset-0 opacity-[0.08] bg-gradient-to-br from-[#00bfff] via-[#39ff14] to-[#ff00cc] blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        transition={{ duration: 1 }}
      />

      <SectionTitle id="proceso-title" kicker="Cómo trabajamos">
        Proceso estratégico y transparente
      </SectionTitle>

      {/* Timeline principal */}
      <motion.div
        className="mt-16 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Timeline steps={TIMELINE_STEPS} />
      </motion.div>

      {/* Bloque de cierre con CTA y microcopy profesional */}
      <motion.div
        className="mt-20 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground/90 mb-4">
            Cada proyecto es una alianza estratégica.
          </h3>
          <p className="text-foreground/70 text-base md:text-lg mb-8">
            Convertimos ideas en productos digitales con impacto real. Nuestro
            proceso combina planificación, creatividad y precisión técnica.
          </p>
        </div>

        <Link
          href="/contacto"
          className="btn btn-ultimate-glow shadow-[0_0_25px_rgba(0,255,180,0.3)] hover:shadow-[0_0_45px_rgba(0,255,180,0.6)]"
        >
          Agendar una conversación
        </Link>

        <p className="text-xs text-foreground/50 mt-6 tracking-wide">
          *Proceso certificado por las mejores prácticas en desarrollo y gestión
          de software.
        </p>
      </motion.div>
    </section>
  );
}
