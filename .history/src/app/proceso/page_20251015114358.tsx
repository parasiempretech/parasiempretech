"export default function Page() { return <div>Proceso</div>; }";
import Proceso from "@/sections/Proceso/Proceso";
import Principios from "@/sections/Principios/Principios";
import CTA from "@/sections/CTA/CTA";

export const metadata = {
  title: "Proceso | Para Siempre Tech",
  description: "Cómo trabajamos: método, valores y calidad artesanal.",
};

export default function PageProceso() {
  return (
    <>
      <Proceso />
      <Principios />
      <CTA />
    </>
  );
}
