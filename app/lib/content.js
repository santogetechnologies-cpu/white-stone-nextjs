import * as german from './catalog';
import * as english from './services.en';
import {verbatimGuides,oldPage,serviceSources,overviewByService} from './verbatim';

// Reinigung umfasst genau die sieben Leistungen der bisherigen Website; Texte stammen wortgetreu von dort.
const withText=list=>list.filter(s=>serviceSources[s.slug]).map(s=>({...s,title:overviewByService[s.slug].title,summary:overviewByService[s.slug].text,verbatim:oldPage(serviceSources[s.slug]).blocks,pageTitle:oldPage(serviceSources[s.slug]).title}));
const retail=service=>({...service,title:overviewByService.regalservice.title,summary:overviewByService.regalservice.text,verbatim:oldPage('regalservice-firma-munchen-regalbefullung').blocks,pageTitle:oldPage('regalservice-firma-munchen-regalbefullung').title});

const catalogs={
  de:{...german,cleaningServices:withText(german.cleaningServices),retailService:retail(german.retailService),adviceArticles:verbatimGuides},
  en:{...english,cleaningServices:withText(english.cleaningServices),retailService:retail(english.retailService),adviceArticles:verbatimGuides}
};
export function getCatalog(lang='de'){return catalogs[lang];}
