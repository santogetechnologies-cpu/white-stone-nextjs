import { language } from '../lib/language';
import Navigation from './Navigation';
import HeroScene from './HeroScene';
import PhotoIcon from './HeroIcons';

const services = [
    { href: '/reinigung', de: 'Reinigung', en: 'Cleaning', icon: 'spray' },
    { href: '/regalservice', de: 'Regalservice', en: 'Shelf services', icon: 'shelf' },
    { href: '/haushalt', de: 'Haushalt', en: 'Household', icon: 'home' }
];

function ServiceIcon({ name }) { return <PhotoIcon name={name} />; }

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
