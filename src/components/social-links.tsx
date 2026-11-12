import Image from "next/image";
import { GitFork, ContactRound, Mail, Phone } from "lucide-react";
import instagramIcon from "@/app/12.png";
import type { Portfolio } from "@/data/portfolio";
const icons = { github: GitFork, linkedin: ContactRound, email: Mail };
export function SocialLinks({ portfolio, newTabLabel }: { portfolio: Portfolio; newTabLabel: string }) {
  const socials = portfolio.socials.filter((social) => social.kind !== "email" && social.href);
  return <div className="flex flex-col items-start gap-2">
    <a href={portfolio.phone.href} className="contact-link">
      <Phone size={18} aria-hidden="true" className="contact-icon shrink-0 text-accent" />
      <span className="contact-label">{portfolio.phone.label}</span>
    </a>
    {portfolio.email && <a href={`mailto:${portfolio.email}`} className="contact-link">
      <Mail size={18} aria-hidden="true" className="contact-icon shrink-0 text-accent" />
      <span className="contact-label break-all">{portfolio.email}</span>
    </a>}
    {socials.length > 0 && <div className="flex flex-col items-start gap-2">{socials.map((social) => {
      const Icon = social.kind === "instagram" ? null : icons[social.kind];
      return <a className="contact-link" key={social.kind} href={social.href ?? undefined} target="_blank" rel="noopener noreferrer">
        {Icon ? <Icon size={18} aria-hidden="true" className="contact-icon shrink-0 text-accent" /> : (
          <span aria-hidden="true" className="contact-icon relative h-[18px] w-[18px] shrink-0 overflow-hidden">
            {/* Frame the logo inside the source image's transparent padding. */}
            <Image src={instagramIcon} alt="" width={44} height={44} sizes="44px" className="absolute -top-[13.9px] -left-[12.7px] h-[44px] w-[44px] max-w-none" />
          </span>
        )}
        <span className="contact-label">{social.label}</span><span className="sr-only"> ({newTabLabel})</span>
      </a>;
    })}</div>}
  </div>;
}
