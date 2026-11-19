'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { localizedPath } from '../lib/paths';

const entries = [
  { href: '/reinigung', image: 'reinigung', de: ['Reinigung', 'Für Gebäude und Gewerbe', 'Glas, Büros, Hotels und mehr'], en: ['Cleaning', 'Buildings & workplaces', 'Windows, offices, hotels and more'] },
  { href: '/regalservice', image: 'regalservice', de: ['Regalservice', 'Für den Einzelhandel', 'Warenpflege und Aktionsflächen'], en: ['Shelf services', 'Retail stores', 'Replenishment and displays'] },
  { href: '/haushalt', image: 'haushalt', de: ['Haushalt', 'Für Ihr Zuhause', 'Haushaltshilfe und Preisrechner'], en: ['Household', 'Private homes', 'Home help and cost calculator'] }
];
const shortcuts = [
  ['/ueber-uns', 'Über uns', 'About us'], ['/team', 'Unser Team', 'Our team'], ['/ratgeber', 'Ratgeber', 'Guides'],
  ['/haushalt#preisrechner', 'Preisrechner', 'Price calculator'], ['/kontakt', 'Kontakt', 'Contact']
];

function SparklesIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15"/>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
      <path d="m3.3 7 8.7 5 8.7-5"/>
      <path d="M12 22V12"/>
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

const serviceIcons = [<SparklesIcon key="sparkles" />, <CubeIcon key="cube" />, <HomeIcon key="home" />];

function BuildingIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function GuidesIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/>
    </svg>
  );
}

function CalcIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

const shortcutIcons = [<BuildingIcon key="b" />, <TeamIcon key="t" />, <GuidesIcon key="g" />, <CalcIcon key="c" />, <ContactIcon key="m" />];

export function Brand({ lang = 'de' }) {
  return <a className="brand" href={localizedPath('/', lang)} aria-label={'White Stone GmbH · ' + (lang === 'en' ? 'Home' : 'Startseite')}>
    <span className="brand-emblem" aria-hidden="true"><span>w</span><i>✓</i></span><span>White Stone GmbH</span>
  </a>;
}
function LocaleSwitch({ lang, path, suffix }) {
  return <nav className="ws-locale" aria-label={lang === 'de' ? 'Sprachauswahl' : 'Language selection'}>
    {['de', 'en'].map(code => code === lang
      ? <span key={code} aria-current="true" lang={code}>{code.toUpperCase()}</span>
      : <a key={code} lang={code} hrefLang={code} aria-label={code === 'en' ? 'Switch to English' : 'Auf Deutsch wechseln'} href={localizedPath(path, code) + suffix}>{code.toUpperCase()}</a>)}
  </nav>;
}
function MenuGlyph({ close = false }) {
  return <span className={'ws-menu-glyph' + (close ? ' close' : '')} aria-hidden="true"><i /><i /></span>;
}
export default function Navigation({ home = false, lang = 'de' }) {
  const en = lang === 'en', path = usePathname() || '/', url = href => localizedPath(href, lang);
  const [open, setOpen] = useState(false), [active, setActive] = useState(2), [suffix, setSuffix] = useState('');
  const dialog = useRef(null), button = useRef(null), dismiss = useRef(null);
  const current = entries[active];
  useEffect(() => {
    const update = () => setSuffix(window.location.search + window.location.hash);
    update(); window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, [path]);
  useEffect(() => {
    if (!open) return;
    const modal = dialog.current;
    modal.showModal();
    dismiss.current?.focus({ preventScroll: true });
    const root = document.documentElement, overflow = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => { root.style.overflow = overflow; if (modal.open) modal.close(); button.current?.focus({ preventScroll: true }); };
  }, [open]);
  function show() {
    const match = entries.findIndex(e => path === url(e.href) || path.startsWith(url(e.href) + '/'));
    setActive(match >= 0 ? match : 2); setOpen(true);
  }
  const close = () => setOpen(false);
  return <header className={'header container ws-nav-header' + (home ? ' over-window' : '')}>
    <Brand lang={lang} />
    <div className="ws-nav-center">
      <nav className="ws-top-services" aria-label={en ? 'Main services' : 'Hauptleistungen'}>
        {entries.map(e => <a key={e.href} href={url(e.href)} aria-current={path === url(e.href) ? 'page' : undefined}>{e[lang][0]}</a>)}
      </nav>
      <LocaleSwitch lang={lang} path={path} suffix={suffix} />
    </div>
    <div className="ws-nav-tools">

      {/* Contact Button */}
      <a
        href={url('/kontakt')}
        className="ws-contact-button"
      >
        {en ? 'Contact' : 'Kontakt'}

      </a>

      {/* Existing Menu Button */}
      <button
        className="ws-menu-button"
        ref={button}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="ws-full-menu"
        onClick={show}
      >
        <span>{en ? 'Menu' : 'Menü'}</span>
        <MenuGlyph />
      </button>

    </div>
    <dialog ref={dialog} id="ws-full-menu" className="ws-menu-screen" aria-label={en ? 'Site navigation' : 'Seitennavigation'} onCancel={e => { e.preventDefault(); close(); }}>
      {open && <div className="ws-menu-inner">
        {/* Header Bar */}
        <div className="ws-menu-bar">
          <Brand lang={lang} />
          <div className="ws-nav-tools">
            <LocaleSwitch lang={lang} path={path} suffix={suffix} />
            <button
              className="ws-menu-button ws-menu-close-btn"
              ref={dismiss}
              onClick={close}
              aria-label={en ? 'Close menu' : 'Menü schließen'}
            >
              <span>{en ? 'Close' : 'Schließen'}</span>
              <MenuGlyph close />
            </button>
          </div>
        </div>

        {/* Middle Content: Left Narrative + Right 3 Service Cards */}
        <div className="ws-menu-content">
          <div className="ws-menu-intro">
            <span className="ws-menu-tag">{en ? 'Explore Our Services' : 'Unsere Leistungen'}</span>
            <h2 className="ws-menu-title">
              <span>{en ? 'Find the right' : 'Finden Sie die'}</span><br />
              <span className="ws-menu-title-accent">{en ? <>service for<br />you.</> : <>passende<br />Leistung.</>}</span>
            </h2>
            <p className="ws-menu-desc">
              {en
                ? 'Professional cleaning, shelf services and household support – tailored to your needs.'
                : 'Professionelle Reinigung, Regalservice und Hilfe im Haushalt – abgestimmt auf Ihren Bedarf.'}
            </p>
            <div className="ws-menu-accent-bar" aria-hidden="true" />
          </div>

          <div className="ws-menu-cards">
            {entries.map((item, i) => {
              const isCardActive = active === i;
              return (
                <a
                  key={item.href}
                  href={url(item.href)}
                  className={'ws-menu-card' + (isCardActive ? ' is-active' : '')}
                  onFocus={() => setActive(i)}
                  onPointerEnter={e => { if (e.pointerType !== 'touch') setActive(i); }}
                  onClick={close}
                >
                  <div className="ws-card-img-wrap">
                    <img
                      src={'/fotografie/' + item.image + '.webp'}
                      alt={item[lang][0]}
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className="ws-card-body">
                    <div className="ws-card-badge" aria-hidden="true">
                      {serviceIcons[i]}
                    </div>
                    <h3 className="ws-card-title">{item[lang][0]}</h3>
                    <p className="ws-card-subtitle">{item[lang][1]}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom 5 Navigation Links */}
        <div className="ws-menu-bottom-wrap">
          <nav className="ws-menu-bottom-grid" aria-label={en ? 'More destinations' : 'Weitere Seiten'}>
            {shortcuts.map(([href, de, eng], idx) => (
              <a key={href} href={url(href)} className="ws-bottom-link" onClick={close}>
                <div className="ws-bottom-icon" aria-hidden="true">
                  {shortcutIcons[idx]}
                </div>
                <span className="ws-bottom-label">{en ? eng : de}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>}
    </dialog>
  </header>;
}
