"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";

// --- Tipos de Datos ---
type FaqItem = {
  emoji: string;
  question: string;
  answer: string;
};

// --- Contenido FAQ (en lenguaje claro y humano) ---
const FAQ_ITEMS: FaqItem[] = [
  {
    emoji: "⏰",
    question: "¿Cuánto tarda un proyecto?",
    answer:
      "Depende del tipo de trabajo. Una página simple puede estar lista en pocos días, un sitio completo en 2 a 4 semanas. Siempre te damos un calendario real desde el inicio.",
  },
  {
    emoji: "💬",
    question: "¿Podemos hablar antes de empezar?",
    answer:
      "Claro que sí. Siempre hacemos una charla inicial gratuita para entender tus ideas, tus objetivos y definir juntos el mejor camino.",
  },
  {
    emoji: "🎨",
    question: "¿Hacen diseños desde cero?",
    answer:
      "Sí. Cada diseño es 100 % personalizado para tu marca. Nada de plantillas genéricas: creamos algo único que te represente.",
  },
  {
    emoji: "🔒",
    question: "¿Ofrecen soporte después de entregar el sitio?",
    answer:
      "Sí. Te acompañamos con mantenimiento, mejoras, actualizaciones y soporte técnico. Queremos relaciones a largo plazo.",
  },
  {
    emoji: "💡",
    question: "¿Qué necesito tener preparado?",
    answer:
      "Solo tus ideas o referencias. Si tenés logo, redes o fotos, genial. Si no, te guiamos paso a paso para que no te falte nada.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative container mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Fondo decorativo */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/10 via-[#39ff14]/10 to-[#ff00cc]/10 blur-3xl opacity-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />

      <SectionTitle id="faq-title" kicker="Preguntas frecuentes">
        Todo lo que querés saber
      </SectionTitle>

      <div className="relative z-10 mt-12 space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            layout
            className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_25px_rgba(0,255,180,0.08)] hover:shadow-[0_0_35px_rgba(0,255,180,0.25)] transition-all duration-300"
          >
            {/* Pregunta */}
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.emoji}</span>
                <h3 className="text-lg font-semibold text-[#6EE7F9]">
                  {item.question}
                </h3>
              </div>
              <motion.span
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-2xl text-[#39ff14] select-none"
              >
                +
              </motion.span>
            </button>

            {/* Respuesta con animación */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <p className="px-6 pb-6 text-sm text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Pie de contacto */}
      <motion.p
        className="text-center text-sm text-foreground/60 mt-12 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        ¿Tenés otra pregunta?{" "}
        <span className="text-[#39ff14] font-medium">
          Escribinos cuando quieras
        </span>
        . Te respondemos rápido y con gusto.
      </motion.p>
    </section>
  );
}
