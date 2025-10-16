// src/components/footer/Footer.tsx

import Link from "next/link";

// --- Constantes de Colores (opcional, para mantener consistencia) ---
const VERDE = "#10B981";
const CELESTE = "#6EE7F9";

// --- LogoLockup (versión horizontal para el footer) ---
function LogoHorizontal() {
  return (
    <div
      aria-label="Logo ParaSiempreTech"
      className="font-jetbrains-mono text-lg font-bold"
    >
      <span style={{ color: VERDE }}>&lt;</span>
      <span style={{ color: CELESTE }}>para</span>
      <span>siempre</span>
      <span style={{ color: CELESTE }}>tech</span>
      <span style={{ color: VERDE }}> /&gt;</span>
    </div>
  );
}

// --- Componente Principal del Footer ---
export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0A0A0A]">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        {/* Columna 1: Logo y Copyright */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <LogoHorizontal />
          <p className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} ParaSiempreTech.
            <br />
            Soluciones digitales robustas.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="mb-2 font-bold uppercase tracking-wider text-white">
            Navegación
          </h3>
          <Link
            href="/#servicios"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Servicios
          </Link>
          <Link
            href="/#proceso"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Nuestro Proceso
          </Link>
          <Link
            href="/#faq"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Preguntas Frecuentes
          </Link>
        </div>

        {/* Columna 3: Legal y Contacto */}
        <div className="flex flex-col items-center gap-2 text-center md:items-end md:text-right">
          <h3 className="mb-2 font-bold uppercase tracking-wider text-white">
            Contacto y Legal
          </h3>
          <Link
            href="/contacto"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Contacto
          </Link>
          <Link
            href="/privacidad"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Política de Privacidad
          </Link>
          <Link
            href="/terminos"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Términos de Servicio
          </Link>
        </div>
      </div>
    </footer>
  );
}
