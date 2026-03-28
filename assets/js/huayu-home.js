document.addEventListener('DOMContentLoaded', () => {
  const homeShell = document.querySelector('.home-shell');
  if (!homeShell) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchOnly  = window.matchMedia('(pointer: coarse)').matches &&
                       !window.matchMedia('(hover: hover)').matches;

  // ── Reveal animations ─────────────────────────────────
  const revealItems = Array.from(document.querySelectorAll('.reveal'));

  if (reduceMotion || !revealItems.length) {
    revealItems.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10 });

    revealItems.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 55, 260)}ms`;
      observer.observe(el);
    });
  }

  // ── Mouse follower cursor ──────────────────────────────
  if (!reduceMotion && !isTouchOnly) {
    initMouseFollower();
  }

  // ── Live2D click bounce ────────────────────────────────
  const live2dCanvas = document.getElementById('prism-live2d-canvas');
  if (live2dCanvas) {
    live2dCanvas.addEventListener('click', () => {
      live2dCanvas.classList.add('is-live2d-bouncing');
      setTimeout(() => live2dCanvas.classList.remove('is-live2d-bouncing'), 500);
    });
  }
});

function initMouseFollower() {
  if (!window.MouseFollower || !window.gsap) return;

  if (!window.__huayuMouseFollowerRegistered) {
    window.MouseFollower.registerGSAP(window.gsap);
    window.__huayuMouseFollowerRegistered = true;
  }

  if (window.__huayuCursor && typeof window.__huayuCursor.destroy === 'function') {
    window.__huayuCursor.destroy();
  }

  document.body.classList.add('has-mouse-follower');

  window.__huayuCursor = new window.MouseFollower({
    speed: 0.42,
    ease: 'expo.out',
    skewing: 0,
    hideOnLeave: false,
    visible: true,
    visibleOnState: false,
    stateDetection: {
      '-pointer': 'a, button, .prism-link-button, .masthead a, .archive__item a, .prism-tag-list span'
    }
  });
}
