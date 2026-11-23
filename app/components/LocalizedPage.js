import RelatedGuides from './RelatedGuides';
import {notFound} from 'next/navigation';
import Site from './Site';
import Navigation from './Navigation';
import {CTA} from './Design';
import {ServicesPage,CleaningPage,RetailPage,HouseholdPage,AboutPage,TeamPage,AdvicePage,ContactPage,LegalPage,ServiceDetail,ArticlePage} from './DirectoryPages';
import {getCatalog} from '../lib/content';
import {localizedPath} from '../lib/paths';
import {pageMetadata,routeRecords,schemaGraph} from '../lib/search';

const templates={'/leistungen':ServicesPage,'/reinigung':CleaningPage,'/regalservice':RetailPage,'/haushalt':HouseholdPage,'/ueber-uns':AboutPage,'/team':TeamPage,'/ratgeber':AdvicePage,'/kontakt':ContactPage,'/impressum':LegalPage,'/datenschutz':LegalPage};
export function pathsFor(lang) {
 return routeRecords(lang).filter(p=>p.key!=='/').map(p=>({pfad:localizedPath(p.key,lang).split('/').filter(Boolean).slice(lang==='en'?1:0)}));
}
function recordFor(lang,segments){
 const path=(lang==='en'?'/en':'')+(segments.length?'/'+segments.join('/'):'')||'/';
 const record=routeRecords(lang).find(p=>localizedPath(p.key,lang)===path);
 if(!record)notFound();
 return record;
}
export async function metadataFor(lang,params){return pageMetadata(recordFor(lang,(await params)?.pfad||[]),lang);}
export default async function LocalizedPage({lang,params,searchParams}) {
 const record=recordFor(lang,(await params)?.pfad||[]);
 const json=JSON.stringify(schemaGraph(record,lang)).replace(/</g,'\\u003c');
 let content;
 if(record.key==='/'){content=<Site lang={lang}/>;}
 else {
  const View=record.article?ArticlePage:record.service?ServiceDetail:templates[record.key];
  let topic='';
  if(record.key==='/kontakt'){
    const requested=(await searchParams)?.bereich;
    const de=getCatalog('de'),en=getCatalog('en');
    const deServices=[...de.cleaningServices,de.retailService,de.householdService],enServices=[...en.cleaningServices,en.retailService,en.householdService];
    const index=deServices.findIndex((s,i)=>[s.slug,s.shortTitle,enServices[i].shortTitle].includes(requested));
    if(requested==='Reinigung')topic=lang==='en'?'Cleaning':'Reinigung';
    else if(index>=0)topic=(lang==='en'?enServices:deServices)[index].shortTitle;
  }
  const theme=record.article||record.key==='/ratgeber'?'guides':({'/haushalt':'household','/regalservice':'retail'})[record.key]||'building';
  content=<><Navigation lang={lang}/><main className={'ws-world ws-page-refined '+theme}><View lang={lang} article={record.article} service={record.service} privacy={record.key==='/datenschutz'} topic={topic}/><RelatedGuides page={record} lang={lang}/>{!['/haushalt','/kontakt','/impressum','/datenschutz'].includes(record.key)&&<CTA lang={lang}/>}</main></>;
 }
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:json}}/>{content}</>;
}
