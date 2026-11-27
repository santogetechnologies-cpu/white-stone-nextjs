import localFont from 'next/font/local';
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
import ScrollRevealManager from './ScrollRevealManager';

const inter = localFont({
  src: '../fonts/inter-latin-wght-normal.woff2',
  weight: '400 900',
  variable: '--font-inter',
  display: 'swap'
});

const playfair = localFont({
  src: '../fonts/playfair-display-latin-wght-italic.woff2',
  style: 'italic',
  weight: '600 700',
  variable: '--font-playfair',
  display: 'swap'
});

export default function DocumentShell({lang,children}) {
  return (
    <html lang={lang} className={`${inter.variable} ${playfair.variable}`}>
      <head />
      <body><IconDefs/><ScrollRevealManager/>{children}<Footer lang={lang}/></body>
    </html>
  );
}
