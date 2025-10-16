import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
    url: "https://parasimpretech.com", // Reemplazar con tu dominio final
    title: "ParaSiempreTech | Soluciones de Software a Medida",
    description: "Software, sistemas y webs que impulsan negocios.",
    siteName: "ParaSiempreTech",
  },
};

// --- Viewport para Experiencia Móvil ---
export const viewport: Viewport = {
  themeColor: "#10B981",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// =================================================================================
// --- COMPONENTES PROVISIONALES (Definidos aquí para evitar errores) ---
// Más adelante, podrás moverlos a sus propios archivos en /components.
// =================================================================================

function Navbar() {
  const VERDE = "#10B981";
  const CELESTE = "#6EE7F9";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* --- Logo Textual --- */}
        <div
          aria-label="Logo ParaSiempreTech"
          className="font-jetbrains-mono text-lg font-bold"
        >
          <span style={{ color: VERDE }}>&lt;</span>
          <span style={{ color: CELESTE }}>para</span>
          <span>siempre</span>
          <span style={{ color: CELESTE }}>tech</span>
          <span style={{ color: VERDE }}>/&gt;</span>
        </div>

        {/* --- Navegación (Ejemplo) --- */}
        <nav className="hidden items-center space-x-2 md:flex">
          <a
            href="#servicios"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Servicios
          </a>
          <a
            href="#proceso"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Proceso
          </a>
          <a
            href="#faq"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            FAQ
          </a>
          <a
            href="/contacto"
            className="ml-4 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 ease-in-out hover:scale-105"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0A0A0A]">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:px-8">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} ParaSiempreTech. Todos los derechos
          reservados.
        </p>
        <nav className="flex gap-4">
          <a
            href="/privacidad"
            className="text-sm text-gray-400 hover:text-white"
          >
            Privacidad
          </a>
          <a
            href="/terminos"
            className="text-sm text-gray-400 hover:text-white"
          >
            Términos
          </a>
        </nav>
      </div>
    </footer>
  );
}

// =================================================================================
// --- COMPONENTE PRINCIPAL DEL LAYOUT ---
// =================================================================================

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
          <main className="flex-grow">
            {/* El contenido de cada página se renderizará aquí */}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
