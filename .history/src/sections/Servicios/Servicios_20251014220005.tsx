// src/sections/Servicios/Servicios.tsx
// ===================================================
// Sección principal con animaciones y cards limpias
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
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionTitle id="servicios-title" kicker="Qué ofrecemos">
        Servicios Profesionales
      </SectionTitle>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
        {SERVICES.map((service, i) => (
          <AnimateOnScroll key={service.id} className={`delay-[${i * 100}ms]`}>
            <InteractiveCard>
              {/* Pasamos el objeto completo como prop */}
              <ServiceCard service={service} />
            </InteractiveCard>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
