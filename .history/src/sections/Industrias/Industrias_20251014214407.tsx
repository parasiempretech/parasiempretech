"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import {
  FaBalanceScale,
  FaTooth,
  FaDraftingCompass,
  FaUtensils,
  FaCut,
  FaIndustry,
} from "react-icons/fa";

// --- Tipo de Datos ---
type Industry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  features: string[];
  color: string;
};

// --- Contenido Centralizado ---
const INDUSTRIES: Industry[] = [
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

// --- Componente Principal ---
export default function Industrias() {
  return (
    <section
      id="industrias"
      aria-labelledby="rubros-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Fondo visual dinámico */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/10 via-[#39ff14]/10 to-[#ff00cc]/10 blur-3xl opacity-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />

      <SectionTitle id="rubros-title" kicker="Para quiénes">
        Conocemos tu rubro
      </SectionTitle>

      {/* Grid principal */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {INDUSTRIES.map((industry, i) => (
          <motion.div
            key={industry.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_25px_rgba(0,255,180,0.08)] hover:shadow-[0_0_45px_rgba(0,255,180,0.25)] transition-all duration-300"
          >
            {/* Glow dinámico */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />

            {/* Contenido */}
            <div className="relative p-8 flex flex-col h-full text-center items-center">
              <div className="text-4xl mb-3 text-[#6EE7F9]">
                <industry.icon className="inline-block" />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {industry.title}
              </h3>

              <p className="mt-2 text-gray-400 text-sm max-w-xs">
                {industry.desc}
              </p>

              <ul className="mt-4 flex-grow space-y-2 text-sm text-gray-300">
                {industry.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA general al final */}
      <motion.div
        className="text-center mt-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-gray-300 text-base">
          Si tu rubro no está en la lista, igual podemos ayudarte.
          <span className="text-[#39ff14] font-medium">
            {" "}
            Contanos tu idea y la adaptamos a tu negocio.
          </span>
        </p>
      </motion.div>
    </section>
  );
}
