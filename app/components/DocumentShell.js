import '../globals.css';
import '../motion.css';
import '../mobile.css';
import '../editorial.css';
import '../pages.css';
import '../navigation.css';
import '../refinements.css';
import IconDefs from './IconDefs';
import {Footer} from './Design';
export default function DocumentShell({lang,children}) {
  return <html lang={lang}><body><IconDefs/>{children}<Footer lang={lang}/></body></html>;
}
