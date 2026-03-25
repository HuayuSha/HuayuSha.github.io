document.addEventListener('DOMContentLoaded', () => {
  const homeShell = document.querySelector('.home-shell');
  if (!homeShell) {
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchOnly = window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(hover: hover)').matches;
  const revealItems = Array.from(document.querySelectorAll('.reveal'));
  const live2dCanvas = document.getElementById('prism-live2d-canvas');
  const body = document.body;
  const basePath = body.dataset.basePath || '';

  if (reduceMotion || !revealItems.length) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 50, 220)}ms`;
      observer.observe(item);
    });
  }

  if (!reduceMotion && !isTouchOnly) {
    initMouseFollower();
  }

  if (!reduceMotion && !isTouchOnly && live2dCanvas && window.innerWidth >= 900) {
    initLive2D(live2dCanvas, basePath).catch((error) => {
      console.warn('Live2D init failed:', error);
    });
  }
});

function initMouseFollower() {
  if (!window.MouseFollower || !window.gsap) {
    return;
  }

  if (!window.__huayuMouseFollowerRegistered) {
    window.MouseFollower.registerGSAP(window.gsap);
    window.__huayuMouseFollowerRegistered = true;
  }

  if (window.__huayuCursor && typeof window.__huayuCursor.destroy === 'function') {
    window.__huayuCursor.destroy();
  }

  document.body.classList.add('has-mouse-follower');

  window.__huayuCursor = new window.MouseFollower({
    speed: 0.38,
    ease: 'expo.out',
    skewing: 0,
    hideOnLeave: false,
    visible: true,
    visibleOnState: false,
    stateDetection: {
      '-pointer': 'a, button, .prism-link-button, .masthead a, .archive__item a'
    }
  });
}

async function initLive2D(canvas, basePath) {
  if (!window.PIXI || !window.PIXI.live2d || !window.PIXI.live2d.Live2DModel) {
    return;
  }

  if (window.__huayuLive2dApp) {
    return;
  }

  const { Live2DModel } = window.PIXI.live2d;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const app = new window.PIXI.Application({
    view: canvas,
    autoStart: true,
    transparent: true,
    antialias: true,
    autoDensity: true,
    resolution: dpr,
    width: 280,
    height: 360
  });

  const model = await Live2DModel.from(`${basePath}/assets/lib/live2d/rice/Rice/Rice.model3.json`);
  app.stage.addChild(model);

  model.anchor.set(0.5, 1);
  model.eventMode = 'static';
  model.interactive = true;
  model.cursor = 'pointer';

  const updateLayout = () => {
    const compact = window.innerWidth < 1320;
    const width = compact ? 240 : 280;
    const height = compact ? 320 : 360;
    const scale = compact ? 0.165 : 0.19;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    app.renderer.resize(width, height);
    model.scale.set(scale);
    model.x = width * 0.5;
    model.y = height * 0.98;
  };

  updateLayout();

  window.addEventListener('pointermove', (event) => {
    const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
    const normalizedY = (event.clientY / window.innerHeight) * 2 - 1;
    if (typeof model.focus === 'function') {
      model.focus(normalizedX, -normalizedY, false);
    }
  }, { passive: true });

  model.on('hit', (hitAreas) => {
    const normalized = hitAreas.map((area) => String(area).toLowerCase());
    if (normalized.includes('body')) {
      model.motion('TapBody');
      canvas.classList.remove('is-live2d-bouncing');
      void canvas.offsetWidth;
      canvas.classList.add('is-live2d-bouncing');
      window.setTimeout(() => canvas.classList.remove('is-live2d-bouncing'), 700);
    }
  });

  window.addEventListener('resize', updateLayout, { passive: true });

  window.__huayuLive2dApp = app;
  window.__huayuLive2dModel = model;
}
