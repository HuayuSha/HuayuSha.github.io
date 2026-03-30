document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function normalizePath(pathname) {
    if (!pathname) return '/';
    if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
    return pathname;
  }

  function isInternalNavigable(link) {
    if (!link || !link.href) return false;
    if (link.hasAttribute('download')) return false;
    const href = link.getAttribute('href') || '';
    if (!href || href.startsWith('#')) return false;
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return false;

    let parsed;
    try {
      parsed = new URL(link.href, window.location.origin);
    } catch {
      return false;
    }
    if (parsed.origin !== window.location.origin) return false;
    if (parsed.pathname.startsWith('/assets/')) return false;
    if (parsed.pathname.includes('.xml')) return false;
    return true;
  }

  function canonicalizePublicationLinks() {
    const candidates = document.querySelectorAll('a[href]');
    candidates.forEach((anchor) => {
      if (!isInternalNavigable(anchor)) return;
      let target;
      try {
        target = new URL(anchor.href, window.location.origin);
      } catch {
        return;
      }

      const isPublicationPath =
        target.pathname.startsWith('/publication/') || target.pathname.startsWith('/zh/publication/');
      if (!isPublicationPath) return;

      if (!target.pathname.endsWith('/')) {
        target.pathname = `${target.pathname}/`;
        anchor.href = `${target.pathname}${target.search}${target.hash}`;
      }
    });
  }

  function limitSmoothScrollToHashLinks() {
    if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.smoothScroll) return;
    const $ = window.jQuery;

    // remove default global hook from main.min.js
    $('a').off('click.smoothscroll');

    // only hash links on the same page should be smooth-scrolled
    $('a[href*="#"]').not('[href="#"]').smoothScroll({
      offset: -75,
      preventDefault: false
    });
  }

  function addInternalPrefetch() {
    const prefetched = new Set();

    function prefetch(link) {
      if (!isInternalNavigable(link)) return;
      let target;
      try {
        target = new URL(link.href, window.location.origin);
      } catch {
        return;
      }

      const current = new URL(window.location.href);
      if (normalizePath(target.pathname) === normalizePath(current.pathname) && target.search === current.search) {
        return;
      }

      const key = `${target.pathname}${target.search}`;
      if (prefetched.has(key)) return;
      prefetched.add(key);

      const prefetchLink = document.createElement('link');
      prefetchLink.rel = 'prefetch';
      prefetchLink.href = key;
      prefetchLink.as = 'document';
      document.head.appendChild(prefetchLink);
    }

    document.addEventListener(
      'mouseover',
      (event) => {
        const link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
        if (link) prefetch(link);
      },
      { passive: true }
    );

    document.addEventListener(
      'focusin',
      (event) => {
        const link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
        if (link) prefetch(link);
      }
    );

    document.addEventListener(
      'touchstart',
      (event) => {
        const link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
        if (link) prefetch(link);
      },
      { passive: true }
    );
  }

  function enhanceClickMotion() {
    if (reduceMotion) return;
    const page = document.querySelector('.page');
    if (!page) return;
    page.classList.add('page-entered');

    const archiveItems = document.querySelectorAll('.archive__item');
    archiveItems.forEach((item, index) => {
      item.classList.add('page-entered');
      item.style.animationDelay = `${Math.min(index * 26, 180)}ms`;
    });
  }

  function enableLeaveTransition() {
    if (reduceMotion) return;

    document.addEventListener('click', (event) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
      if (!link) return;
      if (link.id === 'lang-toggle-btn') return;
      if (link.target && link.target.toLowerCase() === '_blank') return;
      if (!isInternalNavigable(link)) return;

      let target;
      try {
        target = new URL(link.href, window.location.origin);
      } catch {
        return;
      }

      const current = new URL(window.location.href);
      const samePath = normalizePath(target.pathname) === normalizePath(current.pathname);
      const sameSearch = target.search === current.search;

      if (samePath && sameSearch && target.hash) return;

      const isMastheadNav = !!link.closest('.masthead');
      if (isMastheadNav) {
        return;
      }

      event.preventDefault();
      document.body.classList.add('page-leaving');
      window.setTimeout(() => {
        window.location.assign(`${target.pathname}${target.search}${target.hash}`);
      }, 110);
    });
  }

  canonicalizePublicationLinks();
  limitSmoothScrollToHashLinks();
  addInternalPrefetch();
  enhanceClickMotion();
  enableLeaveTransition();
});
