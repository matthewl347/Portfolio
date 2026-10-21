import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { projects } from '../data.js'

function ProjectRow({ project, index }) {
  const [open, setOpen] = useState(index === 0)
  return (
    <article className={`project-row ${open ? 'expanded' : ''}`}>
      <button className="project-head" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <div className="project-index">0{index + 1}</div>
        <div className="project-title-wrap">
          <h3>{project.title}</h3>
          <p>{project.meta}</p>
        </div>
        <div className="project-tech-preview">{project.tech.slice(0, 3).join(' · ')}</div>
        <ChevronDown className="project-chevron" size={20} />
      </button>
      <div className="project-body">
        <div className="project-body-inner">
          <p className="project-description">{project.description}</p>
          <ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          <div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="section shell" id="projects">
      <div className="section-heading">
        <p className="section-number">02</p>
        <div><p className="kicker">Selected projects</p><h2>Work that shows how I build.</h2></div>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => <ProjectRow key={project.title} project={project} index={index} />)}
      </div>
    </section>
  )
}
