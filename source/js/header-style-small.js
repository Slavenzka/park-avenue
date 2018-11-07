'use strict';

(function () {
  const header = document.querySelector('.header');
  const langs = header.querySelectorAll('.language__link');
  const socials = header.querySelectorAll('.social__link');

  function toggleHeaderBackground () {
    if (window.pageYOffset >= 40) {
      header.classList.add('header-dark');
    } else {
      if (header.classList.contains('header-dark')) {
        header.classList.remove('header-dark');
      }
    }
  }

  function toggleHeaderSidemenuColor () {
    langs.forEach(item => item.style.color = 'rgb(123, 101, 66)');
    socials.forEach(item => item.style.color = 'rgb(123, 101, 66)');
  }

  toggleHeaderBackground();
  toggleHeaderSidemenuColor();

  document.addEventListener('scroll', function () {
    toggleHeaderBackground();
  })
})();
