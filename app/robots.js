import {siteOrigin} from './lib/search';
export default function robots(){return {rules:{userAgent:'*',allow:'/',disallow:'/api/'},sitemap:siteOrigin+'/sitemap.xml'};}
