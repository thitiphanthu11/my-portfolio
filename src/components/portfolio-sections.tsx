import { Trophy } from "lucide-react";
import type { Portfolio, UiText } from "@/data/portfolio";
import { Section, Tags } from "./section";
import { ProjectCard } from "./project-card";
import { ProjectLinks } from "./project-links";

export function PortfolioSections({ portfolio, copy }: { portfolio: Portfolio; copy: UiText }) {
  return <>
    <section id="about" aria-labelledby="about-heading" className="portfolio-section">
      <h2 id="about-heading" className="intro-heading">{portfolio.aboutTitle}</h2>
      <div className="reading-copy space-y-5">
        {portfolio.about.map((paragraph) => (
          <p key={paragraph}>
            {paragraph.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
              part.startsWith("**") && part.endsWith("**")
                ? <strong key={index} className="font-semibold text-neutral-900">{part.slice(2, -2)}</strong>
                : part,
            )}
          </p>
        ))}
      </div>
    </section>
    <Section id="experience" number="02" title={copy.sections.experience}>
      {portfolio.experience.map((job) => (
        <article className="timeline-entry" data-reveal="" key={`${job.company}-${job.project}-${job.role}`}>
          <p className="font-mono text-[11px] text-muted">{job.period}</p>
          <h3 className="mt-3 text-lg font-medium">{job.project}</h3>
          <p className="mt-2 text-sm font-semibold text-accent">{job.role}</p>
          <p className="mt-1 text-sm text-neutral-600">{job.company}</p>
          <ul className="reading-copy mt-4 list-disc space-y-3 pl-4 marker:text-accent">
            {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          {job.stack.length > 0 && <Tags items={job.stack} label={copy.technologies} />}
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2"><ProjectLinks links={job.links} newTabLabel={copy.opensInNewTab} /></div>
        </article>
      ))}
    </Section>
    <Section id="projects" number="03" title={copy.sections.projects}><div className="project-list">{portfolio.projects.map((project) => <ProjectCard key={project.id} project={project} copy={copy} />)}</div></Section>
    <Section id="skills" number="04" title={copy.sections.skills}>
      <div className="divide-y divide-neutral-200">
        {portfolio.skills.map((skill) => (
          <div data-reveal="" key={skill.category} className="skill-row grid gap-3 py-5 first:pt-0 sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-6">
            <h3 className="pt-1 text-sm font-semibold">{skill.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item) => <li key={item} className="skill-tag">{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
    <Section id="activities" number="05" title={copy.sections.activities}>
      {portfolio.activities.map((activity) => (
        <article key={activity.title} data-reveal="">
          <p className="font-mono text-[11px] text-muted">{activity.period}</p>
          <h3 className="mt-3 text-lg leading-7 font-semibold">{activity.title}</h3>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="award-badge inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-accent"><Trophy size={15} aria-hidden="true" />{activity.award}</span>
            <p className="text-sm font-medium text-neutral-600">{activity.role}</p>
          </div>
          <ul className="reading-copy mt-4 list-disc space-y-3 pl-4 marker:text-accent">
            {activity.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </article>
      ))}
    </Section>
  </>;
}
