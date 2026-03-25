import { highlights } from "../data/portfolioData";

export default function Highlights() {
  return (
    <section id="highlights" className="section-band" aria-labelledby="hi-heading">
      <div className="container">
        <h2 id="hi-heading">Highlights</h2>
        <p className="lead">Impact snapshots from recent programs.</p>
        <div className="highlight-grid">
          {highlights.map((h) => (
            <div key={h.title} className="highlight-card">
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
