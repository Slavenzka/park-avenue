'use strict';

(function () {
  const filter = document.querySelector('.filter');
  const filterItems = filter.querySelectorAll('.filter__item');
  const fieldsetRooms = filter.querySelector('.filter__section--bedrooms')
  const selectSpaceMin = filter.querySelector('.filter__item--space-min');
  const selectSpaceMax = filter.querySelector('.filter__item--space-max');
  const selectStatus = filter.querySelectorAll('.filter__input--comissioned');

  const catalog = document.querySelector('.selection__list');
  const cards = catalog.querySelectorAll('.selection__item');
  let selectedRooms = [];

  function renderFilter () {
    cards.forEach(item => {
      let room = document.createElement('INPUT');
      room.classList.add('filter__item', 'filter__input', 'filter__input--bedrooms');
      rooms.id = ""

      let label = document.createElement('LABEL');

      room.textContent = item.dataset.rooms;
      label.textContent = room.textContent;

      fieldsetRooms.appendChild(room);
      fieldsetRooms.appendChild(label);
    });
  }

  function applyFilter (evt) {
    let flag = false;

    function checkResults () {
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
          flag = true;
          return true;
        } else {
          return false;
        }
      }
      flag = true;
      return true;
    }

    applyFilter.spaceMin = function (item) {
      if (item.dataset.space >= selectSpaceMin.value) {
        flag = true;
        return true;
      }
      flag = false;
      return false;
    }

    applyFilter.spaceMax = function (item) {
      if (item.dataset.space <= selectSpaceMax.value) {
        flag = true;
        return true;
      }
      flag = false;
      return false;
    }

    applyFilter.status = function (item) {
      let comission = filter.querySelector('.filter__input--comissioned:checked');

      if (comission) {
        switch (comission.value) {

          case 'true':
            if (item.dataset.comissioned === 'true') {
              flag = true;
              return true;
            }
            flag = false;
            return false;

          case 'false':
            if (item.dataset.comissioned == 'false') {
              if (item.dataset.date === comission.dataset.finish) {
                flag = true;
                return true;
              }
              flag = false;
              return false;
            }
            flag = false;
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
          applyFilter.spaceMin(item) &&
          applyFilter.spaceMax(item) &&
          applyFilter.status(item)) {
        item.style = 'display: block';
      } else {
        item.style = 'display: none';
      }
    });

    checkResults();
  }

  renderFilter();

  filterItems.forEach(item => {
    item.addEventListener('change', applyFilter);
  });
})();
