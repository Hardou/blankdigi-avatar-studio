let currentLang = "en";
window.selectedAvatarStyle = "Not selected";

const translations = {
  en: {
    heroBadge: "AI Content Avatar Studio",
    heroTitle: "Choose the face of your brand.",
    heroText: "BlankDigi builds weekly content systems for businesses that want to show up without recording every day. Pick your avatar style, and we build the scripts, visuals, captions, approvals, and publishing workflow around it.",
    exploreBtn: "Explore Avatar Worlds",
    auditBtn: "Start BlankDigi Avatar Audit",
    auditBtn2: "Start BlankDigi Avatar Audit",
    heroLabel1: "BlankDigi Avatar",
    heroLabel2: "Warm Founder",
    heroLabel3: "Stylish Creator",
    problemTitle: "Not just an avatar. A content identity.",
    problemText: "Every business needs a different face, tone, and world. A fashion brand should not look like a real estate brand, and a coach should not sound like a product seller.",
    step1Title: "Choose the world",
    step1Text: "Pick the visual style that fits your brand personality.",
    step2Title: "Define the tone",
    step2Text: "Warm, funny, stylish, serious, luxury, or expert.",
    step3Title: "Build the content",
    step3Text: "Scripts, hooks, captions, visuals, and platform versions.",
    step4Title: "Approve & publish",
    step4Text: "You approve the direction before content goes live.",
    
    worldsTitle: "Explore Avatar Worlds",
    worldsText: "Each world is built for a specific business type, audience, and content goal.",
    filterAll: "🌐 All",
    filterCorporate: "💼 Corporate & Finance",
    filterFashion: "💎 Fashion & Luxury",
    filterHealth: "⚡ Health & Fitness",
    filterEducation: "📚 Education & Info",
    filterMedia: "🎬 Lifestyle & Media",
    filterCommerce: "🛍️ Commerce & Local",
    
    servicesTitle: "What BlankDigi builds around your avatar",
    servicesText: "The avatar is only the visible part. The real value is the system behind it.",
    service1Title: "Avatar Direction",
    service1Text: "We define the facial movements, expressions, lighting, and visual assets unique to your brand's avatar.",
    service2Title: "Scripts & Hooks",
    service2Text: "Our copywriters write high-converting hooks and scripts tailored for your target audience every week.",
    service3Title: "Video Formats",
    service3Text: "We format the videos for multiple ratios and platform requirements, ensuring perfect rendering everywhere.",
    service4Title: "Approval Workflow",
    service4Text: "You review and approve every visual, script, and automation before they ever go live. You have full control.",
    service5Title: "Captions & CTAs",
    service5Text: "Engaging post descriptions, tags, and calls-to-action written to drive clicks and conversions.",
    service6Title: "Content System",
    service6Text: "A weekly publishing and scheduling workflow that keeps your brand active without eating up your calendar.",
    
    finalTitle: "Not sure which avatar fits your brand?",
    finalText: "Send us your business type and goal. We will suggest the best avatar world and content direction.",
    trustLine: "No payment required. Start with a free avatar audit on WhatsApp.",
    compareBtn: "Compare Styles",
    
    // Modals
    worldLabel: "World Context",
    bestForLabel: "Best For",
    formatsLabel: "Best Video Formats",
    sampleLabel: "Sample Content Idea",
    useStyleBtn: "Use this style",
    compareStyleBtn: "Compare styles",
    
    auditTitle: "Start Avatar Audit",
    auditText: "Tell us about your brand and we will suggest the best avatar world.",
    namePlaceholder: "Your Name",
    businessPlaceholder: "Business name",
    typePlaceholder: "Business type",
    whatsappPlaceholder: "WhatsApp number",
    goalPlaceholder: "What is your main content goal / message?",
    sendAuditBtn: "Send Audit Request",
    selectedStyleLabel: "Selected Style:",
    auditModalSub: "Start Audit",
    
    typeFashion: "Fashion",
    typeRealEstate: "Real Estate",
    typeDigitalService: "Digital Service",
    typeLocalBusiness: "Local Business",
    typeEcommerce: "E-commerce",
    typeCoach: "Coach / Consultant",
    typeOther: "Other",
    
    platformPlaceholder: "Main Platform",
    platformTikTok: "TikTok",
    platformInstagram: "Instagram Reels",
    platformYouTube: "YouTube Shorts",
    platformLinkedIn: "LinkedIn",
    platformFacebook: "Facebook",
    platformAll: "All platforms",
    
    compareTitle: "Compare Avatar Styles",
    compareText: "Choose based on your business goal, not only the look.",
    helpChooseBtn: "Help me choose",
    
    navServices: "Services",
    navAiAgents: "AI Agents",
    navBuilt: "Built",
    navAvatarStudio: "Avatar Studio",
    navAbout: "About",
    navBlog: "Blog",
    navFreeAudit: "Free Audit",
    
    universeTitle: "BlankDigi Universe",
    universeText: "An immersive universe where creativity, technology, and style meet. 4 entities, 1 single objective: build the future together.",
    syncCoreBtn: "⚡ Sync Core",
    uniTabCrew: "The Crew",
    uniTabWorlds: "The Worlds",
    uniTabSeries: "The Series",
    uniTabValues: "Mission & Values",
    crewFounderBadge: "You",
    crewFounderName: "The Founder",
    crewFounderDesc: "Vision. Strategy. Leadership. He connects the real to the virtual and makes the right decisions.",
    crewBlankDigiBadge: "The Brain",
    crewBlankDigiName: "BlankDigi",
    crewBlankDigiDesc: "Advanced AI. Code. Systems. He builds what others imagine. Cold but loyal.",
    crewPopossBadge: "The Vibe",
    crewPopossName: "Poposs",
    crewPopossDesc: "Funny. Chaotic. Always creates the moment. Heart of gold.",
    crewFollovidaBadge: "The Style",
    crewFollovidaName: "Follovida",
    crewFollovidaDesc: "Elegance. Power. Immersive augmented fashion universe, smart & premium boutique.",
    worldLabName: "BlankDigi Lab",
    worldLabDesc: "The futuristic laboratory where ideas, AIs, avatars, and projects are born.",
    worldBoutiqueName: "Follovida Boutique",
    worldBoutiqueDesc: "Smart fashion boutique where technology meets style and client experience.",
    worldCityName: "The City",
    worldCityDesc: "Connected city where humans, AIs, and creatures coexist with missions and challenges.",
    worldMetaverseName: "The Metaverse",
    worldMetaverseDesc: "Limitless space where everything is possible. The future of creation and innovation.",
    ep1Title: "Poposs arrives at BlankDigi Lab",
    ep1Desc: "Poposs breaks something in the lab... as usual.",
    ep2Title: "Follovida dresses Poposs in AI mode",
    ep2Desc: "A star look for a boss unlike any other.",
    ep3Title: "Mission in Town with Robo Taxi",
    ep3Desc: "Deliver a package? Easy... or not.",
    ep4Title: "AI glitches and everything goes wild",
    ep4Desc: "Glitch in the system. Who will save the day?",
    ep5Title: "Summit meeting: Solutions & Plan",
    ep5Desc: "Strategy, creativity and friendship = victory.",
    valuesHeader: "Our Values",
    val1Title: "Creativity Without Limits",
    val1Text: "Pushing aesthetic boundaries in everything we construct.",
    val2Title: "Innovation & Technology",
    val2Text: "Leveraging cutting-edge AI and advanced workflows.",
    val3Title: "Quality & Excellence",
    val3Text: "Building premium high-converting assets.",
    val4Title: "Mutual Support & Friendship",
    val4Text: "Teamwork makes the digital universe happen.",
    val5Title: "Fun & Positivity",
    val5Text: "Creating content that brings smiles and energy.",
    missionHeader: "Our Mission",
    missionText: "To connect fashion, technology and emotion. To inspire the next generation to create, dare, and build the future with passion. The future is now, let's construct it together.",
    followVibe: "Follow the Vibe:",
    simulateBtn: "Render Episode",
    crewBtnFounder: "Request Strategy Audit",
    crewBtnBlankDigi: "Inspect System Specs",
    crewBtnPoposs: "Unlock Viral Vibe",
    crewBtnFollovida: "Explore Fashion World",
    valStrategy: "Strategy",
    valLeadership: "Leadership",
    valAdvancedAI: "Advanced AI",
    valCodeLogic: "Code Logic",
    valViralVibe: "Viral Vibe",
    valHumorChaos: "Humor & Chaos",
    valStyleHype: "Style Hype",
    valElegance: "Elegance",
    crewPixelPatchBadge: "The Visuals",
    crewPixelPatchName: "Pixel-Patch",
    crewPixelPatchDesc: "Interactive art. Holograms. Layouts. She paints the digital sky and designs immersive interfaces.",
    crewBtnPixelPatch: "View Styleguide",
    valUiDesign: "UI Design",
    valHolography: "Holography",
    crewFolloDriveBadge: "The Pilot",
    crewFolloDriveName: "Follo-Drive",
    crewFolloDriveDesc: "Navigation. Drones. Speed. He controls the Robo-Taxi networks and solves urban gridlocks.",
    crewBtnFolloDrive: "Trace Route",
    valNavigation: "Navigation",
    valSpeed: "Speed",
    crewVibeVortexBadge: "The Agent",
    crewVibeVortexName: "Vibe-Vortex",
    crewVibeVortexDesc: "Trends. Sentiment Analysis. Viral Loops. She scans the social network nodes and predicts the next hype.",
    crewBtnVibeVortex: "Scan Trends",
    valTrendScan: "Trend Scan",
    valSentimentAI: "Sentiment AI",
    crewCryptKeyBadge: "The Shield",
    crewCryptKeyName: "Crypt-Key",
    crewCryptKeyDesc: "Security. Encryption. Firewalls. He protects the quantum core from external glitched entities.",
    crewBtnCryptKey: "Verify Shield",
    valSecurity: "Security",
    valDecryption: "Decryption",
    footerSlogan: "Ideas → Impact.",
    worldLabBtn: "Activate Core",
    worldBoutiqueBtn: "Scan Wardrobe",
    worldCityBtn: "Trace Robo-Taxi",
    worldMetaverseBtn: "Sync Matrix",
    diagCloseBtn: "Secure Connection",
    hudStatusActive: "SYS.STATUS: ACTIVE",
    hudScanInactive: "SCAN: INACTIVE",
    footerTagline: "The agency that transforms your marketing operations into intelligent automated systems.",
    footerLocation: "El Jadida, Morocco",
    footerServices: "Services",
    footerSvcContent: "AI Content System",
    footerSvcAvatar: "AI Content Avatar",
    footerSvcCRM: "CRM & WhatsApp Automation",
    footerSvcAds: "Ads Performance Stack",
    footerSvcN8n: "Custom n8n Workflows",
    footerSvcWeb: "AI-Powered Websites",
    footerCompany: "Company",
    footerAbout: "About",
    footerBlog: "Blog",
    footerBuilt: "Built",
    footerAgents: "AI Agents",
    footerContact: "Contact",
    footerPrivacy: "Privacy Policy",
    footerConnect: "Connect",
    footerAuditBtn: "🚀 Free Avatar Audit",
    footerCopyright: "© 2026 BlankDigi. All rights reserved. Made with 🤖 + ☕ in Morocco."
  },
  fr: {
    heroBadge: "Studio d’Avatar IA",
    heroTitle: "Choisissez l’univers d’avatar IA de votre marque.",
    heroText: "BlankDigi crée des systèmes de contenu hebdomadaires pour les entreprises qui veulent publier sans enregistrer tous les jours. Choisissez votre style d’avatar, et nous créons les scripts, visuels, légendes, validations et workflow de publication.",
    exploreBtn: "Explorer les univers",
    auditBtn: "Commencer l’audit avatar BlankDigi",
    auditBtn2: "Commencer l’audit avatar BlankDigi",
    heroLabel1: "Avatar BlankDigi",
    heroLabel2: "Fondateur Chaleureux",
    heroLabel3: "Créateur Stylé",
    problemTitle: "Pas seulement un avatar. Une identité.",
    problemText: "Chaque entreprise a besoin d'un visage, d'un ton et d'un univers différents. Une marque de mode ne doit pas ressembler à un promoteur immobilier, et un coach ne doit pas sonner comme un vendeur de produits.",
    step1Title: "Choisir l’univers",
    step1Text: "Sélectionnez le style visuel qui correspond à votre marque.",
    step2Title: "Définir le ton",
    step2Text: "Chaleureux, drôle, élégant, sérieux, luxe ou expert.",
    step3Title: "Créer le contenu",
    step3Text: "Scripts, accroches, légendes, visuels et déclinaisons.",
    step4Title: "Valider & publier",
    step4Text: "Vous validez la direction avant la mise en ligne.",
    
    worldsTitle: "Découvrez nos Univers d'Avatars",
    worldsText: "Chaque univers est conçu pour un type d'activité, une audience et un objectif de conversion précis.",
    filterAll: "🌐 Tous",
    filterCorporate: "💼 Entreprises & Finance",
    filterFashion: "💎 Mode & Luxe",
    filterHealth: "⚡ Santé & Fitness",
    filterEducation: "📚 Éducation & Info",
    filterMedia: "🎬 Médias & Style de vie",
    filterCommerce: "🛍️ Commerce & Local",
    
    servicesTitle: "Ce que BlankDigi crée autour de votre avatar",
    servicesText: "L'avatar n'est que la partie visible. La vraie valeur réside dans le système qui l'entoure.",
    service1Title: "Direction d'Avatar",
    service1Text: "Nous définissons les mouvements faciaux, les expressions, la lumière et le style visuel unique de votre avatar.",
    service2Title: "Scripts & Accroches",
    service2Text: "Nos rédacteurs conçoivent chaque semaine des accroches percutantes et des scripts orientés conversion.",
    service3Title: "Formats Vidéo",
    service3Text: "Nous adaptons les vidéos aux différents ratios et exigences techniques de chaque plateforme de diffusion.",
    service4Title: "Workflow de Validation",
    service4Text: "Vous relisez et validez chaque script, visuel et automatisation avant publication. Contrôle total garanti.",
    service5Title: "Légendes & CTAs",
    service5Text: "Des descriptions de posts engageantes et des appels à l'action calibrés pour booster les conversions.",
    service6Title: "Système de Contenu",
    service6Text: "Un workflow hebdomadaire de publication et de planification pour rester actif sans surcharger votre calendrier.",
    
    finalTitle: "Vous ne savez pas quel avatar choisir ?",
    finalText: "Envoyez-nous votre type de business et votre objectif. Nous vous proposerons le meilleur univers d'avatar.",
    trustLine: "Aucun paiement requis. Commencez par un audit avatar gratuit sur WhatsApp.",
    compareBtn: "Comparer les styles",
    
    // Modals
    worldLabel: "Contexte de l'univers",
    bestForLabel: "Idéal Pour",
    formatsLabel: "Meilleurs Formats Vidéo",
    sampleLabel: "Exemple d'idée de contenu",
    useStyleBtn: "Utiliser ce style",
    compareStyleBtn: "Comparer les styles",
    
    auditTitle: "Commencer l'Audit d'Avatar",
    auditText: "Parlez-nous de votre marque et nous vous suggérerons le meilleur univers d'avatar.",
    namePlaceholder: "Votre Nom",
    businessPlaceholder: "Nom de l'entreprise",
    typePlaceholder: "Type d'activité",
    whatsappPlaceholder: "Numéro WhatsApp",
    goalPlaceholder: "Quel est votre objectif principal / message ?",
    sendAuditBtn: "Envoyer la demande",
    selectedStyleLabel: "Style sélectionné :",
    auditModalSub: "Commencer l'Audit",
    
    typeFashion: "Mode / Prêt-à-porter",
    typeRealEstate: "Immobilier",
    typeDigitalService: "Service Digital / Agence",
    typeLocalBusiness: "Commerce Local",
    typeEcommerce: "E-commerce",
    typeCoach: "Coach / Consultant",
    typeOther: "Autre",
    
    platformPlaceholder: "Plateforme Principale",
    platformTikTok: "TikTok",
    platformInstagram: "Instagram Reels",
    platformYouTube: "YouTube Shorts",
    platformLinkedIn: "LinkedIn",
    platformFacebook: "Facebook",
    platformAll: "Toutes les plateformes",
    
    compareTitle: "Comparer les Styles d'Avatars",
    compareText: "Choisissez en fonction de votre objectif business, pas seulement du look.",
    helpChooseBtn: "Aidez-moi à choisir",
    
    navServices: "Services",
    navAiAgents: "Agents IA",
    navBuilt: "Projets",
    navAvatarStudio: "Avatar Studio",
    navAbout: "À propos",
    navBlog: "Blog",
    navFreeAudit: "Audit Gratuit",
    
    universeTitle: "L'Univers BlankDigi",
    universeText: "Un univers où la créativité, la technologie et le style se rencontrent. 4 entités, 1 seul objectif : construire le futur ensemble.",
    syncCoreBtn: "⚡ Sync Noyau",
    uniTabCrew: "Les Personnages",
    uniTabWorlds: "L'Univers",
    uniTabSeries: "La Série",
    uniTabValues: "Mission & Valeurs",
    crewFounderBadge: "Vous",
    crewFounderName: "Le Fondateur",
    crewFounderDesc: "Vision. Stratégie. Leadership. Il relie le réel au virtuel et prend les bonnes décisions.",
    crewBlankDigiBadge: "Le Cerveau",
    crewBlankDigiName: "BlankDigi",
    crewBlankDigiDesc: "IA Avancée. Code. Systèmes. Il construit ce que les autres imaginent. Froid mais loyal.",
    crewPopossBadge: "Le Viral",
    crewPopossName: "Poposs",
    crewPopossDesc: "Drôle. Imprévisible. Toujours là où il ne faut pas, mais il finit toujours par aider. Cœur en or.",
    crewFollovidaBadge: "Le Style",
    crewFollovidaName: "Follovida",
    crewFollovidaDesc: "Élégance. Puissance. Univers de la mode augmentée, boutique intelligente & premium.",
    worldLabName: "BlankDigi Lab",
    worldLabDesc: "Le laboratoire futuriste où naissent les idées, les IA, les avatars et les projets.",
    worldBoutiqueName: "Follovida Boutique",
    worldBoutiqueDesc: "Boutique de mode intelligente où la technologie sublime le style et l'expérience client.",
    worldCityName: "La Ville",
    worldCityDesc: "La ville connectée où humains, IA et créatures coexistent avec des missions et des défis.",
    worldMetaverseName: "Le Métavers",
    worldMetaverseDesc: "Espace illimité où tout est possible. Le futur de la création et de l'innovation.",
    ep1Title: "Poposs débarque au BlankDigi Lab",
    ep1Desc: "Poposs casse quelque chose... comme d'habitude.",
    ep2Title: "Follovida habille Poposs en mode AI",
    ep2Desc: "Un look de star pour un boss pas comme les autres.",
    ep3Title: "Mission en ville avec le taxi robo",
    ep3Desc: "Livrer un colis ? Facile... ou pas.",
    ep4Title: "L'IA bug et tout part en vrille",
    ep4Desc: "Problème dans le système. Qui va sauver la situation ?",
    ep5Title: "Réunion au sommet : Solutions & Plan",
    ep5Desc: "Stratégie, créativité et amitié = victoire.",
    valuesHeader: "Nos Valeurs",
    val1Title: "Créativité sans Limites",
    val1Text: "Repousser les limites de l'esthétique dans tout ce que nous construisons.",
    val2Title: "Innovation & Technologie",
    val2Text: "Exploiter l'IA de pointe et des flux de travail avancés.",
    val3Title: "Qualité & Excellence",
    val3Text: "Créer des actifs premium à taux de conversion élevé.",
    val4Title: "Entraide & Amitié",
    val4Text: "Le travail d'équipe donne vie à notre univers digital.",
    val5Title: "Fun & Positivité",
    val5Text: "Créer du contenu qui apporte sourires et énergie positive.",
    missionHeader: "Notre Mission",
    missionText: "Relier la mode, la technologie et l'émotion. Inspirer la nouvelle génération à créer, oser et construire le futur avec passion. Le futur, c'est maintenant, construisons-le ensemble.",
    followVibe: "Suivez l'Aventure :",
    simulateBtn: "Rendre l'Épisode",
    crewBtnFounder: "Demander l'Audit Stratégie",
    crewBtnBlankDigi: "Inspecter la Logique",
    crewBtnPoposs: "Activer la Vibe",
    crewBtnFollovida: "Découvrir la Mode",
    valStrategy: "Stratégie",
    valLeadership: "Leadership",
    valAdvancedAI: "IA Avancée",
    valCodeLogic: "Logique Code",
    valViralVibe: "Vibe Virale",
    valHumorChaos: "Humour & Chaos",
    valStyleHype: "Style & Hype",
    valElegance: "Élégance",
    crewPixelPatchBadge: "Le Visuel",
    crewPixelPatchName: "Pixel-Patch",
    crewPixelPatchDesc: "Art interactif. Hologrammes. Maquettes. Elle peint le ciel numérique et conçoit des interfaces immersives.",
    crewBtnPixelPatch: "Voir la Charte",
    valUiDesign: "Design UI",
    valHolography: "Holographie",
    crewFolloDriveBadge: "Le Pilote",
    crewFolloDriveName: "Follo-Drive",
    crewFolloDriveDesc: "Navigation. Drones. Vitesse. Il contrôle le réseau Robo-Taxi et résout les embouteillages urbains.",
    crewBtnFolloDrive: "Tracer l'Itinéraire",
    valNavigation: "Navigation",
    valSpeed: "Vitesse",
    crewVibeVortexBadge: "L'Agent",
    crewVibeVortexName: "Vibe-Vortex",
    crewVibeVortexDesc: "Tendances. Analyse de sentiments. Boucles virales. Elle scanne les réseaux sociaux et prédit les tendances.",
    crewBtnVibeVortex: "Scanner les Tendances",
    valTrendScan: "Analyse Tendances",
    valSentimentAI: "IA Sentimentale",
    crewCryptKeyBadge: "Le Bouclier",
    crewCryptKeyName: "Crypt-Key",
    crewCryptKeyDesc: "Sécurité. Cryptage. Pare-feu. Il protège le noyau quantique contre les entités glissées externes.",
    crewBtnCryptKey: "Vérifier le Bouclier",
    valSecurity: "Sécurité",
    valDecryption: "Décryptage",
    footerSlogan: "Ideas → Impact.",
    worldLabBtn: "Activer le Noyau",
    worldBoutiqueBtn: "Scanner la Boutique",
    worldCityBtn: "Tracer le Robo-Taxi",
    worldMetaverseBtn: "Synchroniser la Matrice",
    diagCloseBtn: "Sécuriser la Connexion",
    hudStatusActive: "SYS.STATUT: ACTIF",
    hudScanInactive: "SCAN: INACTIF",
    footerTagline: "L'agence qui transforme vos opérations marketing en systèmes automatisés intelligents.",
    footerLocation: "El Jadida, Maroc",
    footerServices: "Services",
    footerSvcContent: "Système de Contenu IA",
    footerSvcAvatar: "Avatar de Contenu IA",
    footerSvcCRM: "CRM & Automatisation WhatsApp",
    footerSvcAds: "Stack Performance Ads",
    footerSvcN8n: "Workflows n8n Sur Mesure",
    footerSvcWeb: "Sites Web Alimentés par l'IA",
    footerCompany: "Entreprise",
    footerAbout: "À propos",
    footerBlog: "Blog",
    footerBuilt: "Projets",
    footerAgents: "Agents IA",
    footerContact: "Contact",
    footerPrivacy: "Politique de Confidentialité",
    footerConnect: "Nous Suivre",
    footerAuditBtn: "🚀 Audit Avatar Gratuit",
    footerCopyright: "© 2026 BlankDigi. Tous droits réservés. Fait avec 🤖 + ☕ au Maroc."
  }
};

const worlds = [
  {
    id: "warm-founder",
    category: "corporate",
    icon: "WF",
    image: "../assets/images/avatar-worlds/warm-founder.jpg",
    title: { en: "Warm Founder", fr: "Fondateur Chaleureux" },
    line: {
      en: "For brands that need trust, clarity, and a human voice.",
      fr: "Pour les marques qui ont besoin de confiance, de clarté et d'une voix humaine."
    },
    world: {
      en: "Warm office environment, wooden backgrounds, soft warm lamp, stable camera angles.",
      fr: "Cadre de bureau chaleureux, arrière-plans en bois, lampe à lumière douce, angles de caméra stables."
    },
    best: {
      en: "Agencies, consultants, coaches, and B2B service businesses.",
      fr: "Agences, consultants, coachs et entreprises de services B2B."
    },
    formats: {
      en: ["Direct-to-camera tips", "Founder stories", "Service case studies", "Behind-the-scenes thoughts"],
      fr: ["Conseils face caméra", "Histoire du fondateur", "Études de cas client", "Réflexions en coulisses"]
    },
    sample: {
      en: "3 critical mistakes businesses make before launching their organic content system.",
      fr: "3 erreurs cruciales que font les entreprises avant de lancer leur système de contenu organique."
    },
    from: "#3b240d",
    to: "#bf6b22",
    tags: ["Trust", "Education", "Services"]
  },
  {
    id: "stylish-creator",
    category: "fashion",
    icon: "SC",
    image: "../assets/images/avatar-worlds/stylish-creator.jpg",
    title: { en: "Stylish Creator", fr: "Créateur Stylé" },
    line: {
      en: "For brands that need premium aesthetics, fashion influence, and visual impact.",
      fr: "Pour les marques qui exigent une esthétique premium, une influence mode et un impact visuel fort."
    },
    world: {
      en: "Neon studio, dynamic fashion keylights, modern outfits, high-contrast creative grading.",
      fr: "Studio néon, éclairage de mode dynamique, tenues modernes, étalonnage créatif à haut contraste."
    },
    best: {
      en: "Fashion labels, beauty brands, lifestyle products, and premium personal brands.",
      fr: "Marques de mode, produits de beauté, lifestyle et marques personnelles premium."
    },
    formats: {
      en: ["Collection drops", "Style guides & tips", "Visual product showcases", "Trend-based hooks"],
      fr: ["Lancement de collection", "Guides & astuces de style", "Présentations visuelles de produits", "Accroches basées sur les tendances"]
    },
    sample: {
      en: "This outfit is not just a seasonal trend. It represents a complete brand identity.",
      fr: "Cette tenue n’est pas qu’une tendance saisonnière. Elle incarne toute une identité de marque."
    },
    from: "#071f51",
    to: "#c30065",
    tags: ["Fashion", "Premium", "Visual"]
  },
  {
    id: "comedy-host",
    category: "media",
    icon: "CH",
    image: "../assets/images/avatar-worlds/comedy-host.jpg",
    title: { en: "Comedy Host", fr: "Animateur Comédie" },
    line: {
      en: "For brands that want relatable Moroccan humor, fast attention, and viral potential.",
      fr: "Pour les marques qui misent sur l'humour marocain, une accroche rapide et un potentiel viral."
    },
    world: {
      en: "Moroccan interior setting, highly expressive reactions, rapid meme-style cuts, local references.",
      fr: "Salon marocain chaleureux, réactions expressives, montages rapides typés mèmes, références locales."
    },
    best: {
      en: "Local businesses, consumer brands, entertainment pages, and active TikTok accounts.",
      fr: "Marques locales, commerces grand public, pages de divertissement et comptes TikTok actifs."
    },
    formats: {
      en: ["Comedy skits", "Client scenario jokes", "Relatable daily issues", "Reaction hooks"],
      fr: ["Sketches comiques", "Situations clients humoristiques", "Problèmes du quotidien", "Accroches réactives"]
    },
    sample: {
      en: "When the client asks for a viral campaign today but has a budget of 50 dirhams.",
      fr: "Quand le client demande une campagne virale pour aujourd'hui avec un budget de 50 dirhams."
    },
    from: "#1b1b1b",
    to: "#7b2cff",
    tags: ["Funny", "Local", "Viral"]
  },
  {
    id: "product-presenter",
    category: "commerce",
    icon: "PP",
    image: "../assets/images/avatar-worlds/product-presenter.jpg",
    title: { en: "Product Presenter", fr: "Présentateur Produit" },
    line: {
      en: "For shops that need clear, commercial product explanations and conversion-focused demos.",
      fr: "Pour les boutiques qui ont besoin d'explications claires et de démos axées sur la vente."
    },
    world: {
      en: "Clean product testing table, retail displays in background, soft studio ring-light.",
      fr: "Table de présentation propre, étagères de magasin en fond, éclairage studio doux."
    },
    best: {
      en: "E-commerce brands, cosmetics, consumer gadgets, and retail accessories.",
      fr: "Marques e-commerce, cosmétiques, gadgets et accessoires de vente au détail."
    },
    formats: {
      en: ["Unboxing demos", "Weekly deal announcements", "Usage guides", "Problem solver showcases"],
      fr: ["Démonstrations de déballage", "Annonces d'offres de la semaine", "Guides d'utilisation", "Solutions produits"]
    },
    sample: {
      en: "Before you order this item online, here are 3 things customers always ask us about.",
      fr: "Avant de commander cet article en ligne, voici 3 questions que les clients nous posent toujours."
    },
    from: "#14213d",
    to: "#fca311",
    tags: ["Sales", "Demo", "Shop"]
  },
  {
    id: "tech-expert",
    category: "education",
    icon: "TE",
    image: "../assets/images/avatar-worlds/tech-expert.jpg",
    title: { en: "Tech Expert", fr: "Expert Tech" },
    line: {
      en: "For brands establishing authority in artificial intelligence, automation, and tech systems.",
      fr: "Pour les marques voulant asseoir leur autorité en intelligence artificielle, automatisation et tech."
    },
    world: {
      en: "Dimly lit tech lab, digital dashboard screen, ambient violet neon light, high-performance laptop setup.",
      fr: "Studio tech sombre, écrans de tableau de bord digitaux, néons violets, ordinateur haute performance."
    },
    best: {
      en: "SaaS platforms, AI consultancies, software houses, and automation service agencies.",
      fr: "Plateformes SaaS, cabinets conseil en IA, éditeurs de logiciels et agences d'automatisation."
    },
    formats: {
      en: ["Tool comparisons", "Workflow breakdowns", "AI news breakdowns", "Efficiency walkthroughs"],
      fr: ["Comparatifs d'outils", "Analyses de workflows", "Décryptage d'actualité IA", "Tutoriels d'efficacité"]
    },
    sample: {
      en: "Your business doesn't need to post more content. It needs an automated publishing system.",
      fr: "Votre entreprise n'a pas besoin de publier plus. Elle a besoin d'un système automatisé."
    },
    from: "#050505",
    to: "#00aaff",
    tags: ["AI", "Automation", "Expert"]
  },
  {
    id: "real-estate",
    category: "corporate",
    icon: "RE",
    image: "../assets/images/avatar-worlds/real-estate-manager.jpg",
    title: { en: "Real Estate Manager", fr: "Manager Immobilier" },
    line: {
      en: "For real estate agencies and developers requiring credibility, market authority, and property tours.",
      fr: "Pour les agences et promoteurs exigeant de la crédibilité et une autorité sur le marché."
    },
    world: {
      en: "Executive modern office, architectural blueprints, glass walls overlooking city skyline backdrop.",
      fr: "Bureau exécutif moderne, plans d'architecte, baies vitrées avec vue sur la ville en arrière-plan."
    },
    best: {
      en: "Property brokers, real estate agencies, property managers, and construction developers.",
      fr: "Courtiers immobiliers, agences immobilières, syndics et promoteurs immobiliers."
    },
    formats: {
      en: ["Investment breakdowns", "Project progress updates", "Buyer warning checklists", "Neighborhood guides"],
      fr: ["Analyses d'investissements", "Avancement des chantiers", "Listes de vigilance d'achat", "Guides de quartier"]
    },
    sample: {
      en: "Before signing for any off-plan villa project, confirm these 3 details first.",
      fr: "Avant de signer pour un projet de villa sur plan, vérifiez d'abord ces 3 détails."
    },
    from: "#0f172a",
    to: "#64748b",
    tags: ["Property", "Trust", "Projects"]
  },
  {
    id: "luxury-brand",
    category: "fashion",
    icon: "LB",
    image: "../assets/images/avatar-worlds/luxury-brand-face.jpg",
    title: { en: "Luxury Brand Face", fr: "Visage de Marque de Luxe" },
    line: {
      en: "For premium brands that need high-value aesthetics, prestige, and an exclusive feel.",
      fr: "Pour les marques premium exigeant une esthétique haut de gamme, du prestige et de l'exclusivité."
    },
    world: {
      en: "Minimalist black marble background, warm ambient accent lighting, elegant designer wardrobe.",
      fr: "Arrière-plan minimaliste en marbre noir, lumière d'ambiance raffinée, garde-robe designer chic."
    },
    best: {
      en: "Luxury retail goods, high-end watches, premium jewelry, and elite private services.",
      fr: "Produits de luxe, horlogerie haut de gamme, joaillerie et services privés d'élite."
    },
    formats: {
      en: ["Heritage storytelling", "Product craftsmanship showcases", "Private collection launches", "Brand manifesto"],
      fr: ["Storytelling d'héritage", "Focus sur le savoir-faire", "Lancements de collections privées", "Manifeste de marque"]
    },
    sample: {
      en: "True luxury is not about the price tag. It is about the level of details you cannot replicate.",
      fr: "Le vrai luxe n'est pas une question de prix. C'est le niveau de détails impossibles à copier."
    },
    from: "#111111",
    to: "#d4af37",
    tags: ["Premium", "Luxury", "Authority"]
  },
  {
    id: "local-business",
    category: "commerce",
    icon: "LB",
    image: "../assets/images/avatar-worlds/local-business-owner.jpg",
    title: { en: "Local Business Owner", fr: "Propriétaire Business Local" },
    line: {
      en: "For local businesses that need simple, human, commercial content that feels relatable and trustworthy.",
      fr: "Pour les business locaux qui veulent un contenu simple, humain, commercial et proche des clients."
    },
    world: {
      en: "Moroccan shop counter, warm city vibe, realistic service/business environment.",
      fr: "Comptoir de boutique marocaine, ambiance chaleureuse, environnement business réaliste."
    },
    best: {
      en: "Shops, cafés, salons, local services, small businesses.",
      fr: "Boutiques, cafés, salons, services locaux et petits business."
    },
    formats: {
      en: ["Daily offers", "How to order", "Customer questions", "Delivery announcements", "Local business tips"],
      fr: ["Offres du jour", "Comment commander", "Questions clients", "Annonces livraison", "Conseils business local"]
    },
    sample: {
      en: "New offer today. Here is why clients are choosing this service.",
      fr: "Nouvelle offre aujourd’hui. Voici pourquoi les clients choisissent ce service."
    },
    from: "#1b4332",
    to: "#40916c",
    tags: ["Local", "Simple", "Commercial"]
  },
  {
    id: "fitness-coach",
    category: "health",
    icon: "FC",
    image: "../assets/images/avatar-worlds/fitness-coach.jpg",
    title: { en: "Fitness & Nutrition Coach", fr: "Coach Fitness & Nutrition" },
    line: {
      en: "For gym owners, supplement brands, and health coaches who want high-energy visual demos.",
      fr: "Pour les salles de sport, les marques de compléments et les coachs de santé."
    },
    world: {
      en: "Bright gym background, modern workout equipment, athletic activewear, dynamic framing.",
      fr: "Salle de sport lumineuse, équipements de fitness modernes, tenue athlétique, cadrage dynamique."
    },
    best: {
      en: "Gyms, supplement brands, fitness programs, nutritionists.",
      fr: "Salles de sport, marques de compléments, programmes fitness, nutritionnistes."
    },
    formats: {
      en: ["Workout challenges", "Nutrition tips", "Supplement unboxings", "Client transformation stories"],
      fr: ["Défis entraînement", "Astuces nutrition", "Unboxings compléments", "Témoignages clients"]
    },
    sample: {
      en: "Stop wasting hours in the gym. Here is the exact 15-minute routine for busy professionals.",
      fr: "Arrêtez de perdre des heures à la salle. Voici la routine de 15 minutes pour les gens pressés."
    },
    from: "#2c3e50",
    to: "#e74c3c",
    tags: ["Fitness", "Health", "Energy"]
  },
  {
    id: "elearning-instructor",
    category: "education",
    icon: "EI",
    image: "../assets/images/avatar-worlds/elearning-instructor.jpg",
    title: { en: "E-Learning Instructor", fr: "Instructeur E-Learning" },
    line: {
      en: "For schools, academies, and digital course creators who need clear, pedagogical slide explainers.",
      fr: "Pour les écoles, académies et créateurs de formations en ligne."
    },
    world: {
      en: "Modern classroom or studio with interactive greenboard, clear presentation layout, academic posture.",
      fr: "Salle de classe moderne, tableau interactif, posture académique et présentation claire."
    },
    best: {
      en: "Online schools, course creators, corporate trainers, universities.",
      fr: "Écoles en ligne, créateurs de cours, formateurs d'entreprise, universités."
    },
    formats: {
      en: ["Subject breakdowns", "Step-by-step guides", "Course teasers", "Q&A explainers"],
      fr: ["Analyses de sujets", "Guides étape par étape", "Teasers de cours", "Réponses aux questions"]
    },
    sample: {
      en: "Today, we are breaking down the core principles of algorithmic complexity in under two minutes.",
      fr: "Aujourd'hui, nous décryptons les principes clés de la complexité algorithmique en moins de deux minutes."
    },
    from: "#1e3d59",
    to: "#ff6e40",
    tags: ["Education", "Guides", "Authority"]
  },
  {
    id: "medical-advisor",
    category: "health",
    icon: "MA",
    image: "../assets/images/avatar-worlds/medical-advisor.jpg",
    title: { en: "Medical & Health Advisor", fr: "Conseiller Santé & Médical" },
    line: {
      en: "For clinics, dental centers, and health tech brands requiring utmost authority and compliance focus.",
      fr: "Pour les cliniques, cabinets dentaires et marques de technologies de santé."
    },
    world: {
      en: "Clean medical office, clinical lighting, stethoscope/lab coat details, reassuring professional tone.",
      fr: "Cabinet médical propre, lumière clinique, blouse blanche, ton rassurant et professionnel."
    },
    best: {
      en: "Clinics, dental practices, health applications, wellness supplements.",
      fr: "Cliniques, cabinets dentaires, applications santé, compléments bien-être."
    },
    formats: {
      en: ["Health advice checklists", "Treatment explainers", "Common symptom guides", "Wellness routines"],
      fr: ["Fiches conseils santé", "Explications de traitements", "Guides de symptômes", "Routines bien-être"]
    },
    sample: {
      en: "Here are 3 signs you are neglecting your dental hygiene without even realizing it.",
      fr: "Voici 3 signes que vous négligez votre hygiène dentaire sans même vous en rendre compte."
    },
    from: "#0f3057",
    to: "#008891",
    tags: ["Medical", "Health", "Trust"]
  },
  {
    id: "travel-influencer",
    category: "media",
    icon: "TI",
    image: "../assets/images/avatar-worlds/travel-influencer.jpg",
    title: { en: "Travel & Food Influencer", fr: "Influenceur Voyage & Food" },
    line: {
      en: "For hotels, travel agencies, restaurants, and tourism brands needing lifestyle-focused vlogs.",
      fr: "Pour les hôtels, agences de voyages, restaurants et marques de tourisme."
    },
    world: {
      en: "Outdoor scenic overlook or vibrant restaurant terrace, warm sunshine grading, casual outfits, hand-held camera feel.",
      fr: "Point de vue extérieur ou terrasse de restaurant, étalonnage ensoleillé, caméra style vlog."
    },
    best: {
      en: "Hotels, travel agencies, local restaurants, lifestyle brands.",
      fr: "Hôtels, agences de voyage, restaurants locaux, marques de style de vie."
    },
    formats: {
      en: ["Vlog diaries", "Food reviews", "Travel itineraries", "Hidden spots guides"],
      fr: ["Vlogs de voyage", "Critiques culinaires", "Itinéraires de voyage", "Guides de lieux cachés"]
    },
    sample: {
      en: "We just discovered this hidden rooftop café in the heart of Marrakech that you must visit.",
      fr: "Nous venons de découvrir ce café en rooftop caché au cœur de Marrakech que vous devez visiter."
    },
    from: "#b5838d",
    to: "#e56b6f",
    tags: ["Travel", "Food", "Lifestyle"]
  },
  {
    id: "hr-specialist",
    category: "corporate",
    icon: "HR",
    image: "../assets/images/avatar-worlds/hr-specialist.jpg",
    title: { en: "HR & Talent Specialist", fr: "Spécialiste RH & Talents" },
    line: {
      en: "For recruiting agencies, corporate brands, and HR consultancies looking to attract top talent.",
      fr: "Pour les agences de recrutement et entreprises cherchant à attirer les meilleurs talents."
    },
    world: {
      en: "Modern corporate lounge, warm collaboration background, friendly posture, professional casual style.",
      fr: "Salon d'entreprise moderne, espace collaboratif chaleureux, posture accueillante, style professionnel décontracté."
    },
    best: {
      en: "Recruiting agencies, corporate HR departments, career coaches.",
      fr: "Cabinets de recrutement, départements RH, coachs de carrière."
    },
    formats: {
      en: ["Job offer showcases", "Interview tips", "Company culture vlogs", "Career growth advice"],
      fr: ["Présentations d'offres", "Conseils entretien", "Vlogs culture d'entreprise", "Conseils carrière"]
    },
    sample: {
      en: "We are hiring! Here are 3 key skills our recruitment team is looking for this month.",
      fr: "Nous recrutons ! Voici 3 compétences clés que notre équipe recherche ce mois-ci."
    },
    from: "#2a9d8f",
    to: "#e9c46a",
    tags: ["Careers", "Hiring", "Company"]
  },
  {
    id: "finance-analyst",
    category: "corporate",
    icon: "FA",
    image: "../assets/images/avatar-worlds/finance-analyst.jpg",
    title: { en: "Finance & Investment Analyst", fr: "Analyste Finance & Investissement" },
    line: {
      en: "For wealth managers, financial planners, and analytical market minds.",
      fr: "Pour les gestionnaires de patrimoine, planificateurs financiers et esprits d'analyse."
    },
    world: {
      en: "High-tech office, glowing screens with stock charts, dark modern clean environment.",
      fr: "Bureau haute technologie, écrans avec graphiques boursiers, environnement moderne et sombre."
    },
    best: {
      en: "Asset managers, stock brokers, crypto networks, and financial advisory agencies.",
      fr: "Gestionnaires d'actifs, courtiers, réseaux crypto et cabinets de conseil financier."
    },
    formats: {
      en: ["Market analysis updates", "Investment breakdowns", "Wealth building tips", "Daily economic briefs"],
      fr: ["Mises à jour du marché", "Analyses d'investissement", "Conseils en patrimoine", "Brèves économiques quotidiennes"]
    },
    sample: {
      en: "Here is why the latest interest rate decision will impact your investment portfolio this week.",
      fr: "Voici pourquoi la dernière décision sur les taux d'intérêt va impacter votre portefeuille d'investissement cette semaine."
    },
    from: "#1b263b",
    to: "#00b4d8",
    tags: ["Finance", "Trust", "Investment"]
  },
  {
    id: "beauty-consultant",
    category: "fashion",
    icon: "BC",
    image: "../assets/images/avatar-worlds/beauty-consultant.jpg",
    title: { en: "Beauty & Cosmetics Consultant", fr: "Conseillère Beauté & Cosmétiques" },
    line: {
      en: "For beauty brands, makeup lines, and skincare experts showing routine guides.",
      fr: "Pour les marques de beauté, maquillage et soins de la peau proposant des tutoriels."
    },
    world: {
      en: "Dressing vanity mirror with soft bulb frames, clean high-end boutique look.",
      fr: "Miroir de coiffeuse avec éclairage doux, ambiance de boutique de cosmétiques haut de gamme."
    },
    best: {
      en: "Cosmetic lines, skincare clinics, beauty creators, and retail wellness brands.",
      fr: "Marques cosmétiques, cliniques esthétiques, créatrices de beauté et enseignes de bien-être."
    },
    formats: {
      en: ["Skincare routines", "Makeup tutorials", "Product reviews", "Cosmetics ingredients breakdown"],
      fr: ["Routines de soin", "Tutoriels maquillage", "Avis produits", "Décryptage d'ingrédients cosmétiques"]
    },
    sample: {
      en: "How to correctly apply active vitamin C serum for a glowing skin effect.",
      fr: "Comment appliquer correctement un sérum actif à la vitamine C pour un teint lumineux."
    },
    from: "#3d0c11",
    to: "#e88c7d",
    tags: ["Beauty", "Cosmetics", "Aesthetics"]
  },
  {
    id: "mindfulness-coach",
    category: "health",
    icon: "MC",
    image: "../assets/images/avatar-worlds/mindfulness-coach.jpg",
    title: { en: "Mindfulness & Mental Health Coach", fr: "Coach Pleine Conscience & Santé Mentale" },
    line: {
      en: "For wellness gurus, mental health therapists, and stress relief educators.",
      fr: "Pour les spécialistes du bien-être, thérapeutes et experts en gestion du stress."
    },
    world: {
      en: "Tranquil zen garden, soft green plants, slow panning, peaceful warm lighting.",
      fr: "Jardin zen paisible, plantes vertes douces, mouvements lents, lumière relaxante."
    },
    best: {
      en: "Meditation apps, wellness centers, life coaches, therapy practices.",
      fr: "Applications de méditation, centres de bien-être, coachs de vie, cabinets de thérapie."
    },
    formats: {
      en: ["Breathing exercises", "Stress relief strategies", "Mindfulness routines", "Positive affirmations"],
      fr: ["Exercices de respiration", "Stratégies antistress", "Routines pleine conscience", "Affirmations positives"]
    },
    sample: {
      en: "Try this 1-minute breathing pattern to immediately lower your heart rate and reset your focus.",
      fr: "Essayez cette technique de respiration d'une minute pour ralentir votre rythme cardiaque et vous recentrer."
    },
    from: "#1e352f",
    to: "#52b788",
    tags: ["Zen", "Wellness", "Mindfulness"]
  },
  {
    id: "auto-expert",
    category: "education",
    icon: "AE",
    image: "../assets/images/avatar-worlds/auto-expert.jpg",
    title: { en: "Automotive & Mechanics Expert", fr: "Expert Automobile & Mécanique" },
    line: {
      en: "For car detailing shops, mechanics, auto parts dealers, and car reviewers.",
      fr: "Pour les ateliers esthétiques auto, garages, pièces détachées et revues automobiles."
    },
    world: {
      en: "Modern clean auto shop, tools, glowing digital engine screens in the background.",
      fr: "Garage automobile propre et moderne, outils, écrans de diagnostic moteur en fond."
    },
    best: {
      en: "Auto dealerships, mechanics garages, car care products, and automotive media.",
      fr: "Concessionnaires, garages mécaniques, produits d'entretien auto et médias automobiles."
    },
    formats: {
      en: ["Car repair tips", "Diagnostics guides", "Vehicle review breakdowns", "Car care hacks"],
      fr: ["Astuces de réparation", "Guides de diagnostic", "Analyses de véhicules", "Conseils d'entretien auto"]
    },
    sample: {
      en: "3 warning sounds your car engine makes that you should never ignore.",
      fr: "3 bruits d'alerte provenant de votre moteur que vous ne devriez jamais ignorer."
    },
    from: "#202020",
    to: "#ff4d00",
    tags: ["Automotive", "Engineering", "Diagnostics"]
  },
  {
    id: "gaming-reviewer",
    category: "media",
    icon: "GR",
    image: "../assets/images/avatar-worlds/gaming-reviewer.jpg",
    title: { en: "Gaming & Tech Reviewer", fr: "Testeur Gaming & Tech" },
    line: {
      en: "For tech brands, gaming equipment makers, and digital media channels.",
      fr: "Pour les marques de tech, fabricants d'accessoires gaming et médias numériques."
    },
    world: {
      en: "Vibrant gaming room, custom setup with RGB LED lights, console and PC hardware.",
      fr: "Chambre gaming vibrante, setup personnalisé avec LED RGB, consoles et matériel PC."
    },
    best: {
      en: "Tech retail, gaming accessories, YouTube/TikTok review channels, indie games.",
      fr: "Commerces tech, accessoires de jeu, chaînes de test YouTube/TikTok, jeux indépendants."
    },
    formats: {
      en: ["Hardware unboxing & reviews", "Gaming setups tips", "Game recommendation lists", "Live reaction shorts"],
      fr: ["Unboxing & tests matériel", "Conseils setup gaming", "Listes de jeux recommandés", "Réactions en direct"]
    },
    sample: {
      en: "Is this new ergonomic gaming mouse actually worth your money? Let's check it out.",
      fr: "Cette nouvelle souris gaming ergonomique vaut-elle vraiment son prix ? Voyons cela."
    },
    from: "#10002b",
    to: "#7209b7",
    tags: ["Gaming", "Hardware", "Review"]
  },
  {
    id: "moroccan-artisan",
    category: "commerce",
    icon: "MA",
    image: "../assets/images/avatar-worlds/moroccan-artisan.jpg",
    title: { en: "Moroccan Craftsman & Artisan", fr: "Artisan & Créateur Marocain" },
    line: {
      en: "For traditional Moroccan craft shops, luxury riads, and local authenticity brands.",
      fr: "Pour les boutiques d'artisanat marocain, riads de luxe et marques d'authenticité."
    },
    world: {
      en: "Traditional clay pottery workshop, carpets, zellige tiles, warm authentic lighting.",
      fr: "Atelier traditionnel de poterie en argile, tapis, zellige, lumière chaude et authentique."
    },
    best: {
      en: "Moroccan decor brands, handmade leather goods, heritage jewelry, and tourism sites.",
      fr: "Marques de déco marocaine, maroquinerie faite main, bijoux d'héritage et sites touristiques."
    },
    formats: {
      en: ["Handcrafting process walkthroughs", "Artisan storytelling", "Product heritage tours", "Behind-the-scenes craft stories"],
      fr: ["Étapes de fabrication artisanale", "Storytelling d'artisan", "Visite d'héritage produit", "Récits de savoir-faire"]
    },
    sample: {
      en: "The story of this handmade terracotta vase, sculpted by master potters of Safi.",
      fr: "L'histoire de ce vase en terre cuite fait main, sculpté par les maîtres potiers de Safi."
    },
    from: "#2b1b17",
    to: "#c97a34",
    tags: ["Morocco", "Artisan", "Handmade"]
  },
  {
    id: "legal-advisor",
    category: "corporate",
    icon: "LA",
    image: "../assets/images/avatar-worlds/legal-advisor.jpg",
    title: { en: "Corporate Legal Advisor", fr: "Conseiller Juridique d'Entreprise" },
    line: {
      en: "For business lawyers, compliance firms, and policy explainers.",
      fr: "Pour les avocats d'affaires, cabinets de conformité et spécialistes réglementaires."
    },
    world: {
      en: "Sleek law library office, leather chairs, mahogany bookshelves, warm desk lighting.",
      fr: "Bibliothèque de droit élégante, fauteuils en cuir, étagères en acajou, lumière chaude."
    },
    best: {
      en: "Law firms, corporate compliance counselors, legal tech software, regulatory consultants.",
      fr: "Cabinets d'avocats, conseils de conformité, logiciels de legal-tech, consultants réglementaires."
    },
    formats: {
      en: ["Legal compliance checklists", "Contract clause explainers", "Business law warnings", "Regulatory news briefs"],
      fr: ["Fiches de conformité juridique", "Explications de clauses", "Alertes en droit des affaires", "Brèves réglementaires"]
    },
    sample: {
      en: "The single most important contract clause startups overlook that causes massive litigation.",
      fr: "La clause contractuelle la plus négligée par les startups qui provoque de gros litiges."
    },
    from: "#1c2541",
    to: "#3a506b",
    tags: ["Law", "Compliance", "Trust"]
  },
  {
    id: "insurance-broker",
    category: "corporate",
    icon: "IB",
    image: "../assets/images/avatar-worlds/insurance-broker.jpg",
    title: { en: "Insurance & Risk Advisor", fr: "Conseiller Assurances & Risques" },
    line: {
      en: "For insurance agencies, underwriters, and wealth protection consultants.",
      fr: "Pour les courtiers en assurance, assureurs et conseillers en protection de patrimoine."
    },
    world: {
      en: "Modern corporate consultation suite, glass partition walls, clean boardroom background.",
      fr: "Bureau de consultation moderne, cloisons vitrées, salle de conseil épurée en fond."
    },
    best: {
      en: "Insurance brokers, asset protection consultants, commercial underwriting agencies.",
      fr: "Courtiers en assurances, conseillers en protection d'actifs, assureurs professionnels."
    },
    formats: {
      en: ["Risk evaluation checklists", "Policy coverage comparisons", "Claim filing walkthroughs", "Liability explainers"],
      fr: ["Fiches d'évaluation des risques", "Comparatifs de polices", "Guides de déclaration de sinistre", "Explications de responsabilité"]
    },
    sample: {
      en: "How to confirm your commercial property insurance covers water damage before it's too late.",
      fr: "Comment vérifier que votre assurance locale couvre les dégâts des eaux avant qu'il ne soit trop tard."
    },
    from: "#2d3142",
    to: "#4f5d75",
    tags: ["Security", "Insurance", "Protection"]
  },
  {
    id: "startup-pitcher",
    category: "corporate",
    icon: "SP",
    image: "../assets/images/avatar-worlds/startup-pitcher.jpg",
    title: { en: "Venture Pitch & Startup Advisor", fr: "Conseiller Pitch & Startup Venture" },
    line: {
      en: "For venture funds, incubators, startup coaches, and fundraising guides.",
      fr: "Pour les fonds d'investissement, incubateurs, coachs de startup et guides de levée de fonds."
    },
    world: {
      en: "Tech coworking hub, whiteboard with workflow diagrams, dynamic creative keylights.",
      fr: "Espace de coworking tech, tableau blanc avec diagrammes de flux, éclairage dynamique."
    },
    best: {
      en: "Angel networks, business incubators, pitch coaches, venture capital firms.",
      fr: "Réseaux de business angels, incubateurs, coachs de pitch, fonds de capital-risque."
    },
    formats: {
      en: ["Pitch deck slides teardown", "Fundraising strategies", "Investor meeting preparation tips", "Startup growth hacks"],
      fr: ["Analyses de slides de pitch", "Stratégies de levée de fonds", "Conseils de rendez-vous investisseur", "Astuces de croissance startup"]
    },
    sample: {
      en: "The 30-second hook that angel investors expect to hear in your seed-round pitch.",
      fr: "L'accroche de 30 secondes que les business angels attendent dans votre pitch de démarrage."
    },
    from: "#132a13",
    to: "#31572c",
    tags: ["Startup", "Pitch", "Funding"]
  },
  {
    id: "pr-spokesperson",
    category: "corporate",
    icon: "PR",
    image: "../assets/images/avatar-worlds/pr-spokesperson.jpg",
    title: { en: "PR & Crisis Manager", fr: "Responsable RP & Gestion de Crise" },
    line: {
      en: "For public relations agencies, press officers, and reputation managers.",
      fr: "Pour les agences de relations publiques, attachés de presse et gestionnaires de réputation."
    },
    world: {
      en: "Press briefing room, multi-microphone stand podium, navy blue backdrop, studio lighting.",
      fr: "Salle de conférence de presse, podium avec microphones, fond bleu marine, éclairage de studio."
    },
    best: {
      en: "PR agencies, brand spokespersons, public relations consultants, reputation management agencies.",
      fr: "Agences RP, porte-paroles de marque, consultants en relations publiques, agences de réputation."
    },
    formats: {
      en: ["Media training guides", "Press release drafts breakdown", "Crisis communication scripts", "Brand story reviews"],
      fr: ["Guides de média-training", "Analyses de communiqués de presse", "Scripts de gestion de crise", "Revues d'histoire de marque"]
    },
    sample: {
      en: "How to draft a public apology statement that recovers consumer trust after a service outage.",
      fr: "Comment rédiger des excuses publiques qui rétablissent la confiance après une panne de service."
    },
    from: "#22092c",
    to: "#872341",
    tags: ["PR", "Reputation", "Crisis"]
  },
  {
    id: "jewelry-designer",
    category: "fashion",
    icon: "JD",
    image: "../assets/images/avatar-worlds/jewelry-designer.jpg",
    title: { en: "High-End Jewelry Designer", fr: "Créateur de Joaillerie de Luxe" },
    line: {
      en: "For luxury jewelers, accessory designers, and gem dealers.",
      fr: "Pour les bijoutiers de luxe, designers d'accessoires et négociants en pierres précieuses."
    },
    world: {
      en: "Intimate workshop, workbench with magnifying glass, sparkling gems, soft velvet presentation tray.",
      fr: "Atelier intimiste, établi avec loupe de précision, pierres étincelantes, plateau en velours doux."
    },
    best: {
      en: "Fine jewelry boutiques, custom design services, diamond merchants.",
      fr: "Boutiques de haute joaillerie, services de création sur mesure, diamantaires."
    },
    formats: {
      en: ["Gem quality grading guides", "Jewelry sketching timelapses", "Behind-the-craft detailing", "Product styling tips"],
      fr: ["Guides de pureté des gemmes", "Tracés de croquis de bijoux", "Détails de fabrication artisanale", "Conseils de style d'accessoire"]
    },
    sample: {
      en: "How to distinguish a natural diamond from a lab-grown alternative in 3 simple steps.",
      fr: "Comment distinguer un diamant naturel d'une alternative synthétique en 3 étapes simples."
    },
    from: "#4a3c31",
    to: "#d4af37",
    tags: ["Jewelry", "Luxe", "Craft"]
  },
  {
    id: "fashion-stylist",
    category: "fashion",
    icon: "FS",
    image: "../assets/images/avatar-worlds/fashion-stylist.jpg",
    title: { en: "Personal Fashion Stylist", fr: "Styliste & Conseiller en Image" },
    line: {
      en: "For personal shoppers, wardrobe consultants, and style advisors.",
      fr: "Pour les personal shoppers, consultants en garde-robe et conseillers en style."
    },
    world: {
      en: "Chic wardrobe lounge, racks of designer clothing, mirrors, warm natural lighting.",
      fr: "Salon-penderie chic, portants de vêtements de créateurs, miroirs, lumière naturelle douce."
    },
    best: {
      en: "Styling consultancies, personal shopping agencies, fashion publications.",
      fr: "Cabinets de conseil en image, agences de personal shopping, magazines de mode."
    },
    formats: {
      en: ["Body type outfit guides", "Color matching palettes", "Seasonal wardrobe resets", "Trend transformation lookbooks"],
      fr: ["Guides de silhouettes", "Palettes d'harmonie des couleurs", "Garde-robes de saison", "Lookbooks de tendances"]
    },
    sample: {
      en: "3 wardrobe essentials every professional needs to build an effortless capsule collection.",
      fr: "3 essentiels de garde-robe indispensables pour composer une collection capsule élégante."
    },
    from: "#5e503f",
    to: "#a98467",
    tags: ["Styling", "Fashion", "Capsule"]
  },
  {
    id: "perfumer-expert",
    category: "fashion",
    icon: "PE",
    image: "../assets/images/avatar-worlds/perfumer-expert.jpg",
    title: { en: "Luxury Perfume Curator", fr: "Créateur & Nez Parfumeur" },
    line: {
      en: "For fragrance boutiques, perfume reviewers, and luxury scent designers.",
      fr: "Pour les parfumeries fines, critiques de fragrances et créateurs d'effluves de luxe."
    },
    world: {
      en: "Aesthetic perfume organ, crystal ingredient bottles, botanical specimens, soft golden grading.",
      fr: "Orgue à parfums esthétique, flacons en cristal, plantes aromatiques, étalonnage doré doux."
    },
    best: {
      en: "Fragrance houses, niche perfume brands, luxury cosmetic labels.",
      fr: "Maisons de parfum, marques de senteurs de niche, cosmétiques haut de gamme."
    },
    formats: {
      en: ["Scent profile breakdowns", "Seasonal fragrance recommendations", "Perfume application techniques", "Behind-the-scent raw ingredients"],
      fr: ["Analyses de profils olfactifs", "Recommandations de parfums par saison", "Techniques de vaporisation", "Secrets de matières premières"]
    },
    sample: {
      en: "Why sandalwood lasts twice as long on your skin compared to citrus notes.",
      fr: "Pourquoi le bois de santal dure deux fois plus longtemps sur la peau que les notes d'agrumes."
    },
    from: "#4c1a57",
    to: "#ff9e00",
    tags: ["Perfume", "Luxury", "Scent"]
  },
  {
    id: "model-runway",
    category: "fashion",
    icon: "MR",
    image: "../assets/images/avatar-worlds/model-runway.jpg",
    title: { en: "Runway Model Face", fr: "Modèle & Ambassadrice Défilé" },
    line: {
      en: "For editorial campaigns, modeling agencies, and premium catwalk collections.",
      fr: "Pour les campagnes éditoriales, agences de mannequins et collections de haute couture."
    },
    world: {
      en: "Futuristic catwalk backstage, spotlight accents, dynamic dark industrial styling.",
      fr: "Coulisses de défilé futuriste, spots de lumière intenses, style industriel sombre et dynamique."
    },
    best: {
      en: "Catwalk collections, fashion design houses, modeling academies.",
      fr: "Défilés de mode, maisons de couture, académies de mannequins."
    },
    formats: {
      en: ["Editorial modeling poses", "Catwalk walk tutorials", "Fashion week prep diaries", "Outfit movement showcases"],
      fr: ["Poses de mannequinat éditorial", "Tutoriels de démarche de défilé", "Préparations de Fashion Week", "Mise en valeur du drapé"]
    },
    sample: {
      en: "The secret to holding posture and projecting confidence during a high-intensity catwalk show.",
      fr: "Le secret pour maintenir sa posture et projeter la confiance lors d'un défilé intense."
    },
    from: "#1d1a39",
    to: "#db7093",
    tags: ["Runway", "Model", "Editorial"]
  },
  {
    id: "streetwear-influencer",
    category: "fashion",
    icon: "SI",
    image: "../assets/images/avatar-worlds/streetwear-influencer.jpg",
    title: { en: "Urban Streetwear Influencer", fr: "Influenceur Mode Streetwear" },
    line: {
      en: "For sneaker shops, youth streetwear brands, and casual urban apparel.",
      fr: "Pour les boutiques de sneakers, marques streetwear et vêtements urbains décontractés."
    },
    world: {
      en: "Industrial brick alleyways, graffiti backdrop, urban neon lighting, wide angles.",
      fr: "Ruelle industrielle en briques, fond de graffitis, néons urbains, angles de caméra larges."
    },
    best: {
      en: "Sneaker boutiques, urban clothing brands, skate culture products.",
      fr: "Boutiques de baskets, marques de prêt-à-porter urbain, culture skate."
    },
    formats: {
      en: ["Sneaker drops unboxings", "OOTD streetwear stylings", "Urban fit challenges", "Street culture trends"],
      fr: ["Unboxings de sorties sneakers", "Tenues du jour streetwear", "Défis de style urbain", "Tendances street culture"]
    },
    sample: {
      en: "Unboxing the most anticipated sneaker collab of this quarter. Are they worth the hype?",
      fr: "Unboxing de la collab sneakers la plus attendue ce trimestre. Vaut-elle vraiment le coup ?"
    },
    from: "#1e1e24",
    to: "#fb5607",
    tags: ["Streetwear", "Sneakers", "Urban"]
  },
  {
    id: "yoga-instructor",
    category: "health",
    icon: "YI",
    image: "../assets/images/avatar-worlds/yoga-instructor.jpg",
    title: { en: "Yoga & Pilates Instructor", fr: "Professeur de Yoga & Pilates" },
    line: {
      en: "For yoga studios, wellness content platforms, and activewear collections.",
      fr: "Pour les studios de yoga, plateformes de bien-être et marques d'activewear."
    },
    world: {
      en: "Sunlit minimalist loft, wooden flooring, green monstera plants, soft ambient soundtrack vibe.",
      fr: "Loft minimaliste baigné de soleil, parquet en bois, monstera, ambiance sonore douce."
    },
    best: {
      en: "Yoga teachers, pilates studios, stretch instructors, online holistic programs.",
      fr: "Profs de yoga, studios de pilates, coachs de souplesse, programmes holistiques en ligne."
    },
    formats: {
      en: ["Asana posture tutorials", "Flow sequences for beginners", "Flexibility checklists", "Mindful stretching walkthroughs"],
      fr: ["Tutoriels de postures asana", "Enchaînements pour débutants", "Exercices de souplesse", "Routines d'étirement conscient"]
    },
    sample: {
      en: "Try these 3 morning stretching flows to unlock lower back tightness in 5 minutes.",
      fr: "Essayez ces 3 mouvements d'étirement matinal pour soulager le bas du dos en 5 minutes."
    },
    from: "#6b705c",
    to: "#a5a58d",
    tags: ["Yoga", "Pilates", "Flexibility"]
  },
  {
    id: "dental-surgeon",
    category: "health",
    icon: "DS",
    image: "../assets/images/avatar-worlds/dental-surgeon.jpg",
    title: { en: "Dental & Smile Specialist", fr: "Spécialiste en Esthétique Dentaire" },
    line: {
      en: "For dental clinics, orthodontists, and oral hygiene brands.",
      fr: "Pour les cliniques dentaires, orthodontistes et marques d'hygiène buccale."
    },
    world: {
      en: "State-of-the-art dental suite, sterile blue lighting details, ultra-clean professional backdrop.",
      fr: "Cabinet dentaire ultramoderne, éclairage stérile bleu, arrière-plan professionnel impeccable."
    },
    best: {
      en: "Dental clinics, cosmetic dentistry specialists, oral health products.",
      fr: "Cliniques dentaires, spécialistes du sourire, produits d'hygiène bucco-dentaire."
    },
    formats: {
      en: ["Smile transformation reviews", "Teeth whitening truth reveal", "Braces care walkthroughs", "Dental health habits"],
      fr: ["Analyses de sourires", "La vérité sur le blanchiment dentaire", "Conseils d'appareils dentaires", "Habitudes buccales"]
    },
    sample: {
      en: "What charcoal toothpaste actually does to your tooth enamel over 6 months of use.",
      fr: "Ce que le dentifrice au charbon fait réellement à l'émail de vos dents après 6 mois d'utilisation."
    },
    from: "#e0f2f1",
    to: "#00b0ff",
    tags: ["Dental", "Smile", "Aesthetics"]
  },
  {
    id: "pediatrician",
    category: "health",
    icon: "PD",
    image: "../assets/images/avatar-worlds/pediatrician.jpg",
    title: { en: "Child Care & Pediatric Advisor", fr: "Conseiller Pédiatrie & Petite Enfance" },
    line: {
      en: "For family health apps, pediatric clinics, and child nutrition advisors.",
      fr: "Pour les applis de santé familiale, cabinets de pédiatrie et nutritionnistes pour enfants."
    },
    world: {
      en: "Friendly clinical office, colorful wall murals, warm comforting lighting.",
      fr: "Cabinet médical accueillant, fresques murales colorées, éclairage chaleureux et rassurant."
    },
    best: {
      en: "Pediatricians, parenting blogs, toddler care services, family clinics.",
      fr: "Pédiatres, blogs de parentalité, services de petite enfance, cliniques familiales."
    },
    formats: {
      en: ["Toddler nutrition checklists", "Common child health FAQs", "Sleep schedule routines", "Infant safety tips"],
      fr: ["Conseils nutrition enfant", "FAQ sur la santé infantile", "Routines d'heures de sommeil", "Sécurité des nourrissons"]
    },
    sample: {
      en: "The recommended daily sugar limit for toddlers and 3 easy swaps for sweet snacks.",
      fr: "La limite de sucre recommandée pour les enfants et 3 alternatives simples pour le goûter."
    },
    from: "#ffb703",
    to: "#fb8500",
    tags: ["Pediatric", "Family", "Kids"]
  },
  {
    id: "physiotherapist",
    category: "health",
    icon: "PT",
    image: "../assets/images/avatar-worlds/physiotherapist.jpg",
    title: { en: "Sports Physiotherapist", fr: "Kinésithérapeute du Sport" },
    line: {
      en: "For rehabilitation clinics, recovery coaches, and sports training guides.",
      fr: "Pour les cabinets de kinésithérapie, coachs de récupération et guides d'entraînement."
    },
    world: {
      en: "Recovery studio, stretching table, anatomical chart background, clean professional studio setting.",
      fr: "Studio de rééducation, table de massage, planches anatomiques en fond, cadre professionnel."
    },
    best: {
      en: "Physiotherapists, sports injury clinics, mobility trainers, massage therapists.",
      fr: "Kinésithérapeutes, cliniques du sport, coachs de mobilité, massothérapeutes."
    },
    formats: {
      en: ["Injury prevention guides", "Mobility drills tutorials", "Posture correction checks", "Muscle recovery exercises"],
      fr: ["Prévention des blessures", "Tutoriels de mobilité", "Exercices de correction de posture", "Exercices de récupération musculaire"]
    },
    sample: {
      en: "Correct your posture at your desk with these 3 simple mobility movements.",
      fr: "Corrigez votre posture de bureau avec ces 3 mouvements de mobilité simples."
    },
    from: "#1a5276",
    to: "#5499c7",
    tags: ["Rehab", "Mobility", "Sports"]
  },
  {
    id: "nutritionist-dietitian",
    category: "health",
    icon: "ND",
    image: "../assets/images/avatar-worlds/nutritionist-dietitian.jpg",
    title: { en: "Clinical Nutritionist", fr: "Nutritionniste & Diététicien" },
    line: {
      en: "For health coaches, gut health programs, and organic meal prep brands.",
      fr: "Pour les coachs de nutrition, programmes de santé intestinale et repas biologiques."
    },
    world: {
      en: "Bright modern kitchen background, fresh organic ingredients, neat kitchen counter setup.",
      fr: "Cuisine moderne et lumineuse en fond, ingrédients frais et biologiques, plan de travail impeccable."
    },
    best: {
      en: "Dietitians, organic food brands, gut health practitioners, meal planners.",
      fr: "Diététiciens, marques alimentaires bio, experts de la santé digestive, créateurs de menus."
    },
    formats: {
      en: ["Gut health essentials list", "Calorie swap alternatives", "Meal prep breakdowns", "Diet myth busters"],
      fr: ["Essentiels de la digestion", "Alternatives faibles en calories", "Analyses de meal-prep", "Mythes sur les régimes"]
    },
    sample: {
      en: "Why eating fermented foods with your lunch can double your daily nutrient absorption.",
      fr: "Pourquoi consommer des aliments fermentés le midi peut doubler votre absorption de nutriments."
    },
    from: "#38b000",
    to: "#70e000",
    tags: ["Diet", "GutHealth", "Organic"]
  },
  {
    id: "science-communicator",
    category: "education",
    icon: "SC",
    image: "../assets/images/avatar-worlds/science-communicator.jpg",
    title: { en: "Science Explainer & STEM Educator", fr: "Vulgarisateur Scientifique & STEM" },
    line: {
      en: "For educational media, science museums, and research centers looking to explain complex topics.",
      fr: "Pour les chaînes éducatives, musées de sciences et centres de recherche."
    },
    world: {
      en: "Futuristic whiteboard background, glowing atomic models, physics equations overlays.",
      fr: "Tableau moderne, modèles atomiques lumineux, incrustations d'équations physiques."
    },
    best: {
      en: "Educational portals, science channels, university public outreach, STEM schools.",
      fr: "Portails d'apprentissage, chaînes scientifiques, vulgarisation universitaire, écoles STEM."
    },
    formats: {
      en: ["Quantum physics basics", "Astronomy discovery updates", "Chemistry reaction breakdowns", "Nature facts explainers"],
      fr: ["Bases de physique quantique", "Découvertes en astronomie", "Réactions chimiques expliquées", "Faits insolites sur la nature"]
    },
    sample: {
      en: "What happens inside a black hole when matter crosses the event horizon.",
      fr: "Ce qu'il se passe dans un trou noir lorsque la matière franchit l'horizon des événements."
    },
    from: "#03001e",
    to: "#ec38bc",
    tags: ["Science", "STEM", "Explainers"]
  },
  {
    id: "history-storyteller",
    category: "education",
    icon: "HS",
    image: "../assets/images/avatar-worlds/history-storyteller.jpg",
    title: { en: "History & Culture Storyteller", fr: "Conteur d'Histoire & Culture" },
    line: {
      en: "For heritage sites, museum programs, historical publications, and audiobooks.",
      fr: "Pour les musées, sites historiques, revues culturelles et livres audio."
    },
    world: {
      en: "Vintage library workspace, historic maps, old globes, warm candlelight styling.",
      fr: "Cabinet d'étude vintage, cartes géographiques anciennes, globes, bougie chaleureuse."
    },
    best: {
      en: "Historical documentaries, museum guides, heritage travel publications, literature clubs.",
      fr: "Documentaires historiques, audioguides de musée, guides de voyage d'époque."
    },
    formats: {
      en: ["Historical mystery stories", "Ancient civilization facts", "Biographies of leaders", "Artifact analysis"],
      fr: ["Mystères de l'Histoire", "Secrets de civilisations anciennes", "Biographies de grands leaders", "Analyses d'objets historiques"]
    },
    sample: {
      en: "The engineering secrets behind the construction of the Roman aqueducts that still stand today.",
      fr: "Les secrets d'ingénierie de la construction des aqueducs romains toujours debout."
    },
    from: "#2c1a11",
    to: "#a0522d",
    tags: ["History", "Culture", "Stories"]
  },
  {
    id: "lang-teacher",
    category: "education",
    icon: "LT",
    image: "../assets/images/avatar-worlds/lang-teacher.jpg",
    title: { en: "Polyglot Language Teacher", fr: "Enseignant & Coach de Langues" },
    line: {
      en: "For language schools, translation apps, and corporate language trainers.",
      fr: "Pour les écoles de langues, applis de traduction et formateurs d'anglais professionnel."
    },
    world: {
      en: "Bright language lab, blackboard with vocabulary charts, flags of different nations.",
      fr: "Salle de langues lumineuse, tableau avec vocabulaire, drapeaux de plusieurs pays."
    },
    best: {
      en: "Language schools, translation software, business English training, polyglot coaching.",
      fr: "Écoles de langues, logiciels linguistiques, formation en anglais des affaires."
    },
    formats: {
      en: ["Vocabulary quizzes", "Pronunciation fixes", "Idiom expressions breakdowns", "Conversation simulations"],
      fr: ["Quizz de vocabulaire", "Corrections de prononciation", "Expressions idiomatiques", "Simulations de dialogue"]
    },
    sample: {
      en: "Avoid these 3 common grammar mistakes that immediately give away your non-native accent.",
      fr: "Évitez ces 3 erreurs de grammaire courantes qui trahissent votre accent."
    },
    from: "#0077b6",
    to: "#90e0ef",
    tags: ["Language", "Vocab", "Tutor"]
  },
  {
    id: "diy-crafts",
    category: "education",
    icon: "DY",
    image: "../assets/images/avatar-worlds/diy-crafts.jpg",
    title: { en: "DIY & Life Hacks Instructor", fr: "Créateur DIY & Astuces Pratiques" },
    line: {
      en: "For craft supply retailers, home upgrade channels, and life-hack creators.",
      fr: "Pour les magasins de loisirs créatifs, chaînes de bricolage et astuces maison."
    },
    world: {
      en: "Creative workshop table, pegboard with crafting tools, vibrant creative layout.",
      fr: "Table d'atelier créatif, panneau perforé avec outils de bricolage, disposition vive."
    },
    best: {
      en: "Craft stores, home renovation networks, lifehack channels, handmade products shops.",
      fr: "Bricolage, magasins d'art, chaînes d'astuces quotidiennes, boutiques de fait-maison."
    },
    formats: {
      en: ["Step-by-step DIY projects", "Quick lifehack walkthroughs", "Materials testing reviews", "Budget home updates"],
      fr: ["Projets DIY étape par étape", "Astuces maison rapides", "Tests de matériaux", "Rénovations déco économiques"]
    },
    sample: {
      en: "How to restore scratched wooden furniture in under 10 minutes using household items.",
      fr: "Comment restaurer un meuble en bois rayé en moins de 10 minutes avec des produits du quotidien."
    },
    from: "#3a86c8",
    to: "#833ab4",
    tags: ["DIY", "Hacks", "Crafting"]
  },
  {
    id: "parenting-coach",
    category: "education",
    icon: "PC",
    image: "../assets/images/avatar-worlds/parenting-coach.jpg",
    title: { en: "Parenting & Child Development Coach", fr: "Coach Parental & Éducation" },
    line: {
      en: "For parenting networks, family consultants, and childhood education platforms.",
      fr: "Pour les réseaux parentaux, conseillers familiaux et plateformes d'éducation des enfants."
    },
    world: {
      en: "Warm family room setting, bookshelves, cozy pastel colored setup.",
      fr: "Salon familial chaleureux, étagères de livres, couleurs pastel douces."
    },
    best: {
      en: "Parenting consultants, child psychologists, family education networks.",
      fr: "Conseillers parentaux, psychologues pour enfants, réseaux d'éducation familiale."
    },
    formats: {
      en: ["Positive discipline tips", "Behavior management charts", "Parent-child communication rules", "Emotional safety guides"],
      fr: ["Conseils d'éducation positive", "Fiches de gestion du comportement", "Règles de dialogue parent-enfant", "Gestion des émotions"]
    },
    sample: {
      en: "The single most effective word to use to stop a toddler's temper tantrum instantly.",
      fr: "Le mot le plus efficace à utiliser pour calmer instantanément un caprice d'enfant."
    },
    from: "#e85d04",
    to: "#ffb703",
    tags: ["Parenting", "Family", "Behavior"]
  },
  {
    id: "cinema-critic",
    category: "media",
    icon: "CC",
    image: "../assets/images/avatar-worlds/cinema-critic.jpg",
    title: { en: "Movie & Series Critic", fr: "Critique Cinéma & Séries" },
    line: {
      en: "For cinema magazines, streaming blogs, and review channels.",
      fr: "Pour les magazines de cinéma, blogs de streaming et chaînes de critiques."
    },
    world: {
      en: "Home theater lounge, projector glow, movie posters in backdrop, moody cinema lighting.",
      fr: "Salon cinéma privé, lueur du projecteur, affiches de films en fond, lumière d'ambiance obscure."
    },
    best: {
      en: "Streaming platforms promotions, film review channels, cinema news websites.",
      fr: "Promotion de plateformes streaming, chaînes de critiques, sites d'actu cinéma."
    },
    formats: {
      en: ["Weekly movie reviews", "Hidden streaming gems list", "Easter egg breakdown videos", "Plot ending explainers"],
      fr: ["Critiques ciné de la semaine", "Pépites cachées du streaming", "Décryptage d'easter eggs", "Explications de fins de films"]
    },
    sample: {
      en: "3 hidden details in the final scene of this movie that completely change the plot ending.",
      fr: "3 détails cachés dans la scène finale de ce film qui changent complètement la fin."
    },
    from: "#600000",
    to: "#d00000",
    tags: ["Cinema", "Movies", "Reviews"]
  },
  {
    id: "music-producer",
    category: "media",
    icon: "MP",
    image: "../assets/images/avatar-worlds/music-producer.jpg",
    title: { en: "Music Producer & DJ Reviewer", fr: "Producteur de Musique & Critique DJ" },
    line: {
      en: "For audio hardware, music schools, production tutorials, and beatmaker reviews.",
      fr: "Pour le matériel audio, écoles de musique, tutoriels de MAO et chaînes de beatmaking."
    },
    world: {
      en: "Professional recording studio, mixing console, studio monitors, soundproofing foam background.",
      fr: "Studio d'enregistrement pro, console de mixage, moniteurs de studio, mousse acoustique en fond."
    },
    best: {
      en: "Music software, audio hardware, production schools, beatmakers, synthesizer brands.",
      fr: "Logiciels de musique, matériel audio, écoles de MAO, beatmakers, synthétiseurs."
    },
    formats: {
      en: ["Song deconstructions", "Mix techniques tutorials", "Audio gear comparisons", "Sound design walkthroughs"],
      fr: ["Déconstructions de morceaux", "Tutoriels de mixage", "Comparatifs de micros/casques", "Création de synthés"]
    },
    sample: {
      en: "How to give your vocal track a massive warm radio sound using 3 basic EQ tricks.",
      fr: "Comment donner à une piste voix un son radio pro et chaud avec 3 réglages d'égaliseur simples."
    },
    from: "#240046",
    to: "#9d4edd",
    tags: ["Music", "Studio", "Production"]
  },
  {
    id: "book-reviewer",
    category: "media",
    icon: "BR",
    image: "../assets/images/avatar-worlds/book-reviewer.jpg",
    title: { en: "Booktuber & Literature Critic", fr: "Chroniqueur Littéraire & Livres" },
    line: {
      en: "For book publishers, reading apps, literature clubs, and audiobook summaries.",
      fr: "Pour les éditeurs de livres, applis de lecture, clubs littéraires et résumés d'ouvrages."
    },
    world: {
      en: "Cozy library nook, floor-to-ceiling bookshelves, comfortable armchair, steaming tea mug.",
      fr: "Coin bibliothèque douillet, étagères de livres du sol au plafond, fauteuil confortable, tasse de thé."
    },
    best: {
      en: "Publishing houses, reading applications, online book clubs, self-help platforms.",
      fr: "Maisons d'édition, applis de lecture, clubs de lecture, plateformes de développement personnel."
    },
    formats: {
      en: ["Monthly reading lists", "Book summaries", "Writing style analyses", "Self-help book reviews"],
      fr: ["Recommandations du mois", "Résumés de livres", "Analyses de style d'écriture", "Chroniques développement personnel"]
    },
    sample: {
      en: "The single best productivity book of the decade that completely altered my work routine.",
      fr: "Le meilleur livre de productivité de la décennie qui a transformé ma routine de travail."
    },
    from: "#3e2723",
    to: "#8d6e63",
    tags: ["Books", "Literature", "Summaries"]
  },
  {
    id: "vlogger-daily",
    category: "media",
    icon: "DV",
    image: "../assets/images/avatar-worlds/vlogger-daily.jpg",
    title: { en: "Daily Lifestyle Vlogger", fr: "Vlogueur Style de Vie Quotidien" },
    line: {
      en: "For personal brands, lifestyle retail, and consumer products showing daily logs.",
      fr: "Pour les marques personnelles, produits grand public et vlogs de style de vie."
    },
    world: {
      en: "Modern city apartment lounge, sunny window angles, natural lifestyle setting.",
      fr: "Salon d'appartement urbain moderne, angles de fenêtre ensoleillés, cadre naturel de vie."
    },
    best: {
      en: "Consumer retail goods, lifestyle vlog channels, personal branding.",
      fr: "Produits de consommation courante, chaînes de vlog quotidien, personal branding."
    },
    formats: {
      en: ["Morning routines vlogs", "Product usage diaries", "Daily habit challenges", "Weekly vlogs digests"],
      fr: ["Vlogs de routine matinale", "Utilisation de produits au quotidien", "Défis d'habitudes", "Compilations de la semaine"]
    },
    sample: {
      en: "Spend a highly productive morning with me: 5 habits that set up my entire day.",
      fr: "Passez une matinée productive avec moi : 5 habitudes qui lancent ma journée."
    },
    from: "#ff85a1",
    to: "#fbb13c",
    tags: ["Vlog", "Daily", "Lifestyle"]
  },
  {
    id: "podcaster-host",
    category: "media",
    icon: "PH",
    image: "../assets/images/avatar-worlds/podcaster-host.jpg",
    title: { en: "Talk Show & Podcast Host", fr: "Animateur Talk Show & Podcast" },
    line: {
      en: "For interview channels, corporate podcasts, and talk-show productions.",
      fr: "Pour les chaînes d'interviews, podcasts d'entreprise et émissions de débats."
    },
    world: {
      en: "Professional podcast studio, neon signage background, dual condenser mic setup.",
      fr: "Studio de podcast professionnel, enseignes au néon en fond, micros à condensateur professionnels."
    },
    best: {
      en: "Corporate podcasts, interview programs, talk channels, debate networks.",
      fr: "Podcasts d'entreprise, chaînes d'interviews, talk-shows, débats."
    },
    formats: {
      en: ["Guest interview highlights", "Deep debate segments", "Listener question responses", "Co-host banter shorts"],
      fr: ["Moments forts d'interviews", "Extraits de débats", "Réponses aux questions d'auditeurs", "Dialogues drôles d'animateurs"]
    },
    sample: {
      en: "What a top tech executive told me about the future of automation in this exclusive segment.",
      fr: "Ce qu'un dirigeant tech m'a confié sur le futur de l'automatisation dans cet extrait exclusif."
    },
    from: "#000814",
    to: "#003566",
    tags: ["Podcast", "TalkShow", "Interviews"]
  },
  {
    id: "dropshipper-pro",
    category: "commerce",
    icon: "DP",
    image: "../assets/images/avatar-worlds/dropshipper-pro.jpg",
    title: { en: "E-commerce Dropshipping Expert", fr: "Expert E-commerce & Dropshipping" },
    line: {
      en: "For e-commerce educators, shipping software, and product sourcing guides.",
      fr: "Pour les formateurs e-commerce, applications de livraison et guides d'approvisionnement."
    },
    world: {
      en: "Home office dashboard, package mockups, white boards, neon highlights.",
      fr: "Bureau avec tableau de bord de boutique, colis fictifs, tableaux blancs, néons."
    },
    best: {
      en: "E-commerce courses, dropshipping agencies, shipping tools, retail platforms.",
      fr: "Formations e-commerce, agences dropshipping, outils logistiques, plateformes de vente."
    },
    formats: {
      en: ["Winning product research", "Ad campaign strategies", "Store conversion updates", "Sourcing walkthroughs"],
      fr: ["Recherche de produits gagnants", "Stratégies publicitaires", "Optimisations de boutiques", "Conseils d'approvisionnement"]
    },
    sample: {
      en: "The step-by-step process we used to find a winning product that generated $10k in a week.",
      fr: "Le processus étape par étape utilisé pour dénicher un produit gagnant à 10 000 $ en une semaine."
    },
    from: "#212529",
    to: "#343a40",
    tags: ["Ecom", "Dropshipping", "Sales"]
  },
  {
    id: "bakery-chef",
    category: "commerce",
    icon: "BC",
    image: "../assets/images/avatar-worlds/bakery-chef.jpg",
    title: { en: "Artisanal Pastry & Bakery Chef", fr: "Chef Pâtissier & Boulanger Artisanal" },
    line: {
      en: "For local bakeries, baking schools, artisanal flour, and pastry tools.",
      fr: "Pour les boulangeries locales, cours de pâtisserie, farines artisanales et outils de cuisine."
    },
    world: {
      en: "Warm artisanal bakery kitchen, ovens, flour dusted table, golden fresh croissants layout.",
      fr: "Cuisine de boulangerie chaleureuse, fours, table saupoudrée de farine, croissants dorés frais."
    },
    best: {
      en: "Artisanal bakeries, pastry schools, premium baking ingredients, kitchen retailers.",
      fr: "Boulangeries artisanales, écoles de pâtisserie, ingrédients de cuisine premium, ustensiles."
    },
    formats: {
      en: ["Sourdough starter feeding guides", "Croissant folding timelapses", "Bakery prep behind-the-scenes", "Baking troubleshooting guides"],
      fr: ["Nourrir son levain de boulange", "Pliage de pâte à croissants", "Coulisses de préparation en cuisine", "Foires aux questions cuisson"]
    },
    sample: {
      en: "Why your sourdough loaf did not rise in the oven: 3 fermentation mistakes to avoid.",
      fr: "Pourquoi votre pain au levain n'a pas levé au four : 3 erreurs de fermentation à éviter."
    },
    from: "#78350f",
    to: "#f59e0b",
    tags: ["Bakery", "Pastry", "Local"]
  },
  {
    id: "realestate-agent",
    category: "commerce",
    icon: "RA",
    image: "../assets/images/avatar-worlds/realestate-agent.jpg",
    title: { en: "Local Property Rental Host", fr: "Hôte de Location & Immobilier Local" },
    line: {
      en: "For vacation rentals, property hosts, guest guides, and local tourism stays.",
      fr: "Pour les locations saisonnières, hôtes Airbnb, guides touristiques et gîtes locaux."
    },
    world: {
      en: "Sunlit rental villa lounge, stylish decor, private pool background view.",
      fr: "Salon de villa de vacances ensoleillé, décoration soignée, vue sur la piscine privée en fond."
    },
    best: {
      en: "Vacation rentals, property management services, boutique hotels, local hosts.",
      fr: "Locations saisonnières, conciergeries, hôtels-boutiques, hôtes locaux."
    },
    formats: {
      en: ["Property walkthrough tours", "Host secrets & welcome tips", "Local area recommendations", "Guest check-in walkthroughs"],
      fr: ["Visites guidées de propriétés", "Secrets d'hôtes & bienvenue", "Recommandations touristiques locales", "Déroulement du check-in"]
    },
    sample: {
      en: "How we set up our rental property guest check-in to be completely automated.",
      fr: "Comment automatiser entièrement le check-in des voyageurs dans votre location."
    },
    from: "#1e3d59",
    to: "#17b890",
    tags: ["Rental", "Hosting", "Property"]
  },
  {
    id: "coffee-roaster",
    category: "commerce",
    icon: "CR",
    image: "../assets/images/avatar-worlds/coffee-roaster.jpg",
    title: { en: "Specialty Coffee Roaster", fr: "Artisan Torréfacteur & Barista" },
    line: {
      en: "For specialty cafes, coffee bean suppliers, and barista training academies.",
      fr: "Pour les cafés de spécialité, fournisseurs de café en grains et écoles de barista."
    },
    world: {
      en: "Modern espresso bar setting, roasting machine, coffee bags, coffee pour-over setup.",
      fr: "Bar à espresso moderne, torréfacteur en fond, sachets de café, matériel d'extraction douce."
    },
    best: {
      en: "Specialty coffee shops, bean subscription services, barista schools, espresso machine retailers.",
      fr: "Cafés de spécialité, abonnements de café en grains, écoles de barista, machines à espresso."
    },
    formats: {
      en: ["Pour-over brewing tutorials", "Latte art steps", "Coffee bean origin guides", "Espresso dialing walkthroughs"],
      fr: ["Tutoriels d'extraction douce V60", "Techniques d'art latte", "Guides des origines du grain", "Réglages de la mouture espresso"]
    },
    sample: {
      en: "The single most important brewing variable that controls the bitterness of your morning pour-over.",
      fr: "Le paramètre d'infusion le plus important qui contrôle l'amertume de votre café du matin."
    },
    from: "#3e2723",
    to: "#d7ccc8",
    tags: ["Coffee", "Barista", "Local"]
  },
  {
    id: "beauty-salon",
    category: "commerce",
    icon: "BS",
    image: "../assets/images/avatar-worlds/beauty-salon.jpg",
    title: { en: "Nail Salon & Spa Owner", fr: "Gérante de Salon d'Esthétique & Spa" },
    line: {
      en: "For local nail salons, spas, aesthetic clinics, and massage services.",
      fr: "Pour les salons de manucure locaux, spas, instituts d'esthétique et salons de massage."
    },
    world: {
      en: "Chic luxury salon lounge, pastel velvet chairs, nail polish display, soft relaxation lighting.",
      fr: "Salon d'esthétique chic, fauteuils en velours pastel, présentoirs de vernis, éclairage relaxant."
    },
    best: {
      en: "Nail salons, beauty spas, cosmetic treatment clinics, wellness lounges.",
      fr: "Salons de manucure, spas de beauté, cliniques de soins esthétiques, espaces bien-être."
    },
    formats: {
      en: ["Nail care protection guides", "Salon treatment comparisons", "Before/after aesthetic reveals", "Customer beauty FAQs"],
      fr: ["Guides de soin des ongles", "Comparatifs de soins cabine", "Avant/après de pose de vernis", "FAQ beauté client"]
    },
    sample: {
      en: "How to maintain your gel manicure looking fresh and avoid peeling for up to 4 weeks.",
      fr: "Comment garder sa manucure en gel impeccable et éviter qu'elle s'écaille pendant 4 semaines."
    },
    from: "#fae1df",
    to: "#e88c7d",
    tags: ["Salon", "Beauty", "Nails"]
  }
];

function renderWorlds(filter = "all") {
  const grid = document.getElementById("worldsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  worlds
    .filter(world => filter === "all" || world.category === filter)
    .forEach(world => {
      const card = document.createElement("div");
      card.className = "world-card";
      card.onclick = () => openWorld(world.id);
      card.style.setProperty("--from", world.from);
      card.style.setProperty("--to", world.to);

      card.innerHTML = `
        <div>
          <div class="world-image" style="--from: ${world.from}; --to: ${world.to};">
            <img src="${world.image}" alt="${world.title[currentLang]}" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
            <div style="display:none; width:100%; height:100%; place-items:center;">${world.icon}</div>
          </div>
          <h3>${world.title[currentLang]}</h3>
          <p>${world.line[currentLang]}</p>
          <div class="tags">
            ${world.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>
        <button class="card-btn" data-i18n-dynamic="cardBtn">${currentLang === "en" ? "View World" : "Voir l’univers"}</button>
      `;

      grid.appendChild(card);
    });
  bindSFX();
}

function setLang(lang, button) {
  currentLang = lang;

  document.querySelectorAll(".lang-switch button").forEach(btn => btn.classList.remove("active"));
  if (button) {
    button.classList.add("active");
  } else {
    // Find button based on language
    const buttons = document.querySelectorAll(".lang-switch button");
    buttons.forEach(btn => {
      if (btn.getAttribute("onclick").includes(`'${lang}'`)) {
        btn.classList.add("active");
      }
    });
  }

  // Update static text elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update input placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Update option label texts in select dropdowns
  document.querySelectorAll("[data-i18n-label]").forEach(el => {
    const key = el.getAttribute("data-i18n-label");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update dynamic elements
  updateAuditFormSelectedStyle();
  if (typeof window.currentEpisodeIndex !== 'undefined') {
    selectEpisode(window.currentEpisodeIndex);
  }

  renderWorlds();
  bindSFX();
}

function updateAuditFormSelectedStyle() {
  const container = document.getElementById("selectedStyleContainer");
  const valueSpan = document.getElementById("selectedStyleValue");
  const visualDiv = document.getElementById("auditModalVisual");
  const avatarDiv = document.getElementById("auditModalAvatar");
  const subTitle = document.getElementById("auditModalSub");

  if (!container || !valueSpan) return;

  if (window.selectedAvatarStyle && window.selectedAvatarStyle !== "Not selected") {
    container.style.display = "block";

    // Find the world/style object to get its image & color gradient
    let foundWorld = worlds.find(w => 
      w.title.en === window.selectedAvatarStyle || 
      w.title.fr === window.selectedAvatarStyle ||
      (w.title[currentLang] && w.title[currentLang] === window.selectedAvatarStyle)
    );

    // If it's one of the 8 crew members, create a virtual world object for them!
    if (!foundWorld) {
      const isCrew = ["Pixel-Patch", "Follo-Drive", "Vibe-Vortex", "Crypt-Key", "The Founder", "Le Fondateur", "BlankDigi", "Poposs", "Follovida"].includes(window.selectedAvatarStyle);
      if (isCrew) {
        if (window.selectedAvatarStyle === "Pixel-Patch") {
          foundWorld = {
            id: "pixel-patch",
            from: "#10061a",
            to: "#6c3082",
            image: "../assets/images/avatar-worlds/crew-pixelpatch.png",
            icon: "PP",
            title: { en: "Pixel-Patch", fr: "Pixel-Patch" }
          };
        } else if (window.selectedAvatarStyle === "Follo-Drive") {
          foundWorld = {
            id: "follo-drive",
            from: "#1f0f04",
            to: "#fb5607",
            image: "../assets/images/avatar-worlds/crew-follodrive.png",
            icon: "FD",
            title: { en: "Follo-Drive", fr: "Follo-Drive" }
          };
        } else if (window.selectedAvatarStyle === "Vibe-Vortex") {
          foundWorld = {
            id: "vibe-vortex",
            from: "#1a031e",
            to: "#ff007f",
            image: "../assets/images/avatar-worlds/crew-vibevortex.png",
            icon: "VV",
            title: { en: "Vibe-Vortex", fr: "Vibe-Vortex" }
          };
        } else if (window.selectedAvatarStyle === "Crypt-Key") {
          foundWorld = {
            id: "crypt-key",
            from: "#1c050a",
            to: "#d90429",
            image: "../assets/images/avatar-worlds/crew-cryptkey.png",
            icon: "CK",
            title: { en: "Crypt-Key", fr: "Crypt-Key" }
          };
        } else if (window.selectedAvatarStyle === "The Founder" || window.selectedAvatarStyle === "Le Fondateur") {
          foundWorld = {
            id: "founder",
            from: "#111111",
            to: "#00d4ff",
            image: "../assets/images/avatar-worlds/crew-founder.png",
            icon: "FO",
            title: { en: "The Founder", fr: "Le Fondateur" }
          };
        } else if (window.selectedAvatarStyle === "BlankDigi") {
          foundWorld = {
            id: "blankdigi",
            from: "#090915",
            to: "#00d4ff",
            image: "../assets/images/avatar-worlds/crew-blankdigi.png",
            icon: "BD",
            title: { en: "BlankDigi", fr: "BlankDigi" }
          };
        } else if (window.selectedAvatarStyle === "Poposs") {
          foundWorld = {
            id: "poposs",
            from: "#0f1c09",
            to: "#39b54a",
            image: "../assets/images/avatar-worlds/crew-poposs.png",
            icon: "PP",
            title: { en: "Poposs", fr: "Poposs" }
          };
        } else if (window.selectedAvatarStyle === "Follovida") {
          foundWorld = {
            id: "follovida",
            from: "#1c0a24",
            to: "#b84cff",
            image: "../assets/images/avatar-worlds/crew-follovida.png",
            icon: "FV",
            title: { en: "Follovida", fr: "Follovida" }
          };
        }
      }
    }

    if (foundWorld) {
      // Keep global state in sync with current language
      window.selectedAvatarStyle = foundWorld.title[currentLang];
      valueSpan.textContent = window.selectedAvatarStyle;

      if (visualDiv) {
        visualDiv.style.setProperty("--modalFrom", foundWorld.from);
        visualDiv.style.setProperty("--modalTo", foundWorld.to);
      }
      if (avatarDiv) {
        avatarDiv.style.fontSize = ""; // reset inline font-size
        avatarDiv.innerHTML = `
          <img src="${foundWorld.image}" alt="${foundWorld.title[currentLang]}" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
          <div style="display:none; width:100%; height:100%; place-items:center; background: linear-gradient(135deg, ${foundWorld.from}, ${foundWorld.to}); font-size: 64px; font-weight: 900; color: white;">${foundWorld.icon}</div>
        `;
      }
      if (subTitle) {
        subTitle.textContent = foundWorld.title[currentLang];
      }
    } else {
      valueSpan.textContent = window.selectedAvatarStyle;
      if (subTitle) {
        subTitle.textContent = currentLang === "en" ? "Start Audit" : "Commencer l'Audit";
      }
    }
  } else {
    container.style.display = "none";
    
    // Reset to default generic state
    if (visualDiv) {
      visualDiv.style.setProperty("--modalFrom", "#1d1230");
      visualDiv.style.setProperty("--modalTo", "#063444");
    }
    if (avatarDiv) {
      avatarDiv.style.fontSize = "32px";
      avatarDiv.innerHTML = "AUDIT";
    }
    if (subTitle) {
      subTitle.textContent = currentLang === "en" ? "Start Audit" : "Commencer l'Audit";
    }
  }
}

function openWorld(id) {
  const world = worlds.find(w => w.id === id);
  if (!world) return;

  // Track the selected style in JS state
  window.selectedAvatarStyle = world.title[currentLang];
  updateAuditFormSelectedStyle();

  const modal = document.getElementById("worldModal");
  const box = document.getElementById("worldModalBox");

  box.style.setProperty("--modalFrom", world.from);
  box.style.setProperty("--modalTo", world.to);

  // Set modal elements
  const iconDiv = document.getElementById("modalIcon");
  iconDiv.innerHTML = `
    <img src="${world.image}" alt="${world.title[currentLang]}" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
    <div style="display:none; width:100%; height:100%; place-items:center;">${world.icon}</div>
  `;

  document.getElementById("modalTitle").textContent = world.title[currentLang];
  document.getElementById("modalLine").textContent = world.line[currentLang];
  document.getElementById("modalWorld").textContent = world.world[currentLang];
  document.getElementById("modalBest").textContent = world.best[currentLang];
  document.getElementById("modalSample").textContent = world.sample[currentLang];

  const list = document.getElementById("modalFormats");
  list.innerHTML = "";
  world.formats[currentLang].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  modal.classList.add("active");
}

function openModal(id) {
  closeAllModals();
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("active");
    bindSFX();
  }
}

function openAudit() {
  updateAuditFormSelectedStyle();
  openModal("auditModal");
}

function openCompare() {
  // Render comparison content dynamically based on current language
  const listContainer = document.getElementById("compareListContainer");
  if (listContainer) {
    listContainer.innerHTML = "";
    
    // Add simple differences list for all 8 worlds
    worlds.forEach(world => {
      const item = document.createElement("div");
      item.className = "compare-item";
      
      // Simple summary mapping
      let desc = "";
      if (world.id === "warm-founder") desc = currentLang === "en" ? "trust / education / services" : "confiance / éducation / services";
      else if (world.id === "stylish-creator") desc = currentLang === "en" ? "fashion / premium / visual impact" : "mode / premium / impact visuel";
      else if (world.id === "comedy-host") desc = currentLang === "en" ? "local / funny / viral" : "local / drôle / viral";
      else if (world.id === "product-presenter") desc = currentLang === "en" ? "e-commerce / product sales" : "e-commerce / ventes de produits";
      else if (world.id === "tech-expert") desc = currentLang === "en" ? "AI / automation / authority" : "IA / automatisation / autorité";
      else if (world.id === "real-estate") desc = currentLang === "en" ? "property / credibility" : "immobilier / crédibilité";
      else if (world.id === "luxury-brand") desc = currentLang === "en" ? "premium / high-value" : "premium / haute valeur";
      else if (world.id === "local-business") desc = currentLang === "en" ? "simple / Moroccan / commercial" : "simple / marocain / commercial";
      else if (world.id === "fitness-coach") desc = currentLang === "en" ? "fitness / wellness / energy" : "fitness / bien-être / énergie";
      else if (world.id === "elearning-instructor") desc = currentLang === "en" ? "education / guides / academy" : "éducation / guides / académie";
      else if (world.id === "medical-advisor") desc = currentLang === "en" ? "health / medicine / clinical trust" : "santé / médecine / confiance clinique";
      else if (world.id === "travel-influencer") desc = currentLang === "en" ? "travel / food / lifestyle vlogs" : "voyage / gastronomie / vlogs de vie";
      else if (world.id === "hr-specialist") desc = currentLang === "en" ? "hiring / recruiting / careers" : "recrutement / emploi / carrières";
      else if (world.id === "finance-analyst") desc = currentLang === "en" ? "wealth management / stock market / investment" : "gestion de patrimoine / bourse / investissement";
      else if (world.id === "beauty-consultant") desc = currentLang === "en" ? "cosmetics / makeup / skincare tips" : "cosmétiques / maquillage / soins de la peau";
      else if (world.id === "mindfulness-coach") desc = currentLang === "en" ? "meditation / zen / stress management" : "méditation / zen / gestion du stress";
      else if (world.id === "auto-expert") desc = currentLang === "en" ? "car garage / engineering / auto diagnostics" : "garage auto / ingénierie / diagnostic automobile";
      else if (world.id === "gaming-reviewer") desc = currentLang === "en" ? "gaming gear / console & PC review / entertainment" : "matériel gaming / tests console & PC / divertissement";
      else if (world.id === "moroccan-artisan") desc = currentLang === "en" ? "Moroccan crafts / pottery / handmade heritage" : "artisanat marocain / poterie / héritage fait main";
      else if (world.id === "legal-advisor") desc = currentLang === "en" ? "business law / corporate compliance / contracts" : "droit des affaires / conformité / contrats";
      else if (world.id === "insurance-broker") desc = currentLang === "en" ? "insurance policy / risk mitigation / asset protection" : "polices d'assurance / gestion des risques / protection";
      else if (world.id === "startup-pitcher") desc = currentLang === "en" ? "venture capital / pitch deck / startup funding" : "capital-risque / pitch deck / levée de fonds";
      else if (world.id === "pr-spokesperson") desc = currentLang === "en" ? "PR / public relations / crisis communication" : "relations publiques / RP / communication de crise";
      else if (world.id === "jewelry-designer") desc = currentLang === "en" ? "gemstones / custom luxury jewelry / craftsmanship" : "pierres précieuses / bijoux de luxe / artisanat d'art";
      else if (world.id === "fashion-stylist") desc = currentLang === "en" ? "image consulting / outfit tips / wardrobe reset" : "conseil en image / tenues / penderie capsule";
      else if (world.id === "perfumer-expert") desc = currentLang === "en" ? "niche fragrances / perfume creation / scent design" : "parfumerie fine / création de parfum / senteurs";
      else if (world.id === "model-runway") desc = currentLang === "en" ? "fashion runway / modeling agency / catwalk prep" : "défilés de mode / agence de mannequin / défilé";
      else if (world.id === "streetwear-influencer") desc = currentLang === "en" ? "sneaker culture / urban fashion / style drop" : "culture sneakers / mode urbaine / style urbain";
      else if (world.id === "yoga-instructor") desc = currentLang === "en" ? "yoga flow / pilates routine / mindfulness stretch" : "flux de yoga / routine pilates / étirements zen";
      else if (world.id === "dental-surgeon") desc = currentLang === "en" ? "smile aesthetics / cosmetic dentistry / dental health" : "esthétique du sourire / blanchiment dentaire / santé bucco-dentaire";
      else if (world.id === "pediatrician") desc = currentLang === "en" ? "child health / toddler nutrition / parenting advice" : "santé infantile / nutrition enfant / conseils parents";
      else if (world.id === "physiotherapist") desc = currentLang === "en" ? "sports rehab / posture correction / joint mobility" : "kinésithérapie du sport / correction posture / mobilité";
      else if (world.id === "nutritionist-dietitian") desc = currentLang === "en" ? "gut health / organic meal prep / clinical diet" : "santé digestive / meal-prep bio / diététique";
      else if (world.id === "science-communicator") desc = currentLang === "en" ? "STEM education / quantum physics / science facts" : "enseignement STEM / physique quantique / sciences";
      else if (world.id === "history-storyteller") desc = currentLang === "en" ? "ancient civilization / leader biographies / heritage mysteries" : "civilisations anciennes / biographies / mystères de l'histoire";
      else if (world.id === "lang-teacher") desc = currentLang === "en" ? "polyglot lessons / vocabulary / accent correction" : "cours de langues / vocabulaire / correction accent";
      else if (world.id === "diy-crafts") desc = currentLang === "en" ? "home DIY hacks / craft projects / decoration ideas" : "bricolage maison / projets créatifs / idées déco";
      else if (world.id === "parenting-coach") desc = currentLang === "en" ? "positive discipline / toddler behavior / family advice" : "éducation positive / comportement enfant / conseils famille";
      else if (world.id === "cinema-critic") desc = currentLang === "en" ? "movie review / streaming recommendations / plot endings" : "critique cinéma / streaming / décryptage de fins";
      else if (world.id === "music-producer") desc = currentLang === "en" ? "song mixing / audio gear review / beatmaking tips" : "mixage audio / matériel studio / tutoriels MAO";
      else if (world.id === "book-reviewer") desc = currentLang === "en" ? "book summaries / literature critic / self-help books" : "résumés de livres / chronique littéraire / développement personnel";
      else if (world.id === "vlogger-daily") desc = currentLang === "en" ? "lifestyle vlogging / daily habit routine / personal brand" : "vlog quotidien / routines de vie / marque personnelle";
      else if (world.id === "podcaster-host") desc = currentLang === "en" ? "talk show / podcast host / guest interviews" : "talk-show / podcast d'entreprise / interviews";
      else if (world.id === "dropshipper-pro") desc = currentLang === "en" ? "winning product sourcing / e-com store optimization / ads campaign" : "produits gagnants / boutique ecom / campagnes de pub";
      else if (world.id === "bakery-chef") desc = currentLang === "en" ? "sourdough baking / pastry techniques / bakery secrets" : "panification au levain / pâtisserie fine / secrets de boulange";
      else if (world.id === "realestate-agent") desc = currentLang === "en" ? "vacation rental host / property walk / property manager" : "conciergerie saisonnière / visite de villa / hôte Airbnb";
      else if (world.id === "coffee-roaster") desc = currentLang === "en" ? "specialty coffee / barista arts / espresso setup" : "cafés de spécialité / techniques de barista / espresso";
      else if (world.id === "beauty-salon") desc = currentLang === "en" ? "nail salon styling / skincare spa / beauty aesthetics" : "manucure & stylisme ongulaire / spa / soins esthétiques";

      item.innerHTML = `
        <h5>${world.title[currentLang]}</h5>
        <p>→ ${desc}</p>
      `;
      listContainer.appendChild(item);
    });
  }

  openModal("compareModal");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("active");
  }
  if (id === 'diagModal') {
    window.diagTimerActive = false;
  }
}

function closeAllModals() {
  document.querySelectorAll(".modal").forEach(modal => modal.classList.remove("active"));
  window.diagTimerActive = false;
}

function scrollToWorlds() {
  const section = document.getElementById("worlds");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function filterWorlds(filter, button) {
  document.querySelectorAll(".filter").forEach(btn => btn.classList.remove("active"));
  if (button) {
    button.classList.add("active");
  }
  renderWorlds(filter);
}

function submitAudit(event) {
  event.preventDefault();

  const name = document.getElementById("nameInput").value.trim();
  const business = document.getElementById("businessInput").value.trim();
  const type = document.getElementById("typeInput").value;
  const platform = document.getElementById("platformInput").value;
  const whatsapp = document.getElementById("whatsappInput").value.trim();
  const goal = document.getElementById("goalInput").value.trim();
  
  // Use selected style if set, otherwise "Not selected"
  const selectedStyle = window.selectedAvatarStyle || "Not selected";

  const message = `
BlankDigi Avatar Audit Request

Name: ${name}
Business: ${business}
Business Type: ${type}
Main Platform: ${platform}
Client WhatsApp: ${whatsapp}
Selected Avatar Style: ${selectedStyle}

Goal:
${goal}
`.trim();

  const encodedMessage = encodeURIComponent(message);

  // Real WhatsApp number requested is 212675683497
  window.open(
    `https://api.whatsapp.com/send/?phone=212675683497&text=${encodedMessage}&type=phone_number&app_absent=0`,
    "_blank"
  );

  /*
  Future n8n webhook version:
  https://my.follopowers.com/webhook/avatar-audit

  Future flow:
  Landing Page Form
  → n8n Webhook
  → Google Sheet / DB
  → Telegram notification
  → WhatsApp Cloud API notification
  
  Implementation example:
  fetch("https://my.follopowers.com/webhook/avatar-audit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      business,
      type,
      platform,
      whatsapp,
      selectedStyle,
      goal,
      submittedAt: new Date().toISOString()
    })
  })
  .then(response => {
    if (response.ok) {
       console.log("Audit sent to n8n webhook");
    }
  })
  .catch(err => console.error("Error sending to n8n:", err));
  */
}

function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks");
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  navLinks.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
}

function switchUniverseTab(tabId, button) {
  // Deactivate all tab buttons
  document.querySelectorAll(".uni-tab").forEach(btn => btn.classList.remove("active"));
  // Activate clicked button
  button.classList.add("active");

  // Hide all tab contents
  document.querySelectorAll(".universe-tab-content").forEach(content => {
    content.classList.remove("active");
  });
  
  // Show active tab content
  const activeContent = document.getElementById("uni-" + tabId);
  if (activeContent) {
    activeContent.classList.add("active");
  }
  bindSFX();
}

function openAuditWithStyle(styleName) {
  window.selectedAvatarStyle = styleName;
  updateAuditFormSelectedStyle();
  
  if (styleName.includes("Founder") || styleName === "The Founder" || styleName === "Le Fondateur") SFX.playFounderTheme();
  else if (styleName.includes("Tech Expert") || styleName === "BlankDigi") SFX.playBlankDigiTheme();
  else if (styleName.includes("Comedy Host") || styleName === "Poposs") SFX.playPopossTheme();
  else if (styleName.includes("Stylish Creator") || styleName === "Follovida") SFX.playFollovidaTheme();
  else if (styleName === "Pixel-Patch") SFX.playPixelPatchTheme();
  else if (styleName === "Follo-Drive") SFX.playFolloDriveTheme();
  else if (styleName === "Vibe-Vortex") SFX.playVibeVortexTheme();
  else if (styleName === "Crypt-Key") SFX.playCryptKeyTheme();

  openModal("auditModal");
}

function syncCrewCore(crewId, button) {
  if (crewId === 'founder') {
    SFX.playFounderTheme();
  } else if (crewId === 'blankdigi') {
    SFX.playBlankDigiTheme();
  } else if (crewId === 'poposs') {
    SFX.playPopossTheme();
  } else if (crewId === 'follovida') {
    SFX.playFollovidaTheme();
  } else if (crewId === 'pixelpatch') {
    SFX.playPixelPatchTheme();
  } else if (crewId === 'follodrive') {
    SFX.playFolloDriveTheme();
  } else if (crewId === 'vibevortex') {
    SFX.playVibeVortexTheme();
  } else if (crewId === 'cryptkey') {
    SFX.playCryptKeyTheme();
  }

  // Update stat bars to 100% and change background to glowing neon green
  const fill1 = document.getElementById(`stat-fill-${crewId}-1`);
  const fill2 = document.getElementById(`stat-fill-${crewId}-2`);
  const val1 = document.getElementById(`stat-val-${crewId}-1`);
  const val2 = document.getElementById(`stat-val-${crewId}-2`);

  if (fill1) {
    fill1.style.setProperty("--w", "100%");
    fill1.style.width = "100%";
    fill1.style.background = "#39b54a"; // Glowing green
    fill1.style.boxShadow = "0 0 10px rgba(57, 181, 74, 0.8)";
  }
  if (fill2) {
    fill2.style.setProperty("--w", "100%");
    fill2.style.width = "100%";
    fill2.style.background = "#39b54a"; // Glowing green
    fill2.style.boxShadow = "0 0 10px rgba(57, 181, 74, 0.8)";
  }
  if (val1) val1.textContent = "100%";
  if (val2) val2.textContent = "100%";

  // Add ripple style or pulse to card
  const card = document.getElementById(`crew-card-${crewId}`);
  if (card) {
    card.classList.add("core-synced");
  }

  // Update button text and styling
  if (button) {
    button.textContent = currentLang === "en" ? "⚡ Synced" : "⚡ Sync OK";
    button.style.background = "rgba(57, 181, 74, 0.15)";
    button.style.borderColor = "rgba(57, 181, 74, 0.5)";
    button.style.color = "#39b54a";
    button.disabled = true;
  }

  // Print system log inside Series player log
  const log = document.getElementById("player-log");
  if (log) {
    const time = new Date().toLocaleTimeString();
    const crewName = crewId.charAt(0).toUpperCase() + crewId.slice(1);
    log.innerHTML += `<div style="color: #39b54a; margin-top: 5px;">> [${time}] SUCCESS: ${crewName} Core Synchronized at 100%.</div>`;
    log.innerHTML += `<div style="color: var(--accent2);">> [${time}] Melody frequencies played. Audio core verified.</div>`;
    
    // Auto-scroll the terminal body
    const termBody = log.closest('.terminal-body') || log;
    termBody.scrollTop = termBody.scrollHeight;
  }
}

window.currentEpisodeIndex = 0;
const episodes = [
  {
    badge: "Ep 01",
    title: { en: "Poposs arrives at BlankDigi Lab", fr: "Poposs débarque au BlankDigi Lab" },
    desc: { 
      en: "Poposs accidentally enters the quantum core containment and triggers a system-wide alarm. BlankDigi tries to contain the chaos.", 
      fr: "Poposs entre accidentellement dans le confinement du noyau quantique et déclenche une alarme système. BlankDigi tente de contenir le chaos." 
    },
    status: { en: "STABLE", fr: "STABLE" },
    stats: "RENDER: 100% | SPEED: 60FPS"
  },
  {
    badge: "Ep 02",
    title: { en: "Follovida dresses Poposs in AI mode", fr: "Follovida habille Poposs en mode AI" },
    desc: { 
      en: "Follovida uses the Design Lab to scan Poposs and create a custom neon-suit that boosts his viral energy by 400%.", 
      fr: "Follovida utilise le Design Lab pour scanner Poposs et créer une combinaison néon sur mesure qui booste son énergie virale de 400%." 
    },
    status: { en: "TRENDING", fr: "TENDANCE" },
    stats: "ENGAGEMENT: +412% | SHARES: 80K"
  },
  {
    badge: "Ep 03",
    title: { en: "Mission in Town with Robo Taxi", fr: "Mission en ville avec le taxi robo" },
    desc: { 
      en: "The crew takes the Robo Taxi to Follo City for a product launch, but Poposs accidentally overrides the taxi navigation to 'Hyperdrive' mode.", 
      fr: "L'équipage prend le Taxi Robo pour Follo City pour un lancement de produit, mais Poposs surcharge accidentellement la navigation du taxi en mode 'Hyperdrive'." 
    },
    status: { en: "COMPLETED", fr: "TERMINÉ" },
    stats: "DESTINATION: FOLLO CITY | CRASH RISK: 0%"
  },
  {
    badge: "Ep 04",
    title: { en: "AI glitches and everything goes wild", fr: "L'IA bug et tout part en vrille" },
    desc: { 
      en: "A system glitch copies Poposs into 100 hologram clones that run around the city. BlankDigi has to deploy a code patch.", 
      fr: "Un bug système copie Poposs en 100 clones holographes qui courent dans la ville. BlankDigi doit déployer un correctif de code." 
    },
    status: { en: "CRITICAL", fr: "CRITIQUE" },
    stats: "CLONES ACTIVE: 100 | GLITCH CODE: E-404"
  },
  {
    badge: "Ep 05",
    title: { en: "Summit meeting: Solutions & Plan", fr: "Réunion au sommet : Solutions & Plan" },
    desc: { 
      en: "The crew reunites in the Design Lab to pool their code, design, and vibes, successfully saving the BlankDigi Universe.", 
      fr: "L'équipage se réunit dans le Design Lab pour mettre en commun leur code, design et vibes, sauvant avec succès l'Univers BlankDigi." 
    },
    status: { en: "SUCCESS", fr: "VICTOIRE" },
    stats: "UNIVERSE STATUS: SAVED | SYSTEM LOAD: NORMAL"
  }
];

function selectEpisode(index, element) {
  window.currentEpisodeIndex = index;
  document.querySelectorAll(".episode-node").forEach(node => node.classList.remove("active"));
  if (element) {
    element.classList.add("active");
  }
  
  const ep = episodes[index];
  const badgeEl = document.getElementById("player-badge");
  const titleEl = document.getElementById("player-title");
  const descEl = document.getElementById("player-desc");
  const statusEl = document.getElementById("player-status");
  const statsEl = document.getElementById("player-stats");

  if (badgeEl) badgeEl.textContent = ep.badge;
  if (titleEl) titleEl.textContent = ep.title[currentLang];
  if (descEl) descEl.textContent = ep.desc[currentLang];
  if (statusEl) statusEl.textContent = ep.status[currentLang];
  if (statsEl) statsEl.textContent = ep.stats;

  const screen = document.querySelector(".player-screen");
  if (screen) {
    let worldImg = "world-lab.png";
    if (index === 1) worldImg = "world-boutique.png";
    if (index === 2) worldImg = "world-city.png";
    if (index === 3) worldImg = "world-metaverse.png";
    if (index === 4) worldImg = "world-lab.png";
    screen.style.backgroundImage = `linear-gradient(135deg, rgba(17, 17, 26, 0.95), rgba(10, 10, 15, 0.95)), url('../assets/images/avatar-worlds/${worldImg}')`;
  }
}

// Web Audio Synthesizer sound effects
const SFX = {
  enabled: true,
  ctx: null,
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  playHover() {
    if (!this.enabled) return;
    try {
      this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1900, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch(e) { console.warn("Audio Context init blocked or failed", e); }
  },
  playClick() {
    if (!this.enabled) return;
    try {
      this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      const gain2 = this.ctx.createGain();
      
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(550, now);
      osc1.frequency.setValueAtTime(750, now + 0.07);
      gain1.gain.setValueAtTime(0.04, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1100, now);
      osc2.frequency.setValueAtTime(1500, now + 0.07);
      gain2.gain.setValueAtTime(0.015, now);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      
      osc1.start();
      osc2.start();
      osc1.stop(now + 0.22);
      osc2.stop(now + 0.22);
    } catch(e) { console.warn("Audio Context init blocked or failed", e); }
  },
  playFounderTheme() {
    if (!this.enabled) return;
    try {
      this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const freqs = [261.63, 329.63, 392.00, 523.25];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);
        gain.gain.setValueAtTime(0, now + idx * 0.12);
        gain.gain.linearRampToValueAtTime(0.04, now + idx * 0.12 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.12 + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.4);
      });
    } catch(e) {}
  },
  playBlankDigiTheme() {
    if (!this.enabled) return;
    try {
      this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const freqs = [440.00, 523.25, 659.25, 880.00];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();
        osc.type = 'sawtooth';
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1000, now);
        
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.02, now + idx * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.3);
        
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.3);
      });
    } catch(e) {}
  },
  playPopossTheme() {
    if (!this.enabled) return;
    try {
      this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const freqs = [349.23, 440.00, 523.25, 698.46];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.05, now + idx * 0.08 + 0.1);
        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.04, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.25);
      });
    } catch(e) {}
  },
  playFollovidaTheme() {
    if (!this.enabled) return;
    try {
      this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const freqs = [293.66, 369.99, 440.00, 554.37, 739.99];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0, now + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.03, now + idx * 0.1 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.1 + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.5);
      });
    } catch(e) {}
  },
  playPixelPatchTheme() {
    if (!this.enabled) return;
    try {
      this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const freqs = [392.00, 493.88, 587.33, 783.99];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        gain.gain.setValueAtTime(0, now + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.03, now + idx * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.2);
      });
    } catch(e) {}
  },
  playFolloDriveTheme() {
    if (!this.enabled) return;
    try {
      this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const freqs = [300, 450, 600, 900];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + idx * 0.05 + 0.08);
        gain.gain.setValueAtTime(0, now + idx * 0.05);
        gain.gain.linearRampToValueAtTime(0.015, now + idx * 0.05 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.15);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.15);
      });
    } catch(e) {}
  },
  playVibeVortexTheme() {
    if (!this.enabled) return;
    try {
      this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.50];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);
        gain.gain.setValueAtTime(0, now + idx * 0.05);
        gain.gain.linearRampToValueAtTime(0.03, now + idx * 0.05 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.3);
      });
    } catch(e) {}
  },
  playCryptKeyTheme() {
    if (!this.enabled) return;
    try {
      this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      const freqs = [110, 146.83, 165, 220];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0, now + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.05, now + idx * 0.1 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.1 + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.6);
      });
    } catch(e) {}
  }
};

function bindSFX() {
  const selectors = '.uni-tab, .btn, .btn-nav-audit, .crew-btn, .card-btn, .player-btn-action, .player-ctrl-btn, .close, .social-icons a, .theme-switch, .sound-toggle, .filter';
  document.querySelectorAll(selectors).forEach(element => {
    if (element.dataset.sfxBound) return;
    element.dataset.sfxBound = "true";
    element.addEventListener('mouseenter', () => SFX.playHover());
    element.addEventListener('click', () => SFX.playClick());
  });
}

function toggleSound() {
  SFX.enabled = !SFX.enabled;
  const btn = document.getElementById("soundToggle");
  const onIcon = btn.querySelector(".sound-on-icon");
  const offIcon = btn.querySelector(".sound-off-icon");
  if (SFX.enabled) {
    btn.classList.add("active");
    onIcon.style.display = "block";
    offIcon.style.display = "none";
    SFX.playClick();
  } else {
    btn.classList.remove("active");
    onIcon.style.display = "none";
    offIcon.style.display = "block";
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  const switcher = document.querySelector(".theme-switch");
  if (switcher) {
    if (isLight) {
      switcher.style.color = "#6c2cff";
    } else {
      switcher.style.color = "#f7d060";
    }
  }
}

// Interactive world diagnostics configurations
const diagnostics = {
  lab: {
    title: { en: "BlankDigi Lab Core Diagnostics", fr: "Diagnostics du Noyau BlankDigi Lab" },
    icon: "🔬",
    color: ["#2b1740", "#00d4ff"],
    logs: {
      en: [
        "> Loading quantum AI core configuration...",
        "> Establishing handshake with core processors... [OK]",
        "> Core temperature: 34.5°C (STABLE)",
        "> Neural synapse pathways: 100% operational.",
        "> Active models: 8/8 avatar profiles compiled.",
        "> System status: PERFECT. Ready to generate content."
      ],
      fr: [
        "> Chargement de la configuration du noyau IA quantique...",
        "> Établissement de la liaison avec les processeurs... [OK]",
        "> Température du noyau : 34.5°C (STABLE)",
        "> Voies de synapses neuronales : 100% opérationnelles.",
        "> Modèles actifs : 8/8 profils d'avatars compilés.",
        "> Statut du système : PARFAIT. Prêt à générer du contenu."
      ]
    }
  },
  boutique: {
    title: { en: "Follovida Smart Wardrobe Scanner", fr: "Scanner de Garde-Robe Follovida" },
    icon: "👗",
    color: ["#1c0a24", "#b84cff"],
    logs: {
      en: [
        "> Initializing augmented boutique scan...",
        "> Loading textile metadata and neon shaders... [OK]",
        "> Hype index level: MAXIMUM (+412% viral gain potential)",
        "> Outfits in buffer: 24 active designer sets.",
        "> Holographic projections online.",
        "> System status: STYLISH. Ready for collection drops."
      ],
      fr: [
        "> Initialisation du scan de la boutique augmentée...",
        "> Chargement des métadonnées textiles et des shaders néon... [OK]",
        "> Indice de hype : MAXIMUM (+412% potentiel de gain viral)",
        "> Tenues en mémoire : 24 ensembles de designers actifs.",
        "> Projections holographiques en ligne.",
        "> Statut du système : STYLÉ. Prêt pour les lancements de collection."
      ]
    }
  },
  city: {
    title: { en: "Follo City Taxi Tracker", fr: "Traqueur de Taxi Follo City" },
    icon: "🚕",
    color: ["#0f1c09", "#39b54a"],
    logs: {
      en: [
        "> Pinging GPS coordinate receiver in Robo Taxi...",
        "> Connecting satellite link to Follo Central Grid... [OK]",
        "> Vehicle navigation state: OVERRIDDEN (Hyperdrive mode active!)",
        "> Fuel cell level: 85% hydrogen capacity.",
        "> Proximity alert: 0 collisions detected.",
        "> System status: COMMITTED. Taxi is on course."
      ],
      fr: [
        "> Ping du récepteur de coordonnées GPS du Taxi Robo...",
        "> Connexion liaison satellite au réseau central de Follo... [OK]",
        "> État de navigation : SURCHARGÉ (Mode Hyperdrive actif !)",
        "> Niveau de la pile à combustible : 85% d'hydrogène.",
        "> Alerte proximité : 0 collision détectée.",
        "> Statut du système : ENGAGÉ. Le taxi est en route."
      ]
    }
  },
  metaverse: {
    title: { en: "Metaverse Grid Sync Terminal", fr: "Terminal de Sync Grille Métavers" },
    icon: "🌐",
    color: ["#111", "#555"],
    logs: {
      en: [
        "> Opening infinite matrix protocol nodes...",
        "> Syncing 4096 virtual cores... [OK]",
        "> Frame render load: 240FPS absolute latency.",
        "> Portal sync parameters: LOCKED.",
        "> Spatial audio vectors initialized.",
        "> System status: LIMITLESS. Virtual space is online."
      ],
      fr: [
        "> Ouverture des nœuds de protocole de matrice infinie...",
        "> Synchronisation de 4096 cœurs virtuels... [OK]",
        "> Charge de rendu : 240FPS latence absolue.",
        "> Paramètres de synchronisation du portail : VERROUILLÉS.",
        "> Vecteurs audio spatiaux initialisés.",
        "> Statut du système : ILLIMITÉ. L'espace virtuel est en ligne."
      ]
    }
  }
};

window.diagTimerActive = false;

function runDiagnostics(worldId) {
  const data = diagnostics[worldId];
  if (!data) return;
  
  const modal = document.getElementById("diagModal");
  const visual = document.getElementById("diagVisual");
  const icon = document.getElementById("diagWorldIcon");
  const title = document.getElementById("diagWorldTitle");
  const logContainer = document.getElementById("diagLog");
  
  visual.style.setProperty("--modalFrom", data.color[0]);
  visual.style.setProperty("--modalTo", data.color[1]);
  icon.textContent = data.icon;
  title.textContent = data.title[currentLang];
  logContainer.textContent = "";
  
  openModal("diagModal");
  
  window.diagTimerActive = true;
  const logs = data.logs[currentLang];
  let lineIdx = 0;
  
  function printNextLine() {
    if (window.diagTimerActive && lineIdx < logs.length) {
      const p = document.createElement("div");
      p.style.opacity = 0;
      p.style.transform = "translateX(-5px)";
      p.style.transition = "all 0.2s ease";
      p.textContent = logs[lineIdx];
      logContainer.appendChild(p);
      
      p.offsetHeight; // Force layout
      p.style.opacity = 1;
      p.style.transform = "translateX(0)";
      
      logContainer.scrollTop = logContainer.scrollHeight;
      lineIdx++;
      setTimeout(printNextLine, 400);
    }
  }
  setTimeout(printNextLine, 300);
}

// Cyber Player rendering states
window.renderInterval = null;
window.renderPlayingState = false;

const renderLogs = {
  en: [
    "> [0%] Connecting to AI engine...",
    "> [15%] Handshake established. Fetching models...",
    "> [35%] Syncing narrative assets to environment...",
    "> [55%] Rendering facial expressions & dialogue...",
    "> [75%] Compiling audio tracks & visual shaders...",
    "> [90%] Final quality pass and compression...",
    "> [100%] EPISODE RENDER COMPLETED!"
  ],
  fr: [
    "> [0%] Connexion au moteur d'IA...",
    "> [15%] Liaison établie. Récupération des modèles...",
    "> [35%] Sync des actifs narratifs à l'univers...",
    "> [55%] Rendu des expressions faciales & dialogues...",
    "> [75%] Compilation des pistes audio & shaders...",
    "> [90%] Contrôle qualité final et compression...",
    "> [100%] RENDU DE L'ÉPISODE TERMINÉ !"
  ]
};

function simulateEpisode() {
  if (window.renderInterval) {
    clearInterval(window.renderInterval);
  }
  
  const btn = document.querySelector(".player-btn-action");
  const log = document.getElementById("player-log");
  const waves = document.getElementById("playerAudioWaves");
  const originalText = btn.textContent;
  
  btn.disabled = true;
  window.renderPlayingState = true;
  waves.classList.add("playing");
  
  // Reset icons to playing states
  document.getElementById("playPauseIcon").innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
  document.getElementById("mainPlayIcon").innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
  
  btn.textContent = currentLang === "en" ? "Rendering AI..." : "Rendu IA...";
  log.textContent = "";
  
  let progress = 0;
  let logIdx = 0;
  const logsList = renderLogs[currentLang];
  
  window.renderInterval = setInterval(() => {
    progress += 10;
    btn.textContent = (currentLang === "en" ? "Rendering " : "Rendu ") + progress + "%";
    
    // Output diagnostic log line based on progress
    const threshold = Math.floor((progress / 100) * logsList.length);
    while (logIdx < threshold && logIdx < logsList.length) {
      log.textContent += (log.textContent ? "\n" : "") + logsList[logIdx];
      log.scrollTop = log.scrollHeight;
      logIdx++;
    }
    
    if (progress >= 100) {
      clearInterval(window.renderInterval);
      btn.textContent = currentLang === "en" ? "Rendering Complete!" : "Rendu Terminé !";
      
      // Stop wave animation
      window.renderPlayingState = false;
      waves.classList.remove("playing");
      
      // Reset play icons
      document.getElementById("playPauseIcon").innerHTML = `<path d="M8 5v14l11-7z"/>`;
      document.getElementById("mainPlayIcon").innerHTML = `<path d="M8 5v14l11-7z"/>`;
      
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = originalText;
        const ep = episodes[window.currentEpisodeIndex || 0];
        alert((currentLang === "en" ? "AI simulation complete for " : "Simulation IA terminée pour ") + ep.badge + "!\n\n" + ep.title[currentLang]);
      }, 1000);
    }
  }, 200);
}

function prevEpisode() {
  let idx = window.currentEpisodeIndex - 1;
  if (idx < 0) idx = episodes.length - 1;
  const nodes = document.querySelectorAll(".episode-node");
  selectEpisode(idx, nodes[idx]);
}

function nextEpisode() {
  let idx = window.currentEpisodeIndex + 1;
  if (idx >= episodes.length) idx = 0;
  const nodes = document.querySelectorAll(".episode-node");
  selectEpisode(idx, nodes[idx]);
}

function togglePlayPause() {
  window.renderPlayingState = !window.renderPlayingState;
  const btnIcon = document.getElementById("playPauseIcon");
  const mainIcon = document.getElementById("mainPlayIcon");
  const waves = document.getElementById("playerAudioWaves");
  const log = document.getElementById("player-log");
  
  if (window.renderPlayingState) {
    btnIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
    mainIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
    waves.classList.add("playing");
    log.textContent = `> Playback started. Running story simulation...\n> Ep ${window.currentEpisodeIndex + 1}: ${episodes[window.currentEpisodeIndex].title[currentLang]}`;
  } else {
    btnIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
    mainIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
    waves.classList.remove("playing");
    log.textContent += `\n> Playback paused.`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Check if browser is set to FR or default to EN
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang && browserLang.startsWith("fr")) {
    setLang("fr");
  } else {
    setLang("en");
  }

  // Bind Web Audio sounds to all interactive elements
  bindSFX();

  // Coordinate tracking sensor in Hero
  const avatarStack = document.querySelector('.avatar-stack');
  const hudCoords = document.getElementById('hudCoords');
  if (avatarStack && hudCoords) {
    avatarStack.addEventListener('mousemove', (e) => {
      const rect = avatarStack.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(2);
      const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(2);
      hudCoords.textContent = `LOC: X.${x} Y.${y}`;
    });
    avatarStack.addEventListener('mouseleave', () => {
      hudCoords.textContent = `LOC: X.00 Y.00`;
    });
  }

  // Close mobile menu when a nav link is clicked
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      const navLinks = document.getElementById("navLinks");
      const hamburgerMenu = document.getElementById("hamburgerMenu");
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburgerMenu.classList.remove("active");
      }
    });
  });

  // Handle escape key to close modals
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });

  // Scroll compact listener for Command Center header
  const headerEl = document.querySelector('header');
  if (headerEl) {
    const handleHeaderScroll = () => {
      if (window.scrollY > 40) {
        headerEl.classList.add('header-scrolled');
      } else {
        headerEl.classList.remove('header-scrolled');
      }
    };
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll(); // Run initially
  }

  // Hover sliding indicator capsule logic
  const navLinksContainer = document.getElementById('navLinks');
  const navIndicator = document.getElementById('navIndicator');
  if (navLinksContainer && navIndicator) {
    const links = navLinksContainer.querySelectorAll('a:not(.mobile-only-btn)');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        if (window.innerWidth <= 990) {
          navIndicator.style.opacity = '0';
          return;
        }
        
        const left = link.offsetLeft;
        const top = link.offsetTop;
        const width = link.offsetWidth;
        const height = link.offsetHeight;
        
        navIndicator.style.width = `${width + 12}px`;
        navIndicator.style.height = `${height + 6}px`;
        navIndicator.style.left = `${left - 6}px`;
        navIndicator.style.top = `${top - 3}px`;
        navIndicator.style.opacity = '1';
      });
    });
    
    navLinksContainer.addEventListener('mouseleave', () => {
      navIndicator.style.opacity = '0';
    });
  }
});
