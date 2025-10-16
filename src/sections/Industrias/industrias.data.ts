// src/sections/Industrias/industrias.data.ts
// =======================================================
// Contenido centralizado de la sección Industrias
// Diseño elegante, con enfoque en claridad y experiencia
// =======================================================

import {
  FaBalanceScale,
  FaTooth,
  FaDraftingCompass,
  FaUtensils,
  FaCut,
  FaIndustry,
} from "react-icons/fa";

export type Industry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  features: string[];
  color: string;
};

export const INDUSTRIES: Industry[] = [
  {
    icon: FaBalanceScale,
    title: "Abogados",
    desc: "Presencia profesional y automatización de consultas legales.",
    features: [
      "Sitio por área de práctica",
      "Consultas online y turnos",
      "Blog con criterios y fallos",
    ],
    color: "from-[#00bfff] to-[#39ff14]",
  },
  {
    icon: FaTooth,
    title: "Odontólogos",
    desc: "Gestión inteligente de pacientes y presencia moderna.",
    features: [
      "Turnos con recordatorios",
      "Landing por especialidad",
      "Panel de pacientes simple",
    ],
    color: "from-[#39ff14] to-[#ff00cc]",
  },
  {
    icon: FaDraftingCompass,
    title: "Arquitectos",
    desc: "Mostrá tu estilo con portfolios visuales e interactivos.",
    features: [
      "Galerías optimizadas",
      "Pedidos de presupuesto",
      "Render viewer dinámico",
    ],
    color: "from-[#ff00cc] to-[#00bfff]",
  },
  {
    icon: FaUtensils,
    title: "Gastronomía",
    desc: "Soluciones digitales para bares, cafés y restaurantes.",
    features: [
      "Carta QR autogestionable",
      "Reservas online y eventos",
      "Gestión de pedidos internos",
    ],
    color: "from-[#00bfff] to-[#8a2be2]",
  },
  {
    icon: FaCut,
    title: "Barberías",
    desc: "Turnos, catálogo y comunidad en una sola plataforma.",
    features: [
      "Turnos por barbero",
      "Catálogo de estilos",
      "Recordatorios automáticos",
    ],
    color: "from-[#8a2be2] to-[#39ff14]",
  },
  {
    icon: FaIndustry,
    title: "Industria",
    desc: "Monitoreo, trazabilidad y control de procesos en tiempo real.",
    features: [
      "Backoffice de stock",
      "Reportes en vivo",
      "Trazabilidad de procesos",
    ],
    color: "from-[#39ff14] to-[#00bfff]",
  },
];
