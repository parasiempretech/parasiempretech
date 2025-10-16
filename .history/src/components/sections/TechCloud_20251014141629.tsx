// src/components/sections/TechCloud.tsx

"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitlab, // Añadimos GitLab y otras para enriquecer la lista
  FaGithub, // Añadimos GitHub explícitamente como pediste
} from "react-icons/fa";
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

// --- Listas de tecnologías (AÑADIDAS las más conocidas y usadas) ---
const TECH_STACK: TechStackItem[] = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: TbBrandNextjs, color: "#FFFFFF" },
  { name: "Node.js", icon: FaNodeJs, color: "#8CC84B" },
  { name: "TypeScript", icon: TbBrandTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: TbBrandJavascript, color: "#F7DF1E" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" }, // Icono pedido por el usuario
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Testing", icon: VscBeaker, color: "#A37CF0" },
  { name: "CI/CD", icon: VscSourceControl, color: "#F05032" },
  { name: "Cloud (Vercel)", icon: SiVercel, color: "#FFFFFF" },
  { name: "GitLab", icon: FaGitlab, color: "#E24329" },
];

export default function TechCloud({
  children,
}: {
  children?: React.ReactNode;
}) {
  // Ajustamos el tamaño del contenedor orbital para que se vea más grande en pantalla
  const ORBIT_SIZE = 220;

  // Usamos una única lista para la rotación
  const ALL_TECH_ITEMS = [...TECH_STACK, ...TECH_STACK]; // Duplicar para un llenado visual denso

  return (
    <section className="relative flex flex-col items-center justify-center py-24 overflow-hidden">
      {/* Fondo animado con íconos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {ALL_TECH_ITEMS.map((tech, i) => {
          const Icon = tech.icon;

          // Distancia y ángulo basado en la posición en la lista
          const radius = ORBIT_SIZE + (i % 6) * 30; // 6 anillos orbitales
          const angle = (i / ALL_TECH_ITEMS.length) * 2 * Math.PI;

          return (
            <motion.div
              key={`${tech.name}-${i}`} // Aseguramos que la key sea única
              className="absolute flex items-center justify-center rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                // Animación de rotación base
                rotate: 360,
                opacity: 0.7,
              }}
              transition={{
                duration: 40 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                // Posición inicial en el círculo
                top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                left: `calc(50% + ${Math.cos(angle) * radius}px)`,

                // Mantiene el componente centrado en su órbita
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.4, // Hacemos que crezca más al pasar el mouse
                  rotate: 0, // Desactivamos la rotación orbital al hacer hover
                  filter: `drop-shadow(0 0 16px ${tech.color})`, // ¡Glow más grande!
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Icon
                  className="text-4xl opacity-70 transition-all duration-300"
                  style={{
                    color: tech.color,
                    // CORRECCIÓN FINAL: Drop shadow intenso para el efecto NEÓN/GLOW
                    filter: `drop-shadow(0 0 5px ${tech.color}) drop-shadow(0 0 2px ${tech.color}99)`,
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Texto central */}
      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-white">
          Trabajamos con todo.
        </h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-4">
          Ofrecemos soluciones con las tecnologías más demandadas por el
          mercado, desde la infraestructura hasta el cliente final.
        </p>
        <p className="font-semibold text-emerald-400 text-lg">
          Sí, lo hacemos todo.
        </p>
      </div>

      {children && <div className="relative z-10 mt-8">{children}</div>}
    </section>
  );
}
