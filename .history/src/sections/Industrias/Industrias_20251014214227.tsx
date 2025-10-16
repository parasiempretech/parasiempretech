"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
  cta: { href: string; text: string };
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
    cta: { href: "/contacto", text: "Asesorar mi estudio" },
  },
  {
    icon: FaTooth,
    title: "Odontólogos",
    desc: "Agendá pacientes, mostrales tus servicios y fidelizá online.",
    features: [
      "Turnos con recordatorios",
      "Landing por especialidad",
      "Panel de pacientes simple",
    ],
    color: "from-[#39ff14] to-[#ff00cc]",
    cta: { href: "/contacto", text: "Optimizar mi consultorio" },
  },
  {
    icon: FaDraftingCompass,
    title: "Arquitectos",
    desc: "Mostrá tu estilo con un portfolio interactivo y atractivo.",
    features: [
      "Galerías optimizadas",
      "Pedidos de presupuesto",
      "Render viewer dinámico",
    ],
    color: "from-[#ff00cc] to-[#00bfff]",
    cta: { href: "/contacto", text: "Mostrar mis proyectos" },
  },
  {
    icon: FaUtensils,
    title: "Gastronomía",
    desc: "Soluciones para restaurantes, cafés y bares modernos.",
    features: [
      "Carta QR autogestionable",
      "Reservas online y eventos",
      "Pedidos internos y feedback",
    ],
    color: "from-[#00bfff] to-[#8a2be2]",
    cta: { href: "/contacto", text: "Digitalizar mi local" },
  },
  {
    icon: FaCut,
    title: "Barberías",
    desc: "Reservas, catálogo y comunidad en un solo lugar.",
    features: [
      "Turnos por barbero",
      "Catálogo de estilos",
      "Recordatorios automáticos",
    ],
    color: "from-[#8a2be2] to-[#39ff14]",
    cta: { href: "/contacto", text: "Potenciar mi barbería" },
  },
  {
    icon: FaIndustry,
    title: "Industria",
    desc: "Gestión, control y análisis en tiempo real.",
    features: [
      "Backoffice de stock",
      "Reportes en vivo",
      "Trazabilidad de procesos",
    ],
    color: "from-[#39ff14] to-[#00bfff]",
    cta: { href: "/contacto", text: "Optimizar mi empresa" },
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

              <div className="mt-6">
                <Link
                  href={industry.cta.href}
                  className="btn btn-ultimate-glow text-sm font-medium shadow-[0_0_15px_rgba(0,255,180,0.3)] hover:shadow-[0_0_25px_rgba(0,255,180,0.6)]"
                >
                  {industry.cta.text}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
