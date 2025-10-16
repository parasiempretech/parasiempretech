"export default function Page() { return <div>Tecnolog�as</div>; }";
import Tecnologias from "@/sections/Tecnologias/Tecnologias";
import CTA from "@/sections/CTA/CTA";

export const metadata = {
  title: "Tecnologías | Para Siempre Tech",
  description: "Nuestro stack tecnológico moderno y eficiente.",
};

export default function PageTecnologias() {
  return (
    <>
      <Tecnologias />
      <CTA />
    </>
  );
}
