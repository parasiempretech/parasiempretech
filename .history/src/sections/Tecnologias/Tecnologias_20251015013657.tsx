// src/sections/Tecnologias/Tecnologias.tsx
"use client";

import { motion, useMotionValue } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import TechCloud from "@/components/sections/TechCloud";
import { useState } from "react";

/* =========================
    Tipos y datos
    ========================= */
type TechGroup = {
  title: string;
  simpleDesc: string;
  keyBenefit: string; // Se usa para énfasis en la descripción
  example: string;
  techs: string;
  gradient: string;
  shadowColor: string;
};

/* =========================
    Animaciones (corregido TS)
    ========================= */
const cardAppear = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true as const, amount: 0.2 },
};

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
};
const wordVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

/* =========================
    Contenido (Ejemplo de Estabilidad Corregido)
    ========================= */
const TECH_GROUPS: TechGroup[] = [
  {
    title: "🌐 Tu Negocio en Internet (Frente de Tienda)",
    simpleDesc:
      "Creamos páginas y tiendas que se ven increíbles en celular y cargan rápido. Es tu local abierto 24/7.",
    keyBenefit: "VELOCIDAD",
    example:
      "Ej. Un fotógrafo muestra imágenes en alta calidad sin esperas gracias a optimización real.",
    techs: "(React, Next.js, Tailwind, Figma / UI·UX)",
    gradient: "from-cyan-400/30 via-transparent to-transparent",
    shadowColor: "shadow-cyan-500/30",
  },
  {
    title: "🛠️ Herramientas a Medida (Oficina Digital)",
    simpleDesc:
      "Sistemas internos: turnos, ventas, stock, procesos. Tu operación ordenada y bajo control.",
    keyBenefit: "CONTROL",
    example:
      "Ej. Clínica veterinaria con turnos automáticos y recordatorios por WhatsApp.",
    techs: "(Node.js, Express, PostgreSQL, Prisma)",
    gradient: "from-emerald-400/30 via-transparent to-transparent",
    shadowColor: "shadow-emerald-500/30",
  },
  {
    title: "📊 Saber Dónde Invertir (Brújula de Datos)",
    simpleDesc:
      "Convertimos datos en respuestas claras para decidir con certeza, no a ciegas.",
    keyBenefit: "CERTEZA",
    example:
      "Ej. Marketing ve qué ciudades responden mejor y enfoca inversión donde rinde.",
    techs: "(Python, SQL, Chart.js / Power BI)",
    gradient: "from-amber-400/30 via-transparent to-transparent",
    shadowColor: "shadow-amber-500/30",
  },
  {
    title: "☁️ Estabilidad y Crecimiento (Edificio Firme)",
    simpleDesc:
      "Que no se caiga aunque entren 10.000 personas. Infra preparada para picos de tráfico.",
    keyBenefit: "ESCALA",
    example:
      "Ej. 🏦 Plataformas financieras: garantizamos que el sitio de un banco soporte picos de tráfico de fin de mes sin caerse, asegurando transacciones 24/7.", // <--- CORREGIDO AQUÍ
    techs: "(Docker, Kubernetes, AWS, Vercel)",
    gradient: "from-fuchsia-400/30 via-transparent to-transparent",
    shadowColor: "shadow-fuchsia-500/30",
  },
  {
    title: "✨ Experiencia Fluida (Se Siente Bien)",
    simpleDesc:
      "Interacciones suaves, textos claros y pasos simples. Si es fácil, la gente confía y avanza.",
    keyBenefit: "CONFIANZA",
    example:
      "Ej. Plataforma educativa donde inscribirse y pagar es intuitivo y rápido.",
    techs: "(Framer Motion, UX·UI, Lottie)",
    gradient: "from-purple-400/30 via-transparent to-transparent",
    shadowColor: "shadow-purple-500/30",
  },
  {
    title: "🔄 Soporte y Evolución (Mantenimiento)",
    simpleDesc:
      "No te dejamos solo. Arreglos, mejoras, SEO y métricas para seguir creciendo.",
    keyBenefit: "FUTURO",
    example:
      "Ej. Estudio jurídico se mantiene arriba en Google con mejoras técnicas continuas.",
    techs: "(SEO técnico, Analytics, Monitoreo 24/7)",
    gradient: "from-green-400/30 via-transparent to-transparent",
    shadowColor: "shadow-green-500/30",
  },
];

/* =========================
    Componente
    ========================= */
export default function Tecnologias() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Micro-parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - (rect.left + rect.width / 2);
    const y = clientY - (rect.top + rect.height / 2);
    mouseX.set(x * 0.05);
    mouseY.set(y * 0.05);
  };

  const renderCard = (group: TechGroup, i: number, isDouble: boolean) => (
    <motion.div
      key={group.title}
      className={[
        "group relative h-full rounded-2xl border border-white/10",
        "bg-white/5 p-6 overflow-hidden flex flex-col justify-between",
        "transition-transform duration-300",
        isDouble ? "lg:col-span-2" : "lg:col-span-1",
        hoveredIndex === i
          ? `scale-[1.03] shadow-2xl ${group.shadowColor.replace("/30", "/70")}`
          : "",
      ].join(" ")}
      {...cardAppear}
      transition={{ ...cardAppear.transition, delay: i * 0.08 }}
      onMouseEnter={() => setHoveredIndex(i)}
      onMouseLeave={() => {
        setHoveredIndex(null);
        mouseX.set(0);
        mouseY.set(0);
      }}
      onMouseMove={handleMouseMove}
      role="article"
      aria-label={group.title}
    >
      {/* Glow y gradiente interno */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-20`}
        style={{ x: mouseX, y: mouseY, scale: 1.05 }}
      />
      {/* Sombra de marca en hover */}
      <motion.div
        className={`absolute inset-0 rounded-2xl shadow-xl ${group.shadowColor} opacity-0`}
        animate={{ opacity: hoveredIndex === i ? 0.7 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Contenido */}
      <div className="relative h-full flex flex-col justify-between">
        <div className="mb-4">
          <h3
            className={`font-extrabold text-white mb-3 ${
              isDouble ? "text-2xl" : "text-xl"
            }`}
          >
            {group.title}
          </h3>
          <p className="text-gray-300 leading-relaxed text-base">
            {/* Énfasis en la descripción */}
            <span className="font-semibold text-white/90">
              {group.keyBenefit}:
            </span>{" "}
            {group.simpleDesc}
          </p>
        </div>

        {/* Quitamos h4 de palabra clave gigante para arreglar la desproporción */}

        <div className="rounded-xl border border-white/10 bg-white/5 p-4 mb-4 mt-auto">
          <p className="text-sm text-gray-300 font-medium leading-relaxed">
            {group.example}
          </p>
        </div>

        <div
          className="mt-auto text-xs text-gray-500 text-center italic"
          aria-label={`Tecnologías: ${group.techs}`}
        >
          {group.techs}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="tecnologias"
      aria-labelledby="tech-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Fondo vibrante sutil */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(0,191,255,0.14),transparent_65%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Encabezado con animación de palabras */}
      <SectionTitle id="tech-title" kicker="Tecnología con propósito">
        <motion.span
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block"
        >
          {"Cómo construimos cada proyecto".split(" ").map((w, idx) => (
            <motion.span
              key={`${w}-${idx}`}
              variants={wordVariant}
              className="inline-block mr-1"
            >
              {w}
            </motion.span>
          ))}
        </motion.span>
      </SectionTitle>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mt-2 mb-16 text-lg font-medium">
        Usamos herramientas modernas y probadas, enfocadas en{" "}
        <span className="text-white/90 font-semibold">efectividad</span>,{" "}
        <span className="text-white/90 font-semibold">rapidez</span> y{" "}
        <span className="text-white/90 font-semibold">escala</span>.
      </p>

      {/* Nube de íconos */}
      <div className="relative z-10 mb-24">
        <TechCloud />
      </div>

      {/* Fila 1: Asimétrica (2x + 1x+1x) */}
      <div className="relative z-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {renderCard(TECH_GROUPS[0], 0, true)}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:col-span-2">
            {renderCard(TECH_GROUPS[1], 1, false)}
            {renderCard(TECH_GROUPS[2], 2, false)}
          </div>
        </div>

        {/* Fila 2: 3 columnas iguales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {renderCard(TECH_GROUPS[3], 3, false)}
          {renderCard(TECH_GROUPS[4], 4, false)}
          {renderCard(TECH_GROUPS[5], 5, false)}
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-16 tracking-wide">
        *La selección de herramientas se adapta a tu negocio, objetivos y
        equipo.
      </p>
    </section>
  );
}
