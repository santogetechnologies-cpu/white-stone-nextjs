// Shared routing and imagery keep both language editions paired.
const records = [
  {
    slug: 'buerozonen-pflegen', photoKey: 'buero', relatedHref: '/reinigung/buero-und-gebaeudereinigung',
    de: {
      title: 'Büroreinigung nach Raum und Nutzung planen',
      category: 'Büroreinigung',
      summary: 'Eingang, Besprechungsraum und Teeküche werden zu verschiedenen Zeiten genutzt. Ein Raumplan macht die Aufgaben für das Reinigungsteam eindeutig.',
      sections: [
        { title: 'Den Tagesverlauf erfassen', text: 'Beobachten Sie, wann Räume tatsächlich frei sind. Im Empfang sammeln sich nach Regen schnell Schuhspuren, während der Konferenzraum erst nach der letzten Sitzung zugänglich ist. Tragen Sie diese Zeitfenster in den Plan ein.' },
        { title: 'Oberflächen und Zuständigkeiten festlegen', text: 'Kennzeichnen Sie frei zu räumende Schreibtische, empfindliche Geräte und vertrauliche Unterlagen. Halten Sie für Küche und Sanitärbereich fest, wer Abfall trennt, Kontaktflächen pflegt und fehlendes Verbrauchsmaterial meldet.' },
        { title: 'Ein Ergebnis je Zone vereinbaren', text: 'Prüfen Sie gemeinsam einen typischen Arbeitstag. Nach der Reinigung sollen die Wege trocken, die Abfallbehälter geleert und die Räume für die nächste Belegung vorbereitet sein. Wiederkehrende Reklamationen gehören in die nächste Planbesprechung.' },
      ],
      takeaway: 'Ein nutzbarer Raumplan nennt für jeden Bereich Aufgabe, Zeitfenster und Freigabe.',
    },
    en: {
      title: 'Plan office cleaning around the way each room is used',
      category: 'Office cleaning',
      summary: 'Entrances, meeting rooms and staff kitchens are busiest at different times. A room schedule makes each cleaning assignment clear.',
      sections: [
        { title: 'Trace a typical working day', text: 'Check when the rooms are actually free. On a wet morning, footprints may build up at reception while the meeting room stays occupied until late afternoon. Record both access windows on the schedule.' },
        { title: 'Agree on surfaces and responsibilities', text: 'Identify desks to be cleared, sensitive equipment and confidential papers. For the kitchen and washrooms, agree who separates waste, cleans touchpoints and reports low supplies.' },
        { title: 'Define a result for each zone', text: 'Walk through a typical day together. When cleaning is complete, walkways should be dry, bins emptied and rooms ready for their next users. Bring recurring problems to the next review of the schedule.' },
      ],
      takeaway: 'For each room, record the task, the time available and the person who confirms completion.',
    },
  },
  {
    slug: 'merchandising-im-markt', photoKey: 'regalservice', relatedHref: '/regalservice',
    de: {
      title: 'Merchandising entlang des Kundenwegs',
      category: 'Regalservice',
      summary: 'Sichtachsen, Griffhöhe und Preiskennzeichnung entscheiden mit darüber, wie leicht Kundinnen und Kunden einen Artikel finden.',
      sections: [
        { title: 'Die Fläche aus Kundensicht begehen', text: 'Gehen Sie von beiden Richtungen auf das Regal zu. Welche Ware ist im Vorbeigehen erkennbar? Verdeckt ein Aufsteller das Preisschild? Halten Sie die Gänge auch mit Einkaufswagen und Rollstuhl zugänglich.' },
        { title: 'Platzierung mit dem Regalplan abgleichen', text: 'Ordnen Sie Stammartikel, Ergänzungsprodukte und Aktionen nach dem freigegebenen Plan an. Stimmen Artikelnummer, Anzahl der sichtbaren Produktreihen und Preis überein? Änderungen bespricht das Team mit der Marktleitung.' },
        { title: 'Während der Aktion nachsteuern', text: 'Prüfen Sie zu Stoßzeiten, welche Plätze leer werden und wo Kunden nach dem Preis suchen. Legen Sie einen Nachfüllort und einen Kontrollzeitpunkt fest. Am Ende der Aktion gehören Restware und alte Schilder zurück an die vereinbarten Stellen.' },
      ],
      takeaway: 'Eine erfolgreiche Platzierung bleibt während der gesamten Aktion zugänglich, verständlich ausgezeichnet und nachfüllbar.',
    },
    en: {
      title: 'Plan merchandising along the shopper’s route',
      category: 'Shelf services',
      summary: 'Sightlines, reach and price labels affect how easily shoppers can find an item and decide what to buy.',
      sections: [
        { title: 'Walk the aisle as a shopper', text: 'Approach the shelf from both directions. Which products can you see as you walk past? Is a display hiding a price label? Keep aisles accessible for shoppers with trolleys and wheelchairs.' },
        { title: 'Check the display against the planogram', text: 'Arrange regular lines, complementary products and promotions according to the agreed plan. Check the item number, number of facings and displayed price. Agree any changes with the store manager.' },
        { title: 'Follow up during the promotion', text: 'At busy times, look for gaps and places where shoppers have difficulty finding the price. Agree where spare stock is kept and when to check it. Return remaining stock and remove the old signs when the promotion ends.' },
      ],
      takeaway: 'Throughout a campaign, a display should remain accessible, clearly priced and simple to replenish.',
    },
  },
  {
    slug: 'desinfektion-dokumentieren', photoKey: 'buero', relatedHref: '/reinigung/buero-und-gebaeudereinigung',
    de: {
      title: 'Desinfektionsleistungen nachvollziehbar dokumentieren',
      category: 'Hygiene',
      summary: 'Damit eine Einrichtung die ausgeführten Arbeiten prüfen kann, braucht sie klare Zuständigkeiten und einen Nachweis pro Einsatz.',
      sections: [
        { title: 'Den betrieblichen Hygieneplan heranziehen', text: 'Die zuständige Person im Betrieb benennt die Bereiche, für die eine Desinfektion vorgesehen ist. Markieren Sie diese auf einer Raumliste. Sensible Geräte und Oberflächen mit besonderen Pflegehinweisen gehören ausdrücklich in die Übergabe.' },
        { title: 'Freigabe und Zeitfenster vereinbaren', text: 'Klären Sie, wer den Raum bereitstellt und wann er wieder genutzt werden darf. Das ausführende Fachpersonal richtet die Arbeit nach den Vorgaben der Einrichtung und des Herstellers aus. Änderungen werden vor Ort abgestimmt.' },
        { title: 'Die Ausführung festhalten', text: 'Im vereinbarten Nachweis lassen sich Datum, Bereich, verwendetes Verfahren, verantwortliches Team und Freigabe dokumentieren. Ist eine Fläche nicht zugänglich, braucht es einen Vermerk und einen neuen Termin.' },
      ],
      takeaway: 'Vereinbaren Sie schon im Angebot, welche Nachweise Ihre Einrichtung benötigt und an wen sie übergeben werden.',
    },
    en: {
      title: 'Keep a clear record of disinfection work',
      category: 'Hygiene',
      summary: 'A facility needs clear responsibilities and a record of each visit to check that the agreed work has been completed.',
      sections: [
        { title: 'Start with the facility’s hygiene plan', text: 'The responsible person identifies the areas that require disinfection. Mark those areas on a room list. Include sensitive equipment and surfaces with specific care instructions in the handover.' },
        { title: 'Agree access and release times', text: 'Establish who makes the room available and when people may use it again. The specialist team follows the facility’s requirements and the manufacturer’s instructions. Discuss changes on site.' },
        { title: 'Record the completed work', text: 'The agreed record may list the date, area, method used, responsible team and release status. If an area was inaccessible, record the reason and arrange another visit.' },
      ],
      takeaway: 'Specify the records your facility needs and who should receive them when you request a quote.',
    },
  },
  {
    slug: 'schulhygiene-vereinbaren', photoKey: 'schule', relatedHref: '/reinigung/schulreinigung',
    de: {
      title: 'Schulhygiene zwischen Mensa, Sporthalle und Klassenraum',
      category: 'Schulreinigung',
      summary: 'Ein Schulgebäude hat viele Nutzungszeiten. Für verlässliche Hygiene braucht jeder Raum ein passendes Zeitfenster und eine klare Übergabe.',
      sections: [
        { title: 'Den Belegungsplan mitnehmen', text: 'Ergänzen Sie den Stundenplan um Nachmittagsgruppen, Essensausgaben und Vereinssport. So wird sichtbar, wann Tische frei sind, Umkleiden betreten werden können und der Hallenboden wieder trocken sein muss.' },
        { title: 'Gemeinsam genutzte Räume priorisieren', text: 'Legen Sie für Waschplätze, Toiletten, Eingänge und Essplätze konkrete Kontrollzeiten fest. Stimmen Sie mit dem Träger ab, welche Aufgaben der Hygieneplan vorsieht und wer fehlende Verbrauchsmittel nachfüllt.' },
        { title: 'Abweichungen an eine Stelle melden', text: 'Eine verschlossene Tür oder ein spontanes Schulfest kann den Tagesplan ändern. Notieren Sie Raum, offene Aufgabe und Ersatztermin. In den Ferien können Grundpflege, Fenster und schwer zugängliche Flächen separat eingeplant werden.' },
      ],
      takeaway: 'Für den Rundgang helfen Stundenplan, Raumliste und eine zuständige Person für kurzfristige Änderungen.',
    },
    en: {
      title: 'School hygiene in the dining hall, gym and classroom',
      category: 'School cleaning',
      summary: 'A school building has many timetables. Each room needs a suitable cleaning window and a clear handover.',
      sections: [
        { title: 'Include all bookings', text: 'Add after-school groups, meal service and sports clubs to the lesson timetable. The team can then see when desks are free, when it can enter changing rooms and when the sports floor must be dry again.' },
        { title: 'Prioritise shared facilities', text: 'Set check times for washbasins, toilets, entrances and dining tables. Agree the duties set out in the school’s hygiene plan and who will replenish consumables.' },
        { title: 'Route changes through one contact', text: 'A locked door or a last-minute school event can change the day’s plan. Record the room, outstanding task and new time. Schedule deep cleaning, windows and difficult-to-reach surfaces separately during the holidays.' },
      ],
      takeaway: 'Bring the school timetable, a room list and a named contact for last-minute changes to the site visit.',
    },
  },
  {
    slug: 'qualitaet-im-housekeeping', photoKey: 'hotel', relatedHref: '/reinigung/hotelreinigung',
    de: {
      title: 'Qualitätskontrollen im Housekeeping organisieren',
      category: 'Hotelreinigung',
      summary: 'Ein bezogenes Bett, eine vollständige Ausstattung und eine eindeutige Zimmerfreigabe gehören zusammen. Ein kurzer Kontrollweg hilft vor der nächsten Anreise.',
      sections: [
        { title: 'Standards pro Zimmertyp festlegen', text: 'Erstellen Sie mit der Hausdame eine Liste für Abreise- und Bleibezimmer. Dazu gehören Bett, Bad, Gästeartikel und gegebenenfalls Minibar. Ein Musterzimmer erleichtert die Einarbeitung bei wechselnden Schichten.' },
        { title: 'Wäsche und Gästebereiche einbeziehen', text: 'Legen Sie Wege für frische und gebrauchte Wäsche fest. Vereinbaren Sie eigene Zeiten für Lounge, Restaurant und Wellnessbereich, wenn Gästezimmer und öffentliche Räume parallel betreut werden.' },
        { title: 'Die Zimmerfreigabe übermitteln', text: 'Ein festgelegter Rückmeldeweg verbindet Reinigung, Hausdame und Rezeption. Noch offene Arbeiten, ein technischer Mangel oder eine Gästereklamation lassen sich so bis zur Erledigung weiterverfolgen.' },
      ],
      takeaway: 'Eine Zimmerkontrolle ist abgeschlossen, wenn die Rezeption weiß, ob das Zimmer für die Anreise bereitsteht.',
    },
    en: {
      title: 'Organise quality checks in hotel housekeeping',
      category: 'Hotel cleaning',
      summary: 'A freshly made bed, complete guest supplies and a clear room release belong together. A short inspection process helps the team prepare for arrivals.',
      sections: [
        { title: 'Agree standards for each room type', text: 'Prepare a checklist with the head housekeeper for departure rooms and stayovers. Include the bed, bathroom, guest supplies and minibar where applicable. A sample room helps new or rotating staff learn the standard.' },
        { title: 'Include linen and guest facilities', text: 'Set out routes for clean and used linen. Agree separate time windows for the lounge, restaurant and wellness area when guest rooms and public spaces are being serviced at the same time.' },
        { title: 'Communicate room release', text: 'An agreed reporting channel connects room attendants, the head housekeeper and reception. Use it to track unfinished tasks, maintenance issues or guest feedback until someone has acted on them.' },
      ],
      takeaway: 'The room check is complete when reception knows whether it can welcome the next guest.',
    },
  },
  {
    slug: 'warenrotation-im-regal', photoKey: 'regalservice', relatedHref: '/regalservice',
    de: {
      title: 'Warenrotation und Regalbefüllung im Tagesgeschäft',
      category: 'Regalservice',
      summary: 'Bei einer Lieferung muss neue Ware zum vorgesehenen Artikelplatz gelangen, ohne ältere Bestände zu verdecken. Eine feste Reihenfolge hilft dabei.',
      sections: [
        { title: 'Den Artikelplatz prüfen', text: 'Vergleichen Sie Artikel, Packungsgröße, Regaletikett und Platzierungsplan. Eine ähnlich aussehende Verpackung kann zu einer anderen Sorte oder Preiseinheit gehören. Unklare Plätze werden mit der Filialleitung abgestimmt.' },
        { title: 'Bestände nach Filialvorgabe einräumen', text: 'Beachten Sie die Vorgaben des Marktes zu Warenrotation, Mindesthaltbarkeit und Kühlkette. Beschädigte Packungen und Ware mit unklarem Zustand werden getrennt und an die zuständige Person gemeldet.' },
        { title: 'Lücken und Übermengen übergeben', text: 'Nach dem Befüllen bleiben mitunter Lücken oder Restkartons. Halten Sie fest, welcher Artikel betroffen ist und wo Restware lagert. So kann die nächste Schicht gezielt nachfüllen und die Marktleitung bei Bedarf nachbestellen.' },
      ],
      takeaway: 'Zur Regalpflege gehören die korrekte Platzierung, der Umgang mit älterer Ware und eine verständliche Meldung offener Bestände.',
    },
    en: {
      title: 'Stock rotation and shelf filling during a delivery',
      category: 'Shelf services',
      summary: 'New stock needs to reach the right shelf without hiding earlier deliveries. An agreed sequence helps staff keep track of both.',
      sections: [
        { title: 'Check the shelf location', text: 'Match the item, pack size, shelf label and planogram. Similar packaging can belong to a different variety or price unit. Ask the store manager about any slot that is unclear.' },
        { title: 'Follow the store’s rotation rules', text: 'Follow the store’s procedures for rotation, best-before dates and the cold chain. Set damaged packs and stock of uncertain condition aside and report them to the person responsible.' },
        { title: 'Hand over gaps and surplus stock', text: 'After replenishment, there may be empty slots or spare cases. Record the affected item and where any surplus is stored. The next shift can then refill the right spot and the manager can reorder if needed.' },
      ],
      takeaway: 'Shelf care covers placement, stock rotation and a clear handover of any unresolved shortages or surplus.',
    },
  },
];

function edition(language) {
  return records.map(({ slug, photoKey, relatedHref, ...translations }) => ({
    slug, photoKey, relatedHref, ...translations[language],
  }));
}

export const additionalGuidesDE = edition('de');
export const additionalGuidesEN = edition('en');

// These items extend the existing service descriptions with topics from the original site.
export const legacyExtras = {
  de: {
    company: [
      { title: 'Unsere Wurzeln', text: 'White Stone ging aus einem Zusammenschluss erfahrener Reinigungs- und Dienstleistungsfachleute hervor. Zum Hintergrund des Teams gehört die Arbeit in der Berliner Gebäudereinigung. Heute betreut das Unternehmen mit Sitz in München gewerbliche Objekte, öffentliche Einrichtungen und private Haushalte.' },
      { title: 'Zusammenarbeit im Objekt', text: 'Wir legen mit Ihnen fest, wem Veränderungen an einer Fläche gemeldet werden, wie wir Schichten einweisen und wer das Ergebnis prüft. Regelmäßige Schulungen, auch zum sparsamen Einsatz von Wasser und Reinigungsmitteln, gehören zur Arbeit vor Ort.' },
      { title: 'Standorte und Einsatzzeiten', text: 'Unser Schwerpunkt liegt in München und Umgebung. Für weitere Standorte in Deutschland stimmen wir Anfahrt, Team und Einsatzleitung projektbezogen ab. Hotels, Filialen und Büros können Termine vor der Öffnung, am Abend oder am Wochenende anfragen.' },
    ],
    faq: [
      { question: 'Ist ein kurzfristiger Einsatz möglich?', answer: 'Nennen Sie uns den Standort, den Umfang und Ihren spätesten Starttermin. Wir prüfen die Teamverfügbarkeit und melden uns mit einem konkreten Vorschlag.' },
      { question: 'Kann die Betreuung mehrere Standorte umfassen?', answer: 'Ja. Teilen Sie uns Orte, Ansprechpartner und Zugangszeiten je Objekt mit. So können wir prüfen, welche Aufgaben gemeinsam organisiert werden können und was vor Ort abgestimmt werden muss.' },
      { question: 'Wie planen Sie die Reinigung außerhalb unserer Öffnungszeiten?', answer: 'Wir vereinbaren Zeitfenster, Schlüsselübergabe und Rückmeldung mit Ihrer Objektleitung. Für Abende, Wochenenden und Feiertage klären wir die Verfügbarkeit im Angebot.' },
      { question: 'Wie berücksichtigen Sie Umwelt und Materialien?', answer: 'Das Team stimmt Mittel und Dosierung auf Oberfläche und Verschmutzung ab. Geeignete wiederverwendbare Textilien, bedarfsgerechter Wassereinsatz und die Entsorgungswege des Objekts fließen in die Planung ein.' },
    ],
    services: {
      'glas-und-fensterreinigung': [{ title: 'Spezialglas und Kunststoff', text: 'Milchglas, Sicherheitsglas, Acrylglas und beschichtete Scheiben können unterschiedliche Pflege benötigen. Nennen Sie uns Material und Herstellerhinweise. Für hoch gelegene Elemente prüfen wir geeignete Zugänge und technische Hilfsmittel.' }],
      'buero-und-gebaeudereinigung': [{ title: 'Verwaltung, Praxen und Gemeinschaftsflächen', text: 'Für Gebäude mit Publikumsverkehr legen wir Kontrollzeiten für Empfang, Aufzüge und Treppenhaus fest. Aufgaben für gemeinschaftliche Küchen, Waschräume, Abfalltrennung und vereinbarte Desinfektion werden den zuständigen Personen zugeordnet.' }],
      'hotelreinigung': [{ title: 'Restaurant, Wellness und Gästeservice', text: 'Glasflächen in der Lobby, Polstermöbel, Restaurantbereiche sowie Spa- und Fitnessräume lassen sich in die Betreuung einbeziehen. Für Minibar, Gästeartikel und Wäschelager vereinbaren wir mit dem Haus Bestand, Nachfüllwege und Kontrollen.' }],
      'bau-und-sonderreinigung': [{ title: 'Besondere Verschmutzungen und Schadensfälle', text: 'Nach Wasser- oder Brandschäden, bei Schimmelbelastung oder Graffiti wird der Umfang gesondert geprüft. Beschreiben Sie betroffene Materialien und bekannte Schäden. Vor dem Angebot klären wir mit Ihnen Freigaben, Zuständigkeiten und den Bedarf an Fachsanierung.' }],
      'fassadenreinigung': [{ title: 'Graffiti, Schutzbehandlung und Höhe', text: 'Bei Graffiti, hartnäckigen Algen oder einer gewünschten wasserabweisenden Behandlung prüfen wir Material, Beschichtung und Probefläche. Für Arbeiten in der Höhe werden je nach Gebäude geeignete Zugänge, etwa Hebebühne oder Seilzugang, und der Schutz von Passanten geplant.' }],
      'kita-reinigung': [{ title: 'Spielzeug, Außenzugänge und Hygieneprotokoll', text: 'Spielmaterial, Sanitärbereiche und Schmutz von den Außenzugängen erfordern getrennte Aufgaben. Wir vereinbaren mit der Leitung materialgerechte Mittel, die vorgesehenen Desinfektionsarbeiten und eine Rückmeldung, bevor Kinder den Raum erneut nutzen.' }],
      'schulreinigung': [{ title: 'Mensa, Sport und Abfalltrennung', text: 'Mensa, Umkleiden und Turnhalle erhalten Zeitfenster passend zu Essensausgabe, Unterricht und Vereinssport. Die vereinbarte Abfalltrennung und eine dokumentierte Kontrolle erleichtern Rückfragen beim Schulträger.' }],
      'regalservice': [{ title: 'Warenrotation und Merchandising', text: 'Wir richten Artikel nach dem Plan des Marktes aus und prüfen Sichtflächen und Preisauszeichnung. Vorgaben zur Warenrotation, Kühlware und Mindesthaltbarkeit werden vor dem Einsatz mit der Marktleitung abgestimmt.' }],
    },
  },
  en: {
    company: [
      { title: 'Our background', text: 'White Stone grew out of a group of experienced cleaning and service professionals, including people who had worked in building cleaning in Berlin. Based in Munich, the company now serves commercial properties, public facilities and private households.' },
      { title: 'Working together on site', text: 'Together we agree who receives reports about changes on site, how shifts are briefed and who checks the results. Regular training covers the day-to-day work, including careful use of water and cleaning products.' },
      { title: 'Locations and working hours', text: 'Our main service area is Munich and its surroundings. For other locations in Germany, travel, staffing and supervision are agreed for each project. Hotels, stores and offices can ask about early morning, evening or weekend visits.' },
    ],
    faq: [
      { question: 'Can a team start at short notice?', answer: 'Tell us the location, scope of work and latest acceptable start date. We will check team availability and suggest a specific time.' },
      { question: 'Can one arrangement cover several locations?', answer: 'Yes. Send us the locations, site contacts and access times for each property. We can then identify what to coordinate centrally and what to agree with each local team.' },
      { question: 'How do you plan cleaning outside our opening hours?', answer: 'We agree access windows, key handover and reporting with the site manager. Availability for evenings, weekends and public holidays is confirmed as part of the quote.' },
      { question: 'How do you take materials and the environment into account?', answer: 'The team matches products and quantities to the surface and the soiling. Suitable reusable cloths, the amount of water needed and the site’s waste arrangements are included in the plan.' },
    ],
    services: {
      'glas-und-fensterreinigung': [{ title: 'Specialist glazing and plastic surfaces', text: 'Frosted glass, safety glass, acrylic and coated panes can require different care. Tell us the material and share any manufacturer guidance. For high-level surfaces we assess access and equipment.' }],
      'buero-und-gebaeudereinigung': [{ title: 'Offices, practices and shared spaces', text: 'In buildings open to visitors, we agree checks for reception, lifts and stairs. Duties for shared kitchens, washrooms, waste separation and any agreed disinfection are assigned to named people.' }],
      'hotelreinigung': [{ title: 'Restaurants, wellness facilities and guest supplies', text: 'Lobby glass, upholstery, restaurants, spa areas and fitness rooms can be included. For minibars, guest amenities and linen storage we agree stock levels, replenishment routes and checks with the hotel.' }],
      'bau-und-sonderreinigung': [{ title: 'Specialist cleaning and damage assessment', text: 'Fire or water damage, mould and graffiti require a separate assessment. Describe affected materials and any known damage. Before quoting, we clarify access approval, responsibilities and the need for specialist remediation.' }],
      'fassadenreinigung': [{ title: 'Graffiti, protective treatments and height access', text: 'For graffiti, persistent algae or a proposed water-repellent treatment, we assess the material, coating and a test area. For high-level work we plan suitable access, such as a lifting platform or rope access, and protection for people below.' }],
      'kita-reinigung': [{ title: 'Toys, outdoor entrances and hygiene records', text: 'Play materials, washrooms and dirt at outdoor entrances need separate tasks. With the nursery manager we agree suitable cleaning products, any specified disinfection and how to confirm a room is ready for children to use again.' }],
      'schulreinigung': [{ title: 'Dining halls, sports and waste separation', text: 'The dining hall, changing rooms and gym need access windows that fit meals, lessons and sports clubs. Agreed waste separation and a record of checks help the school operator follow up on questions.' }],
      'regalservice': [{ title: 'Stock rotation and merchandising', text: 'We arrange products according to the store plan and check facings and price labels. Before starting, we agree the store’s requirements for stock rotation, chilled goods and best-before dates with the manager.' }],
    },
  },
};
