// src/sections/Hero/Hero.tsx

"use client"; // Necesario para framer-motion y mouse events

import { motion, Variants } from "framer-motion";

// Asegúrate de que AnimatedBackground y Marquee existan en las rutas especificadas.
import { HERO_METADATA, SERVICE_CLIPS } from "./hero.data";
import AnimatedBackground from "@/sections/Hero/AnimatedBackground";
import Marquee from "@/components/sections/CarouselSection/Marquee";
import Link from "next/link"; // Se reintroduce por si lo necesitas más adelante

// ----------------------------------------------------
// ANIMACIONES (Se mantienen igual)
// ----------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// ----------------------------------------------------
// LOGO LOCKUP (Marca)
// ----------------------------------------------------
const LogoLockup = () => (
  <motion.div
    variants={itemVariants}
    className="text-gray-300 font-extrabold text-2xl mb-2"
    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
  >
    <span style={{ color: "var(--verde)" }}>&lt;</span>{" "}
    <span style={{ color: "var(--celeste)" }}>para</span> siempre{" "}
    <span style={{ color: "var(--celeste)" }}>tech</span>{" "}
    <span style={{ color: "var(--verde)" }}>/&gt;</span>
  </motion.div>
);

// ----------------------------------------------------
// 3. COMPONENTE HERO PRINCIPAL (CORREGIDO)
// ----------------------------------------------------
export function Hero() {
  const { TITLE, SUBTITLE } = HERO_METADATA;

  // Lógica para colorear el título
  const coloredTitle = TITLE.replace(
    "Tecnología",
    `<span style="color: var(--celeste)">Tecnología</span>`
  ).replace(
    "Sistemas y Webs",
    `<span style="color: var(--verde)">Sistemas y Webs</span>`
  );

  return (
    <motion.section
      aria-labelledby="hero-title"
      // 🚨 CORRECCIÓN DE CENTRADO: min-h-screen y Flexbox para centrar el contenido verticalmente
      className="hero-section-container relative z-10 overflow-hidden min-h-screen flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* FONDO INTERACTIVO */}
      <AnimatedBackground />

      <div className="hero-content max-w-5xl mx-auto text-center relative z-30 pt-16 pb-16">
        <LogoLockup />

        {/* Título Principal */}
        <motion.h1
          id="hero-title"
          className="text-7xl font-extrabold tracking-tighter leading-none mb-6 mt-4 text-white"
          variants={itemVariants}
          dangerouslySetInnerHTML={{ __html: coloredTitle }}
        />

        {/* Subtítulo */}
        <motion.p
          // 🚨 CORRECCIÓN DE CONTRASTE: Cambiado a text-white para máxima legibilidad
          className="text-xl mt-8 max-w-3xl mx-auto text-white"
          variants={itemVariants}
        >
          {SUBTITLE}
        </motion.p>
      </div>

      {/* Carrusel de Servicios al final de la sección */}
      <div className="absolute bottom-0 w-full z-20 opacity-90 py-3 bg-black/60 backdrop-blur-sm">
        <Marquee
          data={SERVICE_CLIPS}
          speed={60}
          className="text-sm font-medium text-gray-400"
        />
      </div>
    </motion.section>
  );
}
