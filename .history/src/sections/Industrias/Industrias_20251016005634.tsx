"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import { INDUSTRIES } from "./industrias.data";

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
      {/* --- Fondo visual suave --- */}
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
              scale: 1.04,
              transition: { type: "spring", stiffness: 160, damping: 12 },
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]/70 backdrop-blur-sm shadow-[0_0_25px_rgba(0,255,180,0.08)] hover:shadow-[0_0_40px_rgba(0,255,180,0.3)] transition-all duration-300"
          >
            {/* --- Glow dinámico más limpio --- */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none`}
            />

            {/* --- Contenido --- */}
            <div className="relative p-8 flex flex-col h-full text-center items-center">
              <div className="text-5xl mb-4 text-[#6EE7F9] drop-shadow-[0_0_8px_rgba(57,255,20,0.45)] transition-transform group-hover:scale-110">
                <industry.icon className="inline-block" />
              </div>

              <h3 className="text-xl font-semibold text-white group-hover:text-[#39ff14] transition-colors">
                {industry.title}
              </h3>

              <p className="mt-2 text-gray-400 text-sm max-w-xs">
                {industry.desc}
              </p>

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

      {/* --- CTA final con enlace a contacto --- */}
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
