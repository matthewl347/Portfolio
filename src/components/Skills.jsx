import React from "react";
import { MANIFEST } from "../data";

const ROWS = [
  { key: "languages", label: "languages" },
  { key: "frameworks", label: "frameworks" },
  { key: "design", label: "design" },
  { key: "coursework", label: "coursework" },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="gutter">05</div>
      <div>
        <h2 className="sec-title">// skills.txt</h2>
        <div className="manifest">
          {ROWS.map(({ key, label }) => (
            <div className="manifest-row" key={key}>
              <span className="manifest-key">{label}</span>
              <span className="manifest-val">
                {MANIFEST[key].map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
