// src/sections/Hero/Hero.tsx

"use client"; // Necesario para framer-motion y mouse events

import { motion, Variants } from "framer-motion";
import { HERO_METADATA, SERVICE_CLIPS } from "./hero.data";
import AnimatedBackground from "@/sections/Hero/AnimatedBackground";
import Marquee from "@/components/sections/CarouselSection/Marquee";

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
// COMPONENTE HERO PRINCIPAL (LÓGICA CORREGIDA)
// ----------------------------------------------------
export function Hero() {
  const { TITLE, SUBTITLE } = HERO_METADATA;

  // Usamos replace para colorear y evitar el error del título roto
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
      className="hero-section-container relative z-10 pt-40 pb-20 sm:pt-56 sm:pb-32 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* FONDO INTERACTIVO */}
      <AnimatedBackground />

      <div className="hero-content max-w-5xl mx-auto text-center relative z-30">
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
          className="text-xl mt-8 max-w-3xl mx-auto text-gray-300/80"
          variants={itemVariants}
        >
          {SUBTITLE}
        </motion.p>

        {/* ❌ BLOQUE ELIMINADO: Se han quitado los botones CTA. ❌ */}
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
