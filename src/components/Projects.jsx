import { useState } from "react";
import { projects } from "../data/portfolio.js";
import Reveal from "./Reveal.jsx";
import { UiIcons } from "./Icons.jsx";

const CATEGORY_LABELS = { web: "Web Apps", mobile: "Mobile", uiux: "UI/UX" };

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", ...new Set(projects.map((p) => p.category))];
  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">03 · Portfolio</span>
          <h2>
            My <span className="grad">projects</span>
          </h2>
          <p>What I've designed and built so far — more on the way.</p>
        </div>

        <div className="filters reveal" role="group" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn${filter === c ? " active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c === "all" ? "All" : CATEGORY_LABELS[c] || c}
            </button>
          ))}
        </div>

        {/* key={filter} re-mounts the grid so cards re-stagger when filtering */}
        <div className="projects-grid" key={filter}>
          {visible.map((p, i) => (
            <Reveal as="article" className="project-card" key={p.title} delay={i * 0.08}>
              <div className="project-thumb">
                <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${p.title} preview`}>
                  <defs>
                    <linearGradient id="thumbGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor={p.gradient[0]} />
                      <stop offset="1" stopColor={p.gradient[1]} />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="250" fill="url(#thumbGrad)" />
                  <circle cx="340" cy="40" r="95" fill="rgba(255,255,255,.08)" />
                  <circle cx="30" cy="235" r="70" fill="rgba(255,255,255,.07)" />
                  <text x="200" y="132" fontSize="62" textAnchor="middle">
                    {p.emoji}
                  </text>
                </svg>
                <span className="project-tag">
                  {p.featured ? "★ " : ""}
                  {p.tag}
                </span>
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.code}>
                    <UiIcons.Code /> Code
                  </a>
                  <a href={p.live}>
                    <UiIcons.External /> Live
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
