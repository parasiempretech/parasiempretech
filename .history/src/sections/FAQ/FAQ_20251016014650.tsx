"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import { FAQ_ITEMS } from "./faq.data";

// --- Componente Principal ---
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
      {/* Fondo visual dinámico */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/10 via-[#39ff14]/10 to-[#ff00cc]/10 blur-3xl opacity-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />

      {/* Título */}
      <SectionTitle id="faq-title" kicker="Preguntas frecuentes">
        Todo lo que querés saber
      </SectionTitle>

      {/* Acordeón principal */}
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

              {/* Icono animado (+ / abierto) */}
              <motion.span
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-2xl text-[#39ff14] select-none"
              >
                +
              </motion.span>
            </button>

            {/* Respuesta animada */}
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

      {/* CTA inferior */}
      <motion.div
        className="text-center mt-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h4 className="text-white font-semibold text-lg mb-2">
          ¿Todavía tenés dudas?
        </h4>
        <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
          Nuestro equipo responde personalmente cada consulta para asesorarte
          con claridad y confianza.
        </p>

        {/* ✅ Botón que redirige a /contacto */}
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#39ff14]/10 border border-[#39ff14]/50 text-[#39ff14] rounded-full text-sm font-medium hover:bg-[#39ff14]/20 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300"
        >
          🟢 Escribinos cuando quieras
        </Link>
      </motion.div>
    </section>
  );
}
