(function () {
  'use strict';

  angular.module('nd')
    .factory('ChangePassword', ChangePassword);

  /* @ngInject */
  function ChangePassword () {
    return {
      'oldPassword': '',
      'newPassword': '',
      'reEnterNewPassword': ''
    };
  }
})();
