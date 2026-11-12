import {test} from 'node:test';
import assert from 'node:assert/strict';
import {calculate} from '../app/lib/estimate.js';
import {handleInquiry} from '../app/lib/inquiry.js';
import {cleaningServices,adviceArticles} from '../app/lib/catalog.js';
import {photos} from '../app/lib/photos.js';
import {existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';

test('Anfangswert, Zusatzzeiten, Rundung und Vierwochenrhythmus',()=>{
 assert.deepEqual(calculate(3,30,0,[]),{minutes:180,visit:90,period:90});
 assert.deepEqual(calculate(3,32.55,2,['waesche','backofen']),{minutes:255,visit:138.34,period:276.68});
 assert.equal(calculate(1.5,20,3,['fenster']).period,200);
});
const sample={first:'Erika',last:'Muster',email:'test@example.invalid',phone:'',message:'Lokale Funktionsprüfung.',kind:'kontakt'};
const request=(fields={},opts={})=>new Request('http://localhost/api/anfrage',{method:'POST',headers:{'Content-Type':'application/json',...opts},body:JSON.stringify({...sample,...fields})});
const env={CONTACT_TO:'inbox@example.invalid',CONTACT_FROM:'from@example.invalid',RESEND_API_KEY:'mock'};
test('Empfänger ist serverseitig festgelegt; Bestätigung nur bei Anbieterannahme',async()=>{
 let calls=0;
 for(const kind of ['haushalt','kontakt']){
 const r=await handleInquiry(request({kind,to:'other@example.invalid',estimate:kind==='haushalt'?'90 €':''}),env,async(url,options)=>{
 ++calls; const mail=JSON.parse(options.body);assert.deepEqual(mail.to,[env.CONTACT_TO]);assert.equal(mail.reply_to,sample.email);assert.ok(mail.text.includes(sample.message));assert.ok(mail.subject.includes(kind==='haushalt'?'Haushaltsanfrage':'Kontaktanfrage'));if(kind==='haushalt')assert.ok(mail.text.includes('90 €'));return Response.json({id:'mock-id'});
 });assert.equal(r.status,200);}
 assert.equal(calls,2);
 for(const send of [()=>Response.json({error:true},{status:403}),()=>Response.json({}),()=>Promise.reject(Error('offline'))])assert.equal((await handleInquiry(request(),env,send)).status,502);
});
test('Fehlende Konfiguration oder ungültige Eingaben versenden keine Mail',async()=>{
 let calls=0;const blocked=()=>{calls++;throw Error();};
 assert.equal((await handleInquiry(request(),{},blocked)).status,503);
 assert.equal((await handleInquiry(request({email:'ungültig'}),env,blocked)).status,422);
 assert.equal((await handleInquiry(request({}, {origin:'https://example.invalid'}),env,blocked)).status,403);
 assert.equal((await handleInquiry(request({message:'a'.repeat(35000)}),env,blocked)).status,413);assert.equal(calls,0);
});
test('Alle Beiträge und Bildverweise sind lokal auflösbar',()=>{
 const services=new Set(cleaningServices.map(s=>'/reinigung/'+s.slug));const paths=new Set(['/reinigung','/regalservice','/haushalt','/kontakt',...services]);
 assert.equal(services.size,7);assert.equal(new Set(adviceArticles.map(a=>a.slug)).size,32);
 for(const a of adviceArticles){assert.ok(paths.has(a.relatedHref),a.slug);assert.ok(photos[a.photoKey],a.slug);}
 for(const p of Object.values(photos))assert.ok(existsSync(fileURLToPath(new URL('../public'+p.src,import.meta.url))),p.src);
});
