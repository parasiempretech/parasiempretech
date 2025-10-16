// src/sections/Principios/Principios.tsx

import SectionTitle from "@/components/common/SectionTitle";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import InteractiveCard from "@/components/effects/InteractiveCard";

// --- Tipos de Datos y Contenido para PRINCIPIOS ---
type WideCardProps = {
  title: string;
  desc: string;
};

const PRINCIPLES: WideCardProps[] = [
  {
    title: "🧭 Claridad primero",
    desc: "Jerarquía visual, lenguaje directo, acciones visibles. Si alguien entiende todo en segundos, vamos bien.",
  },
  {
    title: "🧱 Consistencia",
    desc: "Componentes coherentes y accesibles. Un aprendizaje rápido significa menos errores y mayor velocidad.",
  },
  {
    title: "⚡ Rendimiento",
    desc: "Imágenes optimizadas, carga progresiva y scripts contenidos. Navegación fluida, incluso en redes móviles.",
  },
  {
    title: "🔒 Seguridad por diseño",
    desc: "Autenticación sensata, protección de datos y registros auditables desde el día cero.",
  },
];

// --- Componente Principal de la Sección ---
export default function Principios() {
  return (
    <section
      id="principios"
      aria-labelledby="principios-title"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionTitle id="principios-title" kicker="Criterios">
        Principios que aplicamos
      </SectionTitle>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PRINCIPLES.map((principle, i) => (
          <AnimateOnScroll
            key={principle.title}
            className={`delay-[${i * 100}ms]`}
          >
            <InteractiveCard>
              <div className="card-base flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 text-center md:text-left">
                <h3 className="text-lg font-bold text-white">
                  {principle.title}
                </h3>
                <p className="mt-2 text-gray-300">{principle.desc}</p>
              </div>
            </InteractiveCard>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
