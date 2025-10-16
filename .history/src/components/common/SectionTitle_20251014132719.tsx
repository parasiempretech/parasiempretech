// src/components/common/SectionTitle.tsx

"use client"; // Necesario para componentes con interactividad como las animaciones

import { ReactNode } from "react";
import { motion } from "framer-motion"; // Importamos motion

type SectionTitleProps = {
  id: string;
  kicker?: string;
  children: ReactNode;
};

export default function SectionTitle({
  id,
  kicker,
  children,
}: SectionTitleProps) {
  return (
    // Reemplazamos AnimateOnScroll por motion.header y le pasamos las props de animación
    <motion.header
      className="mb-8 text-center"
      initial={{ opacity: 0, y: 20 }} // Estado inicial: invisible y 20px abajo
      whileInView={{ opacity: 1, y: 0 }} // Estado final: visible y en su posición original
      transition={{ duration: 0.6 }} // Duración de la animación
      viewport={{ once: true }} // La animación solo ocurrirá una vez
    >
      {kicker && (
        <span className="mb-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-gray-300">
          {kicker}
        </span>
      )}
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        {children}
      </h2>
    </motion.header>
  );
}
