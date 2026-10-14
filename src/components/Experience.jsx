import { experience } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">04 · Journey</span>
          <h2>
            Experience &amp; <span className="grad">growth</span>
          </h2>
        </div>

        <div className="timeline">
          {experience.map((item, i) => (
            <Reveal className="timeline-item" key={item.role} delay={i * 0.08}>
              <div className={`timeline-dot${item.current ? " current" : ""}`} aria-hidden="true"></div>
              <div className="timeline-card">
                <div className="t-head">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="company">{item.company}</p>
                  </div>
                  <span className="period">{item.period}</span>
                </div>
                <p>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
