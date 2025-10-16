// src/sections/CTA/CTA.tsx

"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";

export default function CTA() {
  return (
    <section
      id="cuandoelegir"
      aria-labelledby="cta-title"
      className="relative container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Fondo suave con gradiente */}
      <motion.div
        className="absolute inset-0 opacity-[0.08] bg-gradient-to-br from-emerald-500 via-sky-500 to-fuchsia-600 blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        transition={{ duration: 1 }}
      />

      <AnimateOnScroll>
        <div className="relative text-center mb-12">
          <h2
            id="cta-title"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            ¿Es este el momento ideal para desarrollar tu software a medida?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Desarrollar una solución propia es una decisión estratégica. Si tu
            negocio está creciendo o necesita más control, esto te va a ayudar a
            tomar la decisión con claridad.
          </p>
        </div>

        {/* Contenedor de las dos columnas */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Ideal para */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm">
            <h3 className="text-emerald-400 text-xl font-semibold mb-4 flex items-center gap-2">
              ✅ Ideal para
            </h3>
            <ul className="space-y-3 text-gray-300 text-base leading-relaxed">
              <li>
                Negocios que buscan independencia y control sobre sus procesos.
              </li>
              <li>
                Empresas que quieren digitalizar áreas clave y automatizar
                tareas.
              </li>
              <li>
                Equipos que necesitan una herramienta adaptada a su forma de
                trabajar.
              </li>
              <li>Emprendimientos con proyección y visión de largo plazo.</li>
              <li>Proyectos donde la personalización marca la diferencia.</li>
            </ul>
          </div>

          {/* Consideraciones */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm">
            <h3 className="text-amber-400 text-xl font-semibold mb-4 flex items-center gap-2">
              ⚠️ Consideraciones
            </h3>
            <ul className="space-y-3 text-gray-300 text-base leading-relaxed">
              <li>
                El desarrollo a medida requiere planificación y compromiso.
              </li>
              <li>
                El costo inicial es más alto que el de una plantilla genérica.
              </li>
              <li>
                El proceso lleva tiempo, pero garantiza resultados reales.
              </li>
              <li>
                Es una inversión a largo plazo: evoluciona junto a tu negocio.
              </li>
              <li>Contar con una comunicación fluida acelera cada etapa.</li>
            </ul>
          </div>
        </div>

        {/* Frase final inspiradora */}
        <div className="relative mt-16 text-center">
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            💡 Si te sentís identificado con estos puntos, probablemente ya sea
            el momento de dar el siguiente paso y construir algo propio.
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
