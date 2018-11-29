'use strict';

(function () {
  window.addEventListener("load", function (event) {
    var texts = document.querySelectorAll('.slide-left-start');

    function createObserverText() {
      function handleIntersect(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.intersectionRatio > options.threshold) {
            entry.target.classList.add('slide-left-end');
            entry.target.classList.remove('slide-left-start');
          }
        });
      }

      var observer;

      var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      };

      observer = new IntersectionObserver(handleIntersect, options);
      texts.forEach(item => {
        observer.observe(item);
      });
    }

    createObserverText();

  }, false);

  window.addEventListener("load", function (event) {
    var images = document.querySelectorAll('.slide-right-start');

    function createObserverImage() {
      function handleIntersect(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.intersectionRatio > options.threshold) {
            entry.target.classList.add('slide-right-end');
            entry.target.classList.remove('slide-right-start');
          }
        });
      }

      var observer;

      var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      };

      observer = new IntersectionObserver(handleIntersect, options);
      images.forEach(item => {
        observer.observe(item);
      });
    }

    createObserverImage();

  }, false);

})();
