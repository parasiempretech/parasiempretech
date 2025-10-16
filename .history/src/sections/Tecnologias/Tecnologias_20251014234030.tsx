// src/sections/Tecnologias/Tecnologias.tsx
"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import TechCloud from "@/components/sections/TechCloud";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";

const TECH_GROUPS = [
  {
    title: "Landing Pages y Sitios Web",
    desc: `Creamos páginas pensadas para captar atención y convertir visitas en contactos reales.
    Usamos tecnologías modernas como React, Next.js y Tailwind para lograr velocidad, estilo y resultados.
    Las landing pages son ideales para presentar servicios, campañas o marcas personales con una estética profesional.`,
    techs: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Figma"],
    gradient: "from-cyan-400/20 via-transparent to-transparent",
  },
  {
    title: "Aplicaciones y Software a Medida",
    desc: `Desarrollamos sistemas internos, apps web o plataformas completas según las necesidades de cada negocio.
    Utilizamos Node.js, Prisma y PostgreSQL para asegurar estabilidad, integraciones limpias y una base sólida para crecer.
    Ideal para procesos de gestión, turnos, control o administración.`,
    techs: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
    gradient: "from-emerald-400/20 via-transparent to-transparent",
  },
  {
    title: "Dashboards y Análisis de Datos",
    desc: `Convertimos tus datos en decisiones. Creamos tableros visuales con métricas clave para entender el rendimiento de tu negocio.
    Con Python y herramientas de visualización, transformamos la información en algo claro, útil y fácil de leer.`,
    techs: ["Python", "PostgreSQL", "Power BI", "Chart.js", "Prisma"],
    gradient: "from-amber-400/20 via-transparent to-transparent",
  },
  {
    title: "Infraestructura y Escalabilidad",
    desc: `Nos ocupamos de que tu sitio o sistema funcione las 24 hs, sin caídas ni demoras.
    Configuramos entornos seguros, con servidores optimizados y backups automáticos, usando Docker, Vercel y AWS.
    Ideal para proyectos que crecen rápido y necesitan rendimiento real.`,
    techs: ["Docker", "Kubernetes", "Vercel", "AWS", "GitHub", "GitLab"],
    gradient: "from-fuchsia-400/20 via-transparent to-transparent",
  },
  {
    title: "Experiencia del Usuario y Animaciones",
    desc: `Cada interacción cuenta. Aplicamos animaciones fluidas, efectos visuales y microinteracciones que hacen más atractiva la experiencia.
    Esto mejora la retención del usuario y refuerza la identidad visual de tu marca.`,
    techs: ["Framer Motion", "AOS", "Lottie", "Optimización UX/UI"],
    gradient: "from-purple-400/20 via-transparent to-transparent",
  },
];

export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tech-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Fondo con glow suave */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 to-fuchsia-600 opacity-[0.07] blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.07 }}
        transition={{ duration: 1 }}
      />

      {/* Título */}
      <SectionTitle id="tech-title" kicker="Tecnología con propósito">
        Cómo construimos cada proyecto
      </SectionTitle>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mt-2 mb-12">
        Cada herramienta cumple un rol dentro de un proceso claro. No solo
        usamos tecnología moderna: la aplicamos de forma estratégica para que
        cada desarrollo sea más rápido, más estable y más rentable.
      </p>

      {/* Nube de íconos animados */}
      <div className="relative z-10 mb-24">
        <TechCloud />
      </div>

      {/* Grupos explicativos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 relative z-10">
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
              <p className="relative text-sm text-gray-300 mb-4 leading-relaxed">
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

      <p className="text-center text-xs text-gray-500 mt-16 tracking-wide">
        *Estas tecnologías se adaptan a cada servicio: desde una landing
        profesional hasta un sistema completo.
      </p>
    </section>
  );
}
