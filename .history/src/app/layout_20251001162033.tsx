import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

// ================================
// Fuentes principales
// ================================
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

// ================================
// SEO Metadata
// ================================
export const metadata: Metadata = {
  title: "Para Siempre Tech — Software a Medida y Páginas Profesionales",
  description:
    "Creamos software a medida, análisis de datos estratégicos y páginas web modernas para profesionales y empresas. Innovación digital para negocios que quieren crecer.",
  keywords: [
    "software a medida",
    "páginas web profesionales",
    "landing pages",
    "sistemas para negocios",
    "dashboard",
    "aplicaciones web",
    "Córdoba",
    "Argentina",
  ],
  authors: [{ name: "Para Siempre Tech" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Para Siempre Tech",
    description:
      "Innovación digital y soluciones a medida para profesionales y empresas. Páginas web modernas, sistemas y análisis estratégico.",
    url: "https://parasiempretech.com", // luego reemplazas con tu dominio real
    siteName: "Para Siempre Tech",
    images: [
      {
        url: "/og-image.png", // te conviene crear una imagen OG con tu logo
        width: 1200,
        height: 630,
        alt: "Para Siempre Tech",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

// ================================
// Layout Principal
// ================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0B0F14] text-white antialiased flex flex-col min-h-screen">
        {/* Navbar global */}
        <Navbar />

        {/* Contenido dinámico */}
        <main className="flex-grow">{children}</main>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  );
}
