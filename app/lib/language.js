import english from './ui.en.json';
import {localizedPath} from './paths';
import {photoAlt} from './photo-alt.en';
import {photos} from './photos';

export function language(lang) {
  const t = value => {
    if(lang !== 'en' || typeof value !== 'string') return value;
    return value.replace(/\S(?:[\s\S]*\S)?/, key => english[key] ?? key);
  };
  return {t, url:href=>localizedPath(href,lang), alt:key=>lang==='en'?photoAlt[key]:photos[key]?.alt};
}
