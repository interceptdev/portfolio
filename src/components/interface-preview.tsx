import { assetPath, type ProjectImage } from "@/lib/portfolio";

export function Arrow({ diagonal = false, className = "" }: { diagonal?: boolean; className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-7-7 7 7-7 7"} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function CursorMark({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 160 190" className={className} aria-hidden="true"><path d="M29 12v144l38-40 31 61 25-13-32-58 55-10Z" fill="currentColor" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" /></svg>;
}

export function InterfacePreview({ project }: { project: ProjectImage }) {
  return <div className="interface-preview">
    <img src={assetPath(project.image)} alt={project.alt} width={project.width} height={project.height} loading="lazy" decoding="async"/>
  </div>;
}

