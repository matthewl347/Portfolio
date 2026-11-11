import { skills } from '../data.js'

export default function Skills() {
  return (
    <section className="section shell" id="skills">
      <h2>Skills</h2>
      <dl className="skills-list">
        {skills.map((group) => (
          <div className="skill-row" key={group.category}>
            <dt>{group.category}</dt>
            <dd>{group.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
