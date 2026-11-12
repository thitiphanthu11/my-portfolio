"use client";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { NavigationItem } from "@/data/portfolio";

export function Navigation({ items: navigation, label }: { items: NavigationItem[]; label: string }) {
  const [active, setActive] = useState<string>("about");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current: string = navigation[0].id;
      for (const item of navigation) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.35) current = item.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = navigation[navigation.length - 1].id;
      setActive(current);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [navigation]);
  const activeIndex = Math.max(0, navigation.findIndex((item) => item.id === active));
  return <nav aria-label={label} className="section-nav">
    <span className="nav-active-track" aria-hidden="true" style={{ transform: `translateY(${activeIndex * 40}px)` }} />
    {navigation.map((item, index) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} className="nav-item group">
      <span className="nav-number" aria-hidden="true">0{index + 1}</span>
      <span className="nav-label">{item.label}</span>
      <ArrowRight size={15} aria-hidden="true" className="nav-arrow" />
    </a>)}
  </nav>;
}
