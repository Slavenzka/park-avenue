'use strict';

(function () {
  const header = document.querySelector('.header');
  const langs = header.querySelectorAll('.language__link');
  const socials = header.querySelectorAll('.social__link');

  function toggleHeaderBackground () {
    if (window.pageYOffset >= 630) {
      header.classList.add('header-dark');
    } else {
      if (header.classList.contains('header-dark')) {
        header.classList.remove('header-dark');
      }
    }
  }

  toggleHeaderBackground();

  document.addEventListener('scroll', function () {
    toggleHeaderBackground();
  })
})();
