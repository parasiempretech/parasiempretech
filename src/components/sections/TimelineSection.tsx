// src/components/timeline/Timeline.tsx

import AnimateOnScroll from "@/components/effects/AnimateOnScroll";

// Definimos el tipo para cada paso del timeline.
type TimelineStep = {
  title: string;
  children: React.ReactNode;
};

type TimelineProps = {
  steps: TimelineStep[];
};

// Íconos para cada paso del timeline.
const icons = [
  <span key="1" className="text-xl text-cyan-400">
    🔍
  </span>,
  <span key="2" className="text-xl text-cyan-400">
    📋
  </span>,
  <span key="3" className="font-jetbrains-mono text-xl font-bold text-cyan-400">
    &lt;/&gt;
  </span>,
  <span key="4" className="text-xl">
    🚀
  </span>,
];

export default function Timeline({ steps }: TimelineProps) {
  return (
    <AnimateOnScroll className="relative mx-auto max-w-2xl">
      {/* Línea vertical decorativa */}
      <div
        aria-hidden="true"
        className="absolute left-6 top-6 h-[calc(100%-3rem)] w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-400"
      ></div>

      {steps.map((step, index) => (
        <div key={step.title} className="relative mb-8 flex items-start">
          {/* Círculo del ícono */}
          <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500 bg-[#0A0A0A]">
            {icons[index] || "•"}
          </div>
          {/* Contenido del paso */}
          <div className="ml-6">
            <h3 className="text-lg font-bold text-cyan-400">{step.title}</h3>
            <p className="mt-1 text-gray-300">{step.children}</p>
          </div>
        </div>
      ))}
    </AnimateOnScroll>
  );
}
