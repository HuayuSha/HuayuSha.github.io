(function () {
  const root = document.documentElement;
  if (!root.classList.contains('site-intro-pending')) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function mountMask() {
    let mask = document.querySelector('.site-intro-mask');
    if (mask) return mask;

    mask = document.createElement('div');
    mask.className = 'site-intro-mask';
    mask.setAttribute('aria-hidden', 'true');
    document.body.appendChild(mask);
    return mask;
  }

  function clearIntroState(mask) {
    root.classList.remove('site-intro-pending');
    root.classList.remove('site-intro-transitioning');
    root.classList.add('site-intro-ready');
    if (mask && mask.parentNode) {
      mask.parentNode.removeChild(mask);
    }
  }

  function reveal(mask) {
    root.classList.add('site-intro-transitioning');
    requestAnimationFrame(() => {
      root.classList.remove('site-intro-pending');
      window.setTimeout(() => {
        root.classList.remove('site-intro-transitioning');
        root.classList.add('site-intro-ready');
        if (mask && mask.parentNode) {
          mask.parentNode.removeChild(mask);
        }
      }, 520);
    });
  }

  function whenPageLoaded() {
    if (document.readyState === 'complete') {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      window.addEventListener('load', resolve, { once: true });
    });
  }

  function whenFontsReady() {
    if (!document.fonts || !document.fonts.ready) {
      return Promise.resolve();
    }

    return Promise.race([
      document.fonts.ready,
      new Promise((resolve) => window.setTimeout(resolve, 450))
    ]);
  }

  function whenMinDelay(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  document.addEventListener('DOMContentLoaded', () => {
    const mask = mountMask();

    if (prefersReducedMotion) {
      clearIntroState(mask);
      return;
    }

    Promise.all([
      whenPageLoaded(),
      whenFontsReady(),
      whenMinDelay(220)
    ]).then(() => {
      reveal(mask);
    }).catch(() => {
      clearIntroState(mask);
    });
  });

  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return;
    const mask = document.querySelector('.site-intro-mask');
    clearIntroState(mask);
  });
})();
