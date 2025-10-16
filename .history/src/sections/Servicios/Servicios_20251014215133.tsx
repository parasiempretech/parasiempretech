"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import InteractiveCard from "@/components/effects/InteractiveCard";
import { SERVICES } from "./servicios.data";
import ServiceCard from "./ServiceCard";

// --- Componente principal ---
export default function Servicios() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="relative container mx-auto max-w-8xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Fondo dinámico con gradiente suave */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/10 via-[#39ff14]/10 to-[#ff00cc]/10 blur-3xl opacity-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1.2 }}
      />

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <SectionTitle id="servicios-title" kicker="Qué ofrecemos">
          Soluciones digitales hechas a medida
        </SectionTitle>
      </motion.div>

      {/* Grid de servicios */}
      <motion.div
        className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {SERVICES.map((service, i) => (
          <AnimateOnScroll key={service.id} className={`delay-[${i * 100}ms]`}>
            <InteractiveCard>
              <ServiceCard service={service} />
            </InteractiveCard>
          </AnimateOnScroll>
        ))}
      </motion.div>

      {/* Microcopy final */}
      <motion.div
        className="text-center mt-20 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
          Diseñamos y desarrollamos herramientas digitales que te ayudan a{" "}
          <span className="text-[#39ff14] font-medium">
            trabajar mejor, vender más y simplificar tu día a día.
          </span>{" "}
          No usamos plantillas. Cada proyecto se crea desde cero, para reflejar
          la esencia y las metas reales de tu negocio.
        </p>
      </motion.div>
    </section>
  );
}
