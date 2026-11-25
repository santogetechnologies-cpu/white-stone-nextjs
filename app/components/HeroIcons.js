/* Hero-Karten: animierte GIFs für jede Leistungskarte. */
const IMAGES = { spray: 'reinigung', shelf: 'regal', home: 'haushalt' };

export default function PhotoIcon({ name }) {
  return <span className={'hp hp-' + name} aria-hidden="true">
    <img className="hp-img" src={`/fotografie/hero-karten/${IMAGES[name]}.gif`} alt="" width="300" height="300" decoding="async" />
  </span>;
}
