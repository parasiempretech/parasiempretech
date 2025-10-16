"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CardProps } from "./servicios.data";

interface Props {
  service: CardProps & { shadowColor?: string };
}

const ServiceCard = ({ service }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseShadow = service.shadowColor
    ? service.shadowColor.replace("/50", "/20")
    : "shadow-sky-400/20";

  const hoverShadow = service.shadowColor
    ? service.shadowColor.replace("shadow-", "shadow-xl shadow-")
    : "shadow-xl shadow-sky-400/40";

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={`flex flex-col h-full rounded-2xl border border-white/10
                  bg-gradient-to-br from-white/5 via-white/[0.03] to-transparent
                  p-8 text-center transition-all duration-500 cursor-default
                  relative overflow-hidden ${baseShadow} hover:${hoverShadow}`}
    >
      <motion.div
        aria-hidden="true"
        style={{
          x,
          y,
          rotateX,
          rotateY,
          opacity: 0.2,
        }}
        className="absolute inset-0 bg-gradient-to-br from-[#39ff14]/10 via-[#00bfff]/10 to-[#ff00cc]/10 blur-2xl"
      />

      <motion.div
        className="mx-auto w-16 h-16 mb-5 flex items-center justify-center rounded-full
                   border border-white/10 bg-white/[0.05] shadow-inner shadow-black/40 relative"
        style={{ rotateX, rotateY }}
      >
        <div
          className={`text-3xl drop-shadow-[0_0_8px_rgba(57,255,20,0.3)] ${service.accentColor}`}
        >
          {service.icon}
        </div>
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#39ff14]/10 to-transparent blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-700"
          style={{ scale: 1.2 }}
        />
      </motion.div>

      <h3
        className={`text-xl font-extrabold tracking-tight ${service.accentColor} mb-3`}
      >
        {service.title}
      </h3>

      <p className="text-sm text-gray-300 leading-relaxed max-w-sm mx-auto mb-4">
        {service.desc}
      </p>

      <div className="mx-auto w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

      <ul className="text-sm text-gray-400 text-left mx-auto w-full space-y-3">
        {service.listItems.map((item, i) => (
          <motion.li
            key={i}
            whileHover={{ x: 3 }}
            className="flex items-start hover:text-[#39ff14] transition-colors duration-200"
          >
            <span
              className="text-[#39ff14] mr-2 flex-shrink-0 font-bold"
              aria-hidden="true"
            >
              ✓
            </span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#39ff14]/30 to-transparent"
        style={{ scaleX: 0.9 }}
      />
    </motion.article>
  );
};

export default ServiceCard;
