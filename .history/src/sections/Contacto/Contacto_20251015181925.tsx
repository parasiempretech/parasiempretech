"use client";

import SectionTitle from "@/components/common/SectionTitle";
import { motion } from "framer-motion";
import React, { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true as const, amount: 0.3 },
};

export default function Contacto() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const buttonText =
    status === "loading"
      ? "Enviando..."
      : status === "success"
      ? "¡Mensaje Enviado! ✅"
      : "Enviar Mensaje";

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[clamp(4rem,8vw,8rem)] overflow-hidden"
    >
      {/* Fondo difuminado */}
      <motion.div
        className="absolute inset-0 opacity-[0.12] bg-gradient-to-br from-[#39ff14] via-[#00bfff] to-[#ff00cc] blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.12 }}
        transition={{ duration: 1 }}
      />

      <SectionTitle id="contacto-title" kicker="Hablemos de estrategia">
        Enviá tu consulta
      </SectionTitle>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-[min(90%,600px)]"
        {...fadeIn}
      >
        <p className="text-[clamp(1rem,2.2vw,1.25rem)] text-foreground/85 leading-relaxed mb-8 text-center">
          Dejanos tu mensaje y te responderemos en menos de 24 horas. Iniciemos
          la conversación.
        </p>

        {/* --- FORMULARIO --- */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-6 sm:p-8 rounded-xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-lg"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/90 mb-2"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/20 text-white/90 placeholder-white/40 focus:border-emerald-400 focus:ring focus:ring-emerald-400/30 transition duration-200 text-[clamp(0.9rem,1.8vw,1rem)]"
              disabled={status === "loading"}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/90 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/20 text-white/90 placeholder-white/40 focus:border-emerald-400 focus:ring focus:ring-emerald-400/30 transition duration-200 text-[clamp(0.9rem,1.8vw,1rem)]"
              disabled={status === "loading"}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white/90 mb-2"
            >
              Tu mensaje o proyecto
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/20 text-white/90 placeholder-white/40 focus:border-emerald-400 focus:ring focus:ring-emerald-400/30 transition duration-200 text-[clamp(0.9rem,1.8vw,1rem)]"
              disabled={status === "loading"}
            />
          </div>

          {/* Mensajes de estado */}
          {status === "success" && (
            <p className="text-emerald-400 font-semibold text-center pt-2">
              ¡Gracias por tu mensaje! Hablamos pronto.
            </p>
          )}
          {status === "error" && (
            <p className="text-rose-400 font-semibold text-center pt-2">
              Ocurrió un error. Intentá de nuevo o contactanos directamente.
            </p>
          )}

          {/* Botón de Enviar */}
          <motion.button
            type="submit"
            className={`w-full px-10 py-3 text-[clamp(1rem,2vw,1.1rem)] font-bold rounded-lg text-white bg-emerald-500/80 hover:bg-emerald-500 transition-all duration-300 shadow-[0_0_10px_rgba(57,255,20,0.3)]
            ${
              status === "loading"
                ? "opacity-60 cursor-not-allowed"
                : "opacity-100"
            }`}
            disabled={status === "loading" || status === "success"}
            whileHover={status === "idle" ? { scale: 1.02 } : {}}
          >
            {buttonText}
          </motion.button>
        </form>

        <p className="text-sm text-foreground/60 mt-4 text-center">
          *Toda tu información es confidencial.
        </p>
      </motion.div>
    </section>
  );
}
