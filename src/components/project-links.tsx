import { ArrowUpRight } from "lucide-react";
import type { PortfolioLink } from "@/data/portfolio";

export function ProjectLinks({ links, newTabLabel }: { links: PortfolioLink[]; newTabLabel: string }) {
  return <>{links.map((link) => (
    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="project-action inline-flex items-center gap-1.5 py-1 text-xs font-medium text-accent">
      {link.label}<ArrowUpRight size={14} aria-hidden="true" />
      <span className="sr-only"> ({newTabLabel})</span>
    </a>
  ))}</>;
}
