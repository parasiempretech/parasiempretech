// src/sections/Tecnologias/Tecnologias.tsx
"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import TechCloud from "@/components/sections/TechCloud";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";

const TECH_GROUPS = [
  {
    title: "Landing Pages y Sitios Web",
    desc: `Una landing page es una página pensada para lograr una acción concreta: que la gente te contacte, te compre o se interese en lo que hacés.
    Es como tu carta de presentación digital. En ParaSiempreTech diseñamos estas páginas para que sean rápidas, lindas y funcionales.
    Usamos herramientas modernas como React, Next.js y Tailwind CSS, que permiten que la web se vea impecable en cualquier dispositivo y cargue en segundos.
    También diseñamos la experiencia visual con Figma, cuidando los detalles de color, tipografía y estructura.
    Es ideal para profesionales, negocios o marcas personales que quieren mostrarse de forma seria y atractiva.`,
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
    title: "Aplicaciones y Software a Medida",
    desc: `Hay empresas que necesitan más que una web: necesitan una herramienta que se adapte a su forma de trabajar.
    Ahí entran los desarrollos a medida. Creamos sistemas internos, apps web o plataformas completas para gestionar turnos, ventas, clientes o stock.
    Todo se construye desde cero, pensado para tus procesos.
    Usamos Node.js y Express (el “motor” del sistema), Prisma y PostgreSQL (para almacenar datos de forma segura) y MongoDB o Firebase cuando se busca flexibilidad y velocidad.
    En palabras simples: hacemos que tu negocio trabaje mejor, con menos errores y más organización.`,
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
    title: "Análisis de Datos y Tableros Visuales",
    desc: `Si tenés mucha información (ventas, consultas, visitas, reservas), te ayudamos a entenderla y aprovecharla.
    Creamos tableros donde podés ver todo de forma clara: cuántos clientes entran, de dónde vienen, qué producto funciona mejor.
    Usamos Python y herramientas como Power BI o Chart.js para transformar los números en gráficos fáciles de leer.
    Así podés tomar decisiones con base real, no con intuición. Ideal para empresas que quieren medir resultados y mejorar constantemente.`,
    techs: ["Python", "PostgreSQL", "Power BI", "Chart.js", "Prisma"],
    gradient: "from-amber-400/20 via-transparent to-transparent",
  },
  {
    title: "Infraestructura y Escalabilidad",
    desc: `De nada sirve tener un gran sitio si no funciona cuando lo necesitan.
    Nosotros nos encargamos de que esté siempre online, sin caídas ni demoras.
    Configuramos los servidores, la seguridad y los backups para que todo esté protegido y disponible las 24 horas.
    Usamos tecnologías como Docker y Kubernetes (que ayudan a organizar los sistemas), y plataformas como Vercel y AWS (que permiten publicar y escalar sin complicaciones).
    Todo esto se traduce en tranquilidad: tu proyecto está seguro, rápido y preparado para crecer.`,
    techs: ["Docker", "Kubernetes", "Vercel", "AWS", "GitHub", "GitLab"],
    gradient: "from-fuchsia-400/20 via-transparent to-transparent",
  },
  {
    title: "Experiencia del Usuario y Animaciones",
    desc: `En Internet, los detalles visuales marcan la diferencia.
    Cuando una página se siente fluida, cuando un botón reacciona al pasar el mouse o una imagen entra con movimiento suave, el usuario se queda más tiempo y confía más.
    Por eso, cuidamos la interacción y los efectos visuales.
    Usamos Framer Motion, AOS y Lottie para crear animaciones ligeras y profesionales.
    No se trata solo de “decorar”, sino de que todo tenga un sentido: guiar la atención y reforzar la identidad de tu marca.`,
    techs: ["Framer Motion", "AOS", "Lottie", "Optimización UX/UI"],
    gradient: "from-purple-400/20 via-transparent to-transparent",
  },
  {
    title: "Mantenimiento y Crecimiento",
    desc: `Después del lanzamiento, seguimos acompañando a cada cliente.
    Revisamos estadísticas, corregimos detalles, mejoramos velocidad y actualizamos tecnologías para que todo siga funcionando perfecto.
    Además, aplicamos estrategias de posicionamiento (SEO) y optimización de rendimiento.
    Así, tu proyecto no se queda quieto: evoluciona y crece junto a vos.`,
    techs: [
      "SEO",
      "Analytics",
      "Rendimiento Web",
      "Optimizaciones UX",
      "Monitoreo Web",
    ],
    gradient: "from-green-400/20 via-transparent to-transparent",
  },
];

export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tech-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Fondo con efecto glow */}
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

      <p className="text-center text-gray-400 max-w-3xl mx-auto mt-2 mb-12">
        En ParaSiempreTech usamos herramientas modernas, pero lo más importante
        es cómo las aplicamos. Queremos que entiendas qué hace cada una, y por
        qué elegimos la mejor combinación para tu proyecto.
      </p>

      {/* Nube visual de íconos */}
      <div className="relative z-10 mb-24">
        <TechCloud />
      </div>

      {/* Bloques explicativos */}
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

              <h3 className="relative font-semibold text-lg text-white mb-3">
                {group.title}
              </h3>
              <p className="relative text-sm text-gray-300 mb-5 leading-relaxed">
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
        *Cada proyecto se diseña con una combinación distinta de herramientas
        según sus necesidades, objetivos y público.
      </p>
    </section>
  );
}
