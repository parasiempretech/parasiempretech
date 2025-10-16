// src/components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Para detectar la ruta activa

// --- Colores de marca ---
const VERDE = "#10B981";
const CELESTE = "#6EE7F9";

// --- Componente del logo ---
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

// --- Navbar principal ---
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Detecta la página actual

  // --- Links de navegación ---
  const navLinks = [
    { href: "/servicios", label: "Servicios" },
    { href: "/proceso", label: "Proceso" },
    { href: "/tecnologias", label: "Tecnologías" },
    { href: "/industrias", label: "Industrias" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* --- Navegación Desktop --- */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white border-b-2 border-emerald-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            className="ml-3 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500/20 to-sky-500/20 px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105"
          >
            Contacto
          </Link>
        </nav>

        {/* --- Botón de menú móvil --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {isMobileMenuOpen ? (
              // Icono "Cerrar"
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
              // Icono "Hamburguesa"
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

      {/* --- Menú móvil desplegable --- */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl">
          <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-white bg-emerald-500/10"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 block rounded-md bg-gradient-to-r from-emerald-500/20 to-sky-500/20 px-3 py-3 text-center text-base font-medium text-white"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
