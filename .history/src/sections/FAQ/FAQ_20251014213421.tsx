// src/sections/FAQ/FAQ.tsx

"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import DraggableCarousel from "@/components/sections/CarouselSection/DraggableCarousel";

type FaqItemProps = {
  emoji: string;
  summary: string;
  children: React.ReactNode;
};

const FAQ_ITEMS: FaqItemProps[] = [
  {
    emoji: "⏰",
    summary: "¿Cuánto tardan en entregar un proyecto?",
    children:
      "Depende del tipo de trabajo. Una página simple puede estar lista en unos días. Un sitio completo, entre 2 y 4 semanas. Si es algo más grande o personalizado, te mostramos un cronograma claro desde el inicio.",
  },
  {
    emoji: "💬",
    summary: "¿Podemos hablar antes de empezar?",
    children:
      "Por supuesto. Siempre agendamos una charla inicial gratuita para entender tu idea, tus objetivos y qué te gustaría lograr. Desde ahí te damos una propuesta realista, sin compromiso.",
  },
  {
    emoji: "🎨",
    summary: "¿Diseñan desde cero o usan plantillas?",
    children:
      "Todo es 100% personalizado. Cada diseño y estructura se crea desde cero para reflejar tu identidad y que se destaque. Nada de plantillas genéricas.",
  },
  {
    emoji: "🔒",
    summary: "¿Qué pasa después de lanzar el sitio?",
    children:
      "Te acompañamos con soporte, actualizaciones y mejoras. Si querés, también podés contar con nosotros para mantenimiento mensual o nuevas funciones.",
  },
  {
    emoji: "💡",
    summary: "¿Qué necesito tener listo antes de empezar?",
    children:
      "Solo tus ideas, tus redes o logo si ya lo tenés. Nosotros te guiamos con todo lo demás: contenido, fotos, estructura y estrategia. Te ayudamos paso a paso.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Fondo decorativo suave */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/10 via-[#39ff14]/10 to-[#ff00cc]/10 blur-3xl opacity-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />

      <SectionTitle id="faq-title" kicker="Preguntas frecuentes">
        Todo lo que querés saber
      </SectionTitle>

      <motion.div
        className="relative z-10 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <DraggableCarousel>
          {[...FAQ_ITEMS, ...FAQ_ITEMS].map((item, index) => (
            <motion.div
              key={`${item.summary}-${index}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex w-80 flex-none flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,180,0.1)] p-6 transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,255,180,0.3)]"
            >
              <span className="text-3xl mb-2">{item.emoji}</span>
              <h3 className="text-lg font-semibold text-[#6EE7F9] mb-2">
                {item.summary}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.children}
              </p>
            </motion.div>
          ))}
        </DraggableCarousel>
      </motion.div>

      {/* Pie informativo */}
      <motion.p
        className="text-center text-sm text-foreground/60 mt-10 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Si tenés otra duda,{" "}
        <span className="text-[#39ff14] font-medium">
          escribinos cuando quieras
        </span>
        . Te respondemos rápido y sin compromiso.
      </motion.p>
    </section>
  );
}
