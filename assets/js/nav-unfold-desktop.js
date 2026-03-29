(function () {
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
    window.addEventListener('resize', unfoldDesktopNav);
  });
})();
