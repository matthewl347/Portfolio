import React, { useState } from "react";
import { PROFILE } from "../data";

const STATUS = {
  idle: "idle",
  sending: "sending",
  success: "success",
  error: "error",
};

export default function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(STATUS.idle);

  const update = (key) => (e) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!PROFILE.formEndpoint) {
      setStatus(STATUS.error);
      return;
    }
    setStatus(STATUS.sending);
    try {
      const res = await fetch(PROFILE.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus(STATUS.success);
        setFields({ name: "", email: "", message: "" });
      } else {
        setStatus(STATUS.error);
      }
    } catch {
      setStatus(STATUS.error);
    }
  };

  if (status === STATUS.success) {
    return (
      <div className="compose">
        <p className="compose-sent">
          Message sent — thanks for reaching out. I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form className="compose" onSubmit={handleSubmit}>
      <div className="compose-row compose-static">
        <span className="compose-label">to</span>
        <span className="compose-value">{PROFILE.email}</span>
      </div>
      <div className="compose-row">
        <label className="compose-label" htmlFor="name">from</label>
        <input
          id="name"
          name="name"
          className="compose-input"
          type="text"
          placeholder="your name"
          value={fields.name}
          onChange={update("name")}
          required
        />
      </div>
      <div className="compose-row">
        <label className="compose-label" htmlFor="email">reply-to</label>
        <input
          id="email"
          name="email"
          className="compose-input"
          type="email"
          placeholder="your email"
          value={fields.email}
          onChange={update("email")}
          required
        />
      </div>
      <div className="compose-row compose-row-top">
        <label className="compose-label" htmlFor="message">message</label>
        <textarea
          id="message"
          name="message"
          className="compose-textarea"
          rows={5}
          placeholder="what's up?"
          value={fields.message}
          onChange={update("message")}
          required
        />
      </div>
      <div className="compose-footer">
        <button className="compose-send" type="submit" disabled={status === STATUS.sending}>
          {status === STATUS.sending ? "sending..." : "send message"}
        </button>
        {status === STATUS.error && (
          <span className="compose-error">
            Something went wrong — email {PROFILE.email} directly instead.
          </span>
        )}
      </div>
    </form>
  );
}
