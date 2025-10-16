// src/sections/Proceso/Proceso.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import Timeline from "@/components/sections/TimelineSection";

// --- Pasos del proceso, explicados en lenguaje simple ---
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

// 2. Variante de Animación de Entrada Sencilla (Limpia el error de tipado)
// Nota: Aquí NO se incluye 'transition' ni 'viewport' en el objeto, se aplican aparte.
const FADE_IN_UP_PROPS = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
};

// 3. Configuración de Transición Base
const BASE_TRANSITION = {
  duration: 0.7,
  ease: "easeOut" as const, // Truco 1: 'as const' ayuda a TypeScript con el tipado 'ease'
};

// --- Componente Principal de la Sección ---
export default function Proceso() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* 4. Fondo con degradado suave */}
      <motion.div
        className={BACKGROUND_GRADIENT_CLASSES}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        transition={{ duration: 1 }}
      />

      {/* 5. Título de Sección con Truco de Movimiento */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <SectionTitle id="proceso-title" kicker="Cómo trabajamos">
          Un proceso claro y humano
        </SectionTitle>
      </motion.div>

      {/* 6. Timeline principal (Aplicación sin errores de la variante FADE_IN_UP_PROPS) */}
      <motion.div
        className="mt-16 relative z-10"
        {...FADE_IN_UP_PROPS}
        transition={{ ...BASE_TRANSITION, delay: 0.2 }} // Aplicamos transición y delay por separado
        viewport={{ once: true, amount: 0.2 }}
      >
        <Timeline steps={TIMELINE_STEPS} />
      </motion.div>

      {/* 7. Cierre y Call to Action (CTA) mejorado */}
      <motion.div
        className="mt-20 text-center relative z-10"
        {...FADE_IN_UP_PROPS}
        transition={{ ...BASE_TRANSITION, delay: 0.4 }} // Aplicamos transición y delay por separado
        viewport={{ once: true, amount: 0.2 }}
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

        {/* Truco 2: Efecto Hover Sencillo (UI) */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href="/contacto"
            className="btn btn-ultimate-glow shadow-[0_0_25px_rgba(0,255,180,0.3)] hover:shadow-[0_0_45px_rgba(0,255,180,0.6)] text-lg md:text-xl px-10 py-3"
            aria-label="Agendar una conversación inicial para tu proyecto"
          >
            Agendar una conversación de inicio
          </Link>
        </motion.div>

        {/* Nota de pie más sutil y específica */}
        <p className="text-sm text-foreground/60 mt-6 tracking-wide italic">
          *Conversación inicial gratuita y sin compromiso.
        </p>
      </motion.div>
    </section>
  );
}
