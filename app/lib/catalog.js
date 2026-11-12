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
  summary: 'Persönliche Unterstützung bei Reinigung, Wäsche und besonderen Aufgaben zu Hause.',
  intro: 'Vielleicht möchten Sie jede Woche Küche und Bad abgeben. Vielleicht brauchen Sie nur vor einem Einzug einmal gründlich Hilfe. Sie bestimmen, welche Räume und Aufgaben Vorrang haben.',
  photoKey: 'haushalt',
  scope: [
    detail('Wohn- und Schlafräume', 'Wir saugen oder wischen geeignete Böden, entstauben zugängliche Ablagen und reinigen die vereinbarten Oberflächen.'),
    detail('Bad und Küche', 'Waschbecken, Armaturen, Dusche, Toilette, Spüle und Arbeitsflächen lassen sich in den regelmäßigen Besuch aufnehmen.'),
    detail('Wäsche und Betten', 'Bettwäsche wechseln, Wäsche zusammenlegen oder bügeln können Sie zusätzlich anfragen. Nennen Sie uns die ungefähre Menge.'),
    detail('Geräte und Schrankfächer', 'Für einen Backofen, den leeren Kühlschrank oder Küchenschränke von innen planen wir nach Absprache zusätzliche Zeit ein.'),
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
    detail('Zusätzliche Aufgaben', 'Für Bügelwäsche, Innenfenster oder den Backofen vereinbaren wir Zeit und Umfang ausdrücklich. So bleibt sichtbar, was der Grundtermin enthält.'),
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

function guide(slug, title, category, summary, photoKey, relatedHref, sections, takeaway) {
  return { slug, title, category, summary, photoKey, relatedHref, sections, takeaway };
}

export const adviceArticles = [
  guide(
    'regalplan-lesen', 'Vom Regalplan zur richtigen Platzierung', 'Regalservice',
    'Ein schneller Blick auf die Verpackung reicht bei ähnlichen Sorten selten aus. Drei Angaben helfen beim Einräumen.', 'regalservice', '/regalservice',
    [
      detail('Das richtige Regalfeld finden', 'Zuerst werden Gang, Feld und Boden mit dem aktuellen Plan abgeglichen. Bei Änderungen gegenüber der Vorwoche hilft das Ausgabedatum. Ein altes Foto kann zeigen, wie das Regal früher aussah, aber inzwischen hat sich vielleicht die Breite des Sortiments geändert.'),
      detail('Artikel und Breite prüfen', 'Packungsgröße, Sorte und Artikelnummer unterscheiden auch fast identische Produkte. Die Zahl der nebeneinander sichtbaren Packungen bestimmt, wie viel Platz der nächste Artikel hat.'),
      detail('Abweichungen weitergeben', 'Passt die Ware trotz korrekter Zuordnung nicht, halten Sie Artikel, Fach und tatsächliches Platzangebot fest. Die Marktleitung kann dann eine Entscheidung für genau diese Stelle treffen.'),
    ], 'Für die Einweisung genügt oft ein gemeinsamer Gang mit dem aktuellen Plan und zwei ähnlich aussehenden Artikeln.'
  ),
  guide(
    'fenstertermin-vorbereiten', 'So bereiten Sie den Fenstertermin vor', 'Glasreinigung',
    'Ein guter Überblick über Seiten, Rahmen und Zugang macht ein Angebot für Fensterreinigung genauer.', 'glas', '/reinigung/glas-und-fensterreinigung',
    [
      detail('Seiten und Rahmen zählen', 'Notieren Sie die Zahl der Fenster und Türen. Schreiben Sie dazu, ob Innen- und Außenseiten, Rahmen, Falze oder Fensterbänke dazugehören. Eine breite Festverglasung stellt andere Anforderungen als mehrere kleine Drehfenster.'),
      detail('Zugang beschreiben', 'Melden Sie Schreibtische vor den Fenstern, einen Innenhof ohne Zufahrt und fest montierten Sonnenschutz. Übersichtsfotos helfen besonders, wenn sich Fenster nicht öffnen lassen.'),
      detail('Den Termin einrichten', 'Klären Sie, wer die Räume öffnet und wo bewegliche Dinge abgestellt werden können. Bei Schaufenstern bietet sich ein Zeitfenster außerhalb der stärksten Kundenfrequenz an.'),
    ], 'Ein Foto je Gebäudeseite und eine kleine Fensterliste reichen meist für ein erstes Gespräch.'
  ),
  guide(
    'haushaltshilfe-erster-termin', 'Der erste Besuch Ihrer Haushaltshilfe', 'Haushalt',
    'Was soll bei knapper Zeit zuerst erledigt werden? Mit wenigen Absprachen wird der erste Besuch übersichtlich.', 'haushalt', '/haushalt',
    [
      detail('Drei Prioritäten benennen', 'Stellen Sie die wichtigsten Aufgaben an den Anfang Ihrer Liste. „Dusche, Küchenfronten und Flurboden“ gibt eine klarere Reihenfolge vor als „die ganze Wohnung“. Extras wie Bügeln können Sie getrennt ergänzen.'),
      detail('Besonderheiten zeigen', 'Eine empfindliche Arbeitsplatte, eine klemmende Duschwand oder ein Haustier sind gute Gründe für eine kurze Einweisung. Zeigen Sie auch, welche Räume privat bleiben.'),
      detail('Die erste Woche auswerten', 'Notieren Sie nach dem Besuch, ob Dauer und Aufgaben gepasst haben. Für den nächsten Termin können Sie die Verteilung ändern oder eine einzelne Zusatzaufgabe einplanen.'),
    ], 'Legen Sie Ihre Prioritäten und den vereinbarten Leistungsumfang beim ersten Besuch griffbereit hin.'
  ),
  guide(
    'fassadenreinigung-ohne-hochdruck', 'Wann eine schonende Fassadenwäsche passt', 'Fassadenpflege',
    'Material, Beschichtung und Fugen entscheiden darüber, wie eine Außenwand behandelt werden kann.', 'fassade', '/reinigung/fassadenreinigung',
    [
      detail('Den Aufbau kennen', 'Eine gestrichene Putzfläche unterscheidet sich von blankem Metall oder einer glasierten Platte. Für eine Einschätzung sind Bauunterlagen, frühere Anstriche und erkennbare Schäden wertvoll.'),
      detail('Eine Stelle testen', 'Eine kleine, unauffällige Probefläche zeigt, wie die Oberfläche auf die vorgesehene Behandlung reagiert. Das trockene Ergebnis lässt Farbe und Struktur zuverlässiger erkennen als die noch feuchte Wand.'),
      detail('Angrenzende Teile einbeziehen', 'Fensterbänke, Beschläge und Dichtungen liegen oft mitten im Arbeitsbereich. Besprechen Sie, welche Bauteile geschützt werden und wo das anfallende Wasser aufgenommen wird.'),
    ], 'Beschreiben Sie im Auftrag das gewünschte Ergebnis und den Untergrund. Das Verfahren lässt sich anschließend passend auswählen.'
  ),
  guide(
    'belag-an-der-fassade', 'Grüne Beläge und dunkle Laufspuren einordnen', 'Fassadenpflege',
    'Schon die Verteilung einer Verfärbung liefert Hinweise für den Besichtigungstermin.', 'fassade', '/reinigung/fassadenreinigung',
    [
      detail('Muster dokumentieren', 'Fotografieren Sie erst die gesamte Wand und anschließend die auffällige Stelle. Ein Streifen direkt unter dem Fensterbrett und eine flächige Verfärbung an der Nordseite verlangen unterschiedliche Rückfragen.'),
      detail('Die Umgebung mitbetrachten', 'Schatten, nahe Bepflanzung und Spritzwasser am Sockel beeinflussen, wie schnell eine Fläche trocknet. Notieren Sie auch, ob sich der Belag nach früheren Reinigungen rasch neu gebildet hat.'),
      detail('Ursachen auseinanderhalten', 'Eine Reinigung kann vorhandene Ablagerungen entfernen. Bei undichten Anschlüssen oder regelmäßig überlaufendem Wasser sollte die Verwaltung zusätzlich die bauliche Ursache prüfen lassen.'),
    ], 'Halten Sie den Standort des Fotos fest. So lässt sich später nachvollziehen, ob und wo sich der Belag erneut bildet.'
  ),
  guide(
    'fassadenpflege-planen', 'Wie oft braucht eine Fassade Pflege?', 'Fassadenpflege',
    'Gebäudeseiten altern unterschiedlich. Eine kurze Sichtkontrolle hilft, sinnvolle Pflegeintervalle zu finden.', 'fassade', '/reinigung/fassadenreinigung',
    [
      detail('Seiten getrennt betrachten', 'An der Straße treffen Staub und Spritzwasser auf die Wand. Im geschützten Innenhof kann der Putz länger feucht bleiben. Teilen Sie das Gebäude deshalb in vergleichbare Abschnitte.'),
      detail('Veränderungen festhalten', 'Fotografieren Sie dieselben Stellen möglichst bei ähnlichem Licht. So können Verwaltung und Eigentümer entscheiden, ob eine lokale Behandlung ausreicht oder eine größere Fläche gereinigt werden soll.'),
      detail('Den Einsatz bündeln', 'Steht ohnehin eine Bühne für andere Fassadenarbeiten bereit, lässt sich die Reinigung unter Umständen koordinieren. Dafür müssen Zuständigkeiten, Standzeit und Arbeitsbereiche vorher geklärt sein.'),
    ], 'Ein kurzer Kontrolltermin ist auch dann sinnvoll, wenn die eigentliche Reinigung noch warten kann.'
  ),
  guide(
    'fassadenangebot-vergleichen', 'Welche Positionen in ein Fassadenangebot gehören', 'Fassadenpflege',
    'Der Quadratmeterpreis allein sagt wenig darüber aus, welche Arbeiten Ihre Immobilie tatsächlich erhält.', 'fassade', '/reinigung/fassadenreinigung',
    [
      detail('Arbeitsfläche abgrenzen', 'Sockel, Fensterlaibungen, Vordächer und Balkone können zur sichtbaren Fassade gehören und dennoch separat zu behandeln sein. Eine markierte Ansicht schafft eine gemeinsame Grundlage für Angebote.'),
      detail('Nebenkosten zuordnen', 'Zugangstechnik, Absperrung, Wasserführung und vorbereitende Schutzmaßnahmen können einen großen Teil des Aufwands ausmachen. Lassen Sie sich zeigen, welche Positionen im Gesamtpreis enthalten sind.'),
      detail('Abnahme besprechen', 'Legen Sie vor Arbeitsbeginn fest, welche Musterfläche und welche Beleuchtung als Orientierung dienen. Vorhandene Verfärbungen oder Schäden sollten beim gemeinsamen Rundgang benannt werden.'),
    ], 'Vergleichen Sie zuerst den gleichen Leistungsumfang und danach den Preis.'
  ),
  guide(
    'produktionsflaechen-reinigen', 'Reinigung in einer laufenden Produktion planen', 'Sonderreinigung',
    'Ein freies Zeitfenster im Schichtplan ist erst dann nutzbar, wenn Wege und Zuständigkeiten feststehen.', 'bau', '/reinigung/bau-und-sonderreinigung',
    [
      detail('Bereiche eindeutig freigeben', 'Halle, Lager und Maschinenumfeld haben unterschiedliche Zugangsregeln. Die verantwortliche Person im Betrieb benennt die freigegebenen Flächen und klärt, wann das Team sie betreten darf.'),
      detail('Verkehrswege abstimmen', 'Beschreiben Sie Staplerverkehr, Lieferungen und Engstellen. So lässt sich die Reinigung abschnittsweise organisieren, während nutzbare Fahrwege für den Betrieb erhalten bleiben.'),
      detail('Wiederanlauf übergeben', 'Vereinbaren Sie, wer das Ergebnis kontrolliert und den gereinigten Bereich wieder an die Schicht übergibt. Unzugängliche Stellen gehören ausdrücklich ins Protokoll.'),
    ], 'Eine einfache Hallenskizze mit Freigabezeiten ist bei der Einsatzplanung hilfreicher als die Gesamtfläche allein.'
  ),
  guide(
    'treppenhaus-pflegeplan', 'Ein Pflegeplan für gemeinsam genutzte Treppenhäuser', 'Gebäudereinigung',
    'Hauseingang, Podeste und Kellerzugang sind unterschiedlich stark belastet. Ein Plan darf das widerspiegeln.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Vom Eingang nach oben gehen', 'An der Haustür bleiben im Winter Streugut und Feuchtigkeit liegen, während obere Podeste oft länger sauber bleiben. Kennzeichnen Sie diese Zonen beim gemeinsamen Rundgang.'),
      detail('Details ergänzen', 'Handläufe, Briefkastenanlage, Aufzugsspiegel und Klingeltableau fallen Besuchern besonders auf. Legen Sie für jedes Element fest, ob es zur laufenden Pflege oder zu einem gesonderten Termin gehört.'),
      detail('Zugänge offenhalten', 'Sprechen Sie über Kinderwagen, Lieferverkehr und Stoßzeiten. Eine geeignete Abfolge verhindert, dass der ganze Eingang gleichzeitig feucht ist.'),
    ], 'Halten Sie fest, wer Schäden meldet, die beim Reinigen auffallen. Das erleichtert die Arbeit der Verwaltung.'
  ),
  guide(
    'gebaeudedienste-abstimmen', 'Mehrere Dienste in einem Gebäude koordinieren', 'Gebäudereinigung',
    'Hausdienst, Reinigung und externe Gewerke teilen sich dieselben Türen, Räume und Zeitfenster.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Überschneidungen sichtbar machen', 'Markieren Sie im Wochenplan Anlieferungen, Wartungen, Veranstaltungen und reguläre Reinigungszeiten. So fällt früh auf, wenn zwei Teams dieselbe Fläche gleichzeitig benötigen.'),
      detail('Eine Übergabe vereinbaren', 'Wer eine Tür öffnet, einen Schlüssel zurücknimmt oder eine Störung meldet, sollte für beide Schichten klar sein. Eine kurze Liste der Funktionskontakte reicht aus.'),
      detail('Änderungen mit Datum weitergeben', 'Ändert sich die Belegung eines Raums, braucht das Team einen gültigen Stand. Versehen Sie aktualisierte Pläne mit Datum und nehmen Sie veraltete Exemplare aus dem Umlauf.'),
    ], 'Planen Sie rund um den Betrieb einen kleinen Puffer für Übergaben ein.'
  ),
  guide(
    'laufende-reinigungsvereinbarung', 'Was eine laufende Reinigungsvereinbarung klärt', 'Gebäudereinigung',
    'Gut beschriebene Aufgaben helfen beiden Seiten, die laufende Betreuung im Alltag zu beurteilen.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Räume und Häufigkeit verbinden', 'Eine Aufgabe wie „Türen pflegen“ braucht einen Ort und ein Intervall. Griffbereiche am Empfang können öfter anstehen als die vollständigen Türblätter im Lager.'),
      detail('Sondertermine trennen', 'Halten Sie Grundreinigung, Fenstertermine und die Nachbereitung von Veranstaltungen gesondert fest. So bleibt erkennbar, was regelmäßig geschieht und was eigens angefragt wird.'),
      detail('Rückmeldungen zuordnen', 'Benennen Sie eine Ansprechperson auf jeder Seite. Mit Raum, Datum und konkretem Befund kann eine Rückmeldung schnell dem richtigen Auftrag zugeordnet werden.'),
    ], 'Überprüfen Sie die Raumliste erneut, wenn Abteilungen umziehen oder sich Öffnungszeiten ändern.'
  ),
  guide(
    'kosten-einer-gebaeudereinigung', 'Wie sich die Kosten der Gebäudereinigung zusammensetzen', 'Gebäudereinigung',
    'Ein Besprechungsraum und ein Sanitärbereich können gleich groß sein und trotzdem verschieden viel Pflege benötigen.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Raumarten getrennt erfassen', 'Neben den Quadratmetern zählen Oberflächen, Ausstattung und Nutzung. Ein freier Flur lässt sich anders bearbeiten als eine Teeküche mit vielen einzelnen Kontaktflächen.'),
      detail('Jede Häufigkeit rechnen', 'Werden Sanitäranlagen an jedem Arbeitstag und Archivräume monatlich gereinigt, entstehen zwei verschiedene Aufwandsposten. Fordern Sie eine Übersicht je Aufgabenbereich an.'),
      detail('Zusatzkosten einordnen', 'Klären Sie vorab, ob Verbrauchsmaterial, Schlüsselübergabe oder ein gewünschtes Randzeitfenster im Angebot berücksichtigt sind. Dadurch lassen sich mehrere Angebote besser vergleichen.'),
    ], 'Liefern Sie für ein erstes Angebot eine Raumliste mit ungefähren Flächen und Nutzungstagen.'
  ),
  guide(
    'reinigungsfirma-auswaehlen', 'Welche Fragen beim ersten Ortstermin helfen', 'Gebäudereinigung',
    'Ein Rundgang zeigt schnell, ob ein angebotenes Reinigungskonzept zum eigenen Betrieb passt.', 'reinigung', '/reinigung',
    [
      detail('Mit einem typischen Tag anfangen', 'Erzählen Sie, wann die ersten Mitarbeiter kommen, der Empfang Besucher hat und der letzte Besprechungsraum frei wird. So kann der Anbieter konkrete Zeitfenster prüfen.'),
      detail('Eine schwierige Stelle zeigen', 'Zeigen Sie etwa einen empfindlichen Boden oder eine oft benutzte Glastür. Die Rückfragen zu Material, Nutzung und gewünschtem Ergebnis verraten viel über die vorgeschlagene Arbeitsweise.'),
      detail('Die Zusammenarbeit besprechen', 'Wer übernimmt die Einweisung? Wie erreichen Rückfragen die richtige Person? Wann kann der Plan angepasst werden? Die Antworten gehören zu einem brauchbaren Angebot ebenso wie die Kosten.'),
    ], 'Nehmen Sie eine Person aus dem täglichen Betrieb zum Rundgang mit. Sie kennt oft die entscheidenden Details.'
  ),
  guide(
    'hygieneplan-im-alltag', 'Vom Hygieneplan zum Arbeitsauftrag', 'Gebäudereinigung',
    'Für die Umsetzung im Gebäude muss aus jeder Vorgabe eine verständliche Aufgabe werden.', 'kita', '/reinigung/kita-reinigung',
    [
      detail('Bereiche benennen', 'Die verantwortliche Einrichtung legt fest, welche Vorgaben für welche Räume gelten. Arbeitsbeschreibungen sollten einen konkreten Raum oder Oberflächentyp nennen, damit das Team vor Ort die Zuordnung erkennt.'),
      detail('Zuständigkeiten abgleichen', 'Besprechen Sie, was Beschäftigte der Einrichtung tagsüber übernehmen und was zum externen Auftrag gehört. Das gilt besonders für Flächen, die zwischen mehreren Nutzungen bearbeitet werden müssen.'),
      detail('Rückmeldung ermöglichen', 'Eine kurze Dokumentation sollte zeigen, was erledigt wurde und was offen blieb. Zu einer gesperrten Tür gehört auch die Information, wer einen neuen Zugang vereinbart.'),
    ], 'Lassen Sie aktualisierte Pläne vor der nächsten Schicht an alle betroffenen Teams weitergeben.'
  ),
  guide(
    'regalservice-beauftragen', 'Einen Regalservice für die Filiale beauftragen', 'Regalservice',
    'Für eine belastbare Planung braucht es mehr als die Angabe der Verkaufsfläche.', 'regalservice', '/regalservice',
    [
      detail('Lieferung und Sortiment beschreiben', 'Nennen Sie typische Liefermengen, Warengruppen und Anliefertage. Ein Gang mit vielen kleinen Varianten bindet andere Arbeitsschritte als eine Aktionsinsel mit vollständigen Kartons.'),
      detail('Das Zeitfenster bestimmen', 'Klären Sie, wann die Ware bereitsteht, wie der Zugang zum Lager erfolgt und welche Flächen zuerst verkaufsbereit sein sollen. Wochenenden und Aktionsstarts können einen eigenen Ablauf brauchen.'),
      detail('Die Kontrolle vereinbaren', 'Für die Schichtübergabe können ein kurzer Rundgang, eine Liste offener Positionen oder vereinbarte Fotos genügen. Definieren Sie die Form vor dem ersten Einsatz.'),
    ], 'Für mehrere Filialen lohnt sich pro Standort ein eigenes Blatt mit Lieferfenster, Zugang und Kontakt.'
  ),
  guide(
    'aktionsflaeche-aufbauen', 'Eine Aktionsfläche zum Wochenwechsel aufbauen', 'Regalservice',
    'Vom Abbau der letzten Aktion bis zur ersten korrekten Preisauszeichnung zählen die Übergänge.', 'regalservice', '/regalservice',
    [
      detail('Restware klären', 'Legen Sie vor dem Abbau fest, wohin verkaufsfähige Restware, Aufsteller und altes Werbematerial gehören. Dadurch bleibt der Gang auch beim Wechsel übersichtlich.'),
      detail('Aufbauunterlagen bereitlegen', 'Standort, Artikelvarianten, Aktionszeitraum und Preis gehören zusammen. Prüfen Sie rechtzeitig, ob alle Komponenten einschließlich der benötigten Halter und Preisschilder eingetroffen sind.'),
      detail('Aus Kundensicht kontrollieren', 'Prüfen Sie den Aufbau aus der Laufrichtung der Kundschaft. Sind Artikel erreichbar, stimmen Preise und bleiben Durchgänge frei? Ein kurzer Rundgang mit der Marktleitung schließt den Aufbau ab.'),
    ], 'Kennzeichnen Sie fehlende Aktionsartikel im Übergabevermerk, damit die nächste Lieferung gezielt ergänzt werden kann.'
  ),
  guide(
    'regalluecken-nachfuellen', 'Wie die Filiale mit Regallücken umgehen kann', 'Regalservice',
    'Eine leere Stelle kann auf fehlende Ware, eine falsche Platzierung oder eine verspätete Lieferung hinweisen.', 'regalservice', '/regalservice',
    [
      detail('Den Artikel bestimmen', 'Prüfen Sie zuerst das Regaletikett und die Nachbarfächer. Bei ähnlichen Packungen steht manchmal eine Variante im falschen Fach und verdeckt die eigentliche Lücke.'),
      detail('Lager und Lieferung abgleichen', 'Ist der Artikel im Lager vorhanden und für den Verkauf freigegeben, kann er nachgefüllt werden. Eine noch ungeöffnete Lieferung sollte dem zuständigen Warenbereich zugeordnet werden.'),
      detail('Offene Fälle melden', 'Fehlt die Ware weiterhin, dokumentieren Sie Regalplatz und Artikelnummer nach dem Verfahren der Filiale. So kann die Person mit Bestellverantwortung den Bestand prüfen.'),
    ], 'Halten Sie die vereinbarte Regalbreite ein, damit die fehlende Variante später wieder an ihren Platz passt.'
  ),
  guide(
    'schule-ganztag-reinigen', 'Schulreinigung zwischen Unterricht und Ganztag', 'Bildungseinrichtungen',
    'Der letzte Gong ist in vielen Schulen längst nicht das Ende der Raumnutzung.', 'schule', '/reinigung/schulreinigung',
    [
      detail('Raumbelegung zusammentragen', 'Vergleichen Sie den Stundenplan mit Betreuung, Musikunterricht und Vereinssport. Häufig können früh freie Trakte schon bearbeitet werden, während einzelne Räume noch belegt sind.'),
      detail('Zugang und Materiallager klären', 'Hausdienst und Reinigung sollten wissen, welche Türen ab wann verschlossen sind und wo Arbeitsmaterial bereitsteht. Planen Sie Wege möglichst so, dass sie belegte Bereiche wenig kreuzen.'),
      detail('Ausnahmen früh melden', 'Ein Elternabend oder eine Prüfung verschiebt einzelne Aufgaben. Eine Raumbezeichnung, das Datum und die erwartete Freigabezeit reichen für eine brauchbare Änderungsmeldung.'),
    ], 'Senden Sie bei Änderungen nur einen gültigen Belegungsplan mit klar sichtbarem Stand.'
  ),
  guide(
    'unterhaltsreinigung-intervalle', 'Den passenden Rhythmus für Unterhaltsreinigung finden', 'Gebäudereinigung',
    'Die tatsächlich benutzten Räume geben den Takt vor. Ein Wochenplan kann mehrere Intervalle enthalten.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Nutzung beobachten', 'Erfassen Sie über eine typische Woche, wann und wie viele Menschen Eingänge, Waschräume und Gemeinschaftsküchen nutzen. Ein leer stehendes Büro braucht eine andere Betreuung als eine häufig belegte Besprechungsetage.'),
      detail('Aufgaben unterscheiden', 'Tägliche Sichtpflege, regelmäßiges Wischen und gelegentliche Detailarbeiten sind verschiedene Aufgaben. Geben Sie jeder Aufgabe ihr eigenes Intervall, auch wenn sie denselben Raum betreffen.'),
      detail('Nach dem Start nachjustieren', 'Vergleichen Sie die vereinbarten Intervalle nach einigen Wochen mit den Rückmeldungen aus dem Betrieb. Besonders Feiertage und wechselnde Bürobelegung können das Bild verzerren.'),
    ], 'Ein guter Wochenplan enthält auch seltene Aufgaben mit einem konkreten nächsten Termin.'
  ),
  guide(
    'bauabnahme-vorbereiten', 'Die Bauendreinigung vor der Abnahme einplanen', 'Bau und Übergabe',
    'Ein guter Reinigungstermin liegt zwischen den letzten staubigen Arbeiten und der Übergabe an die Nutzer.', 'bau', '/reinigung/bau-und-sonderreinigung',
    [
      detail('Gewerke nach Abschnitt abfragen', 'Ein fertig montiertes Bad kann geschlossen bleiben, während im Flur noch gesägt wird. Kennzeichnen Sie freigegebene Räume im Plan und vereinbaren Sie, wer die Freigabe erteilt.'),
      detail('Oberflächenlisten bereithalten', 'Neu versiegelter Boden, beschichtetes Glas und Naturstein brauchen passende Pflege. Materialbezeichnungen und Hinweise der Hersteller gehören in die Einweisung zum Objekt.'),
      detail('Ergebnis gemeinsam betrachten', 'Bei der Übergabe lässt sich auf gereinigten Flächen besser erkennen, was ein Rückstand und was ein bereits vorhandener Schaden ist. Halten Sie offene Punkte mit Raumbezug fest.'),
    ], 'Planen Sie für Nacharbeiten der Gewerke einen gesonderten Rückmeldetermin ein.'
  ),
  guide(
    'zimmerwechsel-im-hotel', 'Zimmerwechsel mit der Rezeption abstimmen', 'Hotellerie',
    'Abgereist, noch belegt oder bereits für den nächsten Gast vorgesehen? Der Zimmerstatus steuert den Ablauf.', 'hotel', '/reinigung/hotelreinigung',
    [
      detail('Mit Freigaben beginnen', 'Die Rezeption teilt mit, welche Zimmer tatsächlich frei sind und wo eine frühe Anreise wartet. Eine laufend gepflegte Liste hilft beim Umplanen, wenn ein Gast später abreist.'),
      detail('Hausstandard griffbereit halten', 'Ausstattung, Wäsche und Gästeartikel können sich je Zimmerkategorie unterscheiden. Ein kurzer, eindeutiger Standard pro Kategorie erleichtert Vertretungen und neue Einsätze.'),
      detail('Rückmeldung vom Zimmer auslösen', 'Fehlt ein Handtuch oder fällt ein beschädigter Beschlag auf, geht die Meldung an die dafür zuständige Person. Reinigung und Freigabe sollten erkennbar voneinander unterschieden werden.'),
    ], 'Legen Sie einen gemeinsamen Meldeweg für Rezeption, Reinigung und Hausdienst fest.'
  ),
  guide(
    'reinigungsergebnis-pruefen', 'Ein Reinigungsergebnis gemeinsam prüfen', 'Gebäudereinigung',
    'Ein gemeinsamer Rundgang wird konkreter, wenn Umfang, Beobachtung und gewünschte Änderung zusammenkommen.', 'reinigung', '/reinigung',
    [
      detail('Die Vereinbarung mitnehmen', 'War eine Tür nur im Griffbereich zu reinigen oder vollständig? Eine Liste der vereinbarten Leistungen und Termine liefert den Bezug für die Beurteilung.'),
      detail('Beobachtungen verorten', 'Statt „der Flur war nicht sauber“ hilft „am Montag nach dem Abendtermin lagen Rückstände am Aufzug im zweiten Stock“. So lässt sich die Stelle erneut prüfen.'),
      detail('Ursache und nächsten Schritt klären', 'Spätere Nutzung, ungeeignetes Material oder eine übersehene Aufgabe verlangen unterschiedliche Reaktionen. Vereinbaren Sie Zuständigkeit und einen Termin für die Rückmeldung.'),
    ], 'Behalten Sie auch gut funktionierende Abläufe bei der nächsten Überarbeitung des Plans im Blick.'
  ),
  guide(
    'grundreinigung-oder-unterhalt', 'Wann sich eine Grundreinigung lohnt', 'Gebäudereinigung',
    'Regelmäßige Pflege und eine gründliche Einzelbehandlung erfüllen verschiedene Aufgaben.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Die Veränderung beschreiben', 'Ein häufiger Laufweg wirkt stumpf oder auf dem Boden bleiben Rückstände trotz üblicher Pflege. Fotografieren Sie die Stelle und halten Sie fest, wann sie zuletzt gründlich bearbeitet wurde.'),
      detail('Material und Zeitfenster klären', 'Die Behandlung hängt vom Belag, seiner Beschichtung und der weiteren Nutzung ab. Manche Flächen brauchen nach der Bearbeitung Zeit, bevor wieder Möbel darauf stehen können.'),
      detail('Laufende Pflege anpassen', 'Nach dem Sondertermin lohnt sich ein Blick auf die Ursache. Eine wirksame Eingangsmatte oder eine geänderte Reinigungshäufigkeit kann die tägliche Pflege erleichtern.'),
    ], 'Planen Sie Grundreinigungen mit dem Hausdienst, damit Räume ausgeräumt und wieder freigegeben werden können.'
  ),
  guide(
    'geteilte-arbeitsplaetze', 'Gemeinsam genutzte Schreibtische reinigen lassen', 'Büroreinigung',
    'Bei wechselnden Nutzern braucht die Reinigung klare Regeln für persönliche Dinge und Technik.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Den Arbeitsplatz freigeben', 'Besprechen Sie, welche Flächen Beschäftigte vor Feierabend leerräumen. Ein klar definierter Ablageort für persönliche Dinge macht die vereinbarte Tischpflege einfacher.'),
      detail('Technik gesondert behandeln', 'Bildschirme, Tastaturen und Besprechungstechnik gehören nur dann zum Auftrag, wenn die Behandlung und die Herstellerhinweise geklärt sind. Das Team sollte vorab wissen, was es bewegen darf.'),
      detail('Gemeinschaftspunkte berücksichtigen', 'Bei flexiblen Arbeitsplätzen wechseln auch Schließfächer, Telefonzellen und Buchungsanzeigen häufig die Nutzer. Entscheiden Sie einzeln, welche Oberflächen in den regelmäßigen Plan aufgenommen werden.'),
    ], 'Stimmen Sie die Absprachen für geteilte Arbeitsplätze mit den Beschäftigten ab, bevor der neue Pflegeplan beginnt.'
  ),
  guide(
    'kita-ferienreinigung-planen', 'Die Kita während der Schließzeit gründlich pflegen', 'Bildungseinrichtungen',
    'Wenn Gruppenräume frei sind, lassen sich Böden und schwer zugängliche Stellen besser erreichen.', 'kita', '/reinigung/kita-reinigung',
    [
      detail('Freie Räume bestätigen', 'Auch in den Ferien kann ein Gebäudeteil für eine Notgruppe belegt sein. Halten Sie zugängliche Räume, Schlüssel und mögliche Rückkehrzeiten im Plan fest.'),
      detail('Spielmaterial zuordnen', 'Bücher, Bausteine und Textilien lassen sich nicht auf dieselbe Art behandeln. Die Einrichtung kennzeichnet, was sie selbst sortiert oder wäscht und welche Aufgaben das Reinigungsteam übernimmt.'),
      detail('Rückgabe einplanen', 'Vereinbaren Sie vor dem ersten Betreuungstag einen gemeinsamen Rundgang. Dann bleibt Zeit, Möbel zurückzustellen und ausstehende Punkte mit der Leitung zu klären.'),
    ], 'Beschriften Sie ausgeräumte Behälter nach Gruppe und Raum. So findet jedes Team seine Materialien wieder.'
  ),
  guide(
    'teppich-und-polsterpflege', 'Teppiche und Polster im Betrieb pflegen', 'Gebäudereinigung',
    'Sitzgruppen im Empfang und Laufwege im Flur brauchen oft früher eine Behandlung als Randbereiche.', 'buero', '/reinigung/buero-und-gebaeudereinigung',
    [
      detail('Material und Flecken erfassen', 'Wenn möglich, halten Sie Bezug, Flor oder Herstellerbezeichnung fest. Bei einem Fleck hilft die Information, was verschüttet wurde und ob er bereits behandelt wurde.'),
      detail('Ein geeignetes Verfahren wählen', 'Eine unauffällige Probe gibt Hinweise zur Verträglichkeit. Legen Sie vorab fest, welche Sitzflächen, Rückenlehnen, Kanten oder Teppichzonen Teil des Auftrags sind.'),
      detail('Trocknung berücksichtigen', 'Planen Sie einen Zeitraum, in dem die gereinigten Möbel und Wege frei bleiben können. In einer Lobby lässt sich häufig ein Abschnitt nach dem anderen freigeben.'),
    ], 'Klären Sie vor der Reinigung, wann der Raum wieder für Besucher bereitstehen muss.'
  ),
  guide(
    'kuechengeraete-als-extra', 'Kühlschrank und Backofen als Zusatzleistung buchen', 'Haushalt',
    'Geräte von innen zu reinigen ist ein eigener Arbeitsschritt und lässt sich beim Termin gut mit einplanen.', 'haushalt', '/haushalt',
    [
      detail('Gerät und Umfang nennen', 'Ein kleiner Kühlschrank mit Glasböden ist anders aufgebaut als eine hohe Kühlkombination. Schreiben Sie dazu, ob Fächer, Bleche oder Roste zur Anfrage gehören.'),
      detail('Vorbereitung absprechen', 'Vereinbaren Sie, wer Lebensmittel herausnimmt, lagert und später wieder einräumt. Benutzte Geräte müssen für die vereinbarte Arbeit bereit sein. Beachten Sie die Bedienungsanleitung Ihres Geräts.'),
      detail('Zeit neben der Grundreinigung vorsehen', 'Wenn Bad und Böden wie üblich mitbetreut werden sollen, kommt die Gerätepflege zusätzlich hinzu. Eine vorab gesetzte Priorität hilft, falls der Aufwand größer ausfällt.'),
    ], 'Nennen Sie das gewünschte Gerät bereits in der Anfrage, damit Umfang und Preis im Angebot erscheinen.'
  ),
  guide(
    'buegelwaesche-einplanen', 'Wäsche und Bügeln in den Haushaltstermin aufnehmen', 'Haushalt',
    'Eine kurze Beschreibung des Wäschekorbs ermöglicht eine bessere Einschätzung als sein Gewicht allein.', 'haushalt', '/haushalt',
    [
      detail('Stückzahl und Art nennen', 'Handtücher zusammenlegen, Bettwäsche wechseln und Hemden bügeln sind unterschiedliche Aufgaben. Nennen Sie eine ungefähre Stückzahl und die Tätigkeiten, die Sie abgeben möchten.'),
      detail('Pflegehinweise bereitlegen', 'Sortieren Sie empfindliche Stücke vorab und klären Sie, welche Geräte und Aufhängemöglichkeiten vorhanden sind. Bei fehlendem Etikett besprechen Sie die Behandlung gemeinsam.'),
      detail('Den Besuch aufteilen', 'Sollen beim selben Termin auch Böden und Bad gereinigt werden, geben Sie die Reihenfolge an. Größere Wäschemengen können einen eigenen Termin sinnvoll machen.'),
    ], 'Ein fester Platz für fertige Wäsche vereinfacht die Übergabe, auch wenn Sie gerade außer Haus sind.'
  ),
  guide(
    'haushaltsangebot-verstehen', 'Ein Angebot für Haushaltshilfe richtig lesen', 'Haushalt',
    'Mit Besuchsdauer, Rhythmus und Extras lässt sich aus einem Einzelpreis ein realistischer Monatsplan ableiten.', 'haushalt', '/haushalt',
    [
      detail('Den einzelnen Besuch prüfen', 'Halten Sie fest, welche Räume und Aufgaben zu einem Termin gehören. Werden Stunden berechnet, sehen Sie sich auch die vereinbarte Dauer an. Ein Preis pro Besuch braucht eine genaue Aufgabenbeschreibung.'),
      detail('Monate mit mehreren Terminen beachten', 'Alle zwei Wochen bedeutet über ein ganzes Jahr betrachtet üblicherweise 26 Termine. Das unterscheidet sich von zwei festen Besuchen je Kalendermonat. Für Ihre Monatsplanung zählt die Zahl der tatsächlichen Termine.'),
      detail('Extras separat lesen', 'Achten Sie auf ausgewiesene Anfahrt, Material und einmalige Arbeiten wie Innenfenster. Für einen Vergleich hilft Ihnen der Gesamtpreis einschließlich Umsatzsteuer für denselben Leistungsumfang.'),
    ], 'Bei einem unregelmäßigen Bedarf lassen Sie sich einzelne Besuche und regelmäßige Hilfe mit gleichem Umfang gegenüberstellen.'
  ),
  guide(
    'schichtuebergabe-im-markt', 'Eine kurze Schichtübergabe für den Regalservice', 'Regalservice',
    'Vier Angaben reichen oft, damit die nächste Schicht eine offene Aufgabe sofort findet.', 'regalservice', '/regalservice',
    [
      detail('Ort und Artikel festhalten', 'Nennen Sie Gang, Regalfeld und die Artikelnummer. Bei mehreren gleichen Aufstellern hilft ein Zusatz wie „am Eingang zur Getränkeabteilung“.'),
      detail('Den Stand beschreiben', 'Wurde die Ware noch nicht geliefert, fehlt ein Preis oder ist ein Karton beschädigt? Halten Sie den beobachteten Zustand fest. Eine Vermutung über die Ursache lässt sich später häufig nur schwer prüfen.'),
      detail('Nächsten Schritt benennen', 'Vermerken Sie, wer bereits informiert ist und worauf die Folgeschicht wartet. So kann sie nach der nächsten Anlieferung direkt weitermachen, ohne denselben Fall neu einzuordnen.'),
    ], 'Bündeln Sie offene Punkte an einem vereinbarten Ort, damit keine parallelen Listen entstehen.'
  ),
  guide(
    'hotellobby-veranstaltungen', 'Lobby und Tagungsräume zwischen zwei Veranstaltungen', 'Hotellerie',
    'Kleine Zeitfenster lassen sich nutzen, wenn die Übergaben mit Veranstaltungsleitung und Service geklärt sind.', 'hotel', '/reinigung/hotelreinigung',
    [
      detail('Den Wechsel genau terminieren', 'Die Zeit zwischen zwei Buchungen steht selten vollständig zur Verfügung. Fragen Sie, wann Geschirr und Technik zurückgebaut werden und wann die neue Bestuhlung beginnt.'),
      detail('Arbeiten sinnvoll ordnen', 'Zugängliche Oberflächen, Eingangstüren und angrenzende Waschräume können unterschiedliche Zeitfenster haben. Mit einer vereinbarten Reihenfolge blockieren sich die beteiligten Teams seltener.'),
      detail('Freigabe zentral melden', 'Eine Person bestätigt der Veranstaltungsleitung, welche Räume und Nebenflächen bereitstehen. Wenn etwas offen bleibt, sollte die Meldung auch den Ort und das nächste mögliche Zeitfenster nennen.'),
    ], 'Denken Sie an Wege zwischen Lobby, Tagungsraum und Garderobe. Gäste nehmen sie als zusammenhängenden Bereich wahr.'
  ),
  guide(
    'ressourcenschonend-reinigen', 'Wasser und Reinigungsmittel gezielt einsetzen', 'Nachhaltigkeit',
    'Ressourcenschonende Reinigung beginnt mit kleinen Entscheidungen über Fläche, Material und Bedarf.', 'nachhaltigkeit', '/reinigung',
    [
      detail('Den Bedarf vor Ort prüfen', 'Nicht jede Fläche braucht bei jedem Besuch dieselbe Behandlung. Freie Büroräume und ein stark genutzter Nassbereich können im selben Gebäude unterschiedlich versorgt werden.'),
      detail('Mittel passend dosieren', 'Entscheidend sind die Herstellerangaben und der tatsächliche Untergrund. Zu viel Reiniger kann einen Rückstand hinterlassen, der zusätzliches Nachwischen nötig macht.'),
      detail('Geräte und Wege vorbereiten', 'Geeignete Tücher und sauber getrennte Arbeitsbereiche erleichtern die richtige Anwendung. Gebündelte Wege und gut vorbereitete Geräte vermeiden unnötige Arbeitsgänge.'),
    ], 'Nennen Sie bei der Planung auch empfindliche Oberflächen und Produkte, die Ihr Haus bereits gut verträgt.'
  ),
];
