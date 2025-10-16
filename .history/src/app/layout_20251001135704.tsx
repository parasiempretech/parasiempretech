// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

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
