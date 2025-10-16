// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

// --- Axe-Core Dependencies ---
import React from "react";
import ReactDOM from "react-dom";
// -----------------------------

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton"; // ✅ IMPORTANTE
import "@/app/globals.css";

// --- INTEGRACIÓN DE AXE-CORE (Solo en desarrollo) ---
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  import("@axe-core/react").then((axe) => {
    axe.default(React, ReactDOM, 1000);
  });
}
// ---------------------------------------------------

// --- Fuentes ---
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

// --- Metadatos ---
export const metadata: Metadata = {
  title: {
    default: "ParaSiempreTech | Soluciones de Software a Medida",
    template: "%s | ParaSiempreTech",
  },
  description:
    "Desarrollo de software a medida, sistemas, análisis de datos...",
};

export const viewport: Viewport = {
  themeColor: "#10B981",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// --- LAYOUT PRINCIPAL ---
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
      <body className="bg-black text-white relative overflow-x-hidden">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>

        {/* ✅ BOTÓN GLOBAL - Volver Arriba */}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
