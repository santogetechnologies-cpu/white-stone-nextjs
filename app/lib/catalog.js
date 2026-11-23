const detail = (title, text) => ({ title, text });
const question = (question, answer) => ({ question, answer });

export const cleaningServices = [
  {
    slug: 'glas-und-fensterreinigung',
    title: 'Glas- und Fensterreinigung',
    shortTitle: 'Glasreinigung',
    summary: 'Klare Schaufenster, helle Büros und freie Sicht bis in den Wintergarten.',
    intro: 'Fingerabdrücke an der Eingangstür brauchen eine andere Pflege als Pollen auf einem Glasdach. Wir stimmen Flächen, Rahmen und Zugang mit Ihnen ab und reinigen Innen- und Außenseiten im vereinbarten Rhythmus.',
    photoKey: 'glas',
    scope: [
      detail('Fenster, Rahmen und Falze', 'Wir reinigen die vereinbarten Scheibenseiten. Fensterrahmen, Fensterbänke und innenliegende Falze lassen sich in denselben Termin aufnehmen.'),
      detail('Schaufenster und Glastrennwände', 'An Eingängen, Besprechungsräumen und Verkaufsflächen entfernen wir Griffspuren und Schlieren. Die Zeiten richten sich nach Ihrem Publikumsverkehr.'),
      detail('Wintergärten und Glasfassaden', 'Für geneigte oder erhöhte Flächen klären wir vorab, wie die Scheiben erreichbar sind und welches Verfahren zu Verglasung und Beschichtung passt.'),
    ],
    plan: ['Anzahl der Fenster und gewünschte Seiten nennen.', 'Zugang, Verschattung und empfindliche Beschichtungen klären.', 'Einzeltermin oder Pflegeintervall vereinbaren.'],
    faq: [
      question('Gehören Rahmen und Falze dazu?', 'Sie können beides anfragen. Im Angebot sehen Sie, welche Teile der Fenster der Termin umfasst.'),
      question('Was hilft bei der Einschätzung hoher Glasflächen?', 'Fotos der Fassade von außen und innen, die ungefähre Höhe sowie Angaben zu Zufahrten und öffnenden Fenstern helfen bei der Planung.'),
    ],
  },
  {
    slug: 'buero-und-gebaeudereinigung',
    title: 'Büro- und Gebäudereinigung',
    shortTitle: 'Büroreinigung',
    summary: 'Ein passender Pflegeplan für Arbeitsplätze, Konferenzräume und gemeinsam genutzte Flächen.',
    intro: 'Im Eingangsbereich landen an Regentagen Schuhspuren, in der Teeküche sammeln sich nach der Mittagspause Tassen und Krümel. Wir planen die Unterhaltsreinigung nach der Nutzung jedes Raums und den Zeiten Ihres Betriebs.',
    photoKey: 'buero',
    scope: [
      detail('Arbeitsplätze und Besprechungsräume', 'Freigegebene Tischflächen, Oberflächen, Böden und Papierkörbe erhalten feste Intervalle. Gemeinsam legen wir fest, wie wir mit Unterlagen und Technik umgehen.'),
      detail('Teeküchen und Sanitärräume', 'Becken, Armaturen, Arbeitsflächen und Kontaktstellen werden nach dem vereinbarten Plan gepflegt. Verbrauchsmaterial können wir nach Absprache kontrollieren.'),
      detail('Eingänge, Treppen und Bodenbeläge', 'In stark frequentierten Bereichen passen wir die Pflege an die tatsächliche Belastung an. Für Teppich, Polster und gründliche Bodenpflege sind eigene Termine möglich.'),
    ],
    plan: ['Räume, Beläge und Nutzungszeiten erfassen.', 'Aufgaben und Intervalle pro Bereich vereinbaren.', 'Zugang, Rückmeldung und Qualitätskontrolle festlegen.'],
    faq: [
      question('Ist Reinigung außerhalb der Bürozeiten möglich?', 'Nennen Sie Ihr gewünschtes Zeitfenster. Wir stimmen mit Ihnen ab, wann das Team Zugang erhält und welche Bereiche zuerst frei sind.'),
      question('Kann sich der Plan später ändern?', 'Ja. Bei neuer Belegung, Umbauten oder Veranstaltungen besprechen wir den geänderten Bedarf und passen die vereinbarten Aufgaben an.'),
    ],
  },
  {
    slug: 'hotelreinigung',
    title: 'Hotel- und Zimmerreinigung',
    shortTitle: 'Hotelreinigung',
    summary: 'Zimmerwechsel, Wäsche und gepflegte Gästebereiche im Takt Ihres Hauses.',
    intro: 'Zwischen Abreise und Ankunft bleibt oft ein kleines Zeitfenster. Unser Team stimmt Zimmerfolge, Wäschewechsel und Freigaben mit der Rezeption ab. Auch während des Aufenthalts richten wir uns nach den Abläufen und der Privatsphäre Ihrer Gäste.',
    photoKey: 'hotel',
    scope: [
      detail('Abreise- und Bleibezimmer', 'Wir beziehen Betten, pflegen Bad und Zimmer und füllen bereitgestellte Gästeartikel nach Ihrem Hausstandard auf. Die Aufgaben unterscheiden sich nach Zimmerstatus.'),
      detail('Lobby, Flure und Veranstaltungsräume', 'Vor dem Frühstück, zwischen Tagungen oder nach einer Veranstaltung betreuen wir die vereinbarten öffentlichen Räume passend zur Belegung.'),
      detail('Wäsche und Zimmerfreigabe', 'Ablageorte, Wäschewege und Rückmeldungen besprechen wir mit Ihrer Hausdame oder der Rezeption, damit die Übergabe jedes Zimmers nachvollziehbar bleibt.'),
    ],
    plan: ['Zimmerzahl, Zimmerarten und Belegung nennen.', 'Hausstandards und Wäschelogistik abstimmen.', 'Arbeitsteilung und Freigabe mit der Rezeption vereinbaren.'],
    faq: [
      question('Kann das Team unsere eigene Hauswirtschaft ergänzen?', 'Ja. Vereinbaren Sie einzelne Bereiche, Abreisetage oder einen größeren Teil der Zimmerreinigung.'),
      question('Wie planen wir wechselnde Auslastung?', 'Eine Vorschau der An- und Abreisen erleichtert die Planung. Kurzfristige Änderungen besprechen Sie über den vereinbarten Kontakt.'),
    ],
  },
  {
    slug: 'bau-und-sonderreinigung',
    title: 'Bau- und Sonderreinigung',
    shortTitle: 'Baureinigung',
    summary: 'Vom ersten freien Bauabschnitt bis zur bezugsfertigen Übergabe.',
    intro: 'Feiner Baustellenstaub setzt sich auf Steckdosen, Türzargen und frisch montierten Oberflächen ab. Wir richten die Reinigung am Baufortschritt aus und achten auf die Pflegehinweise für neue Beläge und Bauteile.',
    photoKey: 'bau',
    scope: [
      detail('Baugrobreinigung', 'Sobald ein Abschnitt frei ist, entfernen wir vereinbarte lose Rückstände und Verpackungen. Laufwege und Flächen stehen den nächsten Gewerken wieder zur Verfügung.'),
      detail('Baufein- und Endreinigung', 'Vor der Übergabe reinigen wir Fenster, Türen, Böden, Einbauten und Sanitärobjekte. Bei Kleber-, Farb- oder Mörtelresten prüfen wir zuerst den Untergrund.'),
      detail('Sonderreinigung', 'Für stark beanspruchte Teppiche, Naturstein, Produktions- oder Lagerflächen stimmen wir Verfahren und Zugang gesondert mit Ihnen ab.'),
    ],
    plan: ['Bauphase, Materialien und Übergabetermin benennen.', 'Fertige Abschnitte und laufende Arbeiten abgrenzen.', 'Ergebnis vor der Abnahme gemeinsam durchgehen.'],
    faq: [
      question('Wann sollte die Endreinigung stattfinden?', 'Ideal ist ein Termin nach den letzten staubintensiven Arbeiten. Bei etappenweiser Übergabe kann die Reinigung abschnittsweise erfolgen.'),
      question('Welche Angaben helfen bei empfindlichen Belägen?', 'Herstellerhinweise, Angaben zur Versiegelung und der Zeitpunkt der Verlegung helfen uns, das geeignete Vorgehen abzustimmen.'),
    ],
  },
  {
    slug: 'fassadenreinigung',
    title: 'Fassadenreinigung',
    shortTitle: 'Fassadenpflege',
    summary: 'Materialgerechte Pflege für verputzte, verglaste und verkleidete Außenflächen.',
    intro: 'Straßenstaub auf Metall, grüne Beläge im Schatten und Laufspuren auf Putz verlangen unterschiedliche Verfahren. Wir sehen uns Material, Zustand und Zugänglichkeit an, bevor wir eine Behandlung empfehlen.',
    photoKey: 'fassade',
    scope: [
      detail('Stein, Putz und Beton', 'Wir beurteilen Verschmutzung und Oberflächenstruktur. Eine Probefläche hilft, Wirkung und Verträglichkeit der vorgesehenen Reinigung einzuschätzen.'),
      detail('Metall und Glas', 'Beschichtete Bleche, Glaselemente und angrenzende Dichtungen werden bei der Auswahl von Werkzeug und Reinigungsmittel gemeinsam betrachtet.'),
      detail('Beläge, Graffiti und Höhenzugang', 'Für hartnäckige Spuren und schwer zugängliche Flächen planen wir einen eigenen Einsatz einschließlich geeigneter Zugangstechnik und Absicherung.'),
    ],
    plan: ['Gebäudeseite, Höhe und Schadbild beschreiben.', 'Material, Zugang und Probefläche besprechen.', 'Arbeitsbereich und Termin mit der Gebäudenutzung abstimmen.'],
    faq: [
      question('Muss jede Hausseite gleichzeitig gereinigt werden?', 'Einzelne Seiten können getrennt beauftragt werden. Bei zusammenhängenden Sichtflächen besprechen wir vorher den gewünschten Übergang.'),
      question('Kommt immer Hochdruck zum Einsatz?', 'Nein. Material, Fugen und Beschichtung bestimmen das Verfahren. Für empfindliche Flächen kommen schonendere Methoden infrage.'),
    ],
  },
  {
    slug: 'kita-reinigung',
    title: 'Kita- und Kindergartenreinigung',
    shortTitle: 'Kitareinigung',
    summary: 'Abgestimmte Pflege für Spielräume, Essplätze, Wickelbereiche und kleine Waschbecken.',
    intro: 'In der Kita wird auf dem Boden gebaut, am Tisch gebastelt und im Nebenraum geschlafen. Zusammen mit der Leitung ordnen wir Aufgaben den einzelnen Zonen zu und richten die Einsatzzeiten am Tagesablauf der Kinder aus.',
    photoKey: 'kita',
    scope: [
      detail('Spiel-, Ess- und Ruheräume', 'Wir pflegen Böden und vereinbarte Oberflächen. Für Spielmaterialien klären wir Pflegehinweise und Zuständigkeiten mit dem pädagogischen Team.'),
      detail('Wasch- und Wickelbereiche', 'Sanitärflächen und häufig berührte Stellen erhalten eigene Arbeitsabläufe nach dem Hygieneplan Ihrer Einrichtung.'),
      detail('Garderoben und Eingänge', 'Sand, Blätter und feuchte Schuhe beanspruchen Eingänge stärker als Nebenräume. Wir stimmen die Pflegeintervalle auf die jeweilige Nutzung ab.'),
    ],
    plan: ['Raumnutzung und Hygieneplan durchgehen.', 'Ruhe-, Essens- und Abholzeiten berücksichtigen.', 'Aufgaben und Übergaben mit der Leitung festlegen.'],
    faq: [
      question('Lässt sich die Reinigung nach der Abholzeit einplanen?', 'Ja, nennen Sie die Schließzeiten und mögliche Zeitfenster. Gemeinsam stimmen wir Zugang und Ablauf ab.'),
      question('Wie werden besondere Wünsche zu Reinigungsmitteln berücksichtigt?', 'Teilen Sie uns Vorgaben zu Duftstoffen oder Materialien vorab mit. Wir prüfen die passenden Mittel für die betreffenden Bereiche.'),
    ],
  },
  {
    slug: 'schulreinigung',
    title: 'Schulreinigung',
    shortTitle: 'Schulreinigung',
    summary: 'Vom ersten Klassenraum bis zur Sporthalle, geplant nach Stundenplan und Ferien.',
    intro: 'Ein Klassenzimmer nach Unterrichtsschluss, eine nachmittags belegte Turnhalle und die Mittagsbetreuung haben verschiedene Zeitfenster. Wir stimmen die Unterhaltsreinigung mit Schulleitung, Hausdienst und Träger ab.',
    photoKey: 'schule',
    scope: [
      detail('Klassenräume und Verkehrsflächen', 'Tische, Böden, Flure und Treppen werden nach Belegung eingeplant. Für Fachräume und besondere Ausstattung vereinbaren wir die freigegebenen Flächen.'),
      detail('Sanitär-, Sport- und Essbereiche', 'Waschräume, Umkleiden und gemeinschaftlich genutzte Bereiche erhalten einen eigenen Pflegeplan, der auch Nachmittags- und Vereinsnutzung berücksichtigt.'),
      detail('Grundreinigung in den Ferien', 'Freie Räume bieten Zeit für intensivere Bodenpflege sowie Glas- und Detailarbeiten. Wir stimmen den Zugang mit Ferienbetreuung und Hausdienst ab.'),
    ],
    plan: ['Raumliste und Belegungszeiten vergleichen.', 'Unterhaltsaufgaben und Ferienarbeiten trennen.', 'Abnahme und Meldung besonderer Vorkommnisse vereinbaren.'],
    faq: [
      question('Wie werden Unterricht und Ganztag berücksichtigt?', 'Teilen Sie uns neben dem Stundenplan auch Zeiten der Betreuung, AGs und Vereine mit. Danach staffeln wir die Reinigung je Gebäudeteil.'),
      question('Kann eine Ferienreinigung separat angefragt werden?', 'Ja. Geben Sie Räume, Bodenbeläge und den freien Zeitraum an, damit wir den Umfang prüfen können.'),
    ],
  },
];

export const retailService = {
  slug: 'regalservice',
  title: 'Regalservice',
  shortTitle: 'Regalservice',
  summary: 'Waren auffüllen, Preise zuordnen und Aktionen pünktlich aufbauen.',
  intro: 'Wenn die Lieferung eintrifft, soll jedes Produkt am richtigen Platz landen. Wir übernehmen vereinbarte Abschnitte von der Warenannahme bis zur Kontrolle im Gang und stimmen jede Schicht mit der Marktleitung ab.',
  photoKey: 'regalservice',
  scope: [
    detail('Regalbefüllung und Warenpflege', 'Wir sortieren Ware, füllen Lücken und richten die vorderen Reihen nach Ihrem Regalplan aus. Kartonage und leere Gebinde gelangen an den vereinbarten Sammelplatz.'),
    detail('Bestände und Warenrotation', 'Wir kontrollieren die zugeteilten Bereiche nach Ihren Vorgaben, beachten die vereinbarte Warenrotation und melden fehlende Artikel an die Marktleitung.'),
    detail('Preise und Etiketten', 'Wir prüfen, ob Etikett, Artikel und Platzierung zusammenpassen. Unklare Preise und fehlende Auszeichnungen geben wir zur Klärung weiter.'),
    detail('Aktionsflächen und Umbauten', 'Zum Wochenwechsel oder Saisonstart setzen wir Zweitplatzierungen, Aufsteller und Sortimentswechsel nach Ihren Aufbauplänen um.'),
    detail('Anlieferung und Schichtübergabe', 'Wir koordinieren vereinbarte Wege vom Lager zur Fläche. Offene Mengen, fehlende Ware und noch gesperrte Plätze halten wir für die Folgeschicht fest.'),
  ],
  plan: ['Filiale, Warengruppen und Lieferfenster abstimmen.', 'Regalpläne, Aktionsunterlagen und Zuständigkeiten klären.', 'Ausführung und offene Punkte an die Marktleitung übergeben.'],
  faq: [
    question('Ist ein Einsatz während der Öffnungszeiten möglich?', 'Ja. Wir sprechen mit Ihnen ab, welcher Gang zuerst bearbeitet wird und wie der Zugang für Ihre Kundschaft frei bleibt.'),
    question('Kann ich nur einen Aktionsaufbau beauftragen?', 'Ja. Nennen Sie Termin, Anzahl der Standorte und den geplanten Aufbau. Wir prüfen auch einzelne Aktionen und Umplatzierungen.'),
    question('Welche Unterlagen benötigt das Team?', 'Hilfreich sind aktuelle Platzierungspläne, Artikellisten, Preisunterlagen und der Name der zuständigen Person vor Ort.'),
  ],
};

export const householdService = {
  slug: 'haushalt',
  title: 'Haushaltshilfe',
  shortTitle: 'Haushalt',
  summary: 'Persönliche Unterstützung bei der Reinigung zu Hause.',
  intro: 'Vielleicht möchten Sie jede Woche Küche und Bad abgeben. Vielleicht brauchen Sie nur vor einem Einzug einmal gründlich Hilfe. Sie bestimmen, welche Räume und Aufgaben Vorrang haben.',
  photoKey: 'haushalt',
  scope: [
    detail('Wohn- und Schlafräume', 'Wir saugen oder wischen geeignete Böden, entstauben zugängliche Ablagen und reinigen die vereinbarten Oberflächen.'),
    detail('Bad und Küche', 'Waschbecken, Armaturen, Dusche, Toilette, Spüle und Arbeitsflächen lassen sich in den regelmäßigen Besuch aufnehmen.'),
    detail('Fenster und Glasflächen', 'Fenster, Spiegel und Glastüren können Sie einzeln oder ergänzend anfragen. Für die Einschätzung zählen Anzahl, Größe und Zugang.'),
    detail('Einzug, Auszug und Grundreinigung', 'Für einen einmaligen Termin vereinbaren wir die Räume und Schwerpunkte gesondert. Teilen Sie uns mit, ob die Wohnung schon leer ist.'),
  ],
  plan: ['Räume, Aufgaben und Postleitzahl angeben.', 'Einzeltermin oder gewünschten Rhythmus auswählen.', 'Persönliches Angebot mit Umfang und Preis erhalten.'],
  faq: [
    question('Kann ich nur einzelne Räume reinigen lassen?', 'Ja. Schreiben Sie zum Beispiel „nur Bad und Küche“ und nennen Sie Extras einzeln. So können wir den Aufwand für Ihren Wunschumfang einschätzen.'),
    question('Muss ich beim ersten Termin zu Hause sein?', 'Besprechen Sie den Zugang und Besonderheiten Ihrer Wohnung vorab mit uns. Besonders beim ersten Besuch ist eine kurze Einweisung hilfreich.'),
    question('Wer stellt Reinigungsmittel und Geräte?', 'Teilen Sie uns Ihre Wünsche und die verfügbaren Geräte mit. Im Angebot klären wir, was bereitgestellt wird und ob Materialkosten anfallen.'),
  ],
};

export const householdPricing = {
  intro: 'Sie erhalten einen Preis für die Aufgaben, die Sie tatsächlich beauftragen möchten. Mit Fläche, Anzahl der Bäder und Ihrem gewünschten Rhythmus können wir den Aufwand für Ihren Haushalt einschätzen.',
  factors: [
    detail('Zeitbedarf pro Besuch', 'Zwei Wohnungen mit gleicher Fläche können unterschiedlich viel Zeit brauchen. Ein zweites Bad, viele freie Glasflächen oder empfindliche Böden verändern den Aufwand.'),
    detail('Ersttermin und Folgetermine', 'Bei einer Grundreinigung fallen oft andere Arbeiten an als bei der laufenden Pflege. Für regelmäßige Hilfe lassen sich beide Umfänge getrennt anfragen.'),
    detail('Anfahrt und Material', 'Ihre Postleitzahl und die benötigten Geräte fließen in das Angebot ein. Sie erfahren vor der Beauftragung, ob hierfür zusätzliche Kosten entstehen und welcher Gesamtpreis inklusive Umsatzsteuer gilt.'),
  ],
  example: 'Für zwei Besuche im Monat zu je drei Stunden rechnen Sie mit sechs Stunden. Multiplizieren Sie diese mit dem vereinbarten Stundenpreis und ergänzen Sie die im Angebot genannten Zusatzkosten. Bei einem Einzeltermin fällt die Rechnung nur einmal an.',
  closing: 'Nennen Sie uns Ihre wichtigsten Aufgaben und einen Wunschzeitraum. Wir senden Ihnen ein persönliches Angebot, das Sie vor der Beauftragung in Ruhe prüfen können.',
};

export const aboutContent = {
  title: 'White Stone in München',
  intro: 'Morgens wird im Markt die erste Lieferung eingeräumt, im Hotel werden Zimmer frei und im Büro beginnt die Besprechung. Wir planen unsere Arbeit von diesen Momenten aus. White Stone verbindet Gebäudereinigung, Regalservice und Hilfe im Haushalt unter einem Dach.',
  principles: [
    detail('Absprachen vor Ort', 'Bei der Planung fragen wir nach Zugängen, Materialien und Zeitfenstern. Daraus entsteht ein Auftrag, bei dem beide Seiten wissen, was wann erledigt wird.'),
    detail('Pflege nach Bedarf', 'Wir unterscheiden stark genutzte Flächen von ruhigen Bereichen. Die Wahl der Mittel, ihre Dosierung und der Wassereinsatz richten sich nach Material und Aufgabe.'),
    detail('Eine klare Übergabe', 'Ob Filialleitung, Hotelempfang oder privater Haushalt – für Rückfragen und Änderungen vereinbaren wir einen direkten Kontakt.'),
  ],
  team: {
    name: 'Saqib Ali',
    role: 'Geschäftsführer',
    text: 'Saqib Ali leitet die White Stone GmbH in München. Wenn Sie eine laufende Betreuung planen oder mehrere Dienstleistungen verbinden möchten, erreichen Sie die Geschäftsführung über unser Kontaktformular.',
  },
};

// Beiträge stammen wortgetreu aus verbatim.json (siehe content.js).
export const adviceArticles = [];
