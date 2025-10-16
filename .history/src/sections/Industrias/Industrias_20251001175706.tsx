// src/sections/Industrias/Industrias.tsx

import SectionTitle from "@/components/common/SectionTitle";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import InteractiveCard from "@/components/effects/InteractiveCard";
import Link from "next/link";

// --- Tipos de Datos y Contenido para INDUSTRIAS ---
type MiniCardProps = {
  title: string;
  listItems: string[];
  cta: { href: string; text: string };
};

const INDUSTRIES: MiniCardProps[] = [
  {
    title: "⚖️ Abogados",
    listItems: [
      "Sitio por área de práctica",
      "Consultas y turnos",
      "Blog de criterios / fallos",
    ],
    cta: { href: "/contacto", text: "Consultar" },
  },
  {
    title: "🦷 Odontólogos",
    listItems: [
      "Turnos con recordatorios",
      "Landing por especialidad",
      "Panel básico de pacientes",
    ],
    cta: { href: "/contacto", text: "Consultar" },
  },
  {
    title: "📐 Arquitectos",
    listItems: [
      "Portfolio con renders",
      "Galerías optimizadas",
      "Pedidos de presupuesto",
    ],
    cta: { href: "/contacto", text: "Consultar" },
  },
  {
    title: "🍽️ Gastronomía",
    listItems: [
      "Carta QR autogestionable",
      "Reservas y eventos",
      "Pedidos internos",
    ],
    cta: { href: "/contacto", text: "Consultar" },
  },
  {
    title: "💈 Barberías",
    listItems: [
      "Turnos por profesional",
      "Catálogo de estilos",
      "Mensajería y recordatorios",
    ],
    cta: { href: "/contacto", text: "Consultar" },
  },
  {
    title: "🏭 Industria",
    listItems: [
      "Backoffice de stock",
      "Reportes en tiempo real",
      "Trazabilidad",
    ],
    cta: { href: "/contacto", text: "Consultar" },
  },
];

// --- Componente Principal de la Sección ---
export default function Industrias() {
  return (
    <section
      id="industrias"
      aria-labelledby="rubros-title"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionTitle id="rubros-title" kicker="Para Quiénes">
        Conocemos Tu Rubro
      </SectionTitle>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {INDUSTRIES.map((industry, i) => (
          <AnimateOnScroll
            key={industry.title}
            className={`delay-[${i * 100}ms]`}
          >
            <InteractiveCard>
              <div className="card-base flex h-full flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <h3 className="text-lg font-bold text-white">
                  {industry.title}
                </h3>
                <ul className="mt-4 flex-grow space-y-2 text-sm text-gray-300">
                  {industry.listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href={industry.cta.href} className="btn btn-outline-sm">
                    {industry.cta.text}
                  </Link>
                </div>
              </div>
            </InteractiveCard>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
