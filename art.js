// Hand-drawn SVG art for College Quest. Each piece is drawn around (0, 0).
// class="o" gives the soft plum outline (see style.css).
(function () {
  const C = {
    pink: '#FFC8D9', pinkD: '#F59AB8',
    lav: '#DCCBFF', lavL: '#EEE6FF', lavD: '#B39CF0',
    mint: '#BFEFD8', mintD: '#86D6B1', teal: '#9EE6CC',
    peach: '#FFD9BF', peachD: '#FBB48A',
    butter: '#FFF0AE', butterD: '#F6D263',
    sky: '#C9E8FF', skyD: '#8EC8F0',
    ink: '#5B4B6B', cream: '#FFF9F2', white: '#FFFFFF',
  };

  const sparkle = (x, y, s, fill) =>
    `<path d="M${x} ${y - s} Q${x} ${y} ${x + s} ${y} Q${x} ${y} ${x} ${y + s} Q${x} ${y} ${x - s} ${y} Q${x} ${y} ${x} ${y - s}Z" fill="${fill || C.butterD}"/>`;

  const flower = (x, y, petal, r) => {
    r = r || 3.4;
    const pts = [[0, -1.4], [1.33, -0.43], [0.82, 1.13], [-0.82, 1.13], [-1.33, -0.43]];
    return `<g>${pts.map(([a, b]) => `<circle cx="${x + a * r}" cy="${y + b * r}" r="${r}" fill="${petal}"/>`).join('')}<circle cx="${x}" cy="${y}" r="${r * 0.75}" fill="${C.butterD}"/></g>`;
  };

  const ground = (fill, rx) => `<ellipse cx="0" cy="42" rx="${rx || 44}" ry="7" fill="${fill || C.mintD}" opacity=".5"/>`;

  const ART = {};

  ART.cottage = `
    ${ground()}
    <rect class="o" x="14" y="-34" width="10" height="18" rx="1.5" fill="${C.peachD}"/>
    <circle cx="21" cy="-40" r="4" fill="${C.white}" opacity=".9"/><circle cx="26" cy="-47" r="3" fill="${C.white}" opacity=".8"/>
    <rect class="o" x="-30" y="-6" width="60" height="46" rx="4" fill="${C.peach}"/>
    <path class="o" d="M-38 -4 L0 -36 L38 -4 Z" fill="${C.pink}"/>
    <path d="M0 -15 c-1.6 -3.4 -7 -2.4 -6 1.6 l6 5 l6 -5 c1 -4 -4.4 -5 -6 -1.6z" fill="${C.pinkD}"/>
    <path class="o" d="M-9 40 V22 a9 9 0 0 1 18 0 V40 Z" fill="${C.lav}"/>
    <circle cx="5" cy="31" r="1.6" fill="${C.ink}"/>
    <rect class="o" x="-25" y="5" width="12" height="12" rx="2" fill="${C.butter}"/>
    <rect class="o" x="13" y="5" width="12" height="12" rx="2" fill="${C.butter}"/>
    <path d="M-19 5 v12 M-25 11 h12 M19 5 v12 M13 11 h12" stroke="${C.ink}" stroke-width="1.5"/>
    ${flower(-36, 36, C.pinkD, 2.6)}${flower(36, 37, C.lavD, 2.6)}`;

  ART.liberty = `
    <ellipse cx="0" cy="40" rx="46" ry="9" fill="${C.sky}"/>
    <path d="M-42 44 q4 -3 8 0 t8 0 M26 45 q4 -3 8 0 t8 0" stroke="${C.skyD}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse class="o" cx="0" cy="37" rx="32" ry="7" fill="${C.mint}"/>
    <path class="o" d="M-13 36 L-10 18 L10 18 L13 36 Z" fill="${C.lav}"/>
    <rect class="o" x="-15" y="12" width="30" height="7" rx="2" fill="${C.lavL}"/>
    <path class="o" d="M-10 12 C-11 -4 -8 -13 0 -13 C8 -13 11 -4 10 12 Z" fill="${C.teal}"/>
    <path class="o" d="M3 -6 L11 -29 L16 -27 L9 -3 Z" fill="${C.teal}"/>
    <path class="o" d="M13.5 -45 C8.5 -40 10 -35 13.5 -35 C17 -35 18.5 -40 13.5 -45Z" fill="${C.peachD}"/>
    <rect class="o" x="10" y="-36" width="7" height="7" rx="1.5" fill="${C.butterD}"/>
    <path class="o" d="M-7 -22 L-10 -30 L-4 -25 L0 -33 L4 -25 L10 -30 L7 -22 Z" fill="${C.teal}"/>
    <circle class="o" cx="0" cy="-18" r="6" fill="${C.teal}"/>
    <rect class="o" x="-15" y="-4" width="7" height="11" rx="1.5" fill="${C.mint}"/>
    ${sparkle(-30, -24, 5)}${sparkle(30, 2, 4, C.pinkD)}`;

  ART.clocktower = `
    ${ground()}
    <rect class="o" x="-41" y="14" width="21" height="26" rx="2" fill="${C.pink}"/>
    <path class="o" d="M-44 15 L-30.5 1 L-17 15Z" fill="${C.lavD}"/>
    <rect class="o" x="-35" y="22" width="9" height="8" rx="1.5" fill="${C.butter}"/>
    <rect class="o" x="20" y="18" width="21" height="22" rx="2" fill="${C.sky}"/>
    <path class="o" d="M17 19 L30.5 5 L44 19Z" fill="${C.peachD}"/>
    <rect class="o" x="26" y="25" width="9" height="8" rx="1.5" fill="${C.butter}"/>
    <rect class="o" x="-11" y="-18" width="22" height="58" rx="2" fill="${C.butter}"/>
    <rect class="o" x="-13.5" y="-25" width="27" height="8" rx="2" fill="${C.butterD}"/>
    <path class="o" d="M-12 -25 L0 -50 L12 -25Z" fill="${C.lav}"/>
    <circle class="o" cx="0" cy="-6" r="8" fill="${C.white}"/>
    <path d="M0 -6 V-11 M0 -6 L4 -4" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/>
    <rect class="o" x="-4" y="9" width="8" height="10" rx="4" fill="${C.sky}"/>
    <path class="o" d="M-5 40 V31 a5 5 0 0 1 10 0 V40Z" fill="${C.pinkD}"/>`;

  ART.mystery = `
    <ellipse cx="0" cy="37" rx="48" ry="11" fill="${C.sky}"/>
    <path d="M-42 44 q5 -3 10 0 t10 0 M22 46 q5 -3 10 0 t10 0" stroke="${C.skyD}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path class="o" d="M-31 38 C-27 24 27 24 31 38 Z" fill="${C.butter}"/>
    <path class="o" d="M-9 32 C-10 16 -6 4 0 -6 L5 -4 C0 6 -3 18 -2 32 Z" fill="${C.peach}"/>
    <path class="o" d="M2 -6 C-10 -16 -22 -12 -26 -4 C-16 -10 -8 -8 2 -6Z" fill="${C.mintD}"/>
    <path class="o" d="M2 -6 C12 -18 26 -14 28 -4 C18 -10 10 -9 2 -6Z" fill="${C.mintD}"/>
    <path class="o" d="M2 -6 C-6 -22 -16 -24 -20 -20 C-12 -18 -6 -12 2 -6Z" fill="${C.mint}"/>
    <path class="o" d="M2 -6 C-2 -20 6 -28 14 -28 C8 -20 6 -14 2 -6Z" fill="${C.mint}"/>
    <circle class="o" cx="-1" cy="-3" r="3" fill="${C.peachD}"/><circle class="o" cx="5" cy="-2" r="3" fill="${C.peachD}"/>
    <circle class="o" cx="27" cy="-30" r="13" fill="${C.pink}"/>
    <path class="o" d="M20 -20 L17 -13 L25 -18Z" fill="${C.pink}"/>
    <text x="27" y="-24.5" text-anchor="middle" font-family="Fredoka, sans-serif" font-weight="700" font-size="17" fill="${C.ink}">?</text>
    ${sparkle(-34, -28, 5)}`;

  ART.faraway = `
    <circle class="o" cx="-27" cy="-27" r="11" fill="${C.butter}"/>
    <path d="M-27 -44 v4 M-27 -14 v4 M-44 -27 h4 M-14 -27 h4 M-39 -39 l3 3 M-15 -15 l3 3 M-39 -15 l3 -3 M-15 -39 l3 -3" stroke="${C.butterD}" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="0" cy="38" rx="48" ry="10" fill="${C.sky}"/>
    <path class="o" d="M-42 38 C-36 12 -18 6 -8 20 C-1 8 14 10 20 38Z" fill="${C.mint}"/>
    <path d="M-30 26 q3 -2 6 0 M-2 28 q3 -2 6 0" stroke="${C.mintD}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect class="o" x="-14" y="24" width="14" height="12" rx="1.5" fill="${C.peach}"/>
    <path class="o" d="M-17 25 L-7 15 L3 25Z" fill="${C.peachD}"/>
    <path class="o" d="M23 33 L45 33 L41 40 L27 40Z" fill="${C.pinkD}"/>
    <path class="o" d="M33 31 L33 9 L45 31Z" fill="${C.white}"/>
    <path class="o" d="M31 31 L31 14 L23 31Z" fill="${C.lav}"/>
    ${sparkle(36, -22, 4, C.pinkD)}`;

  ART.cloud = `
    <path class="o" d="M-30 18 C-45 18 -45 -3 -30 -3 C-30 -19 -9 -23 -3 -12 C3 -27 27 -25 27 -7 C41 -7 43 18 28 18 Z" fill="${C.lav}"/>
    <path d="M-24 4 C-22 -6 -14 -10 -8 -6" stroke="${C.white}" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>
    <ellipse cx="-8" cy="4" rx="2.4" ry="3" fill="${C.ink}"/><ellipse cx="8" cy="4" rx="2.4" ry="3" fill="${C.ink}"/>
    <circle cx="-7.3" cy="2.8" r=".9" fill="${C.white}"/><circle cx="8.7" cy="2.8" r=".9" fill="${C.white}"/>
    <path d="M-3 9 q3 3 6 0" stroke="${C.ink}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <ellipse cx="-14" cy="9" rx="3.5" ry="2" fill="${C.pinkD}" opacity=".6"/><ellipse cx="14" cy="9" rx="3.5" ry="2" fill="${C.pinkD}" opacity=".6"/>
    <circle class="o" cx="-12" cy="28" r="5" fill="${C.white}"/><circle class="o" cx="-20" cy="37" r="3" fill="${C.white}"/>
    ${sparkle(35, -24, 6)}${sparkle(-38, -18, 4, C.pinkD)}${sparkle(20, 34, 4, C.skyD)}`;

  ART.village = `
    ${ground()}
    <rect class="o" x="-43" y="6" width="27" height="34" rx="2" fill="${C.peach}"/>
    <path class="o" d="M-46 7 L-29.5 -8 L-13 7Z" fill="${C.pinkD}"/>
    <path class="o" d="M-29.5 -8 V-21" fill="none"/>
    <path class="o" d="M-29.5 -21 L-20 -18 L-29.5 -15Z" fill="${C.butter}"/>
    <rect class="o" x="-37" y="13" width="7" height="7" rx="1" fill="${C.sky}"/><rect class="o" x="-28" y="13" width="7" height="7" rx="1" fill="${C.sky}"/>
    <path class="o" d="M-33 40 V31 a3.5 3.5 0 0 1 7 0 V40Z" fill="${C.lav}"/>
    <rect class="o" x="-12" y="-22" width="24" height="62" rx="3" fill="${C.sky}"/>
    <g fill="${C.butter}" class="o" stroke-width="1.8">
      <rect x="-7" y="-15" width="5" height="7" rx="1"/><rect x="2" y="-15" width="5" height="7" rx="1"/>
      <rect x="-7" y="-2" width="5" height="7" rx="1"/><rect x="2" y="-2" width="5" height="7" rx="1"/>
      <rect x="-7" y="11" width="5" height="7" rx="1"/><rect x="2" y="11" width="5" height="7" rx="1"/>
    </g>
    <rect class="o" x="-4" y="28" width="8" height="12" rx="1.5" fill="${C.lavD}"/>
    <rect class="o" x="16" y="3" width="27" height="37" rx="3" fill="${C.mint}"/>
    <path d="M29.5 10 v11 M24 15.5 h11" stroke="${C.pinkD}" stroke-width="4.5" stroke-linecap="round"/>
    <path class="o" d="M25 40 V31 h9 V40Z" fill="${C.white}"/>
    ${sparkle(4, -32, 5)}`;

  ART.rocket = `
    <rect class="o" x="-27" y="34" width="54" height="7" rx="3.5" fill="${C.lav}"/>
    <path class="o" d="M-8 22 C-9 30 -3 34 0 41 C3 34 9 30 8 22Z" fill="${C.peachD}"/>
    <path d="M-4 23 C-4 28 -1 31 0 35 C1 31 4 28 4 23Z" fill="${C.butter}"/>
    <path class="o" d="M-10 4 L-23 22 L-10 20Z" fill="${C.lavD}"/>
    <path class="o" d="M10 4 L23 22 L10 20Z" fill="${C.lavD}"/>
    <path class="o" d="M0 -47 C15 -35 15 -6 10 21 L-10 21 C-15 -6 -15 -35 0 -47Z" fill="${C.white}"/>
    <path class="o" d="M0 -47 C7 -41 10 -35 11.5 -29 L-11.5 -29 C-10 -35 -7 -41 0 -47Z" fill="${C.pink}"/>
    <circle class="o" cx="0" cy="-11" r="7.5" fill="${C.sky}"/>
    <path d="M-3 -14 a4 4 0 0 1 4 -2" stroke="${C.white}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path class="o" d="M-11.5 9 H11.5" fill="none"/>
    ${sparkle(-32, -28, 5)}${sparkle(30, -36, 4, C.pinkD)}${sparkle(34, 0, 3.5, C.skyD)}${sparkle(-34, 6, 3, C.lavD)}`;

  ART.pond = `
    <path d="M-36 14 V-14 M-30 14 V-22 M-24 14 V-10" stroke="${C.mintD}" stroke-width="2.5" stroke-linecap="round"/>
    <rect class="o" x="-38.5" y="-22" width="5" height="11" rx="2.5" fill="${C.peachD}"/>
    <rect class="o" x="-32.5" y="-30" width="5" height="11" rx="2.5" fill="${C.peachD}"/>
    <ellipse class="o" cx="0" cy="22" rx="45" ry="20" fill="${C.sky}"/>
    <path d="M-30 30 q5 -3 10 0 M18 34 q5 -3 10 0 M-8 38 q4 -2 8 0" stroke="${C.skyD}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path class="o" d="M-16 22 L-7 18 A12 7 0 1 1 -9 26 Z" fill="${C.mintD}" transform="translate(-6 2)"/>
    <ellipse class="o" cx="10" cy="20" rx="17" ry="8" fill="${C.mintD}"/>
    <path class="o" d="M10 16 C1 16 -5 9 -5 2 C3 2 8 9 10 16Z" fill="${C.pink}"/>
    <path class="o" d="M10 16 C19 16 25 9 25 2 C17 2 12 9 10 16Z" fill="${C.pink}"/>
    <path class="o" d="M10 16 C3 9 3 0 10 -7 C17 0 17 9 10 16Z" fill="${C.pinkD}"/>
    <path d="M24 -18 c-1.6 -3.4 -7 -2.4 -6 1.6 l6 5 l6 -5 c1 -4 -4.4 -5 -6 -1.6z" fill="${C.pinkD}" opacity=".8"/>
    ${sparkle(34, -2, 4)}`;

  ART.castle = `
    ${ground(C.mintD, 50)}
    <rect class="o" x="-30" y="0" width="60" height="40" rx="2" fill="${C.lav}"/>
    <path class="o" d="M-30 0 V-7 H-22 V0 M-14 0 V-7 H-6 V0 M6 0 V-7 H14 V0 M22 0 V-7 H30 V0" fill="${C.lav}"/>
    <rect class="o" x="-46" y="-12" width="18" height="52" rx="2" fill="${C.lavL}"/>
    <rect class="o" x="28" y="-12" width="18" height="52" rx="2" fill="${C.lavL}"/>
    <path class="o" d="M-49 -12 L-37 -36 L-25 -12Z" fill="${C.pink}"/>
    <path class="o" d="M25 -12 L37 -36 L49 -12Z" fill="${C.pink}"/>
    <path class="o" d="M-37 -36 V-46 M37 -36 V-46" fill="none" stroke-width="2"/>
    <path class="o" d="M-37 -46 L-29 -43 L-37 -40Z M37 -46 L45 -43 L37 -40Z" fill="${C.mint}" stroke-width="2"/>
    <rect class="o" x="-10" y="-22" width="20" height="24" rx="1.5" fill="${C.lavL}"/>
    <path class="o" d="M-14 -22 L0 -46 L14 -22Z" fill="${C.pinkD}"/>
    <path class="o" d="M0 -58 L13 -52.5 L0 -47 L-13 -52.5Z" fill="${C.ink}"/>
    <path d="M10 -52 V-44" stroke="${C.butterD}" stroke-width="2.2" stroke-linecap="round"/><circle cx="10" cy="-43" r="2.4" fill="${C.butterD}"/>
    <path class="o" d="M-9 40 V25 a9 9 0 0 1 18 0 V40Z" fill="${C.butter}"/>
    <rect class="o" x="-41" y="2" width="8" height="10" rx="4" fill="${C.sky}"/>
    <rect class="o" x="33" y="2" width="8" height="10" rx="4" fill="${C.sky}"/>
    <circle class="o" cx="0" cy="-10" r="4.5" fill="${C.sky}"/>
    <path d="M-20 14 c-1.2 -2.5 -5 -1.8 -4.4 1.2 l4.4 3.6 l4.4 -3.6 c.6 -3 -3.2 -3.7 -4.4 -1.2z M20 14 c-1.2 -2.5 -5 -1.8 -4.4 1.2 l4.4 3.6 l4.4 -3.6 c.6 -3 -3.2 -3.7 -4.4 -1.2z" fill="${C.pinkD}"/>
    ${sparkle(-52, -50, 5)}${sparkle(52, -54, 4, C.pinkD)}`;

  // Decorations for the meadow
  ART.decor = {
    tree: `<rect class="o" x="-4" y="4" width="8" height="18" rx="3" fill="${C.peachD}"/><circle class="o" cx="0" cy="-8" r="17" fill="${C.mint}"/><circle cx="-6" cy="-12" r="2.5" fill="${C.pinkD}"/><circle cx="7" cy="-5" r="2.5" fill="${C.pinkD}"/><circle cx="4" cy="-17" r="2.5" fill="${C.pinkD}"/><path d="M-10 -14 a10 10 0 0 1 6 -6" stroke="${C.white}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".7"/>`,
    pine: `<rect class="o" x="-3.5" y="10" width="7" height="12" rx="2.5" fill="${C.peachD}"/><path class="o" d="M-16 12 L0 -8 L16 12Z" fill="${C.mintD}"/><path class="o" d="M-13 0 L0 -20 L13 0Z" fill="${C.mint}"/>${sparkle(0, -24, 4)}`,
    mushroom: `<rect class="o" x="-6" y="0" width="12" height="16" rx="5" fill="${C.cream}"/><path class="o" d="M-18 3 C-18 -18 18 -18 18 3 Z" fill="${C.pink}"/><circle cx="-7" cy="-6" r="3" fill="${C.white}"/><circle cx="6" cy="-9" r="2.5" fill="${C.white}"/><circle cx="2" cy="-1" r="2" fill="${C.white}"/>`,
    bush: `<circle class="o" cx="-10" cy="4" r="11" fill="${C.mintD}"/><circle class="o" cx="10" cy="4" r="11" fill="${C.mintD}"/><circle class="o" cx="0" cy="-4" r="12" fill="${C.mint}"/>${flower(-8, -2, C.pinkD, 2.4)}${flower(8, 2, C.lavD, 2.4)}${flower(1, -10, C.white, 2.2)}`,
    balloon: `<path d="M0 10 C-4 20 4 26 0 34" stroke="${C.ink}" stroke-width="1.5" fill="none"/><path class="o" d="M0 10 C-22 -4 -14 -26 0 -14 C14 -26 22 -4 0 10Z" fill="${C.pink}"/><path d="M-9 -14 a6 6 0 0 1 5 -3" stroke="${C.white}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    flowers: `<path d="M-8 18 V4 M0 18 V-2 M8 18 V6" stroke="${C.mintD}" stroke-width="2.5" stroke-linecap="round"/>${flower(-8, 2, C.pink)}${flower(0, -4, C.lav)}${flower(8, 4, C.peach)}`,
    cloud: `<path class="o" d="M-24 10 C-36 10 -36 -6 -24 -6 C-22 -18 -6 -20 -2 -10 C4 -20 22 -18 22 -6 C34 -6 34 10 22 10 Z" fill="${C.white}"/>`,
    tulip: `<path d="M0 18 V0" stroke="${C.mintD}" stroke-width="2.5" stroke-linecap="round"/><path d="M0 12 C-6 10 -8 6 -8 4 C-4 5 -1 8 0 12Z" fill="${C.mintD}"/><path class="o" d="M-6 -10 L-3 -5 L0 -11 L3 -5 L6 -10 V-2 A6 6 0 0 1 -6 -2Z" fill="${C.pinkD}" stroke-width="2"/>`,
  };

  ART.sparkle = sparkle;

  // Sticker badge
  ART.sticker = (() => {
    const pts = [];
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? 6.5 : 14, a = -Math.PI / 2 + (i * Math.PI) / 5;
      pts.push((r * Math.cos(a)).toFixed(1) + ' ' + (r * Math.sin(a)).toFixed(1));
    }
    return `<circle r="17" fill="${C.white}" class="o" stroke-width="2"/><path class="o" stroke-width="2" d="M${pts.join(' L')}Z" fill="${C.butterD}"/><circle cx="-3" cy="-4" r="1.6" fill="${C.white}"/>`;
  })();

  // The cat 🐱 (feet at 0,0, facing right)
  ART.cat = `
  <g id="cat">
    <g class="cat-flip">
      <g class="girl" transform="translate(-42 -2)">
        <g class="girl-bob">
          <g stroke="#5B4B6B" stroke-width="5">
            <circle cx="0" cy="-75" r="11"/><circle cx="-10" cy="-72" r="10"/><circle cx="10" cy="-72" r="10"/>
            <circle cx="-15" cy="-62" r="9"/><circle cx="15" cy="-62" r="9"/>
            <circle cx="-15" cy="-51" r="8"/><circle cx="15" cy="-51" r="8"/>
            <circle cx="-12" cy="-42" r="6.5"/><circle cx="12" cy="-42" r="6.5"/>
          </g>
          <g fill="#4A2C21">
            <circle cx="0" cy="-75" r="11"/><circle cx="-10" cy="-72" r="10"/><circle cx="10" cy="-72" r="10"/>
            <circle cx="-15" cy="-62" r="9"/><circle cx="15" cy="-62" r="9"/>
            <circle cx="-15" cy="-51" r="8"/><circle cx="15" cy="-51" r="8"/>
            <circle cx="-12" cy="-42" r="6.5"/><circle cx="12" cy="-42" r="6.5"/>
          </g>
          <path d="M-20 -60 a5 5 0 0 1 4 -6 M18 -56 a5 5 0 0 0 -3 -6 M-18 -47 a4 4 0 0 1 4 -4 M16 -44 a4 4 0 0 0 -3 -5 M-4 -82 a5 5 0 0 1 6 -1" stroke="#7A4E3B" stroke-width="2" fill="none" stroke-linecap="round"/>
          <g class="leg leg-b"><rect class="o" x="-8" y="-18" width="7" height="18" rx="2.5" fill="#A9CDEE"/><path d="M-4.5 -14 v10" stroke="#86B3DD" stroke-width="1.2" stroke-linecap="round"/><ellipse class="o" cx="-4.8" cy="0" rx="5" ry="2.8" fill="#FFFFFF" stroke-width="2"/></g>
          <g class="leg leg-a"><rect class="o" x="1" y="-18" width="7" height="18" rx="2.5" fill="#A9CDEE"/><path d="M4.5 -14 v10" stroke="#86B3DD" stroke-width="1.2" stroke-linecap="round"/><ellipse class="o" cx="4.8" cy="0" rx="5" ry="2.8" fill="#FFFFFF" stroke-width="2"/></g>
          <rect class="o" x="-10" y="-21" width="20" height="7" rx="2.5" fill="#A9CDEE"/>
          <g transform="rotate(14 -12.5 -38)"><rect class="o" x="-16" y="-38" width="7" height="14" rx="3.5" fill="#FFFFFF"/><circle class="o" cx="-12.5" cy="-22" r="3" fill="#EDC7A6" stroke-width="2"/></g>
          <g transform="rotate(-14 12.5 -38)"><rect class="o" x="9" y="-38" width="7" height="14" rx="3.5" fill="#FFFFFF"/><circle class="o" cx="12.5" cy="-22" r="3" fill="#EDC7A6" stroke-width="2"/></g>
          <path class="o" d="M-10 -41 Q0 -44 10 -41 L12.5 -17 Q0 -14.5 -12.5 -17 Z" fill="#FFFFFF"/>
          <path d="M-11.6 -19.5 Q0 -17 11.6 -19.5" stroke="#D9D2E3" stroke-width="1.6" fill="none" stroke-linecap="round"/>
          <path class="o" d="M-5.5 -26 h11 l1.5 5 h-14 Z" fill="#F4F1F8" stroke-width="1.6"/>
          <path class="o" d="M-9 -42.5 Q0 -35 9 -42.5 Q0 -39 -9 -42.5Z" fill="#EEE9F4" stroke-width="2"/>
          <path d="M-2.5 -39 v5 M2.5 -39 v5" stroke="#B9AFC6" stroke-width="1.3" stroke-linecap="round"/>
          <circle cx="0" cy="-30.5" r="4.4" fill="none" stroke="#E5534B" stroke-width="2.3"/>
          <rect x="-6.6" y="-31.8" width="13.2" height="2.6" rx=".4" fill="#3B5BBF"/>
          <ellipse class="o" cx="0" cy="-58" rx="13.5" ry="13" fill="#EDC7A6"/>
          <path class="o" d="M-14 -60 C-16 -74 -5 -79 1 -75 C7 -79 17 -73 14 -60 C12 -66 8 -68 5 -64 C3 -69 -3 -69 -4 -64 C-7 -68 -12 -66 -14 -60Z" fill="#4A2C21"/>
          <path d="M-8 -71 a3.5 3.5 0 0 1 4 -2 M5 -72 a3.5 3.5 0 0 1 4 2" stroke="#7A4E3B" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <g transform="translate(11 -70)"><path class="o" d="M0 0 L-6 -4 L-6 4 Z M0 0 L6 -4 L6 4 Z" fill="#FFC8D9" stroke-width="1.8"/><circle class="o" r="2" fill="#F59AB8" stroke-width="1.5"/></g>
          <g class="eyes"><ellipse cx="-5" cy="-56" rx="2.2" ry="2.9" fill="#5B4B6B"/><ellipse cx="5" cy="-56" rx="2.2" ry="2.9" fill="#5B4B6B"/><circle cx="-4.2" cy="-57.3" r=".9" fill="#fff"/><circle cx="5.8" cy="-57.3" r=".9" fill="#fff"/></g>
          <ellipse cx="-9" cy="-51.5" rx="2.8" ry="1.7" fill="#F59AB8" opacity=".5"/><ellipse cx="9" cy="-51.5" rx="2.8" ry="1.7" fill="#F59AB8" opacity=".5"/>
          <path d="M-2.6 -51 q2.6 2.6 5.2 0" stroke="#5B4B6B" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        </g>
      </g>
      <ellipse class="cat-shadow" cx="0" cy="1" rx="19" ry="4" fill="${C.ink}" opacity=".14"/>
      <g class="cat-bob">
        <g class="tail"><path d="M-17 -16 C-31 -18 -34 -34 -25 -41" stroke="${C.ink}" stroke-width="9.5" fill="none" stroke-linecap="round"/><path d="M-17 -16 C-31 -18 -34 -34 -25 -41" stroke="${C.peach}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M-30 -30 l4 1 M-29 -36 l4 2" stroke="${C.peachD}" stroke-width="2" stroke-linecap="round"/></g>
        <rect class="o leg leg-b" x="-14" y="-10" width="8" height="11" rx="4" fill="#F5D3B5"/>
        <rect class="o leg leg-a" x="6" y="-10" width="8" height="11" rx="4" fill="#F5D3B5"/>
        <ellipse class="o" cx="0" cy="-17" rx="19" ry="14" fill="#FFE6CC"/>
        <ellipse cx="3" cy="-13" rx="10" ry="7" fill="${C.cream}"/>
        <rect class="o leg leg-b" x="-7" y="-9" width="8" height="10" rx="4" fill="#FFE6CC"/>
        <rect class="o leg leg-a" x="11" y="-9" width="8" height="10" rx="4" fill="#FFE6CC"/>
        <g class="cat-head">
          <path class="o" d="M-17 -46 L-15 -63 L-3 -55 Z" fill="#FFE6CC"/>
          <path d="M-14 -50 L-13.2 -59 L-7 -54Z" fill="${C.pink}"/>
          <path class="o" d="M17 -46 L15 -63 L3 -55 Z" fill="#FFE6CC"/>
          <path d="M14 -50 L13.2 -59 L7 -54Z" fill="${C.pink}"/>
          <ellipse class="o" cx="0" cy="-43" rx="19.5" ry="16" fill="#FFE6CC"/>
          <path d="M-4.5 -58 v5 M0 -59 v6 M4.5 -58 v5" stroke="${C.peachD}" stroke-width="2.6" stroke-linecap="round"/>
          <g class="eyes"><ellipse cx="-7.5" cy="-44" rx="2.9" ry="3.7" fill="${C.ink}"/><ellipse cx="7.5" cy="-44" rx="2.9" ry="3.7" fill="${C.ink}"/><circle cx="-6.5" cy="-45.6" r="1.1" fill="${C.white}"/><circle cx="8.5" cy="-45.6" r="1.1" fill="${C.white}"/></g>
          <ellipse cx="-12.5" cy="-38" rx="3.6" ry="2.1" fill="${C.pinkD}" opacity=".55"/>
          <ellipse cx="12.5" cy="-38" rx="3.6" ry="2.1" fill="${C.pinkD}" opacity=".55"/>
          <path d="M-1.6 -40.6 h3.2 l-1.6 1.7z" fill="${C.pinkD}"/>
          <path d="M-3.6 -38.4 q1.8 2.1 3.6 0 q1.8 2.1 3.6 0" fill="none" stroke="${C.ink}" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M-15 -40.5 h-8 M-15 -37.5 l-7 2 M15 -40.5 h8 M15 -37.5 l7 2" stroke="${C.ink}" stroke-width="1.2" stroke-linecap="round"/>
        </g>
        <path d="M-11 -29.5 Q0 -24.5 11 -29.5" stroke="${C.pinkD}" stroke-width="4" fill="none" stroke-linecap="round"/>
        <circle class="o" cx="1" cy="-26" r="3" fill="${C.butterD}" stroke-width="1.5"/>
      </g>
    </g>
    <g class="cat-bubble" transform="translate(0 -98)">
      <rect class="o bubble-box" x="-30" y="-24" width="60" height="24" rx="12" fill="${C.white}" stroke-width="2"/>
      <path class="o" d="M-5 -1 L0 7 L5 -1" fill="${C.white}" stroke-width="2"/>
      <rect x="-4" y="-4" width="8" height="5" fill="${C.white}"/>
      <text class="bubble-text" x="0" y="-7.5" text-anchor="middle">…</text>
    </g>
  </g>`;

  window.ART = ART;
  window.ART_COLORS = C;
})();
