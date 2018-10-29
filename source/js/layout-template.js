'use strict';

(function () {
  const layouts = document.querySelector('.selection__list');
  const template = document.querySelector('#layout-card').content.querySelector('li');

  for (let i = 0; i < layoutArray.length; i++) {
    let element = template.cloneNode(true);
      element.querySelector('.selection__name').textContent = layoutArray[i].name;

      element.querySelector('.selection__info').textContent =
        (layoutArray[i].bedrooms === 1) ?
        (layoutArray[i].bedrooms + ' комната, ') :
        (layoutArray[i].bedrooms < 5) ?
        (layoutArray[i].bedrooms + ' комнаты, ') :
        (layoutArray[i].bedrooms + ' комнат, ');

      element.querySelector('.selection__info').textContent +=
        (layoutArray[i].commissioned) ?
        ('дом в эксплуатации') :
        ('дом вводится в эксплуатацию в ' + layoutArray[i].finalDate);

      element.querySelector('.selection__space').innerHTML = layoutArray[i].space.toFixed(2) + ' m<sup>2</sup>';
      element.querySelector('.selection__img').src = layoutArray[i].plan_1x;
      element.querySelector('.selection__img').srcset = layoutArray[i].plan_1x + ' 1x, ' + layoutArray[i].plan_2x;

      layouts.appendChild(element);
  }
})();
