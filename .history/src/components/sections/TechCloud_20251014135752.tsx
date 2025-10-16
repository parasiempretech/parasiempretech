// src/components/sections/TechCloud.tsx

import React from "react";
import Head from "next/head";

// Tipado: 'children' ahora es opcional para evitar el error en Tecnologias.tsx
export default function TechCloud({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      {/* Metadatos opcionales para esta sección (no obligatorios, pero ilustrativos) */}
      <Head>
        <title>Tecnologías | ParaSiempreTech</title>
        <meta
          name="description"
          content="Stack tecnológico utilizado por ParaSiempreTech: herramientas modernas, frameworks y conceptos clave para construir soluciones a medida."
        />
      </Head>

      {/* Contenedor visual del "cloud" o visualización de tecnologías */}
      <div className="flex flex-wrap justify-center gap-6 text-gray-300">
        {/* Ejemplo de burbujas de tecnologías */}
        <div className="rounded-full bg-[#111] px-6 py-3 text-sm font-semibold shadow-md shadow-emerald-500/30 hover:scale-105 transition">
          Next.js
        </div>
        <div className="rounded-full bg-[#111] px-6 py-3 text-sm font-semibold shadow-md shadow-cyan-500/30 hover:scale-105 transition">
          TypeScript
        </div>
        <div className="rounded-full bg-[#111] px-6 py-3 text-sm font-semibold shadow-md shadow-indigo-500/30 hover:scale-105 transition">
          TailwindCSS
        </div>
        <div className="rounded-full bg-[#111] px-6 py-3 text-sm font-semibold shadow-md shadow-pink-500/30 hover:scale-105 transition">
          Prisma
        </div>
        <div className="rounded-full bg-[#111] px-6 py-3 text-sm font-semibold shadow-md shadow-green-500/30 hover:scale-105 transition">
          Node.js
        </div>
        <div className="rounded-full bg-[#111] px-6 py-3 text-sm font-semibold shadow-md shadow-yellow-500/30 hover:scale-105 transition">
          PostgreSQL
        </div>
        <div className="rounded-full bg-[#111] px-6 py-3 text-sm font-semibold shadow-md shadow-blue-500/30 hover:scale-105 transition">
          React
        </div>
      </div>

      {/* Renderiza children opcional si se pasa contenido adicional */}
      {children && <div className="mt-8">{children}</div>}
    </>
  );
}
