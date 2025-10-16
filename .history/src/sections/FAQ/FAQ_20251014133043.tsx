// src/sections/FAQ/FAQ.tsx

"use client"; // Necesario para las animaciones

import { motion } from "framer-motion"; // Importamos motion
import SectionTitle from "@/components/common/SectionTitle";
import DraggableCarousel from "@/components/sections/CarouselSection/DraggableCarousel"; // <-- RUTA CORREGIDA

// --- Tipos de Datos y Contenido para FAQ ---
type FaqItemProps = {
  emoji: string;
  summary: string;
  children: React.ReactNode;
};

const FAQ_ITEMS: FaqItemProps[] = [
  {
    emoji: "⏰",
    summary: "¿Qué plazos manejan?",
    children:
      "Depende del alcance. Una landing suele estar en ~1 semana. Sitios corporativos: 2–4 semanas. Sistemas a medida: según módulos y validaciones, comenzamos por un MVP.",
  },
  {
    emoji: "🔗",
    summary: "¿Trabajan con integraciones?",
    children:
      "Sí. CRMs, ERPs, mensajería, pagos, analítica y servicios en la nube. Si existe una API, podemos integrarnos.",
  },
  {
    emoji: "🛠️",
    summary: "¿Ofrecen mantenimiento?",
    children:
      "Opcional. Planes de soporte, seguridad y mejoras evolutivas. Preferimos relaciones de largo plazo.",
  },
  {
    emoji: "📊",
    summary: "¿Qué incluyen los tableros de datos?",
    children:
      "Métricas acordadas, visualizaciones legibles y una guía breve para el equipo. Enfocados en claridad y utilidad.",
  },
];

// --- Componente Principal de la Sección ---
export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionTitle id="faq-title" kicker="Preguntas Frecuentes">
        Dudas Comunes
      </SectionTitle>

      {/* Reemplazamos AnimateOnScroll por un motion.div que envuelve el carrusel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }} // Pequeño delay para que aparezca después del título
        viewport={{ once: true }}
      >
        <DraggableCarousel>
          {/* Duplicamos los items para un efecto de carrusel 'infinito' */}
          {[...FAQ_ITEMS, ...FAQ_ITEMS].map((item, index) => (
            <div
              key={`${item.summary}-${index}`}
              className="flex w-80 flex-none flex-col rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <span className="text-3xl">{item.emoji}</span>
              <h3
                className="mt-4 font-bold text-white"
                style={{ color: "#6EE7F9" }}
              >
                {item.summary}
              </h3>
              <p className="mt-2 text-sm text-gray-300">{item.children}</p>
            </div>
          ))}
        </DraggableCarousel>
      </motion.div>
    </section>
  );
}
