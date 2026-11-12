// Nach npm run build: node tests/production.mjs (nur lokale HTTP-Verbindungen).
import {spawn} from 'node:child_process';
import {setTimeout as wait} from 'node:timers/promises';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {localizedPath} from '../app/lib/paths.js';
import {cleaningServices,adviceArticles} from '../app/lib/catalog.js';
import {additionalGuidesDE} from '../app/lib/legacy-content.js';
const origin='http://127.0.0.1:3187';
const server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port','3187'],{windowsHide:true,env:{...process.env,CONTACT_TO:'',CONTACT_FROM:'',RESEND_API_KEY:''},stdio:['ignore','pipe','pipe']});
try {
 await Promise.race([new Promise((resolve,reject)=>{
   server.stdout.on('data',m=>{if(m.toString().includes('Ready'))resolve();});
   server.once('exit',c=>reject(Error('Serverstart fehlgeschlagen: '+c)));server.once('error',reject);
 }),wait(40000,null,{ref:false}).then(()=>{throw Error('Zeitlimit beim Start');})]);
 const domain=new URL(process.env.SITE_URL||'https://whitestonegmbh.de').origin;
 const sourcePaths=['/','/leistungen','/reinigung','/regalservice','/haushalt','/ueber-uns','/team','/ratgeber','/kontakt','/impressum','/datenschutz',...cleaningServices.map(s=>'/reinigung/'+s.slug),...[...adviceArticles,...additionalGuidesDE].map(s=>'/ratgeber/'+s.slug)];
 const paths=sourcePaths.flatMap(key=>['de','en'].map(lang=>localizedPath(key,lang)));
 const siteMap=await (await fetch(origin+'/sitemap.xml')).text();
 const robots=await (await fetch(origin+'/robots.txt')).text();
 assert.ok(robots.includes(domain+'/sitemap.xml'));assert.equal((siteMap.match(/<loc>/g)||[]).length,paths.length);
 const known=new Set(paths);
 for(let i=0;i<paths.length;i+=5)await Promise.all(paths.slice(i,i+5).map(async p=>{
   const response=await fetch(origin+p,{headers:{'User-Agent':'Googlebot'}});
   assert.equal(response.status,200,p);const html=await response.text(),lang=p.startsWith('/en')?'en':'de';
   assert.ok(html.includes('<html lang="'+lang+'">'),p);
   assert.equal((html.match(/<h1(?: |>)/g)||[]).length,1,p);
   assert.ok(html.includes('<link rel="canonical" href="'+domain+p+'"'),p);
   assert.ok(html.includes('name="description"')&&html.includes('application/ld+json'),p);
   assert.ok(html.includes('hrefLang="en"')&&html.includes('hrefLang="de"'),p);
   assert.ok(siteMap.includes('<loc>'+domain+p+'</loc>'),p);
   const linked=[...html.matchAll(/<a\b[^>]*?href="([^"]+)"/g)].map(m=>m[1]).filter(h=>h.startsWith('/')).map(h=>h.split(/[?#]/)[0]);
   assert.ok(linked.every(h=>known.has(h)),p+' broken link '+linked.filter(h=>!known.has(h)));
   if(p==='/ratgeber'||p==='/en/guides')assert.ok([...adviceArticles,...additionalGuidesDE].every(a=>linked.includes(localizedPath('/ratgeber/'+a.slug,lang))),p);
 }));
 const redirects=JSON.parse(await readFile(new URL('../legacy-redirects.json',import.meta.url),'utf8'));
 for(const [old,current] of Object.entries(redirects)){
   const response=await fetch(origin+old,{redirect:'manual'});
   assert.equal(response.status,308,old);assert.equal(new URL(response.headers.get('location'),origin).pathname,current,old);
 }
 assert.equal((await fetch(origin+'/dies-gibt-es-nicht')).status,404);
 const contact=await fetch(origin+'/kontakt?bereich=Regalservice');assert.equal(contact.status,200);assert.ok((await contact.text()).includes('Vorname'));
 const api=await fetch(origin+'/api/anfrage',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({kind:'haushalt',first:'Lokal',last:'Test',email:'test@example.invalid',message:'Lokale Prüfung.'})});
 assert.equal(api.status,503);console.log(paths.length+' Sprachseiten, Metadaten, strukturierte Daten, Sitemap, interne Links und '+Object.keys(redirects).length+' Weiterleitungen geprüft.');
}finally{server.kill();}

