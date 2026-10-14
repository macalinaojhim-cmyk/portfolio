import { testimonials } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";

/**
 * Rendered only when testimonials has content (see App.jsx).
 * Add entries in src/data/portfolio.js to make it appear.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">05 · Feedback</span>
          <h2>
            What people <span className="grad">say</span>
          </h2>
          <p>Kind words from clients and teammates I've worked with.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal as="figure" className="t-card" key={t.name} delay={i * 0.1}>
              <div className="t-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote className="t-quote">“{t.quote}”</blockquote>
              <figcaption className="t-person">
                <div className="t-avatar">
                  {t.initials}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
