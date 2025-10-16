// src/sections/FAQ/FAQ.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { FAQ_ITEMS } from "./faq.data";
import { useModal } from "@/context/ModalContext";

// -------------------------------------------------------------
// SECCIÓN: Preguntas Frecuentes
// -------------------------------------------------------------
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { openModal } = useModal();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative container mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* --- Fondo visual elegante --- */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/10 via-[#39ff14]/10 to-[#ff00cc]/10 blur-3xl opacity-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1.2 }}
      />

      {/* --- Título principal --- */}
      <SectionTitle id="faq-title" kicker="Preguntas frecuentes">
        Todo lo que querés saber
      </SectionTitle>

      {/* --- Acordeón principal --- */}
      <div className="relative z-10 mt-14 space-y-5">
        {FAQ_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            layout
            className={`group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md
              shadow-[0_0_25px_rgba(0,255,180,0.08)] hover:shadow-[0_0_45px_rgba(0,255,180,0.25)]
              transition-all duration-300 overflow-hidden`}
          >
            {/* --- Pregunta --- */}
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-7 py-6 text-left"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl select-none">{item.emoji}</span>
                <h3
                  className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                    openIndex === index
                      ? "text-[#39ff14]"
                      : "text-[#6EE7F9] group-hover:text-[#39ff14]"
                  }`}
                >
                  {item.question}
                </h3>
              </div>

              {/* --- Ícono (+ / abierto) --- */}
              <motion.span
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-3xl text-[#39ff14] select-none font-light"
              >
                +
              </motion.span>
            </button>

            {/* --- Respuesta --- */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="px-7 pb-6"
                >
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* --- CTA de contacto premium --- */}
      <motion.div
        className="relative z-10 text-center mt-16"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h4 className="text-lg font-semibold text-white mb-2">
          ¿Todavía tenés dudas?
        </h4>
        <p className="text-gray-400 text-sm max-w-lg mx-auto mb-6">
          Nuestro equipo responde personalmente cada consulta para asesorarte
          con claridad y confianza.
        </p>

        <motion.button
          onClick={openModal}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(57,255,20,0.4)",
          }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 rounded-full bg-[#39ff14]/10 border border-[#39ff14]/40
          px-6 py-3 font-medium text-[#39ff14] hover:bg-[#39ff14]/20 transition-all duration-300"
        >
          💬 Escribinos cuando quieras
        </motion.button>
      </motion.div>
    </section>
  );
}
