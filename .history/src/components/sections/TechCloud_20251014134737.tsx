// src/components/sections/TechCloud.tsx

"use client";

import { motion } from "framer-motion";
// --- Importación de Iconos (Solo los usados para eliminar advertencias) ---
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
// Solo importamos los iconos que realmente se usan en la data (VscLock y VscGraph se removieron)
import { VscBeaker, VscSourceControl } from "react-icons/vsc";

// --- Tipos de Datos y Contenido ---
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

// --- Lógica de Posicionamiento Aleatorio ---
const getRandomPosition = (max: number): string => {
  return `${Math.floor(Math.random() * max)}%`;
};

// --- Variantes de Animación de Framer Motion ---
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

// --- Componente Principal ---
export default function TechCloud() {
  const allTech = [...TECH_STACK_1, ...TECH_STACK_2];

  return (
    <motion.div
      className="relative h-[650px] w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {allTech.map((tech, _index) => (
        <motion.div
          key={tech.name}
          variants={itemVariants}
          className="absolute p-3 rounded-full bg-white/5 border border-white/10 shadow-lg cursor-pointer backdrop-blur-sm"
          whileHover={{ scale: 1.2, zIndex: 10, rotate: 360 }}
          style={{
            top: getRandomPosition(80),
            left: getRandomPosition(90),
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
          }}
        >
          <tech.icon className="text-3xl" style={{ color: tech.color }} />
        </motion.div>
      ))}
      {/* Espacio para tu mensaje central, al estilo Openix */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-md">
          <h2 className="text-4xl font-extrabold text-white">
            Trabajamos con todo.
          </h2>
          <p className="mt-4 text-gray-300">
            Desarrollo móvil, inteligencia artificial, automatización, gestión
            de proyectos y DevOps.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
