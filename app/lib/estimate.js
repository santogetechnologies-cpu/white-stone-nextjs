export const extras = [
  ['waesche','Wäsche und Betten',30],
  ['backofen','Backofen innen',45],
  ['fenster','Fenster und Rahmen',60],
];
export const rhythms = [['Einmalig',1],['Alle vier Wochen',1],['Alle zwei Wochen',2],['Wöchentlich',4]];
export const money = (n,lang='de') => new Intl.NumberFormat(lang==='en'?'en-GB':'de-DE',{style:'currency',currency:'EUR'}).format(n);
export function calculate(hours, rate, rhythm, selected) {
  const minutes=Math.round(hours*60)+extras.reduce((n,[key,,m])=>n+(selected.includes(key)?m:0),0);
  const visit=Math.round(minutes*rate/60*100)/100;
  return {minutes,visit,period:Math.round(visit*rhythms[rhythm][1]*100)/100};
}
