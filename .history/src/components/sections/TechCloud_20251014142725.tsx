// src/components/sections/TechCloud.tsx

"use client";

import { motion } from "framer-motion";
import React from "react";

// Íconos (todos existen en react-icons)
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaAws,
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
  SiPrisma,
  SiKubernetes,
  SiFirebase,
  SiFigma,
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

// --- Stack (ampliado, ordenado por categorías) ---
const EXCELLENCE_STACK: TechStackItem[] = [
  // Frontend
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: TbBrandNextjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: TbBrandTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: TbBrandJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },

  // Backend
  { name: "Node.js", icon: FaNodeJs, color: "#8CC84B" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },

  // Data/DB
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },

  // DevOps/Cloud
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },

  // Tooling
  { name: "Testing", icon: SiTestinglibrary, color: "#E34F26" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "GitLab", icon: FaGitlab, color: "#E24329" },
];

// --- Animación simple (aparecer) — sin tipos problemáticos ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1 },
};

export default function TechCloud({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 overflow-hidden">
      {/* Título / copy */}
      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-white">
          Trabajamos con todo.
        </h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-8">
          Ofrecemos soluciones con las tecnologías más demandadas por el
          mercado, desde la infraestructura hasta el cliente final.
        </p>
      </div>

      {/* Grid de tecnologías */}
      <motion.div
        className="relative z-10 grid max-w-6xl grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {EXCELLENCE_STACK.map((tech) => {
          const Icon = tech.icon;
          // duración y desfase levemente aleatorios para el “float”
          const floatDuration = 3.8 + Math.random() * 1.8;
          const floatDelay = Math.random() * 0.6;

          return (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group flex flex-col items-center justify-center text-center p-2"
              whileHover={{ scale: 1.12, rotate: 2 }}
            >
              <motion.div
                aria-label={tech.name}
                title={tech.name}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: floatDuration,
                  delay: floatDelay,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="rounded-2xl p-3"
                style={{
                  // halo sutil
                  boxShadow: `0 0 12px ${tech.color}44, 0 0 28px ${tech.color}22`,
                }}
              >
                <Icon
                  className="text-6xl transition-all duration-300"
                  style={{
                    color: tech.color,
                    filter: `drop-shadow(0 0 8px ${tech.color}AA) drop-shadow(0 0 18px ${tech.color}40)`,
                  }}
                />
              </motion.div>

              <span className="text-xs font-medium text-gray-400 mt-2 group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {children && <div className="relative z-10 mt-8">{children}</div>}

      {/* Glow de fondo (sutil, no tapa contenido) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.06),_transparent_70%)] blur-2xl" />
    </section>
  );
}
