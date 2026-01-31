/* === JS LOGIC === */

// State
let currentLang = localStorage.getItem('siteLang') || 'fr';
if (currentLang !== 'fr' && currentLang !== 'en') currentLang = 'fr';
let currentPage = 'home';
let currentShopFilter = null; // Store shop filter state

// --- TRANSLATIONS ---
const translations = {
  fr: {
    nav_home: "Accueil",
    nav_works: "Tableaux",
    nav_vinyles: "Vinyles",
    nav_artist: "L’artiste",
    nav_shop: "Galerie",
    nav_series: "Séries",
    nav_contact: "Contact",
    nav_tagline: "ART CONTEMPORAIN",

    btn_discover: "DÉCOUVRIR LES ŒUVRES",
    btn_about: "À PROPOS",
    btn_read_more: "LIRE PLUS",
    btn_see_vinyls: "VOIR VINYLES",
    btn_see_paintings: "VOIR TABLEAUX",

    filter_all: "TOUTES LES ŒUVRES",
    filter_works: "TABLEAUX",
    filter_classic: "CLASSIQUES",
    filter_works3d: "3D",
    filter_33t: "33 TOURS",
    filter_45t: "45 TOURS",
    filter_78t: "78 TOURS",
    filter_vinyls: "VINYLES",
    filter_series: "SÉRIES",
    filter_Blood: "BLOOD",
    filter_Dream: "DREAM",

    // Home Page
    home_artist_title: "WONDAVEE",
    home_artist_text_1: "Artiste contemporaine, Wondavee développe une pratique centrée sur la transformation de la matière et des jeux de couleurs.",
    home_artist_text_2: "« Mes oeuvres ne laissent pas indifférents. L’enfant intérieur impulse, l’âme expérimentée ajuste. »",
    home_artist_text_3: "",


    home_paintings_title: "TABLEAUX",
    home_paintings_text_1: "Chaque tableau se construit par coulées, techniques, mélanges et ajustements successifs. Les densités sont pensées en amont afin de permettre aux couleurs de réagir, de se superposer et de se sublimer ensemble laissant le mouvement, les couches et les réactions guider chaque œuvre.",
    home_paintings_text_2: "Textures, rythmes et variations de surface composent des pièces uniques, issues d’un travail à la fois intuitif et maîtrisé.",


    home_vinyls_title: "VINYLES",
    home_vinyls_text_1: "Sur un Vinyle, support non recyclable, la transformation devient un acte évident. Les Wondavee-Nyls sont finalisés en rotation, résultats d’un rythme et de sa répétition à la manière d’un beat.",
    home_vinyls_text_2: "La collection 2025 se compose de 150 vinyles uniques, répartis en différentes séries et tailles, où chaque pièce affirme sa singularité.",


    // Tableaux Page
    tableaux_central_1: "Un tableau amène une dimension supplémentaire a une pièce. Une dimension choisie à un moment donné, qui fait du bien à l’univers que l’on traverse alors. Il installe une atmosphère, il fait circuler une énergie différente. Rien n’est figé, tout est cyclique. Certaines toiles apaisent, d’autres remuent, parfois profondément.",
    tableaux_large_1: "Même s’il ne s’exprime pas, le tableau communique. Il te parle, littéralement, il transmet des émotions. Pour Wondavee, c’est un puzzle intrigant et évident en même temps, à travers ses toiles, elle diffuse des énergies bienfaisantes, des énergies d'amour.",
    tableaux_large_2: "Ses tableaux sont réalisés en acrylique, à partir de techniques de fluid art. Après avoir déposé ses couches minutieusement préparées, elle mène sa danse des mouvements et des rythmes qui façonnent l'identité propre à chacune de ses pièces. Le processus alterne entre interventions, analyses et ajustements.",

    tableaux_central_2: "Les couches se déposent, se déplacent et se répondent, créant des rythmes et des tensions propres à chaque pièce.",

    // Vinyls Page
    vinyls_central_1: "Les premiers souvenirs de vinyles de Wondavee remontent aux années 80. Enfant, chez elle, des disques de Lionel Richie, Boney M ou Phil Collins tournent sur la platine familiale. In 1992, elle a sa première chaîne hifi, elle fait tout : cassette, vinyle, cd… un bonheur. Son premier réflexe, aller chiner des vinyles pas cher juste pour faire tourner de la musique. Rapidement, elle utilise son radio/cassettes pour enregistrer ses compils perso.",
    vinyls_large_1: "Entourée très tôt de personnes créatives, Wondavee développe un lien naturel avec la musique. Pour ses 13 ans, elle rêve d’un piano ; elle reçoit un synthétiseur et en dévore la notice. Avec des amies, elle compose un premier morceau. À la même période, elle vit à côté d’un studio d’enregistrement utilisé notamment par Ray Charles à Paris. Habituée des lieux, des équipes et des artistes, ils lui enregistrent cette chanson.\n\nÀ 15 ans, son identité musicale se construit autour du hip-hop, d’abord très marquée par les productions de la côte Est. Au Virgin Megastore des Champs-Élysées, elle rencontre des membres d’un collectif hip-hop West Coast actif dans le Val-de-Marne, qu’elle rejoint. Elle s’implique pleinement dans le projet : Enregistrements, concerts, danse, chœurs, merchandising. La musique tient une place importante dans sa vie. Ses playlists se multiplient au gré de ses humeurs.",
    vinyls_large_2: "En tombant par hasard sur un stock de vinyles en piteux état, l'évidence s'est imposée comme un signe, un cadeau. Le vinyle est un objet mythique. Non recyclable, il nécessite un traitement adapté pour pouvoir être transformé en Wondavee-nyl.",
    vinyls_central_2: "150 vinyles uniques constituent la collection 2025. Chaque série correspond à un climat visuel et rythmique, sans hiérarchie dans laquelle 45 tours, 33 tours et 78 tours coexistent. Ces séries forment un ensemble, comme les morceaux d’un même album.",


    // JS Generated Content
    vinyl_title: "Vinyle Art",
    size_33t: "33 Tours",
    size_45t: "45 Tours",
    size_78t: "78 Tours",
    size_16inch: "16 Pouces",

    tableau_title: "Tableau Unique",
    painting_acrylic: "Acrylique sur coton",
    painting_cat: "Tableaux",
    painting_cat_3d: "Tableaux 3D",

    series_title: "SÉRIES",

    status_available: "Disponible",
    status_reserved: "Réservée",
    status_sold: "Oeuvre acquise",

    // Artist Page
    artist_intro_text: "Née à Paris en 1980, Wondavee grandit à Montmartre, dans la boulangerie de sa mère. Un environnement fait de gestes répétés, de matières en transformation, d’odeurs, de textures, de couleurs. Très tôt, elle observe, manipule, expérimente. À la boulangerie, elle dessine les affiches. Enfant, elle vend ses cartes postales dessinées aux touristes sur la place du Tertre.",
    artist_subtitle_1: "Matière, lumière et mouvement",
    artist_text_1: "La matière est déjà là, partout. Elle la façonne sous différentes formes. Jusqu’à l’âge de 18 ans, elle travaille régulièrement l’argile, pratique la poterie, attirée par les volumes et les formes. Fascinée par l’Égypte ancienne, elle modèle des sphynx, sensible à ce qui traverse le temps et à la puissance des symboles.\n\nParallèlement, elle s’intéresse à la naturopathie. Aux produits naturels, à leurs propriétés, à leurs transformations. Elle prépare elle-même de nombreux produits du quotidien, infusions et soins, en travaillant des <a href=\"#\" onclick=\"route('recettes')\" class=\"artist-link\">recettes</a>, des dosages, des équilibres. Ce rapport direct à la matière, au mélange, à la réaction, nourrit profondément sa manière de créer.",
    artist_subtitle_2: "Démarche et remix visuel",
    artist_text_2: "Autodidacte, Wondavee développe une pratique fondée sur l’expérimentation. Couleurs, superpositions, ajustements successifs. La peinture devient un espace de concentration et de transformation, où le geste et la matière dialoguent en permanence. Ouverte à la spiritualité, elle aborde la création comme un espace de recentrage et d’écoute intérieure.\n\nLe travail de Wondavee peut se lire comme un remix visuel, issu d’un parcours traversé par la musique, la matière et le rythme. Une pratique abstraite, ancrée, où les œuvres existent pour être ressenties.",
    artist_timeline_title: "Timeline",

    // Contact
    contact_title: "Contact",
    contact_intro: "Pour toute demande, information ou projet autour des œuvres.",
    contact_bespoke_title: "Contact & projets sur mesure",
    contact_bespoke_text_1: "Il est possible de confier un vinyle personnel pour une création sur mesure. Le disque est travaillé comme les pièces de la collection, en respectant le support, son format et son histoire.",
    contact_bespoke_text_2: "Chaque projet est envisagé individuellement, à partir d’un échange préalable. Le travail repose sur la transformation de la matière, le rythme et l'équilibre, sans reproduction ni standardisation.",

    contact_faq_title: "FAQ",
    contact_faq_q1: "Quels supports peuvent être travaillés ?",
    contact_faq_a1: "Vinyles 33 tours, 45 tours et 78 tours.",
    contact_faq_q2: "Délais de réalisation ?",
    contact_faq_a2: "Les délais varient selon le projet et le temps de séchage nécessaire. Ils sont précisés lors de l’échange.",
    contact_faq_q3: "Puis-je choisir les couleurs ou le rendu ?",
    contact_faq_a3: "Des orientations sont discutées, sans garantie de résultat figé. Le processus reste ouvert.",
    contact_faq_q4: "Comment se fait la restitution ?",
    contact_faq_a4: "Chaque pièce est vernie, signée et préparée pour être conservée dans le temps.",

    contact_name: "Votre Nom",
    contact_email: "Email",
    contact_subject: "Sujet",
    contact_message: "Message",
    contact_order: "Je souhaite passer commande",
    contact_send: "Envoyer",
    contact_infos: "Infos",
    contact_city: "Ville",


    // Footer
    footer_rights: "© 2025 Tous droits réservés.",
    footer_legal: "Mentions Légales"
  },
  en: {
    nav_home: "Home",
    nav_works: "Paintings",
    nav_vinyles: "Vinyls",
    nav_artist: "About",
    nav_shop: "Gallery",
    nav_series: "Series",
    nav_contact: "Contact",
    nav_tagline: "CONTEMPORARY ART",

    btn_discover: "DISCOVER THE WORKS",
    btn_about: "ABOUT",
    btn_read_more: "READ MORE",
    btn_see_vinyls: "SEE VINYLS",
    btn_see_paintings: "SEE PAINTINGS",

    filter_all: "ALL ARTWORKS",
    filter_works: "PAINTINGS",
    filter_classic: "CLASSIC",
    filter_works3d: "3D",
    filter_33t: "33 RPM",
    filter_45t: "45 RPM",
    filter_78t: "78 RPM",
    filter_vinyls: "VINYLS",
    filter_series: "SERIES",
    filter_Blood: "BLOOD",
    filter_Dream: "DREAM",

    // Home Page
    home_artist_title: "WONDAVEE",
    home_artist_text_1: "Contemporary artist Wondavee works with material transformation and color interactions.",
    home_artist_text_2: "“My work tends to provoke a reaction. The inner child initiates, the experienced soul refines.”",

    home_artist_text_3: "",

    home_paintings_title: "PAINTINGS",
    home_paintings_text_1: "Each piece is built through pours, techniques, mixtures and successive adjustments. Densities are planned in advance, allowing colors to react, overlap and enhance one another, while movement, layers and interactions guide the work.",
    home_paintings_text_2: "Textures, rhythms and surface variations shape unique pieces, the result of a practice that is both intuitive and controlled.",


    home_vinyls_title: "VINYLS",
    home_vinyls_text_1: "On vinyl, a non-recyclable medium, transformation becomes an obvious act. Wondavee-Nyls are finalised through rotation, shaped by rhythm and repetition, much like a beat.",
    home_vinyls_text_2: "The 2025 collection consists of 150 unique vinyl pieces, divided into different series and sizes, each asserting its own singularity.",


    // Tableaux Page
    tableaux_central_1: "A painting brings an additional dimension to a space. A dimension chosen at a given moment, one that resonates with the world we are moving through at that time. It sets an atmosphere, allowing a different energy to circulate. Nothing is fixed; everything is cyclical. Some paintings soothe, others stir, sometimes deeply.",
    tableaux_large_1: "Even without words, a painting communicates. It speaks, quite literally, and carries emotion. For Wondavee, each piece is a puzzle that feels both intriguing and obvious. Through her paintings, she shares benevolent energies, energies of love.",
    tableaux_large_2: "Her works are created in acrylic, using fluid art techniques. After carefully preparing and layering the paint, she guides movement and rhythm, shaping the distinct identity of each piece. The process moves between intervention, observation and adjustment.",

    tableaux_central_2: "Layers settle, shift and respond to one another, creating rhythm and tension within each piece. Each work is a unique piece, stopped at a precise moment in the process.",

    // Vinyls Page
    vinyls_central_1: "Wondavee’s first memories of vinyl date back to the 1980s. As a child, records by Lionel Richie, Boney M and Phil Collins spin regularly on the family turntable. In 1992, she gets her first hi-fi system. She uses everything, cassette tapes, vinyl, CDs. Music is everywhere. Her first instinct is to hunt for inexpensive records, simply to keep music playing.",
    vinyls_large_1: "Surrounded early on by creative people, Wondavee develops a natural connection to music. For her 13th birthday, she dreams of a piano; she receives a synthesizer instead and devours the manual. With friends, she composes her first track. At the same time, she lives next door to a recording studio in Paris, used among others by Ray Charles. Familiar with the place, the crews and the artists, she records this first song there.\n\nAt 15, her musical identity takes shape around hip-hop, initially strongly influenced by East Coast productions. At the Virgin Megastore on the Champs-Élysées, she meets members of a West Coast hip-hop collective based in the Val-de-Marne, which she later joins. She remains deeply involved: recordings, live shows, dance, backing vocals, merchandising. Music remains central, evolving constantly through playlists shaped by mood and moment.",
    vinyls_large_2: "Later, she comes across a batch of vinyl records in very poor condition. The idea appears immediately, almost as a sign. Vinyl is a mythical object. Non-recyclable by nature, it requires a specific approach to be transformed into a Wondavee-Nyl.",
    vinyls_central_2: "The 2025 collection consists of 150 unique vinyl pieces. Each series corresponds to a distinct visual and rhythmic atmosphere, without hierarchy. 45 rpm, 33 rpm and 78 rpm formats coexist, forming a whole, like tracks belonging to the same album.",


    // JS Generated Content
    vinyl_title: "Vinyl Art",
    size_33t: "33 RPM",
    size_45t: "45 RPM",
    size_78t: "78 RPM",
    size_16inch: "16 Inches",

    tableau_title: "Unique Painting",
    painting_acrylic: "Acrylic on cotton",
    painting_cat: "Paintings",
    painting_cat_3d: "3D Paintings",

    series_title: "SERIES",

    status_available: "Available",
    status_reserved: "Reserved",
    status_sold: "Acquired work",

    // Artist Page
    artist_intro_text: "Born in Paris in 1980, Wondavee grew up in Montmartre, in her mother's bakery. An environment shaped by repeated gestures, transforming materials, smells, textures, and colors. From a very early age, she observes, manipulates, and experiments. At the bakery, she draws the signs. As a child, she sells her hand-drawn postcards to tourists on the Place du Tertre.",
    artist_subtitle_1: "Matter, light and movement",
    artist_text_1: "Matter is already there, everywhere. She shapes it in different forms. Until the age of 18, she regularly works with clay and practices pottery, drawn to shapes and volumes. Fascinated by ancient Egypt, she models sphinxes, sensitive to what transcends time and the power of symbols.\n\nAt the same time, she is interested in naturopathy—natural products, their properties, and their transformations. She prepares many of her own daily products, infusions and skincare, working with <a href=\"#\" onclick=\"route('recettes')\" class=\"artist-link\">recipes</a>, dosages, and balances. This direct relationship with matter, mixing, and reactivity deeply fuels her creative process.",
    artist_subtitle_2: "Process and Visual Remix",
    artist_text_2: "Self-taught, Wondavee develops a practice based on experimentation: colors, layers, and successive adjustments. Painting becomes a space of concentration and transformation, where gesture and matter are in constant dialogue. Open to spirituality, she approaches creation as a space for centering and inner listening.\n\nWondavee's work can be read as a visual remix, born from a journey through music, matter, and rhythm. An abstract, grounded practice where the works exist to be felt.",
    artist_timeline_title: "Timeline",

    // Contact
    contact_title: "Contact",
    contact_intro: "For enquiries, information or bespoke projects.",
    contact_bespoke_title: "Contact & bespoke work",
    contact_bespoke_text_1: "Personal vinyl records can be entrusted for a bespoke piece. Each disc is approached in the same way as works from the collection, respecting the medium, its format and its history.",
    contact_bespoke_text_2: "Every project is discussed individually beforehand. The work focuses on material transformation, rhythm and balance, without replication or standardisation.",

    contact_faq_title: "FAQ",
    contact_faq_q1: "Which formats can be used?",
    contact_faq_a1: "33 rpm, 45 rpm and 78 rpm vinyl records.",
    contact_faq_q2: "Production time?",
    contact_faq_a2: "Timeframes depend on the project and required drying phases. Details are discussed in advance.",
    contact_faq_q3: "Can colours or outcomes be requested?",
    contact_faq_a3: "Guidelines are discussed, without any guarantee of a fixed outcome. The process remains open.",
    contact_faq_q4: "How is the piece delivered?",
    contact_faq_a4: "Each work is varnished, signed and prepared for long-term preservation.",

    contact_name: "Your Name",
    contact_email: "Email",
    contact_subject: "Subject",
    contact_message: "Message",
    contact_order: "I wish to place an order",
    contact_send: "Send",
    contact_infos: "Info",
    contact_city: "City",


    // Footer
    footer_rights: "© 2025 All rights reserved.",
    footer_legal: "Legal Notices"
  }
};

function updateLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  const flag = btn.querySelector('.lang-flag');
  if (!flag) return;
  flag.textContent = (currentLang === 'fr') ? '🇬🇧' : '🇫🇷';
}

function toggleLang(e) {
  if (e) e.preventDefault();
  currentLang = (currentLang === 'fr') ? 'en' : 'fr';
  localStorage.setItem('siteLang', currentLang);
  updateLanguage();
  updateLangToggle();
}

function updateLanguage() {
  // Update Elements with data-lk
  document.querySelectorAll('[data-lk]').forEach(el => {
    const key = el.getAttribute('data-lk');
    if (translations[currentLang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[currentLang][key];
      } else {
        // Use innerHTML to allow links within editorial texts
        // and convert newlines to <br> for proper formatting
        el.innerHTML = translations[currentLang][key].replace(/\n/g, '<br>');
      }
    }
  });

  // Specific Hero Translation via data attributes
  document.querySelectorAll('.hero-section [data-fr]').forEach(el => {
    const txt = el.getAttribute('data-' + currentLang);
    if (txt) el.textContent = txt;
  });

  // Reload Dynamic Content (Shop) if active
  const shopPage = document.getElementById('page-shop');
  if (shopPage && shopPage.style.display !== 'none') {
    loadShop(currentShopFilter);
  }
}

// --- ROUTER SYSTEM ---
function route(pageId, filterParam = null, pushToHistory = true) {
  currentPage = pageId;

  if (pushToHistory) {
    history.pushState({ pageId, filterParam }, "", "");
  }

  // 1. Hide all pages
  document.querySelectorAll('.page-view').forEach(p => {
    p.style.display = 'none';
    p.classList.remove('active');
  });

  // 2. Show target page
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.style.display = 'block';
    setTimeout(() => target.classList.add('active'), 10);
    window.scrollTo(0, 0);
  }

  // 3. Update Nav
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  // Find link that routes to this page (simple check)
  const activeLink = document.querySelector(`.nav-link[onclick*="'${pageId}'"]`);
  if (activeLink) activeLink.classList.add('active');

  // 4. Handle Params (e.g. Filters)
  if (pageId === 'shop') {
    currentShopFilter = filterParam || null;
    try {
      loadShop(currentShopFilter);
    } catch (e) {
      console.error("Shop load error:", e);
    }
  } else if (pageId === 'tableaux' && filterParam === '3d') {
    setTimeout(() => {
      const section3d = document.getElementById('section-3d');
      if (section3d) section3d.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }

  // Close Mobile Menu on navigation
  const header = document.getElementById('main-header');
  const nav = document.getElementById('nav-menu');
  const toggle = document.getElementById('mobile-toggle');
  if (nav) nav.classList.remove('open');
  if (toggle) toggle.classList.remove('open');
  if (header) header.classList.remove('menu-open');
}

// --- SHOP FILTER SYSTEM (REORGANIZED) ---
function toggleFilterLevel(level, groupId) {
  // Masquer les niveaux inférieurs si on change de branche
  if (level === 1) {
    const level2 = ['sub-tableaux', 'sub-vinyles'];
    const level3 = ['sub-v-formats', 'sub-v-series'];
    level2.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = (id === 'sub-' + groupId) ? 'block' : 'none';
    });
    level3.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
  } else if (level === 2) {
    const level3 = ['sub-v-formats', 'sub-v-series'];
    level3.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = (id === 'sub-' + groupId) ? 'block' : 'none';
    });
  }

  // Gérer l'état actif visuel
  const clickedEl = event ? event.currentTarget : null;
  if (clickedEl && clickedEl.classList.contains('s-filter')) {
    // Dans le même groupe, enlever active
    const parent = clickedEl.parentElement;
    parent.querySelectorAll('.s-filter').forEach(s => s.classList.remove('active-filter'));
    clickedEl.classList.add('active-filter');
  }
}

function resetFilters() {
  const levels = ['sub-tableaux', 'sub-vinyles', 'sub-v-formats', 'sub-v-series'];
  levels.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  // Reset active states on main pillars
  document.querySelectorAll('.shop-filter-main .s-filter').forEach(s => s.classList.remove('active-filter'));
  const allBtn = document.querySelector('.shop-filter-main .s-filter[onclick*="loadShop()"]');
  if (allBtn) allBtn.classList.add('active-filter');
}

// --- HERO PLAY/UNMUTE CONTROL (SOBRE) ---
function initHeroPlayControl() {
  const video = document.querySelector('#page-home .hero-section video');
  const playBtn = document.getElementById('hero-play-btn');
  const iconWrap = document.getElementById('play-icon-main');

  if (!video || !playBtn || !iconWrap) return;

  const ICONS = {
    play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    pause: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`
  };

  // Force initial muted state for autoplay
  video.muted = true;

  const updateUI = () => {
    iconWrap.innerHTML = video.muted ? ICONS.play : ICONS.pause;
  };

  playBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      video.muted = false;
      if (video.volume === 0) video.volume = 0.6;
    } else if (video.muted) {
      video.muted = false;
      if (video.volume === 0) video.volume = 0.6;
    } else {
      video.muted = true;
    }
    updateUI();
  });

  video.addEventListener('play', updateUI);
  video.addEventListener('pause', updateUI);
  video.addEventListener('volumechange', updateUI);
  updateUI();
}

// --- VINYLE VIDEO CONTROL (Play/Pause + Audio) ---
function initVinylVideoControl() {
  const video = document.getElementById('vinyl-video');
  const btn = document.getElementById('vinyl-video-btn');
  const iconWrap = document.getElementById('vinyl-icon-wrap');

  if (!video || !btn || !iconWrap) return;

  const ICONS = {
    play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    pause: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`,
    volume: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`
  };

  const updateUI = () => {
    // Si la vidéo est en pause, on montre 'Play'
    // Si elle joue mais est muette, on montre 'Volume/Unmute'
    // Si elle joue avec du son, on montre 'Pause'
    if (video.paused) {
      iconWrap.innerHTML = ICONS.play;
    } else if (video.muted) {
      iconWrap.innerHTML = ICONS.volume;
    } else {
      iconWrap.innerHTML = ICONS.pause;
    }
  };

  btn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      video.muted = false;
      video.volume = 0.8;
    } else if (video.muted) {
      video.muted = false;
      video.volume = 0.8;
    } else {
      video.pause();
    }
    updateUI();
  });

  video.addEventListener('play', updateUI);
  video.addEventListener('pause', updateUI);
  video.addEventListener('volumechange', updateUI);
  updateUI();
}

// --- HEADER SCROLL EFFECT ---
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// --- MOBILE MENU ---
function toggleMenu() {
  const header = document.getElementById('main-header');
  const nav = document.getElementById('nav-menu');
  const toggle = document.getElementById('mobile-toggle');

  if (nav) nav.classList.toggle('open');
  if (toggle) toggle.classList.toggle('open');
  if (header) header.classList.toggle('menu-open');
}

// --- GALLERY SYSTEM (REAL DATA - OLD WORKS PAGE) ---
const artworkData = [
  // VINYLES (1-10)
  { id: 'v1', title: 'Vinyl #01', category: 'vinyles', series: 'Blood', image: 'vinyl-1.jpg', year: '2024', size: '30cm', status: 'disponible' },
  { id: 'v2', title: 'Vinyl #02', category: 'vinyles', series: 'Ride', image: 'vinyl-2.jpg', year: '2024', size: '30cm', status: 'disponible' },
  { id: 'v3', title: 'Vinyl #03', category: 'vinyles', series: 'Arctic', image: 'vinyl-3.jpg', year: '2024', size: '30cm', status: 'vendu' },
  { id: 'v4', title: 'Vinyl #04', category: 'vinyles', series: 'Wave', image: 'vinyl-4.jpg', year: '2024', size: '30cm', status: 'disponible' },
  { id: 'v5', title: 'Vinyl #05', category: 'vinyles', series: 'Dream', image: 'vinyl-5.jpg', year: '2024', size: '30cm', status: 'disponible' },
  { id: 'v6', title: 'Vinyl #06', category: 'vinyles', series: 'Jungle', image: 'vinyl-6.jpg', year: '2024', size: '30cm', status: 'disponible' },
  { id: 'v7', title: 'Vinyl #07', category: 'vinyles', series: 'Soul', image: 'vinyl-7.jpg', year: '2024', size: '30cm', status: 'disponible' },
  { id: 'v8', title: 'Vinyl #08', category: 'vinyles', series: 'Pop', image: 'vinyl-8.jpg', year: '2024', size: '30cm', status: 'reserve' },
  { id: 'v9', title: 'Vinyl #09', category: 'vinyles', series: 'Rock', image: 'vinyl-9.jpg', year: '2024', size: '30cm', status: 'disponible' },
  { id: 'v10', title: 'Vinyl #10', category: 'vinyles', series: '808', image: 'vinyl-10.jpg', year: '2024', size: '30cm', status: 'disponible' },

  // TABLEAUX (Mockup)
  { id: 't1', title: 'Ether I', category: 'tableaux', series: 'Abstrait', image: 'https://placehold.co/600x800/222/FFF?text=Tableau+1', year: '2023', size: '80x60cm', status: 'disponible' },
  { id: 't2', title: 'Ether II', category: 'tableaux', series: 'Abstrait', image: 'https://placehold.co/600x800/333/FFF?text=Tableau+2', year: '2023', size: '100x100cm', status: 'disponible' },
];

function filterWorks(filter) {
  // Update UI chips
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  const chip = Array.from(document.querySelectorAll('.filter-chip')).find(c => c.textContent.toLowerCase() === filter || c.getAttribute('onclick').includes(filter));
  if (chip) chip.classList.add('active');

  const container = document.getElementById('gallery-container');
  if (container) {
    container.innerHTML = '';
    let filtered = [];
    if (filter === 'all') filtered = artworkData;
    else if (filter === 'tableaux' || filter === 'vinyles') filtered = artworkData.filter(w => w.category === filter);
    else filtered = artworkData.filter(w => w.series.toLowerCase() === filter.toLowerCase());

    filtered.forEach(art => {
      const card = document.createElement('article');
      card.className = 'art-card';
      card.innerHTML = `
        <div class="art-img-wrap">
          <img src="${art.image}" alt="${art.title}">
        </div>
        <div class="art-info">
          <div class="art-top">
            <span class="art-series">${art.series}</span>
            <span class="art-year">${art.year}</span>
          </div>
          <h3 class="art-title">${art.title}</h3>
          <p class="art-meta">${art.size} — ${art.category}</p>
          <div class="art-footer">
            <span class="art-status status-${art.status}">${art.status}</span>
            <button class="btn-enquire">Acquérir</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }
}

// Shop Generator (NEW)
function loadShop(filter = null) {
  currentShopFilter = filter;
  const container = document.getElementById('shop-gallery');
  if (!container) return;

  // Clear previous content
  container.innerHTML = '';

  const lang = translations[currentLang] ? currentLang : 'fr';
  const trans = translations[lang];

  const series = ['808', 'Arctic', 'Blood', 'Disco', 'Dream', 'Earth', 'F.Touch', 'Fusion', 'Pop', 'Ride', 'Rock', 'Sayan', 'Soul', 'Wave'];

  // Natural Sort Helper
  const naturalSort = (arr) => arr.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  const realVinyles = {
    '808': ['galerie-808-33t-1.jpg', 'galerie-808-33t-2.jpg', 'galerie-808-33t-3.jpg', 'galerie-808-78t-feat-desty-c.jpg'],
    'Arctic': ['galerie-arctic-33t-1.jpg', 'galerie-arctic-33t-10.jpg', 'galerie-arctic-33t-2.jpg', 'galerie-arctic-33t-3.jpg', 'galerie-arctic-33t-4.jpg', 'galerie-arctic-33t-5.jpg', 'galerie-arctic-33t-6.jpg', 'galerie-arctic-33t-7.jpg', 'galerie-arctic-33t-8.jpg', 'galerie-arctic-33t-9.jpg'],
    'Blood': ['galerie-blood-33t-1.jpg', 'galerie-blood-33t-10.jpg', 'galerie-blood-33t-11.jpg', 'galerie-blood-33t-2.jpg', 'galerie-blood-33t-3.jpg', 'galerie-blood-33t-4.jpg', 'galerie-blood-33t-5.jpg', 'galerie-blood-33t-6.jpg', 'galerie-blood-33t-7.jpg', 'galerie-blood-33t-8.jpg', 'galerie-blood-33t-9.jpg', 'galerie-blood-78t-feat-tupac.jpg'],
    'Disco': ['galerie-disco-33t-1.jpg', 'galerie-disco-33t-10.jpg', 'galerie-disco-33t-11.jpg', 'galerie-disco-33t-12.jpg', 'galerie-disco-33t-2.jpg', 'galerie-disco-33t-3.jpg', 'galerie-disco-33t-4.jpg', 'galerie-disco-33t-5.jpg', 'galerie-disco-33t-6.jpg', 'galerie-disco-33t-7.jpg', 'galerie-disco-33t-8.jpg', 'galerie-disco-33t-9.jpg', 'galerie-disco-78t-feat-blondie.jpg', 'galerie-disco-78t-feat-bootsy.jpg'],
    'Dream': ['galerie-dream-33t-1.jpg', 'galerie-dream-33t-2.jpg', 'galerie-dream-33t-3.jpg', 'galerie-dream-33t-4.jpg', 'galerie-dream-33t-5.jpg', 'galerie-dream-33t-6.jpg', 'galerie-dream-78t-feat-mac-miller.jpg', 'galerie-dream-78t-feat-neptunes.jpg'],
    'Earth': ['galerie-earth-33t-1.jpg', 'galerie-earth-33t-2.jpg', 'galerie-earth-33t-3.jpg', 'galerie-earth-33t-4.jpg', 'galerie-earth-33t-5.jpg', 'galerie-earth-33t-6.jpg', 'galerie-earth-33t-8.jpg', 'galerie-earth-33t-9.jpg', 'galerie-earth-45t-call-me.jpg', 'galerie-earth-78t-feat-cesaria.jpg', 'galerie-earth-78t-feat-marvin.jpg', 'galerie-earth-78t-feat-the-roots.jpg'],
    'F.Touch': ['galerie-f-touch-33t-1.jpg', 'galerie-f-touch-33t-2.jpg', 'galerie-f-touch-33t-3.jpg', 'galerie-f-touch-33t-4.jpg', 'galerie-f-touch-33t-5.jpg', 'galerie-f-touch-33t-6.jpg', 'galerie-f-touch-78t-feat-dj-mehdi.jpg', 'galerie-f-touch-78t-feat-oxmo.jpg'],
    'Fusion': ['galerie-fusion-33t-1.jpg', 'galerie-fusion-33t-10.jpg', 'galerie-fusion-33t-11.jpg', 'galerie-fusion-33t-12.jpg', 'galerie-fusion-33t-2.jpg', 'galerie-fusion-33t-3.jpg', 'galerie-fusion-33t-4.jpg', 'galerie-fusion-33t-5.jpg', 'galerie-fusion-33t-6.jpg', 'galerie-fusion-33t-7.jpg', 'galerie-fusion-33t-8.jpg', 'galerie-fusion-33t-9.jpg', 'galerie-fusion-45t-hit-me-off.jpg', 'galerie-fusion-78t-feat-x-men.jpg'],
    'Jungle': [],
    'Pop': ['galerie-pop-33t-1.jpg', 'galerie-pop-33t-11.jpg', 'galerie-pop-33t-12.jpg', 'galerie-pop-33t-13.jpg', 'galerie-pop-33t-14.jpg', 'galerie-pop-33t-15.jpg', 'galerie-pop-33t-16.jpg', 'galerie-pop-33t-2.jpg', 'galerie-pop-33t-3.jpg', 'galerie-pop-33t-4.jpg', 'galerie-pop-33t-5.jpg', 'galerie-pop-33t-6.jpg', 'galerie-pop-33t-7.jpg', 'galerie-pop-33t-8.jpg', 'galerie-pop-33t-9.jpg', 'galerie-pop-45t-cream.jpg', 'galerie-pop-45t-scream.jpg', 'galerie-pop-78t-feat-britney.jpg', 'galerie-pop-78t-feat-pink.jpg'],
    'Ride': ['galerie-ride-33t-1.jpg', 'galerie-ride-33t-10.jpg', 'galerie-ride-33t-11.jpg', 'galerie-ride-33t-13.jpg', 'galerie-ride-33t-15.jpg', 'galerie-ride-33t-17.jpg', 'galerie-ride-33t-2.jpg', 'galerie-ride-33t-20.jpg', 'galerie-ride-33t-21.jpg', 'galerie-ride-33t-22.jpg', 'galerie-ride-33t-23.jpg', 'galerie-ride-33t-24.jpg', 'galerie-ride-33t-25.jpg', 'galerie-ride-33t-26.jpg', 'galerie-ride-33t-4.jpg', 'galerie-ride-33t-5.jpg', 'galerie-ride-33t-6.jpg', 'galerie-ride-33t-7.jpg', 'galerie-ride-33t-8.jpg', 'galerie-ride-33t-9.jpg', 'galerie-ride-78t-feat-e-40.jpg', 'galerie-ride-78t-feat-splifton.jpg', 'galerie-ride-78t-feat-zapp.jpg'],
    'Rock': ['galerie-rock-33t-1.jpg', 'galerie-rock-33t-2.jpg', 'galerie-rock-33t-3.jpg', 'galerie-rock-78t-feat.queen.jpg'],
    'Sayan': ['galerie-sayan-33t-1.jpg', 'galerie-sayan-33t-2.jpg', 'galerie-sayan-33t-3.jpg', 'galerie-sayan-33t-4.jpg', 'galerie-sayan-33t-5.jpg', 'galerie-sayan-33t-6.jpg', 'galerie-sayan-33t-7.jpg', 'galerie-sayan-78t-feat-method-man.jpg', 'galerie-sayan-78t-feat-redman.jpg'],
    'Soul': ['galerie-soul-33t-1.jpg', 'galerie-soul-33t-2.jpg', 'galerie-soul-33t-3.jpg', 'galerie-soul-33t-4.jpg', 'galerie-soul-78t-feat-davina.jpg', 'galerie-soul-78t-feat-dinah-w.jpg', 'galerie-soul-78t-feat-wu-tang.jpg'],
    'Wave': ['galerie-wave-33t-10.jpg', 'galerie-wave-33t-11.jpg', 'galerie-wave-33t-12.jpg', 'galerie-wave-33t-13.jpg', 'galerie-wave-33t-9.jpg', 'galerie-wave-33tl-33t-1.jpg', 'galerie-wave-33tl-33t-2.jpg', 'galerie-wave-33tl-33t-3.jpg', 'galerie-wave-33tl-33t-4.jpg', 'galerie-wave-33tl-33t-5.jpg', 'galerie-wave-33tl-33t-6.jpg', 'galerie-wave-33tl-33t-7.jpg', 'galerie-wave-33tl-33t-8.jpg', 'galerie-wave-78t-feat-aaliyah.jpg']
  };

  const realTableaux = [
    'shop-100x100-infraroots-3d.jpeg', 'shop-100x100-oblivion-3d.jpeg', 'shop-100x100-sattva-3d.jpeg', 'shop-100x100-ukiyo-3d.jpg',
    'shop-100x100-sakura-3d.jpg', 'shop-120x40-ryuu-3d.jpg', 'shop-120x80-sabaism.jpeg', 'shop-18x24-lagom.jpg',
    'shop-20x40-rasasvada-3d.jpeg', 'shop-20x60-sat-nam1.jpg', 'shop-20x60-sat-nam2.jpg', 'shop-20x60-so-hum1.jpeg',
    'shop-20x60-so-hum2.jpeg', 'shop-30x30-evanescent.jpg', 'shop-30x30-kayzen-3d.jpg', 'shop-30x30-mangata-3d.jpeg',
    'shop-30x30-mizpah-3d.jpg', 'shop-30x30-terracotta-3d.jpg', 'shop-30x40-jayce.jpg', 'shop-40x40-haÏm.jpg',
    'shop-40x40-marmoris.jpg', 'shop-40x40-metanoia.jpg', 'shop-40x40-odin.jpg', 'shop-40x40-schadenfreude.jpg',
    'shop-50x50-ailyak-3d.jpeg', 'shop-50x50-ataraxia-3d.png', 'shop-50x50-nde-3D.jpg', 'shop-50x50-nitescence-3d.jpg', 'shop-50x50-orenda-3d.jpg',
    'shop-50x50-seraphic-3d.jpg', 'shop-50x50-shibui-3d.jpg', 'shop-50x50-toska-3d.png',
    'shop-50x60-sungaze.jpg', 'shop-50x70-forelsket.jpg', 'shop-50x70-noor.jpg', 'shop-50x70-yatta.jpg',
    'shop-50x70-yugen.jpg', 'shop-80x80-eunoia-3d.jpg'
  ];

  let html = '';

  const T_VINYL = trans.vinyl_title;
  const T_SIZES = [trans.size_33t, trans.size_45t, trans.size_16inch];

  const T_TAB_TITLE = trans.tableau_title;
  const T_ACRY = trans.painting_acrylic;
  const T_TAB_CAT = trans.painting_cat;
  const T_TAB_CAT_3D = trans.painting_cat_3d;

  window.processedDuos = new Set(); // Reset processed duos for this run
  let globalIndex = 0;

  series.forEach(serie => {
    let showSerie = true;
    if (filter) {
      if (filter === 'Tableaux' || filter === 'Tableaux 3D' || filter === 'Classique_Tab') showSerie = false;
      else if (series.includes(filter) && filter !== serie) showSerie = false;
    }

    if (!showSerie) return;

    const realData = realVinyles[serie];
    if (realData && realData.length > 0) {
      naturalSort(realData); // Sort alphanumeric (1, 2, 10...)
      for (let k = 0; k < realData.length; k++) {
        const filename = realData[k];
        const lowerName = filename.toLowerCase();

        // Format Filtering (Strictly based on filename content)
        if (filter === '33T' && !lowerName.includes('33t')) continue;
        if (filter === '45T' && !lowerName.includes('45t')) continue;
        if (filter === '78T' && !lowerName.includes('78t')) continue;

        // When filtering by "Vinyles" general group (if implemented), show all vinyls
        if (filter === 'Vinyles') { /* show all in loop */ }

        globalIndex++;
        const url = `images/${encodeURIComponent(filename)}`;

        let price = '380€';
        if (lowerName.includes('45t')) price = '220€';
        else if (lowerName.includes('78t')) price = '888€';

        const soldVinyles = [
          'galerie-arctic-33t-2.jpg', 'galerie-blood-33t-3.jpg', 'galerie-disco-33t-6.jpg',
          'galerie-disco-33t-11.jpg', 'galerie-ride-33t-10.jpg', 'galerie-ride-33t-11.jpg',
          'galerie-earth-33t-3.jpg', 'galerie-fusion-33t-1.jpg', 'galerie-fusion-33t-2.jpg',
          'galerie-ride-33t-4.jpg', 'galerie-ride-33t-13.jpg', 'galerie-ride-33t-20.jpg',
          'galerie-soul-33t-1.jpg', 'galerie-wave-33tl-33t-2.jpg', 'galerie-wave-33t-9.jpg',
          'galerie-808-33t-3.jpg'
        ];
        const isSold = soldVinyles.includes(filename);
        const statusLabel = isSold
          ? (translations[currentLang]?.status_sold || 'Vendue')
          : (translations[currentLang]?.status_available || 'Disponible');
        const itemTitle = filename.replace(/^galerie-/, '').replace(/\.[^.]+$/, '').replace(/-/g, ' ')
          .toLowerCase()
          .split(' ')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');

        // Detection
        const is33T = lowerName.includes('33t');
        const is45T = lowerName.includes('45t');
        const is78T = lowerName.includes('78t');

        const cleanName = filename.replace(/^galerie-/, '').replace(/\.[^.]+$/, '');
        const parts = cleanName.split('-');
        const seriesName = (serie === 'F.Touch') ? 'F. TOUCH' : serie.toUpperCase();

        let displaySize = "";
        let finalItemTitle = "";

        if (is33T) {
          displaySize = translations[currentLang]?.size_33t || "33 Tours";
          const trackNum = parts[parts.length - 1];
          finalItemTitle = `${seriesName} Series &nbsp;&bull;&nbsp; Track #${trackNum}`;
          displaySize = `33 Tours`;
        } else if (is78T || is45T) {
          const sizeKey = is78T ? 'size_78t' : 'size_45t';
          displaySize = translations[currentLang]?.[sizeKey] || (is78T ? "78 Tours" : "45 Tours");
          const prefix = is78T ? "Maxi" : "Mini";
          const formatTag = is78T ? '-78t-' : '-45t-';
          const suffixPart = cleanName.split(formatTag)[1] || "";

          if (suffixPart.includes('feat')) {
            let artist = suffixPart.replace(/feat[.-]/g, '').replace(/-/g, ' ').trim();
            artist = artist.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
            finalItemTitle = `${prefix} ${seriesName} Feat. ${artist}`;
          } else {
            let song = suffixPart.replace(/-/g, ' ').trim();
            song = song.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
            finalItemTitle = `${prefix} ${seriesName} "${song}"`;
          }
        }

        // Fallback for files without specific format tags
        if (!finalItemTitle) {
          finalItemTitle = itemTitle;
        }

        const finalItemSub = displaySize
          ? `${displaySize} &nbsp;&nbsp; <span class="shop-item-status">${statusLabel}</span>`
          : `<span class="shop-item-status">${statusLabel}</span>`;

        const finalModalSub = displaySize || "";

        const escapedTitle = finalItemTitle.replace(/'/g, "\\'").replace(/"/g, "&quot;");
        const escapedSub = finalModalSub.replace(/'/g, "\\'").replace(/"/g, "&quot;");
        const escapedPrice = price.replace(/'/g, "\\'").replace(/"/g, "&quot;");
        const escapedStatus = statusLabel.replace(/'/g, "\\'").replace(/"/g, "&quot;");

        const clickAttr = `onclick="openProductModal('${url}', '${escapedTitle}', '${escapedSub}', '${escapedPrice}', '${escapedStatus}')" style="cursor:pointer;"`;

        html += `
             <div class="shop-item">
                <div ${clickAttr}>
                     <img src="${url}" 
                          alt="${finalItemTitle}"
                          loading="lazy"
                          onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;aspect-ratio:1/1;font-size:0.7rem;color:#444;background:#111;\'>IMAGE PENDING</div>'">
                </div>
               <div class="shop-item-title">${finalItemTitle}</div>
               <div class="shop-item-meta">${finalItemSub}</div>
             </div>
           `;
      }
    }
  });

  naturalSort(realTableaux);
  realTableaux.forEach(filename => {
    const is3D = filename.toUpperCase().includes('3D');
    const typeLabel = is3D ? T_TAB_CAT_3D : T_TAB_CAT;

    // Automatic logic for display
    let show = false;
    if (!filter) show = true;
    else if (filter === 'Tableaux') show = true; // Show ALL in Tableaux category
    else if (filter === 'Classique_Tab' && !is3D) show = true; // Sub-filter: Classic only
    else if (filter === 'Tableaux 3D' && is3D) show = true; // Sub-filter: 3D only

    // Hide paintings if a vinyl format is selected
    if (['33T', '45T', '78T', 'Vinyles'].includes(filter)) show = false;
    if (series.includes(filter)) show = false;

    if (!show) return;

    const imgUrl = `images/${encodeURIComponent(filename)}`;
    const parts = filename.replace(/^shop-/, '').replace(/\.[^.]+$/, '').split('-');
    const dimsRaw = parts[0] || '';
    const namePart = parts[1] || '';
    let title = namePart.replace(/_/g, ' ').toUpperCase();
    const dims = dimsRaw.replace('X', ' x ') + ' cm';

    // --- DUO (DOUBLIQUES) GROUPING LOGIC ---
    const lowerFile = filename.toLowerCase();
    const isSoHum = lowerFile.includes('so-hum');
    const isSatNam = lowerFile.includes('sat-nam');
    const isDuo = isSoHum || isSatNam;
    const duoKey = isSoHum ? 'so-hum' : (isSatNam ? 'sat-nam' : null);

    if (isDuo) {
      if (window.processedDuos?.has(duoKey)) return;
      if (!window.processedDuos) window.processedDuos = new Set();
      window.processedDuos.add(duoKey);

      // Find the other part (1 or 2)
      const pairFile = realTableaux.find(f => f !== filename && f.toLowerCase().includes(duoKey));
      const pairUrl = pairFile ? `images/${encodeURIComponent(pairFile)}` : null;

      title = isSoHum ? 'SO HUM' : 'SAT NAM';
      const dims = "20 x 60 cm (x2)";
      const price = "700€ (Duo)";

      const soldTableaux = ['shop-120x80-sabaism.jpeg', 'shop-40x40-marmoris.jpg', 'shop-50x70-yatta.jpg'];
      const isSold = soldTableaux.includes(filename) || soldTableaux.includes(pairFile);
      const statusLabel = isSold
        ? (translations[currentLang]?.status_sold || 'Vendue')
        : (translations[currentLang]?.status_available || 'Disponible');

      const itemSub = `${dims} &nbsp;&nbsp; <span class="shop-item-status">${statusLabel}</span>`;
      const modalSub = `${T_ACRY} &nbsp;&bull;&nbsp; ${dims}`;

      const escapedTitle = title.replace(/'/g, "\\'");
      const escapedSub = modalSub.replace(/'/g, "\\'");
      const escapedPrice = price.replace(/'/g, "\\'");
      const escapedStatus = statusLabel.replace(/'/g, "\\'");

      // For duo, we pass a special format to the modal so it can show both if it wants, 
      // or just one for now but showing both in grid
      html += `
        <div class="shop-item item-duo">
          <div onclick="openProductModal('${imgUrl}', '${escapedTitle}', '${escapedSub}', '${escapedPrice}', '${escapedStatus}')" 
               style="cursor:pointer; display: flex; gap: 2px; background: #000; aspect-ratio: 1/1; margin-bottom: 1rem; overflow: hidden; border-radius: 2px;">
              <img src="${imgUrl}" alt="${title}" style="width: calc(50% - 1px) !important; height: 100% !important; object-fit: cover !important; margin-bottom: 0 !important; aspect-ratio: auto !important;">
              <img src="${pairUrl}" alt="${title}" style="width: calc(50% - 1px) !important; height: 100% !important; object-fit: cover !important; margin-bottom: 0 !important; aspect-ratio: auto !important;">
          </div>
          <div class="shop-item-title">${title}</div>
          <div class="shop-item-meta">${itemSub}</div>
        </div>
      `;
      return;
    }

    // Pricing Logic
    let price = 'Sur demande';
    if (dimsRaw === '100x100') price = '2200€';
    else if (dimsRaw === '80x80') price = '1500€';
    else if (dimsRaw === '120x80') price = '2200€';
    else if (dimsRaw === '120x40') price = '1200€';
    else if (dimsRaw === '50x70') price = '900€';
    else if (dimsRaw === '50x60') price = '800€';
    else if (dimsRaw === '50x50') price = '750€';
    else if (dimsRaw === '40x40') price = '600€';
    else if (dimsRaw === '30x30') price = '400€';
    else if (dimsRaw === '30x40') price = '450€';
    else if (dimsRaw === '18x24') price = '250€';
    else if (dimsRaw === '20x60') price = '280€';

    const soldTableaux = [
      'shop-120x80-sabaism.jpeg', 'shop-40x40-marmoris.jpg', 'shop-50x70-yatta.jpg'
    ];
    const isSold = soldTableaux.includes(filename);
    const statusLabel = isSold
      ? (translations[currentLang]?.status_sold || 'Vendue')
      : (translations[currentLang]?.status_available || 'Disponible');

    // Grid meta: Show dimensions and status only
    const itemSub = `${dims} &nbsp;&nbsp; <span class="shop-item-status">${statusLabel}</span>`;

    // Modal description: Material &bull; Size (Price passed separately)
    const modalSub = `${T_ACRY} &nbsp;&bull;&nbsp; ${dims}`;

    const escapedTitle = title.replace(/'/g, "\\'").replace(/"/g, "&quot;");
    const escapedSub = modalSub.replace(/'/g, "\\'").replace(/"/g, "&quot;");
    const escapedPrice = price.replace(/'/g, "\\'").replace(/"/g, "&quot;");
    const escapedStatus = statusLabel.replace(/'/g, "\\'").replace(/"/g, "&quot;");

    html += `
       <div class="shop-item">
         <div onclick="openProductModal('${imgUrl}', '${escapedTitle}', '${escapedSub}', '${escapedPrice}', '${escapedStatus}')" style="cursor:pointer;">
             <img src="${imgUrl}" alt="${title}">
         </div>
         <div class="shop-item-title">${title}</div>
         <div class="shop-item-meta">${itemSub}</div>
       </div>
     `;
  });

  container.innerHTML = html;

  document.querySelectorAll('.s-filter').forEach(el => {
    el.classList.remove('active-filter');
    const clickAttr = el.getAttribute('onclick') || "";
    // Match both general and sub-filters
    const match = clickAttr.includes(`'${filter}'`) || (filter === null && clickAttr.includes('loadShop()'));
    if (match) {
      el.classList.add('active-filter');
    }
  });
}

/**
 * Scroll Reveal Logic - Premium Gallery Style
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

// --- ARTIST CAROUSEL PREMIUM (Continuous + Interaction + Controls) ---
let carouselPos = 0;
let isCarouselPaused = false;
let carouselResumeTimer = null;

function initArtistCarousel() {
  const container = document.getElementById('artistCarouselContent');
  const wrapper = container?.parentElement;
  const playPauseBtn = document.getElementById('artistPlayPauseBtn');
  const playPauseIcon = document.getElementById('artistPlayPauseIcon');
  const prevBtn = document.getElementById('artistPrevBtn');
  const nextBtn = document.getElementById('artistNextBtn');

  if (!container || !wrapper) return;

  // Ralentissement pour un aspect plus galerie d'art (0.6 px/frame)
  const speed = 0.6;

  const ICONS = {
    play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    pause: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`
  };

  function step() {
    if (!isCarouselPaused) {
      carouselPos -= speed;

      const items = container.querySelectorAll('.carousel-item');
      if (items.length > 1) {
        const half = Math.floor(items.length / 2);
        const resetPoint = items[half].offsetLeft;
        if (Math.abs(carouselPos) >= resetPoint) {
          carouselPos += resetPoint;
        }
      }
      container.style.transform = `translateX(${carouselPos}px)`;
    }
    requestAnimationFrame(step);
  }

  // --- CONTROLS LOGIC ---
  if (playPauseBtn && playPauseIcon) {
    playPauseBtn.addEventListener('click', () => {
      isCarouselPaused = !isCarouselPaused;
      playPauseIcon.innerHTML = isCarouselPaused ? ICONS.play : ICONS.pause;
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      // Saut d'environ un tiers de la vue pour la navigation manuelle
      carouselPos -= 400;
      const halfWidth = container.scrollWidth / 2;
      if (Math.abs(carouselPos) >= halfWidth) carouselPos = 0;
      container.style.transform = `translateX(${carouselPos}px)`;
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      carouselPos += 400;
      if (carouselPos > 0) {
        const halfWidth = container.scrollWidth / 2;
        carouselPos = -halfWidth + 400;
      }
      container.style.transform = `translateX(${carouselPos}px)`;
    });
  }

  const items = container.querySelectorAll('.carousel-item');

  function releaseAll() {
    items.forEach(i => i.classList.remove('is-popped'));
    if (carouselResumeTimer) clearTimeout(carouselResumeTimer);
    carouselResumeTimer = setTimeout(() => {
      // Only resume if it wasn't paused by the play/pause button
      // For simplicity, we just keep it as is.
      // isCarouselPaused = false; 
      carouselResumeTimer = null;
    }, 1000); // 1s delay
  }

  items.forEach(item => {
    item.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      // Temporarily pause on click/pop
      const wasPausedManually = isCarouselPaused;
      isCarouselPaused = true;

      if (carouselResumeTimer) clearTimeout(carouselResumeTimer);
      items.forEach(i => i.classList.remove('is-popped'));
      item.classList.add('is-popped');

      // Helper to resume
      const onUp = () => {
        item.classList.remove('is-popped');
        if (!wasPausedManually) isCarouselPaused = false;
        window.removeEventListener('mouseup', onUp);
      };
      window.addEventListener('mouseup', onUp);
    });

    item.addEventListener('touchstart', (e) => {
      const wasPausedManually = isCarouselPaused;
      isCarouselPaused = true;
      if (carouselResumeTimer) clearTimeout(carouselResumeTimer);
      items.forEach(i => i.classList.remove('is-popped'));
      item.classList.add('is-popped');

      const onEnd = () => {
        item.classList.remove('is-popped');
        if (!wasPausedManually) isCarouselPaused = false;
        window.removeEventListener('touchend', onEnd);
      };
      window.addEventListener('touchend', onEnd);
    }, { passive: true });
  });

  requestAnimationFrame(step);
}



// Init
window.addEventListener('DOMContentLoaded', () => {
  updateLanguage();
  updateLangToggle();

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLang);
  }

  initHeroPlayControl();
  initVinylVideoControl();
  filterWorks('all');

  // Initialize History State
  history.replaceState({ pageId: 'home', filterParam: null }, "", "");

  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.pageId) {
      route(event.state.pageId, event.state.filterParam, false);
    }
  });

  initScrollReveal();
  initArtistCarousel();
});

/* --- MODAL LOGIC --- */
window.openProductModal = function (imgSrc, title, subtitle, price = "", status = "") {
  const modal = document.getElementById('product-modal');
  if (!modal) return;

  const mImg = document.getElementById('modal-img');
  const mTitle = document.getElementById('modal-title');
  const mSub = document.getElementById('modal-sub');
  const mStatus = document.getElementById('modal-status');

  if (mImg) mImg.src = imgSrc;
  if (mTitle) mTitle.innerHTML = title;

  // Combine subtitle and price elegantly
  let finalSub = subtitle;
  if (price) {
    finalSub += ` &nbsp;&nbsp; &mdash; &nbsp;&nbsp; <span style="font-weight:600; color:#FFF;">${price}</span>`;
  }
  if (mSub) mSub.innerHTML = finalSub;

  if (mStatus) {
    const isSold = (status === translations[currentLang].status_sold);
    mStatus.textContent = status || translations[currentLang].status_available;

    if (isSold) {
      mStatus.style.pointerEvents = 'none';
      mStatus.style.opacity = '0.5';
      mStatus.style.cursor = 'default';
    } else {
      mStatus.style.pointerEvents = 'auto';
      mStatus.style.opacity = '1';
      mStatus.style.cursor = 'pointer';
    }

    mStatus.style.color = '#fff';
    mStatus.style.borderColor = '#fff';
  }

  modal.style.display = 'flex';
}

window.closeProductModal = function () {
  const modal = document.getElementById('product-modal');
  if (modal) modal.style.display = 'none';
}

// Global Click & Key handlers
window.addEventListener('click', (event) => {
  const productModal = document.getElementById('product-modal');
  if (event.target == productModal) {
    closeProductModal();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProductModal();
  }
});