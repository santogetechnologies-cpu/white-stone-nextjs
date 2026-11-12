'use client';

import {language} from '../lib/language';
import {useState} from 'react';
import {extras,rhythms,calculate,money as formatMoney} from '../lib/estimate';
import ContactForm from './ContactForm';

export default function HouseholdPlanner({lang='de', approvedRate=null}) {
  const {t, url} = language(lang);
  const money = value => formatMoney(value,lang);
  
 const fixed=Number.isFinite(approvedRate)&&approvedRate>0;
 const [hours,setHours]=useState(3),[rate,setRate]=useState(String(fixed?approvedRate:30)),[rhythm,setRhythm]=useState(0),[selected,setSelected]=useState([]);
 const valid=rate!==''&&Number(rate)>0&&Number(rate)<=1000;
 const {minutes,visit,period}=calculate(hours,Number(rate)||0,rhythm,selected);
 const duration=(minutes/60).toLocaleString(lang==='en'?'en-GB':'de-DE',{maximumFractionDigits:2})+t(" Std.");
 const note=valid?[(fixed?t("Kalkulation"):t("Unverbindliches Rechenbeispiel"))+': '+t(rhythms[rhythm][0]),hours.toLocaleString(lang==='en'?'en-GB':'de-DE')+t(" Std. Grundzeit"),...extras.filter(([k])=>selected.includes(k)).map(([,label])=>t(label)),duration+t(" je Einsatz zu ")+money(Number(rate))+t("/Std."),money(visit)+t(" je Einsatz"),...(rhythm?[money(period)+t(" in vier Wochen")]:[])].join(' · '):'';
 return <><section className="ws-calc" id="preisrechner"><div><span className="ws-mark"><i/>{t("Haushalt · Preisrechner")}</span><h2>{t("Was kostet ")}<em>{t("mein Einsatz?")}</em></h2><p>{t("Stellen Sie einen Besuch zusammen. Die Zusatzzeiten sind Richtwerte. Den endgültigen Umfang und Preis erhalten Sie mit Ihrem Angebot.")}</p>
 <div className="ws-calc-controls"><label className="ws-slider-label">{t("Grundzeit je Besuch ")}<strong>{hours.toLocaleString(lang==='en'?'en-GB':'de-DE')}{t(" Std.")}</strong><input type="range" min="1" max="8" step=".5" value={hours} onChange={e=>setHours(Number(e.target.value))}/></label>
 <div className="ws-calc-pair"><label>{t("Rhythmus")}<select value={rhythm} onChange={e=>setRhythm(Number(e.target.value))}>{rhythms.map(([name],i)=><option value={i} key={name}>{t(name)}</option>)}</select></label>
 <label>{fixed?t("Bruttostundensatz"):t("Beispielsatz (€/Std.)")}<input type="number" min=".01" step=".01" max="1000" inputMode="decimal" value={rate} readOnly={fixed} onChange={e=>setRate(e.target.value)}/></label></div>
 <fieldset><legend>{t("Zusatzaufgaben")}</legend>{extras.map(([key,label,m])=><label key={key}><input type="checkbox" checked={selected.includes(key)} onChange={e=>setSelected(e.target.checked?[...selected,key]:selected.filter(k=>k!==key))}/><span>{t(label)}</span><small>+{m}{t(" Min.")}</small></label>)}</fieldset></div></div>
 <aside className="ws-total" aria-live="polite"><small>{fixed?t("Unverbindliche Preisschätzung"):t("Rechenbeispiel · kein Firmentarif")}</small><h3>{t("Ihr Besuch")}</h3><strong>{valid?money(visit):'–'}</strong><p>{t("für ")}{duration}{t(" je Einsatz")}</p><hr/><dl><div><dt>{t("Rhythmus")}</dt><dd>{t(rhythms[rhythm][0])}</dd></div>{rhythm>0&&<div><dt>{t("In vier Wochen")}</dt><dd>{valid?money(period):'–'}</dd></div>}</dl><p>{fixed?t("Etwaige Zusatzkosten stehen separat im Angebot."):t("Sie können den Beispielsatz selbst ändern. Er ist kein Preisangebot von White Stone.")}</p>{!valid&&<p role="alert">{t("Bitte geben Sie einen gültigen Stundensatz bis 1.000 € ein.")}</p>}<a href={url("#haushaltsanfrage")} className="ws-go on-dark">{t("Haushalt anfragen ")}<span>↓</span></a></aside></section>
 <section className="ws-inquiry" id="haushaltsanfrage"><div><span className="ws-mark"><i/>{t("Direkter Kontakt")}</span><h2>{t("Ihre ")}<em>{t("Haushaltsanfrage.")}</em></h2><p>{t("Ihre Auswahl aus dem Rechner wird mitgeschickt. Nennen Sie uns gern Ihre Prioritäten oder einen Wunschtermin.")}</p>{note&&<details><summary>{t("Meine Auswahl ansehen")}</summary><p>{note}</p></details>}</div><ContactForm lang={lang} household estimate={note}/></section></>;
}
