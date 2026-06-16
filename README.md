# BlankDigi Avatar Studio

**AI avatar content studio for brands that want consistent weekly content without recording every day.**

BlankDigi Avatar Studio is a public showcase for a SaaS-style avatar content system: avatar worlds, brand audit flow, content positioning, and a premium AI studio interface.

**Live demo:** https://hardou.github.io/blankdigi-avatar-studio/ai-content-avatar/

> This repository is a public demo/showcase. Commercial use, resale, white-label deployment, or SaaS reuse requires permission from BlankDigi.

## What this project shows

- Premium AI avatar studio landing page
- Avatar worlds catalogue concept
- Brand audit / lead capture flow concept
- EN/FR-ready interface direction
- Dark premium UI with subtle cyberpunk accents
- SaaS-style structure for agencies and local businesses

## Product positioning

BlankDigi helps brands show up every week on TikTok, Instagram Reels, YouTube Shorts, and LinkedIn without recording every day.

The full private system can include:

- Avatar strategy and visual identity
- Hooks, scripts, captions, and CTAs
- Platform-specific video versions
- Client approval workflow
- Publishing notes
- Performance tracking
- Automation and CRM integrations

## Public vs private scope

This public repository is intended for:

- Demo frontend
- UI/UX showcase
- Documentation
- Roadmap
- Non-sensitive sample data

The following must stay private:

- API keys and tokens
- n8n workflows with real credentials
- WhatsApp automation secrets
- Payment/subscription logic
- Client data
- Production prompts
- Database dumps
- Server configs

## Project structure

```txt
ai-content-avatar/
  index.html
  avatar-worlds.css
  avatar-worlds.js

assets/
  images/
    avatar-worlds/

.github/
  workflows/
    pages.yml

README.md
LICENSE.md
.nojekyll
```

## Local preview

For a static HTML/CSS/JS version:

```bash
python -m http.server 8080
```

Then open:

```txt
http://localhost:8080/ai-content-avatar/
```

## Deployment

The public demo is deployed with GitHub Pages.

```txt
https://hardou.github.io/blankdigi-avatar-studio/ai-content-avatar/
```

The repository root includes an `index.html` redirect so the base GitHub Pages URL can route users to the Avatar Studio page.

## Commercial licensing

This project is source-available for learning, evaluation, and portfolio review only. Commercial use requires a written commercial license from BlankDigi.

## Contact

BlankDigi — AI content systems, automation, and avatar studio workflows.

Website: https://blankdigi.com
