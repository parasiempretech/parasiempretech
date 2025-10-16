// src/sections/Proceso/Proceso.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";

/* =========================
   Animaciones y utilidades
   ========================= */
const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, amount: 0.2 },
};

const SectionGlow = () => (
  <motion.div
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(0,191,255,0.15),transparent_70%)]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
  />
);

/* =========================
   Tipos y datos del proceso
   ========================= */
type Step = {
  id: number;
  title: string;
  lead: string;
  bullets: string[];
  examples: string[];
  phaseKicker: string;
  phase: string;
  phaseNote: string;
  resultKicker: string;
  result: string;
  resultNote: string;

  // clases precompuestas (evitamos strings dinámicos)
  badgeBg: string;
  badgeText: string;
  rightFrom: string;
  rightTo: string;
  rightBorder: string;
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Planificación Estratégica",
    lead: "Alineamos objetivos, tiempos y expectativas. Diseñamos un plan simple, medible y sin sorpresas para comenzar con claridad.",
    bullets: [
      "Relevamiento breve: qué queremos lograr y cómo se mide el éxito.",
      "Roadmap claro con hitos semanales y responsables definidos.",
      "Selección de enfoque: qué conviene hacer primero para ver resultados rápido.",
      "Documentación corta y útil: acuerdos, checklist y accesos.",
    ],
    examples: [
      "Landing para captar consultas: definimos propuesta, secciones y llamada a la acción.",
      "Sistema de turnos: mapeamos el flujo (solicitud, recordatorio, confirmación).",
    ],
    phaseKicker: "Fase clave",
    phase: "Dirección Compartida",
    phaseNote: "Tu visión, nuestro plan.",
    resultKicker: "Resultado esperado",
    result: "Inicio sin fricciones",
    resultNote: "Avance medible desde la semana 1.",
    badgeBg: "bg-emerald-500/20",
    badgeText: "text-emerald-400",
    rightFrom: "from-emerald-500/22",
    rightTo: "to-emerald-500/10",
    rightBorder: "border-emerald-500/25",
  },
  {
    id: 2,
    title: "Ejecución y Controles",
    lead: "Diseñamos, desarrollamos y probamos con entregas cortas. Siempre ves avances reales y tomamos decisiones juntos.",
    bullets: [
      "UI/UX claro: contenido, jerarquía visual y acciones simples.",
      "Desarrollo por módulos: cada parte se integra y se valida.",
      "Pruebas de velocidad y compatibilidad antes de cada entrega.",
      "Seguimiento cercano: feedback ágil y ajustes con criterio.",
    ],
    examples: [
      "“El titular no convence”: probamos 2 variantes y medimos clics.",
      "“Demasiados campos”: simplificamos formularios para mejorar conversión.",
    ],
    phaseKicker: "Fase clave",
    phase: "Ejecución Precisa",
    phaseNote: "Diseño, código y pruebas en sincronía.",
    resultKicker: "Resultado esperado",
    result: "Producto sólido",
    resultNote: "Rápido, estable y visualmente profesional.",
    badgeBg: "bg-sky-400/20",
    badgeText: "text-sky-300",
    rightFrom: "from-sky-400/22",
    rightTo: "to-sky-400/10",
    rightBorder: "border-sky-400/25",
  },
  {
    id: 3,
    title: "Lanzamiento y Evolución",
    lead: "Publicamos en un entorno seguro, medimos el desempeño y planificamos mejoras. Si querés, seguimos acompañando.",
    bullets: [
      "Checklist final y despliegue controlado (monitoreo activo).",
      "Capacitación breve para tu equipo: editar, ver métricas y pedir cambios.",
      "Análisis post-lanzamiento: oportunidades de mejora priorizadas.",
      "Mantenimiento opcional: seguridad, performance y evolutivos.",
    ],
    examples: [
      "Agregamos testimonios y casos reales para aumentar confianza.",
      "Sumamos reportes con métricas entendibles para tu equipo.",
    ],
    phaseKicker: "Fase clave",
    phase: "Cierre Estratégico",
    phaseNote: "Transición ordenada y clara.",
    resultKicker: "Resultado esperado",
    result: "Impacto Real",
    resultNote: "Proyecto online, medido y listo para crecer.",
    badgeBg: "bg-fuchsia-500/20",
    badgeText: "text-fuchsia-400",
    rightFrom: "from-fuchsia-500/22",
    rightTo: "to-fuchsia-500/10",
    rightBorder: "border-fuchsia-500/25",
  },
];

/* =========================
   Tarjeta lateral (síntesis)
   ========================= */
function SideCard({
  kicker,
  title,
  note,
  classes,
}: {
  kicker: string;
  title: string;
  note: string;
  classes: { from: string; to: string; border: string };
}) {
  return (
    <div
      className={`rounded-2xl border ${classes.border} bg-gradient-to-br ${classes.from} ${classes.to} p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.25)]`}
    >
      <span className="text-[11px] uppercase tracking-widest text-white/70">
        {kicker}
      </span>
      <h4 className="mt-2 text-white text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-white/80 text-sm">{note}</p>
    </div>
  );
}

/* =========================
   Componente principal
   ========================= */
export default function Proceso() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      <SectionGlow />

      {/* Encabezado */}
      <motion.div {...fadeIn}>
        <SectionTitle id="proceso-title" kicker="Cómo trabajamos">
          Un proceso claro y profesional
        </SectionTitle>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4">
          Pasos simples, avances visibles y decisiones con fundamento. Así
          transformamos ideas en resultados medibles.
        </p>
      </motion.div>

      {/* Línea de timeline (estética) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[calc(50%-38rem)] top-64 hidden h-[1200px] w-[3px] rounded-full bg-gradient-to-b from-[#00BFFF] via-[#39FF14] to-[#ff00cc] opacity-30 lg:block"
      />

      {/* Etapas */}
      <div className="mt-16 space-y-20 relative z-10">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.id}
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: i * 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-10 items-stretch rounded-3xl border border-white/10 bg-white/[0.06] p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm"
          >
            {/* IZQUIERDA */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${s.badgeBg} ${s.badgeText} font-bold`}
                  aria-label={`Paso ${s.id}`}
                >
                  {s.id}
                </span>
                <h3 className="text-2xl font-bold text-white">{s.title}</h3>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">{s.lead}</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Qué hacemos */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-white font-semibold text-sm mb-3">
                    Qué hacemos en esta etapa
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {s.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-[#39FF14] mt-[1px]">✔</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ejemplos concretos */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-white font-semibold text-sm mb-3">
                    Ejemplos prácticos
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {s.examples.map((e, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-[#00BFFF] mt-[1px]">●</span>
                        <span className="leading-relaxed">{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* línea de confianza (sustituye “Tip” genérico) */}
              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white">
                    Transparencia total:
                  </span>{" "}
                  cada avance se revisa con vos antes de pasar al siguiente
                  paso. Nada se publica sin tu OK.
                </p>
              </div>
            </div>

            {/* DERECHA (síntesis visual) */}
            <div className="flex flex-col justify-between gap-6">
              <SideCard
                kicker={s.phaseKicker}
                title={s.phase}
                note={s.phaseNote}
                classes={{
                  from: s.rightFrom,
                  to: s.rightTo,
                  border: s.rightBorder,
                }}
              />
              <SideCard
                kicker={s.resultKicker}
                title={s.result}
                note={s.resultNote}
                classes={{
                  from: s.rightFrom,
                  to: s.rightTo,
                  border: s.rightBorder,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA final */}
      <motion.div
        className="mt-24 text-center relative z-10"
        {...fadeIn}
        transition={{ ...fadeIn.transition, delay: 0.3 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          ¿Empezamos con el paso 1?
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Te proponemos una charla corta para entender tu objetivo y mostrarte
          el camino más simple para alcanzarlo.
        </p>

        <motion.div whileHover={{ scale: 1.05, y: -2 }}>
          <Link
            href="/contacto"
            className="btn btn-ultimate-glow px-10 py-3 text-lg shadow-[0_0_25px_rgba(0,255,180,0.35)] hover:shadow-[0_0_45px_rgba(0,255,180,0.6)]"
          >
            Agendar una conversación
          </Link>
        </motion.div>

        <p className="text-sm text-gray-500 mt-6 italic">
          *Primera reunión gratuita y sin compromiso.
        </p>
      </motion.div>
    </section>
  );
}
