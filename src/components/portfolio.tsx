"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { projects, profile, type Project } from "@/lib/portfolio";
import { Arrow, CursorMark, InterfacePreview } from "./interface-preview";

function AnimatedTitle({ text, className = "" }: { text: string; className?: string }) {
  const chunks = text.match(/.{1,2}/g) || [];
  return <span aria-label={text} className={`split-title ${className}`}>{chunks.map((chunk, i)=><span aria-hidden="true" key={i} style={{"--char": i} as CSSProperties}>{chunk.replace(/ /g,"\u00a0")}</span>)}</span>;
}

function HeroShowcase({ onOpen }: { onOpen: (project: Project) => void }) {
  const highlights = projects.slice(0, 2);

  return <div className="hero-showcase" aria-label="Featured Roblox projects">
    {highlights.map(project => <button className="hero-project" key={project.id} onClick={() => onOpen(project)} aria-label={`Open ${project.name}`}>
      <InterfacePreview project={project}/>
      <span className="hero-project-category">{project.category}</span>
      <span className="hero-project-name">{project.name}<Arrow diagonal/></span>
    </button>)}
  </div>;
}

function ProjectGallery({ project }: { project: Project }) {
  const [viewIndex, setViewIndex] = useState(0);
  const views = [project, ...(project.additionalImages || [])];
  const current = views[viewIndex];

  return <div className="dialog-gallery" onKeyDown={event => {
    if (views.length > 1 && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
      event.preventDefault();
      event.stopPropagation();
      setViewIndex(index => (index + (event.key === "ArrowRight" ? 1 : -1) + views.length) % views.length);
    }
  }}>
    <div className="dialog-preview" style={{ background: project.color }}><InterfacePreview project={current}/></div>
    {views.length > 1 && <>
      <div className="project-views" role="group" aria-label={`${project.name} screenshots`}>
        {views.map((view, index) => <button key={view.image} aria-pressed={viewIndex === index} onClick={() => setViewIndex(index)}>
          <InterfacePreview project={view}/><span>{view.label || project.name}</span>
        </button>)}
      </div>
      <p className="view-status" role="status">{current.label || project.name} <span>{viewIndex + 1} of {views.length}</span></p>
    </>}
  </div>;
}

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const filtered = projects.filter(p=>filter==="All" || p.category===filter);

  useEffect(()=>{
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");observer.unobserve(e.target);}}),{threshold:.08,rootMargin:"0px 0px -24px 0px"});
    document.querySelectorAll("[data-reveal]").forEach(el=>observer.observe(el));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = ()=>{
      frame=0;
      if(reduced.matches) return;
      const y=window.scrollY;
      const max=document.documentElement.scrollHeight-window.innerHeight;
      document.documentElement.style.setProperty("--scroll-progress",`${max>0?y/max:0}`);
      document.querySelector<HTMLElement>(".hero-name")?.style.setProperty("--hero-shift",`${Math.min(y*.14,90)}px`);
      document.querySelector<HTMLElement>(".hero-showcase")?.style.setProperty("--hero-drift",`${Math.min(y*.075,48)}px`);
    };
    const scroll=()=>{if(!frame)frame=requestAnimationFrame(update);};
    window.addEventListener("scroll",scroll,{passive:true}); update();
    return()=>{observer.disconnect();window.removeEventListener("scroll",scroll);cancelAnimationFrame(frame);document.documentElement.classList.remove("motion-ready");if(copyTimer.current) clearTimeout(copyTimer.current);};
  },[]);

  useEffect(()=>{
    if(selected){dialog.current?.showModal();document.body.style.overflow="hidden";}
    else {dialog.current?.close();document.body.style.overflow="";}
    return()=>{document.body.style.overflow="";};
  },[selected]);

  const openProject = (project: Project) => {lastFocused.current=document.activeElement as HTMLElement;setSelected(project);};
  const closeProject = () => {setSelected(null);requestAnimationFrame(()=>lastFocused.current?.focus());};
  const stepProject = (step: number) => {if(selected){const index=projects.findIndex(p=>p.id===selected.id);setSelected(projects[(index+step+projects.length)%projects.length]);}};
  const copyDiscord = async () => {
    try {await navigator.clipboard.writeText(profile.discord);setCopied(true);setCopyFailed(false);if(copyTimer.current) clearTimeout(copyTimer.current);copyTimer.current=setTimeout(()=>setCopied(false),2400);} catch {setCopyFailed(true);}
  };

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="reading-progress" aria-hidden="true"/>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="intercept home"><span className="brand-symbol"><CursorMark/></span>intercept<span className="brand-period">.</span></a>
      <nav id="main-navigation" aria-label="Main navigation" className={menuOpen?"menu-open":""}>{[ ["Work","#work"],["Catalog","#catalog"],["Contact","#contact"] ].map(([label,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={()=>setMenuOpen(false)}>Let’s talk <Arrow diagonal/></a></nav>
      <div className="header-actions"><button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?"Close":"Menu"}<span>{menuOpen?"−":"+"}</span></button></div>
    </header>
    <main id="main">
      <section id="top" className="hero" aria-labelledby="hero-heading">
        <h1 className="hero-name" id="hero-heading"><AnimatedTitle text="intercept"/></h1>
        <div className="hero-bottom"><div className="hero-copy"><p>UI designer & Roblox Lua scripter.</p><a href="#work" className="work-link"><span className="circle-arrow"><Arrow/></span><span>Explore my work</span></a></div><HeroShowcase onOpen={openProject}/></div>
        <div className="hero-foot"><span>Interfaces with character.</span><a href="#work">Made to be explored <span>↓</span></a></div>
      </section>

      <section id="work" className="work-section section-pad" aria-labelledby="work-heading">
        <div className="section-heading" data-reveal><h2 id="work-heading">Selected work<span className="accent-period">.</span></h2><p>UI design & Lua systems.</p></div>
        <div className="work-grid">{projects.slice(0,3).map(project=><article className={`featured-project project-${project.id}`} data-reveal="image" key={project.id}>
          <button className="project-visual" style={{background:project.color}} onClick={()=>openProject(project)} aria-label={`View ${project.name}`}><div className="feature-preview-wrap"><InterfacePreview project={project}/></div><span className="project-open"><Arrow diagonal/></span><span className="project-kind">{project.category === "Scripting" ? "Roblox scripting" : "Roblox UI"}</span></button>
          <div className="project-caption"><h3>{project.name}</h3><span>{project.category}</span></div>
        </article>)}</div>
      </section>

      <section id="catalog" className="catalog-section" aria-labelledby="catalog-heading">
        <div className="catalog-header section-pad"><div className="section-heading" data-reveal><h2 id="catalog-heading">The collection<span className="accent-period">.</span></h2><p>User interfaces and Lua systems.<br/>A closer look at the work.</p></div><div className="catalog-toolbar" data-reveal><div className="catalog-filters" role="group" aria-label="Filter UI collection">{["All","User Interface","Scripting"].map(v=><button key={v} aria-pressed={filter===v} onClick={()=>setFilter(v)}>{v}</button>)}</div><p className="catalog-count" role="status">{filtered.length} {filtered.length === 1 ? "project" : "projects"}<span className="sr-only"> in {filter === "All" ? "the collection" : filter}</span></p></div></div>
        <ul className="catalog-list section-pad" aria-label="Project collection">{filtered.map(project=><li className="catalog-item" key={project.id}>
          <button className="catalog-visual" style={{background:project.color}} onClick={()=>openProject(project)} aria-label={`View ${project.name}`}><InterfacePreview project={project}/></button>
          <div className="catalog-details"><h3>{project.name}</h3><div className="catalog-meta"><span>{project.category}</span>{project.additionalImages && <span>{project.additionalImages.length + 1} views</span>}</div></div>
          <button className="catalog-more" onClick={()=>openProject(project)} aria-label={`Show more about ${project.name}`}>Show more<Arrow diagonal/></button>
        </li>)}</ul>
      </section>

      <section id="contact" className="contact-section section-pad" aria-labelledby="contact-heading"><div className="contact-top" data-reveal><p>A new experience.<br/>An interface that needs a little more life.</p><span>Let’s make it happen.</span></div><h2 id="contact-heading" data-reveal><AnimatedTitle text="Let’s make"/><br/><AnimatedTitle text="it playable."/></h2><div className="contact-bottom" data-reveal><div><button className="discord-handle" onClick={copyDiscord} aria-label="Copy Discord handle intrcept">@{profile.discord}<span className="copy-icon" aria-hidden="true"><i/><i/></span></button><p className="copy-status" role="status">{copied?"Copied. See you on Discord.":copyFailed?"Copy this handle to add me on Discord: intrcept":"Discord. Click to copy my handle."}</p></div><a href="https://discord.com/app" target="_blank" rel="noreferrer" className="discord-open">Open Discord<Arrow diagonal/></a></div></section>
    </main>
    <footer className="site-footer section-pad"><a className="footer-name" href="#top" aria-label="intercept back to top">intercept<span>↗</span></a><div className="footer-bottom"><span>© {new Date().getFullYear()} intercept</span><a href="#top">Back to top ↑</a></div></footer>

    <dialog className="project-dialog" ref={dialog} onCancel={e=>{e.preventDefault();closeProject();}} onClick={e=>{if(e.target===e.currentTarget) closeProject();}} onKeyDown={e=>{if(e.key==="ArrowRight")stepProject(1);if(e.key==="ArrowLeft")stepProject(-1);}} aria-labelledby="dialog-title" aria-describedby="dialog-description">
      {selected&&<div className="dialog-content"><div className="dialog-top"><span>{selected.category}</span><button onClick={closeProject} autoFocus aria-label="Close project">Close <span>×</span></button></div><ProjectGallery key={selected.id} project={selected}/><div className="dialog-details"><div><h2 id="dialog-title">{selected.name}</h2></div><div><p id="dialog-description">{selected.description}</p><div className="dialog-scope">{selected.scope.map(s=><span key={s}>{s}</span>)}</div></div></div><div className="dialog-bottom"><button onClick={()=>stepProject(-1)}>← Previous</button><span>{projects.findIndex(p=>p.id===selected.id)+1} of {projects.length}</span><button onClick={()=>stepProject(1)}>Next project →</button></div></div>}
    </dialog>
  </>;
}


