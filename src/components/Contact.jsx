import { useState } from "react";
import { contact, formEndpoint, profile } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import { BrandIcon, UiIcons } from "./Icons.jsx";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [invalid, setInvalid] = useState({});
  const [status, setStatus] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!form.name.trim()) errors.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = true;
    if (!form.subject.trim()) errors.subject = true;
    if (!form.message.trim()) errors.message = true;

    setInvalid(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("Please fill in the highlighted fields correctly.");
      return;
    }

    if (formEndpoint) {
      // ✏️ Hook up Formspree / EmailJS here — see README for 2-minute setup.
      fetch(formEndpoint, { method: "POST", body: JSON.stringify(form) })
        .then(() => setSent(true))
        .catch(() => setStatus("Something went wrong — please email me directly."));
    } else {
      setSent(true);
    }
  };

  const items = [
    { type: "mailto", value: contact.email, icon: UiIcons.Mail, small: "Email", strong: contact.email },
    { type: "tel", value: contact.phone, icon: UiIcons.Phone, small: "Phone", strong: contact.phone },
  ].filter((i) => i.value);

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="contact-grid">
          <Reveal variant="reveal-left" className="contact-copy">
            <span className="eyebrow">05 · Contact</span>
            <h2>
              Let's build something <span className="grad">amazing</span>
            </h2>
            <p className="lead">
              Have a project in mind, or just want to say hi? My inbox is always open — I
              usually reply within 24 hours.
            </p>

            <div className="contact-list">
              {items.map((item) => (
                <a
                  className="contact-item"
                  href={`${item.type}:${item.value}`}
                  key={item.small}
                >
                  <span className="contact-icon">
                    <item.icon />
                  </span>
                  <span>
                    <small>{item.small}</small>
                    <strong>{item.strong}</strong>
                  </span>
                </a>
              ))}
              <div className="contact-item">
                <span className="contact-icon">
                  <UiIcons.Pin />
                </span>
                <span>
                  <small>Location</small>
                  <strong>{contact.location}</strong>
                </span>
              </div>
            </div>

            <div className="hero-socials">
              {profile.socials.map((s) => (
                <a key={s.name} href={s.href} aria-label={s.label}>
                  <BrandIcon name={s.name} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal variant="reveal-right" className="contact-form-card">
            {!sent ? (
              <>
                <h3>Send me a message ✉️</h3>
                <form id="contactForm" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className={`form-group${invalid.name ? " invalid" : ""}`}>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text" id="name" name="name" placeholder="Jane Doe"
                        value={form.name} onChange={handleChange} autoComplete="name"
                      />
                      <span className="error-msg">Please enter your name.</span>
                    </div>
                    <div className={`form-group${invalid.email ? " invalid" : ""}`}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email" id="email" name="email" placeholder="jane@email.com"
                        value={form.email} onChange={handleChange} autoComplete="email"
                      />
                      <span className="error-msg">Please enter a valid email address.</span>
                    </div>
                  </div>
                  <div className={`form-group${invalid.subject ? " invalid" : ""}`}>
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text" id="subject" name="subject" placeholder="Project inquiry"
                      value={form.subject} onChange={handleChange}
                    />
                    <span className="error-msg">Please add a subject.</span>
                  </div>
                  <div className={`form-group${invalid.message ? " invalid" : ""}`}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message" name="message" placeholder="Tell me about your project…"
                      value={form.message} onChange={handleChange}
                    ></textarea>
                    <span className="error-msg">Please write a message.</span>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Send Message <UiIcons.Send />
                  </button>
                  {status && (
                    <div className="form-status show" role="alert">
                      {status}
                    </div>
                  )}
                </form>
              </>
            ) : (
              <div className="form-success show">
                <div className="success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h4>Message sent! 🎉</h4>
                <p>Thanks for reaching out — I'll get back to you within 24 hours.</p>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => {
                    setForm(initialForm);
                    setSent(false);
                    setStatus("");
                  }}
                >
                  Send another message
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
