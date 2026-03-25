document.addEventListener('DOMContentLoaded', () => {
  const homeShell = document.querySelector('.home-shell');
  if (!homeShell) {
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = Array.from(document.querySelectorAll('.reveal'));
  const interactiveBackground = document.querySelector('.prism-interactive-bg');
  const interactiveCards = Array.from(document.querySelectorAll('.prism-profile-card, .prism-side-card, .prism-content-card, .prism-paper-card'));
  const pagePet = document.querySelector('.prism-page-pet');

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

  let targetX = window.innerWidth * 0.6;
  let targetY = Math.min(window.innerHeight * 0.24, 260);
  let currentX = targetX;
  let currentY = targetY;
  let trailX = targetX;
  let trailY = targetY;
  let rafId = null;

  const backgroundStyle = interactiveBackground ? interactiveBackground.style : null;

  const animatePointer = () => {
    currentX += (targetX - currentX) * 0.18;
    currentY += (targetY - currentY) * 0.18;
    trailX += (currentX - trailX) * 0.1;
    trailY += (currentY - trailY) * 0.1;

    if (backgroundStyle) {
      backgroundStyle.setProperty('--pointer-x', `${currentX}px`);
      backgroundStyle.setProperty('--pointer-y', `${currentY}px`);
      backgroundStyle.setProperty('--pointer-trail-x', `${trailX}px`);
      backgroundStyle.setProperty('--pointer-trail-y', `${trailY}px`);
    }

    if (pagePet) {
      updatePetGaze(currentX, currentY);
    }

    const active =
      Math.abs(targetX - currentX) > 0.2 ||
      Math.abs(targetY - currentY) > 0.2 ||
      Math.abs(currentX - trailX) > 0.2 ||
      Math.abs(currentY - trailY) > 0.2;

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

  const updatePetGaze = (x, y) => {
    if (!pagePet) {
      return;
    }

    const bounds = pagePet.getBoundingClientRect();
    const centerX = bounds.left + bounds.width * 0.5;
    const centerY = bounds.top + bounds.height * 0.42;
    const dx = x - centerX;
    const dy = y - centerY;
    const distance = Math.max(Math.hypot(dx, dy), 1);
    const clamp = (value, max) => Math.max(-max, Math.min(max, value));

    const lookX = clamp((dx / distance) * 7.5, 7.5);
    const lookY = clamp((dy / distance) * 5.5, 5.5);
    const tiltX = clamp(dx / window.innerWidth, 0.14);
    const tiltY = clamp(dy / window.innerHeight, 0.12);

    pagePet.style.setProperty('--pet-look-x', `${lookX.toFixed(2)}px`);
    pagePet.style.setProperty('--pet-look-y', `${lookY.toFixed(2)}px`);
    pagePet.style.setProperty('--pet-head-tilt', `${(tiltX * 10).toFixed(2)}deg`);
    pagePet.style.setProperty('--pet-body-tilt', `${(tiltX * -3.8).toFixed(2)}deg`);
    pagePet.style.setProperty('--pet-tilt-x', `${(tiltX * 12).toFixed(2)}deg`);
    pagePet.style.setProperty('--pet-tilt-y', `${(tiltY * -10).toFixed(2)}deg`);
    pagePet.style.setProperty('--pet-float-x', `${clamp(dx * 0.012, 8).toFixed(2)}px`);
    pagePet.style.setProperty('--pet-float-y', `${clamp(dy * 0.01, 6).toFixed(2)}px`);
  };

  updatePointerTarget(targetX, targetY);

  window.addEventListener('pointermove', (event) => {
    updatePointerTarget(event.clientX, event.clientY);
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    updatePointerTarget(window.innerWidth * 0.6, Math.min(window.innerHeight * 0.24, 260));
  });

  window.addEventListener('blur', () => {
    updatePointerTarget(window.innerWidth * 0.6, Math.min(window.innerHeight * 0.24, 260));
  });

  window.addEventListener('resize', () => {
    updatePointerTarget(
      Math.min(targetX, window.innerWidth - 24),
      Math.min(targetY, window.innerHeight - 24)
    );
  }, { passive: true });

  interactiveCards.forEach((card) => {
    if (reduceMotion) {
      card.classList.remove('is-interactive');
      return;
    }

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

  if (pagePet) {
    let petResetTimer = null;

    if (reduceMotion) {
      pagePet.classList.add('is-reduced-motion');
    }

    pagePet.addEventListener('click', () => {
      pagePet.classList.remove('is-celebrating');
      void pagePet.offsetWidth;
      pagePet.classList.add('is-celebrating');
      pagePet.setAttribute('aria-label', 'Mascot companion says hi');

      window.clearTimeout(petResetTimer);
      petResetTimer = window.setTimeout(() => {
        pagePet.classList.remove('is-celebrating');
        pagePet.setAttribute('aria-label', 'Mascot companion');
      }, 1100);
    });

    pagePet.addEventListener('pointerenter', () => {
      pagePet.classList.add('is-alert');
    });

    pagePet.addEventListener('pointerleave', () => {
      pagePet.classList.remove('is-alert');
    });

    updatePetGaze(targetX, targetY);
  }
});
