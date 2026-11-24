/* Hero-Karten mit echten Fotos der Website: sanfte Überblendung (Ken-Burns) plus passender Effekt.
   Reinigung: Sprühnebel an der Düse · Haushalt: Glanz und Funkeln. */

const SETS = {
  spray: ['reinigung-1', 'reinigung-2', 'reinigung-3'],
  shelf: ['regal-1', 'regal-2', 'regal-3'],
  home: ['haushalt-1', 'haushalt-2', 'haushalt-3'],
};

export default function PhotoIcon({ name }) {
  return <span className={'hp hp-' + name} aria-hidden="true">
    {SETS[name].map((f, i) => <img key={f} className={'hp-img n' + i} src={`/fotografie/hero-karten/${f}.webp`} alt="" width="300" height="300" decoding="async" />)}
    {name === 'spray' && <span className="hp-fx hp-mist">{[1, 2, 3, 4, 5, 6].map(n => <i key={n} className={'m' + n} />)}</span>}
    {name === 'home' && <span className="hp-fx hp-shine"><b className="s1" /><b className="s2" /><b className="s3" /></span>}
  </span>;
}
