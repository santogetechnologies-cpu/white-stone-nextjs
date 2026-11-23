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

function ShelfRelatedGuides({lang = 'de'}) {
  const en = lang === 'en';
  const link = (href) => localizedPath(href, lang);

  const guides = [
    {
      slug: 'regalplan-lesen',
      img: '/assets/shelf_guide_card1.webp',
      alt: en ? 'How to read a shelf plan' : 'Einen Regalplan im Markt richtig lesen',
      title: en ? 'How to read a shelf plan' : 'Einen Regalplan im Markt richtig lesen',
      accent: 'teal',
      cardClass: 'ws-shelf-card-1',
    },
    {
      slug: 'regalservice-beauftragen',
      img: '/assets/shelf_guide_card2.webp',
      alt: en ? 'Arranging shelf services for a store' : 'Regalservice für eine Filiale beauftragen',
      title: en ? 'Arranging shelf services for a store' : 'Regalservice für eine Filiale beauftragen',
      accent: 'blue',
      cardClass: 'ws-shelf-card-2',
    },
    {
      slug: 'aktionsflaeche-aufbauen',
      img: '/assets/shelf_guide_card3.webp',
      alt: en ? 'Setting up the next weekly promotion' : 'Eine Aktionsfläche für die nächste Woche aufbauen',
      title: en ? 'Setting up the next weekly promotion' : 'Eine Aktionsfläche für die nächste Woche aufbauen',
      accent: 'coral',
      cardClass: 'ws-shelf-card-3',
    },
  ];

  return (
    <section className="ws-shelf-guides-section" aria-label={en ? 'Related guides' : 'Passende Ratgeber'}>
      {/* Subtle flowing background curved shapes */}
      <div className="ws-shelf-guides-bg-curves" aria-hidden="true">
        <svg viewBox="0 0 1440 850" preserveAspectRatio="none" className="ws-shelf-curve-svg" fill="none" stroke="none">
          <path d="M680,0 C920,160 1200,70 1440,190 L1440,0 Z" fill="rgba(255, 255, 255, 0.6)" stroke="none" />
          <path d="M0,640 C380,550 780,780 1440,620 L1440,850 L0,850 Z" fill="rgba(255, 255, 255, 0.5)" stroke="none" />
          <path d="M0,700 C420,620 860,820 1440,680 L1440,850 L0,850 Z" fill="rgba(205, 240, 232, 0.35)" stroke="none" />
        </svg>
      </div>

      <div className="ws-wrap ws-shelf-guides-wrap">
        <div className="ws-shelf-guides-layout">
          {/* Left Content Area */}
          <div className="ws-shelf-guide-left">
            <div className="ws-shelf-guide-badge">
              <div className="ws-shelf-guide-badge-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
                  <path d="M6 6h10"/>
                  <path d="M6 10h10"/>
                </svg>
              </div>
              <span className="ws-shelf-guide-badge-text">{en ? 'GUIDE RESOURCES' : 'RATGEBER & WISSEN'}</span>
              <span className="ws-shelf-guide-badge-line" aria-hidden="true" />
            </div>

            <h2 className="ws-shelf-guide-heading">
              <span className="ws-shelf-guide-word-navy">{en ? 'Related' : 'Passende'}</span>
              <span className="ws-shelf-guide-word-teal-wrap">
                <span className="ws-shelf-guide-word-teal">{en ? 'Guides' : 'Ratgeber'}</span>
                <svg className="ws-shelf-guide-swoop" viewBox="0 0 160 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M 2 14 C 28 8 72 2 112 2 C 132 2 150 5 158 9 C 148 6 128 4 108 4 C 68 4 26 10 2 14 Z" fill="#00828a"/>
                </svg>
              </span>
            </h2>

            <p className="ws-shelf-guide-desc">
              {en
                ? 'Practical guides and tips to help you plan, arrange and run effective shelf services.'
                : 'Praktische Anleitungen und Tipps, die Ihnen bei der Planung, Organisation und Durchführung von Regalservices helfen.'}
            </p>

            <div className="ws-shelf-guide-action">
              <a href={link('/ratgeber')} className="ws-shelf-guide-all-btn">
                <span>{en ? 'All guides' : 'Alle Beiträge'}</span>
                <span className="ws-shelf-guide-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right Cards Area - Asymmetric Grid */}
          <div className="ws-shelf-guides-asym">
            {guides.map((item, idx) => (
              <a
                key={item.slug}
                href={link('/ratgeber/' + item.slug)}
                className={`ws-shelf-guide-card ${item.cardClass} ws-shelf-card-accent-${item.accent}`}
                style={{ '--reveal-index': idx }}
              >
                <div className="ws-shelf-guide-img-frame">
                  <div className="ws-shelf-guide-img-wrap">
                    <img
                      src={item.img}
                      alt={item.alt}
                      width={idx === 2 ? '800' : '540'}
                      height={idx === 2 ? '350' : '424'}
                      className="ws-shelf-guide-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="ws-shelf-guide-body">
                  <div className="ws-shelf-guide-meta">
                    <div className="ws-shelf-guide-tag">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
                        <path d="M6 6h10"/>
                        <path d="M6 10h10"/>
                      </svg>
                      <span>{en ? 'GUIDE' : 'RATGEBER'}</span>
                    </div>

                    <h3 className="ws-shelf-guide-title">{item.title}</h3>
                  </div>

                  <div className="ws-shelf-guide-foot">
                    <span className="ws-shelf-guide-circle-btn" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </div>
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
  if (page.key === '/regalservice') {
    return <ShelfRelatedGuides lang={lang} />;
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
