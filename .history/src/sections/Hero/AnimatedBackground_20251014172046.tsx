// src/sections/Hero/AnimatedBackground.tsx

"use client"; // Es necesario para usar motion y animaciones en el navegador

import { motion } from "framer-motion";

/**
 * Componente de Fondo Animado: Crea un gradiente radial sutil y animado.
 * Usa los colores principales de tu marca (verde y celeste) para un fondo dinámico.
 */
export default function AnimatedBackground() {
  return (
    // Contenedor que ocupa toda la sección Hero. Es 'pointer-events-none' para no interferir con clics.
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primer círculo de luz: Grande y Azul (Celeste) */}
      <motion.div
        className="absolute rounded-full opacity-30 blur-3xl"
        style={{
          // Utiliza la variable de color celeste
          background:
            "radial-gradient(circle, var(--celeste), transparent 70%)",
          width: "800px",
          height: "800px",
        }}
        // Posición inicial
        initial={{ top: "10%", left: "10%", scale: 1 }}
        // Animación de movimiento lento e infinito
        animate={{
          top: ["10%", "15%", "10%"],
          left: ["10%", "5%", "10%"],
          scale: [1, 1.1, 1], // Un sutil efecto de pulsación
        }}
        transition={{
          duration: 15, // Muy lento
          repeat: Infinity, // Nunca para
          ease: "easeInOut", // Suavidad
        }}
      />

      {/* Segundo círculo de luz: Más pequeño y Verde */}
      <motion.div
        className="absolute rounded-full opacity-30 blur-3xl"
        style={{
          // Utiliza la variable de color verde
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

      {/* Una capa de oscurecimiento: Asegura que el texto blanco siempre resalte */}
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
}
