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
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  // ✅ Enviar mensaje a WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, message } = formData;
    const phone = "3884883844"; // Tu número real
    const text = `Hola, soy ${name}.%0A%0A${message}`;
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[clamp(4rem,8vw,8rem)] overflow-hidden"
    >
      {/* Fondo con glow dinámico */}
      <motion.div
        className="absolute inset-0 opacity-[0.12] bg-gradient-to-br from-[#39ff14] via-[#00bfff] to-[#ff00cc] blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.12 }}
        transition={{ duration: 1 }}
      />

      <SectionTitle id="contacto-title" kicker="Hablemos de estrategia">
        Contactanos directamente
      </SectionTitle>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-[min(90%,600px)]"
        {...fadeIn}
      >
        <p className="text-[clamp(1rem,2.2vw,1.25rem)] text-foreground/85 leading-relaxed mb-8 text-center">
          Escribinos tu nombre y un mensaje con tu idea o proyecto. Te
          responderemos por WhatsApp en menos de 24 horas.
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
              Tu nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Ej: Juan Pérez"
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/20 text-white/90 placeholder-white/40 focus:border-emerald-400 focus:ring focus:ring-emerald-400/30 transition duration-200 text-[clamp(0.9rem,1.8vw,1rem)]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white/90 mb-2"
            >
              Contanos tu idea o proyecto
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Ej: quiero una web moderna para mi empresa de servicios..."
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/20 text-white/90 placeholder-white/40 focus:border-emerald-400 focus:ring focus:ring-emerald-400/30 transition duration-200 text-[clamp(0.9rem,1.8vw,1rem)]"
            />
          </div>

          {/* Botón de WhatsApp */}
          <motion.button
            type="submit"
            className="w-full px-10 py-3 text-lg font-bold rounded-lg text-white bg-emerald-500/80 hover:bg-emerald-500 transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.4)]"
            whileHover={{ scale: 1.03 }}
          >
            Enviar por WhatsApp 💬
          </motion.button>
        </form>

        <p className="text-sm text-foreground/60 mt-4 text-center">
          *Tu mensaje se enviará directamente a nuestro WhatsApp oficial.
        </p>

        {/* --- REDES SOCIALES --- */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-6 relative z-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent text-center">
            Seguinos en nuestras redes
          </h3>

          <div className="flex flex-wrap justify-center gap-10 mt-2">
            {/* Instagram */}
            <a
              href="https://instagram.com/parasiempretech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de ParaSiempreTech"
              className="group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-12 h-12 text-[#E1306C] group-hover:text-[#ff85b7] transition-all duration-300 group-hover:scale-125 drop-shadow-[0_0_10px_rgba(255,100,150,0.6)]"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7ZM17.75 6a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/parasiempretech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de ParaSiempreTech"
              className="group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-12 h-12 text-[#0A66C2] group-hover:text-[#5EA3F0] transition-all duration-300 group-hover:scale-125 drop-shadow-[0_0_10px_rgba(90,160,255,0.6)]"
              >
                <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.038-1.852-3.038c-1.854 0-2.137 1.445-2.137 2.94v5.667H9.01V9h3.104v1.561h.043c.433-.82 1.492-1.687 3.07-1.687c3.283 0 3.887 2.16 3.887 4.971v6.607zM5.337 7.433a1.804 1.804 0 1 1 0-3.608a1.804 1.804 0 0 1 0 3.608zM6.839 20.452H3.832V9h3.007v11.452z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ParaSiempreTech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de ParaSiempreTech"
              className="group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-12 h-12 text-gray-300 group-hover:text-white transition-all duration-300 group-hover:scale-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.235 1.84 1.235 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.76-1.604-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.47-2.382 1.235-3.222-.124-.303-.535-1.527.117-3.176 0 0 1.008-.323 3.301 1.23a11.48 11.48 0 0 1 3.003-.404c1.02.005 2.045.137 3.003.404 2.291-1.553 3.298-1.23 3.298-1.23.653 1.649.242 2.873.118 3.176.77.84 1.232 1.912 1.232 3.222 0 4.61-2.805 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/parasiempretech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter (X) de ParaSiempreTech"
              className="group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-12 h-12 text-white group-hover:text-sky-400 transition-all duration-300 group-hover:scale-125 drop-shadow-[0_0_10px_rgba(100,200,255,0.6)]"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26l8.502 11.24H16.31l-5.188-6.79l-5.93 6.79H1.885l7.73-8.85L1.5 2.25h7.086l4.713 6.173L18.244 2.25zm-1.164 17.52h1.833L7.084 4.126H5.117l11.963 15.644z" />
              </svg>
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-400 text-center max-w-md">
            Próximamente nuestro{" "}
            <span className="text-red-500 font-medium">canal de YouTube</span>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
