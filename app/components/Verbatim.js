import { Faq, Mark, Pic, Go } from './Design';
import { language } from '../lib/language';

const linkTargets = {
  'Mehr über unsere Dienstleistungen erfahren': '/leistungen',
  'Mehr über uns erfahren': '/ueber-uns',
  'Mehr zum Regalservice': '/regalservice',
};
const lines = text => text.split('\n').flatMap((l, i) => i ? [<br key={i} />, l] : [l]);

/* ---------- kleine Symbole (rein dekorativ) ---------- */
const ICONS = [
  'M12 3l2.4 5 5.6.8-4 3.9.9 5.5L12 15.6 7.1 18.2 8 12.7 4 8.8 9.6 8z',
  'M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z',
  'M20 4C10 4 4 10 4 20c10 0 16-6 16-16zM4 20l8-8',
  'M12 7v5l3 2M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z',
  'M12 2C8 8 6 11 6 14a6 6 0 0 0 12 0c0-3-2-6-6-12z',
  'M16 11a4 4 0 1 0-8 0M3 21a9 9 0 0 1 18 0M12 3v4',
  'M4 7h16M4 12h16M4 17h10',
  'M5 12l4 4L19 6',
];
function Glyph({ i = 0 }) {
  return <svg className="wv-glyph" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d={ICONS[i % ICONS.length]} /></svg>;
}

/** Bild aus der Fotobibliothek (Schlüssel) oder direkter Pfad aus /fotografie bzw. /assets. */
export function Img({ k, lang = 'de' }) {
  if (k.startsWith('/')) return <img src={k} alt="" loading="lazy" decoding="async" width="720" height="720" />;
  return <Pic lang={lang} name={k} />;
}

/* ---------- Darstellungsformen für Listen und Tabellen (Wortlaut unverändert) ---------- */
const splitTitle = x => { const m = x.match(/^([^:\n]{2,70}):\s+([\s\S]+)$/) || x.match(/^([^–\n]{2,60})\s+[–-]\s+([\s\S]+)$/); return m ? [m[1], m[2]] : null; };
const STEP_HEAD = /ablauf|prozess|schritt|so funktioniert|vorgehen|so arbeiten|workflow|phasen/i;

function listKind(b, heading) {
  if (b.t === 'ol') return 'steps';
  const titled = b.items.filter(splitTitle).length;
  if (heading && STEP_HEAD.test(heading) && b.items.length >= 3) return 'steps';
  if (titled >= Math.max(2, Math.ceil(b.items.length * .6))) return 'feat';
  if (b.items.length >= 3 && b.items.every(x => x.length <= 80)) return 'tiles';
  return 'list';
}

function Steps({ items }) {
  return <ol className="wv-steps">{items.map((x, i) => { const t = splitTitle(x); return <li key={i}>
    <span className="wv-step-dot" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
    <div className="wv-step-body">{t ? <><strong>{t[0]}</strong><span>{lines(t[1])}</span></> : <span>{lines(x)}</span>}</div>
  </li>; })}</ol>;
}
function Feat({ items }) {
  return <div className="wv-feat">{items.map((x, i) => { const t = splitTitle(x); return <article key={i}>
    <span className="wv-feat-icon"><Glyph i={i} /></span>
    {t ? <><h4>{t[0]}</h4><p>{lines(t[1])}</p></> : <p className="wv-feat-solo">{lines(x)}</p>}
  </article>; })}</div>;
}
function Tiles({ items }) {
  return <ul className="wv-tiles">{items.map((x, i) => <li key={i}><span className="wv-tile-icon"><Glyph i={i} /></span><span>{lines(x)}</span></li>)}</ul>;
}
function FlowRows({ rows }) {
  const [head, ...body] = rows;
  return <div className="wv-flowrows" style={{ '--cols': head.length }}>
    <div className="wv-flowrow is-head">{head.map((c, i) => <span key={i}>{c}</span>)}</div>
    {body.map((r, i) => <div className="wv-flowrow" key={i}>{r.map((c, j) => <span key={j} className={j === 0 ? 'is-first' : j === r.length - 1 ? 'is-last' : ''}>{lines(c)}</span>)}</div>)}
  </div>;
}
function Pairs({ rows }) {
  const [head, ...body] = rows;
  return <div className="wv-pairs">
    <div className="wv-pairs-head"><span>{head[0]}</span><span>{head[1]}</span></div>
    <div className="wv-pairs-grid">{body.map((r, i) => <article key={i}><span className="wv-feat-icon"><Glyph i={i} /></span><div><h4>{lines(r[0])}</h4><p>{lines(r[1])}</p></div></article>)}</div>
  </div>;
}
function Table({ rows }) {
  const cols = rows[0].length;
  if (rows.length >= 3 && cols === 2) return <Pairs rows={rows} />;
  if (rows.length >= 3 && cols >= 3 && cols <= 4) return <FlowRows rows={rows} />;
  const [head, ...body] = rows;
  return <div className="wv-table"><table><thead><tr>{head.map((c, i) => <th key={i}>{lines(c)}</th>)}</tr></thead><tbody>{body.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{lines(c)}</td>)}</tr>)}</tbody></table></div>;
}

/** Block-Liste in Darstellungsknoten zerlegen. */
function nodes(blocks) {
  const out = [];
  let heading = '';
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if (/^h[1-6]$/.test(b.t)) heading = b.x;
    if (b.t === 'a' && blocks[i + 1]?.k === 'faq') {
      const items = [];
      while (blocks[i]?.t === 'a' && blocks[i + 1]?.k === 'faq') { items.push({ question: blocks[i].x, answer: blocks[i + 1].x }); i += 2; }
      i--; out.push({ type: 'faq', items }); continue;
    }
    if (b.t === 'h3' && blocks[i + 1]?.k === 'desc') {
      const items = [];
      while (blocks[i]?.t === 'h3' && blocks[i + 1]?.k === 'desc') { items.push({ title: blocks[i].x, text: blocks[i + 1].x }); i += 2; }
      i--; out.push({ type: 'cards', items }); continue;
    }
    if (b.t === 'p' && /^✔️/.test(b.x)) {
      const items = [];
      while (blocks[i]?.t === 'p' && /^✔️/.test(blocks[i].x)) { items.push(blocks[i].x.replace(/^✔️\s*/, '')); i++; }
      i--; out.push({ type: 'tiles', items }); continue;
    }
    if (b.t === 'ul' || b.t === 'ol') { out.push({ type: listKind(b, heading), items: b.items }); continue; }
    out.push({ type: 'block', b });
  }
  return out;
}

function Node({ n, lang, id }) {
  switch (n.type) {
    case 'faq': return <Faq items={n.items} />;
    case 'cards': return <div className="wv-feat">{n.items.map((c, i) => <article key={c.title}><span className="wv-feat-icon"><Glyph i={i} /></span><h4>{c.title}</h4><p>{lines(c.text)}</p></article>)}</div>;
    case 'steps': return <Steps items={n.items} />;
    case 'feat': return <Feat items={n.items} />;
    case 'tiles': return <Tiles items={n.items} />;
    case 'list': return <ul className="wv-list">{n.items.map((x, j) => <li key={j}>{lines(x)}</li>)}</ul>;
    case 'figure': return <figure className={'wv-inline' + (n.alt ? ' is-alt' : '')}><Img k={n.k} lang={lang} /></figure>;
  }
  const b = n.b;
  switch (b.t) {
    case 'h1': return <h2 className="wv-h1">{b.x}</h2>;
    case 'h2': return <h2 id={id}>{b.x}</h2>;
    case 'h3': return <h3>{b.x}</h3>;
    case 'h4': case 'h5': case 'h6': return <h4 className="wv-label">{b.x}</h4>;
    case 'p': return /^➡️/.test(b.x) ? <p className="wv-arrow"><span aria-hidden="true">→</span>{b.x.replace(/^➡️\s*/, '')}</p> : <p className={n.cls}>{lines(b.x)}</p>;
    case 'table': return <Table rows={b.rows} />;
    case 'a': return linkTargets[b.x] ? <div><Go lang={lang} href={linkTargets[b.x]}>{b.x}</Go></div> : <p>{b.x}</p>;
    case 'txt': return <p className={b.k === 'desc' ? 'wv-desc' : 'wv-note'}>{lines(b.x)}</p>;
    default: return null;
  }
}

/** Splits at section labels (item--sub-title-inner on the old site). */
export function splitSections(blocks) {
  const sections = [{ label: null, blocks: [] }];
  blocks.forEach(b => {
    if (b.t === 'txt' && b.k === 'sub') sections.push({ label: b.x, blocks: [] });
    else sections[sections.length - 1].blocks.push(b);
  });
  // "Bereit für makellose Ergebnisse?" steht wortgleich im Anfrage-Abschnitt am Seitenende.
  return sections.filter(s => (s.label || s.blocks.length) && !(s.label === 'Get in touch' && s.blocks[0]?.x === 'Bereit für makellose Ergebnisse?'));
}

export const headingsOf = blocks => blocks.filter(b => b.t === 'h2').map(b => b.x);

/** Erster Absatz = Einleitung; kurzer Schlusssatz = Kernaussage. Der Wortlaut bleibt unverändert. */
function decorate(list) {
  const firstP = list.findIndex(n => n.type === 'block' && n.b.t === 'p');
  list.forEach((n, i) => {
    if (n.type !== 'block' || n.b.t !== 'p' || /^➡️/.test(n.b.x)) return;
    const prev = list[i - 1], next = list[i + 1];
    const endOfBlock = !next || (next.type === 'block' && /^h[1-3]$/.test(next.b.t));
    if (i === firstP && n.b.x.length > 80) n.cls = 'wv-lead';
    else if (endOfBlock && prev && prev.type !== 'block' && n.b.x.length <= 120 && !n.b.x.endsWith(':')) n.cls = 'wv-pull';
  });
  return list;
}

/** Fotos in lange Texte einfügen: nach der Einleitung und danach vor jeder dritten Hauptüberschrift. */
function withFigures(list, pool) {
  if (!pool?.length) return list;
  const out = []; let h2 = 0, k = 0;
  list.forEach(n => {
    if (n.type === 'block' && n.b.t === 'h2') { h2++; if (h2 % 3 === 2) { out.push({ type: 'figure', k: pool[k % pool.length], alt: k % 2 === 1 }); k++; } }
    out.push(n);
  });
  return out;
}

export function Flow({ blocks, lang = 'de', anchors = false, pool }) {
  let h = 0;
  return <div className="wv-flow" lang="de">{withFigures(decorate(nodes(blocks)), pool).map((n, i) => {
    const isH2 = n.type === 'block' && n.b.t === 'h2';
    return <Node key={i} n={n} lang={lang} id={anchors && isH2 ? 'absatz-' + (++h) : undefined} />;
  })}</div>;
}

/** Foto-Raster mit aktuellen Bildern der Website (nur Bildbeschreibung, kein zusätzlicher Text). */
export function PhotoGrid({ items, lang = 'de', label }) {
  return <section className="wv-gallery"><div className="ws-wrap">
    {label && <Mark>{label}</Mark>}
    <div className="wv-gallery-grid">{items.map(it => <figure key={it.src}><img src={it.src} alt={it.alt || ''} loading="lazy" decoding="async" width={it.width || 720} height={it.height || 540} /></figure>)}</div>
  </div></section>;
}

/** Cards that link to the 32 posts: German title, date and "Read more" like the old news page. */
export function NewsIndex({ articles, lang = 'de' }) {
  const { url } = language(lang);
  const fmt = d => new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(d));
  return <section className="wv-section"><div className="ws-wrap"><div className="wv-news" lang="de">{articles.map(a => <a key={a.slug} href={url('/ratgeber/' + a.slug)}>
    <span className="wv-news-img"><Pic lang={lang} name={a.photoKey} /></span>
    <div><small>{fmt(a.date)}</small><h3>{a.title}</h3><span className="ws-more">Read more <b aria-hidden="true">↗</b></span></div>
  </a>)}</div></div></section>;
}

const wide = s => s.blocks.some(b => b.t === 'table' && b.rows[0].length >= 3);

/** Old-site text in our section design. Every section gets a current photo: explicit `photos[i]`, otherwise the next one from `pool`. */
export default function VerbatimBody({ blocks, lang = 'de', photos = [], pool = [] }) {
  const sections = splitSections(blocks);
  let k = 0;
  return <div className="wv-body">{sections.map((s, i) => {
    let photo = photos[i];
    if (photo === undefined) photo = !wide(s) && pool.length ? pool[k++ % pool.length] : null;
    // Lange Abschnitte: Foto als breites Titelbild, Inhalt darunter in voller Breite (keine leere Spalte).
    const long = s.blocks.reduce((n, b) => n + (b.x || '').length + (b.items || []).join('').length + (b.rows || []).flat().join('').length, 0) > 1500;
    return <section key={i} className={'wv-section' + (i % 2 ? ' is-alt' : '')}>
      <div className={'ws-wrap wv-grid' + (photo ? (long ? ' is-long' : ' has-photo') : '')}>
        {photo && long && <figure className="wv-photo wv-banner"><Img k={photo} lang={lang} /></figure>}
        <div className="wv-text">
          {s.label && <Mark>{s.label}</Mark>}
          <Flow blocks={s.blocks} lang={lang} />
        </div>
        {photo && !long && <figure className="wv-photo"><Img k={photo} lang={lang} /></figure>}
      </div>
    </section>;
  })}</div>;
}

/** Leistungsübersicht: jede Leistung (h3-Gruppe) als Zeile mit passendem Foto. */
export function ServiceRows({ blocks, lang = 'de', photoFor, pool = [] }) {
  let k = 0;
  const groups = []; let cur = null;
  blocks.forEach(b => {
    if (b.t === 'h2') { cur = { head: b, items: [], rows: [] }; groups.push(cur); return; }
    if (!cur) { cur = { head: null, items: [], rows: [] }; groups.push(cur); }
    if (b.t === 'h3') { cur.rows.push([b]); return; }
    if (cur.rows.length) cur.rows[cur.rows.length - 1].push(b); else cur.items.push(b);
  });
  return <div className="wv-body">{groups.map((g, gi) => <section key={gi} className={'wv-section' + (gi % 2 ? ' is-alt' : '')}><div className="ws-wrap">
    {(g.head || g.items.length > 0) && (g.rows.length > 0
      ? <div className="wv-group-head"><Flow blocks={[...(g.head ? [g.head] : []), ...g.items]} lang={lang} /></div>
      : <div className="wv-grid has-photo"><div className="wv-text"><Flow blocks={[...(g.head ? [g.head] : []), ...g.items]} lang={lang} /></div>{pool.length > 0 && <figure className="wv-photo"><Img k={pool[k++ % pool.length]} lang={lang} /></figure>}</div>)}
    {g.rows.length > 0 && <div className="wv-rows">{g.rows.map((r, ri) => <div key={ri} className={'wv-row' + (ri % 2 ? ' is-flip' : '')}>
      <figure className="wv-photo"><Img k={photoFor(r[0].x)} lang={lang} /></figure>
      <div className="wv-text"><Flow blocks={r} lang={lang} /></div>
    </div>)}</div>}
  </div></section>)}</div>;
}

/** Zwei quadratische Fotos mit animiertem Rahmen (nur Bildbeschreibung, kein zusätzlicher Text). */
export function SquarePair({ keys, lang = 'de' }) {
  return <div className="wv-pair">{keys.map(k => <figure key={k} className="wv-square"><Pic lang={lang} name={k} /></figure>)}</div>;
}
