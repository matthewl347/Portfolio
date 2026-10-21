import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { highlights, profile } from '../data.js'

export default function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" />{profile.eyebrow}</p>
        <h1>{profile.headline}</h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">View my work <ArrowDown size={17} /></a>
          <a className="button secondary" href={profile.resume} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={17} /></a>
        </div>
        <div className="socials" aria-label="Social links">
          <a href={profile.github} target="_blank" rel="noreferrer"><ArrowUpRight size={19} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight size={19} /> LinkedIn</a>
          <a href={`mailto:${profile.email}`}><Mail size={19} /> Email</a>
        </div>
      </div>
      <aside className="hero-card" aria-label="Quick profile summary">
        <p className="card-kicker">Currently focused on</p>
        <div className="focus-stack">
          <span>Backend systems</span>
          <span>Full-stack engineering</span>
          <span>Embedded software</span>
          <span>Data-driven products</span>
        </div>
        <div className="stats-grid">
          {highlights.map((item) => (
            <div key={item.label} className="stat">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  )
}
