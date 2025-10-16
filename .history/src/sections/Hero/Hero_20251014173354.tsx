// src/sections/Hero/Hero.tsx

"use client"; // Necesario para framer-motion y mouse events

import Link from "next/link";
import { motion, Variants } from "framer-motion";

// 🚨 CORRECCIÓN: Solo importamos HERO_METADATA y SERVICE_CLIPS, eliminando FEATURED_BENEFITS.
import { HERO_METADATA, SERVICE_CLIPS } from "./hero.data";
import AnimatedBackground from "@/sections/Hero/AnimatedBackground";
import Marquee from "@/components/sections/CarouselSection/Marquee";

// ----------------------------------------------------
// 1. ANIMACIONES (Entrada suave en secuencia)
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
// 2. LOGO LOCKUP (Marca)
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
// 3. COMPONENTE HERO PRINCIPAL
// ----------------------------------------------------
export function Hero() {
  const { TITLE, SUBTITLE, CTA_MAIN, CTA_SECONDARY } = HERO_METADATA;

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

      {/* Carrusel de Servicios Flotante */}
      <div className="absolute top-10 w-full z-20 opacity-70">
        <Marquee
          data={SERVICE_CLIPS}
          speed={50}
          className="text-sm font-medium text-gray-400"
        />
      </div>

      <div className="hero-content max-w-5xl mx-auto text-center relative z-30">
        <LogoLockup />

        {/* Título Principal */}
        <motion.h1
          id="hero-title"
          className="text-7xl font-extrabold tracking-tighter leading-none mb-6 text-white"
          variants={itemVariants}
        >
          {/* El título se renderiza con el color verde y celeste para destacar */}
          {TITLE.split("sistemas y webs").map((part, index) => (
            <span key={index} className="block">
              {part}
              {index === 0 && (
                <span className="inline-block">
                  <span style={{ color: "var(--celeste)" }}> sistemas </span> y
                  <span style={{ color: "var(--verde)" }}> webs </span>
                </span>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-xl mt-8 max-w-3xl mx-auto text-gray-300/80"
          variants={itemVariants}
        >
          {SUBTITLE}
        </motion.p>

        {/* 🚨 BLOQUE ELIMINADO: La lista de FEATURED_BENEFITS que causaba el error ya no está aquí. */}

        {/* Botones de acción principal */}
        <motion.div
          className="hero-buttons flex justify-center gap-4 mt-12"
          variants={itemVariants}
        >
          <Link
            href={CTA_MAIN.href}
            className="btn btn-ultimate-glow text-lg px-10 py-4"
          >
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
