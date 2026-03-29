document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  if (!body) return;

  const isInnerMotionPage =
    body.classList.contains('publication-page') || body.classList.contains('cv-page');
  if (!isInnerMotionPage) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const motionTargets = [
    ...document.querySelectorAll('.publication-prism-sidebar .reveal'),
    ...document.querySelectorAll('.page__content > h2, .page__content > h3, .page__content > p, .page__content > ul, .page__content > ol, .page__content > pre, .page__content > blockquote, .page__content > figure, .page__content > table, .page__content > .publication-links, .page__content > .publication-citation'),
    ...document.querySelectorAll('.page__inner-wrap > header'),
    ...document.querySelectorAll('.page__meta')
  ];

  const uniqueTargets = Array.from(new Set(motionTargets));
  uniqueTargets.forEach((el, index) => {
    el.classList.add('motion-item');
    el.style.transitionDelay = `${Math.min(index * 34, 220)}ms`;
  });

  if (reduceMotion) {
    uniqueTargets.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

    uniqueTargets.forEach(el => observer.observe(el));
  }

  const card = document.querySelector('.page');
  if (!card || reduceMotion) return;

  let ticking = false;
  let mx = 0;
  let my = 0;

  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    mx = ((event.clientX - rect.left) / rect.width) * 100;
    my = ((event.clientY - rect.top) / rect.height) * 100;
    if (ticking) return;

    ticking = true;
    requestAnimationFrame(() => {
      card.style.setProperty('--motion-x', `${mx}%`);
      card.style.setProperty('--motion-y', `${my}%`);
      ticking = false;
    });
  }, { passive: true });

  card.addEventListener('mouseleave', () => {
    card.style.removeProperty('--motion-x');
    card.style.removeProperty('--motion-y');
  });
});
