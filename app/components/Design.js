import {language} from '../lib/language';
import CurrentLines from './CurrentLines';
import { photos } from '../lib/photos';
import { company } from '../lib/company';
import { Brand } from './Navigation';
import { oldPage, src } from '../lib/verbatim';
import Tide from './Tide';

export const areaCards=[
  {n:'01',title:'Reinigung',sub:'Gebäude & Gewerbe',text:'Wir bieten ein breites Spektrum an Reinigungs- und Facility-Services in München – individuell zugeschnitten auf Ihre Bedürfnisse.',pic:'reinigung_card',url:'/reinigung'},
  {n:'02',title:'Regalservice',sub:'Handel & Verkaufsfläche',text:'Ein gepflegtes und vollständig bestücktes Regal entscheidet über Kauf oder Absprung.',pic:'regalservice_card',url:'/regalservice'},
  {n:'03',title:'Haushalt',sub:'Für Ihr Zuhause',text:'Privatkunden : Fenster, Polster & Sonderreinigung für Ihr Zuhause',pic:'haushalt_kueche',url:'/haushalt'},
];
export function Pic({lang='de', name,className='',eager=false}) {
  const {alt} = language(lang);
  
  const p=photos[name]; if(!p)return null;
  return <img className={className} src={p.src} alt={alt(name)} width={p.width} height={p.height} loading={eager?'eager':'lazy'} decoding="async"/>;
}
export function Mark({children}) {return <span className="ws-mark"><i aria-hidden="true"/>{children}</span>}
export function Icon({name}){return <svg aria-hidden="true"><use href={'#i-'+name}/></svg>}
export function Go({lang='de', href,children,light=false}) {
  const {url} = language(lang);
  return <a className={'ws-go'+(light?' on-dark':'')} href={url(href)}>{children}<span aria-hidden="true">↗</span></a>}
export function Heading({tag,first,accent,children}) {return <div className="ws-heading"><Mark>{tag}</Mark><h2>{first}{accent && <> <em>{accent}</em></>}</h2>{children&&<p>{children}</p>}</div>}
export function AreaCards({lang='de'} = {}){
  const {url, t} = language(lang);
  return <div className="ws-areas">{areaCards.map(a=><a className={'ws-area area-'+a.n} key={a.n} href={url(a.url)}><div className="ws-area-img"><Pic lang={lang} name={a.pic}/><span className="ws-img-index">{a.n} / 03</span></div><div className="ws-area-body"><small>{t(a.sub)}</small><h3>{t(a.title)}</h3><p>{t(a.text)}</p><span className="ws-more">{t("Bereich entdecken ")}<b aria-hidden="true">↗</b></span></div></a>)}</div>}
export function CTA({lang='de', showBanner=false} = {}){
  const {url} = language(lang);
  const en = lang === 'en';
  const icon = d => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>;
  // Wortlaut: Kernleistungen der bisherigen Website ("Hotel- & Housekeeping-Service – perfekte Sauberkeit ...") in der gewählten Sprache
  const home = oldPage('home-5', lang).blocks;
  const listAfter = de => home.slice(home.findIndex(b => /^h\d$/.test(b.t) && src(b) === de) + 1).find(b => b.t === 'ul').items;
  const core = listAfter('Unsere Kernleistungen:').map(x => { const [a, ...b] = x.split(/\s[–-]\s/); return [a, b.join(' – ')]; });
  const glas = oldPage('glas-und-fensterreinigung', lang).blocks;
  const ctaAt = glas.findIndex(b => src(b) === 'Bereit für makellose Ergebnisse?');
  const [ctaHead, ctaText] = [glas[ctaAt].x, glas[ctaAt + 1].x];
  const regal = oldPage('regalservice-firma-munchen-regalbefullung', lang).blocks;
  const bAt = regal.findIndex(b => src(b) === 'Immer volle Regale – mit White Stone GmbH');
  const [bHead, bText] = [regal[bAt].x, regal[bAt + 1].x];
  const [bHead1, ...bHead2] = bHead.split(/\s[–-]\s/);
  const cardsBase = [
    {key:'cleaning', theme:'cleaning', img:'/assets/help-card-1.webp', title:'Hotel- & Housekeeping-Service', desc:'perfekte Sauberkeit für Gästezimmer, Lobby & Gastronomie', href:'/reinigung/hotelreinigung', badgeGradient:'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)', icon:icon('M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83')},
    {key:'shelf', theme:'shelf', img:'/assets/help-card-2.webp', title:'Büro- & Gebäudereinigung', desc:'hygienische Arbeitsumgebungen für mehr Produktivität', href:'/reinigung/buero-und-gebaeudereinigung', badgeGradient:'linear-gradient(135deg, #34d399 0%, #059669 100%)', icon:icon('M4 3v18M20 3v18M4 7h16M4 12h16M4 17h16')},
    {key:'household', theme:'household', img:'/assets/help-card-3.webp', title:'Baureinigung', desc:'schnelle und gründliche Übergabereinigung nach Bauprojekten', href:'/reinigung/bau-und-sonderreinigung', badgeGradient:'linear-gradient(135deg, #818cf8 0%, #4f46e5 100%)', icon:icon('m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10')},
    {key:'book', theme:'book', img:'/assets/help-card-4.webp', title:'Fenster- & Fassadenreinigung', desc:'streifenfrei & repräsentativ für Ihr Gebäude', href:'/reinigung/fassadenreinigung', badgeGradient:'linear-gradient(135deg, #f472b6 0%, #e11d48 100%)', icon:icon('M3 4h18v18H3zM16 2v4M8 2v4M3 10h18')},
    {key:'quote', theme:'quote', img:'/assets/help-card-5.webp', title:'Teppich- & Polsterpflege', desc:'materialschonend & hygienisch sauber', href:'/reinigung', badgeGradient:'linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)', icon:icon('M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8')},
    {key:'guidance', theme:'guidance', img:'/assets/help-card-6.webp', title:'Sonder- & Spezialreinigung', desc:'von Graffiti bis Notfalleinsätzen, wir sind flexibel', href:'/reinigung/bau-und-sonderreinigung', badgeGradient:'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)', icon:icon('M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01')},
  ];
  const cards = cardsBase.map((c, i) => ({ ...c, title: core[i][0], desc: core[i][1] }));
  const features = listAfter('Warum Kunden uns vertrauen:').slice(0, 3);
  const location = listAfter('Fakten über uns:')[0];
  const ctaWords = ctaHead.split(' '), ctaSplit = Math.max(1, Math.round(ctaWords.length / 3));
  const featureIcons = [
    <svg key="a" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
    <svg key="b" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
    <svg key="c" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>,
  ];

  return (
    <section className="ws-help-section" id="hilfe" aria-label="Get in touch">
      <div className="ws-wrap ws-help-wrap" lang={lang}>
        <div className="ws-help-left-area">
          <div className="ws-help-eyebrow">
            <span className="ws-help-eyebrow-bar" aria-hidden="true" />
            <span className="ws-help-eyebrow-text">Get in touch</span>
          </div>
          <h2 className="ws-help-heading">
            <span className="ws-help-heading-line1">{ctaWords.slice(0, ctaSplit).join(' ')}</span>{' '}
            <em className="ws-help-heading-line2">{ctaWords.slice(ctaSplit).join(' ')}</em>
          </h2>
          <p className="ws-help-desc">{ctaText}</p>
          <div className="ws-help-features-stack">
            {features.map((f, i) => (
              <div className="ws-help-feature" key={f}>
                <div className="ws-help-feat-icon" aria-hidden="true">{featureIcons[i]}</div>
                <div className="ws-help-feat-body"><strong className="ws-help-feat-title">{f}</strong></div>
              </div>
            ))}
            <div className="ws-help-action">
              <a className="ws-help-btn" href={url("/kontakt")} lang={lang}>
                <span>{en ? "Send an enquiry" : "Anfrage stellen"}</span>
                <span className="ws-help-btn-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="ws-help-cards-area">
          <div className="ws-help-cards-grid ws-cta-cards">
            {cards.map((c) => (
              <a className={`ws-help-card ws-help-card-${c.theme} ws-cta-card`} href={url(c.href)} key={c.key}>
                <div className="ws-help-card-media">
                  <img src={c.img} alt={c.title} width={370} height={138} loading="lazy" decoding="async" className="ws-help-card-img" />
                </div>
                <div className="ws-help-card-body">
                  <div className="ws-help-card-badge" style={{ background: c.badgeGradient }} aria-hidden="true">{c.icon}</div>
                  <h3 className="ws-help-card-title">{c.title}</h3>
                  <p className="ws-help-card-desc">{c.desc}</p>
                  <div className="ws-help-card-bottom">
                    <span className="ws-help-card-arrow" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {showBanner && (
        <div className="ws-wrap ws-hand-wrap">
          <div className="ws-hand-container">
            <div className="ws-hand-left" lang={lang}>
              <div className="ws-hand-eyebrow">
                <span className="ws-hand-eyebrow-text">{en ? 'Shelf services' : 'Regalservice'}</span>
                <span className="ws-hand-eyebrow-bar" aria-hidden="true" />
              </div>
              <h3 className="ws-hand-heading">
                <span className="ws-hand-heading-navy">{bHead1} –</span>{' '}
                <em className="ws-hand-heading-teal">{bHead2.join(' – ')}</em>
              </h3>
              <p className="ws-hand-desc">{bText}</p>
            </div>
            <div className="ws-hand-divider" aria-hidden="true" />
            <div className="ws-hand-middle">
              <div className="ws-hand-action-row">
                <div className="ws-hand-phone-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <a href={url("/kontakt")} className="ws-hand-btn">
                  <span>{en ? "Contact Our Team" : "Team kontaktieren"}</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
              <div className="ws-hand-location" lang={lang}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>{location}</span>
              </div>
            </div>
            <div className="ws-hand-art" aria-hidden="true">
              <picture>
                <source srcSet="/assets/helping-hand-supplies.webp" type="image/webp" />
                <img src="/assets/helping-hand-supplies.jpg" alt="" width={1024} height={644} loading="lazy" decoding="async" className="ws-hand-art-img" />
              </picture>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export function Footer({lang='de'} = {}){
  const {t, url} = language(lang);
  return (
    <footer className="ws-footer">
      <div className="ws-wrap ws-foot-inner">
        <div className="ws-foot-grid">
          {/* Column 1: Brand */}
          <div className="ws-foot-col ws-foot-brand-col">
            <Brand lang={lang}/>
            {lang === 'en'
              ? <p className="ws-foot-desc"><strong>Find out more about us</strong><br/>White Stone GmbH – your premium provider of building cleaning in Munich. Whether office, hotel or specialist cleaning: we stand for cleanliness, quality and sustainability.</p>
              : <p className="ws-foot-desc"><strong>Erfahren Sie mehr über uns</strong><br/>White Stone GmbH – Ihr Premium-Dienstleister für Gebäudereinigung in München. Ob Büro, Hotel oder Spezialreinigung: Wir stehen für Sauberkeit, Qualität und Nachhaltigkeit.</p>}
          </div>

          {/* Column 2: Services */}
          <div className="ws-foot-col ws-foot-services-col">
            <div className="ws-foot-pill">
              <svg className="ws-foot-pill-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span>{lang === 'en' ? 'Our services' : 'Unsere Leistungen'}</span>
            </div>
            <ul className="ws-foot-links">
              {areaCards.map(a => (
                <li key={a.url}>
                  <a href={url(a.url)} className="ws-foot-link">
                    <span>{t(a.title)}</span>
                    <span className="ws-foot-chevron" aria-hidden="true">›</span>
                  </a>
                </li>
              ))}
              <li>
                <a href={url("/leistungen")} className="ws-foot-link">
                  <span>{t("Alle Leistungen")}</span>
                  <span className="ws-foot-chevron" aria-hidden="true">›</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="ws-foot-col ws-foot-company-col">
            <div className="ws-foot-pill">
              <svg className="ws-foot-pill-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>{lang === 'en' ? 'Important links' : 'Wichtige Listen'}</span>
            </div>
            <ul className="ws-foot-links">
              <li><a href={url("/ueber-uns")} className="ws-foot-link"><span>{t("Über uns")}</span><span className="ws-foot-chevron" aria-hidden="true">›</span></a></li>
              <li><a href={url("/team")} className="ws-foot-link"><span>{t("Unser Team")}</span><span className="ws-foot-chevron" aria-hidden="true">›</span></a></li>
              <li><a href={url("/ratgeber")} className="ws-foot-link"><span>{lang === 'en' ? 'Latest news' : 'Neueste Nachrichten'}</span><span className="ws-foot-chevron" aria-hidden="true">›</span></a></li>
              <li><a href={url("/kontakt")} className="ws-foot-link"><span>{lang === 'en' ? 'Contact us' : 'Kontaktieren Sie uns'}</span><span className="ws-foot-chevron" aria-hidden="true">›</span></a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="ws-foot-col ws-foot-contact-col">
            <div className="ws-foot-pill">
              <svg className="ws-foot-pill-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>{lang === 'en' ? 'Official information' : 'Offizielle Informationen'}</span>
            </div>
            <div className="ws-foot-contact-list">
              <div className="ws-foot-contact-item">
                <div className="ws-foot-icon-box" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="ws-foot-contact-val">
                  <span className="ws-foot-contact-label">{t("E-Mail: ")}</span>
                  <a href={'mailto:' + company.email}>{company.email}</a>
                </div>
              </div>

              <div className="ws-foot-contact-item">
                <div className="ws-foot-icon-box" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="ws-foot-contact-val">
                  <span className="ws-foot-contact-label">{t("Telefon: ")}</span>
                  <a href={'tel:' + company.phone}>{company.phone}</a>
                </div>
              </div>

              <div className="ws-foot-contact-item">
                <div className="ws-foot-icon-box" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="ws-foot-contact-val">
                  <span className="ws-foot-contact-label">{t("Adresse: ")}</span>
                  <span>{company.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="ws-foot-bar">
          <div className="ws-foot-bar-left">
            <span>{lang === 'en' ? 'Copyright © White Stone 2026 | All rights reserved.' : 'Copyright © White Stone 2026 | Alle Rechte vorbehalten.'}</span>
          </div>
          <div className="ws-foot-bar-right">
            <span className="ws-foot-bar-sep" aria-hidden="true"/>
            <a href={url("/datenschutz")}>{t("Datenschutz")}</a>
            <a href={url("/impressum")}>{t("Impressum")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export function PageIntro({lang='de', tag,title,lead,photo,crumb,children}){
  const {t, url} = language(lang);
  return <section className={'ws-page-intro'+(photo?' has-photo':'')}><div className="ws-wrap"><nav className="ws-crumb" aria-label={t("Brotkrumennavigation")}><a href={url("/")}>{t("Startseite")}</a><span>/</span>{crumb&&<><a href={url(crumb[1])}>{crumb[0]}</a><span>/</span></>}<span>{tag}</span></nav><div className="ws-intro-grid"><div><Mark>{tag}</Mark><h1>{title}</h1>{lead&&<p>{lead}</p>}{children}</div>{photo&&<figure><Pic lang={lang} name={photo} eager/></figure>}</div></div><Tide compact/></section>}
export function Faq({items}){
  return (
    <div className="ws-faq">
      {items.map((q, qi) => (
        <details key={qi + q.question} className="ws-faq-item">
          <summary className="ws-faq-summary">
            <span className="ws-faq-q">{q.question}</span>
            <span className="ws-faq-btn" aria-hidden="true">
              <svg className="ws-faq-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </summary>
          <div className="ws-faq-body">
            <p>{q.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
export function Subhead({tag,title}){return <div className="ws-subhead"><Mark>{tag}</Mark><h2>{title}</h2></div>}

