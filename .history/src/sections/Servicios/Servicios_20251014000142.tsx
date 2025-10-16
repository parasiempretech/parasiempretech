// src/sections/Servicios/Servicios.tsx

import SectionTitle from "@/components/common/SectionTitle";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import InteractiveCard from "@/components/effects/InteractiveCard";

// 1. Importamos los datos y el nuevo componente de tarjeta.
import { SERVICES } from "./servicios.data";
import ServiceCard from "./ServiceCard";

export default function Servicios() {
  return (
    // 🎨 Para cambiar el fondo de la sección, edita este `className`.
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionTitle id="servicios-title" kicker="Qué ofrecemos">
        Servicios Profesionales
      </SectionTitle>

      {/* El grid ahora solo contiene la lógica del bucle y la animación */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          // 💫 Para ajustar las animaciones, modifica los props de AnimateOnScroll aquí.
          <AnimateOnScroll key={service.id} className={`delay-[${i * 100}ms]`}>
            <InteractiveCard>
              {/* Usamos el componente de tarjeta, pasándole los datos */}
              <ServiceCard service={service} />
            </InteractiveCard>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
