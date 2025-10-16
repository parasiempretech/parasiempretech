// src/sections/Contacto/Contacto.tsx
// ===================================================
// Sección final de contacto con mensaje persuasivo
// y diseño alineado a ParaSiempreTech.
// ===================================================

import SectionTitle from "@/components/common/SectionTitle";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import Link from "next/link";

export default function Contacto() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Glow de fondo sutil */}
      <div className="absolute inset-0 opacity-[0.08] bg-gradient-to-br from-[#39ff14] via-[#00bfff] to-[#ff00cc] blur-3xl" />

      <SectionTitle id="contacto-title" kicker="Hablemos">
        Iniciemos tu próximo proyecto
      </SectionTitle>

      <AnimateOnScroll>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="text-lg text-foreground/80 leading-relaxed">
            ¿Tenés una idea o querés profesionalizar tu presencia digital? En{" "}
            <span className="font-semibold text-emerald-400">
              ParaSiempreTech
            </span>{" "}
            convertimos ideas en proyectos que funcionan, con diseño, estrategia
            y resultados reales.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contacto"
              className="btn btn-glow px-8 py-3 text-base font-semibold"
            >
              ✉️ Contactar
            </Link>

            <Link
              href="#servicios"
              className="btn btn-outline-sm px-8 py-3 text-base font-semibold hover:shadow-[0_0_25px_rgba(0,255,180,0.4)]"
            >
              Ver Servicios
            </Link>
          </div>

          <p className="text-sm text-foreground/60 mt-8">
            Respondo personalmente cada mensaje. Cuanto antes hablemos, antes
            empezamos a construir resultados.
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
