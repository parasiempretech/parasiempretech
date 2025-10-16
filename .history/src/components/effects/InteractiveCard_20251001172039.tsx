// src/components/effects/InteractiveCard.tsx

"use client"; // NECESARIO para la interactividad con el mouse (useRef, event handlers)

import { useRef, ReactNode } from "react";

type InteractiveCardProps = {
  children: ReactNode;
  className?: string;
};

export default function InteractiveCard({
  children,
  className = "",
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calcular la rotación (ajustado para un efecto más sutil)
    const rotateX = -1 * ((y - height / 2) / (height / 2)) * 8;
    const rotateY = ((x - width / 2) / (width / 2)) * 8;

    // Aplicar estilos a través de variables CSS
    cardRef.current.style.setProperty("--rotateX", `${rotateX}deg`);
    cardRef.current.style.setProperty("--rotateY", `${rotateY}deg`);
    cardRef.current.style.setProperty("--bg-x", `${(x / width) * 100}%`);
    cardRef.current.style.setProperty("--bg-y", `${(y / height) * 100}%`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    // Resetear la rotación
    cardRef.current.style.setProperty("--rotateX", "0deg");
    cardRef.current.style.setProperty("--rotateY", "0deg");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // Clases para habilitar el efecto 3D y la transición
      className={`interactive-card-wrapper transition-transform duration-100 ease-out ${className}`}
      style={
        {
          transformStyle: "preserve-3d",
          transform:
            "perspective(1000px) rotateX(var(--rotateX, 0)) rotateY(var(--rotateY, 0))",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
