import { Faq, Mark, Pic, Go } from './Design';
import { language } from '../lib/language';

const linkTargets = {
  'Mehr über unsere Dienstleistungen erfahren': '/leistungen',
  'Mehr über uns erfahren': '/ueber-uns',
  'Mehr zum Regalservice': '/regalservice',
};
const lines = text => text.split('\n').flatMap((l, i) => i ? [<br key={i} />, l] : [l]);

function Table({ rows }) {
  const [head, ...body] = rows;
  return <div className="wv-table"><table><thead><tr>{head.map((c, i) => <th key={i}>{lines(c)}</th>)}</tr></thead><tbody>{body.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{lines(c)}</td>)}</tr>)}</tbody></table></div>;
}

/** Turn a flat block list into render nodes, grouping FAQ pairs and heading+description pairs. */
function nodes(blocks) {
  const out = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
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
    out.push({ type: 'block', b });
  }
  return out;
}

function Node({ n, lang, id }) {
  if (n.type === 'faq') return <Faq items={n.items} />;
  if (n.type === 'cards') return <div className="wv-cards">{n.items.map((c, i) => <article key={c.title}><span className="wv-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><div><h3>{c.title}</h3><p>{lines(c.text)}</p></div></article>)}</div>;
  const b = n.b;
  switch (b.t) {
    case 'h1': return <h2 className="wv-h1">{b.x}</h2>;
    case 'h2': return <h2 id={id}>{b.x}</h2>;
    case 'h3': return <h3>{b.x}</h3>;
    case 'h4': case 'h5': case 'h6': return <h4 className="wv-label">{b.x}</h4>;
    case 'p': return <p className={n.cls}>{lines(b.x)}</p>;
    case 'ul': return <ul>{b.items.map((x, j) => <li key={j}>{lines(x)}</li>)}</ul>;
    case 'ol': return <ol>{b.items.map((x, j) => <li key={j}>{lines(x)}</li>)}</ol>;
    case 'table': return <Table rows={b.rows} />;
    case 'a': return linkTargets[b.x] ? <div><Go lang={lang} href={linkTargets[b.x]}>{b.x}</Go></div> : <p>{b.x}</p>;
    case 'txt': return <p className={b.k === 'desc' ? 'wv-desc' : undefined}>{lines(b.x)}</p>;
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

/** Erster Absatz = Einleitung; kurzer Schlusssatz nach einer Liste = Kernaussage. Der Wortlaut bleibt unverändert. */
function decorate(list, editorial) {
  if (!editorial) return list;
  const firstP = list.findIndex(n => n.type === 'block' && n.b.t === 'p');
  const firstHead = list.findIndex(n => n.type === 'block' && /^h[1-3]$/.test(n.b.t));
  list.forEach((n, i) => {
    if (n.type !== 'block' || n.b.t !== 'p') return;
    const prev = list[i - 1], last = i === list.length - 1;
    if (i === firstP && (firstHead < 0 || firstHead < i) && n.b.x.length > 80) n.cls = 'wv-lead';
    else if (last && prev && prev.type === 'block' && (prev.b.t === 'ul' || prev.b.t === 'ol' || prev.b.t === 'p') && n.b.x.length <= 110 && !n.b.x.endsWith(':')) n.cls = 'wv-pull';
  });
  return list;
}

export function Flow({ blocks, lang = 'de', anchors = false, editorial = false }) {
  let h = 0;
  return <div className={'wv-flow' + (editorial ? ' is-editorial' : '')} lang="de">{decorate(nodes(blocks), editorial).map((n, i) => {
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

export function PeopleList({ people, children }) {
  return <div className="wv-people">{people.map(p => <article key={p.name}><h3>{p.name}</h3><p>{p.role}</p></article>)}{children}</div>;
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

/** Old-site text in our section design. `photos` lists a current-site photo key per section (null = text only). */
export default function VerbatimBody({ blocks, lang = 'de', photos = [] }) {
  const sections = splitSections(blocks);
  return <div className="wv-body">{sections.map((s, i) => {
    const photo = photos[i];
    return <section key={i} className={'wv-section' + (i % 2 ? ' is-alt' : '')}>
      <div className={'ws-wrap wv-grid' + (photo ? ' has-photo' : '')}>
        <div className="wv-text">
          {s.label && <Mark>{s.label}</Mark>}
          <Flow blocks={s.blocks} lang={lang} editorial />
        </div>
        {photo && <figure className="wv-photo"><Pic lang={lang} name={photo} /></figure>}
      </div>
    </section>;
  })}</div>;
}

/** Zwei quadratische Fotos mit animiertem Rahmen (nur Bildbeschreibung, kein zusätzlicher Text). */
export function SquarePair({ keys, lang = 'de' }) {
  return <div className="wv-pair">{keys.map(k => <figure key={k} className="wv-square"><Pic lang={lang} name={k} /></figure>)}</div>;
}
