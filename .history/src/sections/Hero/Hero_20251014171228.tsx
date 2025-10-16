// src/sections/Hero/Hero.tsx

import Link from "next/link";
import { HERO_CLAIMS, HERO_PILLS } from "./hero.data";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";

// Importamos el componente Marquee optimizado
import Marquee from "@/components/sections/CarouselSection/Marquee";

// Componente interno: Logo estilizado
const LogoLockup = () => (
  <div
    style={{
      fontFamily: "var(--font-jetbrains-mono)",
      fontWeight: 800,
      fontSize: "1.5rem",
    }}
  >
    <span style={{ color: "var(--verde)" }}>&lt;</span>{" "}
    <span style={{ color: "var(--celeste)" }}>para</span> siempre{" "}
    <span style={{ color: "var(--celeste)" }}>tech</span>{" "}
    <span style={{ color: "var(--verde)" }}>/&gt;</span>
  </div>
);

/**
 * Componente principal de la sección de bienvenida.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-section-container">
      {/* Integración del carrusel infinito con el componente Marquee */}
      <Marquee data={HERO_CLAIMS} speed={20} className="belt" />

      <div className="hero-content">
        <AnimateOnScroll>
          <LogoLockup />
        </AnimateOnScroll>

        {/* Titular mejorado para ser más directo y corporativo */}
        <AnimateOnScroll className="animated-title">
          <h1 id="hero-title">
            <span>
              Desarrollo de{" "}
              <span style={{ color: "var(--celeste)" }}>Software a Medida</span>
              . Estrategia de{" "}
              <span style={{ color: "var(--verde)" }}>Datos</span>. Impulsa tu
              Negocio.
            </span>
          </h1>
        </AnimateOnScroll>

        {/* Subtítulo enfocado en los beneficios y principios de calidad */}
        <AnimateOnScroll>
          <p>
            Transformamos tu visión en soluciones digitales escalables. Nos
            enfocamos en **rendimiento, seguridad por diseño, y código
            mantenible** para garantizar tu éxito a largo plazo.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="hero-buttons">
            {/* CTA principal con estilo destacado */}
            <Link href="#servicios" className="btn btn-glow">
              Ver Servicios
            </Link>
            {/* CTA secundario con estilo sutil (se asume que existe el estilo 'btn-secondary') */}
            <Link href="/contacto" className="btn-secondary">
              Contacto
            </Link>
          </div>
        </AnimateOnScroll>

        {/* Renderizado de las píldoras de valor */}
        <ul className="pills">
          {HERO_PILLS.map((pill, i) => (
            <li key={pill} style={{ animationDelay: `${500 + i * 100}ms` }}>
              {pill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
