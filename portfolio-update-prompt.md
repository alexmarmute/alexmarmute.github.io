# Portfolio Update Prompt — Alex Marmute GitHub IO

Use this prompt (or paste it directly into a new Claude conversation) whenever you want to build or update your `index.html` portfolio page.

---

## THE PROMPT

```
You are an expert HTML/CSS developer specializing in personal portfolio pages for senior technical professionals. Your task is to build or update a single-file `index.html` GitHub Pages portfolio for Alex Marmute.

---

## PERSONA & AUDIENCE

Alex is a Principal-level Technical Leader and Lead AI Technical Program Manager. The portfolio targets:
- Hiring managers and talent scouts at enterprise tech companies (insurance, fintech, banking)
- CTOs, VPs of Engineering, and executive peers
- Potential fractional/consulting clients

Tone: confident, modern, data-driven — NOT flashy or junior-dev style. Think premium consultant, not "look at my side projects."

---

## CONTENT TO INCLUDE

### Header / Hero
- Name: Alex Marmute
- Title: Lead AI Technical Program Manager · Principal Technical Leader
- Location: Brazil · Remote (LATAM & Global)
- Languages: English (C1) · Portuguese (Native) · Spanish (Intermediate)
- Contact links: Email (alexmarmute@gmail.com), LinkedIn (linkedin.com/in/alexmarmute)
- Short punchy tagline (derive from summary below)

### Summary
Principal-level technical leader with 13+ years of experience across software engineering, cloud DevOps, and product leadership, specializing in AI-enabled systems, legacy modernization, and large-scale platform transformation. Proven track record leading distributed teams across regulated environments (insurance, payments, banking, tax, healthcare). Blend of hands-on architecture and executive-facing leadership.

### Core Strengths / Skills (display as visual tags or a clean grid)
- System & enterprise architecture
- Legacy re-platforming
- AI/LLM-based automation
- Cloud & DevOps (Azure-first, multi-cloud aware)
- Distributed systems & integration
- Agile at scale (LeSS, Kanban, SAFe)
- CI/CD & SRE
- Executive stakeholder management
- GenAI tools: Claude, GitHub Copilot, Azure Copilot, Gemini, n8n

### Experience (reverse chronological)

**Zurich Insurance** — Lead AI Technical Program Manager | Jun 2023 – Present
Remote (LATAM, Switzerland, Spain, US)
- Led BC Modernization Program across 14 squads
- Drove AI adoption (Microsoft 365 Copilot, GitHub Copilot, Claude) across engineering and QA
- Released Zurich Brazil's mobile car insurance app and first conversational chatbot
- Trained 30+ Product Owners, 10+ Scrum Masters, 5 Agile Coaches
- Co-led enterprise agile transformation

**Daniel Law** — Senior AI Technical Product Manager (Fractional) | Jan 2025 – Jan 2026
Remote (US, Europe, LATAM)
- Owned automation roadmap for finance/back-office domain
- 80% reduction in accounts payable lead time via AI automation
- ~43% cost optimization on finance request handling
- Deployed Claude Code for legal ops scripting and document pipelines

**Nower** — Principal Technical Consultant | Sep 2019 – Jun 2023
Remote (LATAM, US, Europe)
- Technical enablement, customer success, and digital transformation
- Flexera SaaS portfolio: discovery, demos, workshops, training materials
- CI/CD and automation adoption coaching

**AsteriscoLab** — Fractional CTO | Mar 2022 – Nov 2022
- Built engineering org from early stage; CI/CD, automated tests, release gating
- Hired and mentored engineering managers, tech leads, POs, Scrum Masters

**M4U (Bemobi)** — Senior Software Delivery Manager | Aug 2018 – Aug 2019
Rio de Janeiro, Brazil — payments/financial services platform modernization

**Concrete Solutions** — Lead DevOps Engineer | Apr 2016 – Aug 2018
Rio de Janeiro — DevOps vision, CI/CD, infrastructure architecture

*Earlier: Full Stack Engineer · Software Engineer · Co-founder (DoeBasico social startup)*

### Education
Instituto Infnet — Bachelor of Engineering, Computer Engineering (2013–2018)

### Certifications (display as badges or clean list)
- Certified ScrumMaster (CSM)
- Certified Scrum Developer (CSD)
- Advanced Certified Scrum Developer (A-CSD)
- Professional Scrum Master (PSM)
- Professional Product Owner (PSPO)
- Claude 101 Fundamentals
- Google Gemini Certification (K12)
- Google Workspace Certified Educator
- GitHub Copilot Fundamentals

---

## DESIGN REQUIREMENTS

- Single file: all CSS and JS inline inside `index.html` — no external stylesheets or script files
- Dark theme with a professional color palette (e.g., deep navy or dark slate background, white/light text, one accent color — a vibrant blue, teal, or amber)
- Clean typographic hierarchy using a Google Font (e.g., Inter, Space Grotesk, or DM Sans)
- Fully responsive (mobile-first, breakpoints at 768px and 1200px)
- Smooth scroll navigation with a sticky top nav bar
- Sections: #about, #experience, #skills, #certifications, #contact
- Subtle entrance animations using CSS (no heavy JS animation libraries)
- Skills displayed as styled tag chips, not a plain list
- Experience as a vertical timeline or clean card layout
- No stock photos or placeholder images unless Alex provides one
- Footer with copyright and links

---

## CONSTRAINTS

- Pure HTML/CSS/minimal vanilla JS only — no frameworks (React, Vue, etc.)
- No build tools, no dependencies that require npm
- Must work when opened directly as a file and when served by GitHub Pages
- Keep the file under 600 lines if possible; prioritize readability over clever tricks
- Do NOT use tables for layout
- Do NOT use inline styles for every element — use a `<style>` block with named classes

---

## OUTPUT

Produce the complete `index.html` file. Start with the DOCTYPE and end with </html>. Do not add explanation before or after — just the file content.
```

---

## HOW TO USE THIS PROMPT

1. Open a new Claude conversation (or use Cowork in this project)
2. Paste the entire block above
3. If you have a profile photo, attach it to the message and add: *"Use the attached photo as my hero image."*
4. Review the output, then follow up with tweaks like:
   - *"Make the accent color amber instead of blue"*
   - *"Add a Projects section with [project details]"*
   - *"Make the hero section full-screen with a gradient background"*
   - *"Add a Download Resume button that links to the PDF"*
