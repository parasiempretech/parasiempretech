// src/components/sections/TechCloud.tsx

"use client";

import { motion, Variants } from "framer-motion";
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
  SiAngular,
  SiVuedotjs,
  SiCplusplus,
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

// --- Stack completo ---
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

// --- Variantes Framer Motion ---
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
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
    <section className="relative flex flex-col items-center justify-center py-32 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0C0C0C] to-[#0A0A0A]">
      {/* Halos ambientales suaves */}
      <div className="absolute -top-48 left-20 w-[400px] h-[400px] bg-[#61DAFB22] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-40 w-[300px] h-[300px] bg-[#10B98122] rounded-full blur-[120px]" />

      {/* Título / copy */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-5xl font-extrabold mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] tracking-tight">
          Trabajamos con todo.
        </h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-8 text-lg leading-relaxed">
          Ofrecemos soluciones con las tecnologías más demandadas del mercado:
          desde la infraestructura hasta la experiencia del usuario final.
        </p>
      </div>

      {/* Grid de tecnologías */}
      <motion.div
        className="relative z-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-8 gap-y-12 px-6 max-w-7xl"
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
              className="flex flex-col items-center justify-center text-center group cursor-pointer"
              whileHover={{ scale: 1.15, rotate: 2 }}
            >
              <motion.div
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
                  aria-hidden="true"
                  className="text-[2.8rem] md:text-[3.5rem] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  style={{
                    color: tech.color,
                    filter: `drop-shadow(0 0 8px ${tech.color}AA) drop-shadow(0 0 20px ${tech.color}44)`,
                  }}
                />
              </motion.div>
              <span className="text-[11px] font-medium text-gray-400 mt-2 group-hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {children && <div className="relative z-10 mt-10">{children}</div>}

      {/* Halo de fondo principal */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.06),_transparent_70%)] blur-2xl" />
    </section>
  );
}
