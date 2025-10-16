// src/sections/Servicios/ServiceCard.tsx
// ===================================================
// Tarjeta de servicio sin botones, con diseño limpio
// ===================================================

import React from "react";
import { CardProps } from "./servicios.data";

interface Props {
  service: CardProps;
}

export default function ServiceCard({ service }: Props) {
  if (!service) return null; // Seguridad: evita errores si no hay data

  return (
    <div className="flex flex-col h-full rounded-xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_0_25px_rgba(0,255,180,0.05)] hover:shadow-[0_0_45px_rgba(0,255,180,0.15)] transition-all duration-300">
      {/* Ícono */}
      <div className={`text-4xl mb-3 ${service.accentColor}`}>
        {service.icon}
      </div>

      {/* Título */}
      <h3 className={`text-lg font-bold ${service.accentColor}`}>
        {service.title}
      </h3>

      {/* Descripción */}
      <p className="mt-2 text-sm text-gray-300 leading-relaxed">
        {service.desc}
      </p>

      {/* Lista de características */}
      <ul className="mt-4 text-sm text-gray-400 text-left mx-auto max-w-xs space-y-2">
        {service.listItems.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="text-green-400 mr-2">✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
