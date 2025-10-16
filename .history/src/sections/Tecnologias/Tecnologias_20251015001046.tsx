"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import TechCloud from "@/components/sections/TechCloud";
// import AnimateOnScroll from "@/components/effects/AnimateOnScroll"; // Eliminado: Usaremos solo Framer Motion

// --- Tipos de Componentes ---
type TechGroup = {
  title: string;
  desc: string;
  techs: string[];
  gradient: string;
};

// --- Configuración de Animación Reutilizable (Elite) ---
const cardAppear = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }, // Easing suave y placentero
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
    // Ajuste de degradado para mejor visibilidad y un ligero borde
    gradient: "from-cyan-400/30 via-transparent to-transparent",
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
  },
  {
    title: "Análisis de Datos y Tableros Visuales",
    desc: `Te ayudamos a entender y aprovechar la información (ventas, consultas, visitas). Creamos tableros visuales con Python, Power BI o Chart.js para que tomes decisiones con base real, no con intuición.`,
    techs: ["Python", "PostgreSQL", "Power BI", "Chart.js", "Prisma"],
    gradient: "from-amber-400/30 via-transparent to-transparent",
  },
  {
    title: "Infraestructura y Escalabilidad",
    desc: `Nos encargamos de que tu proyecto esté siempre online, sin caídas ni demoras. Configuramos servidores, seguridad y backups usando Docker, Kubernetes, Vercel y AWS. Tu proyecto, seguro, rápido y preparado para crecer.`,
    techs: ["Docker", "Kubernetes", "Vercel", "AWS", "GitHub", "GitLab"],
    gradient: "from-fuchsia-400/30 via-transparent to-transparent",
  },
  {
    title: "Experiencia del Usuario y Animaciones",
    desc: `Los detalles visuales marcan la diferencia. Cuidamos la interacción y los efectos visuales con Framer Motion, AOS y Lottie para guiar la atención y reforzar la identidad de tu marca de forma fluida.`,
    techs: ["Framer Motion", "AOS", "Lottie", "Optimización UX/UI"],
    gradient: "from-purple-400/30 via-transparent to-transparent",
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
  },
];

// --- Componente Principal ---
export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tech-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Fondo con efecto glow sutil */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 to-fuchsia-600 opacity-[0.07] blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.07 }}
        transition={{ duration: 1 }}
      />

      {/* Encabezado */}
      <SectionTitle id="tech-title" kicker="Tecnología con propósito">
        Cómo construimos cada proyecto
      </SectionTitle>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mt-2 mb-16 text-lg">
        En ParaSiempreTech usamos herramientas **modernas y probadas**,
        entendiendo que la mejor tecnología es la que resuelve tu problema de
        forma **efectiva, rápida y escalable**.
      </p>

      {/* Nube visual de íconos */}
      <div className="relative z-10 mb-24">
        <TechCloud />
      </div>

      {/* Bloques explicativos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 relative z-10">
        {TECH_GROUPS.map((group, i) => (
          // Usamos directamente motion.div con la configuración centralizada
          <motion.div
            key={group.title}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden
                       shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            {...cardAppear}
            transition={{ ...cardAppear.transition, delay: i * 0.08 }} // Staggered entry
          >
            {/* 1. EFECTO BRILLO/DEGRADADO DE BORDE (Placentero) */}
            <div
              className={`absolute inset-0 rounded-2xl border border-transparent
                          transition-all duration-300 pointer-events-none
                          group-hover:border-white/50
                          group-hover:shadow-[0_0_30px_rgba(0,255,180,0.3)]`}
              style={{
                // Creación de un borde dinámico que reacciona al color
                backgroundImage: `linear-gradient(to bottom right, ${group.gradient
                  .replace(/from-/, "")
                  .split(" ")[0]
                  .replace(/\/\d+/, "")}, transparent)`,
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                padding: "1px",
              }}
            ></div>

            {/* Fondo interno sutil */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-20 transition-opacity duration-500`}
            ></div>

            <div className="relative h-full flex flex-col justify-between">
              <h3 className="font-extrabold text-xl text-white mb-3 text-left">
                {group.title}
              </h3>
              {/* 2. MEJORA DE LEGIBILIDAD (UX) */}
              <p className="text-base text-gray-300 mb-5 leading-relaxed text-left">
                {group.desc}
              </p>

              <div className="mt-auto flex flex-wrap justify-start gap-2 text-xs text-gray-400">
                {group.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-full bg-white/10 hover:bg-white/30 transition-colors font-medium cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-16 tracking-wide">
        *La selección de herramientas se personaliza según las necesidades,
        objetivos y público de cada proyecto.
      </p>
    </section>
  );
}
