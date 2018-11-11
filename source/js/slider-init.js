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
    if (document.querySelector('.galleries')) {
      const sliders = document.querySelector('.galleries__list');
      const pages = sliders.querySelectorAll('.galleries__slider');
      const wrapper = document.querySelector('.galleries__wrapper');

      wrapper.addEventListener('scroll', function () {
        if (!wrapper.classList.contains('galleries__wrapper--clear') && (wrapper.scrollLeft > 0)) {
          wrapper.classList.add('galleries__wrapper--clear');
        } else if (wrapper.scrollLeft === 0) {
          wrapper.classList.remove('galleries__wrapper--clear');
        }
      });

      $('.galleries__list').slick({
        infinite: false,
        fade: true,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        speed: 500,
        customPaging: function(slider, i) {
          return $('<button type="button" />').text(pages[i].dataset.title);
        },
        appendDots: $('.galleries__wrapper')
      });
    }
  });

  $('.galleries__slider--architect').ready(function(){
    $('.gallery__list--architect').slick({
      infinite: true,
      dots: false,
      adaptiveHeight: true,
      speed: 500
    });
  });

  $('.galleries__slider--hall').ready(function(){
    $('.gallery__list--hall').slick({
      infinite: true,
      dots: false,
      adaptiveHeight: true,
      speed: 500
    });
  });

  $('.galleries__slider--infrastructure').ready(function(){
    $('.gallery__list--infrastructure').slick({
      infinite: true,
      dots: false,
      adaptiveHeight: true,
      speed: 500
    });
  });

  $('.galleries__slider--construction').ready(function(){
    $('.gallery__list--construction').slick({
      infinite: true,
      dots: false,
      adaptiveHeight: true,
      speed: 500
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
