// src/sections/CTA/CTA.tsx

import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import Link from "next/link";

export default function CTA() {
  return (
    <AnimateOnScroll>
      <section
        id="cta"
        aria-labelledby="cta-title"
        className="container mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-8 py-12 text-center shadow-lg">
          {/* Efecto de brillo sutil */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="h-[200px] w-[400px] rounded-full bg-gradient-radial from-emerald-500/20 to-transparent blur-3xl"></div>
          </div>

          <h2
            id="cta-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            ¿Conversamos?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Contanos tu contexto y miramos juntos qué entregables tienen más
            sentido para empezar.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contacto" className="btn btn-glow">
              📩 Contacto
            </Link>
            <Link href="#servicios" className="btn btn-outline">
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}
