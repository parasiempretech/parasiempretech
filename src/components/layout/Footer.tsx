// src/components/layout/Footer.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

// --- Colores de marca ---
const VERDE = "#10B981";
const CELESTE = "#6EE7F9";

// --- Logo principal ---
function Logo() {
  return (
    <Link href="/" aria-label="Volver al inicio - ParaSiempreTech">
      <div className="font-jetbrains-mono text-lg sm:text-xl font-bold tracking-tighter whitespace-nowrap select-none">
        <span style={{ color: VERDE }}>&lt;</span>
        <span style={{ color: CELESTE }}>para</span>
        <span>siempre</span>
        <span style={{ color: CELESTE }}>tech</span>
        <span style={{ color: VERDE }}> /&gt;</span>
      </div>
    </Link>
  );
}

// --- Footer principal ---
export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0A0A0A]/90 backdrop-blur-xl pt-12 pb-8 relative overflow-hidden">
      {/* Fondo visual dinámico */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/10 via-[#39ff14]/10 to-[#ff00cc]/10 blur-3xl opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* --- Columna izquierda: logo + datos de contacto --- */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <Logo />

          {/* --- Email --- */}
          <motion.a
            href="mailto:contacto@parasiempretech.com"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#39ff14] transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
          >
            <FiMail className="text-[#39ff14] text-lg" />
            contacto@parasiempretech.com
          </motion.a>

          {/* --- WhatsApp --- */}
          <motion.a
            href="https://wa.me/5493884883844"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#25D366] transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
          >
            <FaWhatsapp className="text-[#25D366] text-lg" />
            +54 9 388 488 3844
          </motion.a>
        </div>

        {/* --- Navegación del sitio --- */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
          <Link
            href="/servicios"
            className="hover:text-white transition-colors duration-200"
          >
            Servicios
          </Link>
          <Link
            href="/proceso"
            className="hover:text-white transition-colors duration-200"
          >
            Proceso
          </Link>
          <Link
            href="/tecnologias"
            className="hover:text-white transition-colors duration-200"
          >
            Tecnologías
          </Link>
          <Link
            href="/industrias"
            className="hover:text-white transition-colors duration-200"
          >
            Industrias
          </Link>
          <Link
            href="/faq"
            className="hover:text-white transition-colors duration-200"
          >
            Preguntas frecuentes
          </Link>
          <Link
            href="/contacto"
            className="hover:text-white transition-colors duration-200"
          >
            Contacto
          </Link>
        </nav>

        {/* --- Derechos --- */}
        <div className="text-center md:text-right">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Para Siempre Tech. Todos los derechos
            reservados.
          </p>
          <p className="text-[11px] text-gray-600 mt-1">
            Desarrollado con pasión 💻 en Córdoba, Argentina.
          </p>
        </div>
      </div>

      {/* Línea inferior sutil (detalle visual) */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#39ff14]/30 to-transparent" />
    </footer>
  );
}
