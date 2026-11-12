import {absolute,routeRecords} from './lib/search';
export default function sitemap(){
 return routeRecords('de').flatMap(({key})=>['de','en'].map(lang=>({url:absolute(key,lang),alternates:{languages:{de:absolute(key,'de'),en:absolute(key,'en'),'x-default':absolute(key,'de')}}})));
}
