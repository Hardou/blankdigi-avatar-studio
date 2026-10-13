// BlankDigi AI Video Production offer for /ai-content-avatar/
(function () {
  const copy = {
    en: {
      nav:'AI Video', kicker:'BLANKDIGI AI VIDEO PRODUCTION',
      title:'Commercial videos without the traditional production crew.',
      intro:'From a product photo, brand idea or existing creative direction, BlankDigi builds the concept, script, AI generation, edit, sound, subtitles and delivery.',
      flow:'PRODUCTION FLOW', flowTitle:'Brief → concept → final cut.',
      project:'HAVE A PRODUCT OR IDEA?', ctaTitle:'Send the brief. BlankDigi builds the creative.',
      ctaText:'Scope depends on duration, scene count, character consistency and creative variations.', cta:'Start an AI Video Project'
    },
    fr: {
      nav:'Vidéo IA', kicker:'PRODUCTION VIDÉO IA BLANKDIGI',
      title:'Des vidéos commerciales sans équipe de tournage traditionnelle.',
      intro:'À partir d’une photo produit, d’une idée de marque ou d’une direction créative existante, BlankDigi construit le concept, le script, la génération IA, le montage, le son, les sous-titres et la livraison.',
      flow:'PROCESSUS DE PRODUCTION', flowTitle:'Brief → concept → montage final.',
      project:'VOUS AVEZ UN PRODUIT OU UNE IDÉE ?', ctaTitle:'Envoyez le brief. BlankDigi construit la création.',
      ctaText:'Le périmètre dépend de la durée, du nombre de scènes, de la cohérence des personnages et des variantes créatives.', cta:'Démarrer un projet vidéo IA'
    }
  };

  const services = [
    ['01 / PRODUCT','AI Product Ads','Publicités Produit IA','Product-first creatives for e-commerce, fashion, beauty, local retail and launches.','Créations centrées sur le produit pour e-commerce, mode, beauté, commerce local et lancements.','9:16 · Ads · E-commerce'],
    ['02 / CINEMATIC','Cinematic Brand Films','Films de Marque Cinématiques','Impossible-looking scenes, visual storytelling and premium campaign films built with generative video.','Scènes impossibles à tourner, storytelling visuel et films de campagne premium créés avec la vidéo générative.','Story · Brand · Campaign'],
    ['03 / SOCIAL','Reels, Shorts & TikTok','Reels, Shorts & TikTok','Fast vertical content designed for hooks, retention, iteration and platform-native testing.','Contenu vertical conçu pour les hooks, la rétention, l’itération et les tests natifs aux plateformes.','Hooks · Vertical · Variants'],
    ['04 / COMEDY','AI Comedy & Viral Concepts','Comédie IA & Concepts Viraux','Brand-safe absurd comedy, visual misunderstandings and repeatable formats built for attention.','Comédie absurde adaptée aux marques, malentendus visuels et formats répétables conçus pour capter l’attention.','Comedy · Attention · Series'],
    ['05 / CHARACTERS','AI Characters & Worlds','Personnages & Univers IA','Consistent fictional characters, presenters and visual worlds that return across multiple videos.','Personnages cohérents, présentateurs et univers visuels réutilisables dans plusieurs vidéos.','Identity · Worlds · Continuity'],
    ['06 / UGC','AI UGC & Presenters','UGC IA & Présentateurs','Presenter-led demos and offer explanations without daily recording.','Démos avec présentateur et explications d’offres sans tournage quotidien.','UGC · Demo · Presenter']
  ];

  const packages = [
    ['TEST CREATIVE','Start with one idea.','Commencez avec une idée.','One focused commercial creative to validate the direction before scaling.','Une création ciblée pour valider la direction avant de passer à l’échelle.'],
    ['CAMPAIGN PACK','Test multiple angles.','Testez plusieurs angles.','A batch of concepts or variations for a product, launch or campaign.','Un lot de concepts ou variantes pour un produit, un lancement ou une campagne.'],
    ['CONTENT ENGINE','Keep producing every month.','Produisez chaque mois.','Recurring creative production with new hooks, formats and performance-led iterations.','Production récurrente avec nouveaux hooks, formats et itérations guidées par la performance.']
  ];

  const css = `
    .ai-video-production{position:relative;overflow:hidden;border-top:1px solid var(--border);border-bottom:1px solid var(--border);background:radial-gradient(circle at 8% 8%,rgba(0,212,255,.10),transparent 30%),radial-gradient(circle at 92% 14%,rgba(184,76,255,.10),transparent 34%)}
    .ai-video-production:before{content:'';position:absolute;inset:0;pointer-events:none;opacity:.15;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:42px 42px}
    .av-kicker,.av-code{position:relative;z-index:1;color:var(--accent2);font:800 11px ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase}.av-kicker{display:inline-flex;margin-bottom:18px;padding:8px 11px;border:1px solid rgba(0,212,255,.22);border-radius:999px;background:rgba(0,212,255,.06)}
    .av-head,.av-grid,.av-flow,.av-packages,.av-cta{position:relative;z-index:1}.av-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:34px}.av-card,.av-packages article{padding:24px;border:1px solid var(--border);border-radius:20px;background:linear-gradient(180deg,rgba(255,255,255,.045),rgba(255,255,255,.018));transition:.22s ease}.av-card{min-height:235px}.av-card:hover,.av-packages article:hover{transform:translateY(-4px);border-color:rgba(0,212,255,.32)}.av-card:first-child{border-color:rgba(0,212,255,.34)}
    .av-card h3,.av-packages h3,.av-flow h3,.av-cta h3{margin:12px 0 10px;font-size:22px;line-height:1.15}.av-card p,.av-packages p,.av-cta p{margin:0;color:var(--muted);line-height:1.7}.av-tags{margin-top:22px;color:var(--muted);font-size:10px;font-weight:800;letter-spacing:.05em;text-transform:uppercase}
    .av-flow{display:grid;grid-template-columns:.8fr 1.7fr;gap:28px;margin-top:18px;padding:28px;border:1px solid var(--border);border-radius:20px;background:rgba(5,7,12,.48)}.av-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:0;padding:0;list-style:none}.av-steps li{display:flex;flex-direction:column;gap:7px;padding:14px;border:1px solid var(--border);border-radius:14px;background:rgba(255,255,255,.025)}.av-steps strong{color:var(--accent2);font:800 11px ui-monospace,monospace}.av-steps span{font-size:13px;font-weight:800}
    .av-packages{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:18px}.av-packages article{min-height:185px}.av-cta{display:grid;grid-template-columns:1.4fr auto;align-items:center;gap:28px;margin-top:18px;padding:30px;border:1px solid rgba(184,76,255,.28);border-radius:22px;background:linear-gradient(110deg,rgba(184,76,255,.09),rgba(0,212,255,.06)),rgba(255,255,255,.02)}
    @media(max-width:980px){.av-grid{grid-template-columns:repeat(2,1fr)}.av-flow,.av-cta{grid-template-columns:1fr}.av-cta .btn{width:100%}}@media(max-width:700px){.av-grid,.av-packages,.av-steps{grid-template-columns:1fr}.av-card{min-height:0}.av-flow,.av-cta{padding:20px}}
  `;

  function lang(){ const a=document.querySelector('.lang-switch button.active'); return a&&a.textContent.trim().toLowerCase()==='fr'?'fr':'en'; }
  function render(){
    if(document.getElementById('ai-video-production')) return;
    const tools=document.getElementById('ai-tools'); if(!tools) return;
    const l=lang(), t=copy[l];
    const serviceHtml=services.map(s=>`<article class="av-card"><span class="av-code">${s[0]}</span><h3>${l==='fr'?s[2]:s[1]}</h3><p>${l==='fr'?s[4]:s[3]}</p><div class="av-tags">${s[5]}</div></article>`).join('');
    const packageHtml=packages.map(p=>`<article><span class="av-code">${p[0]}</span><h3>${l==='fr'?p[2]:p[1]}</h3><p>${l==='fr'?p[4]:p[3]}</p></article>`).join('');
    const section=document.createElement('section'); section.id='ai-video-production'; section.className='ai-video-production';
    section.innerHTML=`<div class="av-kicker">${t.kicker}</div><div class="section-head av-head"><div><h2>${t.title}</h2></div><div><p>${t.intro}</p></div></div><div class="av-grid">${serviceHtml}</div><div class="av-flow"><div><span class="av-code">${t.flow}</span><h3>${t.flowTitle}</h3></div><ol class="av-steps"><li><strong>01</strong><span>Brief</span></li><li><strong>02</strong><span>Concept</span></li><li><strong>03</strong><span>Script</span></li><li><strong>04</strong><span>${l==='fr'?'Production IA':'AI Production'}</span></li><li><strong>05</strong><span>${l==='fr'?'Montage + Son':'Edit + Sound'}</span></li><li><strong>06</strong><span>${l==='fr'?'Livraison':'Delivery'}</span></li></ol></div><div class="av-packages">${packageHtml}</div><div class="av-cta"><div><span class="av-code">${t.project}</span><h3>${t.ctaTitle}</h3><p>${t.ctaText}</p></div><button class="btn btn-primary" onclick="openAuditWithStyle('AI Video Production')">${t.cta}</button></div>`;
    tools.parentNode.insertBefore(section,tools);
    const nav=document.querySelector('a[href="#worlds"]'); if(nav&&!document.querySelector('a[href="#ai-video-production"]')){const a=document.createElement('a');a.href='#ai-video-production';a.textContent=t.nav;a.className='ai-video-nav';nav.insertAdjacentElement('afterend',a)}
  }
  function remount(){ const s=document.getElementById('ai-video-production'); if(s)s.remove(); const n=document.querySelector('.ai-video-nav'); if(n)n.remove(); render(); }
  const style=document.createElement('style'); style.id='ai-video-offer-styles'; style.textContent=css; document.head.appendChild(style);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',render); else render();
  document.addEventListener('click',e=>{if(e.target.closest('.lang-switch button')) setTimeout(remount,0)});
})();
