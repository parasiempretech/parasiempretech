// src/sections/Servicios/Servicios.tsx
// ===================================================
// Sección principal con animaciones + bloque de beneficios
// ===================================================

"use client";

import SectionTitle from "@/components/common/SectionTitle";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import InteractiveCard from "@/components/effects/InteractiveCard";
import { SERVICES } from "./servicios.data";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12 relative z-10">
        {SERVICES.map((service, i) => (
          <AnimateOnScroll key={service.id} className={`delay-[${i * 100}ms]`}>
            <InteractiveCard>
              <ServiceCard service={service} />
            </InteractiveCard>
          </AnimateOnScroll>
        ))}
      </div>

      {/* SUBSECCIÓN: BENEFICIOS CLAVE */}
      <div className="mt-24 relative z-10">
        <AnimateOnScroll>
          <SectionTitle id="beneficios-title" kicker="Por qué elegirnos">
            Beneficios <span className="text-amber-400">clave</span>
          </SectionTitle>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Descubrí las ventajas que hacen del desarrollo a medida una
            inversión inteligente para tu negocio.
          </p>

          {/* GRID DE BENEFICIOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "🔗 Integración con sistemas actuales",
                text: "Conecta perfectamente con tus herramientas y procesos existentes sin interrupciones.",
                color: "from-sky-500/20 via-transparent to-transparent",
              },
              {
                title: "📈 Escalabilidad y flexibilidad",
                text: "Crece con tu negocio y se adapta a tus nuevas necesidades de manera fluida.",
                color: "from-amber-400/20 via-transparent to-transparent",
              },
              {
                title: "🧩 Adaptación total al negocio",
                text: "Diseñado según tus procesos y cultura organizacional, maximizando la eficiencia.",
                color: "from-purple-500/20 via-transparent to-transparent",
              },
              {
                title: "🔒 Propiedad y control",
                text: "Tenés control total sobre tu sistema, sus datos y su evolución a largo plazo.",
                color: "from-emerald-500/20 via-transparent to-transparent",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg hover:shadow-[0_0_25px_rgba(0,255,180,0.15)] transition-all duration-300`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-30`}
                />
                <h3 className="relative text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="relative text-gray-300 text-sm leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
