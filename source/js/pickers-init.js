'use strict';

(function () {

  function timeInit (minTime, maxTime) {
    $('#timepicker').timepicker({
      'forceRoundTime': true,
      'timeFormat': 'H:i',
      'minTime': minTime,
      'maxTime': maxTime,
      'showDuration': false
    });
  }

  let input = document.querySelector('#datepicker');
  let time = document.querySelector('#timepicker');
  let date = new Date();

  timeInit('09:00', '18:30');

  input.addEventListener('change', function () {
    time.value = '';

    let day = +input.value.split(' ')[0];
    let month = +input.value.split(' ')[1];
    date.setMonth(month - 1, day);
    let weekDay = date.getDay();

    if (weekDay === 6) {
      $('#timepicker').timepicker('remove');
      timeInit('09:00', '16:30');
    } else {
      $('#timepicker').timepicker('remove');
      timeInit('09:00', '18:30');
    }
  });

  var telInput = document.querySelector('#signup-phone');
  var telLabel = document.querySelector('.signup__label--phone');

  $('#signup-phone').intlTelInput({
    defaultCountry: 'ua',
    autoFormat: true,
    autoPlaceholder: true,
    numberType: "MOBILE",
    utilsScript: "plugins/phone/lib/libphonenumber/build/utils.js"
  });

  telInput.addEventListener('focus', function () {
    telLabel.style = 'color:rgb(123, 101, 66)';
  });
  telInput.addEventListener('blur', function () {
    telLabel.style = 'color:rgb(39, 35, 39)';
  });
})();
