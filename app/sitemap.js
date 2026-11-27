import {absolute, routeRecords, siteOrigin} from './lib/search';
import {householdServicesData} from './components/HouseholdServicesSection';
import {shelfServicesData} from './components/ShelfServicesSection';
import {photos} from './lib/photos';

export default function sitemap() {
  const pages = routeRecords('de');
  const guidePhotos = pages.filter(page => page.article).map(page => page.photo);
  return pages.flatMap(({key, photo, article}) => {
    const languages = {de: absolute(key, 'de'), en: absolute(key, 'en'), 'x-default': absolute(key, 'de')};
    let photoKeys = [photo];
    if (key === '/ratgeber') photoKeys.push(...guidePhotos);
    if (key === '/') photoKeys = ['reinigung_card', 'regalservice_card', 'haushalt_kueche', 'fassade_hubsteiger', 'fassade_balkon'];
    if (article?.verbatim.filter(block => block.t === 'h2').length >= 2 && article.pool.length) {
      photoKeys.push(article.pool[0]);
    }
    const paths = photoKeys.map(name => photos[name].src);
    if (key === '/regalservice') paths.push(...shelfServicesData.de.map(service => service.image));
    if (key === '/haushalt') paths.push(...householdServicesData.de.map(service => service.image));
    // Legal pages have a social preview but no editorial photograph.
    const images = ['/impressum', '/datenschutz', '/agb'].includes(key) ? undefined :
      [...new Set(paths.map(path => new URL(path, siteOrigin).href))];
    return ['de', 'en'].map(lang => ({url: languages[lang], alternates: {languages}, images}));
  });
}
