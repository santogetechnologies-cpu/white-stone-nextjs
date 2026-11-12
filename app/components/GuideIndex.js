'use client';
import {language} from '../lib/language';
import {useState} from 'react';
import {photos} from '../lib/photos';
export default function GuideIndex({lang='de', entries}){
  const {t, url, alt} = language(lang);
  
 const [cat, category]=useState(t("Alle")),[query,search]=useState('');
 const groups=[t("Alle"),...new Set(entries.map(a=>a.category))];
 const visible=entries.filter(a=>(cat===t("Alle")||cat===a.category)&&(a.title+' '+a.summary).toLocaleLowerCase(lang).includes(query.trim().toLocaleLowerCase(lang)));
 return <section className="ws-wrap ws-section"><div className="ws-guide-tools"><label>{t("Themengebiet")}<select value={cat} onChange={e=>{category(e.target.value);}}>{groups.map(g=><option key={g}>{g}</option>)}</select></label><label>{t("Beiträge durchsuchen")}<input value={query} type="search" placeholder={t("z. B. Fassade")} onChange={e=>{search(e.target.value);}}/></label><p aria-live="polite">{visible.length} {visible.length===1?t("Beitrag"):t("Beiträge")}</p></div>
 <div className="ws-reads">{visible.map(a=><a href={url('/ratgeber/'+a.slug)} key={a.slug}><div><img src={photos[a.photoKey].src} alt={alt(a.photoKey)} loading="lazy"/></div><small>{a.category}</small><h3>{a.title}</h3><p>{a.summary}</p><span>{t("Artikel lesen ↗")}</span></a>)}</div>
 {!visible.length&&<p>{t("Zu Ihrer Suche wurde kein Beitrag gefunden. Versuchen Sie einen anderen Suchbegriff.")}</p>}</section>;
}
