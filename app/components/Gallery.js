'use client';
import {language} from '../lib/language';
import {useRef, useState} from 'react';
import {photos} from '../lib/photos';
const entries=[['glas','Glasreinigung'],['hotel','Hotelreinigung'],['regalservice','Warenpflege'],['haushalt','Haushaltshilfe']];
export default function Gallery({lang='de'} = {}){
  const {t, alt} = language(lang);
  
 const [selected,set]=useState(0),dialog=useRef(null);
 const step=(n)=>set(x=>(x+n+entries.length)%entries.length);
 const [key,label]=entries[selected];
 return <><div className="ws-gallery">{entries.map(([name,title],i)=><button key={name} onClick={()=>{set(i);dialog.current.showModal();}} aria-label={t(title)+t(" vergrößern")}><img src={photos[name].src} alt={alt(name)} loading="lazy"/><span>{t(title)} <b aria-hidden="true">⤢</b></span></button>)}</div>
 <dialog className="ws-lightbox" aria-label={t("Bildergalerie")} ref={dialog} onClick={e=>{if(e.target===dialog.current)dialog.current.close();}} onKeyDown={e=>{if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1);}}>
 <button onClick={()=>dialog.current.close()} className="ws-x" aria-label={t("Schließen")}>×</button><img src={photos[key].src} alt={alt(key)}/><div><button onClick={()=>step(-1)} aria-label={t("Vorheriges Bild")}>←</button><span>{selected+1} / {entries.length} · {t(label)}</span><button onClick={()=>step(1)} aria-label={t("Nächstes Bild")}>→</button></div></dialog></>;
}
