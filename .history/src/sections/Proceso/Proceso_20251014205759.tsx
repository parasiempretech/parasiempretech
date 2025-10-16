"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import Timeline from "@/components/sections/TimelineSection";
// Importamos la data y el tipo desde el archivo de datos externo
import { TIMELINE_STEPS } from "@/data/procesoSteps";
import type { TimelineStep } from "@/data/procesoSteps";

// --- Configuración de Estilos y Animaciones ---

// 1. Clases para el fondo degradado (más limpio)
const BACKGROUND_GRADIENT_CLASSES =
  "absolute inset-0 opacity-[0.08] bg-gradient-to-br from-[#00bfff] via-[#39ff14] to-[#ff00cc] blur-3xl";

// 2. Variantes de Animación (Reutilizable para todos los bloques)
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true as const, amount: 0.2 }, // amount: 0.2 para una mejor detección de scroll
};

// --- Componente Principal de la Sección ---
export default function Proceso() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* 3. Fondo con degradado suave (Usando la constante) */}
      <motion.div
        className={BACKGROUND_GRADIENT_CLASSES}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        transition={{ duration: 1 }}
      />

      <SectionTitle id="proceso-title" kicker="Cómo trabajamos">
        Un proceso claro y humano
      </SectionTitle>

      {/* 4. Timeline principal (Usando la variante de animación) */}
      <motion.div
        className="mt-16 relative z-10"
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.2 }}
      >
        {/* Asumo que Timeline usa los datos de manera óptima */}
        <Timeline steps={TIMELINE_STEPS} />
      </motion.div>

      {/* 5. Cierre y Call to Action (CTA) mejorado */}
      <motion.div
        className="mt-20 text-center relative z-10"
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.4 }}
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground/95 mb-4 tracking-tight">
            ¿Listo para empezar tu proyecto?
          </h3>
          <p className="text-foreground/70 text-base md:text-lg mb-8">
            Te escuchamos, te acompañamos y trabajamos juntos para convertir tus
            ideas en algo real, con un proceso simple, claro y sin
            complicaciones.
          </p>
        </div>

        <Link
          href="/contacto"
          className="btn btn-ultimate-glow shadow-[0_0_25px_rgba(0,255,180,0.3)] hover:shadow-[0_0_45px_rgba(0,255,180,0.6)] text-lg md:text-xl px-10 py-3"
          aria-label="Agendar una reunión de descubrimiento de proyecto"
        >
          Agendar una reunión de inicio
        </Link>

        {/* Nota de pie más sutil y específica */}
        <p className="text-sm text-foreground/60 mt-6 tracking-wide italic">
          *Conversación inicial gratuita y sin compromiso.
        </p>
      </motion.div>
    </section>
  );
}
