/* Farbige, plastische Leistungssymbole für die Hero-Karten (SVG mit Verläufen, Glanzlichtern und Schatten).
   Animation läuft über CSS (hero.css, Abschnitt „hx-“). */

export function SprayIcon() {
  return <svg className="hx hx-spray" viewBox="0 0 64 64" aria-hidden="true">
    <defs>
      <linearGradient id="hx-sp-body" x1="0" x2="1"><stop offset="0" stopColor="#d9f1ff" stopOpacity=".95" /><stop offset=".45" stopColor="#ffffff" stopOpacity=".55" /><stop offset="1" stopColor="#b7dff7" stopOpacity=".95" /></linearGradient>
      <linearGradient id="hx-sp-liquid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5ccfff" /><stop offset="1" stopColor="#0a7fd1" /></linearGradient>
      <linearGradient id="hx-sp-head" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#cfdbe6" /></linearGradient>
      <linearGradient id="hx-sp-trig" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2dd4bf" /><stop offset="1" stopColor="#0f766e" /></linearGradient>
      <radialGradient id="hx-sp-mist"><stop offset="0" stopColor="#e6f7ff" stopOpacity="1" /><stop offset=".5" stopColor="#7fd0f7" stopOpacity=".85" /><stop offset="1" stopColor="#38bdf8" stopOpacity="0" /></radialGradient>
      <linearGradient id="hx-sp-cone" x1="1" x2="0"><stop offset="0" stopColor="#7fd0f7" stopOpacity=".9" /><stop offset="1" stopColor="#bfe8ff" stopOpacity="0" /></linearGradient>
      <clipPath id="hx-sp-clip"><path d="M25 30h16l2 4v17a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6V34z" /></clipPath>
      <filter id="hx-blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation=".35" /></filter>
    </defs>
    <ellipse className="hx-shadow" cx="33" cy="59" rx="12" ry="2.2" fill="#0b2a4f" opacity=".14" />
    {/* Flüssigkeit mit schwappender Oberfläche */}
    <g clipPath="url(#hx-sp-clip)">
      <rect x="20" y="30" width="28" height="30" fill="#e8f6ff" />
      <path className="hx-liquid" d="M10 40c4-2 8-2 12 0s8 2 12 0 8-2 12 0 8 2 12 0V62H10z" fill="url(#hx-sp-liquid)" />
      <g className="hx-bubbles" fill="#ffffff" opacity=".8"><circle className="hx-bub b1" cx="30" cy="54" r="1" /><circle className="hx-bub b2" cx="36" cy="52" r=".8" /><circle className="hx-bub b3" cx="33" cy="55" r=".6" /></g>
    </g>
    <path d="M25 30h16l2 4v17a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6V34z" fill="url(#hx-sp-body)" opacity=".55" stroke="#7cc3ee" strokeWidth="1.2" />
    <path d="M27.5 35c-.6 6-.6 12 .4 17" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" opacity=".85" fill="none" />
    {/* Hals und Sprühkopf */}
    <rect x="27" y="25" width="12" height="6" rx="1.5" fill="url(#hx-sp-head)" stroke="#a9bccd" strokeWidth=".8" />
    <path d="M24 13h15l6 6v7H24z" fill="url(#hx-sp-head)" stroke="#a9bccd" strokeWidth=".9" />
    <path d="M26 15h11" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" opacity=".9" />
    <rect x="15" y="15" width="10" height="4.4" rx="1.4" fill="#e2ebf3" stroke="#a9bccd" strokeWidth=".8" />
    <circle cx="15.4" cy="17.2" r="1.3" fill="#0f766e" />
    <path className="hx-trigger" d="M29 25c-1 4-3 7-6 9l-2.2-1.6c2.4-2 3.8-4.6 4.6-8z" fill="url(#hx-sp-trig)" />
    {/* Sprühnebel */}
    <path className="hx-cone" d="M14 17L0 9v16z" fill="url(#hx-sp-cone)" />
    <g className="hx-mist" filter="url(#hx-blur)">
      <circle className="hx-puff p1" cx="12" cy="17" r="3.2" fill="url(#hx-sp-mist)" />
      <circle className="hx-puff p2" cx="12" cy="17" r="2.6" fill="url(#hx-sp-mist)" />
      <circle className="hx-puff p3" cx="12" cy="17" r="2.9" fill="url(#hx-sp-mist)" />
      <circle className="hx-puff p4" cx="12" cy="17" r="2.2" fill="url(#hx-sp-mist)" />
      <circle className="hx-puff p5" cx="12" cy="17" r="1.8" fill="url(#hx-sp-mist)" />
    </g>
    <g className="hx-drops" fill="#38bdf8"><circle className="hx-drop d1" cx="12" cy="17" r=".9" /><circle className="hx-drop d2" cx="12" cy="17" r=".7" /><circle className="hx-drop d3" cx="12" cy="17" r=".8" /></g>
  </svg>;
}

export function ShelfIcon() {
  const items = [
    // [x, y, w, h, Farbe oben, Farbe unten, Etikett, Klasse]
    [10, 15, 9, 13, '#ff6b6b', '#d63031', '#ffffff', 'i1'],
    [21, 19, 8, 9, '#ffd166', '#f2a900', '#7a4d00', 'i2'],
    [31, 13, 7, 15, '#55efc4', '#00a884', '#ffffff', 'i3'],
    [40, 17, 10, 11, '#74b9ff', '#0a6fd1', '#ffffff', 'i4'],
    [10, 39, 11, 11, '#a29bfe', '#6c5ce7', '#ffffff', 'i5'],
    [23, 35, 7, 15, '#fab1a0', '#e17055', '#ffffff', 'i6'],
    [32, 41, 8, 9, '#81ecec', '#00b5b5', '#ffffff', 'i7'],
    [42, 37, 8, 13, '#ffeaa7', '#fdcb6e', '#8a5a00', 'i8'],
  ];
  return <svg className="hx hx-shelf" viewBox="0 0 64 64" aria-hidden="true">
    <defs>
      <linearGradient id="hx-sh-wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f5d7a8" /><stop offset="1" stopColor="#c98f4e" /></linearGradient>
      <linearGradient id="hx-sh-post" x1="0" x2="1"><stop offset="0" stopColor="#8a5a2b" /><stop offset=".5" stopColor="#b47a3c" /><stop offset="1" stopColor="#7a4d22" /></linearGradient>
      <linearGradient id="hx-sh-back" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fdf6ec" /><stop offset="1" stopColor="#f1e2cc" /></linearGradient>
      <linearGradient id="hx-sh-gloss" x1="0" x2="1"><stop offset="0" stopColor="#fff" stopOpacity=".55" /><stop offset=".5" stopColor="#fff" stopOpacity="0" /></linearGradient>
    </defs>
    <ellipse cx="32" cy="60" rx="26" ry="2.4" fill="#0b2a4f" opacity=".13" />
    <rect x="6" y="6" width="52" height="50" rx="2" fill="url(#hx-sh-back)" />
    {items.map(([x, y, w, h, top, bottom, label, cls]) => <g key={cls} className={'hx-item ' + cls}>
      <defs><linearGradient id={'hx-sh-' + cls} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={top} /><stop offset="1" stopColor={bottom} /></linearGradient></defs>
      <rect x={x} y={y} width={w} height={h} rx="1.4" fill={'url(#hx-sh-' + cls + ')'} />
      <rect x={x + 1.2} y={y + h * .38} width={w - 2.4} height={h * .26} rx=".6" fill={label} opacity=".85" />
      <rect x={x} y={y} width={w * .45} height={h} rx="1.4" fill="url(#hx-sh-gloss)" />
    </g>)}
    {/* Regalböden und Seitenteile */}
    <rect x="5" y="28" width="54" height="3.4" rx="1" fill="url(#hx-sh-wood)" />
    <rect x="5" y="50" width="54" height="3.6" rx="1" fill="url(#hx-sh-wood)" />
    <rect x="4" y="5" width="56" height="3" rx="1" fill="url(#hx-sh-wood)" />
    <rect x="4" y="5" width="3.2" height="52" rx="1.2" fill="url(#hx-sh-post)" />
    <rect x="56.8" y="5" width="3.2" height="52" rx="1.2" fill="url(#hx-sh-post)" />
    <path className="hx-shelf-glint" d="M8 29h48" stroke="#fff" strokeWidth=".8" strokeLinecap="round" opacity=".7" />
  </svg>;
}

export function HomeIcon() {
  return <svg className="hx hx-home" viewBox="0 0 64 64" aria-hidden="true">
    <defs>
      <linearGradient id="hx-ho-roof" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff7a59" /><stop offset="1" stopColor="#c0392b" /></linearGradient>
      <linearGradient id="hx-ho-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fffaf0" /><stop offset="1" stopColor="#f3e3c6" /></linearGradient>
      <linearGradient id="hx-ho-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#a8e3ff" /><stop offset="1" stopColor="#3b9de0" /></linearGradient>
      <linearGradient id="hx-ho-door" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b9773f" /><stop offset="1" stopColor="#7d4a1f" /></linearGradient>
      <linearGradient id="hx-ho-sponge" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffe066" /><stop offset="1" stopColor="#f5a300" /></linearGradient>
      <linearGradient id="hx-ho-shine" x1="0" x2="1"><stop offset="0" stopColor="#fff" stopOpacity="0" /><stop offset=".5" stopColor="#fff" stopOpacity=".95" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
      <radialGradient id="hx-ho-dirt"><stop offset="0" stopColor="#8d6e4a" stopOpacity=".75" /><stop offset="1" stopColor="#8d6e4a" stopOpacity="0" /></radialGradient>
      <clipPath id="hx-ho-win"><rect x="17" y="34" width="12" height="10" rx="1.2" /></clipPath>
    </defs>
    <ellipse cx="32" cy="58.5" rx="25" ry="3" fill="#43a047" opacity=".9" />
    <ellipse cx="32" cy="58" rx="22" ry="1.6" fill="#7bd17e" opacity=".9" />
    <rect x="41" y="10" width="6" height="12" rx="1" fill="#a0522d" />
    <rect x="12" y="27" width="40" height="30" rx="1.5" fill="url(#hx-ho-wall)" stroke="#e2cfa8" strokeWidth=".8" />
    <path d="M6 30L32 9l26 21-3.2 3.4L32 15.2 9.2 33.4z" fill="url(#hx-ho-roof)" />
    <path d="M14 27l18-14 18 14" stroke="#ffb199" strokeWidth=".9" fill="none" opacity=".8" />
    {/* Fenster mit Glanz */}
    <rect x="17" y="34" width="12" height="10" rx="1.2" fill="url(#hx-ho-glass)" stroke="#ffffff" strokeWidth="1.4" />
    <path d="M23 34v10M17 39h12" stroke="#ffffff" strokeWidth="1.1" />
    <g clipPath="url(#hx-ho-win)"><rect className="hx-glass-shine" x="10" y="32" width="5" height="14" fill="url(#hx-ho-shine)" transform="skewX(-20)" /></g>
    {/* Tür */}
    <rect x="35" y="38" width="10" height="19" rx="1.2" fill="url(#hx-ho-door)" />
    <circle cx="43" cy="48" r=".9" fill="#ffd166" />
    {/* Schmutzflecken, die weggewischt werden */}
    <ellipse className="hx-dirt s1" cx="20" cy="37" rx="3.2" ry="2.4" fill="url(#hx-ho-dirt)" />
    <ellipse className="hx-dirt s2" cx="26" cy="42" rx="2.8" ry="2" fill="url(#hx-ho-dirt)" />
    <ellipse className="hx-dirt s3" cx="17" cy="50" rx="3" ry="2.2" fill="url(#hx-ho-dirt)" />
    <ellipse className="hx-dirt s4" cx="28" cy="52" rx="2.6" ry="2" fill="url(#hx-ho-dirt)" />
    {/* Schwamm mit Schaum */}
    <g className="hx-sponge">
      <rect x="-5.5" y="-3.6" width="11" height="7.2" rx="2.2" fill="url(#hx-ho-sponge)" />
      <rect x="-5.5" y="-3.6" width="11" height="2.4" rx="1.2" fill="#2e9e4f" />
      <circle cx="-2" cy="1.4" r=".5" fill="#d48a00" /><circle cx="1.5" cy="2" r=".45" fill="#d48a00" /><circle cx="3.4" cy=".6" r=".4" fill="#d48a00" />
      <g className="hx-foam"><circle cx="-6.5" cy="3" r="1.6" fill="#fff" stroke="#bfe8ff" strokeWidth=".5" /><circle cx="6.6" cy="-1" r="1.3" fill="#fff" stroke="#bfe8ff" strokeWidth=".5" /><circle cx="-4" cy="4.8" r="1" fill="#fff" stroke="#bfe8ff" strokeWidth=".5" /></g>
    </g>
    <g className="hx-bubble-trail" fill="#ffffff" stroke="#bfe8ff" strokeWidth=".5"><circle className="hx-tb t1" cx="22" cy="40" r="1.1" /><circle className="hx-tb t2" cx="18" cy="48" r=".9" /><circle className="hx-tb t3" cx="27" cy="50" r="1" /></g>
    <path className="hx-star" d="M50 30l1.3 3 3 1.3-3 1.3-1.3 3-1.3-3-3-1.3 3-1.3z" fill="#ffd166" />
    <path className="hx-star s2" d="M21 29l.9 2 2 .9-2 .9-.9 2-.9-2-2-.9 2-.9z" fill="#ffffff" />
  </svg>;
}
