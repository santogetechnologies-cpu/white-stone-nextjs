import {getCatalog} from '../lib/content';
import {localizedPath} from '../lib/paths';
import {Pic} from './Design';

function CleaningRelatedGuides({lang = 'de'}) {
  const en = lang === 'en';
  const link = (href) => localizedPath(href, lang);

  const featured = {
    slug: 'fenstertermin-vorbereiten',
    photoKey: 'cleaning_guide_window',
    category: en ? 'WINDOW CLEANING' : 'GLASREINIGUNG',
    title: en ? 'Preparing for a window cleaning visit' : 'So bereiten Sie den Fenstertermin vor',
    desc: en
      ? 'A simple checklist to help you get the best results from your window cleaning service.'
      : 'Ein guter Überblick über Seiten, Rahmen und Zugang macht ein Angebot für Fensterreinigung genauer.',
  };

  const stack = [
    {
      slug: 'fassadenreinigung-ohne-hochdruck',
      photoKey: 'cleaning_guide_facade',
      category: en ? 'FACADE CARE' : 'FASSADENPFLEGE',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m12 2 10 5-10 5-10-5 10-5z" />
          <path d="m2 12 10 5 10-5" />
          <path d="m2 17 10 5 10-5" />
        </svg>
      ),
      title: en ? 'When a gentle façade wash makes sense' : 'Wann eine schonende Fassadenwäsche passt',
      desc: en
        ? 'Learn when and why a professional façade cleaning is the right choice.'
        : 'Material, Beschichtung und Fugen entscheiden darüber, wie eine Außenwand behandelt werden kann.',
    },
    {
      slug: 'belag-an-der-fassade',
      photoKey: 'cleaning_guide_surface',
      category: en ? 'SURFACE CARE' : 'OBERFLÄCHENPFLEGE',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6" />
        </svg>
      ),
      title: en ? 'Understanding green deposits and dark streaks on façades' : 'Grüne Beläge und dunkle Laufspuren einordnen',
      desc: en
        ? 'Find out what causes green deposits and how to remove them effectively.'
        : 'Schon die Verteilung einer Verfärbung liefert Hinweise für den Besichtigungstermin.',
    },
    {
      slug: 'zimmerwechsel-im-hotel',
      photoKey: 'cleaning_guide_hotel',
      category: en ? 'HOTEL CLEANING' : 'HOTELREINIGUNG',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 17h20" />
          <path d="M2 8v10" />
          <path d="M22 8v10" />
          <path d="M4 8h16a1 1 0 0 1 1 1v4H3V9a1 1 0 0 1 1-1z" />
          <rect x="5.5" y="9" width="4" height="2.5" rx="0.6" />
          <rect x="14.5" y="9" width="4" height="2.5" rx="0.6" />
          <path d="M4 14v4" />
          <path d="M20 14v4" />
        </svg>
      ),
      title: en ? 'How professional housekeeping keeps hotels guest-ready' : 'Zimmerwechsel mit der Rezeption abstimmen',
      desc: en
        ? 'A look at the key steps, standards and benefits of professional hotel cleaning.'
        : 'Abgereist, noch belegt oder bereits für den nächsten Gast vorgesehen? Der Zimmerstatus steuert den Ablauf.',
    },
  ];

  return (
    <section className="ws-cleaning-guides-section">
      <div className="ws-wrap ws-cleaning-guides-wrap">
        <div className="ws-cleaning-guides-head">
          <div className="ws-cleaning-guides-title-group">
            <div className="ws-cleaning-guides-badge">
              <span className="ws-cleaning-guides-badge-bar" aria-hidden="true" />
              <span>{en ? 'RELATED GUIDES' : 'PASSENDE RATGEBER'}</span>
            </div>
            <h2 className="ws-cleaning-guides-heading">
              {en ? 'Practical guides for' : 'Praktische Ratgeber für'}{' '}
              <em>{en ? 'cleaner, safer spaces.' : 'saubere, gepflegte Räume.'}</em>
            </h2>
          </div>
          <a href={link('/ratgeber')} className="ws-cleaning-guides-all-btn">
            {en ? 'All guides' : 'Alle Beiträge'}{' '}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="ws-cleaning-guides-grid">
          {/* Left Column: Featured Card */}
          <a
            href={link('/ratgeber/' + featured.slug)}
            className="ws-cleaning-featured-card"
          >
            <div className="ws-cleaning-featured-img-wrap">
              <Pic name={featured.photoKey} lang={lang} className="ws-cleaning-featured-img" />
              <div className="ws-cleaning-featured-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="12" y1="3" x2="12" y2="21" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                </svg>
                <span>{featured.category}</span>
              </div>
              <div className="ws-cleaning-featured-wave" aria-hidden="true">
                <svg viewBox="0 0 420 30" preserveAspectRatio="none">
                  <path d="M0,12 C110,10 160,26 240,24 C320,22 370,6 420,0 L420,30 L0,30 Z" fill="rgba(215, 238, 252, 0.7)" stroke="none" />
                  <path d="M0,16 C110,14 160,29 240,28 C320,26 370,10 420,4 L420,30 L0,30 Z" fill="#ffffff" stroke="none" />
                </svg>
              </div>
            </div>
            <div className="ws-cleaning-featured-body">
              <div className="ws-cleaning-featured-text">
                <h3>{featured.title}</h3>
                <p>{featured.desc}</p>
              </div>
              <span className="ws-cleaning-guide-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>

          {/* Right Column: 3 Horizontal Stacked Cards */}
          <div className="ws-cleaning-stacked-col">
            {stack.map((item) => (
              <a
                key={item.slug}
                href={link('/ratgeber/' + item.slug)}
                className="ws-cleaning-stacked-card"
              >
                <div className="ws-cleaning-stacked-img-wrap">
                  <Pic name={item.photoKey} lang={lang} className="ws-cleaning-stacked-img" />
                </div>
                <div className="ws-cleaning-stacked-body">
                  <div className="ws-cleaning-stacked-tag">
                    {item.icon}
                    <span>{item.category}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <span className="ws-cleaning-guide-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RelatedGuides({page, lang}) {
  if (page.key === '/reinigung') {
    return <CleaningRelatedGuides lang={lang} />;
  }

  const {adviceArticles} = getCatalog(lang);
  const area = page.article?.relatedHref || page.key;
  const matches = adviceArticles.filter(
    (article) =>
      article.slug !== page.article?.slug &&
      (article.relatedHref === area ||
        (area === '/reinigung' && article.relatedHref.startsWith('/reinigung/')))
  );
  if (!matches.length) return null;
  const link = (href) => localizedPath(href, lang);
  return (
    <section className="ws-related">
      <div className="ws-wrap">
        <div className="ws-related-head">
          <h2>{lang === 'en' ? 'Related guides' : 'Passende Ratgeber'}</h2>
          <a href={link('/ratgeber')}>
            {lang === 'en' ? 'All guides' : 'Alle Beiträge'} →
          </a>
        </div>
        <div className="ws-related-grid">
          {matches.slice(0, 3).map((article) => (
            <a key={article.slug} href={link('/ratgeber/' + article.slug)}>
              <Pic name={article.photoKey} lang={lang} />
              <span>{article.title}</span>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
