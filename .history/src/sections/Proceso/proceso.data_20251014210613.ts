// src/sections/Proceso/proceso.data.ts
// =======================================================
// Versión final "élite" con datos y lógica de diseño (ZigZag)
// =======================================================

import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";
import { type ComponentType } from "react";

// --- Tipo de Datos Base (Input) ---
type ProcessStepInput = {
  id: number;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
  result: string;
};

// --- Tipo de Datos Final (Output con la instrucción de diseño) ---
export type ProcessStep = ProcessStepInput & {
  isReversed: boolean; // <-- La propiedad que implementa el truco visual
};

// --- Contenido Centralizado Inicial ---
const BASE_STEPS: ProcessStepInput[] = [
  {
    id: 1,
    title: "Diagnóstico Estratégico",
    description:
      "Analizamos tu negocio, objetivos y procesos internos. Identificamos oportunidades tecnológicas y definimos un roadmap claro que combine visión y resultados medibles.",
    icon: FaLightbulb,
    color: "from-[#00bfff] to-[#39ff14]",
    result: "Decisiones fundamentadas y estrategia sólida.",
  },
  {
    id: 2,
    title: "Diseño y Experiencia",
    description:
      "Transformamos la estrategia en una experiencia visual y funcional. Creamos wireframes, flujos y prototipos aplicando criterios de UX/UI profesional y arquitectura moderna.",
    icon: FaPaintBrush,
    color: "from-[#39ff14] to-[#ff00cc]",
    result: "Dirección de diseño validada y arquitectura coherente.",
  },
  {
    id: 3,
    title: "Desarrollo y Optimización",
    description:
      "Construimos con ingeniería moderna: Next.js 14, TypeScript, Tailwind y CI/CD. Garantizamos código limpio, escalabilidad, seguridad y performance.",
    icon: FaCode,
    color: "from-[#ff00cc] to-[#00bfff]",
    result: "Producto sólido, rápido y seguro.",
  },
  {
    id: 4,
    title: "Lanzamiento y Evolución",
    description:
      "Desplegamos con control y realizamos validaciones completas. Monitoreamos métricas, entrenamos al cliente y acompañamos el crecimiento post-lanzamiento.",
    icon: FaRocket,
    color: "from-[#00bfff] to-[#8a2be2]",
    result: "Transición profesional y evolución continua.",
  },
  {
    id: 5,
    title: "Consideraciones y Sinergia",
    description:
      "El éxito surge del trabajo conjunto: vos aportás claridad y compromiso; nosotros aportamos método, transparencia y excelencia técnica.",
    icon: FaHandshake,
    color: "from-[#8a2be2] to-[#39ff14]",
    result: "Colaboración real y resultados sostenibles.",
  },
];

// --- Contenido Exportable con el Truco de Programación ---
// TRUCO: Mapeamos los pasos base para añadir la propiedad de diseño 'isReversed'
// usando el índice, manteniendo el array original inmutable y limpio.
export const PROCESS_STEPS: ProcessStep[] = BASE_STEPS.map((step, index) => ({
  ...step,
  // Lógica del ZigZag: es true (invertido) si el índice es impar (1, 3, 5...)
  isReversed: index % 2 !== 0,
}));
