import SectionTitle from "@/components/common/SectionTitle";
import DraggableCarousel from "@/components/carousel/DraggableCarousel";

// --- Datos para la sección de Tecnologías ---
const TECH_STACK_1 = [
  "⚛️ React",
  "⏭️ Next.js",
  "🟢 Node.js",
  "🔷 TypeScript",
  "📜 JavaScript",
  "🐍 Python",
  "🐳 Docker",
  "🗄️ PostgreSQL",
  "🧾 MySQL",
  "🍃 MongoDB",
  "🧠 Redis",
];
const TECH_STACK_2 = [
  "🧪 Testing",
  "🔁 CI/CD",
  "🔐 OAuth/JWT",
  "📡 REST/GraphQL",
  "🧩 ORM",
  "☁️ Cloud",
  "📊 Analytics",
  "🧱 Arquitectura limpia",
  "🛰️ Webhooks",
  "🧭 Monorepos",
  "🧰 Design Systems",
];

// --- Componente Principal de la Sección ---
export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tech-title"
      className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <SectionTitle id="tech-title" kicker="Stack Tecnológico">
        Tecnologías y Conceptos
      </SectionTitle>

      <DraggableCarousel>
        {[...TECH_STACK_1, ...TECH_STACK_1].map((tech, i) => (
          <div
            key={`t1-${i}`}
            className="flex-none rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-jetbrains-mono font-bold"
          >
            {tech}
          </div>
        ))}
      </DraggableCarousel>

      <div className="mt-4">
        <DraggableCarousel>
          {[...TECH_STACK_2, ...TECH_STACK_2].map((tech, i) => (
            <div
              key={`t2-${i}`}
              className="flex-none rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-jetbrains-mono font-bold"
            >
              {tech}
            </div>
          ))}
        </DraggableCarousel>
      </div>
    </section>
  );
}
