"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import { INDUSTRIES } from "./industrias.data"; // ✅ Datos centralizados

// -------------------------------------------------------------
// SECCIÓN: Industrias
// -------------------------------------------------------------
export default function Industrias() {
  return (
    <section
      id="industrias"
      aria-labelledby="rubros-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* --- Fondo visual dinámico con blur --- */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/10 via-[#39ff14]/10 to-[#ff00cc]/10 blur-3xl opacity-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />

      {/* --- Título principal --- */}
      <SectionTitle id="rubros-title" kicker="Para quiénes">
        Conocemos tu rubro
      </SectionTitle>

      {/* --- Grid de industrias --- */}
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
            whileHover={{
              scale: 1.03,
              rotateX: 3,
              rotateY: -3,
              transition: { type: "spring", stiffness: 150, damping: 12 },
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_25px_rgba(0,255,180,0.08)] hover:shadow-[0_0_50px_rgba(0,255,180,0.25)] transition-all duration-300"
          >
            {/* --- Glow de color dinámico --- */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />

            {/* --- Contenido principal --- */}
            <div className="relative p-8 flex flex-col h-full text-center items-center">
              {/* Ícono */}
              <div className="text-5xl mb-4 text-[#6EE7F9] drop-shadow-[0_0_6px_rgba(57,255,20,0.4)]">
                <industry.icon className="inline-block" />
              </div>

              {/* Título */}
              <h3 className="text-xl font-semibold text-white">
                {industry.title}
              </h3>

              {/* Descripción */}
              <p className="mt-2 text-gray-400 text-sm max-w-xs">
                {industry.desc}
              </p>

              {/* Lista de features */}
              <ul className="mt-5 flex-grow space-y-2 text-sm text-gray-300">
                {industry.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center justify-center gap-2 hover:text-[#39ff14] transition-colors"
                  >
                    • {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- CTA general --- */}
      <motion.div
        className="text-center mt-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
          Si tu rubro no está en la lista, igual podemos ayudarte.
          <Link
            href="/contacto"
            className="text-[#39ff14] font-semibold hover:underline hover:text-[#00bfff] transition-colors duration-200"
          >
            {" "}
            Contanos tu idea y la adaptamos a tu negocio.
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
