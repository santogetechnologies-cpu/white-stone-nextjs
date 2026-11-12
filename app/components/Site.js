import Hero from './Hero';
import HomeSections from './HomeSections';

export default function Site({lang='de'} = {}) {
  return <main><Hero lang={lang} /><HomeSections lang={lang} /></main>;
}
