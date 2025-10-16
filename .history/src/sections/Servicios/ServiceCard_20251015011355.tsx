// src/sections/Servicios/ServiceCard.tsx

import React from "react";
import { CardProps } from "./servicios.data"; // Asumo que CardProps tiene el campo 'accentColor' y 'shadowColor'

interface Props {
  service: CardProps & { shadowColor?: string }; // Añadimos shadowColor si no está en CardProps original
}

export default function ServiceCard({ service }: Props) {
  if (!service) return null;

  // Asumiendo que service.shadowColor existe y es un utility class de sombra (ej: shadow-cyan-500/50)
  const dynamicShadow = service.shadowColor
    ? service.shadowColor.replace("/50", "/30") // Sombra base
    : "shadow-sky-500/30";

  const dynamicHoverShadow = service.shadowColor
    ? service.shadowColor.replace("shadow-", "shadow-xl shadow-")
    : "shadow-xl shadow-sky-500/50";

  return (
    <div
      className={`flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 p-7 text-center transition-all duration-300 transform
                    ${dynamicShadow} hover:${dynamicHoverShadow} hover:scale-[1.01]`}
    >
      {/* 1. ÍCONO CON CÍRCULO DEGRADADO (Énfasis Visual) */}
      <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-white/5 border border-white/10 shadow-lg">
        <div className={`text-3xl ${service.accentColor}`}>{service.icon}</div>
      </div>

      {/* 2. Título (Más grande y Negrita) */}
      <h3 className={`text-xl font-extrabold ${service.accentColor} mb-2`}>
        {service.title}
      </h3>

      {/* 3. Descripción (Mejor jerarquía) */}
      <p className="mt-2 text-base text-gray-300 leading-normal">
        {service.desc}
      </p>

      {/* 4. Lista de características (Separada por una línea sutil) */}
      <ul className="mt-6 pt-4 border-t border-white/5 text-sm text-gray-400 text-left mx-auto w-full space-y-3">
        {service.listItems.map((item, i) => (
          <li key={i} className="flex items-start">
            <span
              className="text-green-400 mr-2 flex-shrink-0"
              aria-hidden="true"
            >
              ✔
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
