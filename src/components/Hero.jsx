import React from "react";
import { Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { PROFILE } from "../data";

export default function Hero() {
  return (
    <section className="section hero">
      <div className="gutter">01</div>
      <div>
        <p className="hero-code">
          <span className="kw">class</span> MatthewLin(<span className="kw">SoftwareEngineer</span>):{"\n"}
          {"    "}major = <span className="str">"{PROFILE.major}"</span>{"\n"}
          {"    "}school = <span className="str">"{PROFILE.school}"</span>
          <span className="cursor" />
        </p>
        <p className="hero-tagline">{PROFILE.tagline}</p>
        <div className="hero-links">
          <a className="icon-link" href={PROFILE.github} aria-label="GitHub">
            <GithubIcon />
          </a>
          <a className="icon-link" href={PROFILE.linkedin} aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a className="icon-link" href={`mailto:${PROFILE.email}`} aria-label="Email">
            <Mail size={17} strokeWidth={1.8} />
          </a>
          <a className="resume-link" href={PROFILE.resumeHref}>
            <FileDown size={15} strokeWidth={1.8} /> resume.pdf
          </a>
        </div>
      </div>
    </section>
  );
}
