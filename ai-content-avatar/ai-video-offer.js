// BlankDigi premium AI Video Production experience for /ai-content-avatar/
(function () {
  const copy = {
    en: {
      nav: 'AI Video',
      eyebrow: 'BLANKDIGI / AI CREATIVE STUDIO',
      titleA: 'Ideas that should be',
      titleB: 'impossible to shoot.',
      intro: 'BlankDigi turns product photos, brand ideas and campaign briefs into directed AI commercials, cinematic social films and repeatable creative systems — from concept to final cut.',
      reelLabel: 'CREATIVE REEL / 2026',
      reelNote: 'Concept · Direction · Generation · Edit',
      capabilities: 'CREATIVE CAPABILITIES',
      capabilitiesTitle: 'One studio. Multiple ways to stop the scroll.',
      process: 'PRODUCTION SYSTEM',
      processTitle: 'Directed like a campaign. Built for iteration.',
      processText: 'Every project moves through a controlled production pipeline so visual identity, character consistency and campaign logic survive from the first frame to the final export.',
      offers: 'WAYS TO WORK WITH BLANKDIGI',
      offersTitle: 'Start small. Scale the winning direction.',
      proof: 'WHAT YOU GET',
      proofTitle: 'Not prompts. Finished creative.',
      proofText: 'Concept development, shot logic, AI generation, editing, sound design, subtitles, delivery formats and creative variants are handled as one production system.',
      project: 'READY WHEN THE IDEA IS',
      ctaTitle: 'Send the product. Send the brief. We build the world around it.',
      ctaText: 'Best for product launches, social campaigns, recurring ad creative, cinematic brand stories and AI-first content series.',
      cta: 'Start an AI Video Project',
      secondary: 'Explore Avatar Worlds'
    },
    fr: {
      nav: 'Vidéo IA',
      eyebrow: 'BLANKDIGI / STUDIO CRÉATIF IA',
      titleA: 'Des idées qui devraient être',
      titleB: 'impossibles à tourner.',
      intro: 'BlankDigi transforme photos produit, idées de marque et briefs de campagne en publicités IA dirigées, films sociaux cinématiques et systèmes créatifs répétables — du concept au montage final.',
      reelLabel: 'CREATIVE REEL / 2026',
      reelNote: 'Concept · Direction · Génération · Montage',
      capabilities: 'CAPACITÉS CRÉATIVES',
      capabilitiesTitle: 'Un studio. Plusieurs façons d’arrêter le scroll.',
      process: 'SYSTÈME DE PRODUCTION',
      processTitle: 'Pensé comme une campagne. Conçu pour itérer.',
      processText: 'Chaque projet suit un pipeline contrôlé pour préserver l’identité visuelle, la cohérence des personnages et la logique de campagne de la première image jusqu’à l’export final.',
      offers: 'TRAVAILLER AVEC BLANKDIGI',
      offersTitle: 'Commencez petit. Scalez la direction qui gagne.',
      proof: 'CE QUE VOUS RECEVEZ',
      proofTitle: 'Pas des prompts. Une création finie.',
      proofText: 'Concept, logique des plans, génération IA, montage, sound design, sous-titres, formats de livraison et variantes créatives sont gérés comme un seul système de production.',
      project: 'PRÊT QUAND L’IDÉE L’EST',
      ctaTitle: 'Envoyez le produit. Envoyez le brief. Nous construisons l’univers autour.',
      ctaText: 'Idéal pour lancements produit, campagnes sociales, créas publicitaires récurrentes, storytelling cinématique et séries de contenu AI-first.',
      cta: 'Démarrer un projet vidéo IA',
      secondary: 'Explorer les Avatar Worlds'
    }
  };

  const lanes = [
    {
      code: '01',
      type: 'PRODUCT FILM',
      en: 'AI Product Ads',
      fr: 'Publicités Produit IA',
      enText: 'Turn one product into multiple high-impact commercial worlds for launches, offers and paid social.',
      frText: 'Transformez un produit en plusieurs univers commerciaux pour lancements, offres et paid social.',
      img: '../assets/images/avatar-worlds/product-presenter.jpg',
      meta: 'PRODUCT · COMMERCE · 9:16'
    },
    {
      code: '02',
      type: 'CINEMATIC',
      en: 'Brand Films',
      fr: 'Films de Marque',
      enText: 'Impossible locations, visual metaphors and premium campaign scenes without a traditional shoot.',
      frText: 'Lieux impossibles, métaphores visuelles et scènes premium sans tournage traditionnel.',
      img: '../assets/images/avatar-worlds/cinema-critic.jpg',
      meta: 'STORY · WORLD · CAMPAIGN'
    },
    {
      code: '03',
      type: 'ATTENTION',
      en: 'Comedy & Viral',
      fr: 'Comédie & Viral',
      enText: 'Absurd branded situations, visual misunderstandings and repeatable comedy formats engineered for attention.',
      frText: 'Situations absurdes, malentendus visuels et formats comiques répétables conçus pour capter l’attention.',
      img: '../assets/images/avatar-worlds/comedy-host.jpg',
      meta: 'COMEDY · HOOK · SERIES'
    },
    {
      code: '04',
      type: 'IDENTITY',
      en: 'Characters & Worlds',
      fr: 'Personnages & Univers',
      enText: 'Build recurring presenters, fictional characters and visual universes that remain recognizable across episodes.',
      frText: 'Créez présentateurs, personnages et univers récurrents, reconnaissables d’un épisode à l’autre.',
      img: '../assets/images/avatar-worlds/stylish-creator.jpg',
      meta: 'IDENTITY · CONTINUITY · IP'
    }
  ];

  const services = [
    ['05 / SOCIAL', 'Reels, Shorts & TikTok', 'Reels, Shorts & TikTok', 'Fast vertical creative systems for hooks, retention and iterative testing.', 'Systèmes créatifs verticaux pour hooks, rétention et tests rapides.'],
    ['06 / UGC', 'AI UGC & Presenters', 'UGC IA & Présentateurs', 'Presenter-led demos and offer explanations without daily recording.', 'Démos et explications d’offres sans tournage quotidien.'],
    ['07 / VARIANTS', 'Creative Variations', 'Variantes Créatives', 'Multiple hooks, openings, offers and visual routes from one campaign direction.', 'Plusieurs hooks, ouvertures, offres et routes visuelles depuis une même direction.'],
    ['08 / LOCALIZE', 'Multilingual Versions', 'Versions Multilingues', 'Adapt one concept across markets, languages and platform formats.', 'Adaptez un concept à plusieurs marchés, langues et formats.']
  ];

  const packages = [
    {
      name: 'TEST CREATIVE',
      tag: 'START HERE',
      en: 'Validate one strong direction.',
      fr: 'Validez une direction forte.',
      enText: 'One focused commercial concept built to prove the visual language before scaling.',
      frText: 'Un concept commercial ciblé pour valider le langage visuel avant de scaler.',
      metric: '01',
      metricLabel: 'hero direction'
    },
    {
      name: 'CAMPAIGN PACK',
      tag: 'MOST FLEXIBLE',
      en: 'Turn one brief into a creative system.',
      fr: 'Transformez un brief en système créatif.',
      enText: 'Multiple concepts or variations for a product, launch, offer or paid campaign.',
      frText: 'Plusieurs concepts ou variantes pour un produit, lancement, offre ou campagne paid.',
      metric: '04–06',
      metricLabel: 'creative routes'
    },
    {
      name: 'CONTENT ENGINE',
      tag: 'RECURRING',
      en: 'Keep the brand visually alive every month.',
      fr: 'Gardez la marque visuellement active chaque mois.',
      enText: 'Recurring production with new hooks, formats, worlds and performance-led iterations.',
      frText: 'Production récurrente avec nouveaux hooks, formats, univers et itérations guidées par la performance.',
      metric: '∞',
      metricLabel: 'iteration loop'
    }
  ];

  const css = `
    .ai-video-production{position:relative;isolation:isolate;overflow:hidden;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08);background:#07090e;padding-top:clamp(74px,9vw,124px)!important;padding-bottom:clamp(74px,9vw,124px)!important}
    .ai-video-production:before{content:'';position:absolute;inset:-20%;z-index:-3;background:radial-gradient(circle at 12% 12%,rgba(0,212,255,.16),transparent 26%),radial-gradient(circle at 88% 22%,rgba(184,76,255,.15),transparent 28%),radial-gradient(circle at 52% 88%,rgba(41,255,170,.07),transparent 24%);filter:blur(10px)}
    .ai-video-production:after{content:'';position:absolute;inset:0;z-index:-2;pointer-events:none;opacity:.22;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:58px 58px;mask-image:linear-gradient(to bottom,black,transparent 88%)}
    .av-noise{position:absolute;inset:0;z-index:-1;pointer-events:none;opacity:.035;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E")}
    .av-eyebrow,.av-code,.av-mini-label{font:800 10px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.16em;text-transform:uppercase}.av-eyebrow{display:inline-flex;align-items:center;gap:9px;padding:8px 12px;border:1px solid rgba(0,212,255,.25);border-radius:999px;color:#80ecff;background:rgba(0,212,255,.06);box-shadow:inset 0 0 24px rgba(0,212,255,.04)}.av-eyebrow:before{content:'';width:6px;height:6px;border-radius:50%;background:#5fe9ff;box-shadow:0 0 16px #5fe9ff;animation:avPulse 1.8s ease-in-out infinite}@keyframes avPulse{50%{opacity:.35;transform:scale(.7)}}
    .av-hero{display:grid;grid-template-columns:minmax(0,1.06fr) minmax(360px,.94fr);gap:clamp(34px,6vw,88px);align-items:center;position:relative;z-index:1}.av-display{margin:22px 0 24px;font-size:clamp(48px,7vw,98px);line-height:.89;letter-spacing:-.065em;font-weight:900;max-width:900px}.av-display .ghost{display:block;color:transparent;-webkit-text-stroke:1px rgba(255,255,255,.54);text-shadow:0 0 34px rgba(0,212,255,.08)}.av-lead{max-width:760px;color:var(--muted);font-size:clamp(16px,1.4vw,20px);line-height:1.72}.av-hero-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:30px}.av-text-link{display:inline-flex;align-items:center;gap:8px;padding:13px 16px;color:#eaf5ff;border-bottom:1px solid rgba(255,255,255,.25);font-weight:800;font-size:13px;transition:.2s ease}.av-text-link:hover{gap:13px;color:#80ecff;border-color:#80ecff}
    .av-reel{position:relative;min-height:520px;border:1px solid rgba(255,255,255,.12);border-radius:30px;padding:18px;background:linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.018));box-shadow:0 36px 90px rgba(0,0,0,.42),inset 0 1px 0 rgba(255,255,255,.08);transform:perspective(1200px) rotateY(-4deg) rotateX(1deg);overflow:hidden}.av-reel:before{content:'';position:absolute;inset:-30%;background:conic-gradient(from 90deg,transparent,rgba(0,212,255,.08),transparent,rgba(184,76,255,.08),transparent);animation:avSpin 14s linear infinite}@keyframes avSpin{to{transform:rotate(360deg)}}.av-reel-inner{position:relative;height:100%;min-height:484px;border-radius:20px;overflow:hidden;background:#030407}.av-reel-grid{display:grid;grid-template-columns:1.08fr .92fr;height:100%;min-height:484px}.av-reel-main{position:relative;overflow:hidden}.av-reel-main img,.av-reel-mini img{width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.88) contrast(1.06)}.av-reel-main:after,.av-reel-mini:after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(3,4,7,.88),rgba(3,4,7,.06) 58%,rgba(3,4,7,.16))}.av-reel-side{display:grid;grid-template-rows:1fr 1fr}.av-reel-mini{position:relative;overflow:hidden;border-left:1px solid rgba(255,255,255,.08)}.av-reel-mini+.av-reel-mini{border-top:1px solid rgba(255,255,255,.08)}.av-reel-hud{position:absolute;z-index:3;left:24px;right:24px;bottom:22px;display:flex;align-items:flex-end;justify-content:space-between;gap:16px}.av-reel-hud strong{display:block;font-size:18px;letter-spacing:-.02em}.av-reel-hud span{display:block;margin-top:5px;color:rgba(255,255,255,.58);font:700 9px ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase}.av-play{width:58px;height:58px;flex:0 0 58px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(255,255,255,.26);background:rgba(4,6,10,.48);backdrop-filter:blur(16px);box-shadow:0 0 42px rgba(0,212,255,.12)}.av-play:before{content:'';margin-left:4px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:11px solid white}.av-corner{position:absolute;z-index:4;top:22px;left:22px;padding:7px 9px;border:1px solid rgba(255,255,255,.15);border-radius:999px;background:rgba(3,4,7,.55);backdrop-filter:blur(12px);color:#fff;font:800 9px ui-monospace,monospace;letter-spacing:.11em}.av-live{position:absolute;z-index:4;right:22px;top:22px;display:flex;align-items:center;gap:7px;color:#d9fff4;font:800 9px ui-monospace,monospace;letter-spacing:.12em}.av-live:before{content:'';width:6px;height:6px;border-radius:50%;background:#50ffb8;box-shadow:0 0 15px #50ffb8}
    .av-signal{position:relative;z-index:2;margin:clamp(54px,7vw,86px) calc(50% - 50vw) 0;overflow:hidden;border-block:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.018);transform:rotate(-1deg)}.av-signal-track{display:flex;width:max-content;animation:avMarquee 28s linear infinite}.av-signal span{padding:13px 22px;color:rgba(255,255,255,.62);font:800 10px ui-monospace,monospace;letter-spacing:.16em;text-transform:uppercase}.av-signal span:after{content:'✦';margin-left:42px;color:#5fe9ff}@keyframes avMarquee{to{transform:translateX(-50%)}}
    .av-section-head{display:grid;grid-template-columns:.7fr 1.3fr;gap:28px;align-items:end;margin-top:clamp(72px,9vw,118px);position:relative;z-index:1}.av-mini-label{color:#72e8ff}.av-section-head h3{margin:0;font-size:clamp(34px,5vw,64px);line-height:.98;letter-spacing:-.05em;max-width:900px}
    .av-lanes{display:grid;grid-template-columns:repeat(12,1fr);gap:14px;margin-top:30px;position:relative;z-index:1}.av-lane{position:relative;min-height:430px;overflow:hidden;border:1px solid rgba(255,255,255,.11);border-radius:24px;background:#0b0e14;box-shadow:inset 0 1px rgba(255,255,255,.04);transition:transform .35s ease,border-color .35s ease,box-shadow .35s ease}.av-lane:nth-child(1),.av-lane:nth-child(4){grid-column:span 7}.av-lane:nth-child(2),.av-lane:nth-child(3){grid-column:span 5}.av-lane:hover{transform:translateY(-7px);border-color:rgba(0,212,255,.36);box-shadow:0 26px 70px rgba(0,0,0,.3)}.av-lane-media{position:absolute;inset:0}.av-lane-media img{width:100%;height:100%;object-fit:cover;transition:transform .8s cubic-bezier(.2,.8,.2,1),filter .4s ease;filter:saturate(.8) contrast(1.04)}.av-lane:hover img{transform:scale(1.055);filter:saturate(1) contrast(1.08)}.av-lane-media:after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(4,6,10,.98) 2%,rgba(4,6,10,.62) 42%,rgba(4,6,10,.06) 78%),linear-gradient(110deg,rgba(0,212,255,.08),transparent 42%)}.av-lane-top{position:absolute;z-index:2;top:20px;left:20px;right:20px;display:flex;justify-content:space-between;align-items:center}.av-lane-number{font:900 42px/1 ui-monospace,monospace;color:rgba(255,255,255,.17)}.av-lane-type{padding:7px 9px;border-radius:999px;background:rgba(4,6,10,.58);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.12);font:800 9px ui-monospace,monospace;letter-spacing:.13em}.av-lane-content{position:absolute;z-index:2;left:24px;right:24px;bottom:24px}.av-lane-content h4{margin:0 0 9px;font-size:clamp(25px,3vw,38px);line-height:1;letter-spacing:-.04em}.av-lane-content p{max-width:620px;margin:0;color:rgba(255,255,255,.7);font-size:14px;line-height:1.65}.av-lane-meta{margin-top:16px;color:#72e8ff;font:800 9px ui-monospace,monospace;letter-spacing:.13em}.av-lane-arrow{position:absolute;right:24px;bottom:24px;width:42px;height:42px;border:1px solid rgba(255,255,255,.15);border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.04);font-size:18px;transition:.3s ease}.av-lane:hover .av-lane-arrow{transform:rotate(-35deg);background:#fff;color:#05070a}
    .av-service-rail{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:14px;border:1px solid rgba(255,255,255,.09);border-radius:22px;overflow:hidden;background:rgba(255,255,255,.09);position:relative;z-index:1}.av-service{min-height:210px;padding:24px;background:#0a0d13;transition:.25s ease}.av-service:hover{background:#0d121b}.av-code{color:#72e8ff}.av-service h4{margin:35px 0 10px;font-size:19px;line-height:1.15}.av-service p{margin:0;color:var(--muted);font-size:13px;line-height:1.62}
    .av-process{display:grid;grid-template-columns:.82fr 1.18fr;gap:44px;margin-top:30px;padding:clamp(28px,4vw,48px);border:1px solid rgba(255,255,255,.1);border-radius:28px;background:linear-gradient(125deg,rgba(0,212,255,.055),rgba(184,76,255,.045)),#090c12;position:relative;z-index:1;overflow:hidden}.av-process:after{content:'BLANKDIGI';position:absolute;right:-20px;bottom:-38px;font-size:110px;font-weight:950;letter-spacing:-.07em;color:rgba(255,255,255,.018);pointer-events:none}.av-process-copy h3{margin:12px 0 14px;font-size:clamp(31px,4vw,50px);line-height:1;letter-spacing:-.045em}.av-process-copy p{margin:0;color:var(--muted);line-height:1.72}.av-timeline{display:grid;gap:0}.av-step{display:grid;grid-template-columns:54px 1fr auto;gap:14px;align-items:center;padding:17px 0;border-bottom:1px solid rgba(255,255,255,.08)}.av-step:last-child{border-bottom:0}.av-step-num{color:#72e8ff;font:900 11px ui-monospace,monospace}.av-step strong{font-size:15px}.av-step small{color:var(--muted);font:700 9px ui-monospace,monospace;letter-spacing:.11em;text-transform:uppercase}.av-step-dot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.28)}.av-step:nth-child(4) .av-step-dot,.av-step:nth-child(5) .av-step-dot{background:#72e8ff;box-shadow:0 0 17px rgba(114,232,255,.55)}
    .av-packages{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:30px;position:relative;z-index:1}.av-package{position:relative;min-height:350px;padding:28px;border:1px solid rgba(255,255,255,.1);border-radius:26px;background:linear-gradient(180deg,rgba(255,255,255,.055),rgba(255,255,255,.018));overflow:hidden;transition:.3s ease}.av-package:nth-child(2){border-color:rgba(0,212,255,.35);box-shadow:0 0 0 1px rgba(0,212,255,.05),0 28px 70px rgba(0,0,0,.2)}.av-package:hover{transform:translateY(-6px);border-color:rgba(255,255,255,.24)}.av-package-tag{display:inline-flex;padding:6px 8px;border-radius:999px;border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.66);font:800 8px ui-monospace,monospace;letter-spacing:.13em}.av-package:nth-child(2) .av-package-tag{color:#72e8ff;border-color:rgba(0,212,255,.26);background:rgba(0,212,255,.05)}.av-package-metric{margin:44px 0 32px}.av-package-metric strong{display:block;font-size:clamp(48px,5vw,72px);line-height:.85;letter-spacing:-.06em}.av-package-metric span{display:block;margin-top:9px;color:var(--muted);font:800 9px ui-monospace,monospace;letter-spacing:.13em;text-transform:uppercase}.av-package h4{margin:0 0 10px;font-size:21px;line-height:1.1}.av-package p{margin:0;color:var(--muted);font-size:13px;line-height:1.65}.av-package-name{position:absolute;right:22px;bottom:18px;color:rgba(255,255,255,.06);font-size:24px;font-weight:950;letter-spacing:-.04em;white-space:nowrap}
    .av-proof{display:grid;grid-template-columns:1fr 1.1fr;gap:26px;margin-top:14px;position:relative;z-index:1}.av-proof-copy,.av-proof-list{padding:30px;border:1px solid rgba(255,255,255,.09);border-radius:24px;background:rgba(255,255,255,.018)}.av-proof-copy h3{margin:13px 0 12px;font-size:32px;letter-spacing:-.04em}.av-proof-copy p{margin:0;color:var(--muted);line-height:1.72}.av-proof-list{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;padding:0;overflow:hidden;background:rgba(255,255,255,.07)}.av-proof-list div{padding:22px;background:#090c12;font-size:13px;font-weight:800}.av-proof-list span{display:block;margin-bottom:12px;color:#72e8ff;font:900 10px ui-monospace,monospace}.av-cta{position:relative;z-index:1;display:grid;grid-template-columns:1.3fr auto;gap:36px;align-items:center;margin-top:clamp(54px,7vw,88px);padding:clamp(32px,5vw,58px);border:1px solid rgba(255,255,255,.13);border-radius:30px;background:radial-gradient(circle at 90% 0%,rgba(184,76,255,.18),transparent 36%),radial-gradient(circle at 0% 100%,rgba(0,212,255,.13),transparent 38%),#0a0d13;box-shadow:0 34px 90px rgba(0,0,0,.3);overflow:hidden}.av-cta:before{content:'';position:absolute;width:220px;height:220px;border:1px solid rgba(255,255,255,.08);border-radius:50%;right:90px;top:-140px;box-shadow:0 0 0 34px rgba(255,255,255,.018),0 0 0 68px rgba(255,255,255,.012)}.av-cta-copy{position:relative;z-index:1}.av-cta h3{margin:13px 0 12px;font-size:clamp(31px,4vw,54px);line-height:1;letter-spacing:-.05em;max-width:880px}.av-cta p{margin:0;max-width:760px;color:var(--muted);line-height:1.7}.av-cta .btn{position:relative;z-index:2;white-space:nowrap;box-shadow:0 14px 42px rgba(0,212,255,.13)}
    .ai-video-nav{position:relative}.ai-video-nav:after{content:'NEW';position:absolute;top:-8px;right:-15px;color:#72e8ff;font:900 7px ui-monospace,monospace;letter-spacing:.06em}
    body.light-theme .ai-video-production{background:#f4f7fb}.light-theme .av-display .ghost{-webkit-text-stroke-color:rgba(7,9,14,.38)}.light-theme .av-lead,.light-theme .av-service p,.light-theme .av-package p,.light-theme .av-process-copy p,.light-theme .av-proof-copy p,.light-theme .av-cta p{color:#657083}.light-theme .av-service,.light-theme .av-process,.light-theme .av-proof-copy,.light-theme .av-proof-list div{background:#fff}.light-theme .av-package{background:linear-gradient(180deg,#fff,#f7f9fc)}
    @media(max-width:1080px){.av-hero{grid-template-columns:1fr}.av-reel{max-width:780px;width:100%;margin:auto;transform:none}.av-service-rail{grid-template-columns:repeat(2,1fr)}.av-process{grid-template-columns:1fr}.av-cta{grid-template-columns:1fr}.av-cta .btn{width:100%}}
    @media(max-width:800px){.av-section-head{grid-template-columns:1fr;align-items:start}.av-lane:nth-child(n){grid-column:span 12}.av-lane{min-height:390px}.av-packages{grid-template-columns:1fr}.av-proof{grid-template-columns:1fr}.av-display{font-size:clamp(44px,14vw,76px)}.av-reel{min-height:430px}.av-reel-inner,.av-reel-grid{min-height:394px}.av-package{min-height:285px}}
    @media(max-width:620px){.ai-video-production{padding-left:18px!important;padding-right:18px!important}.av-hero-actions{flex-direction:column}.av-hero-actions .btn,.av-text-link{width:100%;justify-content:center}.av-reel{padding:10px;border-radius:23px;min-height:420px}.av-reel-inner,.av-reel-grid{min-height:398px}.av-reel-grid{grid-template-columns:1fr}.av-reel-side{display:none}.av-reel-hud{left:18px;right:18px;bottom:18px}.av-service-rail{grid-template-columns:1fr}.av-process{padding:24px}.av-step{grid-template-columns:42px 1fr auto}.av-proof-list{grid-template-columns:1fr}.av-cta{padding:28px}.av-signal span{padding-inline:14px}.av-lane-arrow{display:none}}
    @media(prefers-reduced-motion:reduce){.av-reel:before,.av-signal-track,.av-eyebrow:before{animation:none}.av-lane,.av-lane img,.av-package{transition:none}}
  `;

  function lang() {
    const active = document.querySelector('.lang-switch button.active');
    return active && active.textContent.trim().toLowerCase() === 'fr' ? 'fr' : 'en';
  }

  function render() {
    if (document.getElementById('ai-video-production')) return;
    const tools = document.getElementById('ai-tools');
    if (!tools) return;

    const l = lang();
    const t = copy[l];

    const laneHtml = lanes.map((item) => `
      <article class="av-lane">
        <div class="av-lane-media"><img loading="lazy" src="${item.img}" alt="${l === 'fr' ? item.fr : item.en}" /></div>
        <div class="av-lane-top"><span class="av-lane-number">${item.code}</span><span class="av-lane-type">${item.type}</span></div>
        <div class="av-lane-content">
          <h4>${l === 'fr' ? item.fr : item.en}</h4>
          <p>${l === 'fr' ? item.frText : item.enText}</p>
          <div class="av-lane-meta">${item.meta}</div>
        </div>
        <div class="av-lane-arrow">↗</div>
      </article>
    `).join('');

    const serviceHtml = services.map((s) => `
      <article class="av-service">
        <span class="av-code">${s[0]}</span>
        <h4>${l === 'fr' ? s[2] : s[1]}</h4>
        <p>${l === 'fr' ? s[4] : s[3]}</p>
      </article>
    `).join('');

    const packageHtml = packages.map((p) => `
      <article class="av-package">
        <span class="av-package-tag">${p.tag}</span>
        <div class="av-package-metric"><strong>${p.metric}</strong><span>${p.metricLabel}</span></div>
        <h4>${l === 'fr' ? p.fr : p.en}</h4>
        <p>${l === 'fr' ? p.frText : p.enText}</p>
        <div class="av-package-name">${p.name}</div>
      </article>
    `).join('');

    const section = document.createElement('section');
    section.id = 'ai-video-production';
    section.className = 'ai-video-production';
    section.innerHTML = `
      <div class="av-noise"></div>

      <div class="av-hero">
        <div class="av-hero-copy">
          <span class="av-eyebrow">${t.eyebrow}</span>
          <h2 class="av-display">${t.titleA}<span class="ghost">${t.titleB}</span></h2>
          <p class="av-lead">${t.intro}</p>
          <div class="av-hero-actions">
            <button class="btn btn-primary" onclick="openAuditWithStyle('AI Video Production')">${t.cta}</button>
            <a class="av-text-link" href="#worlds">${t.secondary} <span>↘</span></a>
          </div>
        </div>

        <div class="av-reel" aria-label="BlankDigi creative reel preview">
          <div class="av-reel-inner">
            <div class="av-reel-grid">
              <div class="av-reel-main"><img src="../assets/images/avatar-worlds/comedy-host.jpg" alt="AI comedy creative" /></div>
              <div class="av-reel-side">
                <div class="av-reel-mini"><img src="../assets/images/avatar-worlds/product-presenter.jpg" alt="AI product creative" /></div>
                <div class="av-reel-mini"><img src="../assets/images/avatar-worlds/stylish-creator.jpg" alt="AI creator visual" /></div>
              </div>
            </div>
            <div class="av-corner">${t.reelLabel}</div>
            <div class="av-live">STUDIO ONLINE</div>
            <div class="av-reel-hud">
              <div><strong>BlankDigi Creative Direction</strong><span>${t.reelNote}</span></div>
              <div class="av-play" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="av-signal" aria-hidden="true"><div class="av-signal-track">
        <span>AI COMMERCIALS</span><span>PRODUCT FILMS</span><span>CINEMATIC WORLDS</span><span>COMEDY FORMATS</span><span>CHARACTER SYSTEMS</span><span>VERTICAL CAMPAIGNS</span><span>AI COMMERCIALS</span><span>PRODUCT FILMS</span><span>CINEMATIC WORLDS</span><span>COMEDY FORMATS</span><span>CHARACTER SYSTEMS</span><span>VERTICAL CAMPAIGNS</span>
      </div></div>

      <div class="av-section-head"><span class="av-mini-label">${t.capabilities}</span><h3>${t.capabilitiesTitle}</h3></div>
      <div class="av-lanes">${laneHtml}</div>
      <div class="av-service-rail">${serviceHtml}</div>

      <div class="av-section-head"><span class="av-mini-label">${t.process}</span><h3>${t.processTitle}</h3></div>
      <div class="av-process">
        <div class="av-process-copy"><span class="av-code">CONTROLLED CREATIVE PIPELINE</span><h3>${t.processTitle}</h3><p>${t.processText}</p></div>
        <div class="av-timeline">
          <div class="av-step"><span class="av-step-num">01</span><strong>Brief & Objective</strong><span class="av-step-dot"></span></div>
          <div class="av-step"><span class="av-step-num">02</span><strong>Concept & Creative Logic</strong><span class="av-step-dot"></span></div>
          <div class="av-step"><span class="av-step-num">03</span><strong>Script & Shot Design</strong><span class="av-step-dot"></span></div>
          <div class="av-step"><span class="av-step-num">04</span><strong>${l === 'fr' ? 'Génération & Continuité' : 'Generation & Continuity'}</strong><span class="av-step-dot"></span></div>
          <div class="av-step"><span class="av-step-num">05</span><strong>${l === 'fr' ? 'Montage, Son & Sous-titres' : 'Edit, Sound & Subtitles'}</strong><span class="av-step-dot"></span></div>
          <div class="av-step"><span class="av-step-num">06</span><strong>${l === 'fr' ? 'Exports & Variantes' : 'Exports & Variations'}</strong><span class="av-step-dot"></span></div>
        </div>
      </div>

      <div class="av-section-head"><span class="av-mini-label">${t.offers}</span><h3>${t.offersTitle}</h3></div>
      <div class="av-packages">${packageHtml}</div>

      <div class="av-proof">
        <div class="av-proof-copy"><span class="av-mini-label">${t.proof}</span><h3>${t.proofTitle}</h3><p>${t.proofText}</p></div>
        <div class="av-proof-list">
          <div><span>01</span>${l === 'fr' ? 'Direction créative' : 'Creative direction'}</div>
          <div><span>02</span>${l === 'fr' ? 'Script & logique des plans' : 'Script & shot logic'}</div>
          <div><span>03</span>${l === 'fr' ? 'Génération & cohérence' : 'Generation & consistency'}</div>
          <div><span>04</span>${l === 'fr' ? 'Montage & sound design' : 'Edit & sound design'}</div>
          <div><span>05</span>${l === 'fr' ? 'Sous-titres & formats' : 'Subtitles & formats'}</div>
          <div><span>06</span>${l === 'fr' ? 'Variantes créatives' : 'Creative variations'}</div>
        </div>
      </div>

      <div class="av-cta">
        <div class="av-cta-copy"><span class="av-mini-label">${t.project}</span><h3>${t.ctaTitle}</h3><p>${t.ctaText}</p></div>
        <button class="btn btn-primary" onclick="openAuditWithStyle('AI Video Production')">${t.cta}</button>
      </div>
    `;

    tools.parentNode.insertBefore(section, tools);

    const nav = document.querySelector('a[href="#worlds"]');
    if (nav && !document.querySelector('a[href="#ai-video-production"]')) {
      const a = document.createElement('a');
      a.href = '#ai-video-production';
      a.textContent = t.nav;
      a.className = 'ai-video-nav';
      nav.insertAdjacentElement('afterend', a);
    }
  }

  function remount() {
    const section = document.getElementById('ai-video-production');
    if (section) section.remove();
    const nav = document.querySelector('.ai-video-nav');
    if (nav) nav.remove();
    render();
  }

  const style = document.createElement('style');
  style.id = 'ai-video-offer-styles';
  style.textContent = css;
  document.head.appendChild(style);

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();

  document.addEventListener('click', (event) => {
    if (event.target.closest('.lang-switch button')) setTimeout(remount, 0);
  });
})();
