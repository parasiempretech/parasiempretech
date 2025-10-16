// src/components/effects/AnimateOnScroll.tsx

"use client"; // Necesario para usar hooks (useState, useRef, useEffect)

import { useState, useRef, useEffect, ReactNode } from "react";

// Hook personalizado para detectar si un elemento está visible en la pantalla
const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Cuando el elemento es visible, actualizamos el estado
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element); // Dejamos de observar una vez que es visible
      }
    }, options);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [ref, isInView] as const;
};

// Componente que envuelve a otros para animarlos
export default function AnimateOnScroll({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    // Aplicamos las clases para la animación solo cuando 'isInView' es true
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {children}
    </div>
  );
}
