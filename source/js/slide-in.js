'use strict';

(function () {
  document.addEventListener('DOMContentLoaded', function() {
    var targets = document.querySelectorAll('.slidein-start');
    var slideinThrottleTimeout;

    function slidein () {
      if(slideinThrottleTimeout) {
        clearTimeout(slideinThrottleTimeout);
      }

      var targets = document.querySelectorAll('.slidein-start');
      if(targets.length == 0) {
        document.removeEventListener("scroll", slidein);
        window.removeEventListener("resize", slidein);
        window.removeEventListener("orientationChange", slidein);
      }

      var scrollTop = window.pageYOffset;

      for (let i = 0; i < targets.length;) {
        var viewportOffset = targets[i].getBoundingClientRect();
        console.log(viewportOffset.top + 200, window.innerHeight + scrollTop);
        if(viewportOffset.top + 200 < (window.innerHeight + scrollTop - 200)) {
          // item.src = item.dataset.src;
          targets[i].classList.add('slidein-end');
          targets[i].classList.remove('slidein-start');
        }
          slideinThrottleTimeout = setTimeout(function () {
            i++;
          }, 1000);
      }
    }

    document.addEventListener("scroll", slidein);
    window.addEventListener("resize", slidein);
    window.addEventListener("orientationChange", slidein);
  });
})();
