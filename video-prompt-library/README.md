# BlankDigi Prompt Cinema — MVP v0.3

A GitHub Pages friendly creative-memory interface for pairing real AI video results with public-safe prompt logic and production metadata.

## Access model

Prompt Cinema now has two public-catalog tiers:

- **FREE** — the page may include a newly written starter prompt that teaches the mechanism without exposing the original production prompt.
- **PRO** — the page shows the render, metadata, tags, creative engine and a safe summary. The exact production prompt, dialogue/beat map, reference locks and negative prompts stay private and are omitted from the public JSON entirely.

The `access` field is `free` or `pro`.

```json
{
  "access": "free",
  "promptAccess": "public",
  "prompt": "Public-safe starter prompt, not the original production prompt"
}
```

```json
{
  "access": "pro",
  "promptAccess": "redacted",
  "publicSummary": "Safe summary only"
}
```

## Non-negotiable public-build rule

This repository is public and GitHub Pages publishes repository contents. Front-end hiding is not security. **Never commit an exact/private production prompt to this public repository.**

For Pro records, `prompt` and `negativePrompt` must be absent from the public JSON. The validator fails if a redacted record contains them.

## Private source of truth

The original FolloVida masters and exact prompts are archived privately in Google Drive under:

```txt
FOLLOVIDA VIDEO AI / Prompt Cinema / 2026-10-15 / <concept>/
```

Each concept has:

```txt
master.mp4
prompt.txt
```

The batch root also has a private `manifest.json` used to map records to Drive IDs and planned Chief media paths.

## Public media architecture

Full-resolution masters do not belong in Git. Chief/Codex should generate browser previews into persistent storage:

```txt
host:      /opt/infra/suitev1/media/prompt-cinema
container: /app/media/prompt-cinema
```

`ops/media-policy.json` documents the storage rule and `scripts/build-preview.sh` creates H.264 browser previews. Public records use `/media/prompt-cinema/<record-id>/preview.mp4`, served by the production host Nginx static layer. The backend does not require a media bind mount for this public-preview architecture.

## Accepted MVP previews — 2026-10-15

The five production previews supplied for this MVP are accepted as-is:

- H.264, 360x640, 24 fps, yuv420p, MP4 faststart.
- CRF 31 and no audio tracks.
- Canonical public URL: /media/prompt-cinema/<record-id>/preview.mp4.

CRF 31 differs from the target encoder setting of approximately CRF 28.
The supplied previews are silent, unlike the audio-bearing preview target.
These are accepted MVP input differences, not a change to the target profile.
Do not re-encode these files for this deployment. Masters and exact prompts stay
private in Google Drive; no masters or PRO recipe content belong in this build.

## Seed access split

FREE:
- THE WRONG FLOOR
- BAGHA NCHTKI

PRO:
- MA TBAYNIHCH
- KHBIHA LIA
- GHIR ANA

## Data layout

```txt
data/library.json
  -> data/records/*.json
```

`manifest-preload.js` resolves the record manifest before `app.js` consumes it.

Core fields include:

```txt
id
title
project
category
model
duration
ratio
language
createdAt
status
access
featured
promptVersion
source
referenceCount
promptAccess
tags
video
poster (optional)
prompt OR publicSummary
logic (optional)
notes (optional)
```

## Validation

Run before merge:

```bash
node video-prompt-library/scripts/validate-library.mjs
```

The validator checks required fields, duplicate IDs, access/prompt rules, redacted-record leakage and supported media paths.

## Next phase

```txt
Google Drive private masters + prompts
        ↓
Chief / n8n ingestion
        ↓
Persistent media previews + private recipe API
        ↓
Public FREE feed + authenticated PRO feed
        ↓
Prompt Cinema UI
```

GitHub remains the public UI/catalog layer. Exact Pro recipe delivery must come from an authenticated backend, never from hidden client-side JSON.
