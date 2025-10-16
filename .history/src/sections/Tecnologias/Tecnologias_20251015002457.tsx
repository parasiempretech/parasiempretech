// src/sections/Tecnologias/Tecnologias.tsx

"use client";

import { motion, useMotionValue } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import TechCloud from "@/components/sections/TechCloud";
import { useState } from "react";

// --- Tipos de Componentes ---
type TechGroup = {
  title: string;
  desc: string;
  techs: string[];
  gradient: string;
  shadowColor: string;
};

// --- Configuración de Animación Reutilizable (Elite) ---
const cardAppear = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true as const, amount: 0.2 },
};

// --- Contenido de la Sección (Data) ---
const TECH_GROUPS: TechGroup[] = [
  {
    // 🌐 Emoji para Web/Global
    title: "🌐 Landing Pages y Sitios Web",
    desc: `Una landing page es una página pensada para lograr una acción concreta: captación de leads o ventas directas. Es la primera impresión digital. Usamos **React, Next.js y Tailwind CSS** para asegurar **rendimiento y SEO** óptimos.`,
    techs: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Figma",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
    gradient: "from-cyan-400/30 via-transparent to-transparent",
    shadowColor: "shadow-cyan-500/30",
  },
  {
    // 🛠️ Emoji para Herramientas/Software
    title: "🛠️ Aplicaciones y Software a Medida",
    desc: `Creamos **sistemas internos, CRMs o plataformas web** para gestionar flujos de trabajo, turnos, clientes o inventario. Nuestra pila **Node.js, Express, Prisma y PostgreSQL** garantiza eficiencia y escalabilidad en el backend.`,
    techs: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
    gradient: "from-emerald-400/30 via-transparent to-transparent",
    shadowColor: "shadow-emerald-500/30",
  },
  {
    // 📊 Emoji para Data/Reportes
    title: "📊 Análisis de Datos y Tableros Visuales",
    desc: `Transformamos datos brutos (ventas, tráfico, consultas) en **conocimiento estratégico**. Implementamos soluciones de **Business Intelligence (BI)** con Python, Power BI o Chart.js para fundamentar cada decisión de negocio.`,
    techs: ["Python", "PostgreSQL", "Power BI", "Chart.js", "Prisma"],
    gradient: "from-amber-400/30 via-transparent to-transparent",
    shadowColor: "shadow-amber-500/30",
  },
  {
    // ☁️ Emoji para Nube/Infraestructura
    title: "☁️ Infraestructura y Escalabilidad",
    desc: `Nos encargamos de que tu proyecto opere al 100% bajo cualquier demanda. Configuramos entornos con **Docker, Kubernetes y AWS/Vercel** para garantizar alta disponibilidad, seguridad robusta y despliegues (CI/CD) automatizados.`,
    techs: ["Docker", "Kubernetes", "Vercel", "AWS", "GitHub", "GitLab"],
    gradient: "from-fuchsia-400/30 via-transparent to-transparent",
    shadowColor: "shadow-fuchsia-500/30",
  },
  {
    // ✨ Emoji para Diseño/Estética
    title: "✨ Experiencia del Usuario (UX/UI)",
    desc: `Los detalles construyen la marca. Priorizamos la **usabilidad y la conversión**. Mejoramos la interacción y el *engagement* con animaciones fluidas utilizando Framer Motion y Lottie, optimizando la experiencia móvil.`,
    techs: [
      "Framer Motion",
      "Lottie",
      "Optimización UX/UI",
      "Usabilidad/Conversión",
    ],
    gradient: "from-purple-400/30 via-transparent to-transparent",
    shadowColor: "shadow-purple-500/30",
  },
  {
    // 🔄 Emoji para Ciclo/Mantenimiento
    title: "🔄 Mantenimiento y Crecimiento Continuo",
    desc: `El lanzamiento es solo el inicio. Ofrecemos **soporte proactivo, monitoreo y optimización de rendimiento** constante. Aplicamos estrategias de SEO técnico para asegurar el crecimiento orgánico a largo plazo.`,
    techs: [
      "SEO Técnico",
      "Google Analytics",
      "Monitoreo Web",
      "Rendimiento Web",
      "Actualizaciones",
    ],
    gradient: "from-green-400/30 via-transparent to-transparent",
    shadowColor: "shadow-green-500/30",
  },
];

// --- Componente Principal ---
export default function Tecnologias() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // TRUCO: Variables de movimiento para el Micro-Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Truco: Definición de variantes para animar la cabecera palabra por palabra
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };
  const wordVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  // Función para manejar el movimiento del mouse y calcular el Parallax
  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Calcula la posición relativa (-0.5 a 0.5)
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // Asigna el valor del movimiento (sensibilidad de 0.05)
    mouseX.set(x * 0.05);
    mouseY.set(y * 0.05);
  };

  return (
    <section
      id="tecnologias"
      aria-labelledby="tech-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* FONDO VIBRANTE Y ROTATORIO */}
      <motion.div
        className="absolute inset-0 w-[200vw] h-[200vh] -top-1/2 -left-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/40 via-purple-900/40 to-black/20 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-red-500 via-blue-500 to-yellow-600 opacity-[0.05] blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      />

      {/* Encabezado con Animación de Texto Élite */}
      <SectionTitle id="tech-title" kicker="Tecnología con propósito">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {"Cómo construimos cada proyecto".split(" ").map((word, index) => (
            <motion.span
              key={word + index}
              variants={wordVariant}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </SectionTitle>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mt-2 mb-16 text-lg font-medium">
        En ParaSiempreTech usamos herramientas **modernas y probadas** 🧪,
        enfocadas en la **efectividad, rapidez y escalabilidad** 📈 de tu
        inversión.
      </p>

      {/* Nube visual de íconos (Asumimos que TechCloud existe y funciona) */}
      <div className="relative z-10 mb-24">
        <TechCloud />
      </div>

      {/* Bloques explicativos: TRUCO DE DISEÑO ASIMÉTRICO */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 relative z-10">
        {TECH_GROUPS.map((group, i) => {
          // 1. Truco: Color dinámico para las etiquetas
          const techLabelColorClass = group.shadowColor
            .replace("shadow-", "text-")
            .replace("/30", "/60");
          const techLabelHoverClass = group.shadowColor
            .replace("shadow-", "bg-")
            .replace("/30", "/10");

          return (
            <motion.div
              key={group.title}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden
                       transition-all duration-300 transform h-full flex flex-col justify-between
                       ${i === 0 ? "lg:col-span-2" : "lg:col-span-1"}
                       ${
                         hoveredIndex === i
                           ? `scale-[1.03] shadow-2xl ${group.shadowColor.replace(
                               "/30",
                               "/70"
                             )}`
                           : ""
                       }`} // Sombra más fuerte al hacer hover
              {...cardAppear}
              transition={{ ...cardAppear.transition, delay: i * 0.08 }}
              onMouseEnter={() => {
                setHoveredIndex(i);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                mouseX.set(0);
                mouseY.set(0);
              }}
              onMouseMove={handleMouseMove}
            >
              {/* BRILLO DINÁMICO DE BORDE Y GLOW */}
              <div
                className={`absolute inset-0 rounded-2xl border border-transparent transition-all duration-300 pointer-events-none`}
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${group.gradient
                    .replace(/from-/, "")
                    .split(" ")[0]
                    .replace(/\/\d+/, "")}, transparent)`,
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              >
                <motion.div
                  className={`w-full h-full rounded-2xl shadow-xl ${group.shadowColor} opacity-0`}
                  animate={{ opacity: hoveredIndex === i ? 0.7 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* FONDO INTERNO CON MICRO-PARALLAX (Placer Visual) */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-20 transition-opacity duration-500`}
                style={{
                  x: mouseX,
                  y: mouseY,
                  scale: 1.05,
                }}
              ></motion.div>

              <div className="relative h-full flex flex-col justify-between">
                <h3
                  className={`font-extrabold text-white mb-3 text-left ${
                    i === 0 ? "text-2xl" : "text-xl"
                  }`}
                >
                  {group.title}
                </h3>

                <p className="text-base text-gray-300 mb-5 leading-relaxed text-left">
                  {group.desc}
                </p>

                {/* Etiquetas con color de marca y A11Y */}
                <div
                  className="mt-auto flex flex-wrap justify-start gap-2 text-xs"
                  aria-label={`Tecnologías clave para ${group.title}`}
                >
                  {group.techs.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-full bg-white/10 ${techLabelColorClass}
                                  hover:${techLabelHoverClass} transition-colors font-medium cursor-default`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="text-center text-sm text-gray-500 mt-16 tracking-wide">
        *La selección de herramientas se personaliza según las necesidades,
        objetivos y público de cada proyecto.
      </p>
    </section>
  );
}
