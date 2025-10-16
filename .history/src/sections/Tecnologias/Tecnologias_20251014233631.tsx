// src/sections/Tecnologias/Tecnologias.tsx
"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import TechCloud from "@/components/sections/TechCloud";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";

// --- Datos organizados por grupos ---
const TECH_GROUPS = [
  {
    title: "Frontend & Experiencia",
    desc: "Diseñamos interfaces modernas, rápidas y atractivas que combinan tecnología, diseño y rendimiento.",
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Figma",
    ],
    gradient: "from-cyan-400/20 via-transparent to-transparent",
  },
  {
    title: "Backend & Lógica",
    desc: "Creamos estructuras sólidas con APIs seguras, bases de datos optimizadas e integraciones escalables.",
    techs: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Python",
    ],
    gradient: "from-emerald-400/20 via-transparent to-transparent",
  },
  {
    title: "Infraestructura & DevOps",
    desc: "Automatizamos despliegues, aseguramos disponibilidad y mantenemos entornos listos para escalar.",
    techs: ["Docker", "Kubernetes", "Vercel", "AWS", "GitHub", "GitLab"],
    gradient: "from-amber-400/20 via-transparent to-transparent",
  },
  {
    title: "UX/UI & Estrategia",
    desc: "Pensamos cada interfaz como una experiencia. Desde el wireframe hasta la interacción final.",
    techs: ["Figma", "AOS", "Framer Motion", "Lottie", "Animaciones SVG"],
    gradient: "from-fuchsia-400/20 via-transparent to-transparent",
  },
];

export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tech-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Fondo dinámico */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 to-fuchsia-600 opacity-[0.07] blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.07 }}
        transition={{ duration: 1 }}
      />

      {/* Título principal */}
      <SectionTitle id="tech-title" kicker="Stack Tecnológico">
        Trabajamos con todo.
      </SectionTitle>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mt-2 mb-12">
        Combinamos las tecnologías más demandadas del mercado con procesos
        propios de ingeniería. Desde la infraestructura hasta la experiencia del
        usuario final.
      </p>

      {/* Efecto visual central: TechCloud */}
      <div className="relative z-10 mb-24">
        <TechCloud />
      </div>

      {/* Subsección: Agrupación explicativa */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 relative z-10">
        {TECH_GROUPS.map((group, i) => (
          <AnimateOnScroll key={group.title}>
            <motion.div
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,255,180,0.15)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-40`}
              ></div>
              <h3 className="relative font-semibold text-lg text-white mb-2">
                {group.title}
              </h3>
              <p className="relative text-sm text-gray-300 mb-4">
                {group.desc}
              </p>
              <div className="relative flex flex-wrap justify-center gap-2 text-xs text-gray-400">
                {group.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Nota final */}
      <p className="text-center text-xs text-gray-500 mt-16 tracking-wide">
        *Estas tecnologías se adaptan a cada proyecto, garantizando estabilidad,
        rendimiento y escalabilidad.
      </p>
    </section>
  );
}
