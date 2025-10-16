"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Mostrar / ocultar según el scroll
  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Volver arriba"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-br from-[#39ff14] to-[#00bfff] shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] transition-all duration-300"
    >
      <ArrowUp className="w-6 h-6 text-black" />
    </motion.button>
  );
}
