export function CleaningWhyChooseUs({ isEn }) {
  const points = isEn
    ? [
        {
          title: "Experienced Cleaning Team",
          desc: "Trained professionals with extensive practical expertise across commercial, residential, and specialized environments.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          ),
        },
        {
          title: "Reliable and Consistent Service",
          desc: "Punctual execution, dedicated points of contact, and unyielding quality standards you can rely on visit after visit.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          ),
        },
        {
          title: "Flexible Cleaning Schedules",
          desc: "Tailored intervals — daily, weekly, or outside business hours — scheduled seamlessly around your daily operations.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <polyline points="12 14 12 17 14 17" />
            </svg>
          ),
        },
        {
          title: "Professional Cleaning Equipment",
          desc: "Modern industrial machinery and environmentally certified cleaning agents matched precisely to delicate surfaces.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          ),
        },
        {
          title: "Attention to Detail",
          desc: "Meticulous care for edges, corners, fixtures, and high-touch areas to ensure flawless hygiene in every room.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          ),
        },
        {
          title: "Customer-Focused Approach",
          desc: "Direct communication, swift response times, and personalized cleaning concepts tailored to your exact requirements.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          ),
        },
      ]
    : [
        {
          title: "Erfahrenes Reinigungsteam",
          desc: "Geschultes Fachpersonal mit umfassender Praxiserfahrung in gewerblichen, privaten und anspruchsvollen Umgebungen.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          ),
        },
        {
          title: "Zuverlässiger & beständiger Service",
          desc: "Pünktliche Ausführung, feste Ansprechpartner und gleichbleibend hohe Qualität, auf die Sie sich dauerhaft verlassen können.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          ),
        },
        {
          title: "Flexible Reinigungszeiten",
          desc: "Maßgeschneiderte Intervalle – täglich, wöchentlich oder außerhalb Ihrer Öffnungszeiten – perfekt auf Ihren Alltag abgestimmt.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <polyline points="12 14 12 17 14 17" />
            </svg>
          ),
        },
        {
          title: "Professionelle Reinigungstechnik",
          desc: "Moderne Ausrüstung und geprüfte, umweltschonende Reinigungsmittel, exakt auf anspruchsvolle Materialien abgestimmt.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          ),
        },
        {
          title: "Auge fürs Detail",
          desc: "Gründliche Pflege von Randleisten, Ecken, Griffen und sensiblen Flächen für makellose Sauberkeit in jedem Detail.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          ),
        },
        {
          title: "Kundenorientierter Ansatz",
          desc: "Persönliche Beratung, verlässliche Erreichbarkeit und flexible Lösungen, die sich ganz nach Ihren Prioritäten richten.",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          ),
        },
      ];

  return (
    <section className="ws-why-choose-section" aria-label={isEn ? "Why Choose Us" : "Warum White Stone"}>
      <div className="ws-wrap ws-why-choose-wrap">
        <div className="ws-why-choose-header">
          <div className="ws-why-choose-badge">
            <span>{isEn ? "WHY CHOOSE US" : "WARUM WIR"}</span>
          </div>
          <h2 className="ws-why-choose-title">
            {isEn ? "Why Choose " : "Warum White Stone "}
            <em>{isEn ? "White Stone." : "überzeugt."}</em>
          </h2>
          <p className="ws-why-choose-lead">
            {isEn
              ? "Dedicated specialists, modern cleaning equipment and dependable standards tailored to your premises across Munich."
              : "Verlässliche Standards, moderne Reinigungstechnik und geschulte Fachkräfte für makellose Sauberkeit in ganz München."}
          </p>
        </div>

        <div className="ws-why-choose-grid">
          {points.map((p, idx) => (
            <div key={p.title} className="ws-why-choose-card">
              <div className="ws-why-choose-icon-wrap" aria-hidden="true">
                {p.icon}
              </div>
              <h3 className="ws-why-choose-card-title">{p.title}</h3>
              <p className="ws-why-choose-card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CleaningProcess({ isEn }) {
  const steps = isEn
    ? [
        {
          num: "01",
          title: "Initial Consultation",
          desc: "Understand the customer’s cleaning requirements, inspect the premises, and clearly define the scope of work.",
        },
        {
          num: "02",
          title: "Planning & Scheduling",
          desc: "Arrange the cleaning tasks, select appropriate methods, and establish a convenient, dependable schedule.",
        },
        {
          num: "03",
          title: "Professional Cleaning",
          desc: "Carry out the agreed cleaning services using modern equipment, eco-friendly agents, and trained specialists.",
        },
        {
          num: "04",
          title: "Final Quality Check",
          desc: "Review the completed work meticulously to ensure uncompromising quality, hygiene, and full satisfaction.",
        },
      ]
    : [
        {
          num: "01",
          title: "Erstberatung",
          desc: "Bedarfsanalyse vor Ort, Erfassung Ihrer genauen Anforderungen und gemeinsame Definition des Leistungsumfangs.",
        },
        {
          num: "02",
          title: "Planung & Terminierung",
          desc: "Erstellung des individuellen Reinigungsplans, Festlegung geeigneter Verfahren und Abstimmung der Einsatzzeiten.",
        },
        {
          num: "03",
          title: "Fachgerechte Reinigung",
          desc: "Zuverlässige Umsetzung der vereinbarten Leistungen durch unser geschultes Team mit moderner Ausrüstung.",
        },
        {
          num: "04",
          title: "Qualitätskontrolle",
          desc: "Sorgfältige Überprüfung aller ausgeführten Arbeiten zur Sicherung höchster Sauberkeit und voller Zufriedenheit.",
        },
      ];

  return (
    <section className="ws-cleaning-process-section" aria-label={isEn ? "Our Cleaning Process" : "Unser Reinigungsprozess"}>
      <div className="ws-wrap ws-cleaning-process-wrap">
        <div className="ws-cleaning-process-header">
          <div className="ws-cleaning-process-badge">
            <span>{isEn ? "OUR PROCESS" : "UNSER ABLAUF"}</span>
          </div>
          <h2 className="ws-cleaning-process-title">
            {isEn ? "Our Cleaning " : "Unser Reinigungs"}
            <em>{isEn ? "process." : "prozess."}</em>
          </h2>
          <p className="ws-cleaning-process-lead">
            {isEn
              ? "A structured, transparent four-step pathway from your first inquiry to flawless, inspected cleanliness."
              : "Ein klarer, transparenter Ablauf in vier einfachen Schritten – von der ersten Beratung bis zur geprüften Sauberkeit."}
          </p>
        </div>

        <div className="ws-cleaning-process-grid">
          {steps.map((s, idx) => (
            <div key={s.num} className="ws-cleaning-process-card">
              <div className="ws-cleaning-process-top">
                <span className="ws-cleaning-process-step-pill">
                  {isEn ? `Step ${s.num}` : `Schritt ${s.num}`}
                </span>
                <span className="ws-cleaning-process-arrow" aria-hidden="true">
                  {idx < steps.length - 1 ? "→" : "✓"}
                </span>
              </div>
              <h3 className="ws-cleaning-process-card-title">{s.title}</h3>
              <p className="ws-cleaning-process-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhereWeClean({ lang = 'de' }) {
  const isEn = lang === 'en';
  const locations = isEn
    ? [
        {
          title: "Offices & Commercial Buildings",
          desc: "Corporate office suites, administrative hubs, law firms, and multi-tenant business centers.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
              <line x1="9" y1="22" x2="9" y2="22.01" />
              <line x1="15" y1="22" x2="15" y2="22.01" />
              <line x1="8" y1="6" x2="8.01" y2="6" />
              <line x1="12" y1="6" x2="12.01" y2="6" />
              <line x1="16" y1="6" x2="16.01" y2="6" />
              <line x1="8" y1="10" x2="8.01" y2="10" />
              <line x1="12" y1="10" x2="12.01" y2="10" />
              <line x1="16" y1="10" x2="16.01" y2="10" />
              <line x1="8" y1="14" x2="8.01" y2="14" />
              <line x1="12" y1="14" x2="12.01" y2="14" />
              <line x1="16" y1="14" x2="16.01" y2="14" />
              <line x1="8" y1="18" x2="8.01" y2="18" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
              <line x1="16" y1="18" x2="16.01" y2="18" />
            </svg>
          ),
        },
        {
          title: "Retail Stores & Shopping Centres",
          desc: "Supermarkets, high-street retail shops, shopping arcades, and client-facing boutiques.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          ),
        },
        {
          title: "Hotels & Hospitality Properties",
          desc: "Hotels, serviced apartments, boutique guest residences, restaurants, and event spaces.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 4v16" />
              <path d="M2 8h18a2 2 0 0 1 2 2v10" />
              <path d="M2 17h20" />
              <path d="M6 8v9" />
            </svg>
          ),
        },
        {
          title: "Schools & Educational Facilities",
          desc: "Public and private schools, daycare nurseries, kindergartens, lecture halls, and academies.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          ),
        },
        {
          title: "Medical & Healthcare Facilities",
          desc: "Doctor's surgeries, specialized medical clinics, dental practices, and physiotherapy centers.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          ),
        },
        {
          title: "Residential Properties",
          desc: "Apartment buildings, residential housing blocks, private estates, and managed rentals.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          ),
        },
        {
          title: "Industrial & Warehouse Facilities",
          desc: "Logistics depots, production plants, workshops, distribution hubs, and storage facilities.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          ),
        },
        {
          title: "Common Areas & Shared Spaces",
          desc: "Entrance halls, staircases, corridors, elevator vestibules, shared courtyards, and garages.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18" />
              <path d="M14 9h4" />
              <path d="M14 15h4" />
            </svg>
          ),
        },
      ]
    : [
        {
          title: "Büros & Geschäftsgebäude",
          desc: "Moderne Bürokomplexe, Kanzleien, Agenturen, Verwaltungsgebäude und Gewerbeflächen.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
              <line x1="9" y1="22" x2="9" y2="22.01" />
              <line x1="15" y1="22" x2="15" y2="22.01" />
              <line x1="8" y1="6" x2="8.01" y2="6" />
              <line x1="12" y1="6" x2="12.01" y2="6" />
              <line x1="16" y1="6" x2="16.01" y2="6" />
              <line x1="8" y1="10" x2="8.01" y2="10" />
              <line x1="12" y1="10" x2="12.01" y2="10" />
              <line x1="16" y1="10" x2="16.01" y2="10" />
              <line x1="8" y1="14" x2="8.01" y2="14" />
              <line x1="12" y1="14" x2="12.01" y2="14" />
              <line x1="16" y1="14" x2="16.01" y2="14" />
              <line x1="8" y1="18" x2="8.01" y2="18" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
              <line x1="16" y1="18" x2="16.01" y2="18" />
            </svg>
          ),
        },
        {
          title: "Einzelhandel & Einkaufszentren",
          desc: "Supermärkte, Filialbetriebe, Shopping Malls, Fachgeschäfte und Kundenbereiche.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          ),
        },
        {
          title: "Hotels & Gastgewerbe",
          desc: "Hotels, Serviced Apartments, Gästehäuser, Restaurants, Bars und Event-Locations.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 4v16" />
              <path d="M2 8h18a2 2 0 0 1 2 2v10" />
              <path d="M2 17h20" />
              <path d="M6 8v9" />
            </svg>
          ),
        },
        {
          title: "Schulen & Bildungseinrichtungen",
          desc: "Schulen, Kitas, Kindergärten, Seminarräume, Universitäten und Ausbildungszentren.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          ),
        },
        {
          title: "Praxen & Gesundheitseinrichtungen",
          desc: "Arztpraxen, Facharztzentren, Zahnkliniken, Therapieräume und Pflegestützpunkte.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          ),
        },
        {
          title: "Wohnimmobilien",
          desc: "Mehrfamilienhäuser, Wohnresidenzen, private Liegenschaften und Mietobjekte.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          ),
        },
        {
          title: "Industrie- & Lagerhallen",
          desc: "Logistikhallen, Produktionsstätten, Handwerksbetriebe, Lager und Verteilzentren.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          ),
        },
        {
          title: "Gemeinschafts- & Verkehrsflächen",
          desc: "Eingangshallen, Treppenhäuser, Flure, Aufzüge, Kellergänge und Tiefgaragen.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18" />
              <path d="M14 9h4" />
              <path d="M14 15h4" />
            </svg>
          ),
        },
      ];

  return (
    <section className="ws-where-we-clean-section" aria-label={isEn ? "Where We Clean" : "Einsatzorte"}>
      <div className="ws-wrap ws-where-we-clean-wrap">
        <div className="ws-where-we-clean-header">
          <div className="ws-where-we-clean-badge">
            <span>{isEn ? "WHERE WE OPERATE" : "EINSATZORTE"}</span>
          </div>
          <h2 className="ws-where-we-clean-title">
            {isEn ? "Where We " : "Wo wir für "}
            <em>{isEn ? "clean." : "Sauberkeit sorgen."}</em>
          </h2>
          <p className="ws-where-we-clean-lead">
            {isEn
              ? "From modern commercial offices to sensitive healthcare facilities — dependable, hygienic care for every property type across Munich and surrounding areas."
              : "Vom modernen Bürokomplex bis zur sensiblen Praxis – verlässliche, hygienische Betreuung für jede Immobilienart im Großraum München."}
          </p>
        </div>

        <div className="ws-where-we-clean-grid">
          {locations.map((loc) => (
            <div key={loc.title} className="ws-where-we-clean-card">
              <div className="ws-where-we-clean-icon-wrap" aria-hidden="true">
                {loc.icon}
              </div>
              <h3 className="ws-where-we-clean-card-title">{loc.title}</h3>
              <p className="ws-where-we-clean-card-desc">{loc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CleaningPlans({ lang = 'de' }) {
  const isEn = lang === 'en';
  const plans = isEn
    ? [
        {
          badge: "Daily",
          title: "Daily Cleaning",
          desc: "Regular cleaning to maintain a consistently clean environment across offices and public facilities.",
          focus: "Workstations, washrooms, bins & high-touch surfaces",
        },
        {
          badge: "Weekly",
          title: "Weekly Cleaning",
          desc: "Scheduled cleaning to keep your premises fresh, thoroughly organised, and ready for work.",
          focus: "Deep floor care, meeting rooms & glass surfaces",
        },
        {
          badge: "Monthly",
          title: "Monthly Cleaning",
          desc: "Periodic, detailed cleaning for ongoing maintenance and long-term surface preservation.",
          focus: "Wall washing, high dusting, fixtures & baseboards",
        },
        {
          badge: "On-Demand",
          title: "One-time Deep Cleaning",
          desc: "Thorough cleaning for spaces that need extra attention, seasonal renewal, or post-event care.",
          focus: "Intensive sanitisation, hard floor scrubbing & grout care",
        },
      ]
    : [
        {
          badge: "Täglich",
          title: "Tägliche Reinigung",
          desc: "Regelmäßige Reinigung für ein dauerhaft sauberes und gepflegtes Arbeits- und Kundenumfeld.",
          focus: "Arbeitsplätze, Sanitärräume, Kontaktflächen & Entsorgung",
        },
        {
          badge: "Wöchentlich",
          title: "Wöchentliche Reinigung",
          desc: "Geplante Einsätze an festen Wochentagen für verlässliche Frische und dauerhafte Ordnung.",
          focus: "Böden, Besprechungsräume, Teeküchen & Glasflächen",
        },
        {
          badge: "Monatlich",
          title: "Monatliche Reinigung",
          desc: "Periodische, detaillierte Reinigung zur Werterhaltung und Pflege schwer erreichbarer Zonen.",
          focus: "Sockelleisten, Deckenbeleuchtung, Türen & Wandflächen",
        },
        {
          badge: "Nach Bedarf",
          title: "Einmalige Grundreinigung",
          desc: "Gründliche Intensivreinigung für Räume, die besondere Aufmerksamkeit oder Erneuerung erfordern.",
          focus: "Tiefenreinigung aller Oberflächen & maschinelle Bodenpflege",
        },
      ];

  return (
    <section className="ws-cleaning-plans-section" aria-label={isEn ? "Flexible Cleaning Plans" : "Flexible Reinigungspläne"}>
      <div className="ws-wrap ws-cleaning-plans-wrap">
        <div className="ws-cleaning-plans-header">
          <div className="ws-cleaning-plans-badge">
            <span>{isEn ? "CLEANING INTERVALS" : "REINIGUNGSINTERVALLE"}</span>
          </div>
          <h2 className="ws-cleaning-plans-title">
            {isEn ? "Flexible Cleaning " : "Flexible Reinigungs"}
            <em>{isEn ? "plans." : "pläne."}</em>
          </h2>
          <p className="ws-cleaning-plans-lead">
            {isEn
              ? "Customizable cleaning schedules designed to match your property's foot traffic, operating hours, and maintenance requirements."
              : "Individuelle Reinigungsintervalle, abgestimmt auf Ihre Betriebszeiten, Nutzungsintensität und räumlichen Anforderungen."}
          </p>
        </div>

        <div className="ws-cleaning-plans-grid">
          {plans.map((p) => (
            <div key={p.title} className="ws-cleaning-plan-card">
              <div className="ws-cleaning-plan-top">
                <span className="ws-cleaning-plan-badge">{p.badge}</span>
              </div>
              <h3 className="ws-cleaning-plan-title">{p.title}</h3>
              <p className="ws-cleaning-plan-desc">{p.desc}</p>
              <div className="ws-cleaning-plan-divider" aria-hidden="true" />
              <div className="ws-cleaning-plan-focus">
                <span className="ws-cleaning-plan-focus-dot" aria-hidden="true" />
                <span className="ws-cleaning-plan-focus-text">{p.focus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
