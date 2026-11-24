/* Detaillierte, realistische Illustrationen für die drei Hero-Karten (SVG, Animation in hero.css „rx-“).
   Regalservice: echtes Handelsregal mit Waren, die nacheinander sauber eingeräumt werden.
   Reinigung: durchscheinende Sprühflasche mit Etikett und feinem Sprühnebel.
   Haushalt: Haus, dessen verschmutztes Fenster mit einem Schwamm geputzt wird. */

const P = 'rx'; // ID-Präfix

/* ---------- Bausteine für Produkte ---------- */
function Box({ x, y, w, h, c, c2, cls, logo = '#fff' }) {
  return <g className={'rx-p ' + cls}>
    <path d={`M${x + w} ${y}l2 -2v${h}l-2 2z`} fill={c2} />
    <path d={`M${x} ${y}l2 -2h${w}l-2 2z`} fill={c} opacity=".75" />
    <rect x={x} y={y} width={w} height={h} fill={c} />
    <rect x={x} y={y} width={w} height={h} fill={`url(#${P}-face)`} />
    <rect x={x + 1.2} y={y + h * .55} width={w - 2.4} height={h * .3} rx=".8" fill="#fff" opacity=".9" />
    <circle cx={x + w / 2} cy={y + h * .3} r={Math.min(w, h) * .18} fill={logo} opacity=".95" />
    <rect x={x + 2} y={y + h * .62} width={w - 4} height=".9" fill={c2} opacity=".7" />
    <rect x={x + 2} y={y + h * .72} width={(w - 4) * .6} height=".8" fill={c2} opacity=".5" />
  </g>;
}
function Can({ x, y, w, h, c, cls }) {
  return <g className={'rx-p ' + cls}>
    <rect x={x} y={y} width={w} height={h} rx=".8" fill={c} />
    <rect x={x} y={y + h * .35} width={w} height={h * .3} fill="#fff" opacity=".85" />
    <rect x={x} y={y} width={w} height={h} rx=".8" fill={`url(#${P}-cyl)`} />
    <ellipse cx={x + w / 2} cy={y + .6} rx={w / 2} ry="1" fill={`url(#${P}-metal)`} />
    <ellipse cx={x + w / 2} cy={y + h - .4} rx={w / 2} ry=".8" fill="#8a96a3" opacity=".7" />
  </g>;
}
function Bottle({ x, y, w, h, c, cap, cls, clear = false }) {
  const n = w * .32, sh = h * .22;
  return <g className={'rx-p ' + cls}>
    <path d={`M${x + w / 2 - n / 2} ${y + 3}h${n}v${sh * .4}c0 ${sh * .3} ${w / 2 - n / 2} ${sh * .35} ${w / 2 - n / 2} ${sh}v${h - sh - 3.8}a2 2 0 0 1 -2 2h${-(w - 4)}a2 2 0 0 1 -2 -2v${-(h - sh - 3.8)}c0 ${-sh * .65} ${w / 2 - n / 2} ${-sh * .7} ${w / 2 - n / 2} ${-sh}z`} fill={c} opacity={clear ? .55 : 1} />
    {clear && <rect x={x + 1} y={y + h * .5} width={w - 2} height={h * .48} rx="1.5" fill={c} opacity=".75" />}
    <rect x={x + w / 2 - n / 2 - .3} y={y} width={n + .6} height="3.4" rx=".6" fill={cap} />
    <rect x={x + .4} y={y + h * .48} width={w - .8} height={h * .22} fill="#fff" opacity=".92" />
    <rect x={x + 1.4} y={y + h * .55} width={w - 2.8} height=".8" fill={cap} opacity=".8" />
    <path d={`M${x + 1.4} ${y + sh + 2}v${h - sh - 5}`} stroke="#fff" strokeWidth=".9" strokeLinecap="round" opacity=".7" />
    <rect x={x} y={y + 3} width={w} height={h - 3} fill={`url(#${P}-cyl)`} opacity=".6" />
  </g>;
}
function Carton({ x, y, w, h, c, cls }) {
  return <g className={'rx-p ' + cls}>
    <path d={`M${x} ${y + 4}l${w / 2} -4l${w / 2} 4z`} fill="#f4f4f4" stroke="#d7dbe0" strokeWidth=".4" />
    <rect x={x + w / 2 - .6} y={y - 1.4} width="1.2" height="1.6" fill={c} />
    <rect x={x} y={y + 4} width={w} height={h - 4} fill="#fbfbfb" />
    <rect x={x} y={y + h * .45} width={w} height={h * .4} fill={c} />
    <circle cx={x + w / 2} cy={y + h * .65} r={w * .22} fill="#ffd166" />
    <rect x={x} y={y + 4} width={w} height={h - 4} fill={`url(#${P}-face)`} />
  </g>;
}
function Jug({ x, y, c, cls }) {
  return <g className={'rx-p ' + cls}>
    <path d={`M${x + 2} ${y + 6}h8l3 3v17a2 2 0 0 1-2 2H${x + 3}a2 2 0 0 1-2-2V${y + 9}z`} fill={c} />
    <path d={`M${x + 7.4} ${y + 9}h3.4v6h-3.4z`} fill="#fff" opacity=".55" />
    <rect x={x + 3} y={y + 2.5} width="4.6" height="3.8" rx=".8" fill="#1e5aa8" />
    <rect x={x + 2.4} y={y + 15} width="9.6" height="8" rx="1" fill="#fff" opacity=".92" />
    <circle cx={x + 7.2} cy={y + 19} r="2.2" fill="#1e88e5" />
    <path d={`M${x + 3} ${y + 9}v16`} stroke="#fff" strokeWidth="1" strokeLinecap="round" opacity=".55" />
  </g>;
}
function Jar({ x, y, c, cls }) {
  return <g className={'rx-p ' + cls}>
    <rect x={x} y={y + 2.6} width="7" height="8.4" rx="1.6" fill={c} />
    <rect x={x - .3} y={y} width="7.6" height="3" rx=".8" fill="#c0392b" />
    <rect x={x + .6} y={y + 5} width="5.8" height="3.4" rx=".6" fill="#fff8e1" />
    <rect x={x} y={y + 2.6} width="7" height="8.4" rx="1.6" fill={`url(#${P}-cyl)`} opacity=".7" />
  </g>;
}
function Tag({ x, y, price }) {
  return <g className="rx-tag"><rect x={x} y={y} width="9" height="3.6" rx=".5" fill="#fff" /><rect x={x + 5} y={y} width="4" height="3.6" rx=".5" fill={price} /><rect x={x + 1} y={y + 1.3} width="3" height=".7" fill="#9aa4ae" /></g>;
}

export function ShelfIcon() {
  return <svg className="rx rx-shelf" viewBox="0 0 96 96" aria-hidden="true">
    <defs>
      <pattern id={P + '-peg'} width="5" height="5" patternUnits="userSpaceOnUse"><rect width="5" height="5" fill="#eef1f5" /><circle cx="2.5" cy="2.5" r=".55" fill="#cfd6de" /></pattern>
      <linearGradient id={P + '-post'} x1="0" x2="1"><stop offset="0" stopColor="#5b6672" /><stop offset=".45" stopColor="#a9b4bf" /><stop offset="1" stopColor="#4a545f" /></linearGradient>
      <linearGradient id={P + '-lip'} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dfe5eb" /><stop offset=".5" stopColor="#aeb9c4" /><stop offset="1" stopColor="#7d8a97" /></linearGradient>
      <linearGradient id={P + '-cyl'} x1="0" x2="1"><stop offset="0" stopColor="#000" stopOpacity=".28" /><stop offset=".3" stopColor="#fff" stopOpacity=".38" /><stop offset=".55" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".3" /></linearGradient>
      <linearGradient id={P + '-face'} x1="0" x2="1"><stop offset="0" stopColor="#fff" stopOpacity=".28" /><stop offset=".6" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".16" /></linearGradient>
      <linearGradient id={P + '-metal'} x1="0" x2="1"><stop offset="0" stopColor="#9aa5b1" /><stop offset=".5" stopColor="#f2f5f8" /><stop offset="1" stopColor="#9aa5b1" /></linearGradient>
      <linearGradient id={P + '-glint'} x1="0" x2="1"><stop offset="0" stopColor="#fff" stopOpacity="0" /><stop offset=".5" stopColor="#fff" stopOpacity=".7" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
      <clipPath id={P + '-unit'}><rect x="6" y="6" width="84" height="84" rx="3" /></clipPath>
    </defs>
    <ellipse cx="48" cy="92" rx="42" ry="2.6" fill="#0b2a4f" opacity=".14" />
    <rect x="6" y="6" width="84" height="84" rx="3" fill={`url(#${P}-peg)`} />
    <rect x="6" y="6" width="84" height="6" fill="#1f6fd1" />
    <rect x="6" y="11.4" width="84" height="1" fill="#0d4f9e" />
    {/* oberes Fach */}
    <Box x={10} y={22} w={12} h={22} c="#e53935" c2="#a82422" cls="p1" />
    <Box x={24} y={24} w={11} h={20} c="#fbc02d" c2="#c79100" cls="p2" logo="#e53935" />
    <Jug x={37} y={16} c="#fb8c00" cls="p3" />
    <Can x={53} y={31} w={6} h={13} c="#c62828" cls="p4" />
    <Can x={60} y={31} w={6} h={13} c="#c62828" cls="p5" />
    <Can x={67} y={31} w={6} h={13} c="#2e7d32" cls="p6" />
    <Can x={56.5} y={18} w={6} h={13} c="#c62828" cls="p7" />
    <Can x={63.5} y={18} w={6} h={13} c="#2e7d32" cls="p8" />
    <Bottle x={76} y={18} w={9} h={26} c="#7e57c2" cap="#4527a0" cls="p9" />
    {/* unteres Fach */}
    <Bottle x={10} y={60} w={7} h={24} c="#4fc3f7" cap="#0277bd" cls="p10" clear />
    <Bottle x={18} y={60} w={7} h={24} c="#4fc3f7" cap="#0277bd" cls="p11" clear />
    <Bottle x={26} y={60} w={7} h={24} c="#4fc3f7" cap="#0277bd" cls="p12" clear />
    <Carton x={35} y={64} w={9} h={20} c="#43a047" cls="p13" />
    <Carton x={45} y={64} w={9} h={20} c="#ef6c00" cls="p14" />
    <Jar x={56} y={73} c="#ffca28" cls="p15" />
    <Jar x={64} y={73} c="#8d6e63" cls="p16" />
    <Box x={73} y={66} w={13} h={18} c="#00897b" c2="#00564d" cls="p17" logo="#ffeb3b" />
    {/* Regalböden mit Preisleisten */}
    <rect x="6" y="44" width="84" height="5" fill={`url(#${P}-lip)`} />
    <rect x="6" y="84" width="84" height="5" fill={`url(#${P}-lip)`} />
    <Tag x={11} y={44.8} price="#e53935" /><Tag x={38} y={44.8} price="#fbc02d" /><Tag x={60} y={44.8} price="#e53935" /><Tag x={78} y={44.8} price="#43a047" />
    <Tag x={14} y={84.8} price="#1e88e5" /><Tag x={40} y={84.8} price="#e53935" /><Tag x={60} y={84.8} price="#fbc02d" /><Tag x={76} y={84.8} price="#43a047" />
    <rect x="3" y="4" width="4.5" height="88" rx="1.5" fill={`url(#${P}-post)`} />
    <rect x="88.5" y="4" width="4.5" height="88" rx="1.5" fill={`url(#${P}-post)`} />
    <g clipPath={`url(#${P}-unit)`}><rect className="rx-glint" x="-30" y="0" width="22" height="96" fill={`url(#${P}-glint)`} transform="skewX(-18)" /></g>
  </svg>;
}

export function SprayIcon() {
  const drops = [[-8, -6, .9], [-12, -2, .7], [-15, -9, .6], [-10, 3, .75], [-18, -4, .55], [-20, 2, .5], [-14, 6, .6], [-22, -8, .45], [-6, -1, .8], [-17, -12, .5], [-24, -2, .4], [-11, -11, .6]];
  return <svg className="rx rx-spray" viewBox="0 0 96 96" aria-hidden="true">
    <defs>
      <linearGradient id="rxs-shell" x1="0" x2="1"><stop offset="0" stopColor="#cfeaff" stopOpacity=".9" /><stop offset=".35" stopColor="#ffffff" stopOpacity=".45" /><stop offset="1" stopColor="#a9d6f5" stopOpacity=".95" /></linearGradient>
      <linearGradient id="rxs-liq" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4fd1ff" /><stop offset="1" stopColor="#0068c9" /></linearGradient>
      <linearGradient id="rxs-head" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffffff" /><stop offset=".6" stopColor="#e7edf3" /><stop offset="1" stopColor="#b9c6d3" /></linearGradient>
      <linearGradient id="rxs-trig" x1="0" x2="1"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#c7d2dd" /></linearGradient>
      <radialGradient id="rxs-haze"><stop offset="0" stopColor="#e9f8ff" stopOpacity=".95" /><stop offset=".6" stopColor="#9fdcff" stopOpacity=".45" /><stop offset="1" stopColor="#9fdcff" stopOpacity="0" /></radialGradient>
      <clipPath id="rxs-clip"><path d="M40 44c-3 3-4 6-4 10v26a6 6 0 0 0 6 6h18a6 6 0 0 0 6-6V54c0-4-1-7-4-10z" /></clipPath>
    </defs>
    <ellipse cx="51" cy="90" rx="18" ry="2.8" fill="#0b2a4f" opacity=".15" />
    <g clipPath="url(#rxs-clip)">
      <rect x="30" y="40" width="40" height="50" fill="#eaf6ff" />
      <path className="rx-liquid" d="M14 58c5-2.4 10-2.4 15 0s10 2.4 15 0 10-2.4 15 0 10 2.4 15 0 10-2.4 15 0V92H14z" fill="url(#rxs-liq)" />
      <circle className="rx-bub b1" cx="46" cy="82" r="1.2" fill="#fff" opacity=".8" /><circle className="rx-bub b2" cx="55" cy="80" r=".9" fill="#fff" opacity=".8" /><circle className="rx-bub b3" cx="50" cy="84" r=".7" fill="#fff" opacity=".8" />
    </g>
    <path d="M40 44c-3 3-4 6-4 10v26a6 6 0 0 0 6 6h18a6 6 0 0 0 6-6V54c0-4-1-7-4-10z" fill="url(#rxs-shell)" opacity=".5" stroke="#8cc8ee" strokeWidth="1" />
    {/* Etikett */}
    <rect x="38.5" y="60" width="25" height="15" rx="2" fill="#ffffff" opacity=".96" />
    <rect x="38.5" y="60" width="25" height="4" rx="2" fill="#0a74c9" />
    <path d="M51 66.5c-1.6 2.2-2.4 3.4-2.4 4.6a2.4 2.4 0 0 0 4.8 0c0-1.2-.8-2.4-2.4-4.6z" fill="#29b6f6" />
    <rect x="41" y="72.5" width="20" height=".8" fill="#b0bec5" />
    <path d="M39.4 50c-.6 9-.6 22 .6 32" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".75" fill="none" />
    {/* Hals, Sprühkopf, Abzug */}
    <rect x="42" y="37" width="18" height="8" rx="2" fill="url(#rxs-head)" stroke="#a8b8c8" strokeWidth=".6" />
    <path d="M38 22h20l8 8v8H38z" fill="url(#rxs-head)" stroke="#a8b8c8" strokeWidth=".7" />
    <path d="M41 24.5h15" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity=".95" />
    <rect x="24" y="24.5" width="15" height="6" rx="2" fill="url(#rxs-head)" stroke="#a8b8c8" strokeWidth=".6" />
    <rect x="22.2" y="25.6" width="3" height="3.8" rx="1" fill="#0a74c9" />
    <path className="rx-trigger" d="M44 37c-1.5 6-4.5 10.5-9 13l-2.4-2c3.6-2.6 5.8-6.3 7-11z" fill="url(#rxs-trig)" stroke="#a8b8c8" strokeWidth=".6" />
    {/* Sprühnebel */}
    <ellipse className="rx-haze" cx="12" cy="27" rx="10" ry="7" fill="url(#rxs-haze)" />
    <g className="rx-drops" fill="#5fc4f5">{drops.map(([dx, dy, r], i) => <circle key={i} className={'rx-drop q' + (i % 6)} cx="22" cy="27.5" r={r} style={{ '--dx': dx + 'px', '--dy': dy + 'px' }} />)}</g>
  </svg>;
}

export function HomeIcon() {
  return <svg className="rx rx-home" viewBox="0 0 96 96" aria-hidden="true">
    <defs>
      <linearGradient id="rxh-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fffaf1" /><stop offset="1" stopColor="#efe0c5" /></linearGradient>
      <linearGradient id="rxh-roof" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d9573f" /><stop offset="1" stopColor="#8f2f22" /></linearGradient>
      <linearGradient id="rxh-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#c9efff" /><stop offset=".55" stopColor="#6ec1f0" /><stop offset="1" stopColor="#2f86c9" /></linearGradient>
      <linearGradient id="rxh-door" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8d5a33" /><stop offset="1" stopColor="#5d3a1f" /></linearGradient>
      <linearGradient id="rxh-sponge" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffe27a" /><stop offset="1" stopColor="#f2a516" /></linearGradient>
      <linearGradient id="rxh-shine" x1="0" x2="1"><stop offset="0" stopColor="#fff" stopOpacity="0" /><stop offset=".5" stopColor="#fff" stopOpacity=".95" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
      <radialGradient id="rxh-dirt"><stop offset="0" stopColor="#7a5c3c" stopOpacity=".75" /><stop offset="1" stopColor="#7a5c3c" stopOpacity="0" /></radialGradient>
      <pattern id="rxh-tiles" width="6" height="4" patternUnits="userSpaceOnUse"><rect width="6" height="4" fill="none" /><path d="M0 3.6h6M3 0v3.6" stroke="#6e2117" strokeWidth=".5" opacity=".55" /></pattern>
      <clipPath id="rxh-win"><rect x="22" y="48" width="20" height="17" rx="1" /></clipPath>
    </defs>
    <ellipse cx="48" cy="90" rx="42" ry="4" fill="#3f9a45" />
    <ellipse cx="48" cy="88.6" rx="38" ry="2.4" fill="#78c97c" />
    <rect x="63" y="14" width="8" height="18" fill="#8f3a2a" /><rect x="62" y="12" width="10" height="3" fill="#6e2b1e" />
    {/* Wand mit Putzstruktur */}
    <rect x="16" y="38" width="64" height="50" fill="url(#rxh-wall)" />
    <path d="M16 50h64M16 62h64M16 74h64" stroke="#e8d6b3" strokeWidth=".5" />
    {/* Dach mit Ziegeln */}
    <path d="M8 42L48 12l40 30-4 4L48 19 12 46z" fill="url(#rxh-roof)" />
    <path d="M12 46L48 19l36 27-1-6L48 14 13 40z" fill="url(#rxh-tiles)" opacity=".9" />
    <path d="M10 43.5L48 15l38 28.5" stroke="#ff9a80" strokeWidth=".8" fill="none" opacity=".7" />
    {/* linkes Fenster (wird geputzt) */}
    <rect x="20.5" y="46.5" width="23" height="20" rx="1.4" fill="#ffffff" />
    <rect x="22" y="48" width="20" height="17" rx="1" fill="url(#rxh-glass)" />
    <g clipPath="url(#rxh-win)">
      <ellipse className="rx-dirt d1" cx="27" cy="52" rx="6" ry="4.5" fill="url(#rxh-dirt)" />
      <ellipse className="rx-dirt d2" cx="36" cy="54" rx="6" ry="4" fill="url(#rxh-dirt)" />
      <ellipse className="rx-dirt d3" cx="28" cy="60.5" rx="6" ry="4" fill="url(#rxh-dirt)" />
      <ellipse className="rx-dirt d4" cx="37" cy="61" rx="5.5" ry="4" fill="url(#rxh-dirt)" />
      <rect className="rx-wshine" x="14" y="44" width="6" height="26" fill="url(#rxh-shine)" transform="skewX(-22)" />
    </g>
    <path d="M32 48v17M22 56.5h20" stroke="#ffffff" strokeWidth="1.4" />
    <rect x="19.5" y="66" width="25" height="2.4" rx=".8" fill="#e0cfae" />
    {/* rechtes Fenster und Tür */}
    <rect x="54.5" y="46.5" width="15" height="13" rx="1.2" fill="#ffffff" />
    <rect x="56" y="48" width="12" height="10" rx=".8" fill="url(#rxh-glass)" />
    <path d="M62 48v10" stroke="#fff" strokeWidth="1.1" />
    <rect x="53" y="64" width="18" height="24" rx="1.4" fill="#ffffff" />
    <rect x="55" y="66" width="14" height="22" rx="1" fill="url(#rxh-door)" />
    <rect x="57" y="68" width="10" height="7" rx=".6" fill="#a8d8f5" opacity=".7" />
    <circle cx="66.6" cy="78" r="1" fill="#ffd166" />
    <rect x="51" y="87" width="22" height="2" rx=".6" fill="#cbbfa8" />
    {/* Büsche */}
    <circle cx="20" cy="86" r="5.5" fill="#2e8b3a" /><circle cx="26" cy="87" r="4.5" fill="#3fa24a" /><circle cx="80" cy="86" r="5" fill="#2e8b3a" /><circle cx="75" cy="87.5" r="4" fill="#3fa24a" />
    {/* Schwamm mit Schaum */}
    <g className="rx-sponge">
      <rect x="-6" y="-4" width="12" height="8" rx="2.4" fill="url(#rxh-sponge)" />
      <rect x="-6" y="-4" width="12" height="2.8" rx="1.4" fill="#2f9e52" />
      <circle cx="-2" cy="1.6" r=".55" fill="#d08a00" /><circle cx="2" cy="2.2" r=".5" fill="#d08a00" /><circle cx="3.6" cy=".6" r=".45" fill="#d08a00" />
      <g className="rx-foam"><circle cx="-7" cy="3" r="1.9" fill="#fff" stroke="#bfe6ff" strokeWidth=".5" /><circle cx="7.2" cy="-1.2" r="1.5" fill="#fff" stroke="#bfe6ff" strokeWidth=".5" /><circle cx="-4.4" cy="5" r="1.2" fill="#fff" stroke="#bfe6ff" strokeWidth=".5" /></g>
    </g>
    <path className="rx-star s1" d="M46 40l1.4 3.2 3.2 1.4-3.2 1.4L46 49.2l-1.4-3.2-3.2-1.4 3.2-1.4z" fill="#ffffff" />
    <path className="rx-star s2" d="M24 42l1 2.2 2.2 1-2.2 1L24 48.4l-1-2.2-2.2-1 2.2-1z" fill="#ffe082" />
  </svg>;
}

const ICONS = { spray: SprayIcon, shelf: ShelfIcon, home: HomeIcon };
export default function HeroIcon({ name }) { const C = ICONS[name]; return <C />; }
