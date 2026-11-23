import { Pic } from './Design';

export default function CleaningServicesGrid({ services, lang, isEn }) {
  return (
    <div className="ws-expertise-list" id="cleaning-services-grid">
      {services.map((s, i) => (
        <a
          href={s.href}
          key={s.slug}
          className="ws-expertise-card"
        >
          <div className="ws-expertise-img-wrap">
            <Pic lang={lang} name={s.photoKey} className={`ws-expertise-img ws-expertise-img-${s.photoKey}`} />
          </div>
          <div className="ws-expertise-body">
            <div className="ws-expertise-meta">
              <span className="ws-expertise-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="ws-expertise-dash" aria-hidden="true">—</span>
              <span className="ws-expertise-label">{isEn ? "CLEANING" : "REINIGUNG"}</span>
            </div>
            <h3 className="ws-expertise-card-title">{s.title}</h3>
            <p className="ws-expertise-card-desc">{s.summary}</p>
            <div className="ws-expertise-divider" aria-hidden="true" />
            <div className="ws-expertise-foot">
              <span className="ws-expertise-link">
                {isEn ? "Explore" : "Entdecken"}
                <span className="ws-expertise-link-arrow" aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
