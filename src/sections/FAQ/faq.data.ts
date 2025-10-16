// src/sections/FAQ/faq.data.ts
// =======================================================
// Contenido centralizado para la sección de Preguntas Frecuentes
// Lenguaje claro, humano y adaptable a cualquier público
// =======================================================

export type FaqItem = {
  emoji: string;
  question: string;
  answer: string;
};

// --- Lista de preguntas frecuentes ---
export const FAQ_ITEMS: FaqItem[] = [
  {
    emoji: "⏰",
    question: "¿Cuánto tarda un proyecto?",
    answer:
      "Depende del tipo de trabajo. Una página simple puede estar lista en pocos días, un sitio completo en 2 a 4 semanas. Siempre te damos un calendario real desde el inicio.",
  },
  {
    emoji: "💬",
    question: "¿Podemos hablar antes de empezar?",
    answer:
      "Claro que sí. Siempre hacemos una charla inicial gratuita para entender tus ideas, tus objetivos y definir juntos el mejor camino.",
  },
  {
    emoji: "🎨",
    question: "¿Hacen diseños desde cero?",
    answer:
      "Sí. Cada diseño es 100 % personalizado para tu marca. Nada de plantillas genéricas: creamos algo único que te represente.",
  },
  {
    emoji: "🔒",
    question: "¿Ofrecen soporte después de entregar el sitio?",
    answer:
      "Sí. Te acompañamos con mantenimiento, mejoras, actualizaciones y soporte técnico. Queremos relaciones a largo plazo.",
  },
  {
    emoji: "💡",
    question: "¿Qué necesito tener preparado?",
    answer:
      "Solo tus ideas o referencias. Si tenés logo, redes o fotos, genial. Si no, te guiamos paso a paso para que no te falte nada.",
  },
  {
    emoji: "🚀",
    question: "¿Trabajan con clientes de todo el país?",
    answer:
      "Sí, trabajamos con personas y empresas de toda Argentina e incluso del exterior. Todo el proceso es online, simple y ordenado.",
  },
  {
    emoji: "🤝",
    question: "¿Puedo pedir cambios una vez que está listo?",
    answer:
      "Por supuesto. Siempre incluimos una etapa de revisión final donde podés pedir ajustes. Queremos que quedes 100 % conforme.",
  },
];
