import Industrias from "@/sections/Industrias/Industrias";
import CTA from "@/sections/CTA/CTA";

export const metadata = {
  title: "Industrias | Para Siempre Tech",
  description: "Soluciones digitales para distintas industrias y negocios.",
};

export default function PageIndustrias() {
  return (
    <>
      <Industrias />
      <CTA />
    </>
  );
}
