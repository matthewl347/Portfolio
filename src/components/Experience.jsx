import React from "react";
import { COMMITS } from "../data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="gutter">04</div>
      <div>
        <h2 className="sec-title">// experience — git log --reverse</h2>
        <div className="log">
          {COMMITS.map((c) => (
            <div className="commit" key={c.hash}>
              <div>
                <span className="commit-hash">{c.hash}</span>
                <span className="commit-date">{c.date}</span>
              </div>
              <div>
                <p className="commit-role">
                  {c.role} <span className="commit-org">— {c.org}</span>
                </p>
                <p className="commit-desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
