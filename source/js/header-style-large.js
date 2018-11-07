'use strict';

(function () {
  const header = document.querySelector('.header');
  const langs = header.querySelectorAll('.language__link');
  const socials = header.querySelectorAll('.social__link');
  const desktop = window.matchMedia('(min-width: 1440px)');
  const notebook = window.matchMedia('(min-width: 1280px)');
  const tablet = window.matchMedia('(min-width: 768px)');
  const phone = window.matchMedia('(min-width: 320px)');

  function toggleHeaderBackground () {
    if (desktop.matches) {
      if (window.pageYOffset >= 630) {
        header.classList.add('header-dark');
      } else {
        if (header.classList.contains('header-dark')) {
          header.classList.remove('header-dark');
        }
      }
    } else if (notebook.matches) {
      if (window.pageYOffset >= 430) {
        header.classList.add('header-dark');
      } else {
        if (header.classList.contains('header-dark')) {
          header.classList.remove('header-dark');
        }
      }
    } else if (tablet.matches) {
      if (window.pageYOffset >= 510) {
        header.classList.add('header-dark');
      } else {
        if (header.classList.contains('header-dark')) {
          header.classList.remove('header-dark');
        }
      }
    } else if (phone.matches) {
      if (window.pageYOffset >= 500) {
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
        if (window.pageYOffset >= 993 + 25 * index) {
          item.style.color = 'rgb(123, 101, 66)';
        } else {
          item.style.color = 'rgb(255, 255, 255)';
        }
      });
      socials.forEach((item, index) => {
        if (window.pageYOffset >= 781 + 70 * index) {
          item.style.color = 'rgb(123, 101, 66)';
        } else {
          item.style.color = 'rgb(255, 255, 255)';
        }
      });
    } else if (notebook.matches) {

      langs.forEach((item, index) => {
        if (window.pageYOffset >= 823 + 25 * index) {
          item.style.color = 'rgb(123, 101, 66)';
        } else {
          item.style.color = 'rgb(255, 255, 255)';
        }
      });
      socials.forEach((item, index) => {
        if (window.pageYOffset >= 645 + 70 * index) {
          item.style.color = 'rgb(123, 101, 66)';
        } else {
          item.style.color = 'rgb(255, 255, 255)';
        }
      });
    } else if (tablet.matches) {

      langs.forEach((item, index) => {
        if (window.pageYOffset >= 1534 + 25 * index) {
          item.style.color = 'rgb(123, 101, 66)';
        } else {
          item.style.color = 'rgb(255, 255, 255)';
        }
      });
      socials.forEach((item, index) => {
        if (window.pageYOffset >= 1365 + 70 * index) {
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
