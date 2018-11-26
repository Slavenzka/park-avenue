'use strict';

(function () {
  window.addEventListener("load", function (event) {
    var texts = document.querySelectorAll('.slide-text-start');
    console.log(texts);

    function createObserverText() {
      function handleIntersect(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.intersectionRatio > options.threshold) {
            entry.target.classList.add('slide-text-end');
          }
        });
      }

      var observer;

      var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.95
      };

      observer = new IntersectionObserver(handleIntersect, options);
      texts.forEach(item => {
        observer.observe(item);
      });
    }

    createObserverText();

  }, false);

  window.addEventListener("load", function (event) {
    var images = document.querySelectorAll('.slide-image-start');
    console.log(images);

    function createObserverImage() {
      function handleIntersect(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.intersectionRatio > options.threshold) {
            entry.target.classList.add('slide-image-end');
            entry.target.classList.remove('slide-image-start');
          }
        });
      }

      var observer;

      var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6
      };

      observer = new IntersectionObserver(handleIntersect, options);
      images.forEach(item => {
        observer.observe(item);
      });
    }

    createObserverImage();

  }, false);


})();
