import { navLinks } from "../data/portfolioData";

export default function Navigation() {
  return (
    <div className="ceevee-nav-wrap">
      <nav aria-label="Primary">
        <ul className="ceevee-nav">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
