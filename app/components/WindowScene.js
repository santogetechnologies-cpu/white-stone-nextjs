'use client';

import { useEffect, useRef } from 'react';
import { initializeWindowCleaning } from '../lib/window-cleaning';

export default function WindowScene() {
  const sceneRef = useRef(null);

  useEffect(() => initializeWindowCleaning(sceneRef.current), []);

  return (
    <div className="window-scene" ref={sceneRef} aria-hidden="true">
      <img className="window-photo" src="/assets/window.webp" alt="" fetchPriority="high" />
      <canvas id="water" />
      <div className="wiper-rig" id="wiper">
        <img src="/assets/gripped-squeegee.webp" alt="" />
      </div>
    </div>
  );
}
