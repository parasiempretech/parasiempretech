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
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCSharp,
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
  SiAngular,
  SiVuedotjs,
  SiCplusplus,
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

// --- Stack completo (Mantenemos tu lista ampliada y ordenada) ---
const EXCELLENCE_STACK: TechStackItem[] = [
  // Frontend
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: TbBrandNextjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: TbBrandTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: TbBrandJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "HTML5", icon: FaHtml5, color: "#E44D26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },

  // Backend & Databases
  { name: "Node.js", icon: FaNodeJs, color: "#8CC84B" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "C#", icon: TbBrandCSharp, color: "#68217A" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },

  // DevOps & Cloud
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "GitLab", icon: FaGitlab, color: "#E24329" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },

  // Tooling & Testing
  { name: "Testing", icon: SiTestinglibrary, color: "#E34F26" },
];

// --- Animación: Aparición escalonada (Perfecto para la cuadrícula) ---
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.04, // Un poco más rápido
      type: "tween",
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

// --- Componente Principal ---
export default function TechCloud({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 overflow-hidden">
      {/* Título / copy */}
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-5xl font-extrabold mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Trabajamos con todo.
        </h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-8 text-lg leading-relaxed">
          Ofrecemos soluciones con las tecnologías más demandadas del mercado:
          desde la infraestructura hasta la experiencia del usuario final.
        </p>
      </div>

      {/* Grid de tecnologías */}
      <motion.div
        className="relative z-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-10 px-4 max-w-7xl" // Ajustamos a 8 columnas para mayor impacto
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {EXCELLENCE_STACK.map((tech) => {
          const Icon = tech.icon;
          const floatDuration = 4 + Math.random() * 2;
          const floatDelay = Math.random() * 0.6;

          return (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group flex flex-col items-center justify-center text-center p-2 cursor-pointer" // Añadido cursor-pointer para mejor UX
              whileHover={{ scale: 1.15, rotate: 2 }}
            >
              <motion.div
                // Movimiento flotante sutil y continuo
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: floatDuration,
                  delay: floatDelay,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              >
                <Icon
                  // A11Y FIX: Indicamos que el ícono es decorativo
                  aria-hidden="true"
                  className="text-6xl transition-all duration-300"
                  style={{
                    color: tech.color,
                    filter: `drop-shadow(0 0 8px ${tech.color}AA) drop-shadow(0 0 20px ${tech.color}44)`,
                  }}
                />
              </motion.div>
              {/* Tooltip implicito en el texto, visible para lectores de pantalla */}
              <span className="text-xs font-medium text-gray-400 mt-2 group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {children && <div className="relative z-10 mt-8">{children}</div>}

      {/* Halo de fondo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.06),_transparent_70%)] blur-2xl" />
    </section>
  );
}
