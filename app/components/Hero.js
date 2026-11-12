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
          <div className="hero-bottom container" style={{ justifyContent: 'flex-end' }}>
            <button className="animation-control" id="animation-control" aria-label={t("Wischanimation pausieren")} title={t("Animation pausieren")}>
              {"Ⅱ"}
            </button>
          </div>
        </section>);
}
