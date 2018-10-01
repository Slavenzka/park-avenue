'use strict';

(function () {
  let nav = document.querySelector('.header__nav');
  let toggle = nav.querySelector('.nav-main__toggle');

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('header__nav--opened')) {
      nav.classList.remove('header__nav--opened');
      nav.classList.add('header__nav--closed');
    } else if (nav.classList.contains('header__nav--closed')) {
      nav.classList.remove('header__nav--closed');
      nav.classList.add('header__nav--opened');
    }
  });
})();
