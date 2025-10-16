"use client";

import { motion, useMotionValue } from "framer-motion"; // Corregido: 'useMotionTemplate' eliminado
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
    title: "Landing Pages y Sitios Web",
    desc: `Una landing page es una página pensada para lograr una acción concreta: que la gente te contacte, te compre o se interese en lo que hacés. Es como tu carta de presentación digital. Usamos React, Next.js y Tailwind CSS para que tu web se vea impecable y cargue en segundos.`,
    techs: [
      "React",
      "Next.js",
      "Tailwind",
      "Figma",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
    gradient: "from-cyan-400/30 via-transparent to-transparent",
    shadowColor: "shadow-cyan-500/30",
  },
  {
    title: "Aplicaciones y Software a Medida",
    desc: `Creamos sistemas internos, apps web o plataformas completas para gestionar turnos, ventas, clientes o stock. Usamos Node.js, Express, Prisma y PostgreSQL. Hacemos que tu negocio trabaje mejor, con menos errores y más organización.`,
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
    title: "Análisis de Datos y Tableros Visuales",
    desc: `Te ayudamos a entender y aprovechar la información (ventas, consultas, visitas). Creamos tableros visuales con Python, Power BI o Chart.js para que tomes decisiones con base real, no con intuición.`,
    techs: ["Python", "PostgreSQL", "Power BI", "Chart.js", "Prisma"],
    gradient: "from-amber-400/30 via-transparent to-transparent",
    shadowColor: "shadow-amber-500/30",
  },
  {
    title: "Infraestructura y Escalabilidad",
    desc: `Nos encargamos de que tu proyecto esté siempre online, sin caídas ni demoras. Configuramos servidores, seguridad y backups usando Docker, Kubernetes, Vercel y AWS. Tu proyecto, seguro, rápido y preparado para crecer.`,
    techs: ["Docker", "Kubernetes", "Vercel", "AWS", "GitHub", "GitLab"],
    gradient: "from-fuchsia-400/30 via-transparent to-transparent",
    shadowColor: "shadow-fuchsia-500/30",
  },
  {
    title: "Experiencia del Usuario y Animaciones",
    desc: `Los detalles visuales marcan la diferencia. Cuidamos la interacción y los efectos visuales con Framer Motion, AOS y Lottie para guiar la atención y reforzar la identidad de tu marca de forma fluida.`,
    techs: ["Framer Motion", "AOS", "Lottie", "Optimización UX/UI"],
    gradient: "from-purple-400/30 via-transparent to-transparent",
    shadowColor: "shadow-purple-500/30",
  },
  {
    title: "Mantenimiento y Crecimiento",
    desc: `Revisamos estadísticas, corregimos detalles, mejoramos velocidad y actualizamos tecnologías. Aplicamos SEO y optimización de rendimiento para que tu proyecto no se quede quieto, sino que evolucione y crezca junto a vos.`,
    techs: [
      "SEO",
      "Analytics",
      "Rendimiento Web",
      "Optimizaciones UX",
      "Monitoreo Web",
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
        En ParaSiempreTech usamos herramientas **modernas y probadas**,
        entendiendo que la mejor tecnología es la que resuelve tu problema de
        forma **efectiva, rápida y escalable**.
      </p>

      {/* Nube visual de íconos */}
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
                       ${hoveredIndex === i ? "scale-[1.03] shadow-2xl" : ""}`}
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
