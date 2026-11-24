import { photos } from './photos';

// Dateien, die dasselbe Motiv zeigen, zählen als ein Bild (keine Wiederholung auf derselben Seite).
const SAME = [
  ['fassade', 'cleaning_guide_facade'],
  ['hotel', 'cleaning_guide_hotel'],
  ['regalservice', 'regalservice_card', 'gallery_regalservice'],
  ['gallery_haushalt', '/fotografie/household-services/household-11-dusting.webp'],
  ['gallery_buero', '/fotografie/household-services/household-08-carpet.webp'],
];
const canon = {};
SAME.forEach(g => g.forEach(k => { canon[k] = g[0]; }));
const srcToKey = Object.fromEntries(Object.entries(photos).map(([k, p]) => [p.src, k]));
const norm = k => { const key = srcToKey[k] || k; return canon[key] || key; };

// Allgemeine Reinigungsfotos als Reserve, wenn ein Themenpool erschöpft ist.
const GENERAL = ['ws_modern_interior_counter', 'ws_office_meeting_table', 'ws_office_floor_trolley', 'ws_glass_interior_door', 'ws_office_window_wipe',
  'ws_hall_floor_mopping', 'ws_office_workstation', 'ws_glass_partition', 'ws_glass_entrance_door', 'nachhaltigkeit', 'reinigung_card', 'reinigung',
  'buero', 'gallery_buero', 'ws_office_window_squeegee', 'glas', 'guides_glas', 'gallery_glas', 'cleaning_guide_window', 'ws_home_shelving_cleaning'];

/** Merkt sich die auf einer Seite verwendeten Fotos und liefert für jeden Pool das nächste noch nicht gezeigte. */
export function createPicker(initial = []) {
  const used = new Set();
  const use = k => { if (k) used.add(norm(k)); return k; };
  initial.forEach(use);
  return {
    use,
    has: k => used.has(norm(k)),
    pick(pool = [], fallback = GENERAL) {
      for (const k of [...pool, ...fallback]) if (k && !used.has(norm(k))) return use(k);
      return pool[0] || fallback[0];
    },
  };
}
// Feste Bilder des Anfrage-Abschnitts am Seitenende (Design.js → CTA)
export const CTA_PHOTOS = ['ws_hotel_bedroom_prep', 'ws_office_workstation', 'ws_renovation_vacuum', 'ws_highrise_window', '/fotografie/household-services/household-09-sofa.webp', '/fotografie/household-services/household-13-bedmaking.webp'];
