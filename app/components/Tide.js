import {useId} from 'react';

// Periodic Bézier bands join at identical slopes; each layer can travel a full
// wavelength without a visible seam. CSS animates the groups, not the page.
const curves=[
  'M0 58 C110 58 135 12 242 12 S424 115 556 115 S693 58 800 58',
  'M0 66 C100 66 165 120 279 120 S461 21 575 21 S709 66 800 66',
  'M0 93 C95 93 148 38 264 38 S432 108 556 108 S690 93 800 93',
];
export default function Tide({tone='light', compact=false}) {
  const id=useId().replace(/[^a-zA-Z0-9_-]/g,'');
  return <div aria-hidden="true" className={'ws-tide '+tone+(compact?' compact':'')}><svg viewBox="0 0 800 145" preserveAspectRatio="none" focusable="false"><defs>
   <linearGradient id={'sw'+id} x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
     <stop stopColor="#337efa"/><stop offset=".30" stopColor="#7de3ee"/><stop offset=".57" stopColor="#2373eb"/><stop offset=".82" stopColor="#55d8ce"/><stop offset="1" stopColor="#337efa"/>
   </linearGradient>
   {curves.map((d,i)=><path id={'wave'+id+i} key={i} d={d}/>)}</defs>
   {curves.map((_,i)=><g key={i} className={'ws-flow flow-'+i} stroke={'url(#sw'+id+')'}>{[-800,0,800,1600].map(x=><use key={x} href={'#wave'+id+i} x={x}/>)}</g>)}
  </svg></div>;
}
