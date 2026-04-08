document.addEventListener('DOMContentLoaded', () => {
  const homeShell = document.querySelector('.home-shell');
  if (!homeShell) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchOnly  = window.matchMedia('(pointer: coarse)').matches &&
                       !window.matchMedia('(hover: hover)').matches;

  // ── Scroll progress bar ────────────────────────────────
  initScrollProgress();

  // ── Reveal animations ─────────────────────────────────
  const revealItems = Array.from(document.querySelectorAll('.reveal'));

  if (reduceMotion || !revealItems.length) {
    revealItems.forEach(el => el.classList.add('is-visible'));
    triggerEntranceAnimations();
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        animateCardChildren(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });

    revealItems.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 65, 300)}ms`;
      observer.observe(el);
    });

    setTimeout(triggerEntranceAnimations, 80);
  }

  // ── Background parallax ────────────────────────────────
  if (!reduceMotion && !isTouchOnly) {
    initBgParallax();
  }

  // ── Draggable Live2D mascot ────────────────────────────
  if (!isTouchOnly) {
    initDraggableMascot();

    // ── Live2D click bounce ──────────────────────────────
    ['prism-live2d-canvas', 'live2d4'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('click', () => {
        el.classList.add('is-live2d-bouncing');
        setTimeout(() => el.classList.remove('is-live2d-bouncing'), 600);
      });
    });
  }
});


/* ── Scroll progress ──────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'prism-scroll-progress';
  document.body.appendChild(bar);

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const pct = window.scrollY /
        Math.max(1, document.documentElement.scrollHeight - window.innerHeight) * 100;
      bar.style.width = pct + '%';
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
}


/* ── Animate card children ───────────────────────────────── */
function animateCardChildren(card) {
  const socials = card.querySelector('.prism-socials');
  if (socials) socials.classList.add('is-animated');

  const tagList = card.querySelector('.prism-tag-list');
  if (tagList) {
    Array.from(tagList.children).forEach((span, i) => {
      span.style.animationDelay = `${i * 55 + 100}ms`;
    });
    tagList.classList.add('is-animated');
  }

  const interestList = card.querySelector('.prism-interest-list');
  if (interestList) {
    Array.from(interestList.children).forEach((li, i) => {
      li.style.setProperty('--line-delay', `${i * 80 + 120}ms`);
    });
    interestList.classList.add('is-animated');
  }

  const statusChips = card.querySelector('.prism-status-chips');
  if (statusChips) statusChips.classList.add('is-animated');

  const contactList = card.querySelector('.prism-contact-list');
  if (contactList) contactList.classList.add('is-animated');

  const statGrid = card.querySelector('.prism-stat-grid');
  if (statGrid) statGrid.classList.add('is-animated');

  const tagline = card.querySelector('.prism-tagline');
  if (tagline) tagline.classList.add('is-animated');

  const sectionHead = card.querySelector('.prism-section-head');
  if (sectionHead) sectionHead.classList.add('is-animated');
}

function triggerEntranceAnimations() {
  document.querySelectorAll(
    '.prism-profile-card, .prism-side-card, .prism-content-card'
  ).forEach(animateCardChildren);
}


/* ── Background parallax ─────────────────────────────────── */
function initBgParallax() {
  const spotOne = document.querySelector('.prism-bg-spot--one');
  const spotTwo = document.querySelector('.prism-bg-spot--two');
  if (!spotOne || !spotTwo) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let pointerTargetX = window.innerWidth * 0.52;
  let pointerTargetY = window.innerHeight * 0.28;
  let pointerX = pointerTargetX;
  let pointerY = pointerTargetY;
  let rafId = null;

  updatePointerVars();

  document.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    pointerTargetX = e.clientX;
    pointerTargetY = e.clientY;
    if (!rafId) rafId = requestAnimationFrame(tick);
  }, { passive: true });

  window.addEventListener('resize', () => {
    pointerTargetX = Math.min(pointerTargetX, window.innerWidth);
    pointerTargetY = Math.min(pointerTargetY, window.innerHeight);
    updatePointerVars();
  }, { passive: true });

  function updatePointerVars() {
    document.body.style.setProperty('--prism-pointer-x', `${(pointerX / Math.max(window.innerWidth, 1)) * 100}%`);
    document.body.style.setProperty('--prism-pointer-y', `${(pointerY / Math.max(window.innerHeight, 1)) * 100}%`);
  }

  function tick() {
    currentX += (targetX - currentX) * 0.055;
    currentY += (targetY - currentY) * 0.055;
    pointerX += (pointerTargetX - pointerX) * 0.085;
    pointerY += (pointerTargetY - pointerY) * 0.085;

    spotOne.style.transform = `translate(${currentX * 18}px, ${currentY * 14}px)`;
    spotTwo.style.transform = `translate(${-currentX * 12}px, ${-currentY * 10}px)`;
    updatePointerVars();

    rafId = (
      Math.abs(targetX - currentX) +
      Math.abs(targetY - currentY) +
      Math.abs(pointerTargetX - pointerX) / Math.max(window.innerWidth, 1) +
      Math.abs(pointerTargetY - pointerY) / Math.max(window.innerHeight, 1)
    ) > 0.001 ? requestAnimationFrame(tick) : null;
  }
}


/* ── Draggable Live2D mascot ─────────────────────────────── */
function initDraggableMascot() {
  // Find whichever canvas is rendered
  const mascot = document.getElementById('prism-live2d-canvas')
               || document.getElementById('live2d4')
               || document.querySelector('#waifu canvas');
  if (!mascot) return;

  // Make the container draggable
  const container = mascot.closest('#waifu') || mascot;

  // Saved position from localStorage
  const STORAGE_KEY = 'prism-mascot-pos';
  const saved = (() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch { return null; }
  })();

  // Apply saved position (convert from right/bottom to fixed coords)
  if (saved) {
    container.style.right  = saved.right  + 'px';
    container.style.bottom = saved.bottom + 'px';
    container.style.left   = 'auto';
    container.style.top    = 'auto';
  }

  let isDragging = false;
  let startX, startY, startRight, startBottom;

  container.style.cursor = 'grab';

  container.addEventListener('mousedown', (e) => {
    // Only drag on left button
    if (e.button !== 0) return;
    isDragging = true;
    container.classList.add('is-dragging');
    container.style.cursor = 'grabbing';
    container.style.userSelect = 'none';
    container.style.transition = 'none';

    startX = e.clientX;
    startY = e.clientY;

    const rect = container.getBoundingClientRect();
    startRight  = window.innerWidth  - rect.right;
    startBottom = window.innerHeight - rect.bottom;

    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    let newRight  = startRight  - dx;
    let newBottom = startBottom - dy;

    // Clamp to viewport
    const w = container.offsetWidth;
    const h = container.offsetHeight;
    newRight  = Math.max(-w * 0.4, Math.min(window.innerWidth  - w * 0.1, newRight));
    newBottom = Math.max(-h * 0.4, Math.min(window.innerHeight - 40, newBottom));

    container.style.right  = newRight  + 'px';
    container.style.bottom = newBottom + 'px';
    container.style.left   = 'auto';
    container.style.top    = 'auto';
  }, { passive: true });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    container.classList.remove('is-dragging');
    container.style.cursor = 'grab';
    container.style.transition = '';

    // Persist position
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        right:  parseFloat(container.style.right),
        bottom: parseFloat(container.style.bottom),
      }));
    } catch {}
  });
}
