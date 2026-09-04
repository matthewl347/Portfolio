import React from "react";
import { PROFILE } from "../data";
import { useCopyEmail } from "../useCopyEmail";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { copied, handleClick } = useCopyEmail(PROFILE.email);

  return (
    <section className="section contact" id="contact">
      <div className="gutter">06</div>
      <div>
        <p className="prompt">
          <span className="sym">$</span> cat contact.txt
        </p>
        <p className="contact-line">
          <a href={`mailto:${PROFILE.email}`} onClick={handleClick}>
            {copied ? "copied to clipboard" : PROFILE.email}
          </a>
        </p>
        <p className="footer-note">
          {PROFILE.phone} · {PROFILE.githubLabel} · {PROFILE.linkedinLabel}
        </p>
        <p className="prompt compose-prompt">
          <span className="sym">$</span> mail -s "hello" {PROFILE.email}
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
