'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

function LogoMotionSvg() {
  return (
    <svg
      className="ws-page-loader-svg"
      viewBox="-60 -76 1700 1700"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="White Stone GmbH logo animation"
    >
      <defs>
        <path
          id="ws-l-upper-arc"
          d="M284 323 C414 175 598 100 793 106 C1117 111 1392 347 1437 683 Q1468 686 1469 716 L1469 755 H1183 V717 Q1183 690 1212 683 C1180 478 1039 308 846 236 C651 163 448 193 284 323 Z"
        />
        <path
          id="ws-l-lower-arc"
          d="M284 1221 C465 1351 680 1380 879 1302 C1055 1233 1179 1072 1212 867 Q1183 859 1183 835 V791 H1469 V835 Q1469 861 1437 867 C1391 1187 1117 1434 793 1441 C592 1447 409 1370 284 1221 Z"
        />
        <path
          id="ws-l-crescent"
          d="M861 302 C649 203 411 260 253 433 C66 641 65 915 253 1119 C412 1293 646 1351 861 1247 C663 1313 454 1237 325 1080 C175 897 180 645 322 462 C454 292 660 238 861 302 Z"
        />
        <path
          id="ws-l-violet-mark"
          d="M473 565 H603 L666 785 L741 565 H845 L882 687 L730 732 L762 767 Q689 847 578 889 Z"
        />
        <path
          id="ws-l-green-mark"
          d="M622 980 Q741 926 830 832 L858 858 L895 720 L917 785 L983 565 H1108 L975 980 Z"
        />
        <clipPath id="ws-l-core-clip">
          <use href="#ws-l-violet-mark" />
          <use href="#ws-l-green-mark" />
        </clipPath>
        <radialGradient id="ws-l-arc-glint" gradientUnits="userSpaceOnUse" cx="1160" cy="297" r="430">
          <stop stopColor="#edfff8" stopOpacity=".43" />
          <stop offset="1" stopColor="#edfff8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ws-l-reflection" gradientUnits="userSpaceOnUse" x1="720" y1="775" x2="859" y2="826">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset=".5" stopColor="white" stopOpacity=".37" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="orbit">
        <use href="#ws-l-upper-arc" className="green" />
        <use href="#ws-l-lower-arc" className="violet" />
        <use href="#ws-l-crescent" className="violet" />
        <g fill="url(#ws-l-arc-glint)">
          <use href="#ws-l-upper-arc" />
          <use href="#ws-l-lower-arc" />
          <use href="#ws-l-crescent" />
        </g>
        <g fill="none" stroke="#ffffff" strokeLinecap="round" strokeWidth="15">
          <path d="M843 144 C1094 177 1305 369 1379 612" />
          <path d="M843 1403 C1096 1368 1309 1182 1379 936" />
        </g>
      </g>
      <use href="#ws-l-violet-mark" className="violet" />
      <use href="#ws-l-green-mark" className="green" />
      <g clipPath="url(#ws-l-core-clip)">
        <rect className="sheen" x="-120" y="520" width="1850" height="520" fill="url(#ws-l-reflection)" />
      </g>
    </svg>
  );
}

export default function PageTransitionLoader() {
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState('idle'); // 'idle' | 'active' | 'fading'

  const startTimeRef = useRef(0);
  const finishTimeoutRef = useRef(null);
  const safetyTimeoutRef = useRef(null);
  const currentPathnameRef = useRef(pathname);
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    currentPathnameRef.current = pathname;
  }, [pathname]);

  const finishTransition = useCallback(() => {
    if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);
    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    isNavigatingRef.current = false;
    try {
      sessionStorage.removeItem('ws_pending_transition');
    } catch {}

    setStatus('fading');
    setTimeout(() => {
      setStatus('idle');
    }, 240);
  }, []);

  const startTransition = useCallback((targetUrl) => {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;

    const now = Date.now();
    startTimeRef.current = now;

    try {
      sessionStorage.setItem(
        'ws_pending_transition',
        JSON.stringify({ startTime: now, url: targetUrl })
      );
    } catch {}

    setStatus('active');

    // Trigger client-side route navigation immediately
    router.push(targetUrl);

    // Safety timeout: auto dismiss if navigation hangs or fails
    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    safetyTimeoutRef.current = setTimeout(() => {
      finishTransition();
    }, 2500);
  }, [router, finishTransition]);

  // When pathname updates to destination page
  useEffect(() => {
    if (status === 'active') {
      const elapsed = Date.now() - startTimeRef.current;
      const MIN_DURATION = 480; // approximately 0.5s (500ms)
      const remaining = Math.max(0, MIN_DURATION - elapsed);

      if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);
      finishTimeoutRef.current = setTimeout(() => {
        finishTransition();
      }, remaining);
    }
  }, [pathname, status, finishTransition]);

  // On mount check: restore transition if user switched layout/language
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('ws_pending_transition');
      if (raw) {
        const data = JSON.parse(raw);
        const elapsed = Date.now() - data.startTime;
        if (elapsed < 2000) {
          isNavigatingRef.current = true;
          startTimeRef.current = data.startTime;
          setStatus('active');
          const remaining = Math.max(0, 480 - elapsed);
          finishTimeoutRef.current = setTimeout(() => {
            finishTransition();
          }, remaining);
        } else {
          sessionStorage.removeItem('ws_pending_transition');
        }
      }
    } catch {}

    return () => {
      if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    };
  }, [finishTransition]);

  // Global listener for link clicks, button[data-href], and history navigation
  useEffect(() => {
    window.__wsNavigate = (url) => startTransition(url);

    const handleClick = (e) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      // 1. Check button with navigation target
      const btn = e.target.closest('button[data-href], [data-navigate]');
      if (btn) {
        const dest = btn.getAttribute('data-href') || btn.getAttribute('data-navigate');
        if (dest) {
          try {
            const destUrl = new URL(dest, window.location.href);
            if (
              destUrl.origin === window.location.origin &&
              (destUrl.pathname !== window.location.pathname ||
                destUrl.search !== window.location.search)
            ) {
              e.preventDefault();
              startTransition(destUrl.pathname + destUrl.search + destUrl.hash);
              return;
            }
          } catch {}
        }
      }

      // 2. Check anchor element
      const a = e.target.closest('a');
      if (!a) return;

      if (a.hasAttribute('download')) return;
      const target = a.getAttribute('target');
      if (target && target !== '_self') return;

      const href = a.getAttribute('href');
      if (
        !href ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:')
      ) {
        return;
      }

      let destUrl;
      try {
        destUrl = new URL(a.href, window.location.href);
      } catch {
        return;
      }

      // Only handle internal links
      if (destUrl.origin !== window.location.origin) return;

      // Same page and same query: purely an anchor jump or active link click
      if (
        destUrl.pathname === window.location.pathname &&
        destUrl.search === window.location.search
      ) {
        return;
      }

      // Close open modals / dialogs (e.g. mobile navigation drawer)
      try {
        const openDialogs = document.querySelectorAll('dialog[open]');
        openDialogs.forEach((d) => d.close());
      } catch {}

      e.preventDefault();
      const destination = destUrl.pathname + destUrl.search + destUrl.hash;
      startTransition(destination);
    };

    document.addEventListener('click', handleClick, { capture: true });

    // Handle browser Back / Forward buttons
    const handlePopState = () => {
      if (window.location.pathname !== currentPathnameRef.current) {
        startTimeRef.current = Date.now();
        isNavigatingRef.current = true;
        setStatus('active');
        if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
        safetyTimeoutRef.current = setTimeout(() => {
          finishTransition();
        }, 2500);
      }
    };
    window.addEventListener('popstate', handlePopState);

    // Wrap pushState for any programmatic calls
    const origPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      const url = args[2];
      if (url && typeof url === 'string') {
        try {
          const dest = new URL(url, window.location.href);
          if (
            dest.origin === window.location.origin &&
            (dest.pathname !== window.location.pathname ||
              dest.search !== window.location.search)
          ) {
            if (!isNavigatingRef.current) {
              isNavigatingRef.current = true;
              startTimeRef.current = Date.now();
              setStatus('active');
              if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
              safetyTimeoutRef.current = setTimeout(() => {
                finishTransition();
              }, 2500);
            }
          }
        } catch {}
      }
      return origPushState.apply(this, args);
    };

    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
      window.removeEventListener('popstate', handlePopState);
      window.history.pushState = origPushState;
      delete window.__wsNavigate;
    };
  }, [startTransition, finishTransition]);

  const isActive = status === 'active';
  const isFading = status === 'fading';

  return (
    <div
      className={`ws-page-loader${isActive ? ' is-active' : ''}${isFading ? ' is-fading-out' : ''}`}
      role="status"
      aria-live="polite"
      aria-hidden={status === 'idle'}
    >
      <div className="ws-page-loader-inner">
        <LogoMotionSvg />
      </div>
    </div>
  );
}
