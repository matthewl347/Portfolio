import { experience } from '../data.js'

export default function Experience() {
  return (
    <section className="section shell" id="experience">
      <div className="section-heading">
        <p className="section-number">03</p>
        <div><p className="kicker">Experience</p><h2>Shipping, debugging, and leading.</h2></div>
      </div>
      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline-item" key={`${job.company}-${job.dates}`}>
            <div className="timeline-date">{job.dates}</div>
            <div className="timeline-line"><span /></div>
            <div className="timeline-content">
              <p className="job-company">{job.company}</p>
              <h3>{job.role}</h3>
              {job.location && <p className="job-location">{job.location}</p>}
              <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <div className="tags">{job.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
