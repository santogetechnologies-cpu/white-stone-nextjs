import { WindowWaterSurface } from './water-surface';

/* Optical film, blade contact and gravity-driven runoff on the Munich window. */
export function initializeWindowCleaning(scene) {
  'use strict';
  const photo = scene.querySelector('.window-photo');
  const rig = scene.querySelector('#wiper');
  const button = scene.closest('.hero').querySelector('#animation-control');
  const canvas = scene.querySelector('#water');
  const surface = canvas.getContext('2d');
  const wetGlass = document.createElement('canvas');
  const film = wetGlass.getContext('2d');
  const water = new WindowWaterSurface(scene);
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  const sampleSpacing = 4;
  const duration = 19.5;
  const wipeDuration = 12.8;
  let paused = motionPreference.matches;
  let visible = true;
  let frameId = 0;
  let lastFrame = null;
  let time = 0;
  let previous = null;
  let bounds, projection, left, right, top, bladeWidth, scale, pixelRatio;
  let waterLoaded = false;
  let disposed = false;
  let sweptDepth = [];
  let streams = [];

  function sill(x) {
    // Inside bottom corners of the glass, measured in the supplied photograph.
    const sourceX = (x - projection.x) / projection.scale;
    return projection.y + (792 + (sourceX - 764) * 61 / 908) * projection.scale;
  }

  function clipPane(context) {
    context.beginPath();
    context.moveTo(left, top);
    context.lineTo(right, top);
    context.lineTo(right, sill(right));
    context.lineTo(left, sill(left));
    context.closePath();
    context.clip();
  }

  function drawPhoto(context, image, offsetX = 0, offsetY = 0) {
    context.drawImage(image, projection.x + offsetX, projection.y + offsetY,
      projection.width, projection.height);
  }

  function resetSurface() {
    film.clearRect(0, 0, bounds.width, bounds.height);
    film.save();
    clipPane(film);
    film.fillStyle = '#fff';
    film.fillRect(0, 0, bounds.width, bounds.height);
    film.restore();
    const columns = Math.ceil((right - left) / sampleSpacing) + 1;
    sweptDepth = new Float32Array(columns).fill(top);
    streams = [Array(columns), Array(columns)];
    previous = null;
    time = 0;
    lastFrame = null;
  }

  function resize() {
    if (!photo.naturalWidth || !waterLoaded) return;
    bounds = scene.getBoundingClientRect();
    const box = photo.getBoundingClientRect();
    const ratio = Math.max(box.width / photo.naturalWidth, box.height / photo.naturalHeight);
    const verticalPosition = parseFloat(getComputedStyle(photo).objectPosition.split(' ')[1]) / 100;
    const width = photo.naturalWidth * ratio;
    const height = photo.naturalHeight * ratio;
    projection = {scale: ratio, width, height,
      x: box.left - bounds.left + (box.width - width) / 2,
      y: box.top - bounds.top + (box.height - height) * verticalPosition};
    left = Math.max(0, projection.x + 764 * ratio);
    right = Math.min(bounds.width, projection.x + width);
    top = Math.max(0, projection.y);
    bladeWidth = (right - left) * .69;
    scale = bladeWidth / 1072;
    rig.style.width = (1959 * scale) + 'px';
    pixelRatio = Math.min(devicePixelRatio || 1, bounds.width <= 760 ? 1.25 : 1.6);
    for (const layer of [canvas, wetGlass]) {
      layer.width = Math.round(bounds.width * pixelRatio);
      layer.height = Math.round(bounds.height * pixelRatio);
    }
    film.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    surface.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    resetSurface();
    paint(0);
    updateButton();
    schedule();
  }

  // Positions are referenced to the left tip of the actual rubber edge.
  // Each pull begins at the top gasket. During the return the tool lifts off.
  const keys = [
    [0, .005, .28, 5], [.65, .005, .28, 5],
    [1.65, 0, -.105, -9], [1.95, 0, -.105, -9],
    [4.95, .012, .90, -8], [5.3, .018, .94, -8],
    [6.65, .338, -.14, -6], [6.95, .338, -.14, -6],
    [9.85, .33, .90, -8], [10.2, .33, .94, -8],
    [11.4, 1.18, 1.17, 2], [wipeDuration, 1.18, 1.17, 2]
  ];
  function positionTool() {
    let index = 1;
    while (index < keys.length - 1 && keys[index][0] < time) index++;
    const a = keys[index - 1], b = keys[index];
    const u = Math.min(1, (time - a[0]) / (b[0] - a[0]));
    const ease = u * u * (3 - 2 * u);
    const arc = Math.sin(Math.PI * u) ** 2;
    const moving = b[2] !== a[2];
    const lane = time >= 1.65 && time <= 5.3 ? 0 :
      (time >= 6.65 && time <= 10.2 ? 1 : -1);
    const x = left + (right - left) * (a[1] + (b[1] - a[1]) * ease
      + (moving && lane >= 0 ? .012 * arc : 0));
    const y = top + (sill(x) - top) * (a[2] + (b[2] - a[2]) * ease);
    const degrees = a[3] + (b[3] - a[3]) * ease + (moving ? arc * 1.3 : 0);
    const lift = lane < 0 ? .974 + .026 * (1 - arc) : 1;
    rig.style.filter = lane < 0
      ? 'drop-shadow(3px 10px 9px rgba(12,29,44,.20))'
      : 'drop-shadow(0px 2px 1px rgba(12,29,44,.16))';
    const contactScale = scale * lift;
    const angle = degrees * Math.PI / 180;
    const cosine = Math.cos(angle), sine = Math.sin(angle);
    rig.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(' + degrees
      + 'deg) scale(' + lift + ') translate(' + (-24 * scale) + 'px,' + (-19 * scale) + 'px)';
    return {lane, x, y,
      endX: x + contactScale * (1072 * cosine - 289 * sine),
      endY: y + contactScale * (1072 * sine + 289 * cosine)};
  }

  function sweep(edge) {
    if (previous && edge.lane >= 0 && previous.lane === edge.lane) {
      film.save();
      film.globalCompositeOperation = 'destination-out';
      film.beginPath();
      film.moveTo(previous.x, previous.y);
      film.lineTo(previous.endX, previous.endY);
      film.lineTo(edge.endX, edge.endY);
      film.lineTo(edge.x, edge.y);
      film.closePath();
      film.fill();
      film.lineWidth = 1;
      film.stroke();
      film.restore();
      const first = Math.max(0, Math.ceil((edge.x - left) / sampleSpacing));
      const last = Math.min(sweptDepth.length - 1, Math.floor((edge.endX - left) / sampleSpacing));
      for (let i = first; i <= last; i++) {
        const x = left + i * sampleSpacing;
        const contactY = edge.y + (edge.endY - edge.y) * (x - edge.x) / (edge.endX - edge.x);
        const depth = Math.min(sill(x), contactY);
        const gain = Math.max(0, depth - sweptDepth[i]);
        if (gain <= 0) continue;
        sweptDepth[i] = depth;
        const nodes = streams[edge.lane];
        const node = nodes[i] || (nodes[i] = {back: depth, front: depth, mass: 0, speed: 0, touch: 0});
        node.back = depth;
        node.mass += gain * .12;
        node.touch = time;
      }
    }
    previous = edge;
  }

  function runoff(nodes, dt) {
    let strip = [];
    function drawStrip() {
      if (strip.length < 2) { strip = []; return; }
      const sheet = new Path2D();
      const lip = new Path2D();
      sheet.moveTo(strip[0].x, strip[0].back);
      for (const n of strip) sheet.lineTo(n.x, n.back);
      for (let i = strip.length - 1; i >= 0; i--) sheet.lineTo(strip[i].x, strip[i].front);
      sheet.closePath();
      lip.moveTo(strip[0].x, strip[0].front);
      for (const n of strip) lip.lineTo(n.x, n.front);
      surface.save();
      surface.clip(sheet);
      // Extra water thickness refracts the real view again at the moving lip.
      drawPhoto(surface, photo, 1 * projection.scale, -3 * projection.scale);
      surface.fillStyle = 'rgba(101,155,174,.035)';
      surface.fill(sheet);
      surface.restore();
      surface.lineWidth = .7 * projection.scale;
      surface.strokeStyle = 'rgba(45,80,93,.22)';
      surface.stroke(lip);
      surface.save();
      surface.translate(0, -1.65 * projection.scale);
      surface.lineWidth = .7 * projection.scale;
      surface.strokeStyle = 'rgba(245,254,255,.48)';
      surface.stroke(lip);
      surface.restore();
      strip = [];
    }
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (!node) { if (strip.length) drawStrip(); continue; }
      const x = left + i * sampleSpacing;
      const channel = .5 + .5 * Math.sin(x * .056 / projection.scale + 1.7 * Math.sin(x * .019 / projection.scale));
      const attached = time - node.touch < .09;
      if (attached) {
        const tongue = node.mass * (.55 + 2.1 * channel ** 3);
        node.front = Math.max(node.back + .4 * node.mass, node.front +
          (node.back + tongue - node.front) * (1 - Math.exp(-18 * dt)));
      } else {
        node.speed += (360 + 160 * channel) * projection.scale * dt;
        node.front += node.speed * dt;
        node.back += node.speed * dt * 1.08;
      }
      if (node.back >= sill(x) || node.back > node.front) {
        nodes[i] = null;
        if (strip.length) drawStrip();
        continue;
      }
      strip.push({x, back: node.back, front: Math.min(node.front, sill(x))});
    }
    drawStrip();
  }

  function paint(dt) {
    const edge = positionTool();
    sweep(edge);
    surface.clearRect(0, 0, bounds.width, bounds.height);
    // A new connected rinse runs down the pane before the next pair of pulls.
    if (time > 15.5) {
      const rinseDepth = Math.min(1, (time - 15.5) / 3.0) * bounds.height;
      film.save();
      clipPane(film);
      film.fillStyle = '#fff';
      film.fillRect(0, 0, bounds.width, rinseDepth);
      film.restore();
    }
    water.render(wetGlass, projection, pixelRatio, time);
    surface.save();
    clipPane(surface);
    for (const stream of streams) runoff(stream, dt);
    surface.restore();
  }

  function schedule() {
    if (!disposed && !frameId && bounds && !paused && visible && !document.hidden && time < duration)
      frameId = requestAnimationFrame(animate);
  }
  function animate(now) {
    frameId = 0;
    if (paused || !visible || document.hidden) { lastFrame = null; return; }
    const dt = lastFrame === null ? 0 : Math.min((now - lastFrame) / 1000, .12);
    lastFrame = now;
    time = Math.min(duration, time + dt);
    paint(dt);
    if (time === duration) resetSurface();
    schedule();
  }
  function updateButton() {
    button.textContent = paused ? '▶' : 'Ⅱ';
    const english = document.documentElement.lang === 'en';
    button.title = paused ? (english ? 'Play window cleaning animation' : 'Wischanimation abspielen') : (english ? 'Pause window cleaning animation' : 'Wischanimation pausieren');
    button.setAttribute('aria-label', button.title);
  }
  const togglePlayback = () => {
    if (!bounds) return;
    if (time >= duration) { resetSurface(); paused = false; }
    else paused = !paused;
    lastFrame = null;
    updateButton();
    schedule();
  };
  button.addEventListener('click', togglePlayback);
  const changePreference = () => {
    paused = motionPreference.matches;
    lastFrame = null;
    updateButton();
    schedule();
  };
  motionPreference.addEventListener('change', changePreference);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    lastFrame = null;
    schedule();
  });
  visibilityObserver.observe(scene);
  const changeVisibility = () => { lastFrame = null; schedule(); };
  const sizeObserver = new ResizeObserver(resize);
  sizeObserver.observe(scene);
  Promise.all([photo.decode(), water.ready]).then(() => { if (!disposed) { waterLoaded = true; resize(); } }).catch(() => {
    if (!disposed) button.hidden = true;
  });
  document.addEventListener('visibilitychange', changeVisibility);
  return () => {
    disposed = true;
    cancelAnimationFrame(frameId);
    sizeObserver.disconnect();
    visibilityObserver.disconnect();
    button.removeEventListener('click', togglePlayback);
    motionPreference.removeEventListener('change', changePreference);
    document.removeEventListener('visibilitychange', changeVisibility);
    water.destroy();
  };
}
