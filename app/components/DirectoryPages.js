import {language} from '../lib/language';
import {getCatalog} from '../lib/content';
import {company} from '../lib/company';
import {AreaCards,PageIntro,Go,Pic,Faq,Subhead,Mark,Heading} from './Design';
import {Clients,Values,Workflow} from './HomeSections';
import HouseholdPlanner from './HouseholdPlanner';
import ContactForm from './ContactForm';
import CleaningServicesGrid from './CleaningServicesGrid';
import {shelfServicesData} from './ShelfServicesSection';
import VerbatimBody, {Flow,PhotoGrid,NewsIndex,headingsOf,ServiceRows,Img} from './Verbatim';
import {oldPage,src} from '../lib/verbatim';
import {photos} from '../lib/photos';
import HouseholdServicesSection from './HouseholdServicesSection';

export function ServicesPage({lang='de'} = {}){
  const {t} = language(lang);
  const page = oldPage('unsere-leistungen', lang);
  const blocks = page.blocks.filter(b => !(b.t === 'txt' && b.k === 'sub') && b.t !== 'h1');
  const h1 = page.blocks.find(b => b.t === 'h1');
  return <>
    <PageIntro lang={lang} tag={page.title} title={h1.x} photo="buero"/>
    <section className="ws-wrap ws-section"><AreaCards lang={lang}/></section>
    <ServiceRows lang={lang} blocks={blocks} photoFor={photoForHeading} pool={['ws_office_floor_trolley','ws_modern_interior_counter','ws_office_workstation','reinigung_card','nachhaltigkeit']}/>
  </>}
const headingPhotos=[[/büro/i,'buero'],[/glas|fenster/i,'glas'],[/fassad/i,'fassade_hubsteiger'],[/hotel/i,'hotel'],[/bau/i,'bau'],[/kinder|kita/i,'kita'],[/schul/i,'schule'],[/regal/i,'regalservice_mitarbeiter']];
const photoForHeading=h=>(headingPhotos.find(([re])=>re.test(h))||[null,'reinigung'])[1];
export function CleaningPage({lang='de'} = {}){
  const {t, url} = language(lang);
  const {cleaningServices} = getCatalog(lang);
  const isEn = lang === 'en';
  const services = cleaningServices.map(s => ({...s, href: url('/reinigung/' + s.slug)}));
  const home = oldPage('home-5', lang).blocks;
  const i = home.findIndex(b => b.t === 'h3' && src(b) === 'Professionelle Reinigung für jede Anforderung');
  const intro = home.slice(i, i + 4);
  return (
    <>
      <PageIntro lang={lang} tag={t("Reinigung")} title={intro[0].x} lead={intro[1].x} photo="reinigung" crumb={[t("Leistungen"), '/leistungen']}>
        <Go lang={lang} href="/kontakt?bereich=Reinigung">{t("Reinigung anfragen")}</Go>
      </PageIntro>
      <section className="ws-expertise-section" aria-label={t("Reinigung")}>
        <div className="ws-wrap ws-expertise-wrap">
          <CleaningServicesGrid services={services} lang={lang} isEn={isEn} />
        </div>
      </section>
      <section className="wv-section"><div className="ws-wrap wv-grid has-photo"><div className="wv-text"><Flow blocks={home.slice(i + 2, i + 4)} lang={lang}/></div><figure className="wv-photo"><Img k="gallery_buero" lang={lang}/></figure></div></section>
    </>
  );
}

function Blocks({items}){return <div className="ws-blocks">{items.map(p=><article key={p.title}><h3>{p.title}</h3><p>{p.text}</p></article>)}</div>}
function Planning({lang='de', service}){
  const {t} = language(lang);
  const isEn = lang === 'en';
  return (
    <section className="ws-planning">
      <div className="ws-wrap ws-two ws-planning-two">
        <div className="ws-planning-head">
          <Subhead tag={t("Einsatzplanung")} title={t("Was wir vorab klären.")}/>
          <div className="ws-planning-accent-bar" aria-hidden="true" />
        </div>
        <div className="ws-planning-flow">
          <ol className="ws-planning-list">
            {service.plan.map((s, idx) => (
              <li key={s} className="ws-planning-card">
                <div className="ws-step-col">
                  <div className="ws-step-node">
                    <span className="ws-step-num">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  {idx < service.plan.length - 1 && <div className="ws-step-rail" aria-hidden="true" />}
                </div>
                <div className="ws-step-card">
                  <div className="ws-step-top">
                    <span className="ws-step-phase">{isEn ? `Phase 0${idx + 1}` : `Phase 0${idx + 1}`}</span>
                    <span className="ws-step-arrow" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                  <p className="ws-step-desc">{s}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Questions({lang='de', items, photo}){
  const {t} = language(lang);
  return (
    <section className="ws-section ws-faq-wrap">
      <div className="ws-wrap ws-two ws-faq-two">
        <div className="ws-faq-head">
          <Subhead tag={t("Gut zu wissen")} title={t("Häufige Fragen.")}/>
          <div className="ws-faq-accent-bar" aria-hidden="true" />
          {photo && <figure className="wv-photo wv-photo-side"><Img k={photo} lang={lang}/></figure>}
        </div>
        <Faq items={items}/>
      </div>
    </section>
  );
}
// Aktuelle Fotos je Leistung; jeder Textabschnitt erhält eines davon.
const SHELF=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(n=>`/fotografie/shelf-services/shelf-${String(n).padStart(2,'0')}-`);
const shelfFiles=['stocking','checks','prices','promotions','deliveries','rotation','replenishment','planogram','organisation','inventory','facing','seasonal','stands','stockroom','expiry','support'];
export const photoPools={
  'glas-und-fensterreinigung':['ws_highrise_window','ws_office_window_squeegee','ws_glass_partition','ws_glass_entrance_door','ws_office_window_wipe','gallery_glas','cleaning_guide_window','guides_glas'],
  'buero-und-gebaeudereinigung':['ws_office_workstation','ws_office_meeting_table','ws_office_floor_trolley','ws_glass_interior_door','gallery_buero','buero','reinigung_card','nachhaltigkeit'],
  'hotelreinigung':['ws_hotel_bathroom_sanitizing','ws_hotel_bedroom_prep','gallery_hotel','cleaning_guide_hotel','hotel'],
  'bau-und-sonderreinigung':['ws_renovation_vacuum','gallery_bau','bau','cleaning_guide_surface'],
  'fassadenreinigung':['fassade_hubsteiger','fassade_balkon','cleaning_guide_facade','cleaning_guide_surface','fassade'],
  'kita-reinigung':['ws_daycare_playroom','kita','ws_modern_interior_counter','reinigung_card'],
  'schulreinigung':['ws_hall_floor_mopping','schule','ws_office_floor_trolley','reinigung'],
  'regalservice':['ws_shelf_tablet_audit','ws_shelf_pasta_facing','ws_shelf_stocking_box','regalservice','guides_regalservice','gallery_regalservice',...SHELF.map((p,i)=>p+shelfFiles[i]+'.webp')],
};
export function ServiceDetail({lang='de', service}){
  const {t} = language(lang);
  return <><PageIntro lang={lang} tag={service.shortTitle} title={service.pageTitle} photo={service.photoKey} crumb={[t("Reinigung"),'/reinigung']}><Go lang={lang} href={'/kontakt?bereich='+encodeURIComponent(service.shortTitle)}>{t("Einsatz anfragen")}</Go></PageIntro>
  <VerbatimBody lang={lang} blocks={service.verbatim} pool={photoPools[service.slug]||['reinigung']}/></>}
export function RetailPage({lang='de'} = {}){
  const {t} = language(lang);
  const {retailService} = getCatalog(lang);
  const h1 = retailService.verbatim.find(b => b.t === 'h1');
  const body = retailService.verbatim.filter(b => b !== h1);
  const gallery = [
    {src: photos.ws_shelf_tablet_audit.src, alt: t("Regalservice"), width: 1254, height: 1254},
    {src: photos.ws_shelf_pasta_facing.src, alt: t("Regalservice"), width: 1254, height: 1254},
    {src: photos.ws_shelf_stocking_box.src, alt: t("Regalservice"), width: 1254, height: 1254},
    ...shelfServicesData.de.map(x => ({src: x.image, alt: x.title, width: 720, height: 720})),
    ...[1,2,3].map(n => ({src: `/assets/shelf_guide_card${n}.webp`, alt: t("Regalservice"), width: 720, height: 540}))
  ];
  return (
    <>
      <PageIntro lang={lang} tag={t("Regalservice")} title={h1.x} photo="regalservice_mitarbeiter" crumb={[t("Leistungen"), '/leistungen']}>
        <Go lang={lang} href={'/kontakt?bereich=' + encodeURIComponent(retailService.shortTitle)}>{t("Einsatz anfragen")}</Go>
      </PageIntro>
      <VerbatimBody lang={lang} blocks={body} pool={photoPools.regalservice}/>
      <PhotoGrid items={gallery} lang={lang} />
      <Clients lang={lang} />
    </>
  );
}
export function HouseholdPage({lang='de'} = {}){
  const {t, url} = language(lang);
  const {householdService, householdPricing} = getCatalog(lang);
  const s=householdService;const rate=Number(process.env.HOUSEHOLD_HOURLY_RATE);
  return (
    <>
      <PageIntro lang={lang} tag={t("Haushalt")} title={t("Mehr Zeit für Ihr Zuhause.")} lead={s.intro} photo="haushalt" crumb={[t("Leistungen"),'/leistungen']}>
        <Go lang={lang} href="#preisrechner">{t("Kosten berechnen")}</Go> <a className="ws-text-link" href={url("#haushaltsanfrage")}>{t("Direkt anfragen ↓")}</a>
      </PageIntro>

      <HouseholdServicesSection lang={lang} isEn={lang === 'en'} />

      <section className="ws-wrap ws-section"><div className="wv-grid has-photo"><div className="wv-text"><Subhead tag={t("Hilfe im Haushalt")} title={t("Das können Sie abgeben.")}/><Blocks items={s.scope}/></div><figure className="wv-photo"><Img k="guides_haushalt" lang={lang}/></figure></div></section>
      <section className="ws-pricing"><div className="ws-wrap ws-section"><div className="wv-grid has-photo"><div className="wv-text"><Heading tag={t("Preisgestaltung")} first={t("Wie entsteht")} accent={t("Ihr Preis?")}>{householdPricing.intro}</Heading></div><figure className="wv-photo wv-photo-wide"><Img k="gallery_haushalt" lang={lang}/></figure></div><div className="ws-price-notes">{householdPricing.factors.map(f=><div key={f.title}><h3>{f.title}</h3><p>{f.text}</p></div>)}</div></div></section>
      <div className="ws-wrap ws-section"><HouseholdPlanner lang={lang} approvedRate={rate>0&&rate<=1000?rate:null}/></div>
      <Questions lang={lang} items={s.faq} photo="haushalt_mann"/>
    </>
  );
}
export function AboutPage({lang='de'} = {}){
  const {t} = language(lang);
  const page = oldPage('uber-uns', lang);
  const blocks = page.blocks.filter((b,i) => !(i === 0 && b.k === 'sub'));
  const h3 = blocks.findIndex(b => b.t === 'h3');
  const intro = blocks[h3], lead = blocks[h3 + 1];
  const rest = blocks.filter(b => b !== intro && b !== lead);
  return <><PageIntro lang={lang} tag={page.title} title={intro.x} lead={lead.x} photo="buero"/>
  <VerbatimBody lang={lang} blocks={rest} pool={['ws_modern_interior_counter','ws_office_meeting_table','ws_hotel_bedroom_prep','hotel','nachhaltigkeit','gallery_buero']}/><Clients lang={lang}/></>}
export function TeamPage({lang='de'} = {}){
  const {t} = language(lang);
  const page = oldPage('unser-team', lang);
  const {aboutContent} = getCatalog(lang);
  const person = aboutContent.team;
  const closing = page.blocks.slice(page.blocks.findIndex(b => b.t === 'txt' && b.k === 'sub'));
  const head = page.blocks.find(b => b.t === 'h3').x; // Geschäftsführung / Management
  return <><PageIntro lang={lang} tag={head} title={person.name} lead={person.role} photo="ali" crumb={[page.title,'/team']}><Go lang={lang} href="/kontakt">{t("Kontakt aufnehmen")}</Go></PageIntro>
  <VerbatimBody lang={lang} blocks={closing} pool={['buero']}/></>}
export function AdvicePage({lang='de'} = {}){
  const {adviceArticles} = getCatalog(lang);
  const page = oldPage('neueste-nachrichten', lang);
  return <><PageIntro lang={lang} tag={page.title} title={page.title} photo="glas"/><NewsIndex lang={lang} articles={adviceArticles}/></>}
export function ArticlePage({lang='de', article:a}){
  const {t, url} = language(lang);
  const heads = headingsOf(a.verbatim);
  return <><PageIntro lang={lang} tag={a.category} title={a.title} photo={a.photoKey} crumb={[t("Ratgeber"),'/ratgeber']}/>
  <section className="wv-article"><div className="ws-wrap"><aside>{heads.length>0&&<><Mark>{t("In diesem Beitrag")}</Mark><ol>{heads.map((h,i)=><li key={i}><a href={url('#absatz-'+(i+1))}>{h}</a></li>)}</ol></>}<a className="ws-text-link" href={url("/ratgeber")}>{t("← Alle Beiträge")}</a></aside><Flow blocks={a.verbatim} lang={lang} anchors pool={a.pool}/></div></section>
  <section className="wv-section"><div className="ws-wrap"><Go lang={lang} href={a.relatedHref}>{t("Passende Leistung ansehen")}</Go></div></section></>}
export function ContactPage({lang='de', topic=''}){
  const {t, url} = language(lang);
  const page = oldPage('kontaktieren-sie-uns', lang);
  const [label, lead, , , , , formTitle] = [page.blocks[0].x, page.blocks[1].x, 0, 0, 0, 0, page.blocks.find(b => b.t === 'h3' && src(b).startsWith('Füllen Sie')).x];
  return <section className="ws-contact-page"><div className="ws-wrap"><nav className="ws-crumb" aria-label={t("Brotkrumennavigation")}><a href={url("/")}>{t("Startseite")}</a>{t(" / Kontakt")}</nav><div className="ws-inquiry"><div><Mark>{label}</Mark><h1>{page.title}</h1><p>{lead}</p><dl className="ws-contact-info">{[[t("E-Mail"),company.email],[t("Telefon"),company.phone],[t("Adresse"),company.address]].map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl><figure className="wv-photo wv-photo-side"><Img k="reinigung_card" lang={lang}/></figure></div><div className="ws-contact-card"><h2>{formTitle}</h2>{topic&&<p>{t("Bereich: ")}{topic}</p>}<ContactForm lang={lang} topic={topic}/></div></div></div></section>}
export function LegalPage({lang='de', privacy=false}){
  const {t} = language(lang);
  const {aboutContent} = getCatalog(lang);
  return <><PageIntro lang={lang} tag={t("Unternehmen")} title={privacy?t("Datenschutz."):(lang==='en'?'Legal notice':'Impressum')}/><section className="ws-wrap ws-section ws-legal ws-prose">{privacy?<><h2>{t("Kontaktanfragen")}</h2><p>{t("Wenn Sie uns schreiben, verwenden wir Ihre Angaben zur Bearbeitung der Anfrage. Bei Haushaltsanfragen werden auch die gewählten Leistungen und die Kalkulation übermittelt. Die Telefonnummer ist freiwillig.")}</p><h2>{t("Technische Dienste")}</h2><p>{t("Beim Besuch werden technisch notwendige Verbindungsdaten verarbeitet. Die Schriftarten werden über Google Fonts angefordert. Bei aktiviertem Formularversand erfolgt die Übermittlung der E-Mail über Resend.")}</p><h2>{t("Ihre Daten")}</h2><p>{t("Für Fragen zu Ihren Daten wenden Sie sich an White Stone GmbH. Die vollständigen Angaben zur verantwortlichen Stelle und zum Datenschutz werden vor Inbetriebnahme ergänzt.")}</p></>:<Imprint lang={lang}/>}</section></>}


/** Impressum mit dem Wortlaut der bisherigen Website. Anschrift, Telefon und E-Mail kommen aus company.js (freigegebene Angaben). */
function Imprint({lang='de'}){
  const blocks = oldPage('impressum', lang).blocks;
  const contact = /Seebrucker|hostingersite|Telefonnummer|Handy Nummer/; const en = lang === 'en';
  const value = b => /Telefonnummer|hostingersite/.test(src(b)) ? (en ? 'E-mail: ' : 'E-Mail : ')+company.email+(en ? ' Phone: ' : ' Telefonnummer: ')+company.phone : /Handy Nummer/.test(src(b)) ? (en ? 'Mobile number: ' : 'Handy Nummer: ')+company.phone : company.address;
  return <div lang={lang}>{blocks.map((b,i)=>b.t==='h3'?<h2 key={i}>{b.x}</h2>:b.t==='h6'?<h3 key={i}>{b.x}</h3>:<p key={i}>{contact.test(src(b))?value(b):b.x}</p>)}</div>;
}
