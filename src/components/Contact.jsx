import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '../data.js'
import ContactForm from './ContactForm.jsx'

export default function Contact() {
  return (
    <section className="contact shell" id="contact">
      <p className="kicker">Let&apos;s build something useful.</p>
      <h2>Looking for software engineering opportunities where I can own meaningful work and keep learning quickly.</h2>

      <div className="contact-layout">
        <div className="contact-copy">
          <p>
            Have a role, project, or idea you think I&apos;d be a good fit for? Send me a message here or reach out directly by email.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRight size={22} />
          </a>
        </div>

        <ContactForm />
      </div>

      <div className="contact-bottom">
        <p>© {new Date().getFullYear()} Matthew Lin</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><ArrowUpRight size={19} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><ArrowUpRight size={19} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={19} /></a>
        </div>
      </div>
    </section>
  )
}
