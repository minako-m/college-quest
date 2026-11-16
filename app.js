(() => {
  'use strict';

  const CFG = Object.assign({ DOC_URL: '', NAME: 'Azhar', CAT_NAME: 'Mochi' }, window.QUEST_CONFIG || {});
  const NAME = CFG.NAME || 'friend';
  const CAT = CFG.CAT_NAME || 'Mochi';
  const NS = 'http://www.w3.org/2000/svg';
  const ART = window.ART;
  const PASTELS = ['#FFB3C7', '#C9B6FF', '#9FE3C3', '#FFD3A8', '#FFE58A', '#A9D8FF', '#FFFFFF'];

  // --------------------------------------------------------------- levels
  // minLetters: how many letters/numbers of HER OWN writing a pasted section needs.
  // template: text that's already in the blank workbook. It's removed before counting,
  // so pasting an empty section doesn't pass.
  const COLLEGE_COLS = ['College', 'Financial aid?', 'Strongest majors', 'Admission requirements & exams', 'My gut score (1-5)', 'My gut score'];
  const LEVELS = [
    { id: 'about', stop: 'Cozy Cottage', section: '🌟 About Me', emoji: '🏡', art: 'cottage', points: 100, minLetters: 80,
      blurb: 'Every quest starts at home! Tell your workbook all about you.',
      template: ['About Me', 'Start with you. Colleges and careers fit best when they match what you like and are good at.',
        'Question', 'My answer', 'My favorite school subjects', 'Subjects I find hard', 'Things I do for fun (hobbies, clubs, sports)',
        "Things I'm proud of", "Problems in the world I'd like to help fix",
        'Do I like working with people, ideas, numbers, words, or things I build?',
        'Where would I like to live someday (city, country, climate)?'] },
    { id: 'usa', stop: 'Liberty Island', section: '🗽 Country 1: United States', emoji: '🗽', art: 'liberty', points: 250, minLetters: 200,
      blurb: 'Find 5 colleges in the United States and fill in every column.',
      template: ['Country 1: United States', 'City / State'].concat(COLLEGE_COLS) },
    { id: 'uk', stop: 'Clock Tower Town', section: '💂 Country 2: United Kingdom', emoji: '🕰️', art: 'clocktower', points: 250, minLetters: 200,
      blurb: 'Find 5 universities in the United Kingdom and fill in every column.',
      template: ['Country 2: United Kingdom', 'City / Province'].concat(COLLEGE_COLS) },
    { id: 'country3', stop: 'Mystery Island', section: '🌍 Country 3', emoji: '🏝️', art: 'mystery', points: 300, minLetters: 220,
      blurb: 'Pick any country you like, say why, and find 5 colleges there.',
      template: ['Country 3: [fill in]', 'Country 3', 'Country I picked:', 'Why I picked it:', 'City'].concat(COLLEGE_COLS) },
    { id: 'country4', stop: 'Faraway Island', section: '🌏 Country 4', emoji: '⛵', art: 'faraway', points: 300, minLetters: 220,
      blurb: 'One more country! Pick it, say why, and find 5 colleges.',
      template: ['Country 4: [fill in]', 'Country 4', 'Country I picked:', 'Why I picked it:', 'City'].concat(COLLEGE_COLS) },
    { id: 'noticed', stop: 'Thinking Cloud', section: '💭 What I noticed', emoji: '☁️', art: 'cloud', points: 150, minLetters: 60,
      blurb: 'Float up and think about your college research. 3 questions to answer.',
      template: ['What I noticed', "Which country's colleges felt the most exciting, and why?",
        'What surprised me about admission requirements?', 'Which question was hardest to find an answer for?'] },
    { id: 'careers', stop: 'Career Village', section: '🔍 Careers I’m curious about', emoji: '🏘️', art: 'village', points: 250, minLetters: 200,
      blurb: 'List 5 careers that sound interesting, even if they seem unrealistic!',
      template: ["Careers I'm curious about", 'Career', 'Why it interests me', 'What a typical day might look like',
        "What I'd study (major or training)", 'Does it need grad school?', 'Excitement (1-5)',
        'Research tips: Search "day in the life of a [career]" on YouTube, read the Occupational Outlook Handbook at bls.gov/ooh, and ask adults you know what they do for work.'] },
    { id: 'deeper', stop: 'Rocket Pad', section: '🚀 Dig deeper into my top 2', emoji: '🚀', art: 'rocket', points: 300, minLetters: 150,
      blurb: 'Pick your two favorite careers and blast off into the details.',
      template: ['Dig deeper into my top 2', 'Pick the two careers you rated highest and answer these for each.', 'Question',
        'Career A:', 'Career B:', 'Which of my strengths would help me succeed?', 'What skills would I still need to learn?',
        'Which college majors lead to this career?', 'Which colleges from Part 1 are strong in that major?',
        'What high school classes or activities would help?', 'Do I know anyone who does this job? Who could I ask?',
        'What questions would I ask them?'] },
    { id: 'reflection', stop: 'Lily Pond', section: '🤔 Reflection', emoji: '🪷', art: 'pond', points: 150, minLetters: 60,
      blurb: 'Sit by the pond and think about what you learned. 3 questions.',
      template: ['Reflection', 'What do my top careers have in common?',
        "Is there something I thought I'd like but now feel less sure about?",
        'What is one thing I could try this year to test a career (a club, a class, a volunteer role, an online course)?'] },
    { id: 'nextsteps', stop: 'Graduation Castle', section: '✅ My Next Steps', emoji: '🏰', art: 'castle', points: 200, minLetters: 15,
      blurb: 'Plan what comes next. Replace “[fill in!]” with a goal of your own.',
      template: ['My Next Steps', 'Pick two or three things to do before the end of this school year.',
        'Share this workbook with a parent, guardian, or older sibling and talk it over',
        'Talk to one person who works in a career I listed',
        'Join one club, class, or activity that connects to my interests',
        'Ask my school counselor what classes in 8th and 9th grade keep my options open',
        'Redo this workbook in 6 months and see what changed', '[fill in!]'] },
  ];
  const BY_ID = Object.fromEntries(LEVELS.map(l => [l.id, l]));

  // Path points: start at the bottom, zig-zag up to the castle.
  const START = { x: 200, y: 1672 };
  const WAYPOINTS = [
    { x: 140, y: 1540 }, { x: 260, y: 1390 }, { x: 140, y: 1240 }, { x: 260, y: 1090 }, { x: 140, y: 940 },
    { x: 260, y: 790 }, { x: 140, y: 640 }, { x: 260, y: 490 }, { x: 140, y: 340 }, { x: 200, y: 180 },
  ];

  const WORDS = [
    ['Major', 'The main subject you study in college'],
    ['Financial aid', 'Money that helps pay for college, including grants, scholarships, loans, and work-study'],
    ['Scholarship / grant', 'Money you don’t have to pay back'],
    ['Need-based vs. merit-based', 'Aid given because of family finances vs. aid given for grades, talent, or achievements'],
    ['GPA', 'Grade point average, a number that summarizes your grades'],
    ['SAT / ACT', 'Standardized tests used by many US colleges. Some colleges make them optional'],
    ['A-levels', 'Subject exams that UK universities commonly use for admission'],
    ['Acceptance rate', 'The share of applicants a college admits'],
    ['Tuition', 'The price a college charges for classes, not including housing and food'],
    ['Extracurriculars', 'Activities outside of class, like sports, clubs, art, or volunteering'],
  ];

  // --------------------------------------------------------------- storage (best effort)
  const KEY = 'quest.progress.v1';
  function loadProgress() {
    try {
      const p = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (p && typeof p === 'object') return { claimed: p.claimed || {}, drafts: p.drafts || {}, catAt: p.catAt || 'start' };
    } catch (e) { /* storage blocked or corrupt */ }
    return { claimed: {}, drafts: {}, catAt: 'start' };
  }
  function saveProgress() {
    try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch (e) { /* private mode */ }
  }
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});

  // claimed: id → { at, text }   drafts: id → text   catAt: level id or 'start'
  let progress = loadProgress();
  let busy = false;

  const isDone = id => !!progress.claimed[id];
  const doneCount = () => LEVELS.filter(l => isDone(l.id)).length;
  const totalPoints = () => LEVELS.reduce((s, l) => s + (isDone(l.id) ? l.points : 0), 0);

  // --------------------------------------------------------------- counting her own words
  const normalize = s => String(s || '')
    .replace(/[‘’ʼ]/g, "'")
    .replace(/[“”]/g, '"')
    .toLowerCase();

  // Pasted docs text arrives one table cell / paragraph per line (or tab-separated).
  // A line counts minus any template text it starts with: "Country I picked: Japan" → "japan".
  function ownLetters(level, text) {
    const phrases = level.template.map(p => normalize(p).trim()).sort((a, b) => b.length - a.length);
    let count = 0;
    for (let line of normalize(text).split(/[\t\r\n]+/)) {
      line = line.trim().replace(/^[^\p{L}\p{N}[]+/u, '');   // bullets, emoji, checkboxes
      let stripped = true;
      while (stripped && line) {
        stripped = false;
        const num = line.match(/^\d\.\s*/);                  // the "1." "2." row labels
        if (num) { line = line.slice(num[0].length); stripped = true; }
        for (const p of phrases) {
          if (p && line.startsWith(p)) { line = line.slice(p.length).replace(/^[^\p{L}\p{N}[]+/u, ''); stripped = true; break; }
        }
      }
      const m = line.match(/[\p{L}\p{N}]/gu);
      count += m ? m.length : 0;
    }
    return count;
  }

  // --------------------------------------------------------------- helpers
  const $ = sel => document.querySelector(sel);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  function svgEl(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs || {}) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function svgGroup(markup, attrs, parent) {
    const g = svgEl('g', attrs, parent);
    g.innerHTML = markup;
    return g;
  }
  // Positioned group whose inner part can be CSS-animated (CSS transforms would override the position).
  function placed(markup, transform, cls, style, parent) {
    const outer = svgEl('g', { transform }, parent);
    const inner = svgGroup(markup, cls ? { class: cls } : {}, outer);
    if (style) inner.setAttribute('style', style);
    return outer;
  }
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const reducedMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --------------------------------------------------------------- map building
  const layers = { bg: $('#bg'), road: $('#road'), decor: $('#decor'), stops: $('#stops'), fx: $('#fx'), cat: $('#cat-layer') };
  let roadPath, totalLen = 0;
  const stopLen = {};   // id → length along road
  const stopEls = {};   // id → <g>

  function catmullRom(p) {
    const segs = [];
    for (let i = 0; i < p.length - 1; i++) {
      const p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
      const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
      const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
      segs.push(` C${c1.x.toFixed(1)} ${c1.y.toFixed(1)} ${c2.x.toFixed(1)} ${c2.y.toFixed(1)} ${p2.x} ${p2.y}`);
    }
    return { start: `M${p[0].x} ${p[0].y}`, segs };
  }

  function buildMap() {
    // soft background blobs
    [[60, 1500, 90, '#BFEFD8'], [350, 1250, 80, '#FFD9BF'], [40, 980, 70, '#DCCBFF'], [370, 700, 90, '#C9E8FF'],
     [30, 420, 80, '#FFC8D9'], [380, 220, 70, '#FFF0AE'], [200, 1700, 160, '#BFEFD8']].forEach(([cx, cy, r, f]) =>
      svgEl('circle', { cx, cy, r, fill: f, opacity: .35 }, layers.bg));

    // clouds & sparkles in the sky
    placed(ART.decor.cloud, 'translate(62 64) scale(.9)', 'drift', '', layers.bg);
    placed(ART.decor.cloud, 'translate(340 52) scale(.7)', 'drift', 'animation-delay:-6s', layers.bg);
    placed(ART.decor.cloud, 'translate(48 820) scale(.5)', 'drift', 'animation-delay:-9s', layers.bg);
    [[110, 30, 5], [300, 110, 4], [30, 160, 4], [372, 300, 5], [24, 600, 4], [380, 900, 4], [20, 1120, 5], [384, 1480, 4]]
      .forEach(([x, y, s]) => svgGroup(ART.sparkle(x, y, s, '#FFFFFF'), {}, layers.bg));

    // the road
    const { start, segs } = catmullRom([START].concat(WAYPOINTS));
    const d = start + segs.join('');
    svgEl('path', { d, class: 'road-edge', fill: 'none', 'stroke-width': 32, 'stroke-linecap': 'round' }, layers.road);
    svgEl('path', { d, class: 'road-fill', fill: 'none', 'stroke-width': 25, 'stroke-linecap': 'round' }, layers.road);
    svgEl('path', { d, class: 'road-dots', fill: 'none', 'stroke-width': 4, 'stroke-linecap': 'round', 'stroke-dasharray': '0.1 13' }, layers.road);
    roadPath = svgEl('path', { d, fill: 'none', stroke: 'none' }, layers.road);
    totalLen = roadPath.getTotalLength();

    const measure = svgEl('path', { fill: 'none', stroke: 'none' }, layers.road);
    LEVELS.forEach((l, i) => {
      measure.setAttribute('d', start + segs.slice(0, i + 1).join(''));
      stopLen[l.id] = measure.getTotalLength();
    });
    stopLen.start = 0;
    measure.remove();

    // start sign
    const sign = svgEl('g', { class: 'start-sign', transform: `translate(${START.x + 44} ${START.y - 4})` }, layers.decor);
    sign.innerHTML = `
      <rect class="o" x="-2.5" y="-6" width="5" height="26" rx="2" fill="#FBB48A"/>
      <rect class="o" x="-26" y="-26" width="52" height="22" rx="8" fill="#FFF0AE"/>
      <text x="0" y="-10.5" text-anchor="middle" font-size="12" fill="#5B4B6B">START</text>`;
    svgGroup(ART.decor.flowers, { transform: `translate(${START.x - 52} ${START.y - 8})` }, layers.decor);

    // meadow decorations on the open side of each stop
    const kinds = ['tree', 'mushroom', 'bush', 'balloon', 'pine', 'flowers', 'tree', 'mushroom', 'bush'];
    WAYPOINTS.slice(0, 9).forEach((wp, i) => {
      const x = wp.x < 200 ? 322 : 78;
      placed(ART.decor[kinds[i]], `translate(${x} ${wp.y + 6})`, 'decor-sway', `animation-delay:${-i * 0.7}s`, layers.decor);
      const mid = (wp.y + (WAYPOINTS[i + 1] || WAYPOINTS[i]).y) / 2;
      svgGroup(ART.decor[i % 2 ? 'tulip' : 'flowers'], { transform: `translate(${i % 2 ? 30 : 370} ${mid + 10}) scale(.8)` }, layers.decor);
      svgGroup(ART.decor[i % 2 ? 'flowers' : 'tulip'], { transform: `translate(${i % 2 ? 372 : 28} ${mid - 30}) scale(.7)` }, layers.decor);
    });

    // stops
    LEVELS.forEach((l, i) => {
      const wp = WAYPOINTS[i];
      const side = wp.x < 200 ? 'left' : wp.x > 200 ? 'right' : 'top';
      const dx = side === 'left' ? -80 : side === 'right' ? 80 : 0;
      const dy = side === 'top' ? -100 : -6;
      const g = svgEl('g', {
        class: 'stop', 'data-id': l.id, tabindex: 0, role: 'button',
        'aria-label': `Stop ${i + 1}: ${l.stop} (${l.section})`,
        transform: `translate(${wp.x} ${wp.y})`,
      }, layers.stops);
      const art = svgEl('g', { transform: `translate(${dx} ${dy})` }, g);
      const inner = svgEl('g', { class: 'stop-art' }, art);
      svgEl('circle', { class: 'halo', r: 52 }, inner);
      svgGroup(ART[l.art], { class: 'stop-body' }, inner);
      const label = svgEl('text', { class: 'stop-label', x: 0, y: side === 'top' ? 66 : 64, 'text-anchor': 'middle' }, art);
      label.textContent = l.stop;
      const sx = dx + (side === 'left' ? 40 : side === 'right' ? -40 : 46);
      const sticker = svgEl('g', { transform: `translate(${sx} ${dy - 38})` }, g);
      svgGroup(ART.sticker, { class: 'sticker-pop' }, sticker);

      const marker = svgEl('g', { class: 'marker' }, g);
      svgEl('circle', { class: 'dot', r: 15 }, marker);
      svgEl('text', { x: 0, y: 4.5, 'text-anchor': 'middle' }, marker).textContent = i + 1;

      g.addEventListener('click', () => openStop(l.id));
      g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openStop(l.id); } });
      stopEls[l.id] = g;
    });

    // cat
    layers.cat.innerHTML = ART.cat;
    $('#cat').addEventListener('click', petCat);
  }

  function renderStops() {
    LEVELS.forEach((l, i) => {
      const g = stopEls[l.id];
      const done = isDone(l.id);
      g.classList.toggle('done', done);
      g.querySelector('.marker text').textContent = done ? '✓' : String(i + 1);
    });
  }

  // --------------------------------------------------------------- stats
  let shownPoints = 0;
  function renderStats(animate) {
    const ptsEl = $('#points');
    $('#stickers').textContent = `${doneCount()}/${LEVELS.length}`;
    const target = totalPoints();
    if (!animate || reducedMotion) { shownPoints = target; ptsEl.textContent = target.toLocaleString(); return; }
    const from = shownPoints, t0 = performance.now(), dur = 1100;
    for (const pill of [ptsEl.parentElement, $('#stickers').parentElement]) {
      pill.classList.remove('bump'); void pill.offsetWidth; pill.classList.add('bump');
    }
    (function tick(now) {
      const t = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - t, 3);
      shownPoints = Math.round(from + (target - from) * e);
      ptsEl.textContent = shownPoints.toLocaleString();
      if (t < 1) requestAnimationFrame(tick);
    })(t0);
  }

  // --------------------------------------------------------------- cat movement
  let catL = 0, facing = 1;
  const catG = () => $('#cat');

  function placeCat(L) {
    const p = roadPath.getPointAtLength(Math.max(0, Math.min(totalLen, L)));
    catG().setAttribute('transform', `translate(${p.x.toFixed(1)} ${(p.y - 6).toFixed(1)})`);
    catG().querySelector('.cat-flip').setAttribute('transform', facing < 0 ? 'scale(-1 1)' : '');
  }

  function catScreenY() {
    const r = catG().getBoundingClientRect();
    return window.scrollY + r.top + r.height / 2;
  }

  function scrollToCat(smooth) {
    window.scrollTo({ top: Math.max(0, catScreenY() - innerHeight * 0.55), behavior: smooth ? 'smooth' : 'auto' });
  }

  function walkTo(id) {
    const target = stopLen[id];
    return new Promise(resolve => {
      const from = catL, dist = Math.abs(target - from);
      const finish = () => {
        catL = target;
        progress.catAt = id;
        saveProgress();
        resolve();
      };
      if (dist < 1) { finish(); return; }
      const dur = reducedMotion ? 200 : Math.min(5000, 600 + dist * 2.1);
      const cat = catG();
      cat.classList.add('walking');
      const t0 = performance.now();
      const dir = target > from ? 1 : -1;
      function frame(now) {
        const t = Math.min(1, (now - t0) / dur);
        const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const L = from + (target - from) * e;
        const a = roadPath.getPointAtLength(L), b = roadPath.getPointAtLength(Math.max(0, Math.min(totalLen, L + dir * 3)));
        if (Math.abs(b.x - a.x) > 0.4) facing = b.x > a.x ? 1 : -1;
        catL = L;
        placeCat(L);
        const goal = catScreenY() - innerHeight * 0.55;
        window.scrollTo(0, window.scrollY + (goal - window.scrollY) * 0.12);
        if (t < 1) requestAnimationFrame(frame);
        else { cat.classList.remove('walking'); finish(); }
      }
      requestAnimationFrame(frame);
    });
  }

  let bubbleTimer;
  function say(text, ms) {
    const bubble = catG().querySelector('.cat-bubble');
    const t = bubble.querySelector('.bubble-text');
    t.textContent = text;
    const w = Math.max(40, t.getComputedTextLength() + 24);
    const box = bubble.querySelector('.bubble-box');
    box.setAttribute('x', -w / 2);
    box.setAttribute('width', w);
    bubble.classList.add('show');
    clearTimeout(bubbleTimer);
    if (ms !== 0) bubbleTimer = setTimeout(() => bubble.classList.remove('show'), ms || 2600);
  }

  function catMood(mood, ms) {
    const cat = catG();
    cat.classList.remove('happy', 'shake', 'thinking');
    void cat.getBoundingClientRect();
    if (mood) cat.classList.add(mood);
    if (mood && ms) setTimeout(() => cat.classList.remove(mood), ms);
  }

  function hearts(n) {
    const p = roadPath.getPointAtLength(catL);
    for (let i = 0; i < (n || 4); i++) {
      const x = p.x + (Math.random() * 40 - 20), y = p.y - 60 - Math.random() * 12;
      const h = svgEl('path', {
        d: `M${x} ${y} c-1.6 -3.4 -7 -2.4 -6 1.6 l6 5 l6 -5 c1 -4 -4.4 -5 -6 -1.6z`,
        fill: ['#F59AB8', '#B39CF0', '#FBB48A', '#86D6B1'][i % 4], class: 'heart-fx',
        style: `animation-delay:${i * 0.12}s`,
      }, layers.fx);
      setTimeout(() => h.remove(), 1800 + i * 120);
    }
  }

  const PET_LINES = ['Meow! 🐾', 'Pick a stop!', 'Purrr…', `Go ${NAME}! 💕`, 'Let’s explore!', 'Mrrp? 💕', `${NAME}, you got this!`];
  function petCat() {
    if (busy) return;
    hearts(5);
    catMood('happy', 1700);
    say(PET_LINES[Math.floor(Math.random() * PET_LINES.length)], 1800);
  }

  // --------------------------------------------------------------- confetti
  function confettiAt(el) {
    if (typeof window.confetti !== 'function' || reducedMotion) return;
    const r = el.getBoundingClientRect();
    const origin = { x: (r.left + r.width / 2) / innerWidth, y: (r.top + r.height / 2) / innerHeight };
    const opts = { colors: PASTELS, scalar: 1.1, ticks: 220, origin, disableForReducedMotion: true };
    confetti(Object.assign({}, opts, { particleCount: 90, spread: 80, startVelocity: 38 }));
    setTimeout(() => confetti(Object.assign({}, opts, { particleCount: 50, spread: 120, startVelocity: 28, shapes: ['circle'] })), 220);
  }

  function finaleConfetti() {
    if (typeof window.confetti !== 'function' || reducedMotion) return;
    const end = Date.now() + 3200;
    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 60, origin: { x: 0, y: 0.7 }, colors: PASTELS });
      confetti({ particleCount: 5, angle: 120, spread: 60, origin: { x: 1, y: 0.7 }, colors: PASTELS });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  // --------------------------------------------------------------- cards
  const overlay = $('#overlay'), card = $('#card');
  let closeResolve = null;
  function openCard(html, variant) {
    card.innerHTML = html;
    overlay.classList.toggle('center', variant === 'modal');
    if (overlay.hidden) {
      overlay.hidden = false;
      requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('open')));
    }
    card.scrollTop = 0;
    card.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', closeCard));
    const focusable = card.querySelector('[autofocus], .btn.primary, .btn, button');
    if (focusable) setTimeout(() => focusable.focus({ preventScroll: true }), 60);
    return new Promise(r => { closeResolve = r; });
  }
  function closeCard() {
    if (overlay.hidden) return;
    overlay.classList.remove('open');
    setTimeout(() => { if (!overlay.classList.contains('open')) overlay.hidden = true; }, 260);
    const r = closeResolve; closeResolve = null;
    if (r) r();
  }
  overlay.addEventListener('click', e => { if (e.target === overlay && !busy) closeCard(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !busy) closeCard(); });

  let toastTimer;
  function toast(msg, ms) {
    const t = $('#toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, ms || 3000);
  }

  const docLink = (label, cls) =>
    `<a class="btn ${cls || ''}" href="${esc(CFG.DOC_URL)}" target="_blank" rel="noopener">${label || '📝 Open workbook'}</a>`;

  const sheetHead = (emoji, title, sub) => `
    <div class="sheet-head">
      <div class="sheet-emoji">${emoji}</div>
      <div><h2>${esc(title)}</h2><p class="muted">${esc(sub)}</p></div>
      <button class="close-x" type="button" data-close aria-label="Close">✕</button>
    </div>`;

  function openStop(id) {
    if (busy) return;
    const l = BY_ID[id];
    if (isDone(id)) {
      const saved = progress.claimed[id].text || '';
      openCard(`
        ${sheetHead(l.emoji, l.stop, l.section)}
        <p>${esc(l.blurb)}</p>
        <div class="reward got">🌟 Sticker collected! You earned ${l.points} points here.</div>
        ${saved ? `<details class="saved"><summary>📜 See what you wrote</summary><pre>${esc(saved)}</pre></details>` : ''}
        <div class="actions">${docLink()}<button class="btn mint" id="walk-btn" type="button">🐾 Visit together</button></div>`, 'sheet');
      $('#walk-btn').addEventListener('click', async () => {
        closeCard();
        await walkTo(id);
        hearts(4);
        catMood('happy', 1700);
        say(`${l.stop}! 💕`, 2200);
      });
      return;
    }
    openCard(`
      ${sheetHead(l.emoji, l.stop, l.section)}
      <p>${esc(l.blurb)}</p>
      <p class="muted">Fill in this section in your workbook. When you’re done, tap <b>Level completed</b>.</p>
      <div class="reward">⭐ <span><b>${l.points} points</b> + a sticker</span></div>
      <div class="actions">${docLink()}<button class="btn primary" id="claim-btn" type="button">Level completed! 🐾</button></div>`, 'sheet');
    $('#claim-btn').addEventListener('click', () => openAnswerForm(id));
  }

  // --------------------------------------------------------------- answer form
  function openAnswerForm(id) {
    const l = BY_ID[id];
    openCard(`
      ${sheetHead(l.emoji, `Show ${CAT} your answers`, l.section)}
      <p>In your workbook, select everything you wrote in <b>${esc(l.section)}</b>, copy it, and paste it here.</p>
      <textarea id="answers" class="answer-box" rows="8" placeholder="Paste your answers here…" autofocus></textarea>
      <div class="progress-wrap">
        <div class="progress"><div id="meter-bar"></div></div>
        <p class="progress-label" id="meter-label"></p>
      </div>
      <p id="form-msg" class="warn" hidden></p>
      <div class="actions">
        <button class="btn" id="back-btn" type="button">← Back</button>
        <button class="btn primary" id="check-btn" type="button">Check answers 🐾</button>
      </div>`, 'sheet');

    const box = $('#answers'), bar = $('#meter-bar'), label = $('#meter-label'), msg = $('#form-msg');
    box.value = progress.drafts[id] || '';
    const update = () => {
      const n = ownLetters(l, box.value);
      const pct = Math.min(100, Math.round((n / l.minLetters) * 100));
      bar.style.width = pct + '%';
      bar.classList.toggle('full', pct >= 100);
      label.textContent = pct >= 100
        ? '✨ Looks complete! (The questions themselves don’t count, only your answers.)'
        : `${pct}% of the way there (the questions themselves don’t count, only your answers)`;
      return n;
    };
    update();
    let draftTimer;
    box.addEventListener('input', () => {
      update();
      msg.hidden = true;
      clearTimeout(draftTimer);
      draftTimer = setTimeout(() => { progress.drafts[id] = box.value; saveProgress(); }, 400);
    });
    $('#back-btn').addEventListener('click', () => openStop(id));
    $('#check-btn').addEventListener('click', () => {
      progress.drafts[id] = box.value;
      saveProgress();
      const n = update();
      if (n >= l.minLetters) { completeLevel(id, box.value); return; }
      catMood('shake', 1000);
      say('Hmm, not yet!', 2400);
      const short = l.minLetters - n;
      msg.hidden = false;
      msg.innerHTML = n === 0
        ? `🐾 ${esc(CAT)} doesn’t see any answers yet. Paste what you wrote in this section of your workbook.`
        : `🐾 ${esc(CAT)} thinks some answers are still missing. About <b>${short} more letter${short === 1 ? '' : 's'}</b> to go! Check that every blank is filled (writing “?” is okay for one you don’t know yet).`;
    });
  }

  // --------------------------------------------------------------- completing a level
  async function completeLevel(id, text) {
    if (busy) return;
    busy = true;
    const l = BY_ID[id];
    progress.claimed[id] = { at: new Date().toISOString(), text };
    delete progress.drafts[id];
    saveProgress();
    closeCard();
    await sleep(280);

    say('Let’s go! 🐾', 1500);
    await walkTo(id);
    const g = stopEls[id];
    g.classList.add('just-done');
    setTimeout(() => g.classList.remove('just-done'), 1400);
    renderStops();
    renderStats(true);
    confettiAt(g.querySelector('.marker'));
    hearts(6);
    catMood('happy', 1800);
    say('We did it! 🎉', 2600);
    await sleep(900);
    busy = false;
    await openCard(`
      <div class="big-emoji">${l.emoji}</div>
      <h2>Sticker unlocked!</h2>
      <p>${esc(NAME)} and ${esc(CAT)} made it to <b>${esc(l.stop)}</b>!</p>
      <div class="plus-points">+${l.points} ⭐</div>
      <p class="muted">${doneCount()} of ${LEVELS.length} stickers in your sticker book 🎀</p>
      <div class="actions"><button class="btn primary" data-close type="button">Yay! 🎉</button></div>`, 'modal');
    if (doneCount() === LEVELS.length) finale();
  }

  async function finale() {
    await sleep(400);
    finaleConfetti();
    hearts(8);
    catMood('happy', 2000);
    say('Best quest ever! 🎓', 3500);
    await openCard(`
      <div class="big-emoji">🎓</div>
      <h2>Quest complete!</h2>
      <p>${esc(NAME)}, you explored colleges in <b>4 countries</b>, dreamed up <b>5 careers</b>, and made a plan for what comes next. ${esc(CAT)} is so proud of you! 💕</p>
      <div class="plus-points">${totalPoints().toLocaleString()} ⭐ total</div>
      <p class="hint">Tip from the workbook: redo it in 6 months and see what changed!</p>
      <div class="actions"><button class="btn primary" data-close type="button">Hooray! 🎉</button></div>`, 'modal');
  }

  // --------------------------------------------------------------- sticker book
  function scrollToStop(id) {
    const r = stopEls[id].getBoundingClientRect();
    window.scrollTo({ top: Math.max(0, window.scrollY + r.top + r.height / 2 - innerHeight * 0.5), behavior: 'smooth' });
    const g = stopEls[id];
    g.classList.remove('just-done'); void g.getBoundingClientRect(); g.classList.add('just-done');
    setTimeout(() => g.classList.remove('just-done'), 1400);
  }

  function openStickerBook() {
    if (busy) return;
    const fmt = iso => { try { return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }); } catch (e) { return ''; } };
    const all = doneCount() === LEVELS.length;
    const items = LEVELS.map(l => {
      const c = progress.claimed[l.id];
      return c
        ? `<button class="stk got" type="button" data-stop="${l.id}" aria-label="${esc(l.stop)} sticker, collected">
             <span class="stk-face">${l.emoji}</span><span class="stk-name">${esc(l.stop)}</span>
             <span class="stk-meta">${fmt(c.at)} · ${l.points} ⭐</span></button>`
        : `<button class="stk locked" type="button" data-stop="${l.id}" aria-label="${esc(l.stop)} sticker, not collected yet">
             <span class="stk-face">?</span><span class="stk-name">${esc(l.stop)}</span>
             <span class="stk-meta">${l.points} ⭐</span></button>`;
    });
    items.push(all
      ? `<button class="stk got special" type="button" data-finale aria-label="Quest Champion sticker, collected">
           <span class="stk-face">🎓</span><span class="stk-name">Quest Champion</span><span class="stk-meta">All 10 stops!</span></button>`
      : `<button class="stk locked special" type="button" aria-label="Secret sticker: collect all 10 to unlock" disabled>
           <span class="stk-face">★</span><span class="stk-name">Secret sticker</span><span class="stk-meta">Collect all 10</span></button>`);
    openCard(`
      ${sheetHead('🎀', `${NAME}’s sticker book`, 'One sticker for every stop')}
      <p class="book-summary">${doneCount()} of ${LEVELS.length} collected · ${totalPoints().toLocaleString()} ⭐</p>
      <div class="sticker-grid">${items.join('')}</div>
      <p class="hint" style="text-align:center">Tap a sticker to visit its stop on the map.</p>`, 'sheet');
    card.querySelectorAll('[data-stop]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.stop;
      closeCard();
      setTimeout(() => {
        scrollToStop(id);
        if (!isDone(id)) setTimeout(() => openStop(id), 700);
      }, 280);
    }));
    const champ = card.querySelector('[data-finale]');
    if (champ) champ.addEventListener('click', () => { closeCard(); setTimeout(finale, 280); });
  }

  // --------------------------------------------------------------- start over
  function confirmReset() {
    if (busy) return;
    openCard(`
      <div class="big-emoji">🙀</div>
      <h2>Start over?</h2>
      <p>This erases all your points, stickers, and saved answers on this website, and you and ${esc(CAT)} go back to the start.</p>
      <p class="muted">Your Google Doc won’t be changed.</p>
      <div class="actions">
        <button class="btn" data-close type="button">Keep my progress</button>
        <button class="btn primary" id="reset-yes" type="button">Yes, start over</button>
      </div>`, 'modal');
    $('#reset-yes').addEventListener('click', () => {
      progress = { claimed: {}, drafts: {}, catAt: 'start' };
      saveProgress();
      closeCard();
      facing = 1;
      catL = 0;
      placeCat(0);
      renderStops();
      renderStats(false);
      setTimeout(() => { scrollToCat(true); say('A fresh start! 🌱', 3000); }, 300);
      toast('All progress cleared ✨');
    });
  }

  // --------------------------------------------------------------- start
  function init() {
    $('#open-doc').href = CFG.DOC_URL || '#';
    $('#find-cat').textContent = '🐱 Find us';
    $('#brand-name').textContent = NAME;
    document.title = `${NAME}’s College Quest`;
    $('#find-cat').addEventListener('click', () => { scrollToCat(true); setTimeout(petCat, 450); });
    $('#reset-btn').addEventListener('click', confirmReset);
    $('#sticker-pill').addEventListener('click', openStickerBook);
    $('#words-btn').addEventListener('click', () => openCard(`
      ${sheetHead('📖', 'Words to know', 'From your workbook')}
      <ul class="words">${WORDS.map(([w, m]) => `<li><b>${esc(w)}</b>${esc(m)}</li>`).join('')}</ul>`, 'sheet'));

    buildMap();
    renderStops();
    renderStats(false);

    const at = progress.catAt in stopLen ? progress.catAt : 'start';
    catL = stopLen[at];
    placeCat(catL);
    requestAnimationFrame(() => scrollToCat(false));
    if (doneCount() === 0) setTimeout(() => say(`Hi ${NAME}! I’m ${CAT} 🐾`, 3400), 700);
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(init, init);
  else window.addEventListener('load', init);
})();
