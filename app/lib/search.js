import {getCatalog} from './content';
import {localizedPath} from './paths';
import {photos} from './photos';

export const siteOrigin = new URL(process.env.SITE_URL || 'https://whitestonegmbh.de').origin;
const descriptions = {
 '/':[['Reinigung, Regalservice und Haushalt in München','White Stone betreut Gebäude, Verkaufsflächen und private Haushalte. Entdecken Sie unsere drei Leistungsbereiche und fragen Sie Ihren Einsatz in München an.'],['Cleaning, shelf services and household help in Munich','Explore cleaning for buildings, retail shelf services and household help in Munich. Find the right service and request a personal quote from White Stone.']],
 '/leistungen':[['Unsere drei Leistungsbereiche','Vergleichen Sie Reinigung, Regalservice und Haushalt. Finden Sie die passende Unterstützung für Gewerbe, Einzelhandel oder Ihr Zuhause.'],['Our three service areas','Compare commercial cleaning, retail shelf services and household help. Choose the support that fits your building, shop or home.']],
 '/reinigung':[['Gebäudereinigung in München','Glas, Büro, Hotel, Baustelle, Fassade, Kita und Schule: Sieben Reinigungsleistungen mit Aufgaben, Einsatzplanung und Antworten auf häufige Fragen.'],['Building cleaning in Munich','Explore seven cleaning specialities for glass, offices, hotels, construction sites, façades, nurseries and schools, including scope and scheduling.']],
 '/regalservice':[['Regalservice und Warenverräumung in München','Regalbefüllung, Warenrotation, Preiskontrolle und Aktionsaufbau für Ihre Filiale. So plant White Stone den Einsatz mit Ihrer Marktleitung.'],['Retail shelf services in Munich','Shelf replenishment, stock rotation, price checks and promotional displays for your store. Find out how we plan each shift with the store manager.']],
 '/haushalt':[['Haushaltshilfe in München mit Preisrechner','Planen Sie Reinigung, Wäsche und Extras für Ihren Haushalt. Berechnen Sie ein Preisbeispiel je Besuch und stellen Sie Ihre persönliche Anfrage.'],['Household help in Munich and cost calculator','Plan cleaning, laundry and extra tasks for your home. Estimate the cost of one visit or regular support, then request an individual quote.']],
 '/ueber-uns':[['Über White Stone in München','Lernen Sie White Stone kennen: unsere Arbeitsweise, unsere Einsatzgebiete und unser Umgang mit Materialien, Ressourcen und Ihrem Zeitplan.'],['About White Stone in Munich','Learn how White Stone coordinates building care, retail services and household visits, from planning and material selection to a clear handover.']],
 '/team':[['Geschäftsführer Saqib Ali','Saqib Ali ist Geschäftsführer der White Stone GmbH. Lernen Sie Ihren Ansprechpartner für Reinigung, Regalservice und Haushalt kennen.'],['Managing director Saqib Ali','Meet Saqib Ali, managing director of White Stone GmbH and your contact for coordinating cleaning, shelf services and household support.']],
 '/ratgeber':[['Ratgeber für Reinigung, Handel und Haushalt','Praktische Beiträge zu Gebäude- und Glaspflege, Warenpräsentation und Haushaltshilfe. Finden Sie Hinweise für die Planung Ihres nächsten Einsatzes.'],['Guides to cleaning, retail and home care','Practical guidance on building care, shelf presentation and household support. Find checklists and advice to prepare for your next service visit.']],
 '/kontakt':[['Kontakt und Angebotsanfrage','Schreiben Sie White Stone über das Kontaktformular. Nennen Sie Ihren Standort, die gewünschten Leistungen und den vorgesehenen Termin.'],['Contact and quote enquiries','Contact White Stone about a single visit or regular support. Tell us your location, the services you need and your preferred date.']],
 '/impressum':[['Impressum','Unternehmensangaben und Informationen zur Geschäftsführung der White Stone GmbH.'],['Legal notice','Company information and details of the management of White Stone GmbH.']],
 '/datenschutz':[['Datenschutz','Informationen zur Verarbeitung von Anfragen, Kontaktangaben und technischen Verbindungsdaten auf der Website der White Stone GmbH.'],['Privacy information','How White Stone handles enquiry details, household estimates and technical connection data on this website.']]
};
export function routeRecords(lang='de'){
 const {cleaningServices,adviceArticles}=getCatalog(lang);
 const commonPhotos={'/':'glas','/reinigung':'reinigung','/leistungen':'buero','/regalservice':'regalservice','/haushalt':'haushalt','/ueber-uns':'buero','/team':'ali','/ratgeber':'hotel'};
 return [
   ...Object.entries(descriptions).map(([key,pair])=>{const [title,description]=pair[lang==='en'?1:0];return {key,title,description,photo:commonPhotos[key]||'reinigung'};}),
   ...cleaningServices.map(service=>({key:'/reinigung/'+service.slug,title:service.title,description:service.summary,photo:service.photoKey,service})),
   ...adviceArticles.map(article=>({key:'/ratgeber/'+article.slug,title:article.title,description:article.summary,photo:article.photoKey,article}))
 ];
}
export function absolute(key,lang){return siteOrigin+localizedPath(key,lang);}
export function pageMetadata(page,lang){
 const title=page.title+' | White Stone GmbH', url=absolute(page.key,lang),image=siteOrigin+photos[page.photo].src;
 return {title,description:page.description,alternates:{canonical:url,languages:{de:absolute(page.key,'de'),en:absolute(page.key,'en'),'x-default':absolute(page.key,'de')}},
 openGraph:{type:page.article?'article':'website',siteName:'White Stone GmbH',locale:lang==='en'?'en_GB':'de_DE',alternateLocale:lang==='en'?'de_DE':'en_GB',title,description:page.description,url,images:[{url:image,width:photos[page.photo].width,height:photos[page.photo].height}]},
 twitter:{card:'summary_large_image',title,description:page.description,images:[image]}};
}
export function schemaGraph(page,lang){
 const url=absolute(page.key,lang),org=siteOrigin+'/#company',home=absolute('/',lang);
 const records=[{'@type':'Organization','@id':org,name:'White Stone GmbH',url:siteOrigin,areaServed:{'@type':'City',name:'München'}}];
 const isService=page.service||['/reinigung','/regalservice','/haushalt'].includes(page.key);
 const type=page.article?'Article':isService?'Service':page.key==='/kontakt'?'ContactPage':page.key==='/ueber-uns'?'AboutPage':'WebPage';
 const item={'@type':type,'@id':url+'#content',url,name:page.title,description:page.description,image:siteOrigin+photos[page.photo].src};
 if(isService){item.provider={'@id':org};item.areaServed={'@type':'City',name:'München'};}else item.inLanguage=lang;
 if(page.article){item.headline=page.title;item.author={'@id':org};item.publisher={'@id':org};item.mainEntityOfPage=url;}
 records.push(item);
 if(page.key!=='/'){
  const crumbs=[{name:lang==='en'?'Home':'Startseite',item:home}];
  if(page.article||page.service){const parent=page.article?'/ratgeber':'/reinigung';crumbs.push({name:descriptions[parent][lang==='en'?1:0][0],item:absolute(parent,lang)});}
  crumbs.push({name:page.title,item:url});records.push({'@type':'BreadcrumbList',itemListElement:crumbs.map((c,i)=>({'@type':'ListItem',position:i+1,...c}))});
 }else records.push({'@type':'WebSite','@id':siteOrigin+'/#website',name:'White Stone GmbH',url:siteOrigin,inLanguage:['de','en'],publisher:{'@id':org}});
 return {'@context':'https://schema.org','@graph':records};
}
