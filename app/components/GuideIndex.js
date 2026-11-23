'use client';
import { language } from '../lib/language';
import { useState, useEffect } from 'react';
import { photos } from '../lib/photos';

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const CATEGORY_DESCRIPTIONS = {
  en: {
    'Shelf services': 'Planogram compliance, shelf arrangements, stock maintenance and retail display standards.',
    'Building cleaning': 'Stairwell care, shared surface cleaning, commercial properties and routine maintenance.',
    'Household services': 'Domestic cleaning visits, home organisation, scheduled assistance and care tips.',
    'Façade care': 'Gentle façade washing, treating green algae deposits, and long-term exterior preservation.',
    'Glass cleaning': 'Window cleaning preparation, frame care, streak-free glazing and access planning.',
    'Office cleaning': 'Sanitation protocols, desk maintenance and hygiene standards for collaborative workspaces.',
    'Hotels': 'Housekeeping workflows, room changeovers and quality assurance for hospitality.',
    'Hotel cleaning': 'Detailed housekeeping inspection checklists and quality standards for guest rooms.',
    'Education': 'School and nursery cleaning routines coordinated around teaching schedules.',
    'School cleaning': 'Hygiene concepts for classrooms, sports facilities, cafeterias and sanitary blocks.',
    'Specialist cleaning': 'Technical cleaning procedures integrated into active production environments.',
    'Construction and handover': 'Post-construction builder cleans, fine cleaning and handover readiness.',
    'Sustainability': 'Eco-conscious cleaning practices, water-saving methods and sustainable supplies.',
    'Hygiene': 'Documented disinfection schedules and systematic hygiene control protocols.',
  },
  de: {
    'Regalservice': 'Regalpläne, Warenverräumung, Inventarpflege und Präsentationsstandards im Einzelhandel.',
    'Gebäudereinigung': 'Treppenhauspflege, Gemeinschaftsflächen, Gewerbeobjekte und kontinuierliche Unterhaltsreinigung.',
    'Haushalt': 'Regelmäßige Haushaltshilfe, Vorbereitung von Einsätzen und praktische Entlastung im Alltag.',
    'Fassadenpflege': 'Schonende Fassadenwäsche, Behandlung von Grünbelägen und Werterhalt für Außenflächen.',
    'Glasreinigung': 'Vorbereitung von Fensterterminen, streifenfreie Glasreinigung und Pflege von Rahmen.',
    'Büroreinigung': 'Hygienestandards, Schreibtischpflege und Sauberkeitskonzepte für moderne Arbeitsplätze.',
    'Hotellerie': 'Housekeeping-Abläufe, schnelle Zimmerwechsel und Qualitätssicherung im Hotelbetrieb.',
    'Hotelreinigung': 'Systematische Kontrollsysteme und Housekeeping-Standards für Beherbergungsbetriebe.',
    'Bildungseinrichtungen': 'Reinigungs- und Hygienepläne abgestimmt auf Unterrichtszeiten und Ganztagsbetrieb.',
    'Schulreinigung': 'Hygienekonzepte für Klassenzimmer, Sporthallen, Mensen und Sanitärbereiche.',
    'Sonderreinigung': 'Technische und industrielle Reinigungsverfahren während des laufenden Betriebs.',
    'Bau und Übergabe': 'Bauendreinigung, Grob- und Feinreinigung zur termingerechten Bauabnahme.',
    'Nachhaltigkeit': 'Ressourcenschonende Verfahren, umweltfreundliche Reinigungsmittel und nachhaltige Pflege.',
    'Hygiene': 'Dokumentierte Desinfektionsmaßnahmen und nachvollziehbare Hygieneprotokolle.',
  },
};

export default function GuideIndex({ lang = 'de', entries = [] }) {
  const { t, url, alt } = language(lang);

  // Group entries by category
  const categoriesMap = new Map();
  entries.forEach((a) => {
    if (!categoriesMap.has(a.category)) {
      categoriesMap.set(a.category, []);
    }
    categoriesMap.get(a.category).push(a);
  });

  const allCategories = Array.from(categoriesMap.entries()).map(([name, guides]) => ({
    name,
    slug: slugify(name),
    guides,
    count: guides.length,
    description: CATEGORY_DESCRIPTIONS[lang]?.[name] || guides[0]?.summary || '',
    photoKey: guides[0]?.photoKey || 'glas',
  }));

  const [selectedCat, setSelectedCat] = useState(t('Alle'));
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  // Filter categories
  const q = query.trim().toLocaleLowerCase(lang);
  const visibleCategories = allCategories.filter((cat) => {
    const matchesDropdown = selectedCat === t('Alle') || selectedCat === cat.name;
    if (!matchesDropdown) return false;
    if (!q) return true;
    const nameMatches = cat.name.toLocaleLowerCase(lang).includes(q);
    const guideMatches = cat.guides.some((g) =>
      (g.title + ' ' + g.summary).toLocaleLowerCase(lang).includes(q)
    );
    return nameMatches || guideMatches;
  });

  const totalVisibleGuides = visibleCategories.reduce((acc, c) => acc + c.guides.length, 0);

  // Manage body scroll and Escape key when modal is open
  useEffect(() => {
    if (!activeCategory) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveCategory(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeCategory]);

  const categoryOptions = [t('Alle'), ...allCategories.map((c) => c.name)];

  return (
    <section className={`ws-wrap ws-section ws-guide-lib-section ${activeCategory ? 'ws-has-open-modal' : ''}`}>
      {/* Search & Category Filter Toolbar */}
      <div className="ws-guide-tools">
        <label className="ws-guide-tool-field">
          <span className="ws-guide-tool-label">{t('Themengebiet')}</span>
          <div className="ws-guide-select-wrapper">
            <select
              value={selectedCat}
              onChange={(e) => setSelectedCat(e.target.value)}
              className="ws-guide-select"
              aria-label={t('Themengebiet')}
            >
              {categoryOptions.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
        </label>

        <label className="ws-guide-tool-field">
          <span className="ws-guide-tool-label">{t('Beiträge durchsuchen')}</span>
          <div className="ws-guide-search-wrapper">
            <svg
              className="ws-guide-search-icon"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              value={query}
              type="search"
              placeholder={t('z. B. Fassade')}
              onChange={(e) => setQuery(e.target.value)}
              className="ws-guide-search-input"
              aria-label={t('Beiträge durchsuchen')}
            />
          </div>
        </label>

        <div className="ws-guide-count" aria-live="polite">
          <span className="ws-guide-count-number">{visibleCategories.length}</span>
          <span className="ws-guide-count-label">
            {visibleCategories.length === 1
              ? lang === 'en'
                ? 'Category'
                : 'Kategorie'
              : lang === 'en'
              ? 'Categories'
              : 'Kategorien'}{' '}
            ({totalVisibleGuides} {totalVisibleGuides === 1 ? t('Beitrag') : t('Beiträge')})
          </span>
        </div>
      </div>

      {/* Main Category Cards Grid */}
      {visibleCategories.length > 0 ? (
        <div className="ws-guide-grid ws-category-grid" role="list">
          {visibleCategories.map((cat) => {
            const photo = photos[cat.photoKey] || photos.glas;
            return (
              <article key={cat.name} className="ws-guide-card ws-category-card" role="listitem">
                <div
                  className="ws-category-card-inner"
                  onClick={() => setActiveCategory(cat.name)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveCategory(cat.name);
                    }
                  }}
                  aria-haspopup="dialog"
                  aria-label={`${cat.name}: ${cat.count} ${
                    cat.count === 1 ? t('Beitrag') : t('Beiträge')
                  }`}
                >
                  <div className="ws-guide-card-thumb">
                    <img
                      src={photo.src}
                      alt={alt(cat.photoKey)}
                      loading="lazy"
                      width={photo.width || 800}
                      height={photo.height || 500}
                      className="ws-guide-card-img"
                    />
                    <span className="ws-category-card-count-badge">
                      {cat.count} {cat.count === 1 ? t('Beitrag') : t('Beiträge')}
                    </span>
                  </div>

                  <div className="ws-guide-card-body">
                    <div className="ws-guide-card-meta">
                      <span className="ws-guide-card-category">
                        {lang === 'en' ? 'Guide Category' : 'Themenbereich'}
                      </span>
                    </div>

                    <div className="ws-guide-card-content">
                      <h3 className="ws-guide-card-title">{cat.name}</h3>
                      <p className="ws-guide-card-desc">{cat.description}</p>
                    </div>

                    <div className="ws-category-card-action-bar">
                      <span className="ws-category-explore-btn">
                        <span>{lang === 'en' ? 'Explore Guides' : 'Ratgeber entdecken'}</span>
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="ws-guide-empty">
          <div className="ws-guide-empty-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <p className="ws-guide-empty-text">
            {t('Zu Ihrer Suche wurde kein Beitrag gefunden. Versuchen Sie einen anderen Suchbegriff.')}
          </p>
        </div>
      )}

      {/* Category Guides Modals (Rendered in DOM for complete SSR & direct access) */}
      {allCategories.map((cat) => {
        const isOpen = activeCategory === cat.name;
        return (
          <div
            key={cat.name}
            id={`modal-${cat.slug}`}
            className={`ws-guide-modal-backdrop ${isOpen ? 'is-open' : 'is-closed'}`}
            aria-hidden={!isOpen}
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveCategory(null);
            }}
          >
            <div
              className="ws-guide-modal"
              role="dialog"
              aria-modal={isOpen}
              aria-labelledby={`modal-title-${cat.slug}`}
            >
              {/* Modal Header */}
              <div className="ws-guide-modal-header">
                <div className="ws-guide-modal-title-group">
                  <span className="ws-guide-modal-tag">
                    {lang === 'en' ? 'Guide Category' : 'Themenbereich'}
                  </span>
                  <div className="ws-guide-modal-title-row">
                    <h3 id={`modal-title-${cat.slug}`} className="ws-guide-modal-heading">
                      {cat.name}
                    </h3>
                    <span className="ws-guide-modal-count-pill">
                      {cat.count} {cat.count === 1 ? t('Beitrag') : t('Beiträge')}
                    </span>
                  </div>
                  <p className="ws-guide-modal-desc">{cat.description}</p>
                </div>

                <button
                  type="button"
                  className="ws-guide-modal-close-btn"
                  onClick={() => setActiveCategory(null)}
                  aria-label={lang === 'en' ? 'Close dialog' : 'Schließen'}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Guides List */}
              <div className="ws-guide-modal-body">
                <div className="ws-modal-guide-list" role="list">
                  {cat.guides.map((guide) => (
                    <article key={guide.slug} className="ws-modal-guide-row" role="listitem">
                      <a href={url('/ratgeber/' + guide.slug)} className="ws-modal-guide-row-link">
                        <div className="ws-modal-guide-row-main">
                          <h4 className="ws-modal-guide-row-title">{guide.title}</h4>
                          <p className="ws-modal-guide-row-desc">{guide.summary}</p>
                        </div>
                        <div className="ws-modal-guide-row-action">
                          <span className="ws-modal-guide-action-text">{t('Artikel lesen')}</span>
                          <svg
                            className="ws-modal-guide-action-arrow"
                            viewBox="0 0 24 24"
                            width="15"
                            height="15"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
