import React from "react";
import { PROFILE } from "../data";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="gutter">06</div>
      <div>
        <p className="prompt">
          <span className="sym">$</span> cat contact.txt
        </p>
        <p className="contact-line">
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        </p>
        <p className="footer-note">
          {PROFILE.phone} · {PROFILE.githubLabel} · {PROFILE.linkedinLabel}
        </p>
      </div>
    </section>
  );
}
