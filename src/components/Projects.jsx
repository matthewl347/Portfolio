import React, { useState } from "react";
import { ExternalLink, ChevronRight } from "lucide-react";
import { PROJECTS } from "../data";

function ProjectRow({ project, isOpen, onToggle }) {
  return (
    <div className="proj-row" data-open={isOpen}>
      <button className="proj-header" onClick={onToggle} aria-expanded={isOpen}>
        <span className="proj-id">{project.id}</span>
        <span className="proj-name">{project.name}</span>
        <span className="proj-stack-preview">{project.stack.join(" · ")}</span>
        <ChevronRight className="proj-chevron" size={16} strokeWidth={2} />
      </button>
      {isOpen && (
        <div className="proj-body">
          <p>{project.desc}</p>
          <div className="proj-footer">
            <div className="proj-tags">
              {project.stack.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
            <a href={project.link} className="proj-link">
              view source <ExternalLink size={13} strokeWidth={2} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [openProject, setOpenProject] = useState("01");

  return (
    <section className="section" id="projects">
      <div className="gutter">03</div>
      <div>
        <h2 className="sec-title">// projects</h2>
        <div className="proj-list">
          {PROJECTS.map((p) => (
            <ProjectRow
              key={p.id}
              project={p}
              isOpen={openProject === p.id}
              onToggle={() => setOpenProject(openProject === p.id ? null : p.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
