// Public route pairs. The unprefixed German paths remain canonical identifiers in the catalog.
const segments={
 'buerozonen-pflegen':'office-cleaning-zones','merchandising-im-markt':'in-store-merchandising','desinfektion-dokumentieren':'documenting-disinfection','schulhygiene-vereinbaren':'school-hygiene-planning','qualitaet-im-housekeeping':'housekeeping-quality','warenrotation-im-regal':'stock-rotation',
 leistungen:'services',reinigung:'cleaning',regalservice:'shelf-services',haushalt:'household','ueber-uns':'about',team:'team',ratgeber:'guides',kontakt:'contact',impressum:'legal-notice',datenschutz:'privacy',
 'glas-und-fensterreinigung':'glass-and-window-cleaning','buero-und-gebaeudereinigung':'office-and-building-cleaning',hotelreinigung:'hotel-cleaning','bau-und-sonderreinigung':'construction-and-specialist-cleaning',fassadenreinigung:'facade-cleaning','kita-reinigung':'nursery-cleaning',schulreinigung:'school-cleaning',
 'regalplan-lesen':'reading-a-planogram','fenstertermin-vorbereiten':'prepare-for-window-cleaning','haushaltshilfe-erster-termin':'first-household-visit','fassadenreinigung-ohne-hochdruck':'gentle-facade-cleaning','belag-an-der-fassade':'marks-on-facades','fassadenpflege-planen':'planning-facade-care','fassadenangebot-vergleichen':'comparing-facade-quotes','produktionsflaechen-reinigen':'cleaning-production-areas','treppenhaus-pflegeplan':'stairwell-cleaning-plan','gebaeudedienste-abstimmen':'coordinating-building-services','laufende-reinigungsvereinbarung':'regular-cleaning-agreements','kosten-einer-gebaeudereinigung':'building-cleaning-costs','reinigungsfirma-auswaehlen':'choosing-a-cleaning-company','hygieneplan-im-alltag':'everyday-hygiene-plans','regalservice-beauftragen':'arranging-shelf-services','aktionsflaeche-aufbauen':'setting-up-promotional-displays','regalluecken-nachfuellen':'restocking-shelf-gaps','schule-ganztag-reinigen':'cleaning-all-day-schools','unterhaltsreinigung-intervalle':'routine-cleaning-intervals','bauabnahme-vorbereiten':'preparing-a-building-handover','zimmerwechsel-im-hotel':'hotel-room-turnovers','reinigungsergebnis-pruefen':'checking-cleaning-results','grundreinigung-oder-unterhalt':'deep-or-routine-cleaning','geteilte-arbeitsplaetze':'shared-workstations','kita-ferienreinigung-planen':'nursery-holiday-cleaning','teppich-und-polsterpflege':'carpet-and-upholstery-care','kuechengeraete-als-extra':'kitchen-appliance-extras','buegelwaesche-einplanen':'planning-for-ironing','haushaltsangebot-verstehen':'understanding-a-household-quote','schichtuebergabe-im-markt':'retail-shift-handovers','hotellobby-veranstaltungen':'hotel-lobby-events','ressourcenschonend-reinigen':'resource-conscious-cleaning'
};
const inverse=Object.fromEntries(Object.entries(segments).map(([de,en])=>[en,de]));
export function localizedPath(href,lang='de'){
 if(!href.startsWith('/')||href.startsWith('//'))return href;
 const path=href.split(/[?#]/,1)[0]; // preserve the full suffix, including a possible fragment
 const tail=href.slice(path.length),bits=path.split('/').filter(Boolean),wasEnglish=bits[0]==='en';
 if(wasEnglish)bits.shift();
 const de=wasEnglish?bits.map(x=>inverse[x]||x):bits;
 return (lang==='en'?'/en'+(de.length?'/'+de.map(x=>segments[x]||x).join('/'):''):'/'+de.join('/'))+tail;
}
export const pathLocale=path=>/^\/en(?:\/|$)/.test(path)?'en':'de';

