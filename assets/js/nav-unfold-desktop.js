(function () {

  function syncMobileNav() {
    if (!window.jQuery) return;

    var $vlinks = window.jQuery('#site-nav .visible-links');
    var $hlinks = window.jQuery('#site-nav .hidden-links');
    var $btn = window.jQuery('#site-nav button');
    if (!$vlinks.length || !$hlinks.length || !$btn.length) return;

    var isMobile = window.innerWidth <= 720;

    if (!isMobile) {
      $hlinks.children('[data-mobile-clone="true"]').remove();
      return;
    }

    if (!$hlinks.children('[data-mobile-clone="true"]').length) {
      $vlinks.children('.masthead__menu-item--nav').each(function () {
        window.jQuery(this)
          .clone()
          .attr('data-mobile-clone', 'true')
          .appendTo($hlinks);
      });
    }

    if ($hlinks.children().length) {
      $btn.removeClass('hidden').attr('aria-hidden', 'false');
    }
  }

  function unfoldDesktopNav() {
    if (!window.jQuery || window.innerWidth <= 900) return;

    var $vlinks = window.jQuery('#site-nav .visible-links');
    var $hlinks = window.jQuery('#site-nav .hidden-links');
    var $btn = window.jQuery('#site-nav button');
    if (!$vlinks.length || !$hlinks.length || !$btn.length) return;

    var $tail = $vlinks.children('*.persist.tail');
    while ($hlinks.children().length) {
      if ($tail.length) {
        $hlinks.children().first().insertBefore($tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
    }

    $hlinks.addClass('hidden');
    $btn.addClass('hidden').removeClass('close').attr('aria-hidden', 'true');
  }

  document.addEventListener('DOMContentLoaded', function () {
    unfoldDesktopNav();
    syncMobileNav();
    window.addEventListener('resize', unfoldDesktopNav);
    window.addEventListener('resize', syncMobileNav);
  });
})();
