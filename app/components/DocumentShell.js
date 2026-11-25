import { Inter, Playfair_Display } from 'next/font/google';
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

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['600', '700'],
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
