import { highlights, profile } from '../data.js'

export default function Hero() {
  return (
    <section className="hero shell" id="top">
      <p className="hero-meta">{profile.eyebrow}</p>
      <h1>{profile.name}</h1>
      <p className="hero-summary">{profile.summary}</p>
      <p className="hero-links">
        <a href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </p>
      <dl className="hero-facts">
        {highlights.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
