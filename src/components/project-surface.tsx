"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ProjectSurface({ children }: { children: ReactNode }) {
  const surfaceRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const surface = surfaceRef.current;
    if (!surface) return;

    const preference = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const paint = () => {
      frame = 0;
      const bounds = surface.getBoundingClientRect();
      surface.style.setProperty("--spotlight-x", `${pointerX - bounds.left}px`);
      surface.style.setProperty("--spotlight-y", `${pointerY - bounds.top}px`);
      surface.dataset.spotlight = "active";
    };
    const move = (event: PointerEvent) => {
      if (!preference.matches || event.pointerType !== "mouse") return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(paint);
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      delete surface.dataset.spotlight;
    };

    surface.addEventListener("pointerenter", move);
    surface.addEventListener("pointermove", move);
    surface.addEventListener("pointerleave", reset);
    surface.addEventListener("pointercancel", reset);
    preference.addEventListener("change", reset);

    return () => {
      reset();
      surface.removeEventListener("pointerenter", move);
      surface.removeEventListener("pointermove", move);
      surface.removeEventListener("pointerleave", reset);
      surface.removeEventListener("pointercancel", reset);
      preference.removeEventListener("change", reset);
      surface.style.removeProperty("--spotlight-x");
      surface.style.removeProperty("--spotlight-y");
    };
  }, []);

  return <article ref={surfaceRef} className="project-entry group" data-reveal="">
    <span className="project-spotlight" aria-hidden="true" />
    {children}
  </article>;
}
