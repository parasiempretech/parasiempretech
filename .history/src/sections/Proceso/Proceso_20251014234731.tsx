// src/sections/Proceso/Proceso.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";

// --- Tipos ---
type Step = {
  id: number;
  title: string;
  desc: string;
  items: string[];
  phase: string;
  phaseDesc: string;
  result: string;
  resultDesc: string;
  color: string;
};

// --- Contenido del proceso ---
const STEPS: Step[] = [
  {
    id: 1,
    title: "Planificación del Proyecto",
    desc: "Alineamos tus ideas con nuestras capacidades para lograr un inicio fluido, sin fricciones y con una visión clara desde el primer día.",
    items: [
      "Analizamos tus necesidades y definimos roles, objetivos y prioridades.",
      "Seleccionamos las herramientas adecuadas para tu caso (tecnología, diseño, estrategia).",
      "Creamos un cronograma realista y transparente con entregas semanales.",
      "Nos adaptamos a tu forma de trabajar, buscando eficiencia y claridad.",
      "Toda la planificación se documenta para asegurar transparencia total.",
    ],
    phase: "Fase Clave",
    phaseDesc: "Visión Alineada – Tu objetivo, nuestra estrategia.",
    result: "Resultado Esperado",
    resultDesc: "Dirección Clara – Un punto de partida sólido y compartido.",
    color: "emerald",
  },
  {
    id: 2,
    title: "Diseño y Desarrollo",
    desc: "Transformamos tus ideas en un producto real, visualmente atractivo y técnicamente impecable.",
    items: [
      "Creamos la experiencia visual (UI/UX) cuidando estética y funcionalidad.",
      "Desarrollamos cada sección con código limpio y adaptable.",
      "Realizamos pruebas constantes para asegurar velocidad y compatibilidad.",
      "Mantenemos comunicación continua para revisar avances.",
      "Cada entrega se valida antes de pasar a la siguiente etapa.",
    ],
    phase: "Fase Clave",
    phaseDesc: "Ejecución Precisa – Diseño, código y pruebas en sincronía.",
    result: "Resultado Esperado",
    resultDesc:
      "Producto Funcional – Rápido, estable y visualmente profesional.",
    color: "violet",
  },
  {
    id: 3,
    title: "Lanzamiento y Acompañamiento",
    desc: "Lanzamos el proyecto y seguimos a tu lado para garantizar resultados y mejoras continuas.",
    items: [
      "Publicamos el sitio o sistema en un entorno seguro y optimizado.",
      "Monitoreamos rendimiento y comportamiento del usuario.",
      "Capacitamos a tu equipo en el uso y mantenimiento de la plataforma.",
      "Recolectamos feedback y realizamos mejoras post-lanzamiento.",
      "Podés optar por soporte continuo o mantenimiento periódico.",
    ],
    phase: "Fase Clave",
    phaseDesc: "Crecimiento Guiado – Estás acompañado en todo momento.",
    result: "Resultado Esperado",
    resultDesc: "Impacto Real – Proyecto lanzado, medido y en evolución.",
    color: "rose",
  },
];

// --- Animaciones base ---
const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

// --- Componente principal ---
export default function Proceso() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Fondo degradado sutil */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 to-fuchsia-600 opacity-[0.07] blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.07 }}
        transition={{ duration: 1 }}
      />

      {/* Título */}
      <motion.div {...fadeIn}>
        <SectionTitle id="proceso-title" kicker="Cómo trabajamos">
          Un proceso claro y humano
        </SectionTitle>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4">
          Nuestro método combina estrategia, diseño y desarrollo con un
          acompañamiento cercano. Cada etapa está pensada para avanzar sin
          fricciones y con resultados reales.
        </p>
      </motion.div>

      {/* Contenido por etapas */}
      <div className="mt-16 space-y-20 relative z-10">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.id}
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: i * 0.2 }}
            className={`grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8 items-stretch rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-lg`}
          >
            {/* COLUMNA IZQUIERDA */}
            <div>
              <div className="flex items-center mb-4">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full bg-${step.color}-500/20 text-${step.color}-400 font-semibold mr-3`}
                >
                  {step.id}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-4">{step.desc}</p>

              <ul className="space-y-2 text-sm text-gray-400">
                {step.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-[2px]">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="flex flex-col justify-between gap-6">
              <div
                className={`rounded-xl bg-gradient-to-br from-${step.color}-500/20 to-${step.color}-500/10 border border-${step.color}-500/20 p-5 text-center shadow-[0_0_25px_rgba(0,0,0,0.15)]`}
              >
                <h4 className="text-xs uppercase tracking-wide text-${step.color}-400">
                  {step.phase}
                </h4>
                <p className="text-white font-semibold mt-1">
                  {step.phaseDesc}
                </p>
              </div>

              <div
                className={`rounded-xl bg-gradient-to-br from-${step.color}-500/20 to-${step.color}-500/10 border border-${step.color}-500/20 p-5 text-center shadow-[0_0_25px_rgba(0,0,0,0.15)]`}
              >
                <h4 className="text-xs uppercase tracking-wide text-${step.color}-400">
                  {step.result}
                </h4>
                <p className="text-white font-semibold mt-1">
                  {step.resultDesc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Final */}
      <motion.div
        className="mt-24 text-center relative z-10"
        {...fadeIn}
        transition={{ ...fadeIn.transition, delay: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          ¿Listo para comenzar tu proyecto?
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Empecemos por una charla simple. Contanos qué querés lograr y te
          mostramos cómo podemos hacerlo realidad.
        </p>
        <motion.div whileHover={{ scale: 1.05, y: -2 }}>
          <Link
            href="/contacto"
            className="btn btn-ultimate-glow px-10 py-3 text-lg shadow-[0_0_25px_rgba(0,255,180,0.3)] hover:shadow-[0_0_45px_rgba(0,255,180,0.6)]"
          >
            Agendar una conversación de inicio
          </Link>
        </motion.div>
        <p className="text-sm text-gray-500 mt-6 italic">
          *Primera reunión gratuita y sin compromiso.
        </p>
      </motion.div>
    </section>
  );
}
