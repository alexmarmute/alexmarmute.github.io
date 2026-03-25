export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#summary", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Resume" },
  { href: "#highlights", label: "Works" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  { id: "linkedin", href: "https://www.linkedin.com/in/alexmarmute/", title: "LinkedIn" },
  { id: "instagram", href: "https://www.instagram.com/marmuteoficial/", title: "Instagram" },
  { id: "email", href: "mailto:alex_marmute@hotmail.com", title: "Email" },
  { id: "github", href: "https://github.com/alexmarmute", title: "GitHub" },
];

export const aboutPills = [
  "Technical leadership",
  "ProdOps",
  "Agile at scale",
  "CI/CD & automation",
  "Data-driven",
  "Azure DevOps",
  "Power BI",
];

export const skillGroups = [
  {
    title: "Top skills",
    tags: ["Azure DevOps", "Financial planning", "Strategic vision"],
  },
  {
    title: "Delivery & leadership",
    tags: ["Program & portfolio", "LeSS / Kanban", "PI planning & RTE", "Mentoring POs / SMs"],
  },
  {
    title: "AI & automation",
    tags: ["GitHub / Azure Copilot", "Gemini & Claude", "n8n & LLMs", "Selenium / Cypress / Playwright"],
  },
  {
    title: "Platforms & data",
    tags: ["Power BI", "Mural & Kanbanize", "Pipefy", "Azure & cloud"],
  },
];

export const education = {
  school: "Instituto Infnet",
  meta: "Bachelor of Engineering (B.E.), Computer Engineering · 2013 — 2018",
  description: "Engineering foundation for software delivery, infrastructure, and product leadership.",
};

export const certifications = [
  "Certified ScrumMaster (CSM)",
  "Advanced Certified Scrum Developer",
  "Brigadista Civil",
];

export const languages = [
  "Português — Native or bilingual",
  "English — Native or bilingual",
  "Español — Limited working",
];

export const highlights = [
  {
    title: "Finance automation at scale",
    text: "GenAI, n8n, and CRM integration — major reduction in manual AP work and measurable budget efficiency.",
  },
  {
    title: "Zurich digital channels",
    text: "Mobile car insurance experience and conversational chatbot; scaled agile coaching.",
  },
  {
    title: "Copilot in the SDLC",
    text: "Azure and GitHub Copilot for stories, tests, PoCs, and automation.",
  },
  {
    title: "Data-driven portfolios",
    text: "Power BI and lean practices aligning executives, suppliers, and delivery teams.",
  },
];

/** @typedef {{ company: string; title: string; when: string; bullets: (string | { label: string; text: string })[]; impacts?: string }} Job */

/** @type {Job[]} */
export const jobs = [
  {
    company: "Zurich Insurance",
    title: "Lead Technical Program Manager",
    when: "June 2023 — Present · Remote",
    bullets: [
      "Azure Copilot for user stories and acceptance criteria; structured overviews from engineering notes and Slack.",
      "GitHub Copilot for PoCs, API examples, test automation (Selenium, Cypress, Playwright).",
      {
        label: "Digital Channels:",
        text: " LeSS and Lean Kanban across five teams; PI Planning and ART with RTE; Power BI for outcomes.",
      },
      { label: "CEAP:", text: " Mentoring; transformation programs; strategy to portfolios and teams." },
    ],
    impacts:
      "Impacts: mobile car insurance app and first chatbot; trained 30+ POs, 10+ Scrum Masters, 5 agile coaches; O2 and autonomous teams; reference for test automation.",
  },
  {
    company: "Daniel Law",
    title: "Senior AI Technical Product Manager",
    when: "January 2025 — January 2026 · Rio de Janeiro",
    bullets: [
      "Finance automation, partners/vendors, dashboards (Mural, Kanbanize), n8n and GenAI/LLMs, Pipefy.",
      "Reporting to CFO, COO; IT roadmap; mentored POs; GenAI training; workshops.",
      "Gemini and Claude for triage, docs, PRDs, and release comms.",
    ],
    impacts:
      "Results: payment pipeline automation; ~80% AP manual time reduction; ~43% budget optimization in finance processing.",
  },
  {
    company: "Nower",
    title: "Principal Technical Consultant",
    when: "September 2019 — June 2023 · Rio de Janeiro",
    bullets: [
      "Flexera SaaS focus; global training and bootcamps; sales support and competitive analysis.",
      "Strategy to portfolios; coaching at scale.",
    ],
    impacts: "Shorter onboarding, stronger conversion, higher adoption, lower support load.",
  },
  {
    company: "AsteriscoLab",
    title: "CTO as a Service",
    when: "March 2022 — November 2022",
    bullets: [
      "Architecture, observability, CI/CD; hiring and mentoring; CEO/board liaison; agile playbooks.",
    ],
  },
  {
    company: "M4U (Bemobi)",
    title: "Senior Software Delivery Manager",
    when: "August 2018 — August 2019 · Rio de Janeiro",
    bullets: ["Platform modernization workstreams; migrations; governance and DORA-style metrics."],
  },
  {
    company: "Concrete Solutions",
    title: "Lead DevOps Engineer",
    when: "April 2016 — August 2018",
    bullets: ["DevOps vision, CI/CD architecture, mentoring, standards and automation."],
  },
  {
    company: "ASC Technology Solutions",
    title: "Full Stack Engineer",
    when: "March 2016 — April 2016",
    bullets: [".NET, SQL, Azure APIs; Docker and Chef; Scrum."],
  },
  {
    company: "Schlumberger",
    title: "Software Engineer",
    when: "April 2015 — November 2015",
    bullets: ["Protheus modules; Citrix / New Relic; agile and DevOps."],
  },
  {
    company: "DoeBasico",
    title: "Founding Member",
    when: "October 2014 — April 2015",
    bullets: ["Data-driven social startup; donor platform; NGO partnerships."],
  },
  {
    company: "OceanPact",
    title: "Software Engineer",
    when: "August 2014 — February 2015",
    bullets: ["Offshore software; agile adoption; automated delivery pipeline."],
  },
  {
    company: "Church & Dwight",
    title: "Infrastructure Engineer",
    when: "May 2013 — August 2014",
    bullets: ["IT infrastructure; Citrix; Kanban; Spicework / SQL dashboards."],
  },
];
