'use strict';

(function () {
  let header = document.querySelector('.header');

  function toggleHeaderBackground () {
    if (window.pageYOffset >= 800) {
      header.classList.add('header-dark');
    } else {
      if (header.classList.contains('header-dark')) {
        header.classList.remove('header-dark');
      }
    }
  }

  toggleHeaderBackground();

  document.addEventListener('scroll', function () {
    console.log(window.pageYOffset);
    toggleHeaderBackground();
  })
})();
