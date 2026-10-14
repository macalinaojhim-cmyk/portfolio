import { profile } from "../data/portfolio.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <a href="#home" className="logo">
              <span className="logo-dot">{profile.logo}</span>
            </a>
            <p className="footer-tagline">Solving problems and building software, one commit at a time.</p>
          </div>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p>
            Designed &amp; built with 💜 by <span className="grad">{profile.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
