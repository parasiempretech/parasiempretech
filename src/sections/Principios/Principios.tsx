// src/sections/Principios/Principios.tsx

"use client";

import SectionTitle from "@/components/common/SectionTitle";
// import AnimateOnScroll from "@/components/effects/AnimateOnScroll"; // Eliminado
import InteractiveCard from "@/components/effects/InteractiveCard";
import { motion } from "framer-motion";

// --- Animación Base (Élite) ---
const appear = {
  initial: { opacity: 0, y: 30, rotateX: 10 }, // Leve rotación 3D al iniciar
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true as const, amount: 0.3 },
};

// --- Datos de los principios (personalizados para vos) ---
type Principle = {
  number: string;
  title: string;
  desc: string;
  color: string; // Degradado de fondo
  numberColor: string; // Color del texto del número
  hoverShadow: string; // Sombra temática para el hover
};

const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "Innovación Constante",
    desc: "No nos conformamos. Desafiamos lo establecido y aplicamos ideas y tecnología de vanguardia para crear soluciones únicas.",
    color: "from-emerald-500/30 via-transparent to-transparent",
    numberColor: "text-emerald-400",
    hoverShadow: "shadow-emerald-500/40",
  },
  {
    number: "02",
    title: "Compromiso Radical",
    desc: "El éxito de nuestros clientes es nuestro éxito. Nos involucramos en cada desafío como si fuera propio, hasta lograr resultados reales.",
    color: "from-sky-500/30 via-transparent to-transparent",
    numberColor: "text-sky-400",
    hoverShadow: "shadow-sky-500/40",
  },
  {
    number: "03",
    title: "Integridad Absoluta",
    desc: "La confianza se construye con transparencia. Actuamos con honestidad y coherencia en cada paso del proceso.",
    color: "from-purple-500/30 via-transparent to-transparent",
    numberColor: "text-purple-400",
    hoverShadow: "shadow-purple-500/40",
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

      {/* Título y descripción (Integrando animación directamente) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionTitle id="principios-title" kicker="Nuestra cultura">
            Lo que somos, más allá de lo que hacemos
          </SectionTitle>
        </motion.div>

        <motion.p
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Descubrí los pilares que nos diferencian y nos convierten en el socio
          ideal para tu crecimiento digital.
        </motion.p>
      </motion.div>

      {/* GRID DE PRINCIPIOS */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
        {PRINCIPLES.map((item, index) => (
          <motion.div
            key={item.number}
            {...appear}
            transition={{ ...appear.transition, delay: index * 0.15 }}
          >
            {/* Truco: InteractiveCard para un sutil efecto Parallax en hover */}
            <InteractiveCard>
              <div
                // Color de sombra al hover, basado en la data (Élite)
                className={`group relative rounded-2xl border border-white/10 bg-white/5 p-8 text-center md:text-left overflow-hidden
                           shadow-lg transition-all duration-300 transform
                           hover:shadow-2xl hover:scale-[1.02] hover:${item.hoverShadow}`}
              >
                {/* 1. NÚMERO DESTACADO, GIGANTE Y SEMI-TRANSPARENTE (Énfasis Visual) */}
                <span
                  aria-hidden="true"
                  className={`absolute -top-12 -right-4 md:-right-10 text-[160px] md:text-[200px] font-extrabold opacity-10
                             transition-all duration-500 group-hover:opacity-15 ${item.numberColor}`}
                >
                  {item.number}
                </span>

                {/* Fondo con gradiente */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40`}
                />

                {/* 2. Número de Liderazgo (Frontal) */}
                <div
                  className={`relative text-5xl font-extrabold mb-4 transition-colors duration-300 ${item.numberColor}`}
                >
                  {item.number}
                </div>

                {/* 3. Título */}
                <h3 className="relative text-2xl font-extrabold text-white mb-3">
                  {item.title}
                </h3>

                {/* 4. Descripción */}
                <p className="relative text-gray-300 text-base leading-relaxed">
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
