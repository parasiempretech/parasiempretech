// src/sections/Hero/hero.data.ts

/**
 * METADATOS: El mensaje principal, ajustado al estilo "Openix".
 */
export const HERO_METADATA = {
  // Título principal (H1)
  TITLE: "Juntos, creamos soluciones que dejan huella",

  // Subtítulo
  SUBTITLE:
    "Desde [Tu Marca] impulsamos alianzas que nos permiten evolucionar juntos, sumar capacidades, explorar nuevos mercados y transformar desafíos en oportunidades compartidas.",

  // Propiedades del botón de contacto principal (Solo uno)
  CTA_MAIN: {
    text: "Contacto", // Botón principal de la barra de navegación
    href: "/contacto",
    glow: true, // Mantendremos el glow, o definiremos un estilo 'btn-openix'
  },

  // El botón secundario se elimina para dejar uno solo como en la imagen.
  CTA_SECONDARY: {
    text: "",
    href: "",
    outline: false,
  },
};

// Vaciamos o eliminamos estas listas para el estilo minimalista de Openix
export const FEATURED_BENEFITS: { icon: string; label: string }[] = [];
export const SERVICE_CLIPS: string[] = [];
