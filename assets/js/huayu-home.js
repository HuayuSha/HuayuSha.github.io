document.addEventListener('DOMContentLoaded', () => {
  const homeShell = document.querySelector('.home-shell');
  if (!homeShell) {
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;

  const updateCursorGradient = (x, y) => {
    root.style.setProperty('--cursor-x', `${(x / window.innerWidth) * 100}%`);
    root.style.setProperty('--cursor-y', `${(y / window.innerHeight) * 100}%`);
  };

  updateCursorGradient(window.innerWidth * 0.68, window.innerHeight * 0.16);
  window.addEventListener('pointermove', (event) => updateCursorGradient(event.clientX, event.clientY), { passive: true });

  const revealItems = Array.from(document.querySelectorAll('.reveal'));
  if (!reduceMotion && revealItems.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
      observer.observe(item);
    });
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  if (reduceMotion) {
    return;
  }

  document.querySelectorAll('.interactive-card').forEach((card) => {
    const reset = () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    };

    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 10;
      const rotateX = (0.5 - y) * 10;
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.style.boxShadow = '0 28px 70px rgba(2, 8, 23, 0.34)';
    });

    card.addEventListener('pointerleave', reset);
    card.addEventListener('pointercancel', reset);
  });
});
