import { projects } from '../data.js'

export default function Projects() {
  return (
    <section className="section shell" id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-row" key={project.title}>
            <header className="project-head">
              <div>
                <h3>{project.title}</h3>
                <p className="project-meta">{project.meta}</p>
              </div>
              {project.href && (
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </header>
            <p className="project-description">{project.description}</p>
            <ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            <p className="project-tech">{project.tech.join(' · ')}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
