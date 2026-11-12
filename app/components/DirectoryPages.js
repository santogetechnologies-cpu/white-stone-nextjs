import {language} from '../lib/language';
import {getCatalog} from '../lib/content';
import {company} from '../lib/company';
import {AreaCards,PageIntro,Go,Pic,Faq,Subhead,Mark,Heading,CTA} from './Design';
import {Clients,Values,Workflow} from './HomeSections';
import HouseholdPlanner from './HouseholdPlanner';
import ContactForm from './ContactForm';
import GuideIndex from './GuideIndex';

export function ServicesPage({lang='de'} = {}){
  const {t} = language(lang);
  return <><PageIntro lang={lang} tag={t("Leistungen")} title={t("Unsere Leistungsbereiche.")} lead={t("Drei Wege zu einem gepflegten Alltag. Wählen Sie den Bereich, der zu Ihrem Gebäude, Ihrer Filiale oder Ihrem Haushalt passt.")}/><section className="ws-wrap ws-section"><AreaCards lang={lang}/></section><Workflow lang={lang}/></>}
export function CleaningPage({lang='de'} = {}){
  const {t, url} = language(lang);
  const {cleaningServices} = getCatalog(lang);
  return <><PageIntro lang={lang} tag={t("Reinigung")} title={t("Sauberkeit für jeden Raum.")} lead={t("Glas, Arbeitsplätze, Gästezimmer oder Schulen: Jede Umgebung stellt andere Anforderungen. Wählen Sie Ihr Einsatzgebiet.")} photo="reinigung" crumb={[t("Leistungen"),'/leistungen']}><Go lang={lang} href="/kontakt?bereich=Reinigung">{t("Reinigung anfragen")}</Go></PageIntro><section className="ws-wrap ws-section"><Subhead tag={t("Leistungsspektrum")} title={t("Sieben Spezialgebiete.")}/><div className="ws-service-list">{cleaningServices.map((s,i)=><a href={url('/reinigung/'+s.slug)} key={s.slug}><div><Pic lang={lang} name={s.photoKey}/></div><section><small>{t("Reinigung / 0")}{i+1}</small><h2>{s.title}</h2><p>{s.summary}</p></section><b aria-hidden="true">↗</b></a>)}</div></section></>}
function Blocks({items}){return <div className="ws-blocks">{items.map(p=><article key={p.title}><h3>{p.title}</h3><p>{p.text}</p></article>)}</div>}
function Planning({lang='de', service}){
  const {t} = language(lang);
  return <section className="ws-planning"><div className="ws-wrap ws-two"><Subhead tag={t("Einsatzplanung")} title={t("Was wir vorab klären.")}/><ol>{service.plan.map(s=><li key={s}>{s}</li>)}</ol></div></section>}
function Questions({lang='de', items}){
  const {t} = language(lang);
  return <section className="ws-wrap ws-section ws-two"><Subhead tag={t("Gut zu wissen")} title={t("Häufige Fragen.")}/><Faq items={items}/></section>}
export function ServiceDetail({lang='de', service,retail=false}){
  const {t} = language(lang);
  return <><PageIntro lang={lang} tag={retail?t("Regalservice"):service.shortTitle} title={retail?t("Regalservice für den Handel."):service.title+'.'} lead={service.summary} photo={service.photoKey} crumb={retail?[t("Leistungen"),'/leistungen']:[t("Reinigung"),'/reinigung']}><Go lang={lang} href={'/kontakt?bereich='+encodeURIComponent(service.shortTitle)}>{t("Einsatz anfragen")}</Go></PageIntro>
 {retail&&<Clients lang={lang}/>}<section className="ws-wrap ws-section"><div className="ws-section-top"><Heading tag={t("Leistungen im Detail")} first={retail?t("Vom Lager"):t("Was wir")} accent={retail?t("bis ins Regal."):t("für Sie tun.")}/><p>{service.intro}</p></div><Blocks items={[...service.scope,...(getCatalog(lang).extra.services[service.slug]||[])]}/></section><Planning lang={lang} service={service}/><Questions lang={lang} items={service.faq}/></>}
export function RetailPage({lang='de'} = {}){
  const {retailService} = getCatalog(lang);
  return <ServiceDetail lang={lang} service={retailService} retail/>}
export function HouseholdPage({lang='de'} = {}){
  const {t, url} = language(lang);
  const {householdService, householdPricing} = getCatalog(lang);
  const s=householdService;const rate=Number(process.env.HOUSEHOLD_HOURLY_RATE);return <><PageIntro lang={lang} tag={t("Haushalt")} title={t("Mehr Zeit für Ihr Zuhause.")} lead={s.intro} photo="haushalt" crumb={[t("Leistungen"),'/leistungen']}><Go lang={lang} href="#preisrechner">{t("Kosten berechnen")}</Go> <a className="ws-text-link" href={url("#haushaltsanfrage")}>{t("Direkt anfragen ↓")}</a></PageIntro>
 <section className="ws-wrap ws-section"><Subhead tag={t("Hilfe im Haushalt")} title={t("Das können Sie abgeben.")}/><Blocks items={s.scope}/></section><section className="ws-pricing"><div className="ws-wrap ws-section"><Heading tag={t("Preisgestaltung")} first={t("Wie entsteht")} accent={t("Ihr Preis?")}>{householdPricing.intro}</Heading><div className="ws-price-notes">{householdPricing.factors.map(f=><div key={f.title}><h3>{f.title}</h3><p>{f.text}</p></div>)}</div></div></section><div className="ws-wrap ws-section"><HouseholdPlanner lang={lang} approvedRate={rate>0&&rate<=1000?rate:null}/></div><Questions lang={lang} items={s.faq}/></>}
export function AboutPage({lang='de'} = {}){
  const {t} = language(lang);
  const {aboutContent} = getCatalog(lang);
  return <><PageIntro lang={lang} tag={t("Über uns")} title={aboutContent.title+'.'} lead={aboutContent.intro} photo="buero"/><section className="ws-wrap ws-section"><Subhead tag={t("Unsere Arbeitsweise")} title={t("Sorgfalt beginnt beim Zuhören.")}/><Blocks items={aboutContent.principles}/><Go lang={lang} href="/team">{t("Zur Geschäftsführung")}</Go></section><section className="ws-company-section"><div className="ws-wrap"><h2>{lang==='en'?'Working with White Stone':'Zusammenarbeit mit White Stone'}</h2><Blocks items={getCatalog(lang).extra.company}/></div></section><Values lang={lang}/><Clients lang={lang}/><Questions lang={lang} items={getCatalog(lang).extra.faq}/></>}
export function TeamPage({lang='de'} = {}){
  const {t} = language(lang);
  const {aboutContent} = getCatalog(lang);
  const person=aboutContent.team;return <><PageIntro lang={lang} tag={t("Unser Team")} title={person.name+'.'} lead={person.role+' · White Stone GmbH'} photo="ali" crumb={[t("Über uns"),'/ueber-uns']}><Go lang={lang} href="/kontakt">{t("Kontakt aufnehmen")}</Go></PageIntro><section className="ws-wrap ws-section ws-two"><Subhead tag={t("Geschäftsführung")} title={t("Ihr Ansprechpartner.")}/><div className="ws-prose"><p>{person.text}</p><p>{t("Beschreiben Sie kurz den Standort, die gewünschten Aufgaben und den geplanten Beginn. So können wir das erste Gespräch auf Ihren Bedarf ausrichten.")}</p></div></section></>}
export function AdvicePage({lang='de'} = {}){
  const {t} = language(lang);
  const {adviceArticles} = getCatalog(lang);
  return <><PageIntro lang={lang} tag={t("Ratgeber")} title={t("Wissen aus der Praxis.")} photo="glas" lead={t("Vom Pflegeplan für eine Glasfassade bis zur Vorbereitung eines Haushaltsbesuchs: Hier finden Sie Antworten für Ihren Alltag.")}/><GuideIndex lang={lang} entries={adviceArticles.map(({slug,title,summary,category,photoKey})=>({slug,title,summary,category,photoKey}))}/></>}
export function ArticlePage({lang='de', article:a}){
  const {t, url} = language(lang);
  return <><PageIntro lang={lang} tag={a.category} title={a.title} lead={a.summary} photo={a.photoKey} crumb={[t("Ratgeber"),'/ratgeber']}/><section className="ws-wrap ws-section ws-article"><aside><Mark>{t("In diesem Beitrag")}</Mark><ol>{a.sections.map((s,i)=><li key={i}><a href={url('#absatz-'+(i+1))}>{s.title}</a></li>)}</ol><a className="ws-text-link" href={url("/ratgeber")}>{t("← Alle Beiträge")}</a></aside><div>{a.sections.map((s,i)=><article key={s.title} id={'absatz-'+(i+1)}><h2>{s.title}</h2><p>{s.text}</p></article>)}<div className="ws-tip"><Mark>{t("Für die Praxis")}</Mark><p>{a.takeaway}</p></div><Go lang={lang} href={a.relatedHref}>{t("Passende Leistung ansehen")}</Go></div></section></>}
export function ContactPage({lang='de', topic=''}){
  const {t, url} = language(lang);
  return <section className="ws-contact-page"><div className="ws-wrap"><nav className="ws-crumb" aria-label={t("Brotkrumennavigation")}><a href={url("/")}>{t("Startseite")}</a>{t(" / Kontakt")}</nav><div className="ws-inquiry"><div><Mark>{t("Kontakt · München")}</Mark><h1>{t("Schreiben ")}<em>{t("Sie uns.")}</em></h1><p>{t("Ob einzelner Einsatz oder regelmäßige Betreuung: Beschreiben Sie kurz Ihr Anliegen. Wir melden uns bei Ihnen.")}</p><dl className="ws-contact-info">{[[t("E-Mail"),company.email],[t("Telefon"),company.phone],[t("Adresse"),company.address]].map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></div><div className="ws-contact-card"><h2>{t("Ihre Anfrage")}</h2>{topic&&<p>{t("Bereich: ")}{topic}</p>}<ContactForm lang={lang} topic={topic}/></div></div></div></section>}
export function LegalPage({lang='de', privacy=false}){
  const {t} = language(lang);
  const {aboutContent} = getCatalog(lang);
  return <><PageIntro lang={lang} tag={t("Unternehmen")} title={privacy?t("Datenschutz."):t("Impressum.")}/><section className="ws-wrap ws-section ws-legal ws-prose">{privacy?<><h2>{t("Kontaktanfragen")}</h2><p>{t("Wenn Sie uns schreiben, verwenden wir Ihre Angaben zur Bearbeitung der Anfrage. Bei Haushaltsanfragen werden auch die gewählten Leistungen und die Kalkulation übermittelt. Die Telefonnummer ist freiwillig.")}</p><h2>{t("Technische Dienste")}</h2><p>{t("Beim Besuch werden technisch notwendige Verbindungsdaten verarbeitet. Die Schriftarten werden über Google Fonts angefordert. Bei aktiviertem Formularversand erfolgt die Übermittlung der E-Mail über Resend.")}</p><h2>{t("Ihre Daten")}</h2><p>{t("Für Fragen zu Ihren Daten wenden Sie sich an White Stone GmbH. Die vollständigen Angaben zur verantwortlichen Stelle und zum Datenschutz werden vor Inbetriebnahme ergänzt.")}</p></>:<><h2>White Stone GmbH</h2><p>{t("Geschäftsführer: ")}{aboutContent.team.name}<br/>{t("Anschrift: ")}{company.address}<br/>{t("E-Mail: ")}{company.email}<br/>{t("Telefon: ")}{company.phone}</p><p>{t("Die bestätigten Unternehmens- und Registerangaben werden vor Inbetriebnahme ergänzt.")}</p></>}</section></>}

