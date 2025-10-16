// src/sections/Tecnologias/Tecnologias.tsx

"use client";

import { motion, useMotionValue } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import TechCloud from "@/components/sections/TechCloud";
import { useState } from "react";

// --- Tipos de Componentes ---
type TechGroup = {
  title: string;
  simpleDesc: string; // Explicación fácil
  keyBenefit: string; // Palabra clave grande y llamativa
  example: string; // Ejemplo concreto (Profundidad)
  techs: string; // Tecnologías encerradas en paréntesis
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

// --- Contenido de la Sección (Data Simplificada y Contextualizada) ---
const TECH_GROUPS: TechGroup[] = [
  {
    title: "🌐 Tu Negocio en Internet (Frente de Tienda)",
    simpleDesc: `Creamos páginas web y tiendas online que se ven increíbles en cualquier celular y que cargan al instante. Es como tener tu local abierto las 24 horas.`,
    keyBenefit: "VELOCIDAD",
    example:
      "Ej. **Un Fotógrafo** 📸 necesita una web que muestre sus fotos en máxima calidad sin que la gente espere. Nuestro código lo hace posible.",
    techs: "(React, Next.js, Tailwind CSS, Diseño UI/UX con Figma)",
    gradient: "from-cyan-400/30 via-transparent to-transparent",
    shadowColor: "shadow-cyan-500/30",
  },
  {
    title: "🛠️ Herramientas a Medida (La Oficina Digital)",
    simpleDesc: `Hacemos programas internos que solo tu empresa usa. Sistemas para tomar turnos, organizar ventas, o manejar el stock. Hacemos que la oficina funcione sola.`,
    keyBenefit: "CONTROL",
    example:
      "Ej. Una **Clínica Veterinaria** 🐶 obtiene un sistema que asigna turnos automáticamente y recuerda vacunas a sus clientes por WhatsApp.",
    techs: "(Node.js, Express, PostgreSQL, Prisma)",
    gradient: "from-emerald-400/30 via-transparent to-transparent",
    shadowColor: "shadow-emerald-500/30",
  },
  {
    title: "📊 Saber Dónde Invertir (La Brújula de Datos)",
    simpleDesc: `Si tienes muchos datos (cuánta gente te visita, qué productos se venden), los transformamos en gráficos sencillos. Te mostramos la respuesta para que no adivines.`,
    keyBenefit: "CERTEZA",
    example:
      "Ej. Un **Gerente de Marketing** 📈 ve qué ciudades responden mejor a su publicidad para invertir solo donde gana más dinero.",
    techs: "(Python, Power BI, Chart.js, SQL)",
    gradient: "from-amber-400/30 via-transparent to-transparent",
    shadowColor: "shadow-amber-500/30",
  },
  {
    title: "☁️ Estabilidad y Crecimiento (El Edificio Firme)",
    simpleDesc: `Nos aseguramos de que tu programa o web nunca se caiga, aunque 10.000 personas entren a la vez. Es como construir un edificio con cimientos antisísmicos.`,
    keyBenefit: "ESCALA",
    example:
      "Ej. Una **Empresa de Eventos** 🎤 lanza la venta de 50.000 entradas sin problemas, porque su plataforma soporta picos de tráfico enormes.",
    techs: "(Docker, Kubernetes, AWS, Vercel)",
    gradient: "from-fuchsia-400/30 via-transparent to-transparent",
    shadowColor: "shadow-fuchsia-500/30",
  },
  {
    title: "✨ Experiencia Fluida (El 'Se Siente Bien')",
    simpleDesc: `Hacemos que usar tu web sea un placer. Cuando un botón se mueve suave o la página te guía sin frustrarte, el usuario se queda y confía.`,
    keyBenefit: "CONFIANZA",
    example:
      "Ej. Un **Profesor Online** 👨‍🏫 tiene una plataforma donde los alumnos encuentran sus clases y pagan fácilmente, sin llamar para pedir ayuda.",
    techs: "(Framer Motion, Optimización UX/UI, Lottie)",
    gradient: "from-purple-400/30 via-transparent to-transparent",
    shadowColor: "shadow-purple-500/30",
  },
  {
    title: "🔄 Soporte y Evolución (Tu Mantenimiento Anual)",
    simpleDesc: `No te dejamos solo después de lanzar. Arreglamos errores, actualizamos el código y mejoramos tu posición en Google (SEO) para que sigas creciendo.`,
    keyBenefit: "FUTURO",
    example:
      "Ej. Un **Abogado** ⚖️ sigue apareciendo en la primera página de Google gracias al mantenimiento técnico y la estrategia SEO continua.",
    techs: "(SEO Técnico, Google Analytics, Monitoreo 24/7)",
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
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };
  const wordVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
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

      {/* Nube visual de íconos (TechCloud) */}
      <div className="relative z-10 mb-24">
        <TechCloud />
      </div>

      {/* Bloques explicativos: TRUCO DE DISEÑO ASIMÉTRICO */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 relative z-10">
        {TECH_GROUPS.map((group, i) => {
          // Color dinámico para las etiquetas
          const techLabelColorClass = group.shadowColor
            .replace("shadow-", "text-")
            .replace("/30", "/60");
          const techLabelHoverClass = group.shadowColor
            .replace("shadow-", "bg-")
            .replace("/30", "/10");

          return (
            <motion.div
              key={group.title}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden h-full flex flex-col justify-between
                       transition-all duration-300 transform
                       ${i === 0 ? "lg:col-span-2" : "lg:col-span-1"}
                       ${
                         hoveredIndex === i
                           ? `scale-[1.03] shadow-2xl ${group.shadowColor.replace(
                               "/30",
                               "/70"
                             )}`
                           : ""
                       }`}
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

              {/* FONDO INTERNO CON MICRO-PARALLAX */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-20 transition-opacity duration-500`}
                style={{ x: mouseX, y: mouseY, scale: 1.05 }}
              ></motion.div>

              <div className="relative h-full flex flex-col justify-between">
                {/* 1. TÍTULO Y DESCRIPCIÓN SIMPLE */}
                <div className="mb-4">
                  <h3
                    className={`font-extrabold text-white mb-3 text-left ${
                      i === 0 ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {group.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-left text-base">
                    {group.simpleDesc}
                  </p>
                </div>

                {/* 2. PALABRA CLAVE GRANDE (BENEFICIO VISUAL) */}
                <h4
                  className={`font-extrabold text-7xl text-white/5 text-center mt-auto mb-4
                                ${
                                  i === 0 ? "text-9xl" : "text-7xl"
                                } transition-all duration-300`}
                >
                  {group.keyBenefit}
                </h4>

                {/* 3. EJEMPLO CLARO Y CONCRETO */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 mb-4">
                  <p className="text-sm text-gray-300 font-medium leading-relaxed">
                    {group.example}
                  </p>
                </div>

                {/* 4. TECNOLOGÍAS (EN PARÉNTESIS SUTILES) */}
                <div
                  className="mt-auto text-xs text-gray-500 text-center italic"
                  aria-label={`Tecnologías usadas: ${group.techs}`}
                >
                  {group.techs}
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
