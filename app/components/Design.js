import {language} from '../lib/language';
import CurrentLines from './CurrentLines';
import { photos } from '../lib/photos';
import { company } from '../lib/company';
import { Brand } from './Navigation';
import Tide from './Tide';

export const areaCards=[
  {n:'01',title:'Reinigung',sub:'Gebäude & Gewerbe',text:'Vom ersten Blick durch die Glasfront bis zum letzten Rundgang durchs Büro: Pflege, die zu Ihrem Gebäude passt.',pic:'reinigung',url:'/reinigung'},
  {n:'02',title:'Regalservice',sub:'Handel & Verkaufsfläche',text:'Gut gefüllte Regale, richtige Preise und übersichtliche Aktionsflächen. Wir entlasten Ihr Team direkt im Markt.',pic:'regalservice',url:'/regalservice'},
  {n:'03',title:'Haushalt',sub:'Für Ihr Zuhause',text:'Unterstützung bei der Reinigung, der Wäsche und den Aufgaben, für die im Alltag die Zeit fehlt.',pic:'haushalt',url:'/haushalt'},
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
  const {t} = language(lang);
  return <section className="ws-cta"><CurrentLines/><div className="ws-wrap ws-cta-inner"><div><Mark>{t("Persönliche Beratung")}</Mark><h2>{t("Was können wir ")}<em>{t("für Sie tun?")}</em></h2></div><Go lang={lang} href="/kontakt" light>{t("Anfrage stellen")}</Go></div><Tide tone="deep" compact/></section>}
export function Footer({lang='de'} = {}){
  const {t, url} = language(lang);
  return <footer className="ws-footer"><div className="ws-wrap"><div className="ws-foot-grid"><div><Brand lang={lang}/><p>{t("Reinigung, Regalservice und Haushalt")}<br/>{t("in München und Umgebung.")}</p></div><div><h3>{t("Leistungen")}</h3>{areaCards.map(a=><a key={a.url} href={url(a.url)}>{t(a.title)}</a>)}<a href={url("/leistungen")}>{t("Alle Leistungen")}</a></div><div><h3>{t("Unternehmen")}</h3><a href={url("/ueber-uns")}>{t("Über uns")}</a><a href={url("/team")}>{t("Unser Team")}</a><a href={url("/ratgeber")}>{t("Ratgeber")}</a><a href={url("/kontakt")}>{t("Kontakt")}</a></div><div><h3>{t("Kontakt")}</h3><p>{t("E-Mail: ")}{company.email}<br/>{t("Telefon: ")}{company.phone}<br/>{t("Adresse: ")}{company.address}</p></div></div>
  <div className="ws-foot-end"><span>© 2026 White Stone GmbH</span><span><a href={url("/datenschutz")}>{t("Datenschutz")}</a><a href={url("/impressum")}>{t("Impressum")}</a></span></div></div></footer>}
export function PageIntro({lang='de', tag,title,lead,photo,crumb,children}){
  const {t, url} = language(lang);
  return <section className={'ws-page-intro'+(photo?' has-photo':'')}><div className="ws-wrap"><nav className="ws-crumb" aria-label={t("Brotkrumennavigation")}><a href={url("/")}>{t("Startseite")}</a><span>/</span>{crumb&&<><a href={url(crumb[1])}>{crumb[0]}</a><span>/</span></>}<span>{tag}</span></nav><div className="ws-intro-grid"><div><Mark>{tag}</Mark><h1>{title}</h1>{lead&&<p>{lead}</p>}{children}</div>{photo&&<figure><Pic lang={lang} name={photo} eager/></figure>}</div></div><Tide compact/></section>}
export function Faq({items}){return <div className="ws-faq">{items.map(q=><details key={q.question}><summary>{q.question}<b aria-hidden="true"/></summary><p>{q.answer}</p></details>)}</div>}
export function Subhead({tag,title}){return <div className="ws-subhead"><Mark>{tag}</Mark><h2>{title}</h2></div>}

