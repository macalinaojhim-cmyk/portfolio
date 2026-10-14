import { useEffect, useRef, useState } from "react";
import { skills, tools, toolsNote } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";

function SkillBar({ skill, delay }) {
  const ref = useRef(null);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        // double rAF so the CSS width transition animates from 0
        requestAnimationFrame(() => requestAnimationFrame(() => setLevel(skill.level)));
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [skill.level]);

  return (
    <div className="skill-item" ref={ref} style={{ "--d": `${delay}s` }}>
      <div className="skill-head">
        <span>{skill.name}</span>
        <span className="bar-pct">{level}%</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">02 · My Skills</span>
          <h2>
            My <span className="grad">tech stack</span> &amp; tools
          </h2>
          <p>The technologies I'm learning and building with right now.</p>
        </div>

        <div className="skills-grid">
          <div className="skills-bars">
            {skills.map((s, i) => (
              <SkillBar key={s.name} skill={s} delay={i * 0.08} />
            ))}
          </div>

          <Reveal variant="reveal-right" className="tools-card">
            <h3>🧰 Tools &amp; Technologies</h3>
            <div className="chips">
              {tools.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <p className="tools-note">
              <span>💡</span> {toolsNote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
