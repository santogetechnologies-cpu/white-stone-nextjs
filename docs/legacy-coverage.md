# Migration der bisherigen Firmenwebsite

Die [Seitenliste](https://whitestonegmbh.de/wp-json/wp/v2/pages?per_page=100&_fields=slug) und [Beitragsliste](https://whitestonegmbh.de/wp-json/wp/v2/posts?per_page=100&_fields=slug) der öffentlichen WordPress-Installation ergaben am 10. November 2026 15 Seiten und 32 Beiträge. Das [Magazinarchiv](https://whitestonegmbh.de/neueste-nachrichten/) führt ebenfalls 32 Beiträge. Für die Zuordnung wurden die damaligen Slugs, erreichbare Artikelseiten, Archivbeschreibungen und die jeweiligen Leistungsseiten herangezogen. Bei der Nachprüfung am 11. November lieferte die WordPress-API Zeitüberschreitungen. Nicht jeder ältere Artikel war im Suchcache vollständig abrufbar.

Die alte Startseite führt das CMS unter dem Slug `home-5`. Ihre Besucheradresse `/` bleibt erhalten. Auch `/impressum` bleibt bestehen. Für den Startseitenalias und die übrigen umgezogenen Pfade enthält `legacy-redirects.json` 46 Zuordnungen. Jede der 32 bisherigen Artikeladressen verweist auf einen passenden Fachbeitrag oder die ausführliche Leistungsseite. Inhaltlich verwandte Beiträge können dasselbe Ziel verwenden. Sucharchive, Autorenlisten, Medienseiten, doppelte Menüeinträge und veraltete Vorschauhost-Adressen gehören nicht zur Zählung.

Die neue Gliederung bündelt die bestehenden Reinigungsleistungen unter Reinigung, behandelt Regalservice als eigenen Hauptbereich und ergänzt den Haushaltsbereich mit eigenem Rechner. Sechs zusätzliche Themen ergänzen die bisherigen Ratgeber: Pflegezonen im Büro, Merchandising, Nachweis der Desinfektion, Schulhygiene, Qualitätskontrolle im Hotel und Warenrotation. Inhalte sind in deutscher und englischer Sprache eigenständig formuliert. Für Bereiche mit Schadensfällen, Hygieneanforderungen oder Arbeiten in der Höhe beschreibt die Website die konkrete Abstimmung vor dem Einsatz.

Die überholten Kontaktdaten, ausgeschlossenen Teammitglieder und nicht gewünschten Kunden werden nicht übernommen. Zahlen zu Erfolg, Gesundheit oder Bewertungen einzelner Kundenprojekte werden nicht als aktuelle Versprechen wiederholt.

| Bisherige Adresse | Neue deutsche Adresse |
| --- | --- |
| [Startseite](https://whitestonegmbh.de/) | `/` |
| [Impressum](https://whitestonegmbh.de/impressum/) | `/impressum` |
| [/unser-team](https://whitestonegmbh.de/unser-team/) | `/team` |
| [/regalservice-firma-munchen-regalbefullung](https://whitestonegmbh.de/regalservice-firma-munchen-regalbefullung/) | `/regalservice` |
| [/schule-reinigung](https://whitestonegmbh.de/schule-reinigung/) | `/reinigung/schulreinigung` |
| [/kinder-garten-reinigung](https://whitestonegmbh.de/kinder-garten-reinigung/) | `/reinigung/kita-reinigung` |
| [/fassadenreinigung](https://whitestonegmbh.de/fassadenreinigung/) | `/reinigung/fassadenreinigung` |
| [/glas-und-fensterreinigung](https://whitestonegmbh.de/glas-und-fensterreinigung/) | `/reinigung/glas-und-fensterreinigung` |
| [/bau-und-spezialreinigung](https://whitestonegmbh.de/bau-und-spezialreinigung/) | `/reinigung/bau-und-sonderreinigung` |
| [/buro-und-gebaudereinigung](https://whitestonegmbh.de/buro-und-gebaudereinigung/) | `/reinigung/buero-und-gebaeudereinigung` |
| [/hotel-und-housekeeping-service](https://whitestonegmbh.de/hotel-und-housekeeping-service/) | `/reinigung/hotelreinigung` |
| [/neueste-nachrichten](https://whitestonegmbh.de/neueste-nachrichten/) | `/ratgeber` |
| [/kontaktieren-sie-uns](https://whitestonegmbh.de/kontaktieren-sie-uns/) | `/kontakt` |
| [/unsere-leistungen](https://whitestonegmbh.de/unsere-leistungen/) | `/leistungen` |
| [/uber-uns](https://whitestonegmbh.de/uber-uns/) | `/ueber-uns` |
| [/home-5](https://whitestonegmbh.de/home-5/) | `/` |
| [/fassadenreinigung-ohne-hochdruck](https://whitestonegmbh.de/fassadenreinigung-ohne-hochdruck/) | `/ratgeber/fassadenreinigung-ohne-hochdruck` |
| [/algen-fassade-entfernen](https://whitestonegmbh.de/algen-fassade-entfernen/) | `/ratgeber/belag-an-der-fassade` |
| [/wie-oft-sollte-man-eine-fassade-reinigen-munchen](https://whitestonegmbh.de/wie-oft-sollte-man-eine-fassade-reinigen-munchen/) | `/ratgeber/fassadenpflege-planen` |
| [/fassaden-reinigen-munchen](https://whitestonegmbh.de/fassaden-reinigen-munchen/) | `/ratgeber/fassadenangebot-vergleichen` |
| [/industriereinigung-munchen-professionelle-reinigung-fur-produktion-gewerbe](https://whitestonegmbh.de/industriereinigung-munchen-professionelle-reinigung-fur-produktion-gewerbe/) | `/ratgeber/produktionsflaechen-reinigen` |
| [/treppenhausreinigung-munchen](https://whitestonegmbh.de/treppenhausreinigung-munchen/) | `/ratgeber/treppenhaus-pflegeplan` |
| [/facility-service-munchen](https://whitestonegmbh.de/facility-service-munchen/) | `/ratgeber/gebaeudedienste-abstimmen` |
| [/wartungsvertrage-in-der-gebaudereinigung-vorteile-fur-unternehmen](https://whitestonegmbh.de/wartungsvertrage-in-der-gebaudereinigung-vorteile-fur-unternehmen/) | `/ratgeber/laufende-reinigungsvereinbarung` |
| [/was-kostet-professionelle-gebaudereinigung-in-munchen](https://whitestonegmbh.de/was-kostet-professionelle-gebaudereinigung-in-munchen/) | `/ratgeber/kosten-einer-gebaeudereinigung` |
| [/reinigungsfirma-muenchen-auswahlkriterien](https://whitestonegmbh.de/reinigungsfirma-muenchen-auswahlkriterien/) | `/ratgeber/reinigungsfirma-auswaehlen` |
| [/hygienekonzepte-in-der-gebaudereinigung-von-rki-bis-praxis](https://whitestonegmbh.de/hygienekonzepte-in-der-gebaudereinigung-von-rki-bis-praxis/) | `/ratgeber/hygieneplan-im-alltag` |
| [/regalservice-firma-munchen-leistungen-ablaufe-auswahlkriterien-fur-den-einzelhandel](https://whitestonegmbh.de/regalservice-firma-munchen-leistungen-ablaufe-auswahlkriterien-fur-den-einzelhandel/) | `/ratgeber/regalservice-beauftragen` |
| [/buroreinigung-munchen-saubere-arbeitswelten-als-erfolgsfaktor](https://whitestonegmbh.de/buroreinigung-munchen-saubere-arbeitswelten-als-erfolgsfaktor/) | `/ratgeber/buerozonen-pflegen` |
| [/merchandising-munchen-wie-strukturierte-verkaufsflachen-den-abverkauf-steuern](https://whitestonegmbh.de/merchandising-munchen-wie-strukturierte-verkaufsflachen-den-abverkauf-steuern/) | `/ratgeber/merchandising-im-markt` |
| [/regalservice-firma-munchen](https://whitestonegmbh.de/regalservice-firma-munchen/) | `/ratgeber/regalplan-lesen` |
| [/schulreinigung-munchen-hygiene-fur-konzentriertes-und-gesundes-lernen](https://whitestonegmbh.de/schulreinigung-munchen-hygiene-fur-konzentriertes-und-gesundes-lernen/) | `/ratgeber/schule-ganztag-reinigen` |
| [/unterhaltsreinigung-munchen-sauberkeit-die-taglich-funktioniert](https://whitestonegmbh.de/unterhaltsreinigung-munchen-sauberkeit-die-taglich-funktioniert/) | `/ratgeber/unterhaltsreinigung-intervalle` |
| [/bauendreinigung-munchen-saubere-ubergabe-nach-bau-umbau](https://whitestonegmbh.de/bauendreinigung-munchen-saubere-ubergabe-nach-bau-umbau/) | `/ratgeber/bauabnahme-vorbereiten` |
| [/hotelreinigung-munchen-housekeeping-mit-standards-struktur-vertrauen](https://whitestonegmbh.de/hotelreinigung-munchen-housekeeping-mit-standards-struktur-vertrauen/) | `/ratgeber/zimmerwechsel-im-hotel` |
| [/gebaudereinigung-munchen-standards-leistungen-echte-qualitatsunterschiede](https://whitestonegmbh.de/gebaudereinigung-munchen-standards-leistungen-echte-qualitatsunterschiede/) | `/ratgeber/reinigungsergebnis-pruefen` |
| [/grundreinigung-munchen-wenn-unterhaltsreinigung](https://whitestonegmbh.de/grundreinigung-munchen-wenn-unterhaltsreinigung/) | `/ratgeber/grundreinigung-oder-unterhalt` |
| [/desinfektionsservice-munchen-hygiene-mit-nachweis-fur-unternehmen](https://whitestonegmbh.de/desinfektionsservice-munchen-hygiene-mit-nachweis-fur-unternehmen/) | `/ratgeber/desinfektion-dokumentieren` |
| [/reinigungsfirma-munchen-professionelle-gebaudereinigung](https://whitestonegmbh.de/reinigungsfirma-munchen-professionelle-gebaudereinigung/) | `/reinigung` |
| [/unterhaltsreinigung-munchen-sauberkeit-mit-system-fur-unternehmen](https://whitestonegmbh.de/unterhaltsreinigung-munchen-sauberkeit-mit-system-fur-unternehmen/) | `/ratgeber/laufende-reinigungsvereinbarung` |
| [/glasreinigung-fensterreinigung-munchen-klarer-durchblick-fur-ihr-unternehmen](https://whitestonegmbh.de/glasreinigung-fensterreinigung-munchen-klarer-durchblick-fur-ihr-unternehmen/) | `/ratgeber/fenstertermin-vorbereiten` |
| [/regalbefullung-munchen-umsatz-beginnt-im-regal](https://whitestonegmbh.de/regalbefullung-munchen-umsatz-beginnt-im-regal/) | `/ratgeber/warenrotation-im-regal` |
| [/schulreinigung-munchen-hygiene-fur-gesundes-lernen](https://whitestonegmbh.de/schulreinigung-munchen-hygiene-fur-gesundes-lernen/) | `/ratgeber/schulhygiene-vereinbaren` |
| [/buroreinigung-munchen-premium-buro-gebaudereinigung](https://whitestonegmbh.de/buroreinigung-munchen-premium-buro-gebaudereinigung/) | `/reinigung/buero-und-gebaeudereinigung` |
| [/bau-sonderreinigung-munchen-perfekter-projektabschluss](https://whitestonegmbh.de/bau-sonderreinigung-munchen-perfekter-projektabschluss/) | `/reinigung/bau-und-sonderreinigung` |
| [/fassadenreinigung-munchen-werterhalt-beginnt-ausen](https://whitestonegmbh.de/fassadenreinigung-munchen-werterhalt-beginnt-ausen/) | `/reinigung/fassadenreinigung` |
| [/kindergarten-reinigung-munchen-hygiene-mit-verantwortung-und-herz](https://whitestonegmbh.de/kindergarten-reinigung-munchen-hygiene-mit-verantwortung-und-herz/) | `/reinigung/kita-reinigung` |
| [/perfekte-hotelreinigung-in-munchen-housekeeping-mit-klasse](https://whitestonegmbh.de/perfekte-hotelreinigung-in-munchen-housekeeping-mit-klasse/) | `/ratgeber/qualitaet-im-housekeeping` |
