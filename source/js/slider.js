'use strict';

(function () {
  let sliderPromo = document.querySelector('.promo__list');
  let sliderItemsPromo = sliderPromo.querySelectorAll('.promo__item');
  let selectedClassPromo = 'promo__item--selected';
  let controlPromo = document.querySelector('.control');
  let controlItemsPromo = controlPromo.querySelectorAll('.control__item > input');
  let buttonPrevPromo = controlPromo.querySelector('.control__button--prev');
  let iconPrevPromo = buttonPrevPromo.querySelector('.control__icon');
  let buttonNextPromo = controlPromo.querySelector('.control__button--next');
  let iconNextPromo = buttonNextPromo.querySelector('.control__icon');
  let selectedControlPromo = 'control__item--selected';

  let slider = {
    findSelection: function (sliderItems, selectedClass) {
      for (let i = 0; i < sliderItems.length; i++) {
        if (sliderItems[i].classList.contains(selectedClass)) {
          return i;
        }
      }
    },

    findNextSlide: function (sliderItems, selectedClass, nextSelection) {
      let next = nextSelection;
      let active = this.findSelection(sliderItems, selectedClass);

      if (nextSelection > sliderItems.length - 1) {
        next = 0;
      } else if (nextSelection < 0) {
        next = sliderItems.length - 1;
      }

      return next;
    },

    toggleButtons: function (sliderItems, activeSlide) {
      switch (activeSlide) {
        case 0:
          buttonPrevPromo.classList.add('control__button--block');
          buttonNextPromo.classList.remove('control__button--block');
          break;
        case (sliderItems.length - 1):
          buttonNextPromo.classList.add('control__button--block');
          buttonPrevPromo.classList.remove('control__button--block');
          break;
        default:
          buttonNextPromo.classList.remove('control__button--block');
          buttonPrevPromo.classList.remove('control__button--block');
      }
    },

    switchSlide: function (sliderItems, selectedClass, nextSelection, controlItems, controlClass) {
      let next = this.findNextSlide(sliderItems, selectedClass, nextSelection);
      let active = this.findSelection(sliderItems, selectedClass);

      sliderItems[active].classList.remove(selectedClass);
      sliderItems[next].classList.add(selectedClass);
      controlItems[active].parentNode.classList.remove(controlClass);
      controlItems[next].parentNode.classList.add(controlClass);
      controlItems[next].checked = 'true';

      this.toggleButtons(sliderItems, next);
    }
  }

  let autoSlide = setInterval(function () {
    let active = slider.findSelection(sliderItemsPromo, selectedClassPromo);
    slider.switchSlide(sliderItemsPromo, selectedClassPromo, active + 1, controlItemsPromo, selectedControlPromo);
  }, 5000);

  buttonPrevPromo.addEventListener('click', function () {
    clearInterval(autoSlide);
    let active = slider.findSelection(sliderItemsPromo, selectedClassPromo);
    slider.switchSlide(sliderItemsPromo, selectedClassPromo, active - 1, controlItemsPromo, selectedControlPromo);
  });

  buttonNextPromo.addEventListener('click', function () {
    clearInterval(autoSlide);
    let active = slider.findSelection(sliderItemsPromo, selectedClassPromo);
    slider.switchSlide(sliderItemsPromo, selectedClassPromo, active + 1, controlItemsPromo, selectedControlPromo);
  });

  controlItemsPromo.forEach(item => {
    item.addEventListener('click', function (evt) {
      clearInterval(autoSlide);
      let number = +evt.target.value;
      slider.switchSlide(sliderItemsPromo, selectedClassPromo, number - 1, controlItemsPromo, selectedControlPromo);
    });
  });
})();
