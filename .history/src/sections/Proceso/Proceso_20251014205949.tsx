// src/sections/Proceso/Proceso.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import Timeline from "@/components/sections/TimelineSection";

// --- Pasos del proceso, explicados en lenguaje simple (Se mantiene aquí para no romper el código) ---
type TimelineStep = {
  title: string;
  children: string;
};

const TIMELINE_STEPS: TimelineStep[] = [
  {
    title: "1. Conocerte a fondo",
    children:
      "Nos reunimos para entender qué querés lograr, qué necesitás y cómo es tu negocio. Analizamos todo lo importante para encontrar las mejores oportunidades y crear un plan claro paso a paso.",
  },
  {
    title: "2. Diseñar la experiencia",
    children:
      "Transformamos tus ideas en una propuesta visual y funcional. Te mostramos cómo se va a ver y cómo va a funcionar cada parte, buscando siempre que sea atractiva, fácil de usar y pensada para tus objetivos.",
  },
  {
    title: "3. Crear y perfeccionar",
    children:
      "Construimos tu proyecto con dedicación y cuidado, cuidando cada detalle. Todo se revisa, se prueba y se mejora hasta que funcione rápido, fluido y sin errores.",
  },
  {
    title: "4. Lanzar y acompañar",
    children:
      "Preparamos todo para salir al público: revisamos el resultado final, te enseñamos cómo usarlo y te acompañamos en los primeros pasos para que todo salga perfecto.",
  },
  {
    title: "5. Trabajar en conjunto",
    children:
      "Un buen resultado se logra en equipo. Vos aportás tus ideas, comentarios y visión; nosotros aportamos nuestra experiencia, compromiso y comunicación constante. Así logramos resultados reales.",
  },
];

// -------------------------------------------------------------
// --- CONFIGURACIÓN ELITE: Constantes y Variantes de Animación ---
// -------------------------------------------------------------

// 1. Clases para el fondo degradado (mejor legibilidad)
const BACKGROUND_GRADIENT_CLASSES =
  "absolute inset-0 opacity-[0.08] bg-gradient-to-br from-[#00bfff] via-[#39ff14] to-[#ff00cc] blur-3xl";

// 2. Variantes de Animación (Reutilizable para todos los bloques y tipado consistente)
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  // Usamos 'as const' para evitar errores de tipado con Framer Motion (el error que viste antes)
  viewport: { once: true as const, amount: 0.2 },
};

// --- Componente Principal de la Sección ---
export default function Proceso() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Fondo con degradado suave (Usando constante) */}
      <motion.div
        className={BACKGROUND_GRADIENT_CLASSES}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        transition={{ duration: 1 }}
      />

      <SectionTitle id="proceso-title" kicker="Cómo trabajamos">
        Un proceso claro y humano
      </SectionTitle>

      {/* Timeline principal (Usando la variante de animación centralizada) */}
      <motion.div
        className="mt-16 relative z-10"
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.2 }} // Mantenemos el delay
      >
        <Timeline steps={TIMELINE_STEPS} />
      </motion.div>

      {/* Cierre y Call to Action (CTA) mejorado */}
      <motion.div
        className="mt-20 text-center relative z-10"
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.4 }} // Mantenemos el delay
      >
        <div className="max-w-2xl mx-auto">
          {/* Título más directo y orientado a la acción */}
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
          // Aumentamos el tamaño para darle más impacto visual (UI)
          className="btn btn-ultimate-glow shadow-[0_0_25px_rgba(0,255,180,0.3)] hover:shadow-[0_0_45px_rgba(0,255,180,0.6)] text-lg md:text-xl px-10 py-3"
          aria-label="Agendar una conversación inicial para tu proyecto"
        >
          Agendar una conversación de inicio
        </Link>

        {/* Nota de pie más sutil y específica (mejor UX) */}
        <p className="text-sm text-foreground/60 mt-6 tracking-wide italic">
          *Conversación inicial gratuita y sin compromiso.
        </p>
      </motion.div>
    </section>
  );
}
