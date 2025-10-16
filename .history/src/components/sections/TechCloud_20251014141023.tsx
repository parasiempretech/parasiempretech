// src/components/sections/TechCloud.tsx

"use client";

import { motion } from "framer-motion";
import React from "react";
// Eliminamos el import de Image de Next.js, ya no lo necesitamos.

// --- Importación de Iconos (Los que tienen que ser usados) ---
import { FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandJavascript,
} from "react-icons/tb";
import {
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiVercel,
} from "react-icons/si";
import { VscBeaker, VscSourceControl } from "react-icons/vsc";

// --- Tipos de Datos y Contenido (Definición de las Constantes y su Estructura) ---
interface TechStackItem {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
}

const TECH_STACK_1: TechStackItem[] = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: TbBrandNextjs, color: "#FFFFFF" },
  { name: "Node.js", icon: FaNodeJs, color: "#8CC84B" },
  { name: "TypeScript", icon: TbBrandTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: TbBrandJavascript, color: "#F7DF1E" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
];

const TECH_STACK_2: TechStackItem[] = [
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" },
  { name: "Testing", icon: VscBeaker, color: "#A37CF0" },
  { name: "CI/CD", icon: VscSourceControl, color: "#F05032" },
  { name: "Cloud (Vercel)", icon: SiVercel, color: "#FFFFFF" },
];

// --- Lógica de Posicionamiento Aleatorio y Animación (Resto del Código) ---
const getRandomPosition = (max: number): string => {
  return `${Math.floor(Math.random() * max)}%`;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: 10 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

export default function TechCloud({
  children,
}: {
  children?: React.ReactNode;
}) {
  const allTech = [...TECH_STACK_1, ...TECH_STACK_2];

  return (
    <section className="relative flex flex-col items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {allTech.map((tech, _index) => (
          <motion.div
            key={tech.name}
            className="absolute p-3 rounded-full bg-white/5 border border-white/10 shadow-lg cursor-pointer backdrop-blur-sm"
            initial={{
              x: Math.random() > 0.5 ? -300 : 300,
              y: Math.random() > 0.5 ? -300 : 300,
              opacity: 0,
            }}
            animate={{
              y: [0, 20, 0, -20, 0],
              x: [0, 10, 0, -10, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
            whileHover={{ scale: 1.2, zIndex: 10, rotate: 360 }}
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
            }}
          >
            {/* SOLUCIÓN: Usamos el componente de React directamente */}
            <tech.icon className="text-3xl" style={{ color: tech.color }} />
          </motion.div>
        ))}
      </div>

      {/* Contenido central */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Trabajamos con todo.
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-4">
          Desarrollo web, mobile, IA, automatización, gestión de proyectos,
          bases de datos y DevOps.
        </p>
        <p className="font-semibold text-emerald-400">Sí, lo hacemos todo.</p>
      </div>
      {children && <div className="relative z-10 mt-8">{children}</div>}
    </section>
  );
}
