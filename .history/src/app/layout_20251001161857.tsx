import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

// --- Configuración de Fuentes ---
// Se utiliza next/font para optimizar la carga de las fuentes de Google.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "700"],
});

// --- Metadatos para SEO y Branding ---
// Esta es la configuración base. Cada página puede extenderla o sobreescribirla.
export const metadata: Metadata = {
  title: {
    default: "ParaSiempreTech | Soluciones de Software a Medida",
    template: "%s | ParaSiempreTech",
  },
  description:
    "Desarrollo de software a medida, sistemas, análisis de datos y páginas web modernas para empresas y profesionales. Transformamos ideas en soluciones digitales robustas.",
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
  publisher: "ParaSiempreTech",
  // Metadatos para redes sociales (Open Graph)
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://parasimpretech.com", // Reemplazar con tu dominio final
    title: "ParaSiempreTech | Soluciones de Software a Medida",
    description: "Software, sistemas y webs que impulsan negocios.",
    siteName: "ParaSiempreTech",
    // images: [ // Descomentar y agregar la URL de una imagen para compartir en redes
    //   {
    //     url: 'https://parasimpretech.com/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Logo de ParaSiempreTech',
    //   },
    // ],
  },
};

// --- Viewport para Responsividad ---
export const viewport: Viewport = {
  themeColor: "#0A0A0A", // Un negro sutil para la barra de direcciones en móviles
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// --- Componente RootLayout ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* El favicon se gestiona desde el archivo /app/favicon.ico en Next.js 13+ */}
      </head>
      <body className="bg-[#0A0A0A] text-gray-200 antialiased selection:bg-[#10B981] selection:text-white">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
