(function () {
  const STORAGE_KEY = 'preferred_lang';
  const LANG_EN = 'en';
  const LANG_ZH = 'zh';
  const ROUTE_MAP = {
    '/guestbook': '/zh/guestbook',
    '/cv': '/zh/cv',
    '/publications': '/zh/publications'
  };

  function normalizePath(pathname) {
    if (!pathname) return '/';
    let path = pathname.replace(/index\.html$/, '');
    if (!path.startsWith('/')) path = '/' + path;
    if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
    return path || '/';
  }

  function pathLang(path) {
    return path === '/zh' || path.startsWith('/zh/') ? LANG_ZH : LANG_EN;
  }

  function detectLang(path) {
    return pathLang(path);
  }

  function withTrailingSlash(path) {
    if (!path || path === '/') return '/';
    return path.endsWith('/') ? path : `${path}/`;
  }

  function mapToZh(path) {
    return ROUTE_MAP[path] || null;
  }

  function mapToEn(path) {
    const entries = Object.entries(ROUTE_MAP);
    for (const [enPath, zhPath] of entries) {
      if (zhPath === path) return enPath;
    }
    return null;
  }

  function buildTargetPath(targetLang, currentPath) {
    if (targetLang === LANG_ZH) {
      if (currentPath === '/' || currentPath === '') return '/zh/';
      if (currentPath === '/zh' || currentPath === '/zh/') return '/zh/';
      if (currentPath.startsWith('/zh/')) return withTrailingSlash(currentPath);

      const mappedZhPath = mapToZh(currentPath);
      if (mappedZhPath) return withTrailingSlash(mappedZhPath);

      if (currentPath.startsWith('/publication/')) {
        return withTrailingSlash(`/zh${currentPath}`.replace(/\/{2,}/g, '/'));
      }

      return withTrailingSlash(currentPath);
    }

    if (currentPath === '/zh' || currentPath === '/zh/') {
      return '/';
    }

    const mappedEnPath = mapToEn(currentPath);
    if (mappedEnPath) return withTrailingSlash(mappedEnPath);

    if (currentPath.startsWith('/zh/')) {
      const stripped = currentPath.slice(3);
      return stripped && stripped !== '/' ? withTrailingSlash(stripped.replace(/\/{2,}/g, '/')) : '/';
    }

    return withTrailingSlash(currentPath);
  }

  function refreshToggleUI(toggleButton, label, currentLang, currentPath) {
    const nextLang = currentLang === LANG_ZH ? LANG_EN : LANG_ZH;
    const nextPath = buildTargetPath(nextLang, currentPath);

    label.textContent = currentLang === LANG_ZH ? 'EN' : '中文';
    toggleButton.classList.toggle('is-zh', currentLang === LANG_ZH);
    toggleButton.setAttribute(
      'aria-label',
      nextLang === LANG_ZH ? '切换到中文 / Switch to Chinese' : 'Switch to English / 切换到英文'
    );
    toggleButton.setAttribute('href', nextPath);
  }

  function initLangToggle() {
    const toggleButton = document.getElementById('lang-toggle-btn');
    const label = document.getElementById('lang-label');
    if (!toggleButton || !label) return;
    if (toggleButton.dataset.langReady === 'true') return;

    const currentPath = normalizePath(window.location.pathname);
    const preferredLang = localStorage.getItem(STORAGE_KEY);
    const currentLangFromPath = pathLang(currentPath);
    let activeLang = detectLang(currentPath);

    if ((currentPath === '/' || currentPath === '/zh') && preferredLang && preferredLang !== currentLangFromPath) {
      window.location.replace(buildTargetPath(preferredLang, currentPath));
      return;
    }

    refreshToggleUI(toggleButton, label, activeLang, currentPath);
    toggleButton.dataset.langReady = 'true';

    toggleButton.addEventListener('click', function (event) {
      event.preventDefault();
      const nextLang = activeLang === LANG_ZH ? LANG_EN : LANG_ZH;
      const targetPath = buildTargetPath(nextLang, currentPath);
      localStorage.setItem(STORAGE_KEY, nextLang);

      if (normalizePath(targetPath) === currentPath) {
        activeLang = nextLang;
        refreshToggleUI(toggleButton, label, activeLang, currentPath);
        return;
      }

      window.location.assign(targetPath);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangToggle);
  } else {
    initLangToggle();
  }
})();
