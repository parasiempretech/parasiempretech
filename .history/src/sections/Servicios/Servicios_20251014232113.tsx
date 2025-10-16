// src/sections/Servicios/Servicios.tsx
// ===================================================
// Sección principal con animaciones + bloque de beneficios
// ===================================================

import SectionTitle from "@/components/common/SectionTitle";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import InteractiveCard from "@/components/effects/InteractiveCard";
import { SERVICES } from "./servicios.data";
import ServiceCard from "./ServiceCard";

export default function Servicios() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* SECCIÓN PRINCIPAL: SERVICIOS */}
      <SectionTitle id="servicios-title" kicker="Qué ofrecemos">
        Servicios Profesionales
      </SectionTitle>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
        {SERVICES.map((service, i) => (
          <AnimateOnScroll key={service.id} className={`delay-[${i * 100}ms]`}>
            <InteractiveCard>
              <ServiceCard service={service} />
            </InteractiveCard>
          </AnimateOnScroll>
        ))}
      </div>

      {/* SUBSECCIÓN: BENEFICIOS CLAVE */}
      <div className="mt-24">
        <AnimateOnScroll>
          <SectionTitle kicker="Por qué elegirnos">
            Beneficios <span className="text-amber-400">clave</span>
          </SectionTitle>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Descubrí las ventajas que hacen del desarrollo a medida una
            inversión inteligente para tu empresa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Beneficio 1 */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <h3 className="text-sky-400 text-lg font-semibold mb-2">
                🔗 Integración con sistemas actuales
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Conecta perfectamente con tus herramientas existentes sin
                interrupciones, manteniendo la continuidad de tus operaciones.
              </p>
            </div>

            {/* Beneficio 2 */}
            <div className="rounded-xl border border-amber-400/40 bg-white/5 p-6 hover:bg-white/10 transition">
              <h3 className="text-amber-400 text-lg font-semibold mb-2">
                📈 Escalabilidad y flexibilidad
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Crece con tu negocio y se adapta a tus nuevas necesidades,
                permitiendo agregar funcionalidades o soportar mayor demanda sin
                problemas.
              </p>
            </div>

            {/* Beneficio 3 */}
            <div className="rounded-xl border border-purple-400/40 bg-white/5 p-6 hover:bg-white/10 transition">
              <h3 className="text-purple-400 text-lg font-semibold mb-2">
                🧩 Adaptación total al negocio
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Cada sistema se diseña según tus procesos y forma de trabajo,
                logrando eficiencia real y una integración natural con tu
                equipo.
              </p>
            </div>

            {/* Beneficio 4 */}
            <div className="rounded-xl border border-orange-400/40 bg-white/5 p-6 hover:bg-white/10 transition">
              <h3 className="text-orange-400 text-lg font-semibold mb-2">
                🔒 Propiedad y control
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Tenés control total sobre tu solución: su evolución, sus datos y
                su crecimiento a largo plazo.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
