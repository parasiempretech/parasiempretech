// src/sections/Servicios/Servicios.tsx

import SectionTitle from "@/components/common/SectionTitle";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import InteractiveCard from "@/components/effects/InteractiveCard";
import Link from "next/link";

// --- Tipos de Datos y Contenido Centralizado para SERVICIOS ---
type CardProps = {
  kicker: string;
  title: string;
  desc: string;
  listItems: string[];
  cta1: { href: string; text: string };
  cta2: { href: string; text: string };
};

const SERVICES: CardProps[] = [
  {
    kicker: "🎯 Software a Medida",
    title: "Aplicaciones y sistemas",
    desc: "Construimos herramientas adaptadas a procesos reales: desde turnos online y backoffices hasta plataformas multi-rol.",
    listItems: [
      "Arquitectura limpia y modular",
      "Autenticación, roles y auditoría",
      "Integración con APIs / webhooks",
      "Despliegue en la nube + backups",
    ],
    cta1: { href: "/contacto", text: "Consultar" },
    cta2: { href: "#proceso", text: "Ver proceso" },
  },
  {
    kicker: "📊 Análisis de Datos",
    title: "Métricas y tableros",
    desc: "Unificamos fuentes y presentamos información en dashboards simples para documentar decisiones.",
    listItems: [
      "Pipelines ETL básicos",
      "Tableros con KPIs definidos",
      "Alertas y reportes periódicos",
      "Guía de lectura para el equipo",
    ],
    cta1: { href: "/contacto", text: "Charlar" },
    cta2: { href: "#faq", text: "Dudas frecuentes" },
  },
  {
    kicker: "🌐 Páginas Web",
    title: "Sitios modernos",
    desc: "Landing orientada a claridad, sitios corporativos multi-sección o portfolios con galerías. Diseño sobrio y accesible.",
    listItems: [
      "Arquitectura de información",
      "SEO técnico inicial",
      "Formularios con anti-spam",
      "Edición de contenidos básica",
    ],
    cta1: { href: "/contacto", text: "Pedir propuesta" },
    cta2: { href: "#industrias", text: "Ver rubros" },
  },
  {
    kicker: "🔐 Seguridad",
    title: "Prácticas aplicadas",
    desc: "Configuraciones sensatas desde el inicio: encriptación, control de acceso, políticas de datos y monitoreo.",
    listItems: [
      "OAuth/JWT y expiraciones",
      "Logs y retención prudente",
      "Backups verificados",
      "Guía de buenas prácticas",
    ],
    cta1: { href: "/contacto", text: "Revisar caso" },
    cta2: { href: "#principios", text: "Ver principios" },
  },
];

// --- Componente Principal de la Sección ---
export default function Servicios() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionTitle id="servicios-title" kicker="Qué ofrecemos">
        Servicios profesionales
      </SectionTitle>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          <AnimateOnScroll
            key={service.title}
            className={`delay-[${i * 100}ms]`}
          >
            <InteractiveCard>
              {/* Estilo base de la tarjeta */}
              <div className="card-base flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-medium text-emerald-400">
                  {service.kicker}
                </p>
                <h3 className="mt-2 text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{service.desc}</p>
                <ul className="mt-4 flex-grow space-y-2 text-sm text-gray-400">
                  {service.listItems.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mr-2 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Link href={service.cta1.href} className="btn btn-glow-sm">
                    {service.cta1.text}
                  </Link>
                  <Link href={service.cta2.href} className="btn btn-outline-sm">
                    {service.cta2.text}
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
