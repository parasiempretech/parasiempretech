// src/sections/Hero/hero.data.ts

/**
 * METADATOS: El mensaje principal que queremos dar.
 */
export const HERO_METADATA = {
  // Título principal (H1) que va al grano y es fácil de entender.
  TITLE: "Creamos la Tecnología que necesitas para crecer más y vender mejor.",

  // Subtítulo que explica cómo trabajamos, destacando la calidad y la garantía.
  SUBTITLE:
    "Somos tu equipo de expertos. Nos enfocamos en hacer un trabajo bien hecho, seguro y con la mejor calidad de código, para que tu inversión dure muchos años.",

  // Propiedades del botón de contacto principal.
  CTA_MAIN: {
    text: "Hablemos de tu Proyecto", // Más personal que 'Comencemos...'
    href: "/contacto",
    glow: true,
  },

  // Propiedades del botón secundario para dar confianza.
  CTA_SECONDARY: {
    text: "Ver cómo trabajamos",
    href: "/proceso",
    outline: true,
  },
};

/**
 * CARACTERÍSTICAS DESTACADAS: Lo que le prometemos al cliente en un formato simple.
 */
export const FEATURED_BENEFITS = [
  {
    icon: "✅",
    label: "Garantía de Código y Calidad",
  },
  {
    icon: "🔒",
    label: "Máxima Seguridad y Protección de Datos",
  },
  {
    icon: "⚡", // Usamos un rayo en lugar de cohete para la velocidad
    label: "Páginas que cargan muy rápido",
  },
  {
    icon: "🧪",
    label: "Verificamos que todo funcione perfecto",
  },
];

/**
 * CLIPS DE SERVICIOS: Textos cortos sobre lo que hacemos.
 */
export const SERVICE_CLIPS = [
  "Software único, hecho a tu medida",
  "Análisis de tus datos para tomar mejores decisiones",
  "Páginas web modernas y fáciles de usar",
  "Seguridad desde el primer día",
  "Conectar tus sistemas y programas",
];
