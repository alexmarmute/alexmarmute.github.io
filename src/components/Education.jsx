import { certifications, education, languages } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section-resume" aria-labelledby="edu-heading">
      <div className="container block">
        <h2 id="edu-heading">
          <span>Education</span>
        </h2>
        <p className="intro">Formal education and credentials.</p>
        <article className="edu-card">
          <h3>{education.school}</h3>
          <p className="meta">{education.meta}</p>
          <p>{education.description}</p>
        </article>
        <p className="subh">Certifications</p>
        <ul className="cert-list">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p className="subh">Languages</p>
        <ul className="cert-list">
          {languages.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
