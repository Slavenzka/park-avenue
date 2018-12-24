'use strict';

(function () {
  let html = document.querySelector('html');

  let signup = {
    modal: document.querySelector('.signup'),
    trigger: document.querySelectorAll('.signup-trigger'),
    classOpen: 'signup-open',
    classClose: 'signup-close',
    closeBtn: document.querySelector('.signup__toggle')
  }

  let form = {
    formArea: signup.modal.querySelector('.signup form'),
    actionCall: '#1',
    actionSignup: '#2',
    title: signup.modal.querySelector('.signup__title'),
    descriptor: signup.modal.querySelector('.signup__descriptor'),
    date: signup.modal.querySelector('.signup__date-fieldset'),
    time: signup.modal.querySelector('.signup__time-fieldset'),
    button: signup.modal.querySelector('.signup__submit')
  }

  function toggleModal (modalContent) {

    function closeModal (evt) {
      if ((evt.target.classList.contains('signup-open')) ||
      evt.target.classList.contains('signup__toggle')) {
        modalContent.modal.classList.remove(modalContent.classOpen);
        modalContent.modal.classList.add(modalContent.classClose);
        modalContent.closeBtn.removeEventListener('click', closeModal);
      }
    };

    function closeModalKey (evt) {
      const escKey = 27;

      if (evt.keyCode === escKey) {
        modalContent.modal.classList.remove(modalContent.classOpen);
        modalContent.modal.classList.add(modalContent.classClose);
        document.removeEventListener('keydown', closeModalKey)
      }
    }

    function openModal () {
      let time = document.querySelector('.ui-timepicker-wrapper');

      if (modalContent.modal.classList.contains(modalContent.classClose)) {
        modalContent.modal.classList.remove(modalContent.classClose);
      }
      modalContent.modal.classList.add(modalContent.classOpen);
      modalContent.closeBtn.focus();
      modalContent.modal.addEventListener('click', closeModal);
      document.addEventListener('keydown', closeModalKey);
    };

    openModal.switchCall = function (formContent) {
      formContent.formArea.action = formContent.actionCall;
      formContent.title.textContent = 'Обратный звонок';
      formContent.descriptor.textContent = 'Оставьте свой номер телефона и наш менеджер свяжется с Вами в ближайшее время';
      formContent.date.style = 'display: none';
      formContent.date.querySelector('.signup__date').required = false;
      formContent.time.style = 'display: none';
      formContent.time.querySelector('.signup__time').required = false;
      formContent.button.style = 'margin-left: auto';
    };

    openModal.switchSignup = function (formContent) {
      formContent.formArea.action = formContent.actionSignup;
      formContent.title.textContent = 'Запись на просмотр';
      formContent.descriptor.textContent = 'Вы можете сразу выбрать время дату визита или обсудить это с нашим менеджером при подтверждении заявки';
      formContent.date.style = 'display: block';
      formContent.date.querySelector('.signup__date').required = true;
      formContent.time.style = 'display: block';
      formContent.time.querySelector('.signup__time').required = true;
      formContent.button.style = 'margin-left: auto';
    };

    return openModal;
  };

  let signupModal = toggleModal(signup);

  signup.trigger.forEach(item => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (evt.target.classList.contains('advantages__button--call')) {
        signupModal.switchCall(form);
      } else {
        signupModal.switchSignup(form);
      }
      signupModal();
    });
  })
})();
