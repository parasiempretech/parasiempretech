"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  // Maneja cambios en los campos
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envía el formulario por WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      alert("Por favor completá tu nombre y mensaje antes de enviar 💬");
      return;
    }

    setIsSending(true);

    const { name, email, message } = formData;
    const phoneNumber = "5493884883844"; // ✅ Tu número

    const text = `👋 Hola! Soy ${name}.
📧 Email: ${email || "no especificado"}
💬 Mensaje: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    // Abre WhatsApp
    window.open(url, "_blank");

    setTimeout(() => setIsSending(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="relative max-w-xl mx-auto"
    >
      <p className="text-center text-white/80 mb-6 text-lg leading-relaxed">
        Te respondemos personalmente en menos de 24 hs 🚀 Sin bots, sin
        plantillas. Soluciones reales.
      </p>

      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-xl bg-black/40 border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.1)] backdrop-blur-md space-y-5"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white/90 mb-2"
          >
            Nombre completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoFocus
            autoComplete="off"
            placeholder="Ej: Juan Pérez"
            onChange={handleChange}
            className="form-input w-full px-4 py-3 rounded-lg bg-black/30 border border-white/20 text-white/90 placeholder-white/40 focus:border-[#39ff14] focus:ring-2 focus:ring-[#00bfff]/40 transition"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white/90 mb-2"
          >
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Ej: contacto@empresa.com"
            onChange={handleChange}
            className="form-input w-full px-4 py-3 rounded-lg bg-black/30 border border-white/20 text-white/90 placeholder-white/40 focus:border-[#39ff14] focus:ring-2 focus:ring-[#00bfff]/40 transition"
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
            required
            placeholder="Contame qué idea querés hacer realidad 💡"
            onChange={handleChange}
            className="form-input w-full px-4 py-3 rounded-lg bg-black/30 border border-white/20 text-white/90 placeholder-white/40 focus:border-[#39ff14] focus:ring-2 focus:ring-[#00bfff]/40 transition"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 25px #39ff14aa",
          }}
          whileTap={{ scale: 0.98 }}
          disabled={isSending}
          className={`w-full py-3 rounded-lg text-black font-semibold text-lg transition-all duration-300 ${
            isSending
              ? "bg-gradient-to-br from-gray-500 to-gray-400 cursor-not-allowed"
              : "bg-gradient-to-br from-[#39ff14] to-[#00bfff] hover:opacity-90 shadow-[0_0_15px_rgba(57,255,20,0.3)]"
          }`}
        >
          {isSending ? "Enviando..." : "Enviar por WhatsApp 💬"}
        </motion.button>
      </form>

      <p className="text-sm text-center mt-4 text-white/70">
        *Tu información es 100 % confidencial.
      </p>
    </motion.div>
  );
}
