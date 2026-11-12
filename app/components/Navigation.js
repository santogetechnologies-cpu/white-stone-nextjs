'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { localizedPath } from '../lib/paths';

const entries = [
  {href:'/reinigung',image:'reinigung',de:['Reinigung','Für Gebäude und Gewerbe','Glas, Büros, Hotels und mehr'],en:['Cleaning','Buildings & workplaces','Windows, offices, hotels and more']},
  {href:'/regalservice',image:'regalservice',de:['Regalservice','Für den Einzelhandel','Warenpflege und Aktionsflächen'],en:['Shelf services','Retail stores','Replenishment and displays']},
  {href:'/haushalt',image:'haushalt',de:['Haushalt','Für Ihr Zuhause','Haushaltshilfe und Preisrechner'],en:['Household','Private homes','Home help and cost calculator']}
];
const shortcuts=[
  ['/ueber-uns','Über uns','About us'],['/team','Team','Our team'],['/ratgeber','Ratgeber','Guides'],
  ['/haushalt#preisrechner','Preisrechner','Price calculator'],['/kontakt','Kontakt','Contact']
];

export function Brand({lang='de'}) {
  return <a className="brand" href={localizedPath('/',lang)} aria-label={'White Stone GmbH · '+(lang==='en'?'Home':'Startseite')}>
    <span className="brand-emblem" aria-hidden="true"><span>w</span><i>✓</i></span><span>White Stone GmbH</span>
  </a>;
}
function LocaleSwitch({lang,path,suffix}) {
  return <nav className="ws-locale" aria-label={lang==='de'?'Sprachauswahl':'Language selection'}>
    {['de','en'].map(code=>code===lang
      ? <span key={code} aria-current="true" lang={code}>{code.toUpperCase()}</span>
      : <a key={code} lang={code} hrefLang={code} aria-label={code==='en'?'Switch to English':'Auf Deutsch wechseln'} href={localizedPath(path,code)+suffix}>{code.toUpperCase()}</a>)}
  </nav>;
}
function MenuGlyph({close=false}) {
  return <span className={'ws-menu-glyph'+(close?' close':'')} aria-hidden="true"><i/><i/></span>;
}
export default function Navigation({home=false,lang='de'}) {
  const en=lang==='en',path=usePathname()||'/',url=href=>localizedPath(href,lang);
  const [open,setOpen]=useState(false), [active,setActive]=useState(0), [suffix,setSuffix]=useState('');
  const dialog=useRef(null),button=useRef(null),dismiss=useRef(null);
  const current=entries[active];
  useEffect(()=>{
    const update=()=>setSuffix(window.location.search+window.location.hash);
    update();window.addEventListener('hashchange',update);
    return ()=>window.removeEventListener('hashchange',update);
  },[path]);
  useEffect(()=>{
    if(!open)return;
    const modal=dialog.current;
    modal.showModal();
    dismiss.current?.focus({preventScroll:true});
    const root=document.documentElement,overflow=root.style.overflow;
    root.style.overflow='hidden';
    return ()=>{root.style.overflow=overflow;if(modal.open)modal.close();button.current?.focus({preventScroll:true});};
  },[open]);
  function show(){
    const match=entries.findIndex(e=>path===url(e.href)||path.startsWith(url(e.href)+'/'));
    setActive(Math.max(0,match));setOpen(true);
  }
  const close=()=>setOpen(false);
  return <header className={'header container ws-nav-header'+(home?' over-window':'')}>
    <Brand lang={lang}/>
    <nav className="ws-top-services" aria-label={en?'Main services':'Hauptleistungen'}>
      {entries.map(e=><a key={e.href} href={url(e.href)} aria-current={path===url(e.href)?'page':undefined}>{e[lang][0]}</a>)}
    </nav>
    <div className="ws-nav-tools"><LocaleSwitch lang={lang} path={path} suffix={suffix}/>
      <button className="ws-menu-button" ref={button} aria-haspopup="dialog" aria-expanded={open} aria-controls="ws-full-menu" onClick={show}><span>{en?'Menu':'Menü'}</span><MenuGlyph/></button>
    </div>
    <dialog ref={dialog} id="ws-full-menu" className="ws-menu-screen" aria-label={en?'Site navigation':'Seitennavigation'} onCancel={e=>{e.preventDefault();close();}}>
      {open&&<div className="ws-menu-inner">
        <div className="ws-menu-bar"><Brand lang={lang}/><div className="ws-nav-tools"><LocaleSwitch lang={lang} path={path} suffix={suffix}/><button className="ws-menu-button" ref={dismiss} onClick={close} aria-label={en?'Close menu':'Menü schließen'}><span>{en?'Close':'Schließen'}</span><MenuGlyph close/></button></div></div>
        <div className="ws-menu-content">
          <nav className="ws-menu-index" aria-label={en?'Service areas':'Leistungsbereiche'}>
            <h2>{en?'Explore our services':'Unsere Leistungen'}</h2>
            {entries.map((item,i)=><a key={item.href} href={url(item.href)} data-active={active===i} onFocus={()=>setActive(i)} onPointerEnter={e=>{if(e.pointerType!=='touch')setActive(i);}}>
              <span><small>{item[lang][1]}</small><strong>{item[lang][0]}</strong></span><b aria-hidden="true">↗</b>
            </a>)}
            <a className="ws-menu-all" href={url('/leistungen')}>{en?'All services':'Alle Leistungen ansehen'} <span aria-hidden="true">→</span></a>
          </nav>
          <a className="ws-menu-preview" href={url(current.href)} aria-label={current[lang][2]}>
            {entries.map((item,i)=><img key={item.image} data-active={active===i} src={'/fotografie/'+item.image+'.webp'} alt="" decoding="async"/>)}
            <span className="ws-preview-caption"><strong>{current[lang][2]}</strong><b aria-hidden="true">↗</b></span>
          </a>
        </div>
        <nav className="ws-menu-bottom" aria-label={en?'More destinations':'Weitere Seiten'}>{shortcuts.map(([href,de,eng])=><a key={href} href={url(href)} onClick={close}>{en?eng:de}<span aria-hidden="true">↗</span></a>)}</nav>
      </div>}
    </dialog>
  </header>;
}
