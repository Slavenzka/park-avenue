'use strict';

(function () {
  var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'DD MM',
    toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day} ${month}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1] - 1, 10);
      const year = parseInt(parts[1], 10);
      return new Date(year, month, day);
  }
   });
})();
