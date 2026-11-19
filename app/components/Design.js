import {language} from '../lib/language';
import CurrentLines from './CurrentLines';
import { photos } from '../lib/photos';
import { company } from '../lib/company';
import { Brand } from './Navigation';
import Tide from './Tide';

export const areaCards=[
  {n:'01',title:'Reinigung',sub:'Gebäude & Gewerbe',text:'Vom ersten Blick durch die Glasfront bis zum letzten Rundgang durchs Büro: Pflege, die zu Ihrem Gebäude passt.',pic:'reinigung_card',url:'/reinigung'},
  {n:'02',title:'Regalservice',sub:'Handel & Verkaufsfläche',text:'Gut gefüllte Regale, richtige Preise und übersichtliche Aktionsflächen. Wir entlasten Ihr Team direkt im Markt.',pic:'regalservice_card',url:'/regalservice'},
  {n:'03',title:'Haushalt',sub:'Für Ihr Zuhause',text:'Unterstützung bei der Reinigung, der Wäsche und den Aufgaben, für die im Alltag die Zeit fehlt.',pic:'haushalt_kueche',url:'/haushalt'},
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
export function CTA({lang='de'} = {}){
  const {t, url} = language(lang);
  const en = lang === 'en';

  const cards = [
    {
      href: '/reinigung',
      title: en ? <>Cleaning<br />Services</> : <>Reinigungs-<br />service</>,
      desc: en ? 'Discuss your cleaning requirements.' : 'Besprechen Sie Ihren Reinigungsbedarf.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3h4v2H8z" />
          <path d="M10 5v4" />
          <path d="M7 7l-2 2" />
          <path d="M7 11h6l2 3v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6l1-3z" />
          <path d="M19 3v4M17 5h4" />
          <path d="M20 10v2M19 11h2" />
        </svg>
      ),
    },
    {
      href: '/regalservice',
      title: en ? <>Shelf<br />Services</> : <>Regal-<br />service</>,
      desc: en ? 'Get support for your retail store.' : 'Unterstützung für Ihre Verkaufsfläche.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 3v18M20 3v18" />
          <path d="M4 11h16M4 19h16" />
          <rect x="6.5" y="6" width="5" height="5" rx="0.5" />
          <rect x="13.5" y="7" width="4.5" height="4" rx="0.5" />
          <rect x="6.5" y="14" width="5" height="5" rx="0.5" />
          <rect x="13" y="14" width="5.5" height="5" rx="0.5" />
        </svg>
      ),
    },
    {
      href: '/haushalt',
      title: en ? <>Household<br />Support</> : <>Haushalts-<br />hilfe</>,
      desc: en ? 'Find help for your home.' : 'Finden Sie Hilfe für Ihr Zuhause.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M17 4.5v3" />
          <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
          <path d="M10 21v-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="ws-cta">
      <div className="ws-wrap ws-cta-inner">
        <div className="ws-cta-left">
          <Mark>{t("Persönliche Beratung")}</Mark>
          <h2 className="ws-cta-title">
            {t("Was können wir ")}<em>{t("für Sie tun?")}</em>
          </h2>
          <div className="ws-cta-line" aria-hidden="true"/>
          <p className="ws-cta-desc">
            {t("Sprechen Sie uns an für Reinigung, Regalservice oder Unterstützung im Haushalt.")}
          </p>
          <div className="ws-cta-action">
            <a className="ws-cta-btn" href={url("/kontakt")}>
              <span>{t("Anfrage stellen")}</span>
              <span className="ws-cta-btn-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="ws-cta-cards">
          {cards.map((c) => (
            <a className="ws-cta-card" href={url(c.href)} key={c.href}>
              <div className="ws-cta-card-icon" aria-hidden="true">
                {c.icon}
              </div>
              <h3 className="ws-cta-card-title">{c.title}</h3>
              <p className="ws-cta-card-desc">{c.desc}</p>
              <span className="ws-cta-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
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
            <p className="ws-foot-desc">
              {t("Reinigung, Regalservice und Haushalt")}<br/>
              {t("in München und Umgebung.")}
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="ws-foot-col ws-foot-services-col">
            <div className="ws-foot-pill">
              <svg className="ws-foot-pill-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span>{t("Leistungen")}</span>
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
              <span>{t("Unternehmen")}</span>
            </div>
            <ul className="ws-foot-links">
              <li><a href={url("/ueber-uns")} className="ws-foot-link"><span>{t("Über uns")}</span><span className="ws-foot-chevron" aria-hidden="true">›</span></a></li>
              <li><a href={url("/team")} className="ws-foot-link"><span>{t("Unser Team")}</span><span className="ws-foot-chevron" aria-hidden="true">›</span></a></li>
              <li><a href={url("/ratgeber")} className="ws-foot-link"><span>{t("Ratgeber")}</span><span className="ws-foot-chevron" aria-hidden="true">›</span></a></li>
              <li><a href={url("/kontakt")} className="ws-foot-link"><span>{t("Kontakt")}</span><span className="ws-foot-chevron" aria-hidden="true">›</span></a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="ws-foot-col ws-foot-contact-col">
            <div className="ws-foot-pill">
              <svg className="ws-foot-pill-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>{t("Kontakt")}</span>
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
            <span>{t("© 2026 White Stone GmbH. Alle Rechte vorbehalten.")}</span>
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
      {items.map(q => (
        <details key={q.question} className="ws-faq-item">
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

