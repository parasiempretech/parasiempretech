// src/sections/Servicios/servicios.data.ts

import {
  FaLaptopCode,
  FaShoppingCart,
  FaServer,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
} from "react-icons/si";

export interface CardProps {
  id: number;
  kicker?: string;
  title: string;
  desc: string;
  listItems: string[];
  accentColor: string;
  shadowColor: string;
  icon: JSX.Element;
}

// -------------------------------------------------------------
// SERVICIOS PRINCIPALES (nivel agencia)
// -------------------------------------------------------------

export const SERVICES: CardProps[] = [
  {
    id: 1,
    title: "Desarrollo Web a Medida",
    desc: "Creamos sitios web potentes, escalables y con identidad propia. Cada línea de código se adapta a tus objetivos comerciales.",
    listItems: [
      "Landing pages estratégicas que convierten",
      "Arquitectura moderna con Next.js y TailwindCSS",
      "Optimización SEO y rendimiento superior",
    ],
    accentColor: "text-sky-400",
    shadowColor: "shadow-sky-500/50",
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: "Sistemas y Plataformas",
    desc: "Desarrollamos sistemas completos para automatizar tus procesos, conectar equipos y maximizar eficiencia operativa.",
    listItems: [
      "Paneles administrativos y dashboards interactivos",
      "Integraciones con APIs y servicios externos",
      "Arquitectura segura, modular y mantenible",
    ],
    accentColor: "text-emerald-400",
    shadowColor: "shadow-emerald-500/50",
    icon: <FaServer />,
  },
  {
    id: 3,
    title: "E-commerce Profesional",
    desc: "Creamos tiendas online personalizadas que venden de verdad. Diseño atractivo, rendimiento rápido y manejo simple para vos.",
    listItems: [
      "Pasarelas de pago integradas (MercadoPago, Stripe)",
      "Gestión de productos, stock y pedidos",
      "Diseño responsive y experiencia de compra fluida",
    ],
    accentColor: "text-fuchsia-400",
    shadowColor: "shadow-fuchsia-500/50",
    icon: <FaShoppingCart />,
  },
  {
    id: 4,
    title: "Apps y Experiencias Interactivas",
    desc: "Llevamos tus ideas al siguiente nivel con aplicaciones web progresivas y experiencias inmersivas en tiempo real.",
    listItems: [
      "Desarrollo con React, Next.js y Node.js",
      "Animaciones fluidas con Framer Motion",
      "Integración con backends escalables y APIs modernas",
    ],
    accentColor: "text-purple-400",
    shadowColor: "shadow-purple-500/50",
    icon: <FaMobileAlt />,
  },
  {
    id: 5,
    title: "Consultoría y Estrategia Digital",
    desc: "Te ayudamos a identificar oportunidades, optimizar tus herramientas y escalar tu negocio digital con criterio técnico y visión comercial.",
    listItems: [
      "Análisis integral de procesos y necesidades",
      "Reestructuración tecnológica y roadmap",
      "Acompañamiento técnico continuo",
    ],
    accentColor: "text-cyan-400",
    shadowColor: "shadow-cyan-500/50",
    icon: <SiNextdotjs />,
  },
  {
    id: 6,
    title: "Optimización y Performance",
    desc: "Aceleramos y reforzamos tus sistemas existentes para lograr mayor velocidad, seguridad y experiencia de usuario.",
    listItems: [
      "Auditoría técnica completa (frontend + backend)",
      "Optimización de carga, SEO y Core Web Vitals",
      "Mejora de infraestructura y pipelines CI/CD",
    ],
    accentColor: "text-amber-400",
    shadowColor: "shadow-amber-500/50",
    icon: <SiPrisma />,
  },
  {
    id: 7,
    title: "Branding y Diseño UX/UI",
    desc: "Diseñamos interfaces limpias, modernas y coherentes con tu marca. Experiencias visuales que transmiten profesionalismo real.",
    listItems: [
      "Diseño UX/UI orientado a conversión",
      "Wireframes, prototipos y sistemas de diseño",
      "Identidad visual coherente y memorable",
    ],
    accentColor: "text-pink-400",
    shadowColor: "shadow-pink-500/50",
    icon: <SiTailwindcss />,
  },
  {
    id: 8,
    title: "Automatización y APIs",
    desc: "Conectamos tus sistemas y herramientas para eliminar tareas repetitivas y escalar tu productividad al máximo.",
    listItems: [
      "Integraciones entre software y servicios externos",
      "Automatización de flujos con Node.js y Webhooks",
      "Sistemas modulares con control total de datos",
    ],
    accentColor: "text-green-400",
    shadowColor: "shadow-green-500/50",
    icon: <SiNodedotjs />,
  },
];
