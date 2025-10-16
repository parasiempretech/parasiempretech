// src/sections/Hero/Hero.tsx

import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import Link from "next/link";

// --- Datos específicos de la sección Hero ---
const HERO_CLAIMS = [
  "⚙️ Software a medida",
  "📊 Análisis de datos",
  "🌐 Páginas web modernas",
  "🔐 Seguridad aplicada",
  "🧭 Integraciones y flujos",
  "🧩 Arquitectura limpia",
  "☁️ Despliegue en la nube",
];
const HERO_PILLS = [
  "🔧 Código limpio",
  "🧱 Componentes consistentes",
  "🧪 Tests esenciales",
  "📚 Documentación",
  "📈 Métricas listas",
];

// --- Colores y Fuentes (para mantener la consistencia) ---
const VERDE = "#10B981";
const CELESTE = "#6EE7F9";

// --- Sub-componente del Logo (específico para el Hero) ---
function LogoLockup() {
  return (
    <div
      aria-label="Logo ParaSiempreTech"
      className="font-jetbrains-mono select-none text-2xl font-extrabold tracking-tighter text-white"
    >
      <span style={{ color: VERDE }}>&lt;</span>
      <span style={{ color: CELESTE }}>para</span> siempre
      <span style={{ color: CELESTE }}> tech</span>
      <span style={{ color: VERDE }}> /&gt;</span>
    </div>
  );
}

// --- Componente Principal de la Sección Hero ---
export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 shadow-2xl shadow-green-500/10 sm:p-8">
        {/* Marquee de Servicios */}
        <div className="marquee mb-6 overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <div className="marquee-track flex gap-8 whitespace-nowrap p-2">
            {[...HERO_CLAIMS, ...HERO_CLAIMS].map((claim, index) => (
              <span
                key={`${claim}-${index}`}
                className="text-sm font-medium"
                style={{ color: CELESTE }}
              >
                {claim}
              </span>
            ))}
          </div>
        </div>

        {/* Contenido Principal del Hero */}
        <div className="flex flex-col items-center text-center">
          <AnimateOnScroll>
            <LogoLockup />
          </AnimateOnScroll>

          <AnimateOnScroll className="mt-4">
            <h1
              id="hero-title"
              className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Software a medida, datos y{" "}
              <span style={{ color: CELESTE }}>webs modernas</span> para{" "}
              <span style={{ color: VERDE }}>impulsar tu negocio</span>.
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll className="mt-6">
            <p className="max-w-2xl text-lg text-gray-300">
              Soluciones profesionales y mantenibles. Nos enfocamos en código de
              calidad, diseño UX/UI y entregables concretos, bien hechos.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#servicios" className="btn btn-glow">
              Ver servicios
            </Link>
            <Link href="/contacto" className="btn btn-outline">
              Contacto
            </Link>
          </AnimateOnScroll>

          {/* Píldoras de conceptos clave */}
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {HERO_PILLS.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
              >
                {pill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
