'use client';

import { useId, useRef, useState } from 'react';
import { language } from '../lib/language';
import { photos } from '../lib/photos';

const entries = [
  {
    key: 'gallery_glas',
    title: 'Glasreinigung',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ws-gallery-icon"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
  {
    key: 'gallery_hotel',
    title: 'Hotelreinigung',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ws-gallery-icon"
        aria-hidden="true"
      >
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
  },
  {
    key: 'ws_shelf_pasta_facing',
    title: 'Warenpflege',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ws-gallery-icon"
        aria-hidden="true"
      >
        <circle cx="8.5" cy="19.5" r="1.5" />
        <circle cx="17.5" cy="19.5" r="1.5" />
        <path d="M2.5 4h3l2.4 9.5a1.2 1.2 0 0 0 1.2.9h9.4a1.2 1.2 0 0 0 1.2-.9L21.5 6.5H6" />
        <line x1="7" y1="10" x2="20" y2="10" />
      </svg>
    ),
  },
  {
    key: 'gallery_haushalt',
    title: 'Haushalt',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ws-gallery-icon"
        aria-hidden="true"
      >
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
        <path d="M10 21v-5h4v5" />
      </svg>
    ),
  },
  {
    key: 'gallery_buero',
    title: 'Büroreinigung',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ws-gallery-icon"
        aria-hidden="true"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
        <path d="M8 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 14h.01" />
      </svg>
    ),
  },
  {
    key: 'gallery_bau',
    title: 'Bau- & Sonderreinigung',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ws-gallery-icon"
        aria-hidden="true"
      >
        <path d="M3 21h18" />
        <path d="M6 18h12l-2-6H8l-2 6z" />
        <path d="M12 3v9" />
        <circle cx="12" cy="3" r="1" fill="#1d4ed8" />
      </svg>
    ),
  },
];

export default function Gallery({ lang = 'de' } = {}) {
  const { t, alt } = language(lang);
  const en = lang === 'en';
  const [selected, setSelected] = useState(0);
  const dialog = useRef(null);

  const step = (n) => setSelected((x) => (x + n + entries.length) % entries.length);
  const current = entries[selected];

  return (
    <>
      <div className="ws-gallery-header">
        <div className="ws-gallery-badge">
          <span>{en ? 'GALLERY' : 'GALERIE'}</span>
        </div>
        <div className="ws-gallery-underline" aria-hidden="true" />
        <h2 className="ws-gallery-title">
          {en ? 'Our work' : 'Unsere Arbeit'} <em>{en ? 'in pictures.' : 'in Bildern.'}</em>
        </h2>
      </div>

      <div className="ws-gallery-grid">
        {entries.map((item, i) => (
          <button
            key={item.key}
            type="button"
            className="ws-gallery-card"
            onClick={() => {
              setSelected(i);
              dialog.current?.showModal();
            }}
            aria-label={`${t(item.title)} ${t('vergrößern')}`}
          >
            <div className="ws-gallery-img-wrap">
              <img
                src={photos[item.key].src}
                alt={alt(item.key)}
                className={`ws-gallery-img ws-gallery-img-${item.key}`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="ws-gallery-caption">
              <div className="ws-gallery-meta">
                {item.icon}
                <span className="ws-gallery-card-title">{t(item.title)}</span>
              </div>
              <span className="ws-gallery-btn" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0c4a6e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>

      <dialog
        className="ws-lightbox"
        aria-label={t('Bildergalerie')}
        ref={dialog}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current.close();
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') step(-1);
          if (e.key === 'ArrowRight') step(1);
        }}
      >
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          className="ws-x"
          aria-label={t('Schließen')}
        >
          ×
        </button>
        <img src={photos[current.key].src} alt={alt(current.key)} />
        <div>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label={t('Vorheriges Bild')}
          >
            ←
          </button>
          <span>
            {selected + 1} / {entries.length} · {t(current.title)}
          </span>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label={t('Nächstes Bild')}
          >
            →
          </button>
        </div>
      </dialog>
    </>
  );
}
