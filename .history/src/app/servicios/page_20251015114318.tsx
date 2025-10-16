"export default function Page() { return <div>Servicios</div>; }";
import Servicios from "@/sections/Servicios/Servicios";
import FAQ from "@/sections/FAQ/FAQ";
import CTA from "@/sections/CTA/CTA";

export const metadata = {
  title: "Servicios | Para Siempre Tech",
  description: "Desarrollo de software, sitios web y sistemas a medida.",
};

export default function PageServicios() {
  return (
    <>
      <Servicios />
      <CTA />
      <FAQ />
    </>
  );
}
