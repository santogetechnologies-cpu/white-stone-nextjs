import { language } from '../lib/language';
import Navigation from './Navigation';
import HeroScene from './HeroScene';

const services = [
    { href: '/reinigung', de: 'Reinigung', en: 'Cleaning', icon: 'spray' },
    { href: '/regalservice', de: 'Regalservice', en: 'Shelf services', icon: 'shelf' },
    { href: '/haushalt', de: 'Haushalt', en: 'Household', icon: 'home' }
];

function ServiceIcon({ name }) {
    const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (name === 'spray') return (<svg viewBox="0 0 48 48" aria-hidden="true" {...p}>
        <path d="M17 20h12v20a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3z" />
        <path d="M19 20v-4h8v4M19 16l-6-2v-3l6-1h8v6" />
        <path d="M13 14h-3M12 18l-3 1M12 10l-3-1" />
        <path d="M17 29h12" />
        <path d="M37 6v8M33 10h8M40 22v5M37.5 24.5h5" />
    </svg>);
    if (name === 'shelf') return (<svg viewBox="0 0 48 48" aria-hidden="true" {...p}>
        <path d="M6 8v34M42 8v34M6 8h36M6 24h36M6 42h36" />
        <path d="M11 24v-8h8v8M24 24V13h8v11M35 24v-6h4v6" />
        <path d="M11 42v-9h10v9M26 42v-6h6v6M35 42v-9h4v9" />
    </svg>);
    return (<svg viewBox="0 0 48 48" aria-hidden="true" {...p}>
        <path d="M6 22 24 7l18 15" />
        <path d="M10 20v21h28V20" />
        <path d="M24 35c-5-2-6-7-3-10 2-2 4-1 6 1 2 2 1 6-3 9z" />
        <path d="M34 11v-3h4v7" />
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
                </span>
            </h1>
            <ul className="hero-services">
                {services.map(s => (<li key={s.href}>
                    <a href={url(s.href)}>
                        <ServiceIcon name={s.icon} />
                        <span>{en ? s.en : s.de}</span>
                    </a>
                </li>))}
            </ul>
        </div>
    </section>);
}
