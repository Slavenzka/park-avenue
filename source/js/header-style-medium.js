'use strict';

(function () {
  const header = document.querySelector('.header');
  const langs = header.querySelectorAll('.language__link');
  const socials = header.querySelectorAll('.social__link');
  const desktop = window.matchMedia('(min-width: 1440px)');
  const tablet = window.matchMedia('(min-width: 768px)');
  const phone = window.matchMedia('(min-width: 320px)');

  function toggleHeaderBackground () {
    if (desktop.matches) {
      if (window.pageYOffset >= 230) {
        header.classList.add('header-dark');
      } else {
        if (header.classList.contains('header-dark')) {
          header.classList.remove('header-dark');
        }
      }
    } else if (tablet.matches) {
      if (window.pageYOffset >= 345) {
        header.classList.add('header-dark');
      } else {
        if (header.classList.contains('header-dark')) {
          header.classList.remove('header-dark');
        }
      }
    } else if (phone.matches) {
      if (window.pageYOffset >= 254) {
        header.classList.add('header-dark');
      } else {
        if (header.classList.contains('header-dark')) {
          header.classList.remove('header-dark');
        }
      }
    }
  }

  function toggleHeaderSidemenuColor () {
    if (desktop.matches) {
      langs.forEach((item, index) => {
        if (window.pageYOffset >= 15 + 25 * index) {
          item.style.color = 'rgb(123, 101, 66)';
        } else {
          item.style.color = 'rgb(255, 255, 255)';
        }
      });
      socials.forEach(item => item.style.color = 'rgb(123, 101, 66)');
    } else if (tablet.matches) {
      langs.forEach((item, index) => {
        if (window.pageYOffset >= 155 + 25 * index) {
          item.style.color = 'rgb(123, 101, 66)';
        } else {
          item.style.color = 'rgb(255, 255, 255)';
        }
      });
      socials.forEach((item, index) => {
        if (window.pageYOffset >= 70 * index) {
          item.style.color = 'rgb(123, 101, 66)';
        } else {
          item.style.color = 'rgb(255, 255, 255)';
        }
      });
    }
  }


  toggleHeaderBackground();
  toggleHeaderSidemenuColor();

  document.addEventListener('scroll', function () {
    toggleHeaderBackground();
    toggleHeaderSidemenuColor();
  })
})();
