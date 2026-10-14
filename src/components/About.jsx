import { useState } from "react";
import { profile } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import Counter from "./Counter.jsx";
import profilePhoto from "../assets/profile.jpg"; // ✏️ your photo lives here

export default function About() {
  const [imgFailed, setImgFailed] = useState(false);
  const showPhoto = profile.photo && !imgFailed;

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">01 · About Me</span>
          <h2>
            Turning ideas into <span className="grad">working software</span>
          </h2>
        </div>

        <div className="about-grid">
          <Reveal variant="reveal-left" className="about-card">
            <div className="avatar-md">
              {showPhoto ? (
                <img src={profilePhoto} alt={profile.name} onError={() => setImgFailed(true)} />
              ) : (
                profile.initials
              )}
            </div>
            <h3>{profile.name}</h3>
            <p className="role-line">{profile.tagline}</p>
            <div className="about-badges">
              {profile.badges.map((b) => (
                <span className="badge-chip" key={b}>
                  {b}
                </span>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary btn-sm">
              Let's work together
            </a>
          </Reveal>

          <div className="about-text">
            <Reveal variant="reveal-right">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <ul className="about-facts">
                {profile.facts.map((f) => (
                  <li key={f.label}>
                    <span>{f.icon}</span> {f.label}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="stats-row">
              {profile.stats.map((s, i) => (
                <Reveal as="div" className="stat-card" key={s.label} delay={i * 0.08}>
                  <Counter value={s.value} suffix={s.suffix} />
                  <div className="stat-label">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
