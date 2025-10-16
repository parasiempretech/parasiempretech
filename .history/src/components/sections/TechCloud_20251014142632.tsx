// src/components/sections/TechCloud.tsx

"use client";

import { motion } from "framer-motion";
import React from "react";
// Importamos solo los logos más usados para la cuadrícula
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandJavascript,
} from "react-icons/tb";
import {
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiTailwindcss,
  SiTestinglibrary,
} from "react-icons/si";

// --- Tipo base ---
interface TechStackItem {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
}

// --- El Stack de Excelencia (Foco en lo más usado) ---
const EXCELLENCE_STACK: TechStackItem[] = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: TbBrandNextjs, color: "#FFFFFF" },
  { name: "Node.js", icon: FaNodeJs, color: "#8CC84B" },
  { name: "TypeScript", icon: TbBrandTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: TbBrandJavascript, color: "#F7DF1E" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Testing", icon: SiTestinglibrary, color: "#FF0000" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "GitLab", icon: FaGitlab, color: "#E24329" },
];

// --- Animación Simple (Solo aparecer) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function TechCloud({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 overflow-hidden">
      {/* Contenido central */}
      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-white">
          Trabajamos con todo.
        </h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-8">
          Ofrecemos soluciones con las tecnologías más demandadas por el
          mercado, desde la infraestructura hasta el cliente final.
        </p>
      </div>

      {/* CUADRÍCULA DE TECNOLOGÍAS - El nuevo diseño simple y robusto */}
      <motion.div
        className="relative z-10 grid max-w-4xl grid-cols-4 gap-8 md:grid-cols-7 lg:grid-cols-7"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {EXCELLENCE_STACK.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="flex flex-col items-center justify-center text-center p-2"
            whileHover={{ scale: 1.15, rotate: 3 }}
          >
            {/* Ícono Grande con GLOW (text-6xl) */}
            <tech.icon
              className="text-6xl transition-all duration-300 mb-1"
              style={{
                color: tech.color,
                filter: `drop-shadow(0 0 8px ${tech.color}DD) drop-shadow(0 0 3px ${tech.color}99)`,
              }}
            />
            {/* Nombre de la tecnología */}
            <span className="text-xs font-medium text-gray-400 mt-1">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {children && <div className="relative z-10 mt-8">{children}</div>}
    </section>
  );
}
