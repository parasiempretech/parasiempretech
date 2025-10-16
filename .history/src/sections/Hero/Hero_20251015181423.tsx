"use client";
import { motion, Variants } from "framer-motion";
import { HERO_METADATA, SERVICE_CLIPS } from "./hero.data";
import AnimatedBackground from "@/sections/Hero/AnimatedBackground";
import Marquee from "@/components/sections/CarouselSection/Marquee";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 0.4 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

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

export function Hero() {
  const { TITLE, SUBTITLE } = HERO_METADATA;

  const coloredTitle = TITLE.replace(
    "Tecnología",
    `<span style="color: var(--celeste)">Tecnología</span>`
  ).replace(
    "Sistemas y Webs",
    `<span style="color: var(--verde)">Sistemas y Webs</span>`
  );

  return (
    <>
      {/* HERO PRINCIPAL */}
      <motion.section
        aria-labelledby="hero-title"
        className="relative z-10 overflow-hidden min-h-[100vh] flex items-center justify-center px-4 py-24 md:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Fondo */}
        <AnimatedBackground />

        {/* Contenido */}
        <div className="relative z-30 max-w-5xl mx-auto text-center">
          <LogoLockup />

          <motion.h1
            id="hero-title"
            className="text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold tracking-tight leading-tight mb-6 mt-4 text-white"
            variants={itemVariants}
            dangerouslySetInnerHTML={{ __html: coloredTitle }}
          />

          <motion.p
            className="text-[clamp(1rem,2vw,1.25rem)] mt-6 max-w-3xl mx-auto text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            {SUBTITLE}
          </motion.p>
        </div>
      </motion.section>

      {/* CARRUSEL SEPARADO — YA NO DENTRO DEL HERO */}
      <section className="relative w-full z-0 bg-black/60 backdrop-blur-sm py-4 md:py-6">
        <Marquee
          data={SERVICE_CLIPS}
          speed={60}
          className="text-sm font-medium text-gray-400"
        />
      </section>
    </>
  );
}
