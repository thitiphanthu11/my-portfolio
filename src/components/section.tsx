import type { ReactNode } from "react";
export function Section({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-heading`} className="portfolio-section">
    <div className="section-heading" data-reveal=""><span className="section-number" aria-hidden="true">{number}</span><h2 id={`${id}-heading`}>{title}</h2><span className="section-rule" aria-hidden="true" /></div>
    {children}
  </section>;
}
export function Tags({ items, label }: { items: string[]; label: string }) {
  return <ul className="mt-5 flex flex-wrap gap-2" aria-label={label}>{items.map((item) => <li key={item} className="tech-tag">{item}</li>)}</ul>;
}
