// src/components/layout/Footer.tsx

"use client";

import Link from "next/link";

// --- Colores de marca (mismos que el Navbar) ---
const VERDE = "#10B981";
const CELESTE = "#6EE7F9";

// --- Logo reutilizado (idéntico al Navbar) ---
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
    <footer className="w-full border-t border-white/10 bg-[#0A0A0A]/90 backdrop-blur-lg py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* --- Logo --- */}
        <Logo />

        {/* --- Navegación (idéntica al Navbar) --- */}
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
        </nav>

        {/* --- Derechos de autor --- */}
        <p className="text-xs text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Para Siempre Tech. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
