// src/sections/Servicios/servicios.data.ts
// =======================================================
// Contenido mejorado con lenguaje claro, humano, sin tecnicismos y rico en data visual.
// =======================================================

export type CardProps = {
  id: string;
  icon: string;
  accentColor: string; // Ej: text-emerald-400
  title: string;
  desc: string;
  listItems: string[];
  // PROPIEDADES AÑADIDAS PARA EL DISEÑO ÉLITE:
  shadowColor: string; // Para el glow de la tarjeta (Ej: shadow-emerald-500/50)
  gradient: string; // Para el fondo de la tarjeta (Ej: from-emerald-500/10)
};

export const SERVICES: CardProps[] = [
  {
    id: "software",
    icon: "🎯",
    accentColor: "text-emerald-400",
    title: "Soluciones a Medida",
    desc: "Creamos herramientas digitales pensadas para tu forma de trabajar. Diseñamos procesos simples, claros y adaptados a tu negocio.",
    listItems: [
      "Sistemas internos que organizan tu trabajo",
      "Gestión visual y fácil de tus tareas o clientes",
      "Automatizaciones que ahorran tiempo todos los días",
      "Acompañamiento personalizado desde el inicio",
    ],
    // Data visual Élite
    shadowColor: "shadow-emerald-500/50",
    gradient: "from-emerald-500/10 via-transparent to-transparent",
  },
  {
    id: "datos",
    icon: "📊",
    accentColor: "text-sky-400",
    title: "Análisis Inteligente",
    desc: "Convertimos tus datos en información clara. Te ayudamos a ver lo importante y tomar decisiones seguras para crecer.",
    listItems: [
      "Paneles con métricas fáciles de entender",
      "Informes automáticos con lo que realmente importa",
      "Detección de oportunidades y mejoras",
      "Visión completa para planificar con estrategia",
    ],
    // Data visual Élite
    shadowColor: "shadow-sky-500/50",
    gradient: "from-sky-500/10 via-transparent to-transparent",
  },
  {
    id: "web",
    icon: "🌐",
    accentColor: "text-purple-400",
    title: "Páginas Web Profesionales",
    desc: "Diseñamos sitios que reflejan quién sos y lo que hacés. Modernos, claros y pensados para generar confianza.",
    listItems: [
      "Diseño adaptable a celulares y tablets",
      "Textos e imágenes que comunican tu esencia",
      "Carga rápida y navegación fluida",
      "Fácil de actualizar sin depender de nadie",
    ],
    // Data visual Élite
    shadowColor: "shadow-purple-500/50",
    gradient: "from-purple-500/10 via-transparent to-transparent",
  },
  {
    id: "seguridad",
    icon: "🔒",
    accentColor: "text-rose-400",
    title: "Protección y Confianza",
    desc: "Cuidamos tu información y la de tus clientes. Seguridad sólida, sin complicaciones ni tecnicismos.",
    listItems: [
      "Protección ante errores o pérdidas de información",
      "Copias de respaldo automáticas y seguras",
      "Configuraciones estables desde el primer día",
      "Tranquilidad digital para vos y tus usuarios",
    ],
    // Data visual Élite
    shadowColor: "shadow-rose-500/50",
    gradient: "from-rose-500/10 via-transparent to-transparent",
  },
];
