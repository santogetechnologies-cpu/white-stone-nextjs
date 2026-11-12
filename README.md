# White Stone GmbH · Next.js

Deutsch- und englischsprachige Website für Reinigung, Regalservice und Haushalt. Die Startseite behält das vorhandene Fenster mit Wischanimation. Die 112 Sprachseiten umfassen sieben Reinigungsgebiete und 38 Ratgeber pro Sprache, Team, Haushaltsrechner und Kontakt. Kein CMS erforderlich.

## Lokal starten

Node.js 22 verwenden. Im Projektverzeichnis `npm ci` und `npm run dev` ausführen. Vorschau: http://127.0.0.1:3000. Produktionsbetrieb mit `npm run build` und `npm start`. Ein Next.js-Server ist für den E-Mail-Versand notwendig.

## Preise und Kontakte pflegen

- `app/lib/company.js`: xxx (E-Mail), yyy (Telefon) und zzz (Adresse) durch die geprüften Visitenkartendaten ersetzen. Danach auch die rechtlichen Unternehmensangaben und Datenschutzhinweise prüfen und vervollständigen.
- `.env.example` lokal nach `.env.local` kopieren. Keine Zugangsdaten in Git oder das Quellenarchiv aufnehmen.
- `HOUSEHOLD_HOURLY_RATE`: optionaler bestätigter Bruttostundensatz in Euro, Dezimaltrennzeichen Punkt. Nach Änderungen neu bauen. Ohne bestätigten Satz startet der Rechner bei einem **frei editierbaren Beispielwert** von 30 €/Std.; der Betrag ist kein White-Stone-Tarif.
- Grundzeit und geschätzte Zusatzminuten werden addiert. Die Besuchsdauer mal Stundensatz ergibt den auf Cent gerundeten Besuchspreis. Die Periodenansicht berechnet vier Wochen, keinen durchschnittlichen Kalendermonat. Zusatzaufgaben und Richtzeiten stehen in `app/lib/estimate.js`.
- Preise für Anfahrt, Material und besondere Arbeiten werden erst im individuellen Angebot festgelegt.

## Formulare aktivieren

Beide Formulare senden an `POST /api/anfrage`. Für echte Zustellung `RESEND_API_KEY`, `CONTACT_FROM` (freigeschaltete Absenderadresse bei Resend) und `CONTACT_TO` (bestätigte Firmenadresse) im Server hinterlegen und neu starten. Die sichtbaren Platzhalter sind niemals der Versandempfänger. Ein Versandversuch ohne Konfiguration führt zu einer verständlichen Fehlermeldung; die Eingaben bleiben erhalten. Nur die bestätigte Annahme durch Resend löst die Erfolgsmeldung aus. Auf Anfragen lässt sich direkt an die Adresse des Besuchers antworten.

Die Haushaltsanfrage enthält zusätzlich PLZ, Einstellungen und Ergebnis des Rechners, soweit angegeben. Beide Formulare verwenden Größen- und Feldprüfung, ein verdecktes Spamfeld und eine einfache Drosselung pro Serverprozess. Bei mehreren Serverinstanzen eine gemeinsame Drosselung vor dem Endpoint einsetzen; der vorgeschaltete Proxy muss Client-IP-Header selbst setzen.

## Quellen und Aufbau

- `app/components/Hero.js`, `WindowScene.js`, `app/lib/window-cleaning.js` und `water-surface.js`: Fenster und Animation der Startseite.
- `app/components/HomeSections.js`, `DirectoryPages.js`, `Design.js`: Inhalte, Navigation zu den Bereichen und gemeinsame Layouts.
- `app/(de)/` und `app/en/`: deutsche und englische Seitenrouten. `app/lib/search.js` erzeugt Canonicals, Sprachalternativen und strukturierte Daten.
- `app/editorial.css`, `app/pages.css`, `Tide.js`, `CurrentLines.js`: responsive Gestaltung, Farbverläufe und animierte Vektorgrafiken. Die Bewegung berücksichtigt reduzierte Animationen.
- `app/lib/catalog.js`: Leistungen, Preisfaktoren, Ansprechpartner, Fragen und Ratgeber.
- `app/lib/photos.js` und `public/fotografie/`: zwölf optimierte Motive der bisherigen Firmenwebsite mit Bildbeschreibungen und Originaladressen. Nicht jedes Motiv ist eine verifizierte Mitarbeiteraufnahme.
- `docs/content-sources.md`: Quellen der redaktionellen Inhalte.
- `tests/functional.mjs`: `node --test tests/functional.mjs` prüft Kalkulation, Mailverarbeitung mit simuliertem Versand, Fehlerfälle sowie Bild- und Beitragsverweise, ohne E-Mails zu senden.


## Sprache und Suchmaschinen

Deutsch ist die Standardsprache. Englisch hat eigene URLs unter /en. Der DE/EN-Schalter führt zur jeweiligen Seite und erhält Suchparameter und Sprungmarken. Das Menü und die sichtbaren Hauptlinks führen zu Reinigung, Regalservice und Haushalt.

Für Canonicals, Sprachalternativen, Sitemap, robots.txt und Vorschaudaten wird SITE_URL verwendet. Standard ist https://whitestonegmbh.de. Bei einem Domainwechsel SITE_URL vor dem Produktionsbuild setzen. Vollständige Kontakt- und Registerdaten sowie Mail-Zugangsdaten sind vor Inbetriebnahme noch einzutragen. Die Platzhalter werden nicht als echte Kontaktdaten in strukturierte Daten übernommen.

legacy-redirects.json enthält die dauerhaften Umleitungen der bisherigen Seiten und Artikel. docs/legacy-coverage.md dokumentiert die Zuordnung und die Grenzen beim Abruf älterer Artikel. Verwandte Inhalte wurden teilweise zusammengeführt.

node tests/production.mjs prüft nach dem Build alle 112 Sprachseiten, interne Links, Metadaten, Sitemap und 46 Weiterleitungen über einen lokalen Testserver.
