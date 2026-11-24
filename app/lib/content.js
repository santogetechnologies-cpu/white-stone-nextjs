import * as german from './catalog';
import * as english from './services.en';
import {guidesFor,oldPage,serviceSources,overviewFor} from './verbatim';

// Reinigung umfasst genau die sieben Leistungen der bisherigen Website; Texte stammen wortgetreu von dort.
const withText=(list,lang)=>list.filter(s=>serviceSources[s.slug]).map(s=>({...s,title:overviewFor(s.slug,lang).title,summary:overviewFor(s.slug,lang).text,verbatim:oldPage(serviceSources[s.slug],lang).blocks,pageTitle:oldPage(serviceSources[s.slug],lang).title}));
const retail=(service,lang)=>({...service,title:overviewFor('regalservice',lang).title,summary:overviewFor('regalservice',lang).text,verbatim:oldPage('regalservice-firma-munchen-regalbefullung',lang).blocks,pageTitle:oldPage('regalservice-firma-munchen-regalbefullung',lang).title});

const catalogs={
  de:{...german,cleaningServices:withText(german.cleaningServices,'de'),retailService:retail(german.retailService,'de'),adviceArticles:guidesFor('de')},
  en:{...english,cleaningServices:withText(english.cleaningServices,'en'),retailService:retail(english.retailService,'en'),adviceArticles:guidesFor('en')}
};
export function getCatalog(lang='de'){return catalogs[lang];}
