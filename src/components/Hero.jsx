import { useEffect, useState } from "react";
import { profile } from "../data/portfolio.js";
import { BrandIcon, UiIcons } from "./Icons.jsx";
import profilePhoto from "../assets/profile.jpg"; // ✏️ your photo lives here

/** Typewriter effect for the hero role line. */
function useTypewriter(words) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIdx];
      charIdx += deleting ? -1 : 1;
      setText(word.slice(0, charIdx));

      let delay = deleting ? 40 : 85;
      if (!deleting && charIdx === word.length) {
        delay = 1600;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    tick();
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const [firstName, ...restName] = profile.name.split(" ");
  const [imgFailed, setImgFailed] = useState(false);
  const showPhoto = profile.photo && !imgFailed;

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-greeting anim-in" style={{ "--d": ".05s" }}>
            👋 Hello there, I'm
          </p>
          <h1 className="anim-in" style={{ "--d": ".15s" }}>
            {firstName} <span className="grad">{restName.join(" ")}</span>
          </h1>
          <h2 className="hero-role anim-in" style={{ "--d": ".25s" }}>
            I am <span className="typed">{typed}</span>
            <span className="caret" aria-hidden="true"></span>
          </h2>
          <p className="hero-desc anim-in" style={{ "--d": ".35s" }}>
            {profile.heroDesc}
          </p>
          <div className="hero-actions anim-in" style={{ "--d": ".45s" }}>
            <a href="#projects" className="btn btn-primary">
              View My Work
              <UiIcons.ArrowRight />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>
          <div className="hero-socials anim-in" style={{ "--d": ".55s" }}>
            {profile.socials.map((s) => (
              <a key={s.name} href={s.href} aria-label={s.label}>
                <BrandIcon name={s.name} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual anim-in" style={{ "--d": ".3s" }} aria-hidden="true">
          <div className="orbit-ring"></div>
          <div className="avatar-wrap">
            <div className="avatar-glow"></div>
            <div className="avatar">
              {showPhoto ? (
                <img src={profilePhoto} alt={profile.name} onError={() => setImgFailed(true)} />
              ) : (
                <span>{profile.initials}</span>
              )}
            </div>
          </div>
          <div className="float-card fc-1">
            <span className="fc-icon">🎓</span>
            <div>
              <strong>200+ OJT Hours</strong>
              <small>HeroApps Software Dev</small>
            </div>
          </div>
          <div className="float-card fc-2">
            <span className="status-dot"></span>
            <div>
              <strong>{profile.availability}</strong>
              <small>Available for work</small>
            </div>
          </div>
          <div className="float-card fc-3">
            <span className="fc-icon">🧠</span>
            <div>
              <strong>Problem Solver</strong>
              <small>Self-taught developer</small>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span>Scroll</span>
        <UiIcons.ChevronDown />
      </a>
    </section>
  );
}
