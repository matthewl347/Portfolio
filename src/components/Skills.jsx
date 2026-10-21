import { skills } from '../data.js'

export default function Skills() {
  return (
    <section className="section shell" id="skills">
      <div className="section-heading">
        <p className="section-number">04</p>
        <div><p className="kicker">Technical toolkit</p><h2>Tools I use to turn ideas into systems.</h2></div>
      </div>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.category}>
            <h3>{group.category}</h3>
            <div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
