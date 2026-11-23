import {language} from '../lib/language';
import {getCatalog} from '../lib/content';
import {company} from '../lib/company';
import {AreaCards,PageIntro,Go,Pic,Faq,Subhead,Mark,Heading} from './Design';
import {Clients,Values,Workflow} from './HomeSections';
import HouseholdPlanner from './HouseholdPlanner';
import ContactForm from './ContactForm';
import CleaningServicesGrid from './CleaningServicesGrid';
import {shelfServicesData} from './ShelfServicesSection';
import VerbatimBody, {Flow,PhotoGrid,PeopleList,NewsIndex,headingsOf} from './Verbatim';
import {oldPage} from '../lib/verbatim';
import {photos} from '../lib/photos';
import HouseholdServicesSection from './HouseholdServicesSection';

export function ServicesPage({lang='de'} = {}){
  const {t} = language(lang);
  const page = oldPage('unsere-leistungen');
  const blocks = page.blocks.filter(b => !(b.t === 'txt' && b.k === 'sub') && b.t !== 'h1');
  const h1 = page.blocks.find(b => b.t === 'h1');
  return <>
    <PageIntro lang={lang} tag={page.title} title={h1.x} photo="buero"/>
    <section className="ws-wrap ws-section"><AreaCards lang={lang}/></section>
    <section className="wv-section"><div className="ws-wrap"><Flow blocks={blocks} lang={lang}/></div></section>
  </>}
export function CleaningPage({lang='de'} = {}){
  const {t, url} = language(lang);
  const {cleaningServices} = getCatalog(lang);
  const isEn = lang === 'en';
  const services = cleaningServices.map(s => ({...s, href: url('/reinigung/' + s.slug)}));
  const home = oldPage('home-5').blocks;
  const i = home.findIndex(b => b.t === 'h3' && b.x === 'Professionelle Reinigung für jede Anforderung');
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
      <section className="wv-section"><div className="ws-wrap"><Flow blocks={home.slice(i + 2, i + 4)} lang={lang}/></div></section>
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

function Questions({lang='de', items}){
  const {t} = language(lang);
  return (
    <section className="ws-section ws-faq-wrap">
      <div className="ws-wrap ws-two ws-faq-two">
        <div className="ws-faq-head">
          <Subhead tag={t("Gut zu wissen")} title={t("Häufige Fragen.")}/>
          <div className="ws-faq-accent-bar" aria-hidden="true" />
        </div>
        <Faq items={items}/>
      </div>
    </section>
  );
}
const extraPhotos={
  'glas-und-fensterreinigung':['gallery_glas','guides_glas','cleaning_guide_window'],
  'buero-und-gebaeudereinigung':['gallery_buero','nachhaltigkeit'],
  'hotelreinigung':['gallery_hotel','cleaning_guide_hotel'],
  'bau-und-sonderreinigung':['gallery_bau'],
  'fassadenreinigung':['fassade_hubsteiger','fassade_balkon','cleaning_guide_facade'],
  'kita-reinigung':['reinigung_card'],
  'schulreinigung':['reinigung'],
  'regalservice':['regalservice_mitarbeiter','guides_regalservice','gallery_regalservice'],
};
const spread=list=>{const out=[];list.forEach((p,i)=>{out[1+i*2]=p;});return out;};
export function ServiceDetail({lang='de', service}){
  const {t} = language(lang);
  return <><PageIntro lang={lang} tag={service.shortTitle} title={service.pageTitle} photo={service.photoKey} crumb={[t("Reinigung"),'/reinigung']}><Go lang={lang} href={'/kontakt?bereich='+encodeURIComponent(service.shortTitle)}>{t("Einsatz anfragen")}</Go></PageIntro>
  <VerbatimBody lang={lang} blocks={service.verbatim} photos={spread(extraPhotos[service.slug]||[])}/></>}
export function RetailPage({lang='de'} = {}){
  const {t} = language(lang);
  const {retailService} = getCatalog(lang);
  const h1 = retailService.verbatim.find(b => b.t === 'h1');
  const body = retailService.verbatim.filter(b => b !== h1);
  const gallery = [...shelfServicesData.de.map(x => ({src: x.image, alt: x.title, width: 720, height: 720})), ...[1,2,3].map(n => ({src: `/assets/shelf_guide_card${n}.webp`, alt: t("Regalservice"), width: 720, height: 540}))];
  return (
    <>
      <PageIntro lang={lang} tag={t("Regalservice")} title={h1.x} photo="regalservice_mitarbeiter" crumb={[t("Leistungen"), '/leistungen']}>
        <Go lang={lang} href={'/kontakt?bereich=' + encodeURIComponent(retailService.shortTitle)}>{t("Einsatz anfragen")}</Go>
      </PageIntro>
      <VerbatimBody lang={lang} blocks={body} photos={[null,'regalservice',null,'gallery_regalservice']}/>
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

      <section className="ws-wrap ws-section"><Subhead tag={t("Hilfe im Haushalt")} title={t("Das können Sie abgeben.")}/><Blocks items={s.scope}/></section>
      <section className="ws-pricing"><div className="ws-wrap ws-section"><Heading tag={t("Preisgestaltung")} first={t("Wie entsteht")} accent={t("Ihr Preis?")}>{householdPricing.intro}</Heading><div className="ws-price-notes">{householdPricing.factors.map(f=><div key={f.title}><h3>{f.title}</h3><p>{f.text}</p></div>)}</div></div></section>
      <div className="ws-wrap ws-section"><HouseholdPlanner lang={lang} approvedRate={rate>0&&rate<=1000?rate:null}/></div>
      <Questions lang={lang} items={s.faq}/>
      <PhotoGrid lang={lang} items={['guides_haushalt','gallery_haushalt','haushalt_mann'].map(k=>({src:photos[k].src,alt:language(lang).alt(k),width:photos[k].width,height:photos[k].height}))}/>
    </>
  );
}
export function AboutPage({lang='de'} = {}){
  const {t} = language(lang);
  const page = oldPage('uber-uns');
  const blocks = page.blocks.filter((b,i) => !(i === 0 && b.k === 'sub'));
  const h3 = blocks.findIndex(b => b.t === 'h3');
  const intro = blocks[h3], lead = blocks[h3 + 1];
  const rest = blocks.filter(b => b !== intro && b !== lead);
  return <><PageIntro lang={lang} tag={page.title} title={intro.x} lead={lead.x} photo="buero"/>
  <VerbatimBody lang={lang} blocks={rest} photos={['hotel','nachhaltigkeit',null,'gallery_buero']}/><Clients lang={lang}/></>}
export function TeamPage({lang='de'} = {}){
  const {t} = language(lang);
  const page = oldPage('unser-team');
  const {aboutContent} = getCatalog(lang);
  const person = aboutContent.team;
  const closing = page.blocks.slice(page.blocks.findIndex(b => b.t === 'txt' && b.k === 'sub'));
  return <><PageIntro lang={lang} tag={page.title} title={person.name} lead={person.role} photo="ali" crumb={[t("Über uns"),'/ueber-uns']}><Go lang={lang} href="/kontakt">{t("Kontakt aufnehmen")}</Go></PageIntro>
  <VerbatimBody lang={lang} blocks={closing}/></>}
export function AdvicePage({lang='de'} = {}){
  const {adviceArticles} = getCatalog(lang);
  const page = oldPage('neueste-nachrichten');
  return <><PageIntro lang={lang} tag={page.title} title={page.title} photo="glas"/><NewsIndex lang={lang} articles={adviceArticles}/></>}
export function ArticlePage({lang='de', article:a}){
  const {t, url} = language(lang);
  const heads = headingsOf(a.verbatim);
  return <><PageIntro lang={lang} tag={a.category} title={a.title} photo={a.photoKey} crumb={[t("Ratgeber"),'/ratgeber']}/>
  <section className="wv-article"><div className="ws-wrap"><aside>{heads.length>0&&<><Mark>{t("In diesem Beitrag")}</Mark><ol>{heads.map((h,i)=><li key={i}><a href={url('#absatz-'+(i+1))}>{h}</a></li>)}</ol></>}<a className="ws-text-link" href={url("/ratgeber")}>{t("← Alle Beiträge")}</a></aside><Flow blocks={a.verbatim} lang={lang} anchors/></div></section>
  <section className="wv-section"><div className="ws-wrap"><Go lang={lang} href={a.relatedHref}>{t("Passende Leistung ansehen")}</Go></div></section></>}
export function ContactPage({lang='de', topic=''}){
  const {t, url} = language(lang);
  const page = oldPage('kontaktieren-sie-uns');
  const [label, lead, , , , , formTitle] = [page.blocks[0].x, page.blocks[1].x, 0, 0, 0, 0, page.blocks.find(b => b.t === 'h3' && b.x.startsWith('Füllen Sie')).x];
  return <section className="ws-contact-page"><div className="ws-wrap"><nav className="ws-crumb" aria-label={t("Brotkrumennavigation")}><a href={url("/")}>{t("Startseite")}</a>{t(" / Kontakt")}</nav><div className="ws-inquiry"><div><Mark>{label}</Mark><h1>{page.title}</h1><p lang="de">{lead}</p><dl className="ws-contact-info">{[[t("E-Mail"),company.email],[t("Telefon"),company.phone],[t("Adresse"),company.address]].map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></div><div className="ws-contact-card"><h2 lang="de">{formTitle}</h2>{topic&&<p>{t("Bereich: ")}{topic}</p>}<ContactForm lang={lang} topic={topic}/></div></div></div></section>}
export function LegalPage({lang='de', privacy=false}){
  const {t} = language(lang);
  const {aboutContent} = getCatalog(lang);
  return <><PageIntro lang={lang} tag={t("Unternehmen")} title={privacy?t("Datenschutz."):t("Impressum.")}/><section className="ws-wrap ws-section ws-legal ws-prose">{privacy?<><h2>{t("Kontaktanfragen")}</h2><p>{t("Wenn Sie uns schreiben, verwenden wir Ihre Angaben zur Bearbeitung der Anfrage. Bei Haushaltsanfragen werden auch die gewählten Leistungen und die Kalkulation übermittelt. Die Telefonnummer ist freiwillig.")}</p><h2>{t("Technische Dienste")}</h2><p>{t("Beim Besuch werden technisch notwendige Verbindungsdaten verarbeitet. Die Schriftarten werden über Google Fonts angefordert. Bei aktiviertem Formularversand erfolgt die Übermittlung der E-Mail über Resend.")}</p><h2>{t("Ihre Daten")}</h2><p>{t("Für Fragen zu Ihren Daten wenden Sie sich an White Stone GmbH. Die vollständigen Angaben zur verantwortlichen Stelle und zum Datenschutz werden vor Inbetriebnahme ergänzt.")}</p></>:<><h2>White Stone GmbH</h2><p>{t("Geschäftsführer: ")}{aboutContent.team.name}<br/>{t("Anschrift: ")}{company.address}<br/>{t("E-Mail: ")}{company.email}<br/>{t("Telefon: ")}{company.phone}</p><p>{t("Die bestätigten Unternehmens- und Registerangaben werden vor Inbetriebnahme ergänzt.")}</p></>}</section></>}

