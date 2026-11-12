'use client';
import {language} from '../lib/language';
import {useId,useRef,useState} from 'react';

export default function ContactForm({lang='de', household=false,estimate='',topic=''}) {
  const {t, url} = language(lang);
  
 const [status,set]=useState('idle'), [error,setError]=useState('');const lock=useRef(false),key=useRef(null),id=useId();
 async function submit(e){
   e.preventDefault();if(lock.current)return;const form=e.currentTarget;
   const values=Object.fromEntries(new FormData(form));const body=JSON.stringify({...values,kind:household?'haushalt':'kontakt',estimate,topic});if(body!==key.current?.body)key.current={body,id:crypto.randomUUID()};
   lock.current=true;set('sending');setError('');
   try{const res=await fetch('/api/anfrage',{method:'POST',headers:{'Content-Type':'application/json','Idempotency-Key':key.current.id},body});
     const data=await res.json();if(!res.ok||data.ok!==true)throw Error(t(data.message)||t("Der Versand ist fehlgeschlagen. Bitte versuchen Sie es erneut."));
     set('sent');form.reset();key.current=null;
   }catch(err){setError(err.message==='Failed to fetch'?t("Die Verbindung ist unterbrochen. Ihre Eingaben bleiben erhalten."):err.message);set('idle');}
   finally{lock.current=false;}
 }
 if(status==='sent')return <div className="ws-receipt" role="status"><b aria-hidden="true">✓</b><h3>{t("Vielen Dank für Ihre Anfrage.")}</h3><p>{t("Ihre Nachricht wurde erfolgreich versendet. Wir melden uns unter den angegebenen Kontaktdaten bei Ihnen.")}</p><button className="ws-text-link" onClick={()=>set('idle')}>{t("Weitere Anfrage stellen ↗")}</button></div>;
 return <form className="ws-form" onSubmit={submit} aria-label={household?t("Anfrage für den Haushalt"):t("Kontaktanfrage")}><div className="ws-fields">
  <label>{t("Vorname")}<input name="first" autoComplete="given-name" maxLength="80" required/></label>
  <label>{t("Nachname")}<input name="last" autoComplete="family-name" maxLength="80" required/></label>
  <label>{t("E-Mail-Adresse")}<input name="email" type="email" autoComplete="email" maxLength="254" required/></label>
  <label>{t("Telefonnummer ")}<small>{t("(freiwillig)")}</small><input name="phone" type="tel" autoComplete="tel" maxLength="45"/></label>
  {household&&<label className="ws-full">{t("Postleitzahl des Haushalts ")}<small>{t("(freiwillig)")}</small><input name="zip" autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}" maxLength="5" placeholder={t("z. B. 80331")}/></label>}
  <label className="ws-full">{t("Nachricht")}<textarea name="message" rows="5" minLength="3" maxLength="5000" required placeholder={household?t("Welche Aufgaben möchten Sie abgeben?"):t("Wobei können wir Sie unterstützen?")}/></label></div>
  <div className="ws-hp" aria-hidden="true"><label htmlFor={id}>{t("Internetseite")}</label><input id={id} name="website" tabIndex="-1" autoComplete="off"/></div>
  <p className="ws-form-note">{t("Wir verwenden diese Angaben, um Ihre Anfrage zu beantworten. ")}<a href={url("/datenschutz")}>{t("Datenschutzhinweise")}</a></p>
  {error&&<p role="alert" className="ws-error">{error}</p>}
  <button className="ws-go" type="submit" disabled={status==='sending'}>{status==='sending'?t("Wird gesendet …"):t("Senden")}<span aria-hidden="true">↗</span></button>
 </form>;
}
