// src/sections/Tecnologias/Tecnologias.tsx

"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import DraggableCarousel from "@/components/sections/CarouselSection/DraggableCarousel";

// --- Importación de Iconos desde react-icons ---
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
// Eliminamos VscCloud, que era la importación no utilizada:
import {
  VscBeaker,
  VscSourceControl,
  VscLock,
  VscGraph,
} from "react-icons/vsc";

// --- Estructura de Datos Mejorada con Iconos ---
const TECH_STACK_1 = [
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
];

const TECH_STACK_2 = [
  { name: "Testing", icon: VscBeaker, color: "#A37CF0" },
  { name: "CI/CD", icon: VscSourceControl, color: "#F05032" },
  { name: "OAuth/JWT", icon: VscLock, color: "#EB5424" },
  { name: "REST/GraphQL", icon: VscGraph, color: "#E10098" },
  { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" },
  { name: "Cloud (Vercel)", icon: SiVercel, color: "#FFFFFF" },
  // ... puedes agregar más conceptos aquí
];

// --- Componente Principal de la Sección ---
export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tech-title"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionTitle id="tech-title" kicker="Stack Tecnológico">
        Tecnologías y Conceptos
      </SectionTitle>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <DraggableCarousel>
          {[...TECH_STACK_1, ...TECH_STACK_1].map((tech, i) => (
            <div
              key={`t1-${tech.name}-${i}`}
              className="flex flex-none items-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-jetbrains-mono font-bold"
            >
              <tech.icon
                className="mr-2 text-xl"
                style={{ color: tech.color }}
              />
              {tech.name}
            </div>
          ))}
        </DraggableCarousel>
      </motion.div>

      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <DraggableCarousel>
          {[...TECH_STACK_2, ...TECH_STACK_2].map((tech, i) => (
            <div
              key={`t2-${tech.name}-${i}`}
              className="flex flex-none items-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-jetbrains-mono font-bold"
            >
              <tech.icon
                className="mr-2 text-xl"
                style={{ color: tech.color }}
              />
              {tech.name}
            </div>
          ))}
        </DraggableCarousel>
      </motion.div>
    </section>
  );
}
