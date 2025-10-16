"export default function Page() { return <div>Contacto</div>; }";
import Contacto from "@/sections/Contacto/Contacto";
import FAQ from "@/sections/FAQ/FAQ";

export const metadata = {
  title: "Contacto | Para Siempre Tech",
  description: "Escribinos y transformemos tu idea en un proyecto real.",
};

export default function PageContacto() {
  return (
    <>
      <Contacto />
      <FAQ />
    </>
  );
}
