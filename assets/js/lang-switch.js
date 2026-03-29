(function () {
  const STORAGE_KEY = 'preferred_lang';
  const LANG_EN = 'en';
  const LANG_ZH = 'zh';

  function normalizePath(pathname) {
    if (!pathname) return '/';
    let path = pathname.replace(/index\.html$/, '');
    if (!path.startsWith('/')) path = '/' + path;
    if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
    return path || '/';
  }

  function detectLang(path) {
    return path === '/zh' || path.startsWith('/zh/') ? LANG_ZH : LANG_EN;
  }

  function buildTargetPath(targetLang, currentPath) {
    if (targetLang === LANG_ZH) {
      return '/zh/';
    }

    if (currentPath === '/zh' || currentPath === '/zh/') {
      return '/';
    }

    if (currentPath.startsWith('/zh/')) {
      const stripped = currentPath.slice(3);
      return stripped && stripped !== '/' ? stripped : '/';
    }

    return '/';
  }

  function refreshToggleUI(toggleButton, label, currentLang, currentPath) {
    const nextLang = currentLang === LANG_ZH ? LANG_EN : LANG_ZH;
    const nextPath = buildTargetPath(nextLang, currentPath);

    label.textContent = currentLang === LANG_ZH ? '中文' : 'EN';
    toggleButton.classList.toggle('is-zh', currentLang === LANG_ZH);
    toggleButton.setAttribute(
      'aria-label',
      nextLang === LANG_ZH ? '切换到中文 / Switch to Chinese' : 'Switch to English / 切换到英文'
    );
    toggleButton.setAttribute('href', nextPath);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('lang-toggle-btn');
    const label = document.getElementById('lang-label');
    if (!toggleButton || !label) return;

    const currentPath = normalizePath(window.location.pathname);
    const currentLang = detectLang(currentPath);
    const preferredLang = localStorage.getItem(STORAGE_KEY);

    if ((currentPath === '/' || currentPath === '/zh') && preferredLang && preferredLang !== currentLang) {
      window.location.replace(buildTargetPath(preferredLang, currentPath));
      return;
    }

    refreshToggleUI(toggleButton, label, currentLang, currentPath);

    toggleButton.addEventListener('click', function (event) {
      event.preventDefault();
      const nextLang = currentLang === LANG_ZH ? LANG_EN : LANG_ZH;
      const targetPath = buildTargetPath(nextLang, currentPath);
      localStorage.setItem(STORAGE_KEY, nextLang);
      window.location.assign(targetPath);
    });
  });
})();
