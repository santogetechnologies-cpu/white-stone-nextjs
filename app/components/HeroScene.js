/** Hero-Hintergrund: Foto (Handtücher, Pflanze, Fenster) mit animierter Welle am unteren Rand. */
export default function HeroScene() {
    return (<div className="hero-scene" aria-hidden="true">
        <picture>
            <source media="(max-width: 760px)" srcSet="/fotografie/hero-hintergrund-mobil.webp" />
            <img className="hero-photo" src="/fotografie/hero-hintergrund.webp" alt="" width="1672" height="941" fetchPriority="high" decoding="async" />
        </picture>
        <div className="hero-fade" />
        <svg className="hero-waves" viewBox="0 0 1440 220" preserveAspectRatio="none">
            <defs>
                <linearGradient id="hw-a" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#7cc3ee" stopOpacity=".55" /><stop offset=".5" stopColor="#cfe9fb" stopOpacity=".8" /><stop offset="1" stopColor="#7cc3ee" stopOpacity=".55" />
                </linearGradient>
                <linearGradient id="hw-b" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#ffffff" stopOpacity=".95" /><stop offset=".5" stopColor="#eaf6fe" stopOpacity=".9" /><stop offset="1" stopColor="#ffffff" stopOpacity=".95" />
                </linearGradient>
                <linearGradient id="hw-shine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#ffffff" stopOpacity="0" /><stop offset=".5" stopColor="#ffffff" stopOpacity=".95" /><stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
            </defs>
            {/* jede Welle ist zweimal hintereinander gezeichnet, damit die Bewegung nahtlos läuft */}
            <g className="hw-layer hw-back"><path d="M0 120C240 60 480 60 720 110S1200 170 1440 120 1920 60 2160 110 2640 170 2880 120V220H0z" fill="url(#hw-a)" /></g>
            <g className="hw-layer hw-mid"><path d="M0 150C200 110 520 105 720 140S1240 190 1440 150 1960 105 2160 140 2680 190 2880 150V220H0z" fill="#bfe1f7" opacity=".55" /></g>
            <g className="hw-layer hw-front"><path d="M0 178C260 150 460 150 720 172S1180 200 1440 178 1900 150 2160 172 2620 200 2880 178V220H0z" fill="url(#hw-b)" /></g>
            <path className="hw-shine" d="M0 120C240 60 480 60 720 110S1200 170 1440 120" fill="none" stroke="url(#hw-shine)" strokeWidth="3" />
        </svg>
    </div>);
}
