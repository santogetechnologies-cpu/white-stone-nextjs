import {language} from '../lib/language';
import CurrentLines from './CurrentLines';
import {getCatalog} from '../lib/content';
import { AreaCards, CTA, Go, Heading, Icon, Mark, Pic } from './Design';
import Tide from './Tide';
import Gallery from './Gallery';

const principles=[['drop','Zuverlässig','Verbindliche Absprachen'],['shield','Professionell','Geschultes Fachpersonal'],['leaf','Nachhaltig','Materialgerechte Pflege'],['spark','Flexibel','Im passenden Zeitfenster']];
export const steps=[
 ['Anfrage stellen','Erzählen Sie uns, wo Sie Unterstützung brauchen und wann der Einsatz stattfinden soll.'],
 ['Umfang abstimmen','Gemeinsam klären wir Flächen, Aufgaben und Besonderheiten vor Ort.'],
 ['Angebot erhalten','Sie erhalten eine Übersicht über die vereinbarten Leistungen und Kosten.'],
 ['Einsatz starten','Unser Team setzt den Plan um. Für Rückfragen bleibt Ihr Ansprechpartner erreichbar.'],
];
export function Workflow({lang='de'} = {}){
  const {t} = language(lang);
  return <section className="ws-process"><CurrentLines/><div className="ws-wrap ws-section"><Heading tag={t("Der Ablauf")} first={t("Vom ersten Kontakt")} accent={t("bis zum Einsatz.")}/><ol>{steps.map(([h,description],i)=><li key={h}><span>0{i+1}</span><h3>{t(h)}</h3><p>{t(description)}</p></li>)}</ol></div><Tide tone="deep" compact/></section>}
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
  return <div className="ws-reads">{items.map(a=><a key={a.slug} href={url('/ratgeber/'+a.slug)}><div><Pic lang={lang} name={a.photoKey}/></div><small>{a.category}</small><h3>{a.title}</h3><span>{t("Artikel lesen ↗")}</span></a>)}</div>}
export default function HomeSections({lang='de'} = {}){
  const {t, url} = language(lang);
  const {adviceArticles, cleaningServices} = getCatalog(lang);
  return <div className="ws-world">
  <section className="ws-benefits ws-wrap" aria-label={t("Ihre Vorteile")}>{principles.map(([icon,h,description])=><div key={h}><span><Icon name={icon}/></span><p><strong>{t(h)}</strong><small>{t(description)}</small></p></div>)}</section>
  <section id="leistungen" className="ws-showcase"><div className="ws-waterstage"><Tide/></div><div className="ws-wrap ws-section"><div className="ws-showcase-head"><Heading tag={t("Unsere Leistungen")} first={t("Drei Bereiche.")} accent={t("Ein Anspruch.")}>{t("Finden Sie die passende Unterstützung für Ihr Gebäude, Ihren Markt oder Ihr Zuhause.")}</Heading></div><AreaCards lang={lang}/></div></section>
  <Clients lang={lang}/>
  <section className="ws-wrap ws-section ws-directory"><div><Heading tag={t("Reinigung im Detail")} first={t("Jeder Ort braucht")} accent={t("andere Pflege.")}/><Go lang={lang} href="/reinigung">{t("Zur Reinigung")}</Go></div><div className="ws-directory-links">{cleaningServices.map((s,i)=><a href={url('/reinigung/'+s.slug)} key={s.slug}><small>0{i+1}</small><span>{s.shortTitle}</span><b aria-hidden="true">↗</b></a>)}</div></section>
  <section className="ws-story"><div className="ws-wrap ws-section ws-story-grid"><div className="ws-story-photo"><Pic lang={lang} name="regalservice"/><span>{t("02   /   Im Handel")}</span></div><div><Heading tag={t("Regalservice im Detail")} first={t("Bereit für den")} accent={t("Verkauf.")}>{t("Wenn eine Lieferung kommt, zählt jeder Handgriff. Wir verräumen Ware nach Regalplan, halten Aktionsflächen übersichtlich und melden Lücken an die Marktleitung.")}</Heading><ul className="ws-pills"><li>{t("Warenverräumung")}</li><li>{t("Bestandskontrolle")}</li><li>{t("Aktionsflächen")}</li></ul><Go lang={lang} href="/regalservice">{t("Regalservice ansehen")}</Go></div></div></section>
  <Workflow lang={lang}/>
  <section className="ws-wrap ws-section" id="ueber-uns"><div className="ws-introduction"><div><Heading tag={t("Über White Stone")} first={t("München ist")} accent={t("unser Einsatzort.")}>{t("Hinter jedem gepflegten Objekt stehen Menschen, die es kennen. Bei White Stone stimmen wir auch die kleinen Details mit Ihnen ab: vom Zugang am frühen Morgen bis zur Übergabe nach Ladenschluss.")}</Heading><Go lang={lang} href="/ueber-uns">{t("Unser Unternehmen")}</Go></div><Person lang={lang}/></div></section>
  <section className="ws-gallery-section"><div className="ws-wrap"><Heading tag={t("Einblicke")} first={t("Unsere Arbeit")} accent={t("in Bildern.")}/><Gallery lang={lang}/></div></section>
  <Values lang={lang}/>
  <section className="ws-wrap ws-section"><div className="ws-section-top"><Heading tag={t("Ratgeber")} first={t("Wissen für die")} accent={t("Praxis.")}/><Go lang={lang} href="/ratgeber">{t("Alle Beiträge")}</Go></div><Reads lang={lang} items={[adviceArticles.find(a=>a.relatedHref.startsWith('/reinigung')),adviceArticles.find(a=>a.relatedHref==='/regalservice'),adviceArticles.find(a=>a.relatedHref==='/haushalt')].map((a,i)=>a||adviceArticles[i])}/></section>
  <CTA lang={lang}/>
</div>}
