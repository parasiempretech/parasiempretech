// src/sections/Tecnologias/Tecnologias.tsx
"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import TechCloud from "@/components/sections/TechCloud";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";

const TECH_GROUPS = [
  {
    title: "Diseño y Experiencia",
    desc: "Creamos sitios y plataformas que se sienten bien de usar. Buscamos equilibrio entre estética, velocidad y claridad.",
    techs: [
      "React",
      "Next.js",
      "Tailwind",
      "Figma",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
    gradient: "from-cyan-400/20 via-transparent to-transparent",
  },
  {
    title: "Desarrollo y Funcionalidad",
    desc: "Programamos soluciones sólidas y seguras para que tu sistema funcione sin interrupciones, todos los días.",
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
    title: "Infraestructura y Rendimiento",
    desc: "Nos ocupamos de que tu proyecto esté siempre online, rápido y preparado para crecer sin límites.",
    techs: ["Docker", "Kubernetes", "Vercel", "AWS", "GitHub", "GitLab"],
    gradient: "from-amber-400/20 via-transparent to-transparent",
  },
  {
    title: "Estrategia y Evolución",
    desc: "Acompañamos cada proyecto con análisis, mejoras continuas y una mentalidad de crecimiento constante.",
    techs: [
      "Framer Motion",
      "AOS",
      "Lottie",
      "Optimizaciones UX",
      "Monitoreo Web",
    ],
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
      {/* Fondo suave con degradado dinámico */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 to-fuchsia-600 opacity-[0.07] blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.07 }}
        transition={{ duration: 1 }}
      />

      {/* Encabezado */}
      <SectionTitle id="tech-title" kicker="Stack Tecnológico">
        Trabajamos con todo.
      </SectionTitle>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mt-2 mb-12">
        Utilizamos las mejores herramientas del mundo digital para construir
        proyectos duraderos, visualmente atractivos y fáciles de mantener. Cada
        tecnología cumple una función clave en la calidad final del producto.
      </p>

      {/* Nube visual con íconos animados */}
      <div className="relative z-10 mb-24">
        <TechCloud />
      </div>

      {/* Grupos explicativos */}
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
        *Estas tecnologías forman parte de nuestro día a día y se adaptan según
        las necesidades de cada cliente.
      </p>
    </section>
  );
}
