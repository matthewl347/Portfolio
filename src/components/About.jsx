import { education } from '../data.js'

export default function About() {
  return (
    <section className="section shell" id="about">
      <div className="section-heading">
        <p className="section-number">01</p>
        <div><p className="kicker">About</p><h2>Engineering across the stack.</h2></div>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I enjoy technical challenges where I can understand a system end-to-end: reproducing a bug, tracing its cause, designing a safer implementation, and validating the result. That mindset has shaped my work across backend systems, web products, game development, and embedded hardware.
          </p>
          <p>
            I am especially interested in software engineering roles where I can own meaningful features, work close to real users, and keep developing stronger systems-level intuition.
          </p>
        </div>
        <div className="education-card">
          <span className="mini-label">Education</span>
          <h3>{education.school}</h3>
          <p>{education.degree}</p>
          <div className="education-meta"><span>{education.graduation}</span><span>GPA {education.gpa}</span></div>
          <div className="course-list">
            {education.coursework.map((course) => <span key={course}>{course}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
