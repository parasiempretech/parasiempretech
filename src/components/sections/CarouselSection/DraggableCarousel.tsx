"use client"; // Necesario para la interactividad del mouse (hooks y eventos)

import { useRef, useState, ReactNode } from "react";

type CarouselProps = {
  children: ReactNode;
  className?: string;
};

export default function DraggableCarousel({
  children,
  className = "",
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.classList.add("cursor-grabbing");
  };

  const onMouseLeaveOrUp = () => {
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.classList.remove("cursor-grabbing");
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        ref={trackRef}
        className="flex cursor-grab select-none gap-4 overflow-x-auto py-4 scrollbar-hide"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeaveOrUp}
        onMouseUp={onMouseLeaveOrUp}
        onMouseMove={onMouseMove}
      >
        {children}
      </div>
    </div>
  );
}
