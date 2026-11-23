import {language} from '../lib/language';
import CurrentLines from './CurrentLines';
import {getCatalog} from '../lib/content';
import { AreaCards, CTA, Go, Heading, Icon, Mark, Pic } from './Design';
import Tide from './Tide';
import Gallery from './Gallery';

const principles=[
  ['reliable','Zuverlässig','Verbindliche Absprachen'],
  ['professional','Professionell','Geschultes Fachpersonal'],
  ['sustainable','Nachhaltig','Materialgerechte Pflege'],
  ['flexible','Flexibel','Im passenden Zeitfenster']
];
export const trustHighlights = [
  {
    icon: 'shield',
    title: 'Qualität garantiert',
    desc: 'Zuverlässiger Service mit gleichbleibend hohen Reinigungsstandards.'
  },
  {
    icon: 'spark',
    title: 'Professionelle Reinigung',
    desc: 'Fachgerechte Reinigung durch geschultes Fachpersonal.'
  },
  {
    icon: 'drop',
    title: 'Streifenfreie Ergebnisse',
    desc: 'Glasklare, saubere Ergebnisse bei jedem Einsatz.'
  },
  {
    icon: 'star',
    title: 'Kundenzufriedenheit',
    desc: 'Ihre Zufriedenheit und Ihr Wohlbefinden stehen an erster Stelle.'
  }
];
export function TrustHighlights({lang='de'} = {}){
  const {t} = language(lang);
  return (
    <section className="ws-trust-highlights" aria-label={t("Ihre Sicherheit")}>
      <div className="ws-wrap ws-trust-wrap">
        <div className="ws-trust-grid">
          {trustHighlights.map((item) => (
            <div key={item.title} className="ws-trust-item">
              <div className="ws-trust-icon" aria-hidden="true">
                <Icon name={item.icon} />
              </div>
              <div className="ws-trust-text">
                <h3 className="ws-trust-title">{t(item.title)}</h3>
                <p className="ws-trust-desc">{t(item.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export const steps=[
 ['Anfrage stellen','Erzählen Sie uns, wo Sie Unterstützung brauchen und wann der Einsatz stattfinden soll.'],
 ['Umfang abstimmen','Gemeinsam klären wir Flächen, Aufgaben und Besonderheiten vor Ort.'],
 ['Angebot erhalten','Sie erhalten eine Übersicht über die vereinbarten Leistungen und Kosten.'],
 ['Einsatz starten','Unser Team setzt den Plan um. Für Rückfragen bleibt Ihr Ansprechpartner erreichbar.'],
];
export function Workflow({lang='de'} = {}){
  const {t} = language(lang);
  return <section className="ws-process"><CurrentLines/><div className="ws-wrap ws-section"><Heading tag={t("Der Ablauf")} first={t("Vom ersten Kontakt")} accent={t("bis zum Einsatz.")}/><ol>{steps.map(([h,description],i)=><li key={h}><span>0{i+1}</span><h3>{t(h)}</h3><p>{t(description)}</p></li>)}</ol></div></section>}
export function Clients({lang='de'} = {}){
  const {t} = language(lang);
  return <section className="ws-clients ws-wrap" aria-label={t("Unsere Kunden")}><Mark>{t("Unsere Kunden im Handel")}</Mark><div><strong className="client-rewe">REWE</strong><strong className="client-edeka">EDEKA</strong><strong className="client-penny">PENNY</strong></div></section>}
export function Person({lang='de'} = {}){
  const {t, url} = language(lang);
  const {aboutContent} = getCatalog(lang);
  const {team}=aboutContent;return <article className="ws-person"><div className="ws-person-pic"><Pic lang={lang} name="ali"/></div><div><small>{t("Ihr Ansprechpartner")}</small><h3>{team.name}</h3><p>{team.role}</p><a className="ws-text-link" href={url("/team")}>{t("Team kennenlernen ↗")}</a></div></article>}
export function Values({lang='de'} = {}){
  const {t} = language(lang);
  return <section className="ws-green"><div className="ws-wrap ws-green-grid"><div className="ws-green-art"><Pic lang={lang} name="nachhaltigkeit"/><span className="ws-green-stamp"><Icon name="leaf"/>{t(" Bewusst gepflegt")}</span></div><div><Heading tag={t("Nachhaltigkeit")} first={t("Sauberkeit mit")} accent={t("Verantwortung.")} >{t("Ein guter Reinigungsplan beginnt beim Material. Wir stimmen Mittel und Dosierung auf die Oberfläche ab und vermeiden unnötige Durchgänge.")}</Heading><ul className="ws-ticks"><li>{t("Reinigungsmittel gezielt dosieren")}</li><li>{t("Wasser und Energie bewusst einsetzen")}</li><li>{t("Oberflächen langfristig erhalten")}</li></ul></div></div></section>}
export function Reads({lang='de', items}) {
  const {url, t} = language(lang);
  return <div className="ws-reads">{items.map(a=><a key={a.slug} href={url('/ratgeber/'+a.slug)}><div><Pic lang={lang} name={a.photoKey}/></div><small>{a.category}</small><h3>{a.title}</h3><span className="ws-guide-btn"><span className="ws-guide-btn-text">{t("Artikel lesen")}</span><span className="ws-guide-btn-icon" aria-hidden="true">↗</span></span></a>)}</div>}
export default function HomeSections({lang='de'} = {}){
  const {t, url} = language(lang);
  const {adviceArticles, cleaningServices} = getCatalog(lang);
  return <div className="ws-world">
  <TrustHighlights lang={lang} />
  <section id="leistungen" className="ws-showcase"><div className="ws-waterstage"><Tide/></div><div className="ws-wrap ws-section"><div className="ws-showcase-head"><Heading tag={t("Unsere Leistungen")} first={t("Drei Bereiche.")} accent={t("Ein Anspruch.")}>{t("Finden Sie die passende Unterstützung für Ihr Gebäude, Ihren Markt oder Ihr Zuhause.")}</Heading></div><AreaCards lang={lang}/></div></section>
  <section className="ws-benefits" aria-label={t("Ihre Vorteile")}>
    <div className="ws-wrap ws-benefits-wrap">
      <div className="ws-benefits-grid">
        {principles.map(([img, h, description]) => (
          <article key={h} className="ws-benefit-card">
            <div className="ws-benefit-art">
              <picture>
                <source srcSet={`/assets/illustrations/${img}.webp`} type="image/webp" />
                <img
                  src={`/assets/illustrations/${img}.png`}
                  alt={t(h)}
                  width={240}
                  height={210}
                  loading="eager"
                  decoding="async"
                  className="ws-benefit-img"
                />
              </picture>
            </div>
            <div className="ws-benefit-content">
              <h3 className="ws-benefit-title">{t(h)}</h3>
              <p className="ws-benefit-desc">{t(description)}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
  <Clients lang={lang}/>
  <section className="ws-cleaning-section" aria-label={t("Reinigung im Detail")}>
    <div className="ws-wrap ws-section ws-directory">
      <div>
        <Heading tag={t("Reinigung im Detail")} first={t("Jeder Ort braucht")} accent={t("andere Pflege.")}/>
        <Go lang={lang} href="/reinigung">{t("Zur Reinigung")}</Go>
      </div>
      <div className="ws-directory-links">
        {cleaningServices.slice(0, 7).map((s,i)=><a href={url('/reinigung/'+s.slug)} key={s.slug}><small>0{i+1}</small><span>{s.shortTitle}</span><b aria-hidden="true">↗</b></a>)}
      </div>
    </div>
  </section>
  <section className="ws-story"><div className="ws-wrap ws-section ws-story-grid"><div className="ws-story-photo"><Pic lang={lang} name="regalservice"/><span>{t("02   /   Im Handel")}</span></div><div><Heading tag={t("Regalservice im Detail")} first={t("Bereit für den")} accent={t("Verkauf.")}>{t("Wenn eine Lieferung kommt, zählt jeder Handgriff. Wir verräumen Ware nach Regalplan, halten Aktionsflächen übersichtlich und melden Lücken an die Marktleitung.")}</Heading><ul className="ws-pills"><li>{t("Warenverräumung")}</li><li>{t("Bestandskontrolle")}</li><li>{t("Aktionsflächen")}</li></ul><Go lang={lang} href="/regalservice">{t("Regalservice ansehen")}</Go></div></div></section>
  <Workflow lang={lang}/>
  <section className="ws-about" id="ueber-uns">
    <div className="ws-wrap ws-section">
      <div className="ws-introduction">
        <div>
          <Heading tag={t("Über White Stone")} first={t("München ist")} accent={t("unser Einsatzort.")}>{t("Hinter jedem gepflegten Objekt stehen Menschen, die es kennen. Bei White Stone stimmen wir auch die kleinen Details mit Ihnen ab: vom Zugang am frühen Morgen bis zur Übergabe nach Ladenschluss.")}</Heading>
          <Go lang={lang} href="/ueber-uns">{t("Unser Unternehmen")}</Go>
        </div>
        <Person lang={lang}/>
      </div>
    </div>
    <Tide tone="deep" compact/>
  </section>
  <section className="ws-gallery-section">
    <div className="ws-gallery-wave-layer ws-gallery-wave-1" aria-hidden="true" />
    <div className="ws-gallery-wave-layer ws-gallery-wave-2" aria-hidden="true" />
    <div className="ws-wrap ws-gallery-wrap">
      <Gallery lang={lang}/>
    </div>
  </section>
  <section className="ws-guides-section"><div className="ws-wrap ws-section"><div className="ws-section-top"><Heading tag={t("Ratgeber")} first={t("Wissen für die")} accent={t("Praxis.")}/><Go lang={lang} href="/ratgeber">{t("Alle Beiträge")}</Go></div><Reads lang={lang} items={[adviceArticles.find(a=>a.relatedHref.startsWith('/reinigung')),adviceArticles.find(a=>a.relatedHref==='/regalservice'),adviceArticles.find(a=>a.relatedHref==='/haushalt')].map((a,i)=>a||adviceArticles[i]).map((a,i)=>i===0?{...a,photoKey:'guides_glas'}:i===1?{...a,photoKey:'guides_regalservice'}:i===2?{...a,photoKey:'guides_haushalt'}:a)}/></div></section>
  <Values lang={lang}/>
  <CTA lang={lang} showBanner={true}/>
</div>}
