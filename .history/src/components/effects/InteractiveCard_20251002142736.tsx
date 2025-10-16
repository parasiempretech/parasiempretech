"use client";

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

    // Calcular la rotación (reducido a 5 para un efecto más sutil y elegante)
    const rotateX = -1 * ((y - height / 2) / (height / 2)) * 5;
    const rotateY = ((x - width / 2) / (width / 2)) * 5;

    // Actualizar las variables CSS para la transformación y el brillo
    cardRef.current.style.setProperty("--rotateX", `${rotateX}deg`);
    cardRef.current.style.setProperty("--rotateY", `${rotateY}deg`);
    cardRef.current.style.setProperty("--glow-x", `${(x / width) * 100}%`);
    cardRef.current.style.setProperty("--glow-y", `${(y / height) * 100}%`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    // La transición en CSS se encargará de resetear la rotación suavemente
    cardRef.current.style.setProperty("--rotateX", "0deg");
    cardRef.current.style.setProperty("--rotateY", "0deg");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`interactive-card ${className}`}
    >
      <div className="interactive-card-content">{children}</div>
    </div>
  );
}
