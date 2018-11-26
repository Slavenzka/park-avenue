'use strict';

(function () {
  const filter = document.querySelector('.filter');
  const fieldsetRooms = filter.querySelector('.filter__section--bedrooms');
  const fieldsetSpace = filter.querySelector('.filter__section--space');
  const fieldsetStatus = filter.querySelector('.filter__section--comissioned');
  const spaceMin = filter.querySelector('.filter__item--space-min');
  const spaceMax = filter.querySelector('.filter__item--space-max');


  const catalog = document.querySelector('.selection__list');
  const cards = catalog.querySelectorAll('.selection__item');
  let selectedRooms = [];

  function renderFilter () {
    function findUniques (containerArray, dataProperty) {
      cards.forEach(item => {
        if ((containerArray.indexOf(item.getAttribute('data-' + dataProperty)) < 0)
        && (item.getAttribute('data-' + dataProperty))) {
          containerArray.push(item.getAttribute('data-' + dataProperty));
        }
      });
      containerArray.sort((a,b) => a - b);
    }

    renderFilter.rooms = function () {
      let allRooms = [];
      findUniques(allRooms, 'rooms');

      allRooms.forEach((item, i) => {
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

    renderFilter.options = function () {
      let allSpaces = [];
      findUniques(allSpaces, 'space');

      allSpaces.forEach((item, i) => {
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
        if (i === allSpaces.length - 1) {
          optionMax.selected = true;
        }
        spaceMax.appendChild(optionMax);
      });
    }

    renderFilter.status = function () {
      let allStatuses = [];
      findUniques(allStatuses, 'comissioned');

      if ((allStatuses.length === 1) && (allStatuses[0] === 'true')) {
        filedsetStatus.style = 'display: none';
      }

      let allDates = [];
      findUniques(allDates, 'date');

      if (allStatuses.indexOf('true') >= 0) {
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

      allDates.forEach((item, i) => {
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

    renderFilter.options();
    renderFilter.rooms();
    renderFilter.status();
  }

  function applyFilter (evt) {

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

    applyFilter.rooms = function (item) {
      if (selectedRooms.length > 0) {
        if (selectedRooms.indexOf(item.dataset.rooms) >= 0) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    }

    applyFilter.spaceMinMax = function (item) {
      if ((item.dataset.space >= selectSpaceMin.value) && (item.dataset.space <= selectSpaceMax.value)) {
        return true;
      }
      return false;
    }

    applyFilter.status = function (item) {
      let comission = filter.querySelector('.filter__input--comissioned:checked');

      if (comission) {
        switch (comission.value) {

          case 'true':
            if (item.dataset.comissioned === 'true') {
              return true;
            }
            return false;

          default:
            if (item.dataset.comissioned == 'false') {
              if (item.dataset.date === comission.value) {
                return true;
              }
              return false;
            }
            return false;
        }
      }
      return true;
    }

    if (catalog.querySelector('.filter__warning')) {
      catalog.removeChild(catalog.querySelector('.filter__warning'));
    }

    findSelectedRooms();

    cards.forEach(item => {
      if (applyFilter.rooms(item) &&
          applyFilter.spaceMinMax(item) &&
          applyFilter.status(item)) {
        item.style = 'display: block';
      } else {
        item.style = 'display: none';
      }
    });

    checkResults();
  }

  function limitSelect (evt) {
    if (evt.target.classList.contains('filter__item--space-min')) {
      for (let i = 0; i < spaceMax.children.length; i++) {
        if (spaceMax.children[i].value < evt.target.value) {
          spaceMax.children[i].style = 'display: none';
        } else {
          spaceMax.children[i].style = 'display: block';
        }
      }
    } else {
      for (let i = 0; i < spaceMin.children.length; i++) {
        if (spaceMin.children[i].value > evt.target.value) {
          spaceMin.children[i].style = 'display: none';
        } else {
          spaceMin.children[i].style = 'display: block';
        }
      }
    }
  }

  renderFilter();

  const filterItems = filter.querySelectorAll('.filter__item');
  const selectSpaceMin = filter.querySelector('.filter__item--space-min');
  const selectSpaceMax = filter.querySelector('.filter__item--space-max');
  const selectStatus = filter.querySelectorAll('.filter__input--comissioned');

  fieldsetSpace.addEventListener('change', limitSelect);

  filterItems.forEach(item => {
    item.addEventListener('change', applyFilter);
  });
})();
