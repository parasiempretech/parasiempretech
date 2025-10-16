// src/components/common/SectionTitle.tsx

import { ReactNode } from "react";
import AnimateOnScroll from "../effects/AnimateOnScroll";

type SectionTitleProps = {
  id: string;
  kicker?: string;
  children: ReactNode;
};

export default function SectionTitle({
  id,
  kicker,
  children,
}: SectionTitleProps) {
  return (
    <AnimateOnScroll>
      <header className="mb-8 text-center">
        {kicker && (
          <span className="mb-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-gray-300">
            {kicker}
          </span>
        )}
        <h2
          id={id}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          {children}
        </h2>
      </header>
    </AnimateOnScroll>
  );
}
