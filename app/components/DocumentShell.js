import '../globals.css';
import '../motion.css';
import '../reveal.css';
import '../mobile.css';
import '../editorial.css';
import '../pages.css';
import '../navigation.css';
import '../refinements.css';
import '../hero.css';
import '../header.css';
import '../verbatim.css';
import IconDefs from './IconDefs';
import {Footer} from './Design';
import PageTransitionLoader from './PageTransitionLoader';
import ScrollRevealManager from './ScrollRevealManager';
export default function DocumentShell({lang,children}) {
  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600;1,700&family=Inter:wght@400;450;500;550;600;650;700;750;800;850;900&display=swap" rel="stylesheet" />
      </head>
      <body><IconDefs/><PageTransitionLoader/><ScrollRevealManager/>{children}<Footer lang={lang}/></body>
    </html>
  );
}
