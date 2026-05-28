---
name: html-portfolio
description: >
  Specialized skill for building and updating single-file HTML portfolio pages for GitHub Pages.
  Use this skill whenever Alex asks to create, update, redesign, or add a section to the portfolio
  website (index.html). Also triggers when Alex says things like "update my portfolio", "add a new
  section to the site", "redesign the page", "the site looks bad", "fix the layout", "change the color",
  or any request involving the GitHub IO page. Even if the request feels small (e.g., "add a certifications
  badge"), use this skill — it carries all the design rules, constraints, and content standards that keep
  the page consistent.
---

# HTML Portfolio Skill

This skill guides Claude when building or editing Alex Marmute's personal GitHub Pages portfolio (`index.html`). Everything here is a single-file HTML page — no frameworks, no build tools.

---

## Alex's Identity & Audience

**Alex Marmute** — Principal-level Technical Leader, Lead AI TPM, based in Brazil (Remote, LATAM & Global).

Target audience: senior hiring managers, CTOs, VPs of Engineering, enterprise clients in insurance, fintech, banking. The page must feel premium and confident — like a top-tier consultant's digital card, not a developer's hobby project.

---

## Page Structure

The canonical section order is:

1. `#hero` — name, title, tagline, contact links
2. `#about` — summary paragraph
3. `#skills` — tag chips or icon grid
4. `#experience` — timeline or cards, reverse chronological
5. `#certifications` — badge list or grid
6. `#contact` — email, LinkedIn, call-to-action

Use a sticky top `<nav>` with smooth-scroll anchor links to these sections.

---

## Design System

### Color Palette (dark theme default)
```
--bg-primary:    #0d1117   /* deep GitHub-style dark */
--bg-secondary:  #161b22   /* cards, nav */
--bg-tertiary:   #21262d   /* hover states, borders */
--text-primary:  #e6edf3
--text-secondary:#8b949e
--accent:        #58a6ff   /* links, tags, highlights — vibrant blue */
--accent-warm:   #f0883e   /* optional warm accent for CTAs */
--border:        #30363d
```

If Alex requests a light theme, flip to:
```
--bg-primary:    #ffffff
--bg-secondary:  #f6f8fa
--accent:        #0969da
--text-primary:  #1f2328
--border:        #d0d7de
```

### Typography
Load from Google Fonts: **Inter** or **Space Grotesk**. Use a single `@import` at the top of the `<style>` block.

```
Font scale:
  hero name:    clamp(2.4rem, 5vw, 4rem), font-weight: 700
  section h2:   1.75rem, font-weight: 600
  body:         1rem / 1.7 line-height
  small/meta:   0.875rem, color: var(--text-secondary)
```

### Spacing
Use an 8px base grid. Common values: `8px, 16px, 24px, 32px, 48px, 64px, 96px`. Never use arbitrary pixel values like `13px` or `37px`.

### Borders & Dividers
- Card borders: `1px solid var(--border)` — subtle, not decorative
- Border-radius: `8px` for cards, `4px` for tags, `50%` for avatar
- Avoid heavy box shadows — use subtle: `0 1px 3px rgba(0,0,0,0.3)`
- Section dividers: use margin/padding, not `<hr>` elements
- Never use thick colored borders as decoration (feels dated)
- Accent borders (left border on timeline items) are fine: `3px solid var(--accent)`

---

## Component Patterns

### Skill Tags
```html
<span class="tag">Azure DevOps</span>
```
```css
.tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  background: rgba(88, 166, 255, 0.12);
  border: 1px solid rgba(88, 166, 255, 0.3);
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 500;
}
```
Group tags by category (Architecture, AI/GenAI, DevOps, Agile, Cloud).

### Experience Timeline
```html
<div class="timeline-item">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="job-header">
      <h3>Job Title</h3>
      <span class="job-date">Jun 2023 – Present</span>
    </div>
    <div class="company">Company Name · Location</div>
    <ul class="job-bullets">...</ul>
  </div>
</div>
```
Left-border accent on `.timeline-content`: `border-left: 3px solid var(--accent)`.

### Certification Badges
Display as a clean 2–3 column grid of pill-shaped items with an icon (use emoji or inline SVG — no external icon libraries):
```html
<div class="cert-badge">✦ Certified ScrumMaster (CSM)</div>
```

### Hero Section
Full-viewport-height hero (`min-height: 100vh`) with centered content. Include:
- Name in large weight
- Title/role in accent color
- Short tagline (1 sentence)
- CTA buttons: "View Experience" (anchor) + "Contact Me" (mailto or anchor)
- Optional: animated gradient background using CSS `@keyframes`

---

## DO's

- **Do** use CSS custom properties (variables) for every color and spacing token — makes theming a one-line change
- **Do** write mobile-first CSS using `min-width` media queries
- **Do** use `clamp()` for fluid typography
- **Do** add `transition: all 0.2s ease` on interactive elements for polish
- **Do** use semantic HTML: `<section>`, `<article>`, `<header>`, `<nav>`, `<footer>`, `<time>`
- **Do** add `loading="lazy"` on any images
- **Do** include `<meta name="description">` and Open Graph tags for LinkedIn sharing
- **Do** add a subtle scroll-triggered fade-in using `IntersectionObserver` (vanilla JS, ~20 lines)
- **Do** keep the file self-contained — everything inside one `index.html`
- **Do** use `max-width: 960px` centered container for content — prevents ultra-wide line lengths
- **Do** visually highlight quantified impacts (80% reduction, 30+ trained) — bold or accent color

## DON'Ts

- **Don't** use tables for layout — ever
- **Don't** use inline `style=""` attributes for visual styling (use classes)
- **Don't** load jQuery, Bootstrap, or any CSS framework — they're overkill and slow for a static page
- **Don't** use `!important` — it signals a specificity problem; fix the selector instead
- **Don't** use `<br>` to add vertical spacing — use margin
- **Don't** put every color as a hardcoded hex — use CSS variables
- **Don't** use more than 2 font families
- **Don't** make the hero section auto-play video or audio
- **Don't** use gradients that are too aggressive or rainbow-colored — keep to 2-stop gradients between close hues
- **Don't** forget `alt` attributes on any `<img>`
- **Don't** use deprecated HTML tags (`<font>`, `<center>`, `<marquee>`)
- **Don't** make the file exceed 700 lines without good reason

---

## Responsiveness Checklist

Before finishing, verify these breakpoints:
- `< 480px` (mobile): single column, stacked nav links hidden behind hamburger or inline, hero text ≤ 2.5rem
- `480–768px` (tablet): 2-column skill grid, readable timeline
- `> 1024px` (desktop): full layout with 960px content container

---

## Alex's Key Content (always keep current)

**Contact:**
- Email: alexmarmute@gmail.com
- LinkedIn: linkedin.com/in/alexmarmute
- Location: Brazil · Remote (LATAM & Global)

**Core Skills to always include:**
System Architecture · Legacy Re-platforming · AI/LLM Automation · Azure/Cloud DevOps · CI/CD & SRE · LeSS & Kanban · GenAI (Claude, Copilot, Gemini) · Executive Leadership · Distributed Systems

**Key metrics to highlight:**
- 13+ years experience
- 14 squads led (Zurich BC Modernization)
- 80% reduction in AP lead time (Daniel Law)
- 30+ POs trained, 10+ Scrum Masters, 5 Agile Coaches

**Current role:** Lead AI Technical Program Manager @ Zurich Insurance (Jun 2023 – Present)

---

## File Output Rules

1. Output a complete, valid `index.html` — start with `<!DOCTYPE html>`, end with `</html>`
2. Place all CSS inside a single `<style>` block in `<head>`
3. Place all JS inside a single `<script>` block before `</body>`
4. Save to `D:\Users\Alexinho\Documents\Claude\Projects\Github IO Portfolio Page\Github IO\index.html`
5. After saving, present the file with `mcp__cowork__present_files`

---

## When Updating an Existing Page

1. Always `Read` the current `index.html` first to understand the existing structure and styles
2. Make surgical edits with the `Edit` tool rather than rewriting the whole file, unless the request is a full redesign
3. Preserve existing content that isn't being changed
4. After editing, do a quick sanity-check: does the HTML still have matching open/close tags for key sections?
