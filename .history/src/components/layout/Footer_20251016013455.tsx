// src/components/layout/Footer.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";

// --- Colores de marca ---
const VERDE = "#10B981";
const CELESTE = "#6EE7F9";

// --- Logo (idéntico al Navbar) ---
function Logo() {
  return (
    <Link href="/" aria-label="Volver al inicio - ParaSiempreTech">
      <div className="font-jetbrains-mono text-lg sm:text-xl font-bold tracking-tighter whitespace-nowrap">
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
    <footer className="w-full border-t border-white/10 bg-[#0A0A0A]/90 backdrop-blur-lg pt-12 pb-8 relative overflow-hidden">
      {/* Fondo visual */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00bfff]/10 via-[#39ff14]/10 to-[#ff00cc]/10 blur-3xl opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* --- Columna izquierda: logo + contacto --- */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <Logo />

          {/* --- Mail --- */}
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
            href="https://wa.me/5493510000000" // ⚠️ Reemplazá por tu número real con formato internacional
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#6EE7F9] transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
          >
            <FiPhone className="text-[#6EE7F9] text-lg" />
            +54 9 351 000-0000
          </motion.a>
        </div>

        {/* --- Navegación --- */}
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
        <p className="text-xs text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Para Siempre Tech. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
