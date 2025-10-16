"use client";

import { motion } from "framer-motion";
import React from "react";
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

// --- Tipo base ---
interface TechStackItem {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
}

// --- Listas de tecnologías ---
const TECH_STACK: TechStackItem[] = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: TbBrandNextjs, color: "#FFFFFF" },
  { name: "Node.js", icon: FaNodeJs, color: "#8CC84B" },
  { name: "TypeScript", icon: TbBrandTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: TbBrandJavascript, color: "#F7DF1E" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Testing", icon: VscBeaker, color: "#A37CF0" },
  { name: "CI/CD", icon: VscSourceControl, color: "#F05032" },
  { name: "Cloud (Vercel)", icon: SiVercel, color: "#FFFFFF" },
];

export default function TechCloud({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 overflow-hidden">
      {/* Fondo animado con íconos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {TECH_STACK.map((tech, i) => {
          const Icon = tech.icon;
          const radius = 180 + (i % 5) * 40; // distancia orbital
          const angle = (i / TECH_STACK.length) * 2 * Math.PI;

          return (
            <motion.div
              key={tech.name}
              className="absolute flex items-center justify-center rounded-full p-3 backdrop-blur-sm"
              style={{
                top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 40 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.3,
                  rotate: 15,
                  filter: `drop-shadow(0 0 12px ${tech.color})`,
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Icon
                  className="text-4xl opacity-70 hover:opacity-100 transition-all duration-300"
                  style={{
                    color: tech.color,
                    filter: `drop-shadow(0 0 8px ${tech.color}55)`,
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Texto central */}
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
