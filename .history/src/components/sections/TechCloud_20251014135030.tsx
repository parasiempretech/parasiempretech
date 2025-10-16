// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
// Importamos React y ReactDOM para la función de auditoría
import React from "react";
import ReactDOM from "react-dom";

import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// --- INTEGRACIÓN DE AXE-CORE (Solo en desarrollo) ---
// La auditoría se carga si no estamos en producción y si estamos en el cliente (navegador)
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  // Importación dinámica para que no afecte el proceso de compilación del servidor
  import("@axe-core/react").then((axe) => {
    // Inicializamos axe-core:
    // Los argumentos son: React, ReactDOM, y un retraso de 1000ms para el escaneo inicial
    axe.default(React, ReactDOM, 1000);
  });
}
// ---------------------------------------------------

// --- Configuración de Fuentes Optimizada ---
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "700"],
});

// --- Metadatos Profesionales para SEO ---
export const metadata: Metadata = {
  title: {
    default: "ParaSiempreTech | Soluciones de Software a Medida",
    template: "%s | ParaSiempreTech",
  },
  description:
    "Desarrollo de software a medida, sistemas, análisis de datos y páginas web modernas para empresas y profesionales. Transformamos ideas en soluciones digitales robustas.",
};

// --- Viewport para Experiencia Móvil ---
export const viewport: Viewport = {
  themeColor: "#10B981",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// --- Componente Principal del Layout ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head />
      <body className="bg-[#0A0A0A] font-inter text-gray-200 antialiased selection:bg-[#10B981] selection:text-white">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
