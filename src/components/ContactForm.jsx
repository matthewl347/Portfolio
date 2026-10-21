import { useState } from 'react'
import { profile } from '../data.js'

const STATUS = {
  idle: 'idle',
  sending: 'sending',
  success: 'success',
  error: 'error',
}

export default function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(STATUS.idle)

  const updateField = (key) => (event) => {
    setFields((current) => ({ ...current, [key]: event.target.value }))
    if (status === STATUS.error) setStatus(STATUS.idle)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!profile.formEndpoint) {
      setStatus(STATUS.error)
      return
    }

    setStatus(STATUS.sending)

    try {
      const response = await fetch(profile.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.currentTarget),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setStatus(STATUS.success)
      setFields({ name: '', email: '', message: '' })
    } catch {
      setStatus(STATUS.error)
    }
  }

  if (status === STATUS.success) {
    return (
      <div className="contact-form-success" role="status">
        <p className="mini-label">Message sent</p>
        <h3>Thanks for reaching out.</h3>
        <p>Your message was sent successfully. I&apos;ll get back to you as soon as I can.</p>
        <button className="contact-reset" type="button" onClick={() => setStatus(STATUS.idle)}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <p className="mini-label">Send a message</p>
        <p>Use the form below and it will be delivered directly to my inbox.</p>
      </div>

      <div className="contact-form-grid">
        <label className="contact-field">
          <span>Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            value={fields.name}
            onChange={updateField('name')}
            required
          />
        </label>

        <label className="contact-field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={fields.email}
            onChange={updateField('email')}
            required
          />
        </label>
      </div>

      <label className="contact-field contact-message-field">
        <span>Message</span>
        <textarea
          name="message"
          rows="6"
          placeholder="Tell me what you'd like to talk about..."
          value={fields.message}
          onChange={updateField('message')}
          required
        />
      </label>

      <input className="contact-honeypot" type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />

      <div className="contact-form-footer">
        <button className="button primary contact-submit" type="submit" disabled={status === STATUS.sending}>
          {status === STATUS.sending ? 'Sending...' : 'Send message'}
        </button>
        {status === STATUS.error && (
          <p className="contact-form-error" role="alert">
            Something went wrong. You can still email me directly at{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
        )}
      </div>
    </form>
  )
}
