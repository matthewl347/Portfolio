import React from "react";
import { PROFILE } from "../data";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="gutter">02</div>
      <div>
        <h2 className="sec-title">// about</h2>
        <div className="about-grid">
          <div className="about-body">
            <p>
              I'm a Computer Science and Information & Web Technologies
              major at RPI, currently splitting time between coursework,
              a growing project list, and internships where I get handed
              legacy code and asked to make it behave.
            </p>
            <p>
              I care most about the parts of software that are easy to
              get subtly wrong — atomic writes, concurrency edge cases,
              interfaces that hold up once real users touch them. That
              pull toward both backend correctness and frontend clarity
              is basically my major's whole personality.
            </p>
          </div>
          <dl className="about-meta">
            <dt>based in</dt>
            <dd>{PROFILE.location}</dd>
            <dt>university</dt>
            <dd>{PROFILE.gradClass}</dd>
            <dt>gpa</dt>
            <dd>{PROFILE.gpa}</dd>
            <dt>open to</dt>
            <dd>{PROFILE.openTo}</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
