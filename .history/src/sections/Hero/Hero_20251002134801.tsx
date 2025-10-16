// src/sections/Hero/Hero.tsx

import React from "react";
import { HERO_CLAIMS, HERO_PILLS } from "./hero.data";
import { AnimateOnScroll } from "@/components/effects/AnimateOnScroll";

// Pequeño componente para el logo, puedes moverlo a /components/common si lo reutilizas
const LogoLockup = () => (
  <div
    style={{
      fontFamily: "JetBrains Mono, monospace",
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

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-section-container">
      <div className="belt">
        <div className="belt-track">
          {[...HERO_CLAIMS, ...HERO_CLAIMS].map((claim, index) => (
            <span key={`${claim}-${index}`}>{claim}</span>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <AnimateOnScroll>
          <LogoLockup />
        </AnimateOnScroll>

        <AnimateOnScroll className="animated-title">
          <h1 id="hero-title">
            <span>
              Software a medida, datos y{" "}
              <span style={{ color: "var(--celeste)" }}>webs modernas</span>{" "}
              para{" "}
              <span style={{ color: "var(--verde)" }}>impulsar tu negocio</span>
              .
            </span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <p>
            Soluciones profesionales y mantenibles. Nos enfocamos en código de
            calidad, diseño UX/UI y entregables concretos, bien hechos.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="hero-buttons">
            <a href="#servicios" className="btn btn-glow">
              Ver servicios
            </a>
            <a href="/contacto" className="btn btn-outline">
              Contacto
            </a>
          </div>
        </AnimateOnScroll>

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
