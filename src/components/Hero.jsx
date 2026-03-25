import { socialLinks } from "../data/portfolioData";
import { SocialSvg } from "./SocialIcons";

const base = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <header className="site-hero" id="home" aria-labelledby="hero-name">
      <div className="hero-banner">
        <h1 id="hero-name">Alex Marmute</h1>
        <p className="hero-tagline">
          I&apos;m a <strong>Rio de Janeiro</strong> based <strong>Senior Technical Product Manager</strong>. I drive
          digital programs, enterprise agile capability, and AI-assisted delivery at{" "}
          <a href="https://www.zurich.com.br/en" target="_blank" rel="noopener noreferrer">
            Zurich Insurance
          </a>{" "}
          — aligning technology with business outcomes across channels and platforms.
        </p>
        <hr className="hero-hr" />
        <ul className="hero-social" aria-label="Social links">
          {socialLinks.map(({ id, href, title }) => (
            <li key={id}>
              <a
                href={href}
                target={id === "email" ? undefined : "_blank"}
                rel={id === "email" ? undefined : "noopener noreferrer"}
                title={title}
              >
                <SocialSvg name={id} />
              </a>
            </li>
          ))}
        </ul>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Contact me
          </a>
          <a className="btn btn-ghost" href={`${base}AlexMarmuteProfileResume.pdf`} download>
            Download resume
          </a>
        </div>
      </div>
      <a className="scrolldown" href="#summary" aria-label="Scroll to about section">
        ↓
      </a>
    </header>
  );
}
