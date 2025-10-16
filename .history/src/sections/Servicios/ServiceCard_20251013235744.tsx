// src/sections/Servicios/ServiceCard.tsx

import Link from "next/link";
import { CardProps } from "./servicios.data"; // Importamos la plantilla

// Este componente solo se encarga del diseño de UNA tarjeta.
// Recibe los datos de un servicio a través de `props`.
export default function ServiceCard({ service }: { service: CardProps }) {
  return (
    // 🎨 Para cambiar el efecto hover o las transiciones, edita aquí.
    <div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20">
      {/* Usamos el ícono y el color definidos en los datos */}
      <p className={`text-sm font-medium ${service.accentColor}`}>
        {service.icon} {service.title}
      </p>
      <p className="mt-2 text-sm text-gray-300">{service.desc}</p>
      <ul className="mt-4 flex-grow space-y-2 text-sm text-gray-400">
        {service.listItems.map((item) => (
          <li key={item} className="flex items-start">
            <span className="mr-2 mt-1 text-emerald-400">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {/* 🔘 Para cambiar los estilos de los botones, edita las clases aquí. */}
        <Link href={service.cta1.href} className="btn btn-glow-sm">
          {service.cta1.text}
        </Link>
        <Link href={service.cta2.href} className="btn btn-outline-sm">
          {service.cta2.text}
        </Link>
      </div>
    </div>
  );
}
