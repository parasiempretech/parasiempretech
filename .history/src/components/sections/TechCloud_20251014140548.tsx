// src/components/sections/TechCloud.tsx

"use client";

import React, { useState, useEffect } from "react"; // <-- AÑADIMOS useState y useEffect
import Image from "next/image";
import { motion } from "framer-motion";

// Definición de tipos de datos y constantes (dejados intactos)
// ... (TechStackItem, TECH_STACK_1, TECH_STACK_2, getRandomPosition, containerVariants, itemVariants)

// --- Nuevo Hook para Posiciones (CUSTOM HOOK) ---
const useRandomPositions = (count: number) => {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>(
    []
  );

  useEffect(() => {
    // Esta función SOLO se ejecuta en el navegador
    const newPositions = Array.from({ count }).map(() => ({
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
    }));
    setPositions(newPositions);
  }, [count]); // Solo se ejecuta una vez al montar

  return positions;
};
// ----------------------------------------------------

// [Asegúrate de que tus constantes de datos y variantes estén definidas antes]

export default function TechCloud({
  children,
}: {
  children?: React.ReactNode;
}) {
  // Las constantes de datos (techs) deben ser movidas FUERA del componente si aún no lo están,
  // O definidas aquí si prefieres mantenerlas locales. Por ahora, asumiré que están localmente.
  // const techs = [ ... ];
  // const allTech = [...techs, ...otras];
  // [ASUMO que las constantes de datos TECH_STACK_1 y TECH_STACK_2 están fuera del componente o son accesibles]

  const allTech = [...TECH_STACK_1, ...TECH_STACK_2];
  const itemPositions = useRandomPositions(allTech.length); // Llamamos al Hook

  return (
    <section className="relative flex flex-col items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {allTech.map((tech, index) => (
          <motion.div
            key={index} // Cambiamos key a index para que coincida con itemPositions
            className="absolute"
            // Ahora la animación INITIAL usa valores hardcodeados para el servidor
            initial={{
              x: Math.random() > 0.5 ? -300 : 300,
              y: Math.random() > 0.5 ? -300 : 300,
              opacity: 0,
            }}
            animate={{
              y: [0, 20, 0, -20, 0],
              x: [0, 10, 0, -10, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
            // Ahora usamos el estado itemPositions para el estilo, que solo existe en el cliente
            style={itemPositions[index]}
          >
            {/* ... Resto del contenido del icono */}
          </motion.div>
        ))}
      </div>
      {/* ... Contenido central sigue aquí ... */}
    </section>
  );
}
