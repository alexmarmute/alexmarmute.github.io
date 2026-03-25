import { socialLinks } from "../data/portfolioData";
import { SocialSvg } from "./SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="section-contact" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading">Contact</h2>
        <p className="intro">
          Open to conversations about technical product leadership, agile transformation, and AI-enabled delivery.
          Reach out anytime.
        </p>
        <div className="contact-box">
          <a className="contact-email" href="mailto:alex_marmute@hotmail.com">
            alex_marmute@hotmail.com
          </a>
          <p style={{ marginTop: "0.75rem" }}>
            <a href="tel:+5521982576083">+55 21 98257-6083</a>
          </p>
          <div className="contact-social">
            {socialLinks.map(({ id, href, title }) => (
              <a
                key={id}
                href={href}
                target={id === "email" ? undefined : "_blank"}
                rel={id === "email" ? undefined : "noopener noreferrer"}
                title={title}
              >
                <SocialSvg name={id} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
