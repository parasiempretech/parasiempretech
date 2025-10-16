// src/components/ContactModal/ContactModal.tsx

"use client";

import { useModal } from "@/context/ModalContext";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Necesitas instalar: npm install lucide-react framer-motion

export default function ContactModal() {
  const { isModalOpen, closeModal } = useModal();

  // Si no está abierto, no se renderiza nada. Esto es lo que lo oculta.
  // Usamos AnimatePresence para gestionar la animación de salida.

  return (
    <AnimatePresence>
      {isModalOpen && (
        // Overlay Oscuro (Fondo)
        <motion.div
          key="modalOverlay"
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal} // Cierra al hacer clic fuera del formulario
        >
          {/* Contenedor del Formulario (El "Modal") */}
          <motion.div
            key="modalContent"
            className="w-full max-w-2xl bg-[#0a0a0a] rounded-xl border border-white/10 shadow-2xl p-6 md:p-10 relative"
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Importante: previene el cierre al hacer clic dentro
          >
            {/* Botón de Cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              aria-label="Cerrar formulario de contacto"
            >
              <X size={24} />
            </button>

            {/* Contenido del Formulario (Diseño basado en tu imagen) */}
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-white/5 text-emerald-400 border border-emerald-500/30 mb-4">
                Hablemos de estrategia
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Envía tu consulta
              </h2>
              <p className="text-gray-400 mt-2">
                Dejanos tu mensaje y te responderemos en menos de 24 horas.
                Iniciemos la conversación.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-sky-500 focus:border-sky-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Tu mensaje o proyecto
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn btn-ultimate-glow px-10 py-3 text-lg font-bold shadow-[0_0_25px_rgba(0,255,180,0.35)] hover:shadow-[0_0_45px_rgba(0,255,180,0.6)] transition-all duration-300"
              >
                Enviar Consulta
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
