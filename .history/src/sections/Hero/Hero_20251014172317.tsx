// src/sections/Hero/Hero.tsx

"use client"; // ¡La solución al error de servidor!

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { HERO_METADATA, FEATURED_BENEFITS } from "./hero.data";
// 🚨 CORRECCIÓN: Usamos la ruta absoluta para evitar errores de módulo
import AnimatedBackground from "@/sections/Hero/AnimatedBackground";

// ----------------------------------------------------
// 1. ANIMACIONES (Entrada suave en secuencia)
// ----------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// ----------------------------------------------------
// 2. LOGO LOCKUP (Marca)
// ----------------------------------------------------
const LogoLockup = () => (
  <motion.div
    variants={itemVariants}
    style={{
      fontFamily: "var(--font-jetbrains-mono)",
      fontWeight: 800,
      fontSize: "1.5rem",
      color: "var(--gray-300)",
      marginBottom: "1rem",
    }}
  >
    <span style={{ color: "var(--verde)" }}>&lt;</span>{" "}
    <span style={{ color: "var(--celeste)" }}>para</span> siempre{" "}
    <span style={{ color: "var(--celeste)" }}>tech</span>{" "}
    <span style={{ color: "var(--verde)" }}>/&gt;</span>
  </motion.div>
);

// ----------------------------------------------------
// 3. COMPONENTE HERO PRINCIPAL
// ----------------------------------------------------
export function Hero() {
  const { TITLE, SUBTITLE, CTA_MAIN, CTA_SECONDARY } = HERO_METADATA;

  return (
    <motion.section
      aria-labelledby="hero-title"
      className="hero-section-container relative z-10 py-40 sm:py-56 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* El fondo animado */}
      <AnimatedBackground />

      <div className="hero-content max-w-6xl mx-auto text-center relative z-20">
        <LogoLockup />

        {/* Título Principal */}
        <motion.h1
          id="hero-title"
          className="text-7xl font-extrabold tracking-tight leading-none mb-6"
          variants={itemVariants}
        >
          {/* El título se renderiza con el color verde y celeste para destacar */}
          {TITLE.split(".").map((part, index) => (
            <span key={index} className="block">
              {part.includes("Crecer") ? (
                <span style={{ color: "var(--verde)" }}>{part}</span>
              ) : (
                <span style={{ color: "var(--celeste)" }}>{part}</span>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-xl mt-8 max-w-3xl mx-auto text-gray-400"
          variants={itemVariants}
        >
          {SUBTITLE}
        </motion.p>

        {/* Lista de promesas de valor simples */}
        <motion.ul
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-gray-300"
          variants={containerVariants}
        >
          {FEATURED_BENEFITS.map((benefit) => (
            <motion.li
              key={benefit.label}
              className="flex items-center text-sm font-medium"
              variants={itemVariants}
            >
              <span className="mr-2">{benefit.icon}</span> {benefit.label}
            </motion.li>
          ))}
        </motion.ul>

        {/* Botones de acción principal */}
        <motion.div
          className="hero-buttons flex justify-center gap-4 mt-12"
          variants={itemVariants}
        >
          <Link href={CTA_MAIN.href} className="btn btn-glow text-lg px-8 py-3">
            {CTA_MAIN.text}
          </Link>
          <Link href={CTA_SECONDARY.href} className="btn-secondary text-base">
            {CTA_SECONDARY.text}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
