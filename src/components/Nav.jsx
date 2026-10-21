import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data.js'

const links = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Matthew Lin home">ML<span>.</span></a>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
        </div>
        <button className="nav-toggle" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  )
}
