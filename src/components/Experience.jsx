import { jobs } from "../data/portfolioData";

function Bullet({ item }) {
  if (typeof item === "string") {
    return <li>{item}</li>;
  }
  return (
    <li>
      <strong>{item.label}</strong>
      {item.text}
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-resume" aria-labelledby="exp-heading">
      <div className="container block">
        <h2 id="exp-heading">
          <span>Work experience</span>
        </h2>
        <p className="intro">Selected roles and outcomes (most recent first).</p>
        {jobs.map((job, index) => (
          <article key={`${job.company}-${job.title}-${index}`} className="job">
            <div className="job-header">
              <h3>
                <span className="company">{job.company}</span> — {job.title}
              </h3>
              <p className="when">{job.when}</p>
            </div>
            <ul>
              {job.bullets.map((b, i) => (
                <Bullet key={i} item={b} />
              ))}
            </ul>
            {job.impacts ? <p className="impacts">{job.impacts}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
