import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import portrait from "@/app/13.png";
import type { Portfolio, UiText, NavigationItem } from "@/data/portfolio";
import { Navigation } from "./navigation";
import { SocialLinks } from "./social-links";

export function Sidebar({ portfolio, copy, navigation }: { portfolio: Portfolio; copy: UiText; navigation: NavigationItem[] }) {
  const nickname = portfolio.name.match(/\(([^)]+)\)$/)?.[1];
  const fullName = portfolio.name.replace(/\s*\([^)]+\)$/, "");
  return <header className="sidebar">
    <div>
      <div className="profile-portrait">
        <Image src={portrait} alt={fullName} sizes="(max-width: 639px) 120px, 144px" preload className="profile-portrait-image" />
      </div>
      <h1 className="profile-name" aria-label={portfolio.name}>
        <span aria-hidden="true">
          {fullName.split(" ").map((word, index) => <span key={`${word}-${index}`}>
            {index > 0 && " "}<span className="name-word"><span style={{ animationDelay: `${index * 110}ms` }}>{word}</span></span>
          </span>)}
          {nickname && <span className="profile-nickname">({nickname})</span>}
        </span>
      </h1>
      <p className="profile-role">{portfolio.role}</p>
      <p className="profile-tagline">{portfolio.tagline}</p>
      <Navigation items={navigation} label={copy.navigationLabel} />
      <a href={portfolio.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-link mt-6 inline-block text-sm font-semibold text-accent">
        {copy.viewResume}
        <span className="sr-only"> ({copy.resumeHint})</span>
      </a>
    </div>
    <div className="sidebar-contact">
      <a href="#projects" className="explore-link">{copy.exploreWork} <ArrowDownRight size={17} aria-hidden="true" /></a>
      <div className="mt-6"><SocialLinks portfolio={portfolio} newTabLabel={copy.opensInNewTab} /></div>
    </div>
  </header>;
}
