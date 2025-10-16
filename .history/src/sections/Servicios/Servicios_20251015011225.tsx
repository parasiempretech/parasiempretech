// src/sections/Servicios/Servicios.tsx

"use client";

import SectionTitle from "@/components/common/SectionTitle";
// import AnimateOnScroll from "@/components/effects/AnimateOnScroll"; // ELIMINADO: Usamos motion.div directo
import InteractiveCard from "@/components/effects/InteractiveCard";
import { SERVICES } from "./servicios.data";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

// --- Configuración de Animación Reutilizable (Élite) ---
const cardStagger = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true as const, amount: 0.3 },
};

const BENEFIT_LIST = [
  {
    title: "🔗 Integración con sistemas actuales",
    text: "Conecta perfectamente con tus herramientas y procesos existentes sin interrupciones.",
    color: "from-sky-500/20 via-transparent to-transparent",
    iconColor: "text-sky-400",
  },
  {
    title: "📈 Escalabilidad y flexibilidad",
    text: "Crece con tu negocio y se adapta a tus nuevas necesidades de manera fluida.",
    color: "from-amber-400/20 via-transparent to-transparent",
    iconColor: "text-amber-400",
  },
  {
    title: "🧩 Adaptación total al negocio",
    text: "Diseñado según tus procesos y cultura organizacional, maximizando la eficiencia.",
    color: "from-purple-500/20 via-transparent to-transparent",
    iconColor: "text-purple-400",
  },
  {
    title: "🔒 Propiedad y control",
    text: "Tenés control total sobre tu sistema, sus datos y su evolución a largo plazo.",
    color: "from-emerald-500/20 via-transparent to-transparent",
    iconColor: "text-emerald-400",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="relative container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Fondo sutil degradado animado */}
      <motion.div
        className="absolute inset-0 opacity-[0.08] bg-gradient-to-br from-emerald-500 via-sky-500 to-fuchsia-600 blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        transition={{ duration: 1 }}
      />

      {/* SECCIÓN PRINCIPAL: SERVICIOS */}
      <SectionTitle id="servicios-title" kicker="Qué ofrecemos">
        Servicios Profesionales
      </SectionTitle>

      {/* GRID DE SERVICIOS (Uso directo de motion.div para animaciones) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12 relative z-10">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.id}
            {...cardStagger}
            transition={{ ...cardStagger.transition, delay: i * 0.1 }}
          >
            <InteractiveCard>
              <ServiceCard service={service} />
            </InteractiveCard>
          </motion.div>
        ))}
      </div>

      {/* SUBSECCIÓN: BENEFICIOS CLAVE */}
      {/* TRUCO VISUAL: BLOQUE DESTACADO */}
      <div className="mt-28 relative z-10 rounded-2xl border border-sky-400/20 bg-gray-900/40 backdrop-blur-sm p-8 md:p-12 shadow-[0_0_35px_rgba(0,191,255,0.1)]">
        {/* Encabezado de Beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle id="beneficios-title" kicker="Por qué elegirnos">
            Una Inversión <span className="text-sky-400">Estratégica</span>
          </SectionTitle>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            Descubrí las ventajas que hacen del desarrollo a medida una solución
            diseñada para maximizar tu **retorno de inversión**.
          </p>
        </motion.div>

        {/* GRID DE BENEFICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BENEFIT_LIST.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              {...cardStagger}
              transition={{ ...cardStagger.transition, delay: index * 0.15 }}
              className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-md transition-all duration-300 transform hover:scale-[1.02] hover:bg-white/[0.08]`}
            >
              {/* Degradado de fondo más sutil */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-30`}
              />

              <h3
                className={`relative text-lg font-bold ${benefit.iconColor} mb-2`}
              >
                {/* TRUCO: Color de ícono fuerte en el título */}
                {benefit.title}
              </h3>
              <p className="relative text-gray-300 text-base leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
