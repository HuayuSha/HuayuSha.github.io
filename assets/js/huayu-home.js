document.addEventListener('DOMContentLoaded', () => {
  const homeShell = document.querySelector('.home-shell');
  if (!homeShell) {
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchOnly = window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(hover: hover)').matches;
  const revealItems = Array.from(document.querySelectorAll('.reveal'));

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
