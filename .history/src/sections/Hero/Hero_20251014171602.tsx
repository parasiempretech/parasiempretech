// src/sections/Hero/Hero.tsx (Corregido y Limpio)

import Link from "next/link";
// Las constantes HERO_CLAIMS y HERO_PILLS se pueden eliminar ya que no se usan
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import { motion } from "framer-motion";

// 🚨 SOLUCIÓN AL ERROR ts(2304): Definimos LogoLockup
const LogoLockup = () => (
  <div
    style={{
      fontFamily: "var(--font-jetbrains-mono)",
      fontWeight: 800,
      fontSize: "1.5rem",
    }}
  >
    <span style={{ color: "var(--verde)" }}>&lt;</span>{" "}
    <span style={{ color: "var(--celeste)" }}>para</span> siempre{" "}
    <span style={{ color: "var(--celeste)" }}>tech</span>{" "}
    <span style={{ color: "var(--verde)" }}>/&gt;</span>
  </div>
);

/**
 * Componente principal de la sección de bienvenida - Impecable y Minimalista.
 */
export function Hero() {
  return (
    <motion.section
      aria-labelledby="hero-title"
      className="hero-section-container relative z-10"
    >
      <div className="hero-content max-w-4xl mx-auto text-center py-32">
        <AnimateOnScroll>
          <LogoLockup />
        </AnimateOnScroll>

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

        {/* 🚨 SOLUCIÓN AL ERROR ts(2322): Eliminamos la prop 'delay' */}
        <AnimateOnScroll>
          <p className="text-xl mt-6 max-w-3xl mx-auto text-gray-400">
            Tu equipo de alto rendimiento, enfocado en **código limpio,
            seguridad y métricas *Core Web Vitals***, garantizando la inversión
            a largo plazo.
          </p>
        </AnimateOnScroll>

        {/* 🚨 SOLUCIÓN AL ERROR ts(2322): Eliminamos la prop 'delay' */}
        <AnimateOnScroll>
          <div className="hero-buttons mt-10">
            <Link href="/contacto" className="btn btn-glow text-lg px-8 py-3">
              Comencemos tu Proyecto
            </Link>
          </div>
        </AnimateOnScroll>

        {/* Píldoras de valor inferiores (HERO_PILLS) ELIMINADAS para minimalismo */}
      </div>

      {/* Opcional: Componente de Fondo Animado Sutil (ej: <AnimatedBackground />) */}
    </motion.section>
  );
}
