import { company } from '../lib/company';
import { localizedPath } from '../lib/paths';

export default function LegalContent({ lang = 'de', mode = 'imprint' }) {
  const en = lang === 'en';
  const url = href => localizedPath(href, lang);

  if (mode === 'privacy') {
    return en ? <PrivacyEn company={company} url={url} /> : <PrivacyDe company={company} url={url} />;
  }
  if (mode === 'terms') {
    return en ? <TermsEn company={company} url={url} /> : <TermsDe company={company} url={url} />;
  }
  return en ? <ImprintEn company={company} url={url} /> : <ImprintDe company={company} url={url} />;
}

function ImprintDe({ company, url }) {
  return (
    <div lang="de">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        <strong>{company.name}</strong><br />
        {company.address}
      </p>

      <h3>Vertretungsberechtigter Geschäftsführer</h3>
      <p>{company.director}</p>

      <h3>Kontakt</h3>
      <p>
        Telefon: {company.phone && <a href={'tel:' + company.phone}>{company.phone}</a>}<br />
        E-Mail: {company.email && <a href={'mailto:' + company.email}>{company.email}</a>}
      </p>

      <h3>Registereintrag</h3>
      <p>
        Registergericht: {company.registerCourt}<br />
        Registernummer: {company.registerNumber}
      </p>

      <h3>Umsatzsteuer-Identifikationsnummer</h3>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
        {company.vatId}
      </p>

      <h3>Angaben zur Betriebshaftpflichtversicherung</h3>
      <p>
        Versicherer: {company.insurer}<br />
        Räumlicher Geltungsbereich: {company.insurerTerritory.de}
      </p>

      <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
      <p>
        {company.director}<br />
        {company.address}
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
      </p>
      <p>
        Hinweis: Die frühere Plattform der Europäischen Kommission zur Online-Streitbeilegung (OS-Plattform) wurde gemäß der Verordnung (EU) 2024/3228 zum 20. Juli 2025 eingestellt.
      </p>

      <h2>Haftung für Inhalte und Links</h2>
      <p>
        Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht nicht. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>
      <p>
        Unser Angebot enthält gegebenenfalls Verlinkungen auf externe Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch {company.name} erstellten Inhalte, Texte, Grafiken und Fotografien auf dieser Website unterliegen dem deutschen Urheberrecht. Jede Vervielfältigung, Bearbeitung, Verbreitung oder Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.
      </p>

      <p>
        Weitere rechtliche Hinweise finden Sie in unserer <a href={url('/datenschutz')}>Datenschutzerklärung</a> sowie in unseren <a href={url('/agb')}>Allgemeinen Geschäftsbedingungen (AGB)</a>.
      </p>
    </div>
  );
}

function ImprintEn({ company, url }) {
  return (
    <div lang="en">
      <h2>Information pursuant to Section 5 DDG (German Digital Services Act)</h2>
      <p>
        <strong>{company.name}</strong><br />
        {company.address}
      </p>

      <h3>Authorised Managing Director</h3>
      <p>{company.director}</p>

      <h3>Contact</h3>
      <p>
        Telephone: {company.phone && <a href={'tel:' + company.phone}>{company.phone}</a>}<br />
        Email: {company.email && <a href={'mailto:' + company.email}>{company.email}</a>}
      </p>

      <h3>Commercial Register</h3>
      <p>
        Registration court: {company.registerCourt}<br />
        Registration number: {company.registerNumber}
      </p>

      <h3>VAT Identification Number</h3>
      <p>
        VAT identification number pursuant to Section 27a of the German Value Added Tax Act (UStG):<br />
        {company.vatId}
      </p>

      <h3>Public &amp; Professional Liability Insurance</h3>
      <p>
        Insurer: {company.insurer}<br />
        Territorial scope: {company.insurerTerritory.en}
      </p>

      <h3>Person responsible for editorial content pursuant to Section 18 (2) MStV</h3>
      <p>
        {company.director}<br />
        {company.address}
      </p>

      <h2>Consumer Dispute Resolution (§ 36 VSBG)</h2>
      <p>
        We are neither obliged nor generally willing to participate in dispute resolution proceedings before a consumer arbitration board.
      </p>
      <p>
        Note: The former European Commission Online Dispute Resolution (ODR) platform was discontinued on 20 July 2025 pursuant to Regulation (EU) 2024/3228.
      </p>

      <h2>Liability for Content, Links and Copyright</h2>
      <p>
        As a service provider, we are responsible for our own content on these pages under general German law. We are not obliged to monitor transmitted or stored third-party information, but will remove any infringing content immediately upon becoming aware of it.
      </p>
      <p>
        The content, texts, graphics and photographs created by {company.name} on this website are subject to German copyright law. Any reproduction, editing, distribution or exploitation beyond the limits of copyright law requires prior written consent.
      </p>

      <p>
        Please also see our <a href={url('/datenschutz')}>Privacy Policy</a> and our <a href={url('/agb')}>Terms and Conditions</a>.
      </p>
    </div>
  );
}

function PrivacyDe({ company, url }) {
  return (
    <div lang="de">
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
      </p>
      <p>
        <strong>{company.name}</strong><br />
        Vertreten durch den Geschäftsführer: {company.director}<br />
        {company.address}<br />
        Telefon: {company.phone && <a href={'tel:' + company.phone}>{company.phone}</a>}<br />
        E-Mail: {company.email && <a href={'mailto:' + company.email}>{company.email}</a>}
      </p>

      <h2>2. Allgemeine Hinweise zur Datenverarbeitung und Rechtsgrundlagen</h2>
      <p>
        Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt auf Grundlage der DSGVO, des Bundesdatenschutzgesetzes (BDSG) sowie des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG).
      </p>
      <ul>
        <li><strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO):</strong> Soweit Sie uns eine Einwilligung erteilt haben.</li>
        <li><strong>Vertragserfüllung und vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO):</strong> Zur Bearbeitung konkreter Angebots- und Leistungsanfragen sowie zur Durchführung von Aufträgen.</li>
        <li><strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO):</strong> Zur Erfüllung gesetzlicher Aufbewahrungs- und Nachweispflichten (z. B. nach HGB und AO).</li>
        <li><strong>Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO):</strong> Zur Gewährleistung der IT-Sicherheit, der technischen Auslieferung und der Missbrauchsabwehr.</li>
      </ul>

      <h2>3. Bereitstellung der Website und Server-Logfiles</h2>
      <p>
        Bei jedem Aufruf unserer Website erfasst das Hosting-System automatisiert Informationen in sogenannten Server-Logfiles, die Ihr Browser übermittelt. Dies sind insbesondere:
      </p>
      <ul>
        <li>IP-Adresse des anfragenden Endgeräts,</li>
        <li>Datum und Uhrzeit des Zugriffs,</li>
        <li>Name und URL der abgerufenen Datei bzw. Seite,</li>
        <li>übertragene Datenmenge und HTTP-Statuscode,</li>
        <li>Browsertyp, Betriebssystem und Referrer-URL.</li>
      </ul>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren, stabilen und fehlerfreien Bereitstellung der Website. Die Logfiles werden nach spätestens 14 Tagen automatisiert gelöscht, sofern keine sicherheitsrelevante Aufbewahrung im Einzelfall erforderlich ist.
      </p>

      <h2>4. Cookies und Endgerätezugriff (§ 25 TDDDG)</h2>
      <p>
        Diese Website setzt <strong>keine</strong> Analyse-, Tracking- oder Marketing-Cookies ein und verwendet keine einwilligungspflichtigen Dienste Dritter zur Reichweitenmessung. Es findet kein Zugriff auf Informationen in Ihrer Endeinrichtung statt, der über das für die rein technische Bereitstellung der Website unbedingt erforderliche Maß hinausgeht (§ 25 Abs. 2 Nr. 2 TDDDG).
      </p>

      <h2>5. Kontaktformular, Haushaltsanfrage und E-Mail-Kontakt</h2>
      <p>
        Wenn Sie über unser Kontaktformular, den Haushalts-Preisrechner oder per E-Mail mit uns in Verbindung treten, verarbeiten wir die von Ihnen angegebenen Daten zur Bearbeitung Ihres Anliegens:
      </p>
      <ul>
        <li>Vorname und Nachname (Pflichtangabe),</li>
        <li>E-Mail-Adresse (Pflichtangabe),</li>
        <li>Telefonnummer (freiwillige Angabe),</li>
        <li>Postleitzahl des Haushalts (freiwillige Angabe bei Haushaltsanfragen),</li>
        <li>Ihre Nachricht sowie bei Haushaltsanfragen die ausgewählten Leistungen und das unverbindliche Kalkulationsergebnis.</li>
      </ul>
      <p>
        Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahme auf Ihre Anfrage hin) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung allgemeiner Anfragen).
      </p>
      <p>
        Zum Schutz vor automatisiertem Missbrauch (Spam-Abwehr) nutzt das Formular ein unsichtbares Kontrollfeld (Honeypot) sowie eine kurzzeitige, rein arbeitsspeicherbasierte Begrenzung der Anfragehäufigkeit je IP-Adresse (Rate-Limiting für maximal 10 Minuten, ohne dauerhafte Speicherung). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
      </p>
      <p>
        Für die technische Zustellung der Kontaktanfragen per E-Mail nutzen wir den Dienst <strong>Resend</strong> (Resend, Inc.). Die Übermittlung erfolgt ausschließlich zum Zweck der Weiterleitung Ihrer Anfrage an unser Postfach. Sofern dabei Daten in ein Drittland außerhalb der EU/des EWR übermittelt werden, stützt sich dies auf geeignete Garantien gemäß Art. 44 ff. DSGVO (EU-Standardvertragsklauseln bzw. Zertifizierung nach dem EU-US Data Privacy Framework).
      </p>

      <h2>6. Lokal eingebundene Schriftarten</h2>
      <p>
        Auf dieser Website werden die verwendeten Schriftarten (Inter und Playfair Display) lokal über unsere eigenen Server ausgeliefert. Es wird beim Seitenaufruf <strong>keine</strong> Verbindung zu externen Servern von Google Fonts hergestellt und keine IP-Adresse an Google übermittelt.
      </p>

      <h2>7. Speicherdauer und Löschung</h2>
      <p>
        Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Verarbeitungszweck erforderlich ist. Daten aus Kontaktanfragen werden gelöscht, sobald die Anfrage abschließend geklärt ist und keine gesetzlichen Aufbewahrungspflichten (insbesondere handels- und steuerrechtliche Fristen von 6 bzw. 10 Jahren gemäß § 257 HGB und § 147 AO) entgegenstehen.
      </p>

      <h2>8. Ihre Rechte als betroffene Person</h2>
      <p>
        Ihnen stehen nach der DSGVO folgende Rechte zu:
      </p>
      <ul>
        <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
        <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten verlangen.</li>
        <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer gespeicherten Daten verlangen, soweit keine gesetzlichen Pflichten entgegenstehen.</li>
        <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können unter den gesetzlichen Voraussetzungen eine Einschränkung der Verarbeitung verlangen.</li>
        <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
        <li><strong>Widerrufsrecht (Art. 7 Abs. 3 DSGVO):</strong> Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</li>
      </ul>
      <p>
        <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sofern wir Ihre personenbezogenen Daten auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung einzulegen.
      </p>
      <p>
        <strong>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO):</strong> Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde zu. Die für unseren Sitz in München zuständige Aufsichtsbehörde ist:<br />
        Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach, Deutschland.
      </p>

      <h2>9. Datensicherheit und Aktualität</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte (wie Ihrer Kontaktanfragen) eine TLS-/SSL-Verschlüsselung. Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf an geänderte rechtliche oder technische Rahmenbedingungen anzupassen.
      </p>
      <p>
        Stand: November 2026 · <a href={url('/impressum')}>Impressum</a> · <a href={url('/agb')}>Allgemeine Geschäftsbedingungen (AGB)</a>
      </p>
    </div>
  );
}

function PrivacyEn({ company, url }) {
  return (
    <div lang="en">
      <h2>1. Data Controller</h2>
      <p>
        The controller within the meaning of the EU General Data Protection Regulation (GDPR) and German data protection law (BDSG / TDDDG) is:
      </p>
      <p>
        <strong>{company.name}</strong><br />
        Represented by Managing Director: {company.director}<br />
        {company.address}<br />
        Telephone: {company.phone && <a href={'tel:' + company.phone}>{company.phone}</a>}<br />
        Email: {company.email && <a href={'mailto:' + company.email}>{company.email}</a>}
      </p>

      <h2>2. General Information and Legal Bases</h2>
      <p>
        We process personal data only insofar as necessary to provide a functional website and to deliver our services. Processing is carried out on the basis of:
      </p>
      <ul>
        <li><strong>Consent (Art. 6(1)(a) GDPR):</strong> Where you have expressly given consent.</li>
        <li><strong>Contract and pre-contractual measures (Art. 6(1)(b) GDPR):</strong> To respond to quote enquiries and perform agreed services.</li>
        <li><strong>Legal obligation (Art. 6(1)(c) GDPR):</strong> To comply with statutory retention duties (e.g. under German commercial and tax law).</li>
        <li><strong>Legitimate interests (Art. 6(1)(f) GDPR):</strong> For IT security, reliable website delivery and abuse prevention.</li>
      </ul>

      <h2>3. Website Hosting and Server Log Files</h2>
      <p>
        Each time you visit our website, our hosting infrastructure automatically records technical connection data in server log files (IP address, date and time of access, requested URL, data volume, HTTP status code, browser type, operating system and referrer URL).
      </p>
      <p>
        The legal basis is Art. 6(1)(f) GDPR (legitimate interest in secure and reliable operation). Server log files are automatically deleted after a maximum of 14 days unless longer retention is required in individual security incidents.
      </p>

      <h2>4. Cookies and Device Access (Section 25 TDDDG)</h2>
      <p>
        This website does <strong>not</strong> use analytics, tracking or marketing cookies and does not access end-device storage beyond what is strictly necessary for technical delivery (Section 25(2) no. 2 TDDDG).
      </p>

      <h2>5. Contact Form, Household Estimator and Email Enquiries</h2>
      <p>
        When you contact us via our contact form, the household cost calculator or by email, we process the information you provide (first name, last name, email address, optional telephone number, optional postal code for household enquiries, message, and any selected services and estimate) solely to handle your enquiry.
      </p>
      <p>
        The legal basis is Art. 6(1)(b) GDPR (pre-contractual steps) or Art. 6(1)(f) GDPR (legitimate interest in responding to enquiries). To protect against automated spam, the form uses an invisible honeypot field and temporary in-memory IP rate-limiting (maximum 10 minutes, no persistent storage) based on Art. 6(1)(f) GDPR.
      </p>
      <p>
        For technical delivery of enquiry emails, we use <strong>Resend</strong> (Resend, Inc.) as a processor. Where data is transferred outside the EU/EEA, this is safeguarded in accordance with Art. 44 et seq. GDPR (EU Standard Contractual Clauses and/or EU-US Data Privacy Framework certification).
      </p>

      <h2>6. Locally Hosted Fonts</h2>
      <p>
        The fonts used on this website (Inter and Playfair Display) are self-hosted locally. No external connections to Google Fonts servers are established and no visitor IP addresses are transmitted to Google.
      </p>

      <h2>7. Storage Period and Deletion</h2>
      <p>
        Personal data is deleted as soon as it is no longer required for the purpose for which it was collected, unless statutory retention periods (in particular 6 or 10 years under German commercial and tax law, Section 257 HGB / Section 147 AO) require longer storage.
      </p>

      <h2>8. Your Rights under the GDPR</h2>
      <p>
        Under the GDPR, you have the right to access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20), and to withdraw consent at any time (Art. 7(3) GDPR).
      </p>
      <p>
        <strong>Right to Object (Art. 21 GDPR):</strong> Where we process your data based on legitimate interests (Art. 6(1)(f) GDPR), you have the right to object at any time on grounds relating to your particular situation.
      </p>
      <p>
        <strong>Right to Lodge a Complaint (Art. 77 GDPR):</strong> You have the right to lodge a complaint with a supervisory authority. The competent authority for Munich is:<br />
        Bavarian Data Protection Authority (BayLDA), Promenade 18, 91522 Ansbach, Germany.
      </p>

      <h2>9. Data Security and Updates</h2>
      <p>
        This website uses TLS/SSL encryption to protect transmitted enquiries. We update this Privacy Policy whenever legal or technical requirements change.
      </p>
      <p>
        Last updated: November 2026 · <a href={url('/impressum')}>Legal Notice</a> · <a href={url('/agb')}>Terms and Conditions</a>
      </p>
    </div>
  );
}

function TermsDe({ company, url }) {
  return (
    <div lang="de">
      <h2>§ 1 Geltungsbereich und Vertragspartner</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für sämtliche Verträge, Angebote und Leistungen der <strong>{company.name}</strong>, {company.address} (nachfolgend „Auftragnehmer“), gegenüber gewerblichen Kunden (Unternehmern im Sinne des § 14 BGB) sowie privaten Auftraggebern (Verbrauchern im Sinne des § 13 BGB) in den Bereichen Gebäudereinigung, Regalservice (Warenverräumung) und haushaltsnahe Dienstleistungen.
      </p>
      <p>
        Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers werden nur dann Vertragsbestandteil, wenn ihrer Geltung ausdrücklich schriftlich oder in Textform zugestimmt wurde.
      </p>

      <h2>§ 2 Angebot, Preisrechner und Vertragsschluss</h2>
      <p>
        Die Darstellung der Leistungen auf unserer Website sowie unverbindliche Kalkulationen über den Haushalts-Preisrechner stellen kein rechtlich bindendes Angebot dar, sondern eine Aufforderung zur Abgabe einer Anfrage.
      </p>
      <p>
        Ein Vertrag kommt erst durch unsere schriftliche oder in Textform (z. B. per E-Mail) übermittelte Auftragsbestätigung oder durch Beginn der vereinbarten Leistungsausführung zustande.
      </p>

      <h2>§ 3 Leistungsumfang, Sorgfalt und Arbeitsmittel</h2>
      <p>
        Art, Umfang, Turnus und Ausführungszeiten der Leistungen richten sich nach dem jeweiligen Einzelauftrag bzw. Leistungsverzeichnis. Der Auftragnehmer erbringt die Leistungen fachgerecht, sorgfältig und durch eingewiesenes Personal.
      </p>
      <p>
        Sofern nicht ausdrücklich anders vereinbart, stellt der Auftragnehmer die erforderlichen Reinigungs- und Arbeitsmittel zur Verfügung. Bei haushaltsnahen Dienstleistungen sowie im Regalservice gelten die im Angebot festgelegten Regelungen zur Bereitstellung von Materialien und Hilfsmitteln.
      </p>

      <h2>§ 4 Mitwirkungspflichten des Auftraggebers</h2>
      <p>
        Der Auftraggeber stellt sicher, dass das Personal des Auftragnehmers zum vereinbarten Termin ungehinderten Zugang zu den betreffenden Räumlichkeiten, Flächen oder Verkaufsbereichen erhält. Erforderliche Anschlüsse für Strom und Wasser sind unentgeltlich zur Verfügung zu stellen.
      </p>
      <p>
        Der Auftraggeber hat vor Leistungsbeginn auf besondere Materialempfindlichkeiten, Sicherheitsvorgaben oder Gefahrenquellen ausdrücklich hinzuweisen.
      </p>

      <h2>§ 5 Vergütung, Preise und Zahlungsbedingungen</h2>
      <p>
        Es gelten die im jeweiligen Angebot bzw. Vertrag vereinbarten Preise. Gegenüber Unternehmern verstehen sich alle Preise zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer; gegenüber Verbrauchern werden Bruttopreise inklusive gesetzlicher Umsatzsteuer ausgewiesen.
      </p>
      <p>
        Rechnungen sind – sofern nichts anderes vereinbart ist – innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen (§ 288 BGB).
      </p>

      <h2>§ 6 Termine, Terminänderungen und Stornierung</h2>
      <p>
        Vereinbarte Einsatztermine sind verbindlich. Eine kostenfreie Verschiebung oder Stornierung eines Einzeltermins durch den Auftraggeber ist bis spätestens 24 Stunden vor dem vereinbarten Termin möglich. Bei späterer Absage oder fehlendem Zugang vor Ort behält sich der Auftragnehmer vor, den entstandenen Aufwand in angemessenem Umfang zu berechnen, sofern der Auftraggeber die Verhinderung nicht zu vertreten hat oder einen geringeren Schaden nachweist.
      </p>
      <p>
        Bei wiederkehrenden Leistungsverträgen gelten die individuell vereinbarten Laufzeiten und Kündigungsfristen; mangels abweichender Vereinbarung gilt eine Kündigungsfrist von einem Monat zum Monatsende.
      </p>

      <h2>§ 7 Abnahme und Mängelansprüche</h2>
      <p>
        Offensichtliche Mängel sind dem Auftragnehmer unverzüglich, möglichst unmittelbar nach Leistungserbringung bzw. spätestens innerhalb von 48 Stunden in Textform anzuzeigen, damit eine Überprüfung und Nachbesserung erfolgen kann.
      </p>
      <p>
        Bei berechtigten Mängelrügen hat der Auftragnehmer zunächst das Recht zur kostenfreien Nachbesserung innerhalb angemessener Frist. Im Übrigen gelten die gesetzlichen Gewährleistungsrechte.
      </p>

      <h2>§ 8 Haftung und Betriebshaftpflichtversicherung</h2>
      <p>
        Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie bei Vorsatz und grober Fahrlässigkeit.
      </p>
      <p>
        Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht), deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Auftraggeber regelmäßig vertrauen darf; in diesem Fall ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.
      </p>
      <p>
        Für die Tätigkeit besteht eine Betriebshaftpflichtversicherung bei der {company.insurer}.
      </p>

      <h2>§ 9 Widerrufsrecht für Verbraucher</h2>
      <p>
        Verbrauchern (§ 13 BGB) steht bei Verträgen, die außerhalb von Geschäftsräumen oder ausschließlich über Fernkommunikationsmittel (z. B. per E-Mail oder Telefon) geschlossen werden, grundsätzlich ein gesetzliches 14-tägiges Widerrufsrecht nach §§ 312g, 355 BGB zu.
      </p>
      <p>
        Das Widerrufsrecht erlischt vorzeitig, wenn der Auftragnehmer die Dienstleistung vollständig erbracht hat und mit der Ausführung erst begonnen hat, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben und gleichzeitig seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung verliert (§ 356 Abs. 4 BGB).
      </p>

      <h2>§ 10 Datenschutz</h2>
      <p>
        Informationen zur Verarbeitung personenbezogener Daten im Rahmen von Anfragen und Vertragsdurchführungen finden Sie in unserer <a href={url('/datenschutz')}>Datenschutzerklärung</a>.
      </p>

      <h2>§ 11 Schlussbestimmungen, Gerichtsstand und Streitbeilegung</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der durch zwingende Bestimmungen des Rechts des Staates des gewöhnlichen Aufenthalts gewährte Schutz entzogen wird.
      </p>
      <p>
        Ist der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand München.
      </p>
      <p>
        Hinweis gemäß § 36 VSBG: Der Auftragnehmer ist weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <p>
        Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
      </p>
      <p>
        Stand: November 2026 · <a href={url('/impressum')}>Impressum</a> · <a href={url('/datenschutz')}>Datenschutz</a>
      </p>
    </div>
  );
}

function TermsEn({ company, url }) {
  return (
    <div lang="en">
      <h2>1. Scope and Contracting Parties</h2>
      <p>
        These General Terms and Conditions (GTC) apply to all contracts, quotations and services provided by <strong>{company.name}</strong>, {company.address} (hereinafter the “Contractor”), to business clients (entrepreneurs within the meaning of Section 14 BGB) and private clients (consumers within the meaning of Section 13 BGB) in the areas of building cleaning, retail shelf services and household support.
      </p>
      <p>
        Deviating or supplementary terms and conditions of the client shall only become part of the contract if expressly agreed in writing or text form.
      </p>

      <h2>2. Quotations, Cost Calculator and Conclusion of Contract</h2>
      <p>
        Service descriptions on this website and non-binding estimates generated by the household cost calculator do not constitute a legally binding offer, but an invitation to submit an enquiry.
      </p>
      <p>
        A contract is concluded only upon our written or text-form order confirmation (e.g. by email) or upon commencement of the agreed services.
      </p>

      <h2>3. Scope of Services and Equipment</h2>
      <p>
        The type, scope, frequency and schedule of services are governed by the respective individual order or service specification. The Contractor performs all services professionally and carefully using instructed personnel.
      </p>
      <p>
        Unless expressly agreed otherwise, the Contractor provides the necessary cleaning agents and equipment. For household and shelf services, the arrangements set out in the individual offer apply.
      </p>

      <h2>4. Client Cooperation Duties</h2>
      <p>
        The client shall ensure unobstructed access to the premises, areas or retail spaces at the agreed time and provide required electricity and water connections free of charge.
      </p>
      <p>
        The client must inform the Contractor prior to commencement of work of any sensitive surfaces, safety rules or specific hazards.
      </p>

      <h2>5. Remuneration and Payment Terms</h2>
      <p>
        The prices agreed in the individual quotation or contract apply. Prices quoted to business clients are net plus statutory VAT; prices quoted to consumers include statutory VAT.
      </p>
      <p>
        Unless agreed otherwise, invoices are payable without deduction within 14 days of the invoice date. Statutory default interest applies in the event of late payment (Section 288 BGB).
      </p>

      <h2>6. Appointments and Cancellation</h2>
      <p>
        Agreed service dates are binding. Individual appointments may be rescheduled or cancelled free of charge up to 24 hours prior to the agreed start time. In the event of late cancellation or lack of access on site, the Contractor reserves the right to charge reasonable expenses incurred, unless the client is not responsible or proves lower damages.
      </p>

      <h2>7. Acceptance and Warranty</h2>
      <p>
        Obvious defects must be reported to the Contractor promptly, ideally immediately after service delivery and no later than 48 hours in text form, so that inspection and rectification can be carried out. In the event of justified defects, the Contractor is entitled to remedy the defect free of charge within a reasonable period.
      </p>

      <h2>8. Liability and Insurance</h2>
      <p>
        The Contractor is liable without limitation for injury to life, body or health as well as in cases of intent and gross negligence. In the event of slight negligence, liability is limited to foreseeable, contract-typical damages resulting from the breach of essential contractual obligations (cardinal duties).
      </p>
      <p>
        The Contractor maintains public and professional liability insurance with {company.insurer}.
      </p>

      <h2>9. Consumer Right of Withdrawal</h2>
      <p>
        Consumers (Section 13 BGB) generally have a statutory 14-day right of withdrawal for contracts concluded off-premises or via distance communication (Sections 312g, 355 BGB). This right expires prematurely once the Contractor has fully performed the service after the consumer expressly consented to commencement and acknowledged the loss of the right of withdrawal upon full performance (Section 356(4) BGB).
      </p>

      <h2>10. Data Protection</h2>
      <p>
        Information on how personal data is processed is set out in our <a href={url('/datenschutz')}>Privacy Policy</a>.
      </p>

      <h2>11. Governing Law, Jurisdiction and Dispute Resolution</h2>
      <p>
        The laws of the Federal Republic of Germany apply, excluding the UN Convention on Contracts for the International Sale of Goods (CISG). For merchants, legal entities under public law or special funds under public law, the exclusive place of jurisdiction is Munich.
      </p>
      <p>
        Notice pursuant to Section 36 VSBG: The Contractor is neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.
      </p>
      <p>
        Last updated: November 2026 · <a href={url('/impressum')}>Legal Notice</a> · <a href={url('/datenschutz')}>Privacy Policy</a>
      </p>
    </div>
  );
}
