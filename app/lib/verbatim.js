import data from './verbatim.json';

// Wortgetreue Texte der bisherigen Website (nur Text, ohne Bilder, ohne veraltete Kontaktdaten).
export const verbatim = data;
export const oldPage = slug => data[slug];

const postList = Object.values(data).filter(p => p.kind === 'post').sort((a, b) => b.date.localeCompare(a.date));

// Je Thema ein Pool aktueller Fotos der White-Stone-Website, damit die Beiträge abwechslungsreich bebildert sind.
const topics = [
  [/fassad|algen/, 'Fassadenreinigung', ['fassade', 'fassade_hubsteiger', 'fassade_balkon', 'cleaning_guide_facade', 'cleaning_guide_surface'], '/reinigung/fassadenreinigung'],
  [/glas|fenster/, 'Glas- & Fensterreinigung', ['glas', 'cleaning_guide_window', 'guides_glas', 'gallery_glas'], '/reinigung/glas-und-fensterreinigung'],
  [/regal|merchandising/, 'Regalservice', ['regalservice', 'regalservice_mitarbeiter', 'guides_regalservice', 'gallery_regalservice'], '/regalservice'],
  [/hotel/, 'Hotelreinigung', ['hotel', 'cleaning_guide_hotel', 'gallery_hotel'], '/reinigung/hotelreinigung'],
  [/kinder|kita/, 'Kindergartenreinigung', ['kita'], '/reinigung/kita-reinigung'],
  [/schul/, 'Schulreinigung', ['schule'], '/reinigung/schulreinigung'],
  [/(^|-)bau/, 'Bau- & Sonderreinigung', ['bau', 'gallery_bau'], '/reinigung/bau-und-sonderreinigung'],
  [/buro|bero|buero/, 'Büroreinigung', ['buero', 'gallery_buero'], '/reinigung/buero-und-gebaeudereinigung'],
];
const fallback = ['Gebäudereinigung', ['reinigung', 'reinigung_card', 'nachhaltigkeit', 'buero', 'hotel'], '/reinigung'];
const used = {};

export function firstParagraph(blocks) {
  const p = blocks.find(b => b.t === 'p' && b.x.length > 60);
  return p ? p.x.replace(/\s*\n\s*/g, ' ') : '';
}

export const verbatimGuides = postList.map(p => {
  const hit = topics.find(([re]) => re.test(p.slug)) || [null, ...fallback];
  const [, category, pool, relatedHref] = hit;
  const n = used[category] = (used[category] ?? -1) + 1;
  const photoKey = pool[n % pool.length];
  return {
    slug: p.slug, title: p.title, category, photoKey, relatedHref, date: p.date,
    pool: [...pool.slice(pool.indexOf(photoKey) + 1), ...pool.slice(0, pool.indexOf(photoKey)), 'reinigung_card', 'nachhaltigkeit'],
    summary: firstParagraph(p.blocks), verbatim: p.blocks, sections: [], takeaway: ''
  };
});

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
const overview = oldPage('unsere-leistungen').blocks;
function overviewEntry(prefix) {
  const i = overview.findIndex(b => b.t === 'h3' && b.x.startsWith(prefix));
  return i < 0 ? null : { title: overview[i].x, text: overview[i + 1].x };
}
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
