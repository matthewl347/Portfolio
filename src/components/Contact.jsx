import { profile } from '../data.js'
import ContactForm from './ContactForm.jsx'

export default function Contact() {
  return (
    <section className="contact shell" id="contact">
      <h2>Contact</h2>
      <p className="contact-lead">
        Open to software engineering internships and roles. Write through the form or email me directly.
      </p>

      <div className="contact-layout">
        <div className="contact-copy">
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <p>{profile.location}</p>
        </div>
        <ContactForm />
      </div>

      <div className="contact-bottom">
        <p>© {new Date().getFullYear()} Matthew Lin</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </section>
  )
}
