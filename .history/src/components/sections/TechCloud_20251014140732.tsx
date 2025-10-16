// src/components/sections/TechCloud.tsx

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Tipado: children opcional
export default function TechCloud({
  children,
}: {
  children?: React.ReactNode;
}) {
  // Lista de tecnologías con sus íconos SVG o PNG (guardalos en /public/icons/)
  const techs = [
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
    { name: "Prisma", icon: "/icons/prisma.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "Java", icon: "/icons/java.svg" },
    { name: "Swift", icon: "/icons/swift.svg" },
    { name: "Angular", icon: "/icons/angular.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
    { name: "AWS", icon: "/icons/aws.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
    { name: "Android", icon: "/icons/android.svg" },
    { name: "Flutter", icon: "/icons/flutter.svg" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Fondo de movimiento visual */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth - window.innerWidth / 2,
              y: Math.random() * window.innerHeight - window.innerHeight / 2,
              opacity: 0,
            }}
            animate={{
              y: [0, 20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
            }}
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={40}
              height={40}
              className="opacity-60 hover:opacity-100 transition duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Contenido central */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Trabajamos con todo.</h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-4">
          Desarrollo web, mobile, IA, automatización, gestión de proyectos,
          bases de datos y DevOps.
        </p>
        <p className="font-semibold text-emerald-400">Sí, lo hacemos todo.</p>
      </div>

      {/* Renderiza children opcional si se pasa contenido adicional */}
      {children && <div className="relative z-10 mt-8">{children}</div>}
    </section>
  );
}
