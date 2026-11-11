import { education } from '../data.js'

export default function About() {
  return (
    <section className="section shell" id="about">
      <h2>About</h2>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            Most of the work I like starts with a broken path: reproduce it, find the write that went wrong, change the code so it cannot happen again, then prove it. That approach has carried through internships at the NYC DOE, Nebraska Wesleyan&apos;s WISE Program, and Bridge to College, and through projects spanning ESP32 sensors, transit data, and an EHR prototype.
          </p>
          <p>
            I am looking for software engineering roles where I can own features end to end and stay close to the people using them.
          </p>
        </div>
        <div className="education-card">
          <h3>Education</h3>
          <p className="education-school">{education.school}</p>
          <p>{education.degree}</p>
          <p className="education-meta">{education.graduation} · GPA {education.gpa}</p>
          <p className="course-list">{education.coursework.join(', ')}</p>
        </div>
      </div>
    </section>
  )
}
