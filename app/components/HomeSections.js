import {language} from '../lib/language';
import CurrentLines from './CurrentLines';
import {getCatalog} from '../lib/content';
import { AreaCards, CTA, Go, Heading, Icon, Mark, Pic } from './Design';
import Tide from './Tide';
import Gallery from './Gallery';
import VerbatimBody, {Flow, NewsIndex, SquarePair, Img} from './Verbatim';
import {oldPage} from '../lib/verbatim';

// Wortlaut: "Unsere Werte" der bisherigen Startseite
const principles=[
  ['reliable','Vertrauen & Diskretion'],
  ['professional','Perfektion bis ins Detail'],
  ['sustainable','Nachhaltige Verantwortung'],
  ['flexible','Termintreue & Flexibilität']
];
// Wortlaut: "Fakten über uns" der bisherigen Startseite
export const trustHighlights = [
  { icon: 'shield', title: 'Sitz in München, Einsatz in ganz Deutschland' },
  { icon: 'spark', title: '3+ Hotels im laufenden Service' },
  { icon: 'drop', title: 'Mehr als 10 zufriedene Firmenkunden' },
  { icon: 'star', title: 'Nachhaltige Methoden seit Beginn' }
];
export function TrustHighlights({lang='de'} = {}){
  const {t} = language(lang);
  return (
    <section className="ws-trust-highlights" aria-label="Fakten über uns">
      <div className="ws-wrap ws-trust-wrap">
        <div className="ws-trust-grid">
          {trustHighlights.map((item) => (
            <div key={item.title} className="ws-trust-item">
              <div className="ws-trust-icon" aria-hidden="true">
                <Icon name={item.icon} />
              </div>
              <div className="ws-trust-text">
                <h3 className="ws-trust-title" lang="de">{item.title}</h3>
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
  return <section className="ws-clients ws-wrap" aria-label={t("Unsere Kunden")}><Mark>Unsere Kunden &amp; Referenzen</Mark><div><strong className="client-rewe">REWE</strong><strong className="client-edeka">EDEKA</strong><strong className="client-penny">PENNY</strong></div></section>}
export function Person({lang='de'} = {}){
  const {t, url} = language(lang);
  const {aboutContent} = getCatalog(lang);
  const {team}=aboutContent;return <article className="ws-person"><div className="ws-person-pic"><Pic lang={lang} name="ali"/></div><div><small>Geschäftsführung</small><h3>{team.name}</h3><p>{team.role}</p><a className="ws-text-link" href={url("/team")}>Unser Team ↗</a></div></article>}
export function Values({lang='de'} = {}){
  const {t} = language(lang);
  return <section className="ws-green"><div className="ws-wrap ws-green-grid"><div className="ws-green-art"><Pic lang={lang} name="nachhaltigkeit"/><span className="ws-green-stamp"><Icon name="leaf"/>{t(" Bewusst gepflegt")}</span></div><div><Heading tag={t("Nachhaltigkeit")} first={t("Sauberkeit mit")} accent={t("Verantwortung.")} >{t("Ein guter Reinigungsplan beginnt beim Material. Wir stimmen Mittel und Dosierung auf die Oberfläche ab und vermeiden unnötige Durchgänge.")}</Heading><ul className="ws-ticks"><li>{t("Reinigungsmittel gezielt dosieren")}</li><li>{t("Wasser und Energie bewusst einsetzen")}</li><li>{t("Oberflächen langfristig erhalten")}</li></ul></div></div></section>}
export function Reads({lang='de', items}) {
  const {url, t} = language(lang);
  return <div className="ws-reads">{items.map(a=><a key={a.slug} href={url('/ratgeber/'+a.slug)}><div><Pic lang={lang} name={a.photoKey}/></div><small>{a.category}</small><h3>{a.title}</h3><span className="ws-guide-btn"><span className="ws-guide-btn-text">{t("Artikel lesen")}</span><span className="ws-guide-btn-icon" aria-hidden="true">↗</span></span></a>)}</div>}
export default function HomeSections({lang='de'} = {}){
  const {t, url} = language(lang);
  const {adviceArticles, cleaningServices} = getCatalog(lang);
  const blocks = oldPage('home-5').blocks;
  const layers = blocks.filter(b => b.k === 'sl').map(b => b.x);
  const rest = blocks.filter(b => b.k !== 'sl');
  const blogAt = rest.findIndex(b => b.k === 'sub' && b.x === 'Blog & Aktuelles');
  const main = rest.slice(0, blogAt);
  const blogHead = rest.slice(blogAt + 1).filter(b => (b.t === 'h3' || b.t === 'p') && !adviceArticles.some(a => a.title === b.x)).slice(0, 2);
  const refs = rest.slice(blogAt + 1).find(b => b.t === 'h3' && b.x.startsWith('Unsere Kunden'));
  return <div className="ws-world">
  <section className="wv-strip" aria-label={layers[0]}><div className="ws-wrap" lang="de">
    <div><h3>{layers[0]}</h3><p>{layers[1]}</p></div>
    <div><h3>{layers[2]}</h3></div>
    <div><h3>{layers[3]}</h3><p>{layers[4]}</p></div>
  </div></section>
  <TrustHighlights lang={lang} />
  <section id="leistungen" className="ws-showcase"><div className="ws-waterstage"><Tide/></div><div className="ws-wrap ws-section"><div className="ws-showcase-head"><Heading tag={t("Unsere Leistungen")} first={t("Reinigung, Regalservice")} accent={t("und Haushalt.")}/></div><AreaCards lang={lang}/><SquarePair lang={lang} keys={['fassade_hubsteiger','fassade_balkon']}/></div></section>
  <section className="ws-benefits" aria-label="Unsere Werte">
    <div className="ws-wrap ws-benefits-wrap">
      <div className="ws-benefits-grid">
        {principles.map(([img, h]) => (
          <article key={h} className="ws-benefit-card">
            <div className="ws-benefit-art">
              <picture>
                <source srcSet={`/assets/illustrations/${img}.webp`} type="image/webp" />
                <img src={`/assets/illustrations/${img}.png`} alt={h} width={240} height={210} loading="eager" decoding="async" className="ws-benefit-img" />
              </picture>
            </div>
            <div className="ws-benefit-content">
              <h3 className="ws-benefit-title" lang="de">{h}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
  <VerbatimBody lang={lang} blocks={main} photos={['buero','reinigung','hotel','gallery_hotel','regalservice_mitarbeiter','nachhaltigkeit','gallery_glas']}/>
  <section className="ws-cleaning-section" aria-label="Unsere Kernleistungen">
    <div className="ws-wrap ws-section ws-directory">
      <div>
        <Heading tag={t("Reinigung")} first="Unsere" accent="Kernleistungen:"/>
        <Go lang={lang} href="/reinigung">{t("Zur Reinigung")}</Go>
        <figure className="wv-photo wv-photo-side"><Img k="cleaning_guide_window" lang={lang}/></figure>
      </div>
      <div className="ws-directory-links">
        {cleaningServices.map((s,i)=><a href={url('/reinigung/'+s.slug)} key={s.slug}><small>0{i+1}</small><span>{s.shortTitle}</span><b aria-hidden="true">↗</b></a>)}
      </div>
    </div>
  </section>
  <section className="ws-about" id="ueber-uns">
    <div className="ws-wrap ws-section"><div className="ws-introduction"><Person lang={lang}/></div></div>
    <Tide tone="deep" compact/>
  </section>
  <section className="ws-gallery-section">
    <div className="ws-gallery-wave-layer ws-gallery-wave-1" aria-hidden="true" />
    <div className="ws-gallery-wave-layer ws-gallery-wave-2" aria-hidden="true" />
    <div className="ws-wrap ws-gallery-wrap">
      <Gallery lang={lang}/>
    </div>
  </section>
  <section className="ws-guides-section"><div className="ws-wrap ws-section"><div className="ws-section-top" lang="de"><Heading tag="Blog & Aktuelles" first={blogHead[0]?.x}>{blogHead[1]?.x}</Heading><Go lang={lang} href="/ratgeber">{t("Alle Beiträge")}</Go></div></div>
    <NewsIndex lang={lang} articles={adviceArticles.slice(0,6)}/></section>
  <Clients lang={lang}/>
  <CTA lang={lang} showBanner={true}/>
</div>}
