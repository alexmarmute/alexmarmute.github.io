import { skillGroups } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section-band" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading">Skills</h2>
        <p className="lead">Core strengths and tools I use to drive delivery, quality, and strategy.</p>
        <div className="skill-grid">
          {skillGroups.map((g) => (
            <div key={g.title} className="skill-card">
              <h3>{g.title}</h3>
              <div className="skill-tags">
                {g.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
