// src/sections/Proceso/Proceso.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";

// ---------------------------
// Tipos y utilidades visuales
// ---------------------------
type Step = {
  id: number;
  title: string;
  intro: string;
  bullets: string[]; // qué hacemos en la etapa
  examples: string[]; // ejemplos prácticos
  phase: string;
  phaseDesc: string;
  result: string;
  resultDesc: string;

  // Clases Tailwind ya resueltas (evitamos strings dinámicos que rompan el purge)
  badgeBg: string;
  badgeText: string;
  cardBorder: string;
  cardFrom: string;
  cardTo: string;
};

// Animación base (válida para Framer Motion 10+)
const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, amount: 0.2 },
};

// Halo del fondo
const Glow = () => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-sky-500 to-fuchsia-600 opacity-[0.07] blur-3xl"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.07 }}
    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
  />
);

// ---------------------------
// Contenido (explicativo)
// ---------------------------
const STEPS: Step[] = [
  {
    id: 1,
    title: "Planificación del servicio",
    intro:
      "Nos sentamos a entenderte de verdad: objetivos, tiempos, prioridades y contexto. Con eso armamos un plan simple, realista y sin sorpresas.",
    bullets: [
      "Evaluación y requisitos: qué querés lograr y cómo sabremos que salió bien.",
      "Selección de talento: definimos los perfiles necesarios y la forma de trabajo.",
      "Reunión de planificación: calendario claro con avances semanales.",
      "Adaptabilidad: nos acoplamos a tu dinámica para no frenar tu día a día.",
      "Documentación breve: acuerdos por escrito, checklist y responsables.",
    ],
    examples: [
      "“Queremos una landing para captar consultas”: definimos la propuesta, el contenido y el objetivo de contacto.",
      "“Necesitamos ordenar turnos”: bocetamos un flujo simple de reservas + recordatorios.",
    ],
    phase: "Fase Clave",
    phaseDesc: "Talento alineado – Tu visión, nuestro expertise.",
    result: "Resultado Esperado",
    resultDesc: "Integración fluida – Empezamos con el pie derecho.",
    // colores
    badgeBg: "bg-emerald-500/20",
    badgeText: "text-emerald-400",
    cardBorder: "border-emerald-500/20",
    cardFrom: "from-emerald-500/20",
    cardTo: "to-emerald-500/10",
  },
  {
    id: 2,
    title: "Ejecución y controles",
    intro:
      "Diseñamos, construimos y probamos con entregas cortas. Te mostramos avances visibles para decidir en conjunto.",
    bullets: [
      "Diseño y experiencia: maquetas claras, textos y acciones fáciles.",
      "Desarrollo por módulos: avanzamos por partes para ver resultados rápido.",
      "Pruebas y calidad: chequeos de velocidad y compatibilidad.",
      "Acompañamiento: estás al tanto; resolvemos dudas al instante.",
      "Registro de cambios: todo queda documentado y versionado.",
    ],
    examples: [
      "“El héroe no convence”: probamos otro titular y una imagen diferente.",
      "“El formulario pide mucho”: reducimos campos y sube la conversión.",
    ],
    phase: "Fase Clave",
    phaseDesc: "Seguimiento continuo – Rendimiento y calidad garantizados.",
    result: "Resultado Esperado",
    resultDesc: "Equipo optimizado – Sin interrupciones, con foco en valor.",
    badgeBg: "bg-violet-500/20",
    badgeText: "text-violet-400",
    cardBorder: "border-violet-500/20",
    cardFrom: "from-violet-500/20",
    cardTo: "to-violet-500/10",
  },
  {
    id: 3,
    title: "Cierre y evolución",
    intro:
      "Publicamos, medimos y ajustamos. Si querés, seguimos con soporte y mejoras para que el proyecto crezca sano.",
    bullets: [
      "Lanzamiento controlado: publicación segura y checklist final.",
      "Capacitación breve: cómo editar, leer métricas y pedir cambios.",
      "Monitoreo: medimos visitas, velocidad y puntos de mejora.",
      "Mejoras: aplicamos cambios que sumen resultados de verdad.",
      "Soporte opcional: mantenimiento evolutivo, cuando lo necesites.",
    ],
    examples: [
      "“La landing funciona bien, ahora sumemos testimonios y caso real”.",
      "“El sistema crece: agregamos reportes con métricas fáciles de leer”.",
    ],
    phase: "Fase Clave",
    phaseDesc: "Cierre estratégico – Flexibilidad para el futuro.",
    result: "Resultado Esperado",
    resultDesc: "Satisfacción total – Feedback y mejora continua.",
    badgeBg: "bg-rose-500/20",
    badgeText: "text-rose-400",
    cardBorder: "border-rose-500/20",
    cardFrom: "from-rose-500/20",
    cardTo: "to-rose-500/10",
  },
];

// ---------------------------
// Tarjetas auxiliares (derecha)
// ---------------------------
function SideCard({
  title,
  subtitle,
  classes,
}: {
  title: string;
  subtitle: string;
  classes: { border: string; from: string; to: string; text: string };
}) {
  return (
    <div
      className={`rounded-xl bg-gradient-to-br ${classes.from} ${classes.to} border ${classes.border} p-5 text-center shadow-[0_0_25px_rgba(0,0,0,0.15)]`}
      aria-label={`${title}: ${subtitle}`}
    >
      <h4 className={`text-xs uppercase tracking-wide ${classes.text}`}>
        {title}
      </h4>
      <p className="text-white font-semibold mt-1">{subtitle}</p>
    </div>
  );
}

// ---------------------------
// Componente principal
// ---------------------------
export default function Proceso() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      <Glow />

      {/* Título + microcopy educativo */}
      <motion.div {...fadeIn}>
        <SectionTitle id="proceso-title" kicker="Cómo trabajamos">
          Un proceso claro, humano y medible
        </SectionTitle>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4">
          No vendemos “magia”: trabajamos con pasos simples y visibles. En cada
          etapa sabés qué hacemos, por qué lo hacemos y qué vas a recibir.
        </p>
      </motion.div>

      {/* Etapas */}
      <div className="mt-16 space-y-20 relative z-10">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.id}
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: i * 0.15 }}
            className="group grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8 items-stretch rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:-translate-y-[2px] transition-transform duration-300"
          >
            {/* Columna izquierda: contenido */}
            <div>
              <div className="flex items-center mb-4">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${s.badgeBg} ${s.badgeText} font-semibold mr-3`}
                  aria-label={`Paso ${s.id}`}
                >
                  {s.id}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {s.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6">{s.intro}</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Qué hacemos */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Qué hacemos en esta etapa
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {s.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-emerald-400 mt-[2px]">✔</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ejemplos reales */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Ejemplos prácticos
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {s.examples.map((e, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-sky-400 mt-[2px]">◎</span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Nota UX: qué te llevás */}
              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white">
                    Lo que te llevás de este paso:
                  </span>{" "}
                  claridad, acuerdos simples y decisiones basadas en tu negocio
                  (no en términos técnicos).
                </p>
              </div>
            </div>

            {/* Columna derecha: tarjetas de síntesis */}
            <div className="flex flex-col justify-between gap-6">
              <SideCard
                title={s.phase}
                subtitle={s.phaseDesc}
                classes={{
                  border: s.cardBorder,
                  from: s.cardFrom,
                  to: s.cardTo,
                  text: s.badgeText,
                }}
              />
              <SideCard
                title={s.result}
                subtitle={s.resultDesc}
                classes={{
                  border: s.cardBorder,
                  from: s.cardFrom,
                  to: s.cardTo,
                  text: s.badgeText,
                }}
              />

              {/* Tip amigable */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                <p>
                  <span className="font-semibold text-white">Tip:</span> si ya
                  tenés una idea o referencia, traela. Acelera muchísimo las
                  decisiones y el diseño final.
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cierre con CTA */}
      <motion.div
        className="mt-24 text-center relative z-10"
        {...fadeIn}
        transition={{ ...fadeIn.transition, delay: 0.4 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          ¿Listo para empezar con claridad?
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Te proponemos una charla corta. Nos contás tu idea y te mostramos el
          camino más simple para convertirla en un proyecto real.
        </p>

        <motion.div whileHover={{ scale: 1.05, y: -2 }}>
          <Link
            href="/contacto"
            className="btn btn-ultimate-glow px-10 py-3 text-lg shadow-[0_0_25px_rgba(0,255,180,0.3)] hover:shadow-[0_0_45px_rgba(0,255,180,0.6)]"
            aria-label="Agendar una conversación de inicio"
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
