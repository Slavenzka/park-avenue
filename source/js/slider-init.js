'use strict';

(function () {
  $(document).ready(function(){
    $('.promo__list').slick({
      dots: true,
      speed: 500
    });
  });

  $(document).ready(function(){
    $('.advantages__list').slick({
      dots: true,
      speed: 500,
      adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1439,
            settings: {
              dots: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
  });

  $(document).ready(function(){
    $('.options__list').slick({
      infinite: true,
      dots: true,
      adaptiveHeight: true,
      speed: 500
    });
  });

  $(document).ready(function(){
    $('.gallery__list').slick({
      infinite: true,
      dots: true,
      adaptiveHeight: true,
      speed: 500,
    });
  });

  let trigger = document.querySelector('.visual__item--photo');

  function initVisual () {
    $('.visual__photo-list').slick({
      dots: true,
      adaptiveHeight: true,
      speed: 500
    });

    trigger.removeEventListener('click', initVisual);
  }

  if (trigger) {
    trigger.addEventListener('click', initVisual);
  }
})();
