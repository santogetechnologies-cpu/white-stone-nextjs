import {language} from '../lib/language';
import WindowScene from './WindowScene';
import Navigation from './Navigation';

export default function Hero({lang='de'} = {}) {
  const {t, url} = language(lang);
  
  return (<section className="hero" id="startseite">
          <WindowScene />
          <Navigation lang={lang} home />
          <div className="hero-content container">
            <h1>
              {t("Klare")}
              <br />{' '}
              {t("Sicht.")}
            </h1>
            <p>
              {t("Professionelle Glasreinigung und")}
              <br />{' '}
              {t("Gebäudeservices für Gewerbe,")}
              <br />{' '}
              {t("Privat und Industrie.")}
            </p>
            <div className="hero-actions">
              <a className="button" href={url("/kontakt")}>
                {t("Angebot anfordern")}
                <svg>
                  <use href="#i-arrow" />
                </svg>
              </a>
              <a className="button button-outline" href={url("#leistungen")}>
                {t("Unsere Leistungen")}
                <span className="tiny-circle">
                  {"↓"}
                </span>
              </a>
            </div>
          </div>
          <div className="hero-bottom container">
            <nav className="service-tabs" aria-label={t("Unsere Bereiche")}>
              <a href={url("/reinigung/glas-und-fensterreinigung")} className="active">
                {t("Glasreinigung")}
              </a>
              <a href={url("/reinigung/buero-und-gebaeudereinigung")}>
                {t("Gebäudereinigung")}
              </a>
              <a href={url("/regalservice")}>
                {t("Regalservice")}
              </a>
              <a href={url("/haushalt")}>
                {t("Haushalt")}
              </a>
            </nav>
            <button className="animation-control" id="animation-control" aria-label={t("Wischanimation pausieren")} title={t("Animation pausieren")}>
              {"Ⅱ"}
            </button>
          </div>
        </section>);
}
