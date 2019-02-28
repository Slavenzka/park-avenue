'use strict';

(function () {
  const filter = document.querySelector('.filter');

  let filterCards = new function () {
    const fieldsetRooms = filter.querySelector('.filter__section--bedrooms');
    const fieldsetSpace = filter.querySelector('.filter__section--space');
    const fieldsetStatus = filter.querySelector('.filter__section--comissioned');
    const spaceMin = filter.querySelector('.filter__item--space-min');
    const spaceMax = filter.querySelector('.filter__item--space-max');


    const catalog = document.querySelector('.selection__list');
    const cardsCollection = catalog.querySelectorAll('.selection__item');
    let cards = convertCollectionToArray(cardsCollection);
    let selectedRooms = [];

    function convertCollectionToArray (collection) {
      let array = [];
      collection.forEach(item => {
        array.push(item);
      });
      return array;
    }

    this.renderFilter = function () {

      function findUniques (dataProperty) {
        let result = [];

        cards.forEach(item => {
          if (result.indexOf(item.getAttribute('data-' + dataProperty)) < 0 &&
          item.getAttribute('data-' + dataProperty)) {
            result.push(item.getAttribute('data-' + dataProperty));
          }
        });

        result.sort((a, b) => a - b);

        return result;
      }

      function renderRooms () {
        let uniqueRooms = findUniques('rooms');

        uniqueRooms.forEach((item, i) => {
          i++;
          let room = document.createElement('INPUT');
          room.classList.add('filter__item', 'filter__input', 'filter__input--bedrooms');
          room.id = 'bedrooms' + i;
          room.type = 'checkbox';
          room.name = 'bedrooms';
          room.value = item;

          let label = document.createElement('LABEL');
          label.htmlFor = room.id;
          label.textContent = item;

          fieldsetRooms.appendChild(room);
          fieldsetRooms.appendChild(label);
        });
      }

      function renderSpace () {
        let uniqueSpaces = findUniques('space');

        uniqueSpaces.forEach((item, i) => {
          let optionMin = document.createElement('OPTION');
          optionMin.value = item;
          optionMin.textContent = item;
          if (i === 0) {
            optionMin.selected = true;
          }
          spaceMin.appendChild(optionMin);

          let optionMax = document.createElement('OPTION');
          optionMax.value = item;
          optionMax.textContent = item;
          if (i === uniqueSpaces.length - 1) {
            optionMax.selected = true;
          }
          spaceMax.appendChild(optionMax);
        });
      }

      function renderStatus () {
        let uniqueStatuses = findUniques('comissioned');

        if ((uniqueStatuses.length === 1) && (uniqueStatuses[0] === 'true')) {
          filedsetStatus.style = 'display: none';
          return;
        }

        let uniqueDates = findUniques('date');

        if (uniqueStatuses.indexOf('true') >= 0) {
          let statusComissioned = document.createElement('INPUT');
          statusComissioned.type = 'radio';
          statusComissioned.classList.add('filter__item', 'filter__input' , 'filter__input--comissioned');
          statusComissioned.name = 'comissioned';
          statusComissioned.id = 'comissioned-true';
          statusComissioned.value = 'true';
          fieldsetStatus.appendChild(statusComissioned);

          let label = document.createElement('LABEL');
          label.htmlFor = statusComissioned.id;
          label.textContent = 'да';
          fieldsetStatus.appendChild(label);
        }

        uniqueDates.forEach((item, i) => {
          let date = document.createElement('INPUT');
          date.type = 'radio';
          date.classList.add('filter__item', 'filter__input' , 'filter__input--comissioned');
          date.name = 'comissioned';
          date.id = 'comissioned-false' + i;
          date.value = item;
          fieldsetStatus.appendChild(date);

          let label = document.createElement('LABEL');
          label.htmlFor = date.id;
          label.textContent = item;
          fieldsetStatus.appendChild(label);
        });
      }

      renderRooms();
      renderSpace();
      renderStatus();
    }

    this.applySelection = function (evt) {

      function checkResults () {
        let flag = false;

        cards.forEach(item => {
          if (item.getAttribute('style').indexOf('display: none') < 0) {
            flag = true;
          }
        });

        if (!flag) {
          let warning = document.createElement('LI');
          warning.classList.add('filter__warning');
          warning.textContent = 'Для выбранных критериев соответствий в каталоге не найдено. Попробуйте задать другие параметры поиска.';
          catalog.appendChild(warning);
        }
      }

      function findSelectedRooms () {
        if (evt.target.classList.contains('filter__input--bedrooms')) {
          if (evt.target.checked) {
            selectedRooms.push(evt.target.value);
          } else {
            selectedRooms.splice(selectedRooms.indexOf(evt.target.value), 1);
          }
        }
      }

      function filterRooms (item) {
        if (selectedRooms.length > 0) {
          if (selectedRooms.indexOf(item.dataset.rooms) >= 0) {
            return true;
          } else {
            return false;
          }
        }
        return true;
      }

      function filterSpace (item) {
        console.log(typeof item.dataset.space, spaceMin.value, spaceMax.value);
        if (+item.dataset.space >= +spaceMin.value && +item.dataset.space <= +spaceMax.value) {
          console.log('true');
          return true;
        }
        console.log('false');
        return false;
      }

      if (catalog.querySelector('.filter__warning')) {
        catalog.removeChild(catalog.querySelector('.filter__warning'));
      }

      findSelectedRooms();

      cards.forEach(item => {
        if (filterRooms(item) &&
        filterSpace(item)) {
          item.style = 'display: block';
        } else {
          item.style = 'display: none';
        }
      });

      checkResults();
    }
  }

  filterCards.renderFilter();

  const filterItems = filter.querySelectorAll('.filter__item');

  filterItems.forEach(item => {
    item.addEventListener('change', filterCards.applySelection);
  });

  // function renderFilter () {
  //   function findUniques (containerArray, dataProperty) {
  //     cards.forEach(item => {
  //       if ((containerArray.indexOf(item.getAttribute('data-' + dataProperty)) < 0)
  //       && (item.getAttribute('data-' + dataProperty))) {
  //         containerArray.push(item.getAttribute('data-' + dataProperty));
  //       }
  //     });
  //     containerArray.sort((a,b) => a - b);
  //   }
  //
  //   renderFilter.rooms = function () {
  //     let allRooms = [];
  //     findUniques(allRooms, 'rooms');
  //
  //     allRooms.forEach((item, i) => {
  //       i++;
  //       let room = document.createElement('INPUT');
  //       room.classList.add('filter__item', 'filter__input', 'filter__input--bedrooms');
  //       room.id = 'bedrooms' + i;
  //       room.type = 'checkbox';
  //       room.name = 'bedrooms';
  //       room.value = item;
  //
  //       let label = document.createElement('LABEL');
  //       label.htmlFor = room.id;
  //       label.textContent = item;
  //
  //       fieldsetRooms.appendChild(room);
  //       fieldsetRooms.appendChild(label);
  //     });
  //   }
  //
  //   renderFilter.options = function () {
  //     let allSpaces = [];
  //     findUniques(allSpaces, 'space');
  //
  //     allSpaces.forEach((item, i) => {
  //       let optionMin = document.createElement('OPTION');
  //       optionMin.value = item;
  //       optionMin.textContent = item;
  //       if (i === 0) {
  //         optionMin.selected = true;
  //       }
  //       spaceMin.appendChild(optionMin);
  //
  //       let optionMax = document.createElement('OPTION');
  //       optionMax.value = item;
  //       optionMax.textContent = item;
  //       if (i === allSpaces.length - 1) {
  //         optionMax.selected = true;
  //       }
  //       spaceMax.appendChild(optionMax);
  //     });
  //   }
  //
  //   renderFilter.status = function () {
  //     let allStatuses = [];
  //     findUniques(allStatuses, 'comissioned');
  //
  //     if ((allStatuses.length === 1) && (allStatuses[0] === 'true')) {
  //       filedsetStatus.style = 'display: none';
  //     }
  //
  //     let allDates = [];
  //     findUniques(allDates, 'date');
  //
  //     if (allStatuses.indexOf('true') >= 0) {
  //       let statusComissioned = document.createElement('INPUT');
  //       statusComissioned.type = 'radio';
  //       statusComissioned.classList.add('filter__item', 'filter__input' , 'filter__input--comissioned');
  //       statusComissioned.name = 'comissioned';
  //       statusComissioned.id = 'comissioned-true';
  //       statusComissioned.value = 'true';
  //       fieldsetStatus.appendChild(statusComissioned);
  //
  //       let label = document.createElement('LABEL');
  //       label.htmlFor = statusComissioned.id;
  //       label.textContent = 'да';
  //       fieldsetStatus.appendChild(label);
  //     }
  //
  //     allDates.forEach((item, i) => {
  //       let date = document.createElement('INPUT');
  //       date.type = 'radio';
  //       date.classList.add('filter__item', 'filter__input' , 'filter__input--comissioned');
  //       date.name = 'comissioned';
  //       date.id = 'comissioned-false' + i;
  //       date.value = item;
  //       fieldsetStatus.appendChild(date);
  //
  //       let label = document.createElement('LABEL');
  //       label.htmlFor = date.id;
  //       label.textContent = item;
  //       fieldsetStatus.appendChild(label);
  //     });
  //   }
  //
  //   renderFilter.options();
  //   renderFilter.rooms();
  //   renderFilter.status();
  // }

})();
