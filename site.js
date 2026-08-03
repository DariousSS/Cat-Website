// Hides the sticky top bar while scrolling down, reveals it again on scroll up.
(function () {
  var bar = document.querySelector('.top-bar');
  if (!bar) return;

  var lastY = window.scrollY;
  var ticking = false;

  function update() {
    var y = window.scrollY;
    var barHeight = bar.offsetHeight;

    if (y > lastY && y > barHeight) {
      bar.classList.add('is-hidden');
    } else {
      bar.classList.remove('is-hidden');
    }

    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();
