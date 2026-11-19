import '../globals.css';
import '../motion.css';
import '../reveal.css';
import '../mobile.css';
import '../editorial.css';
import '../pages.css';
import '../navigation.css';
import '../refinements.css';
import IconDefs from './IconDefs';
import {Footer} from './Design';
import PageTransitionLoader from './PageTransitionLoader';
import ScrollRevealManager from './ScrollRevealManager';
export default function DocumentShell({lang,children}) {
  return <html lang={lang}><body><IconDefs/><PageTransitionLoader/><ScrollRevealManager/>{children}<Footer lang={lang}/></body></html>;
}
