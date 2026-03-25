import { aboutPills } from "../data/portfolioData";

const base = import.meta.env.BASE_URL;

export default function About() {
  return (
    <section id="summary" className="section-about" aria-labelledby="summary-heading">
      <div className="container about-grid">
        <div>
          <img
            className="profile-pic"
            src={`${base}assets/profile.jpeg`}
            width={320}
            height={320}
            alt="Alex Marmute portrait"
          />
        </div>
        <div className="about-copy">
          <h2 id="summary-heading">About me</h2>
          <p>
            With over <strong style={{ color: "#ccc" }}>13 years</strong> of experience, I specialize in technical
            leadership, reliability engineering, and business strategy. I am{" "}
            <strong style={{ color: "#ccc" }}>Lead Technical Program Manager at Zurich Insurance</strong> (remote),
            driving digital channels and enterprise agile capability with AI-assisted practices.
          </p>
          <p>
            Previously, as <strong style={{ color: "#ccc" }}>Senior AI Technical Product Manager at Daniel Law</strong>,
            I led finance automation with GenAI and LLMs, partner relationships, and executive reporting — and I mentor
            Product Owners to grow delivery maturity.
          </p>
          <div className="pill-row" aria-label="Focus areas">
            {aboutPills.map((p) => (
              <span key={p} className="pill">
                {p}
              </span>
            ))}
          </div>
          <div className="contact-details">
            <h3>Contact details</h3>
            <p>
              <strong style={{ color: "#fff" }}>Alex Marmute</strong>
            </p>
            <p>Rio de Janeiro, Brazil</p>
            <p>
              <a href="tel:+5521982576083">+55 21 98257-6083</a>
            </p>
            <p>
              <a href="mailto:alex_marmute@hotmail.com">alex_marmute@hotmail.com</a>
            </p>
            <a className="btn btn-download" href={`${base}AlexMarmuteProfileResume.pdf`} download>
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
