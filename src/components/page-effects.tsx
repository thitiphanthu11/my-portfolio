"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/data/portfolio";

export function PageEffects({ locale }: { locale: Locale }) {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      frame = 0;
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };
    const sidebar = document.querySelector<HTMLElement>(".sidebar");
    const updateLayout = () => {
      // A tall sidebar can scroll far enough to expose its contact links, then stick.
      sidebar?.style.setProperty("--sidebar-top", `${Math.min(0, window.innerHeight - sidebar.offsetHeight)}px`);
      scheduleUpdate();
    };
    updateProgress();
    updateLayout();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", updateLayout);
    const resizeObserver = new ResizeObserver(updateLayout);
    resizeObserver.observe(document.body);
    if (sidebar) resizeObserver.observe(sidebar);

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.reveal = "visible";
          observer.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -32px 0px", threshold: 0.04 });

    if (!motionPreference.matches) {
      targets.forEach((target) => {
        if (target.getBoundingClientRect().top >= window.innerHeight - 32) {
          target.dataset.reveal = "pending";
          observer.observe(target);
        }
      });
    }
    const revealAll = () => {
      if (motionPreference.matches) {
        targets.forEach((target) => { target.dataset.reveal = ""; });
        observer.disconnect();
      }
    };
    motionPreference.addEventListener("change", revealAll);
    const revealFocusedElement = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>('[data-reveal="pending"]');
      if (target) {
        target.dataset.reveal = "";
        observer.unobserve(target);
      }
    };
    document.addEventListener("focusin", revealFocusedElement);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", updateLayout);
      resizeObserver.disconnect();
      sidebar?.style.removeProperty("--sidebar-top");
      observer.disconnect();
      motionPreference.removeEventListener("change", revealAll);
      document.removeEventListener("focusin", revealFocusedElement);
      targets.forEach((target) => { target.dataset.reveal = ""; });
    };
  }, [locale]);

  return <div ref={progressRef} className="reading-progress" aria-hidden="true" />;
}
