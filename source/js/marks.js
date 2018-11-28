'use strict';

(function () {
  function toggleDescription (marks, info) {
    let title = info.querySelector('h3');
    let content = info.querySelector('p');

    function initialSetup () {
      if (marks[0].dataset.textonly === 'true') {
        title.textContent = marks[0].querySelector('span').textContent;
        content.textContent = marks[0].querySelector('p').textContent;
      }

      if (marks[0].dataset.textonly === 'false') {
        const tableValues = info.querySelectorAll('.construction__value');
        const buildingPhoto = info.querySelector('img');

        title.textContent = marks[0].querySelector('span').textContent + ' Дом';
        tableValues[0].textContent = marks[0].dataset.status;
        tableValues[1].textContent = marks[0].dataset.comission;
        tableValues[2].textContent = marks[0].dataset.floors;
        buildingPhoto.src = marks[0].dataset.src;
      }
    }

    initialSetup();

    marks.forEach((item, i) => {
      item.addEventListener('click', function (evt) {
        evt.preventDefault();

        let location = item.querySelector('span');
        let details = item.querySelector('p');

        marks.forEach(item => {
          if (item.classList.contains('map__link--selected')) {
            item.classList.remove('map__link--selected');
          }
        });

        item.classList.add('map__link--selected');

        if (item.dataset.textonly === 'true') {
          title.textContent = location.textContent;
          content.textContent = details.textContent;
        }

        if (item.dataset.textonly === 'false') {
          const tableValues = info.querySelectorAll('.construction__value');
          const buildingPhoto = info.querySelector('img');

          title.textContent = location.textContent + ' Дом';
          tableValues[0].textContent = item.dataset.status;
          tableValues[1].textContent = item.dataset.comission;
          tableValues[2].textContent = item.dataset.floors;
          buildingPhoto.src = item.dataset.src;
        }
      });
    })
  }

  const index3D = document.querySelector('.environment__3d');

  if (index3D) {
    const indexMarks = index3D.querySelectorAll('.map__link');
    const indexDescriptor = index3D.querySelector('.environment__descriptor');

    toggleDescription(indexMarks, indexDescriptor);
  }

  const construction = document.querySelector('.construction__wrapper');

  if (construction) {
    const constructionMarks = construction.querySelectorAll('.construction__link');
    const constructionDescriptor = construction.querySelector('.construction__details');

    toggleDescription(constructionMarks, constructionDescriptor);
  }

})();
