import * as german from './catalog';
import * as english from './services.en';
import {adviceArticles as englishGuides} from './guides.en';
import {additionalGuidesDE,additionalGuidesEN,legacyExtras} from './legacy-content';

const catalogs={
  de:{...german,adviceArticles:[...german.adviceArticles,...additionalGuidesDE],extra:legacyExtras.de},
  en:{...english,adviceArticles:[...englishGuides,...additionalGuidesEN],extra:legacyExtras.en}
};
export function getCatalog(lang='de'){return catalogs[lang];}

