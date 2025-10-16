// src/sections/Principios/Principios.tsx
// ===================================================
// Sección inspirada en Openix, adaptada a ParaSiempreTech
// ===================================================

"use client";

import SectionTitle from "@/components/common/SectionTitle";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import InteractiveCard from "@/components/effects/InteractiveCard";
import { motion } from "framer-motion";

// --- Datos de los principios (personalizados para vos) ---
const PRINCIPLES = [
  {
    number: "01",
    title: "Innovación Constante",
    desc: "No nos conformamos. Desafiamos lo establecido y aplicamos ideas y tecnología de vanguardia para crear soluciones únicas.",
    color: "from-emerald-400/20 via-transparent to-transparent",
  },
  {
    number: "02",
    title: "Compromiso Radical",
    desc: "El éxito de nuestros clientes es nuestro éxito. Nos involucramos en cada desafío como si fuera propio, hasta lograr resultados reales.",
    color: "from-sky-400/20 via-transparent to-transparent",
  },
  {
    number: "03",
    title: "Integridad Absoluta",
    desc: "La confianza se construye con transparencia. Actuamos con honestidad y coherencia en cada paso del proceso.",
    color: "from-purple-400/20 via-transparent to-transparent",
  },
];

// --- Componente Principal ---
export default function Principios() {
  return (
    <section
      id="principios"
      aria-labelledby="principios-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Fondo dinámico sutil */}
      <motion.div
        className="absolute inset-0 opacity-[0.08] bg-gradient-to-br from-emerald-500 via-sky-500 to-fuchsia-600 blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        transition={{ duration: 1 }}
      />

      {/* Título y descripción */}
      <AnimateOnScroll>
        <SectionTitle id="principios-title" kicker="Nuestra cultura">
          Lo que somos, más allá de lo que hacemos
        </SectionTitle>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Descubrí los pilares que nos diferencian y nos convierten en el socio
          ideal para tu crecimiento digital.
        </p>
      </AnimateOnScroll>

      {/* GRID DE PRINCIPIOS */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {PRINCIPLES.map((item, index) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <InteractiveCard>
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 text-center md:text-left overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,180,0.15)] hover:scale-[1.02]">
                {/* Fondo con gradiente */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30`}
                />

                {/* Número destacado */}
                <div className="relative text-4xl font-extrabold text-amber-400 mb-4">
                  {item.number}
                </div>

                {/* Título */}
                <h3 className="relative text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                {/* Descripción */}
                <p className="relative text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </InteractiveCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
