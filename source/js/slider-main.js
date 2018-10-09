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

  let sliderAdv = document.querySelector('.advantages__list');
  let sliderItemsAdv = sliderAdv.querySelectorAll('.advantages__item');
  let selectedClassAdv = 'advantages__item--selected';
  let controlAdv = document.querySelector('.advantages__control');
  let controlItemsAdv = controlAdv.querySelectorAll('.control__item > input');
  let buttonPrevAdv = controlAdv.querySelector('.control__button--prev');
  let iconPrevAdv = buttonPrevAdv.querySelector('.control__icon');
  let buttonNextAdv = controlAdv.querySelector('.control__button--next');
  let iconNextAdv = buttonNextAdv.querySelector('.control__icon');
  let selectedControlAdv = 'control__item--selected';

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

    toggleButtons: function (sliderItems, activeSlide, btnPrev, btnNext) {
      switch (activeSlide) {
        case 0:
          btnPrev.classList.add('control__button--block');
          btnNext.classList.remove('control__button--block');
          break;
        case (sliderItems.length - 1):
          btnNext.classList.add('control__button--block');
          btnPrev.classList.remove('control__button--block');
          break;
        default:
          btnNext.classList.remove('control__button--block');
          btnPrev.classList.remove('control__button--block');
      }
    },

    switchSlide: function (sliderItems, selectedClass, nextSelection, controlItems, controlClass, btnPrev, btnNext) {
      let next = this.findNextSlide(sliderItems, selectedClass, nextSelection);
      let active = this.findSelection(sliderItems, selectedClass);

      sliderItems[active].classList.remove(selectedClass);
      sliderItems[next].classList.add(selectedClass);
      controlItems[active].parentNode.classList.remove(controlClass);
      controlItems[next].parentNode.classList.add(controlClass);
      controlItems[next].checked = 'true';

      this.toggleButtons(sliderItems, next, btnPrev, btnNext);
    }
  }

  let autoSlide = setInterval(function () {
    let active = slider.findSelection(sliderItemsPromo, selectedClassPromo);
    slider.switchSlide(sliderItemsPromo, selectedClassPromo, active + 1, controlItemsPromo, selectedControlPromo, buttonPrevPromo, buttonNextPromo);
  }, 5000);

  buttonPrevPromo.addEventListener('click', function () {
    clearInterval(autoSlide);
    let active = slider.findSelection(sliderItemsPromo, selectedClassPromo);
    slider.switchSlide(sliderItemsPromo, selectedClassPromo, active - 1, controlItemsPromo, selectedControlPromo, buttonPrevPromo, buttonNextPromo);
  });

  buttonNextPromo.addEventListener('click', function () {
    clearInterval(autoSlide);
    let active = slider.findSelection(sliderItemsPromo, selectedClassPromo);
    slider.switchSlide(sliderItemsPromo, selectedClassPromo, active + 1, controlItemsPromo, selectedControlPromo, buttonPrevPromo, buttonNextPromo);
  });

  controlItemsPromo.forEach(item => {
    item.addEventListener('click', function (evt) {
      clearInterval(autoSlide);
      let number = +evt.target.value;
      slider.switchSlide(sliderItemsPromo, selectedClassPromo, number - 1, controlItemsPromo, selectedControlPromo, buttonPrevPromo, buttonNextPromo);
    });
  });

  let autoSlideAdv = setInterval(function () {
    let active = slider.findSelection(sliderItemsAdv, selectedClassAdv);
    slider.switchSlide(sliderItemsAdv, selectedClassAdv, active + 1, controlItemsAdv, selectedControlAdv, buttonPrevAdv, buttonNextAdv);
  }, 5000);

  buttonPrevAdv.addEventListener('click', function () {
    clearInterval(autoSlideAdv);
    let active = slider.findSelection(sliderItemsAdv, selectedClassAdv);
    slider.switchSlide(sliderItemsAdv, selectedClassAdv, active - 1, controlItemsAdv, selectedControlAdv, buttonPrevAdv, buttonNextAdv);
  });

  buttonNextAdv.addEventListener('click', function () {
    clearInterval(autoSlideAdv);
    let active = slider.findSelection(sliderItemsAdv, selectedClassAdv);
    slider.switchSlide(sliderItemsAdv, selectedClassAdv, active + 1, controlItemsAdv, selectedControlAdv, buttonPrevAdv, buttonNextAdv);
  });

  controlItemsAdv.forEach(item => {
    item.addEventListener('click', function (evt) {
      clearInterval(autoSlideAdv);
      let number = +evt.target.value;
      slider.switchSlide(sliderItemsAdv, selectedClassAdv, number - 1, controlItemsAdv, selectedControlAdv, buttonPrevAdv, buttonNextAdv);
    });
  });
})();
