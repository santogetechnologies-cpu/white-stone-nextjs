const validEmail=v=>/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(v);
const failure=(status,message)=>Response.json({ok:false,message},{status,headers:{'Cache-Control':'no-store'}});
const attempts=new Map();
function allowed(key){
 const now=Date.now();for(const [k,v] of attempts)if(v.until<=now)attempts.delete(k);
 const entry=attempts.get(key)||{count:0,until:now+10*60*1000};
 if(entry.count>=6 || (!attempts.has(key)&&attempts.size>=5000))return false;
 entry.count++;attempts.set(key,entry);return true;
}
export async function handleInquiry(req,env,send=fetch){
 const origin=req.headers.get('origin');
 if(origin&&origin!==new URL(req.url).origin)return failure(403,'Diese Anfrage stammt nicht von dieser Website.');
 if(!req.headers.get('content-type')?.startsWith('application/json'))return failure(415,'Unbekanntes Datenformat.');
 let values;
 try{const reader=req.body?.getReader();if(!reader)throw Error();let bytes=0;const decoder=new TextDecoder();let body='';
 while(true){const {done,value}=await reader.read();if(done)break;bytes+=value.length;if(bytes>32000){await reader.cancel();return failure(413,'Die Nachricht ist zu lang.');}body+=decoder.decode(value,{stream:true});}
 values=JSON.parse(body+decoder.decode());}catch{return failure(400,'Die Anfrage konnte nicht gelesen werden.');}
 if(!values||typeof values!=='object')return failure(400,'Die Anfrage ist unvollständig.');
 const get=k=>typeof values[k]==='string'?values[k].trim():'';
 const first=get('first'),last=get('last'),email=get('email'),phone=get('phone'),msg=get('message'),zip=get('zip'),estimate=get('estimate'),topic=get('topic');
 if(get('website')||!['haushalt','kontakt'].includes(get('kind'))||!first||!last||[first,last].some(v=>v.length>80||/[\r\n]/.test(v))||!validEmail(email)||email.length>254||phone.length>45||msg.length<3||msg.length>5000||zip&&!/^\d{5}$/.test(zip)||estimate.length>1200||topic.length>120)return failure(422,'Bitte prüfen Sie Ihren Namen, Ihre E-Mail-Adresse und die Nachricht.');
 if(!env.RESEND_API_KEY||!validEmail(env.CONTACT_TO||'')||!validEmail(env.CONTACT_FROM||''))return failure(503,'Der E-Mail-Versand ist noch nicht eingerichtet. Ihre Nachricht wurde nicht gesendet.');
 if(!allowed(req.headers.get('x-real-ip')||req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'local'))return failure(429,'Zu viele Anfragen. Bitte versuchen Sie es in zehn Minuten erneut.');
 const subject=get('kind')==='haushalt'?'Haushaltsanfrage':'Kontaktanfrage';
 const lines=[subject,topic,'','Vorname: '+first,'Nachname: '+last,'E-Mail: '+email,'Telefon: '+(phone||'–'),...(zip?['Postleitzahl: '+zip]:[]),'',msg,...(estimate?['','Preisrechner:',estimate]:[])];
 const headers={'Content-Type':'application/json',Authorization:'Bearer '+env.RESEND_API_KEY};
 const id=req.headers.get('idempotency-key');if(id&&/^[a-f\d-]{36}$/i.test(id))headers['Idempotency-Key']=id;
 try{const sent=await send('https://api.resend.com/emails',{method:'POST',headers,body:JSON.stringify({from:env.CONTACT_FROM,to:[env.CONTACT_TO],reply_to:email,subject:'White Stone | '+subject,text:lines.join('\n')}),signal:AbortSignal.timeout(12000)});
 if(sent.ok&&(await sent.json()).id)return Response.json({ok:true},{headers:{'Cache-Control':'no-store'}});
 }catch{}
 return failure(502,'Der Versand konnte nicht bestätigt werden. Bitte versuchen Sie es erneut. Ihre Eingaben bleiben erhalten.');
}
