'use strict';

(function () {
  let signup = document.querySelector('.signup');
  let signupTrigger = document.querySelector('.service__item--preview .service__link');
  let signupActive = 'signup-active';
  let signupClose = signup.querySelector('.signup__toggle');

  let modalTools = {
    openModal: function (modal, activeClass) {
      modal.classList.add(activeClass);
    },

    closeSignup: function () {
        signup.classList.remove(signupActive);
        signupClose.removeEventListener('click', this.closeModal);
    }
  }

  signupTrigger.addEventListener('click', function () {
    modalTools.openModal(signup, signupActive);

    signupClose.addEventListener('click', modalTools.closeSignup);
  });
})();
