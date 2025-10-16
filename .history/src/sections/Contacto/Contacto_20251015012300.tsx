// src/sections/Contacto/Contacto.tsx

"use client";

import SectionTitle from "@/components/common/SectionTitle";
// import AnimateOnScroll from "@/components/effects/AnimateOnScroll"; // Eliminado
import Link from "next/link";
import { motion } from "framer-motion"; // Aseguramos que motion esté importado

// --- Configuración de Animación Reutilizable (Élite) ---
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true as const, amount: 0.3 },
};

export default function Contacto() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Fondo: Glow de fondo más vibrante */}
      <motion.div
        className="absolute inset-0 opacity-[0.1] bg-gradient-to-br from-[#39ff14] via-[#00bfff] to-[#ff00cc] blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      />

      <SectionTitle id="contacto-title" kicker="Hablemos de estrategia">
        Iniciemos tu próximo proyecto
      </SectionTitle>

      {/* Contenedor del CTA: Aplicamos animación directa */}
      <motion.div
        className="relative z-10 mx-auto max-w-2xl text-center"
        {...fadeIn}
      >
        <p className="text-xl text-foreground/85 leading-relaxed mb-8">
          ¿Tenés una idea o buscás **escalar resultados**? En{" "}
          <span className="font-extrabold text-emerald-400">
            ParaSiempreTech
          </span>{" "}
          convertimos ideas en proyectos que funcionan, con **diseño, estrategia
          y ROI** claro. Dejanos un mensaje y te mostramos el camino más
          directo.
        </p>

        {/* CONTENEDOR DE BOTONES */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          {/* BOTÓN PRIMARIO: MÁS GRANDE Y ANIMADO */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }} // Truco: Hover effect más agresivo
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/contacto" // Destino: Formulario Interno
              className="btn btn-ultimate-glow px-10 py-4 text-lg font-bold shadow-[0_0_25px_rgba(57,255,20,0.5)] hover:shadow-[0_0_45px_rgba(57,255,20,0.8)]"
              aria-label="Contactar y enviar un mensaje al equipo"
            >
              ✉️ Enviar Mensaje Ahora
            </Link>
          </motion.div>

          {/* BOTÓN SECUNDARIO: Ver Servicios */}
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link
              href="#servicios"
              className="btn btn-outline-sm px-10 py-4 text-lg font-semibold hover:border-sky-400/50 hover:text-sky-400/90"
              aria-label="Ver la lista completa de servicios ofrecidos"
            >
              Ver Servicios
            </Link>
          </motion.div>
        </div>

        <p className="text-sm text-foreground/60 mt-8">
          Respondo personalmente cada mensaje. Hablemos de tu desafío.
        </p>
      </motion.div>
    </section>
  );
}
