"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TechCloud() {
  // Lista de tecnologías e íconos (asegurate de que existan en /public/icons/)
  const techs = [
    { name: "Next.js", icon: "/icons/nextjs.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
    { name: "React", icon: "/icons/react.png" },
    { name: "Node.js", icon: "/icons/nodejs.png" },
    { name: "TailwindCSS", icon: "/icons/tailwind.png" },
    { name: "Prisma", icon: "/icons/prisma.png" },
    { name: "PostgreSQL", icon: "/icons/postgresql.png" },
    { name: "MongoDB", icon: "/icons/mongodb.png" },
    { name: "Python", icon: "/icons/python.png" },
    { name: "Java", icon: "/icons/java.png" },
    { name: "Swift", icon: "/icons/swift.png" },
    { name: "Angular", icon: "/icons/angular.png" },
    { name: "Docker", icon: "/icons/docker.png" },
    { name: "Kubernetes", icon: "/icons/kubernetes.png" },
    { name: "AWS", icon: "/icons/aws.png" },
    { name: "Firebase", icon: "/icons/firebase.png" },
    { name: "GitHub", icon: "/icons/github.png" },
    { name: "Figma", icon: "/icons/figma.png" },
    { name: "Android", icon: "/icons/android.png" },
    { name: "Flutter", icon: "/icons/flutter.png" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center py-24 overflow-hidden">
      {/* Fondo con íconos flotantes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * 800 - 400,
              y: Math.random() * 400 - 200,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
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
              width={50}
              height={50}
              unoptimized
              className="opacity-80 hover:opacity-100 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Texto central */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Trabajamos con todo.</h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-4">
          Desarrollo web, mobile, IA, automatización, gestión de proyectos,
          bases de datos y DevOps.
        </p>
        <p className="font-semibold text-emerald-400">Sí, lo hacemos todo.</p>
      </div>
    </section>
  );
}
