import { language } from '../lib/language';
import Navigation from './Navigation';
import HeroScene from './HeroScene';

const services = [
    { href: '/reinigung', de: 'Reinigung', en: 'Cleaning', icon: 'spray' },
    { href: '/regalservice', de: 'Regalservice', en: 'Shelf services', icon: 'shelf' },
    { href: '/haushalt', de: 'Haushalt', en: 'Household', icon: 'home' }
];

/* Animierte Symbole: Sprühflasche sprüht, Regal räumt sich ein, Haus wird mit einem Tuch geputzt. */
function ServiceIcon({ name }) {
    const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (name === 'spray') return (<svg className="ai ai-spray" viewBox="0 0 48 48" aria-hidden="true" {...p}>
        <path d="M19 24h12l1 3v12a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V27z" />
        <path d="M18 32h14" />
        <path d="M21 24v-5h8v5" />
        <path d="M18 11h11l4 4v4H18z" />
        <path d="M18 13h-5" />
        <path className="ai-trigger" d="M23 19l-4 7" />
        <g className="ai-mist">
            <circle className="ai-drop d1" cx="11" cy="13" r="1.5" />
            <circle className="ai-drop d2" cx="11" cy="13" r="1.2" />
            <circle className="ai-drop d3" cx="11" cy="13" r="1.3" />
            <circle className="ai-drop d4" cx="11" cy="13" r="1" />
            <circle className="ai-drop d5" cx="11" cy="13" r="1.1" />
            <circle className="ai-drop d6" cx="11" cy="13" r=".9" />
        </g>
    </svg>);
    if (name === 'shelf') return (<svg className="ai ai-shelf" viewBox="0 0 48 48" aria-hidden="true" {...p}>
        <path d="M6 6v36M42 6v36M6 6h36M6 24h36M6 42h36" />
        <rect className="ai-box b1" x="10" y="14" width="8" height="10" rx="1" />
        <rect className="ai-box b2" x="21" y="17" width="7" height="7" rx="1" />
        <rect className="ai-box b3" x="31" y="12" width="7" height="12" rx="1" />
        <rect className="ai-box b4" x="10" y="33" width="9" height="9" rx="1" />
        <rect className="ai-box b5" x="23" y="35" width="6" height="7" rx="1" />
        <rect className="ai-box b6" x="32" y="30" width="6" height="12" rx="1" />
    </svg>);
    return (<svg className="ai ai-home" viewBox="0 0 48 48" aria-hidden="true" {...p}>
        <path d="M5 23 24 7l19 16" />
        <path d="M10 20v22h28V20" />
        <path d="M21 42V31h6v11" />
        <circle className="ai-dirt t1" cx="15" cy="26" r="1.4" />
        <circle className="ai-dirt t2" cx="33" cy="27" r="1.6" />
        <circle className="ai-dirt t3" cx="16" cy="35" r="1.2" />
        <circle className="ai-dirt t4" cx="33" cy="36" r="1.3" />
        <g className="ai-cloth"><rect x="-4.5" y="-3" width="9" height="6" rx="2.2" /><circle className="ai-foam f1" cx="-5.5" cy="2" r="1.1" /><circle className="ai-foam f2" cx="5.5" cy="-1.5" r=".9" /></g>
        <path className="ai-shine" d="M37 9l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z" />
    </svg>);
}

export default function Hero({ lang = 'de' } = {}) {
    const { url } = language(lang);
    const en = lang === 'en';

    return (<section className="hero ws-hero" id="startseite">
        <HeroScene />
        <Navigation lang={lang} home />
        <div className="hero-content container">
            <h1>
                <span className="hero-line-dark">{en ? 'Clear view.' : 'Klare Sicht.'}</span>
                <span className="hero-line-accent">
                    {en ? 'Clean spaces.' : 'Saubere Räume.'}
                    <svg className="hero-swoosh" viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M2 10C70 2 190 2 298 9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    </svg>
                    <svg className="hero-sparkle" viewBox="0 0 40 40" aria-hidden="true">
                        <path d="M14 8l2.6 7.4L24 18l-7.4 2.6L14 28l-2.6-7.4L4 18l7.4-2.6z" />
                        <path d="M30 3l1.4 3.6L35 8l-3.6 1.4L30 13l-1.4-3.6L25 8l3.6-1.4z" />
                    </svg>
                </span>
            </h1>
            <ul className="hero-services">
                {services.map((s, i) => (<li key={s.href} className={'hero-card-' + s.icon} style={{ '--i': i }}>
                    <a href={url(s.href)}>
                        <ServiceIcon name={s.icon} />
                        <span>{en ? s.en : s.de}</span>
                    </a>
                </li>))}
            </ul>
        </div>
    </section>);
}
