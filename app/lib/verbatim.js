import data from './verbatim.json';
import dataEn from './verbatim.en.json';

// Wortgetreue Texte der bisherigen Website (nur Text, ohne Bilder, ohne veraltete Kontaktdaten).
// verbatim.en.json ist die englische Fassung mit derselben Struktur; jeder Block trägt dort zusätzlich `de` (Originaltext).
export const verbatim = data;
export const oldPage = (slug, lang = 'de') => (lang === 'en' ? dataEn : data)[slug];
/** Originaler (deutscher) Wortlaut eines Blocks – für Vergleiche, unabhängig von der Sprache. */
export const src = b => b?.de ?? b?.x;

const postList = Object.values(data).filter(p => p.kind === 'post').sort((a, b) => b.date.localeCompare(a.date));
const CATEGORY_EN = { 'Fassadenreinigung': 'Façade cleaning', 'Glas- & Fensterreinigung': 'Glass & window cleaning', 'Regalservice': 'Shelf services', 'Hotelreinigung': 'Hotel cleaning', 'Kindergartenreinigung': 'Nursery cleaning', 'Schulreinigung': 'School cleaning', 'Bau- & Sonderreinigung': 'Construction & specialist cleaning', 'Büroreinigung': 'Office cleaning', 'Gebäudereinigung': 'Building cleaning' };

// Je Thema ein Pool aktueller Fotos der White-Stone-Website, damit die Beiträge abwechslungsreich bebildert sind.
const topics = [
  [/fassad|algen/, 'Fassadenreinigung', ['fassade', 'fassade_hubsteiger', 'fassade_balkon', 'cleaning_guide_surface', 'ws_highrise_window'], '/reinigung/fassadenreinigung'],
  [/glas|fenster/, 'Glas- & Fensterreinigung', ['glas', 'cleaning_guide_window', 'guides_glas', 'gallery_glas', 'ws_office_window_squeegee', 'ws_glass_partition', 'ws_glass_entrance_door', 'ws_office_window_wipe'], '/reinigung/glas-und-fensterreinigung'],
  [/regal|merchandising/, 'Regalservice', ['regalservice', 'regalservice_mitarbeiter', 'guides_regalservice', 'ws_shelf_tablet_audit', 'ws_shelf_pasta_facing', 'ws_shelf_stocking_box'], '/regalservice'],
  [/hotel/, 'Hotelreinigung', ['hotel', 'gallery_hotel', 'ws_hotel_bathroom_sanitizing', 'ws_hotel_bedroom_prep'], '/reinigung/hotelreinigung'],
  [/kinder|kita/, 'Kindergartenreinigung', ['kita', 'ws_daycare_playroom'], '/reinigung/kita-reinigung'],
  [/schul/, 'Schulreinigung', ['schule', 'ws_hall_floor_mopping'], '/reinigung/schulreinigung'],
  [/(^|-)bau/, 'Bau- & Sonderreinigung', ['bau', 'gallery_bau', 'ws_renovation_vacuum'], '/reinigung/bau-und-sonderreinigung'],
  [/buro|bero|buero/, 'Büroreinigung', ['buero', 'gallery_buero', 'ws_office_workstation', 'ws_office_meeting_table', 'ws_office_floor_trolley'], '/reinigung/buero-und-gebaeudereinigung'],
];
const fallback = ['Gebäudereinigung', ['reinigung', 'reinigung_card', 'nachhaltigkeit', 'ws_modern_interior_counter', 'ws_glass_interior_door', 'ws_office_meeting_table', 'ws_office_floor_trolley', 'ws_hall_floor_mopping', 'ws_office_workstation', 'ws_glass_partition'], '/reinigung'];
const GENERAL_POOL = fallback[1];
// jedes Beitragsbild möglichst nur einmal auf der Website; Bilder des Anfrage-Abschnitts (jede Seite) ausgenommen
const taken = new Set(['ws_hotel_bedroom_prep', 'ws_office_workstation', 'ws_renovation_vacuum', 'ws_highrise_window']);

export function firstParagraph(blocks) {
  const p = blocks.find(b => b.t === 'p' && b.x.length > 60);
  return p ? p.x.replace(/\s*\n\s*/g, ' ') : '';
}

const guidesDe = postList.map(p => {
  const hit = topics.find(([re]) => re.test(p.slug)) || [null, ...fallback];
  const [, category, pool, relatedHref] = hit;
  const all = [...pool, ...GENERAL_POOL.filter(k => !pool.includes(k))];
  const photoKey = all.find(k => !taken.has(k)) || pool[0];
  taken.add(photoKey);
  return {
    slug: p.slug, title: p.title, category, photoKey, relatedHref, date: p.date,
    pool: [...pool.filter(k => k !== photoKey), ...GENERAL_POOL.filter(k => k !== photoKey && !pool.includes(k))],
    summary: firstParagraph(p.blocks), verbatim: p.blocks, sections: [], takeaway: ''
  };
});
export const verbatimGuides = guidesDe;
const guidesEn = guidesDe.map(g => { const e = dataEn[g.slug]; return { ...g, title: e.title, category: CATEGORY_EN[g.category] || g.category, summary: firstParagraph(e.blocks), verbatim: e.blocks }; });
export const guidesFor = lang => (lang === 'en' ? guidesEn : guidesDe);

export const serviceSources = {
  'glas-und-fensterreinigung': 'glas-und-fensterreinigung',
  'buero-und-gebaeudereinigung': 'buro-und-gebaudereinigung',
  'hotelreinigung': 'hotel-und-housekeeping-service',
  'bau-und-sonderreinigung': 'bau-und-spezialreinigung',
  'fassadenreinigung': 'fassadenreinigung',
  'kita-reinigung': 'kinder-garten-reinigung',
  'schulreinigung': 'schule-reinigung',
};

// Kurztexte der Leistungsübersicht ("Unsere Leistungen") der bisherigen Website.
function overviewEntry(prefix, lang = 'de') {
  const overview = oldPage('unsere-leistungen', lang).blocks;
  const i = overview.findIndex(b => b.t === 'h3' && src(b).startsWith(prefix));
  return i < 0 ? null : { title: overview[i].x, text: overview[i + 1].x };
}
const PREFIX = {
  'glas-und-fensterreinigung': 'Glas- & Fensterreinigung', 'buero-und-gebaeudereinigung': 'Büro- & Gebäudereinigung', 'hotelreinigung': 'Hotelreinigung',
  'bau-und-sonderreinigung': 'Bau- & Sonderreinigung', 'fassadenreinigung': 'Fassadenreinigung', 'kita-reinigung': 'Kindergartenreinigung',
  'schulreinigung': 'Schulreinigung', 'regalservice': 'Regalservice',
};
export const overviewFor = (key, lang = 'de') => overviewEntry(PREFIX[key], lang);
export const overviewByService = {
  'glas-und-fensterreinigung': overviewEntry('Glas- & Fensterreinigung'),
  'buero-und-gebaeudereinigung': overviewEntry('Büro- & Gebäudereinigung'),
  'hotelreinigung': overviewEntry('Hotelreinigung'),
  'bau-und-sonderreinigung': overviewEntry('Bau- & Sonderreinigung'),
  'fassadenreinigung': overviewEntry('Fassadenreinigung'),
  'kita-reinigung': overviewEntry('Kindergartenreinigung'),
  'schulreinigung': overviewEntry('Schulreinigung'),
  'regalservice': overviewEntry('Regalservice'),
};
