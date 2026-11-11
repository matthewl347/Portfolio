import { experience } from '../data.js'

export default function Experience() {
  return (
    <section className="section shell" id="experience">
      <h2>Experience</h2>
      <div className="jobs">
        {experience.map((job) => (
          <article className="job" key={`${job.company}-${job.dates}`}>
            <p className="job-dates">{job.dates}</p>
            <div>
              <h3>{job.role}</h3>
              <p className="job-company">{job.company}{job.location ? ` · ${job.location}` : ''}</p>
              <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <p className="job-tech">{job.tech.join(' · ')}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
