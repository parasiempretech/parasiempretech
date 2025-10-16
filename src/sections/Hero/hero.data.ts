// src/sections/Hero/hero.data.ts

/**
 * 🚨 Solución al Error 2: Reintroducimos CTA_SECONDARY en HERO_METADATA.
 */
export const HERO_METADATA = {
  TITLE:
    "Tu negocio es único. Tu tecnología también debe serlo. Sistemas y Webs hechos solo para vos.",

  SUBTITLE:
    "En para siempre tech no usamos plantillas. Te damos el control total con soluciones 100% personalizadas, seguras y tan fáciles de usar que cualquiera en tu equipo puede manejarlas.",

  CTA_MAIN: {
    text: "Hablemos de tu Proyecto",
    href: "/contacto",
  },

  // VUELVE el botón secundario para satisfacer al Hero.tsx
  CTA_SECONDARY: {
    text: "Ver nuestro Proceso", // Texto simple
    href: "/proceso",
  },
};

/**
 * 🚨 Solución al Error 1 y 3: Eliminamos la exportación de FEATURED_BENEFITS.
 * Si Hero.tsx intenta usarla, debemos eliminar esas líneas en Hero.tsx.
 */
// export const FEATURED_BENEFITS = []; // Ya no se exporta ni se usa.

/**
 * SERVICIOS FLOTANTES: Servicios para el carrusel infinito (Marquee)
 */
export const SERVICE_CLIPS = [
  "✨ SOFTWARE 100% PERSONALIZADO",
  "🔒 CIBERSEGURIDAD DESDE EL INICIO",
  "⚡ PÁGINAS WEB QUE CARGAN AL INSTANTE",
  "📊 ANÁLISIS DE DATOS CLAROS Y SENCILLOS",
  "✅ SISTEMAS CON CONTROL TOTAL (DASHBOARDS)",
  "📈 DISEÑO PARA EL CRECIMIENTO DE TU NEGOCIO",
];
