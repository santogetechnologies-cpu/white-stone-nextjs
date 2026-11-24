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
