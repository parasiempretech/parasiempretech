// src/sections/Servicios/servicios.data.ts

// 1. Definimos la "plantilla" de cada servicio, ahora con ID, ícono y color.
export type CardProps = {
  id: string; // ID único para la 'key' de React (evita errores)
  icon: string; // Emoji o nombre de un ícono SVG
  accentColor: string; // Clase de Tailwind para el color del kicker
  title: string;
  desc: string;
  listItems: string[];
  cta1: { href: string; text: string };
  cta2: { href: string; text: string };
};

// 2. Centralizamos todos los textos, íconos y colores aquí.
// ¡Modificar esto es ahora tu único trabajo para cambiar el contenido!
export const SERVICES: CardProps[] = [
  {
    id: "software",
    icon: "🎯",
    accentColor: "text-emerald-400",
    title: "Software a Medida",
    desc: "Construimos herramientas adaptadas a tus procesos: desde apps internas hasta plataformas multi-rol.",
    listItems: [
      "Arquitectura limpia y modular",
      "Autenticación, roles y auditoría",
      "Integración con APIs / webhooks",
      "Despliegue en la nube + backups",
    ],
    cta1: { href: "/contacto", text: "Consultar" },
    cta2: { href: "#proceso", text: "Ver Proceso" },
  },
  {
    id: "datos",
    icon: "📊",
    accentColor: "text-sky-400",
    title: "Análisis de Datos",
    desc: "Unificamos fuentes y creamos dashboards simples para que tomes decisiones informadas.",
    listItems: [
      "Pipelines ETL básicos",
      "Tableros con KPIs definidos",
      "Alertas y reportes periódicos",
      "Guía de lectura para el equipo",
    ],
    cta1: { href: "/contacto", text: "Charlar" },
    cta2: { href: "#faq", text: "Dudas Frecuentes" },
  },
  {
    id: "web",
    icon: "🌐",
    accentColor: "text-purple-400",
    title: "Páginas Web",
    desc: "Desde landings claras hasta sitios corporativos. Diseño sobrio, moderno y accesible.",
    listItems: [
      "Arquitectura de información",
      "SEO técnico inicial",
      "Formularios con anti-spam",
      "Edición de contenidos básica",
    ],
    cta1: { href: "/contacto", text: "Pedir Propuesta" },
    cta2: { href: "#industrias", text: "Ver Rubros" },
  },
  {
    id: "seguridad",
    icon: "🔐",
    accentColor: "text-rose-400",
    title: "Seguridad Aplicada",
    desc: "Encriptación, control de acceso y monitoreo. Configuraciones sensatas desde el inicio.",
    listItems: [
      "OAuth/JWT y expiraciones",
      "Logs y retención prudente",
      "Backups verificados",
      "Guía de buenas prácticas",
    ],
    cta1: { href: "/contacto", text: "Revisar Caso" },
    cta2: { href: "#principios", text: "Ver Principios" },
  },
];
