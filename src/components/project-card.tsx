import { ArrowUpRight, GitFork } from "lucide-react";
import type { Project, UiText } from "@/data/portfolio";
import { Tags } from "./section";
import { ProjectLinks } from "./project-links";
import { ProjectSurface } from "./project-surface";

export function ProjectCard({ project, copy }: { project: Project; copy: UiText }) {
  const primaryLink = project.demo ?? project.links?.[0]?.href ?? project.github;
  const hasLinks = Boolean(project.links?.length || project.github || project.demo);
  return <ProjectSurface>
    <div className="project-meta" data-motion-step="0">
      <p>{project.category}</p>
    </div>
    <div className="project-content min-w-0">
      <h3 data-motion-step="1" className="text-base leading-7 font-semibold tracking-tight text-neutral-900 sm:text-lg">
        {primaryLink ? <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="project-title">
          {project.name}
          <ArrowUpRight size={16} aria-hidden="true" className="ml-1 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="sr-only"> ({copy.opensInNewTab})</span>
        </a> : project.name}
      </h3>
      {project.description && <p className="reading-copy mt-3" data-motion-step="2">{project.description}</p>}
      {project.highlights && <ul data-motion-step="3" className="reading-copy mt-3 space-y-3" aria-label={copy.projectDetails}>
        {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ul>}
      {project.stack.length > 0 && <div data-motion-step="4"><Tags items={project.stack} label={copy.technologies} /></div>}
      {hasLinks && <div data-motion-step="4" className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
        {project.links && <ProjectLinks links={project.links} newTabLabel={copy.opensInNewTab} />}
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-1 text-accent hover:underline"><GitFork size={14} aria-hidden="true" />{copy.sourceCode}<ArrowUpRight size={13} aria-hidden="true" /><span className="sr-only"> ({copy.opensInNewTab})</span></a>}
        {project.demo && <ProjectLinks links={[{ label: copy.liveDemo, href: project.demo }]} newTabLabel={copy.opensInNewTab} />}
      </div>}
    </div>
  </ProjectSurface>;
}
