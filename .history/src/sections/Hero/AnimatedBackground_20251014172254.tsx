// src/sections/Hero/AnimatedBackground.tsx

"use client"; // Necesario para framer-motion

import { motion } from "framer-motion";

/**
 * Componente de Fondo Animado: Crea un gradiente radial sutil y animado.
 */
export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primer círculo de luz (Celeste) */}
      <motion.div
        className="absolute rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--celeste), transparent 70%)",
          width: "800px",
          height: "800px",
        }}
        initial={{ top: "10%", left: "10%", scale: 1 }}
        animate={{
          top: ["10%", "15%", "10%"],
          left: ["10%", "5%", "10%"],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Segundo círculo de luz (Verde) */}
      <motion.div
        className="absolute rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--verde), transparent 70%)",
          width: "600px",
          height: "600px",
        }}
        initial={{ bottom: "15%", right: "15%", scale: 1 }}
        animate={{
          bottom: ["15%", "10%", "15%"],
          right: ["15%", "20%", "15%"],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Capa de oscurecimiento para hacer que el texto resalte */}
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
}
