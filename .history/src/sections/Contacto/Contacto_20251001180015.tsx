// src/sections/Contacto/Contacto.tsx

import SectionTitle from "@/components/common/SectionTitle";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import Link from "next/link";

export default function Contacto() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionTitle id="contacto-title" kicker="Hablemos">
        Iniciemos tu próximo proyecto
      </SectionTitle>

      <AnimateOnScroll>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg text-gray-300">
            ¿Tenés una idea o un desafío en mente? Me encantaría escucharlo.
            Hacé clic abajo para ir a la página de contacto y enviarme un
            mensaje.
          </p>
          <div className="mt-8">
            <Link href="/contacto" className="btn btn-glow">
              Ir a la página de Contacto
            </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
