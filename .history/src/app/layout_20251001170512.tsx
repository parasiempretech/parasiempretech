import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

// --- Configuración de fuentes ---
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

// --- Metadatos SEO ---
export const metadata: Metadata = {
  title: {
    default: "ParaSiempreTech | Soluciones de Software a Medida",
    template: "%s | ParaSiempreTech",
  },
  description:
    "Desarrollo de software a medida, sistemas, análisis de datos y páginas web modernas para empresas y profesionales.",
  keywords: [
    "desarrollo de software",
    "sistemas a medida",
    "páginas web",
    "aplicaciones web",
    "análisis de datos",
    "ParaSiempreTech",
    "Argentina",
    "soluciones digitales",
  ],
  authors: [{ name: "ParaSiempreTech" }],
  creator: "ParaSiempreTech",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://parasiempretech.com",
    title: "ParaSiempreTech | Soluciones de Software a Medida",
    description: "Software, sistemas y webs que impulsan negocios.",
    siteName: "ParaSiempreTech",
  },
};

// --- Viewport para mobile UX ---
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
      <body className="bg-[#0A0A0A] font-sans text-gray-200 antialiased selection:bg-[#10B981] selection:text-white">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
