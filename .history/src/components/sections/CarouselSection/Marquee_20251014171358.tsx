// src/components/sections/CarouselSection/Marquee.tsx

"use client"; // Este componente de animación necesita ser renderizado en el cliente.

import { HTMLAttributes } from "react";

// Definición de las propiedades que acepta el componente Marquee
interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  data: string[]; // La lista de textos a desplazar (ej: HERO_CLAIMS)
  speed?: number; // Velocidad de la animación (menor es más lento)
}

/**
 * Componente Marquee: Crea una barra de desplazamiento horizontal infinita.
 * * Se utiliza animación CSS pura para mejor rendimiento (Principio de Rendimiento).
 */
export default function Marquee({
  data,
  speed = 20,
  className = "",
}: MarqueeProps) {
  // Duplicamos los datos para asegurar el efecto de bucle infinito sin interrupciones visuales.
  const fullData = [...data, ...data];

  return (
    <div
      className={`marquee-container ${className}`}
      style={{ overflow: "hidden" }} // Oculta el scrollbar
    >
      <div
        className="marquee-track"
        style={
          {
            // Variables CSS para la animación: la duración controla la velocidad.
            "--marquee-duration": `${speed}s`,
            animationPlayState: "running", // Asegura que la animación se ejecute
            display: "flex",
            width: "fit-content", // Permite que el contenido se extienda
          } as React.CSSProperties
        } // Se usa 'as React.CSSProperties' para inyectar variables CSS
      >
        {fullData.map((item, index) => (
          // Usamos la clave 'item-index' para evitar errores de clave de React
          <span
            key={`${item}-${index}`}
            className="marquee-item"
            style={{
              whiteSpace: "nowrap", // Evita que los elementos se rompan en varias líneas
              paddingRight: "2.5rem", // Espacio entre elementos
              display: "inline-block",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// NOTA IMPORTANTE: Para que la animación funcione, necesitas
// añadir el CSS de la animación a tu archivo globals.css o styles.css.
// Aquí está el CSS necesario:
/*
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-track {
  animation: marquee var(--marquee-duration) linear infinite;
}
*/
// ----------------------------------------------------
