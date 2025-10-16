// src/sections/Proceso/Proceso.tsx

"use client";

import { motion } from "framer-motion";
// 1. ❌ ELIMINAMOS Link de Next.js (ya no lo vamos a usar)
// import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
// 2. ➕ AGREGAMOS el hook para usar el estado del modal
import { useModal } from "@/context/ModalContext";

/* =========================================================
    Animaciones base (Limpias de errores de tipos)
    ========================================================= */
const appear = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
  viewport: { once: true as const, amount: 0.3 },
};

/* =========================
    Tipos y contenido del paso (Data corregida y estable)
    (TODO TU CÓDIGO INTERMEDIO LARGO VA AQUÍ SIN CAMBIOS)
    ========================= */
type Step = {
  id: number;
  title: string;
  lead: string;
  bullets: string[];
  examples: string[];
  // estilos precompuestos para asegurar colores distintos en UI
  badgeBg: string;
  badgeText: string;
  rightTone: {
    border: string;
    from: string;
    to: string;
  };
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Planificación Estratégica",
    lead: "Acordamos objetivos, tiempos y entregables. De esta etapa salís con un plan simple, medible y sin sorpresas.",
    bullets: [
      "Definimos éxito: qué queremos lograr y cómo lo medimos.",
      "Roadmap por semanas con responsables claros.",
      "Priorizamos: empezamos por lo que más impacto trae.",
      "Documentación breve: acuerdos, checklist y accesos.",
    ],
    examples: [
      "Landing para captar consultas: armamos propuesta, secciones y llamada a la acción.",
      "Turnos online: mapeamos solicitud, recordatorio y confirmación.",
    ],
    // Color 1: Esmeralda
    badgeBg: "bg-emerald-500/20",
    badgeText: "text-emerald-400",
    rightTone: {
      border: "border-emerald-500/25",
      from: "from-emerald-500/20",
      to: "to-emerald-500/10",
    },
  },
  {
    id: 2,
    title: "Ejecución y Controles",
    lead: "Diseñamos, desarrollamos y probamos con entregas cortas. Siempre ves avances reales y decidimos juntos.",
    bullets: [
      "UI/UX claro: jerarquía visual, textos y acciones simples.",
      "Desarrollo por módulos: integramos y validamos cada parte.",
      "Pruebas de velocidad y compatibilidad antes de cada entrega.",
      "Seguimiento cercano: feedback ágil y ajustes con criterio.",
    ],
    examples: [
      "Probamos 2 titulares y medimos clics para elegir el mejor.",
      "Reducimos campos del formulario para aumentar conversión.",
    ],
    // Color 2: Celeste/Cielo
    badgeBg: "bg-sky-400/20",
    badgeText: "text-sky-300",
    rightTone: {
      border: "border-sky-400/25",
      from: "from-sky-400/20",
      to: "to-sky-400/10",
    },
  },
  {
    id: 3,
    title: "Lanzamiento y Evolución",
    lead: "Publicamos en un entorno seguro, medimos el desempeño y planificamos mejoras. Podemos seguir acompañando.",
    bullets: [
      "Checklist final y despliegue controlado (monitoreo activo).",
      "Capacitación breve: editar, ver métricas y pedir cambios.",
      "Análisis post-lanzamiento con oportunidades priorizadas.",
      "Mantenimiento opcional: seguridad, performance y evolutivos.",
    ],
    examples: [
      "Agregamos testimonios y casos reales para sumar confianza.",
      "Incluimos reportes simples para que el equipo vea resultados.",
    ],
    // Color 3: Fucsia
    badgeBg: "bg-fuchsia-500/20",
    badgeText: "text-fuchsia-400",
    rightTone: {
      border: "border-fuchsia-500/25",
      from: "from-fuchsia-500/20",
      to: "to-fuchsia-500/10",
    },
  },
];

/* =========================
    Tarjeta de síntesis derecha
    ========================= */
function PillCard({
  title,
  desc,
  tone,
}: {
  title: string;
  desc: string;
  tone: { border: string; from: string; to: string };
}) {
  return (
    <div
      className={`rounded-2xl border ${tone.border} bg-gradient-to-br ${tone.from} ${tone.to} p-6 text-center shadow-[0_12px_36px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.01]`}
      role="group"
      aria-label={title}
    >
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-white/85 text-sm mt-1">{desc}</p>
    </div>
  );
}

/* =========================
    Componente principal
    ========================= */
export default function Proceso() {
  // 3. ⬅️ Obtenemos la función openModal del contexto
  const { openModal } = useModal();

  const baseTransition = { duration: 0.5, ease: "easeOut" as const };
  const headerAppear = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* halo sutil superior */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(0,191,255,0.14),transparent_70%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Encabezado */}
      <motion.div
        {...headerAppear}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle id="proceso-title" kicker="Cómo trabajamos">
          Un proceso claro y profesional
        </SectionTitle>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4">
          Pasos simples, avances visibles y decisiones con fundamento. Así
          convertimos ideas en resultados reales.
        </p>
      </motion.div>

      {/* Contenido por etapas */}
      <div className="mt-24 space-y-24 relative z-10">
        {STEPS.map((s, i) => (
          <motion.article
            key={s.id}
            {...appear}
            transition={{ ...baseTransition, delay: i * 0.08 }} // Staggered entry
            // SIMETRÍA: Grid fijo y sin reordenamiento
            className={`
                            grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8 items-stretch
                            rounded-3xl border border-white/10 bg-white/[0.06] p-6 md:p-8
                            shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm
                        `}
          >
            {/* IZQUIERDA: Contenido Principal (Igual) */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {/* Aplica el color de badge único (Ej: bg-emerald-500/20) */}
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${s.badgeBg} ${s.badgeText} text-lg font-extrabold`}
                  aria-label={`Paso ${s.id}`}
                >
                  {s.id}
                </span>
                <h3 className="text-2xl font-bold text-white">{s.title}</h3>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                {s.lead}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Qué hacemos (Igual) */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-white font-semibold text-base mb-3 border-b border-white/10 pb-2">
                    Qué hacemos en este paso
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300 mt-3">
                    {s.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2 leading-relaxed">
                        <span className="text-[#39FF14] mt-[2px] font-bold">
                          ✔
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ejemplos prácticos (Igual) */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-white font-semibold text-base mb-3 border-b border-white/10 pb-2">
                    Ejemplos prácticos
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300 mt-3">
                    {s.examples.map((e, idx) => (
                      <li key={idx} className="flex gap-2 leading-relaxed">
                        <span className="text-[#00BFFF] mt-[2px] font-bold">
                          ●
                        </span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* línea de confianza (Igual) */}
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white">
                    Validación continua:
                  </span>{" "}
                  cada entrega se revisa con vos antes de avanzar. Sin
                  sorpresas.
                </p>
              </div>
            </div>

            {/* DERECHA: Tarjetas de Síntesis (Igual) */}
            <div className="flex flex-col justify-between gap-6">
              <PillCard
                title="Enfoque de la Fase"
                desc="Dirección compartida y foco absoluto en resultados medibles."
                tone={s.rightTone}
              />
              <PillCard
                title="Resultado Inmediato"
                desc="Obtenés una entrega funcional, sólida, medible y lista para escalar."
                tone={s.rightTone}
              />
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA FINAL */}
      <motion.div
        className="mt-24 text-center relative z-10"
        {...appear}
        transition={{ ...baseTransition, delay: 0.2 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          ¿Empezamos con el paso 1?
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Hacemos una charla corta, entendemos tu objetivo y te mostramos el
          camino más simple para alcanzarlo.
        </p>

        <motion.div
          whileHover={{ scale: 1.04, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          {/* 4. 🔄 Reemplazamos <Link> con <button> y usamos onClick */}
          <button
            onClick={openModal}
            className="btn btn-ultimate-glow px-10 py-3 text-lg shadow-[0_0_25px_rgba(0,255,180,0.35)] hover:shadow-[0_0_45px_rgba(0,255,180,0.6)]"
            aria-label="Agendar una conversación inicial para tu proyecto"
          >
            Agendar una conversación
          </button>
        </motion.div>

        <p className="text-sm text-gray-500 mt-6 italic">
          *Primera reunión gratuita y sin compromiso.
        </p>
      </motion.div>
    </section>
  );
}
