// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// CORRECCIÓN 1: Usamos la ruta absoluta (@/) para el CSS
import "@/app/globals.css";

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

// --- Metadatos Profesionales para SEO (Se mantiene) ---
export const metadata: Metadata = {
  title: {
    default: "ParaSiempreTech | Soluciones de Software a Medida",
    template: "%s | ParaSiempreTech",
  },
  description:
    "Desarrollo de software a medida, sistemas, análisis de datos y páginas web modernas para empresas y profesionales. Transformamos ideas en soluciones digitales robustas.",
};

// --- Viewport para Experiencia Móvil (Se mantiene) ---
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
      {/* CORRECCIÓN 2: El tag <head /> se ELIMINA en el App Router. */}
      {/* Toda la metadata ya está manejada por el objeto `export const metadata`. */}
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
