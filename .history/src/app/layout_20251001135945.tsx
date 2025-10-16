// src/app/layout.tsx
import "./globals.css";
// Se eliminan los 'import' de Navbar y Footer porque los definimos temporalmente aquí mismo.

export const metadata = {
  title: "Para Siempre Tech",
  description:
    "Soluciones digitales modernas: sitios web, sistemas y aplicaciones",
  keywords: [
    "desarrollo web",
    "software",
    "apps",
    "sistemas",
    "Argentina",
    "Para Siempre Tech",
  ],
  authors: [{ name: "Álvaro Ruggeri" }],
};

// --- Componentes Provisionales ---
// He creado versiones básicas de Navbar y Footer aquí para que el archivo no dé error.
// La solución correcta a largo plazo es tenerlos en sus propios archivos con "export default".

const Navbar = () => {
  return (
    <header
      style={{
        padding: "1rem",
        background: "#f0f0f0",
        borderBottom: "1px solid #ddd",
      }}
    >
      <p>Barra de Navegación</p>
    </header>
  );
};

const Footer = () => {
  return (
    <footer
      style={{
        padding: "1rem",
        background: "#f0f0f0",
        borderTop: "1px solid #ddd",
        marginTop: "2rem",
      }}
    >
      <p>
        © {new Date().getFullYear()} Para Siempre Tech - Contenido del Footer
      </p>
    </footer>
  );
};

// --- Tu Layout Principal ---
// Tu componente RootLayout ahora usa las versiones de Navbar y Footer definidas arriba.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
