import {getCatalog} from '../lib/content';
import {localizedPath} from '../lib/paths';
import {Pic} from './Design';

export default function RelatedGuides({page,lang}) {
  const {adviceArticles}=getCatalog(lang);
  const area=page.article?.relatedHref || page.key;
  const matches=adviceArticles.filter(article=>article.slug!==page.article?.slug&&
    (article.relatedHref===area || area==='/reinigung'&&article.relatedHref.startsWith('/reinigung/')));
  if(!matches.length)return null;
  const link=href=>localizedPath(href,lang);
  return <section className="ws-related"><div className="ws-wrap">
    <div className="ws-related-head"><h2>{lang==='en'?'Related guides':'Passende Ratgeber'}</h2><a href={link('/ratgeber')}>{lang==='en'?'All guides':'Alle Beiträge'} →</a></div>
    <div className="ws-related-grid">{matches.slice(0,3).map(article=><a key={article.slug} href={link('/ratgeber/'+article.slug)}>
      <Pic name={article.photoKey} lang={lang}/><span>{article.title}</span><b aria-hidden="true">↗</b>
    </a>)}</div>
  </div></section>;
}
