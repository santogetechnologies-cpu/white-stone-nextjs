export default function HeroScene() {
    return (<div className="hero-scene" aria-hidden="true">
        <svg viewBox="0 0 720 360" preserveAspectRatio="xMaxYMax slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="hs-bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#f4f9fe" /><stop offset="1" stopColor="#dcebf8" />
                </linearGradient>
                <linearGradient id="hs-bottle" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#7fc4f2" /><stop offset=".5" stopColor="#d4efff" /><stop offset="1" stopColor="#6fb8ea" />
                </linearGradient>
                <linearGradient id="hs-wave" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#9fd0f0" stopOpacity=".7" /><stop offset="1" stopColor="#e8f4fd" stopOpacity=".9" />
                </linearGradient>
                <linearGradient id="hs-towel" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#e6eff7" />
                </linearGradient>
                <filter id="hs-blur"><feGaussianBlur stdDeviation="2.2" /></filter>
            </defs>
            <rect width="720" height="360" fill="url(#hs-bg)" />
            {/* arched window */}
            <g opacity=".5" fill="#fff" stroke="#c9dff0" strokeWidth="3">
                <path d="M420 300V120a95 95 0 0 1 190 0v180z" />
                <path d="M515 25v275M420 130h190M420 215h190" fill="none" />
                <path d="M640 300V90a60 60 0 0 1 80-50v260z" />
            </g>
            <g fill="#fff" opacity=".55" filter="url(#hs-blur)"><ellipse cx="560" cy="170" rx="120" ry="150" /></g>
            {/* bottom waves */}
            <path d="M0 300C90 275 200 270 320 290S560 318 720 285V360H0z" fill="url(#hs-wave)" />
            <path d="M0 322C120 300 260 306 380 322S600 340 720 316V360H0z" fill="#fff" opacity=".8" />
            {/* towels */}
            <g>
                <rect x="520" y="238" width="170" height="26" rx="8" fill="url(#hs-towel)" stroke="#d6e4ef" />
                <rect x="526" y="262" width="164" height="26" rx="8" fill="url(#hs-towel)" stroke="#d6e4ef" />
                <rect x="522" y="286" width="170" height="28" rx="8" fill="url(#hs-towel)" stroke="#d6e4ef" />
                <g stroke="#5fa8e6" strokeWidth="3" strokeLinecap="round" opacity=".85">
                    <path d="M640 244v14M650 244v14M660 244v14" />
                    <path d="M640 268v14M650 268v14M660 268v14" />
                    <path d="M640 292v16M650 292v16M660 292v16" />
                </g>
            </g>
            {/* plant */}
            <g>
                <path d="M604 238h54l-6 -42h-42z" fill="#fff" stroke="#d6e4ef" />
                <g fill="#3f9a3c">
                    <path d="M631 196C600 190 586 160 596 132c30 4 44 34 35 64z" />
                    <path d="M631 196C650 170 676 160 700 168c-8 28-38 40-69 28z" />
                    <path d="M631 196C628 160 640 130 662 112c14 26 6 62-31 84z" />
                    <path d="M631 196c-22 4-46 0-62-16 14-14 44-14 62 16z" fill="#58b04a" />
                </g>
                <path d="M631 196V150M631 190l35-28M631 190l-28-40" stroke="#2c7a31" strokeWidth="2" fill="none" />
            </g>
            {/* spray bottle */}
            <g>
                <ellipse cx="480" cy="318" rx="42" ry="7" fill="#9bbfd8" opacity=".35" />
                <path d="M452 190c-6 8-8 14-8 24v96c0 8 6 12 14 12h44c8 0 14-4 14-12v-96c0-10-2-16-8-24z" fill="url(#hs-bottle)" stroke="#8ec6ec" strokeWidth="1.5" />
                <path d="M450 262c14-7 30 6 46 0s14-4 24-2v50c0 8-6 12-14 12h-44c-8 0-14-4-14-12z" fill="#5db0ea" opacity=".55" />
                <rect x="456" y="174" width="44" height="18" rx="4" fill="#eef5fb" stroke="#d3e2ee" />
                <path d="M456 176l-4-30c-2-12 4-22 18-24l52-6c6-1 10 3 10 8v8c0 4-3 6-8 6h-30l-6 12v26z" fill="#f6fafd" stroke="#d3e2ee" strokeWidth="1.5" />
                <path d="M520 130h12l-2 14h-10z" fill="#e1ebf3" />
                <path d="M452 224c6-2 6-4 10-4" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".7" />
            </g>
        </svg>
    </div>);
}
