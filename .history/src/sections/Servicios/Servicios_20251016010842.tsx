// src/sections/Servicios/Servicios.tsx
"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import InteractiveCard from "@/components/effects/InteractiveCard";
import { SERVICES } from "./servicios.data";
import ServiceCard from "./ServiceCard";

// --- Animaciones globales (estilo elite) ---
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.3 },
};

const BENEFIT_LIST = [
  {
    title: "🔗 Integración sin fricciones",
    text: "Nuestros desarrollos se adaptan a tus herramientas y flujos actuales, asegurando una implementación rápida y ordenada.",
    color: "from-sky-500/20 via-transparent to-transparent",
    iconColor: "text-sky-400",
  },
  {
    title: "📈 Crecimiento sostenible",
    text: "Creamos soluciones que escalan con tu negocio y evolucionan junto a tus objetivos, sin dependencias externas.",
    color: "from-amber-400/20 via-transparent to-transparent",
    iconColor: "text-amber-400",
  },
  {
    title: "🧩 Desarrollo 100% a medida",
    text: "Cada línea de código se escribe pensando en tu modelo de negocio, logrando una ventaja competitiva real.",
    color: "from-purple-500/20 via-transparent to-transparent",
    iconColor: "text-purple-400",
  },
  {
    title: "🔒 Propiedad total del sistema",
    text: "Vos sos dueño de tu código, tus datos y tu evolución. Sin licencias ocultas ni dependencias innecesarias.",
    color: "from-emerald-500/20 via-transparent to-transparent",
    iconColor: "text-emerald-400",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Fondo visual ambiental */}
      <motion.div
        className="absolute inset-0 opacity-[0.09] bg-gradient-to-br from-emerald-500 via-sky-500 to-fuchsia-600 blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.09 }}
        transition={{ duration: 1.2 }}
      />

      {/* --- Cabecera de sección --- */}
      <SectionTitle id="servicios-title" kicker="Qué hacemos">
        Soluciones que <span className="text-sky-400">impulsan resultados</span>
      </SectionTitle>

      {/* --- Grid de Servicios --- */}
      <div
        aria-label="Listado de servicios principales"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-14 relative z-10"
      >
        {SERVICES.map((service, i) => (
          <motion.article
            key={service.id}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.1 }}
          >
            <InteractiveCard>
              <ServiceCard service={service} />
            </InteractiveCard>
          </motion.article>
        ))}
      </div>

      {/* --- Bloque de beneficios estratégicos --- */}
      <section
        aria-labelledby="beneficios-title"
        className="mt-32 relative z-10 rounded-2xl border border-sky-400/20 bg-gray-900/50 backdrop-blur-sm p-10 md:p-14 shadow-[0_0_35px_rgba(0,191,255,0.1)]"
      >
        <motion.div {...fadeUp}>
          <SectionTitle id="beneficios-title" kicker="Por qué elegirnos">
            Una inversión <span className="text-sky-400">inteligente</span>
          </SectionTitle>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14 text-lg">
            No vendemos software: diseñamos **activos digitales** que aumentan
            tu rentabilidad, mejoran la eficiencia y refuerzan tu marca.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BENEFIT_LIST.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.15 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-md hover:shadow-lg hover:shadow-sky-400/10 transition-all duration-300"
            >
              {/* Fondo degradado sutil */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-20`}
              />

              <h3
                className={`relative text-lg font-semibold ${benefit.iconColor} mb-2`}
              >
                {benefit.title}
              </h3>
              <p className="relative text-gray-300 text-base leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-gray-400 mb-4">
            ¿Listo para convertir tu idea en resultados reales?
          </p>
          <a
            href="/contacto"
            className="inline-block px-8 py-3 rounded-full border border-sky-400/50 text-sky-400 hover:text-white hover:bg-sky-500/20 transition-all duration-300"
          >
            Contanos tu proyecto
          </a>
        </motion.div>
      </section>
    </section>
  );
}
