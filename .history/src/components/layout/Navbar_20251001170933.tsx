// src/components/navigation/Navbar.tsx

"use client"; // Directiva necesaria para usar hooks como useState en Next.js App Router

import { useState } from "react";
import Link from "next/link";

// --- Constantes de Colores para consistencia ---
const VERDE = "#10B981";
const CELESTE = "#6EE7F9";

// --- Componente del Logo (reutilizable) ---
function Logo() {
  return (
    <Link href="/" aria-label="Volver al inicio - ParaSiempreTech">
      <div className="font-jetbrains-mono text-xl font-bold tracking-tighter">
        <span style={{ color: VERDE }}>&lt;</span>
        <span style={{ color: CELESTE }}>para</span>
        <span>siempre</span>
        <span style={{ color: CELESTE }}>tech</span>
        <span style={{ color: VERDE }}> /&gt;</span>
      </div>
    </Link>
  );
}

// --- Componente Principal de la Barra de Navegación ---
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#servicios", label: "Servicios" },
    { href: "/#proceso", label: "Proceso" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* --- Logo a la izquierda --- */}
        <Logo />

        {/* --- Links de Navegación para Escritorio (Desktop) --- */}
        <nav className="hidden items-center space-x-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="ml-4 inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 ease-in-out hover:scale-105"
          >
            Contacto
          </Link>
        </nav>

        {/* --- Botón de Menú para Móviles --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {isMobileMenuOpen ? (
              // Icono de "Cerrar" (X)
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Icono de "Hamburguesa"
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- Panel del Menú Móvil Desplegable --- */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 md:hidden">
          <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al hacer clic
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 block rounded-md bg-white/10 px-3 py-3 text-center text-base font-medium text-white"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
