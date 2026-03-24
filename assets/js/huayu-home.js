document.addEventListener('DOMContentLoaded', () => {
  const homeShell = document.querySelector('.home-shell');
  if (!homeShell) {
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = Array.from(document.querySelectorAll('.reveal'));
  const interactiveBackground = document.querySelector('.prism-interactive-bg');
  const interactiveCards = Array.from(document.querySelectorAll('.prism-profile-card, .prism-side-card, .prism-content-card, .prism-paper-card'));

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

  if (reduceMotion || !interactiveBackground) {
    interactiveCards.forEach((card) => card.classList.remove('is-interactive'));
    return;
  }

  let targetX = window.innerWidth * 0.58;
  let targetY = Math.min(window.innerHeight * 0.28, 320);
  let currentX = targetX;
  let currentY = targetY;
  let trailX = targetX;
  let trailY = targetY;
  let rafId = null;

  const rootStyle = document.documentElement.style;

  const animatePointer = () => {
    currentX += (targetX - currentX) * 0.16;
    currentY += (targetY - currentY) * 0.16;
    trailX += (currentX - trailX) * 0.08;
    trailY += (currentY - trailY) * 0.08;

    rootStyle.setProperty('--pointer-x', `${currentX}px`);
    rootStyle.setProperty('--pointer-y', `${currentY}px`);
    rootStyle.setProperty('--pointer-trail-x', `${trailX}px`);
    rootStyle.setProperty('--pointer-trail-y', `${trailY}px`);

    const active =
      Math.abs(targetX - currentX) > 0.25 ||
      Math.abs(targetY - currentY) > 0.25 ||
      Math.abs(currentX - trailX) > 0.25 ||
      Math.abs(currentY - trailY) > 0.25;

    if (active) {
      rafId = window.requestAnimationFrame(animatePointer);
    } else {
      rafId = null;
    }
  };

  const schedulePointerUpdate = () => {
    if (!rafId) {
      rafId = window.requestAnimationFrame(animatePointer);
    }
  };

  const updatePointerTarget = (x, y) => {
    targetX = x;
    targetY = y;
    schedulePointerUpdate();
  };

  updatePointerTarget(targetX, targetY);

  window.addEventListener('mousemove', (event) => {
    updatePointerTarget(event.clientX, event.clientY);
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    updatePointerTarget(window.innerWidth * 0.58, Math.min(window.innerHeight * 0.28, 320));
  });

  window.addEventListener('blur', () => {
    updatePointerTarget(window.innerWidth * 0.58, Math.min(window.innerHeight * 0.28, 320));
  });

  window.addEventListener('resize', () => {
    updatePointerTarget(
      Math.min(targetX, window.innerWidth - 24),
      Math.min(targetY, window.innerHeight - 24)
    );
  }, { passive: true });

  interactiveCards.forEach((card) => {
    card.classList.add('is-interactive');

    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      const glowX = event.clientX - bounds.left;
      const glowY = event.clientY - bounds.top;

      card.style.setProperty('--card-glow-x', `${glowX}px`);
      card.style.setProperty('--card-glow-y', `${glowY}px`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.removeProperty('--card-glow-x');
      card.style.removeProperty('--card-glow-y');
    });
  });
});
