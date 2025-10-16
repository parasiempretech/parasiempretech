// src/sections/Hero/Hero.tsx (Versión Impecable)

import Link from "next/link";
// IMPORTAMOS HERO_CLAIMS y HERO_PILLS AHORA ES OPCIONAL, YA NO SON NECESARIOS
// import { HERO_CLAIMS, HERO_PILLS } from "./hero.data";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
// Importamos motion para un fondo animado sutil, si aplica
import { motion } from "framer-motion";

// ... (LogoLockup se mantiene igual para la marca)

/**
 * Componente principal de la sección de bienvenida - Impecable y Minimalista.
 */
export function Hero() {
  return (
    // Usamos motion.section para posibles animaciones de fondo o contenedor
    <motion.section
      aria-labelledby="hero-title"
      className="hero-section-container relative z-10" // Aseguramos que el contenido esté sobre cualquier fondo
    >
      {/* ⚠️ Barra de servicios superior (HERO_CLAIMS) ELIMINADA para minimalismo */}

      <div className="hero-content max-w-4xl mx-auto text-center py-32">
        <AnimateOnScroll>
          <LogoLockup />
        </AnimateOnScroll>

        {/* Titular Impecable: Pregunta/Respuesta concisa */}
        <AnimateOnScroll className="animated-title mt-4">
          <h1
            id="hero-title"
            className="text-6xl font-extrabold tracking-tight leading-tight"
          >
            Software a Medida para{" "}
            <span style={{ color: "var(--celeste)" }}>Escalar</span>. Estrategia
            de <span style={{ color: "var(--verde)" }}>Datos</span> para Crecer.
          </h1>
        </AnimateOnScroll>

        {/* Subtítulo enfocado en el equipo y la calidad */}
        <AnimateOnScroll delay={0.2}>
          <p className="text-xl mt-6 max-w-3xl mx-auto text-gray-400">
            Tu equipo de alto rendimiento, enfocado en **código limpio,
            seguridad y métricas *Core Web Vitals***, garantizando la inversión
            a largo plazo.
          </p>
        </AnimateOnScroll>

        {/* ÚNICO CTA: Foco en la conversión */}
        <AnimateOnScroll delay={0.4}>
          <div className="hero-buttons mt-10">
            <Link href="/contacto" className="btn btn-glow text-lg px-8 py-3">
              Comencemos tu Proyecto
            </Link>
          </div>
        </AnimateOnScroll>

        {/* ⚠️ Píldoras de valor inferiores (HERO_PILLS) ELIMINADAS para minimalismo */}
      </div>

      {/* Opcional: Componente de Fondo Animado Sutil (ej: <AnimatedBackground />) */}
    </motion.section>
  );
}
