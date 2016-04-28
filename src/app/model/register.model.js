(function () {
  'use strict';

  angular.module('nd')
    .factory('Register', Register);

  /* @ngInject */
  function Register () {
    return {
      'firstName': '',
      'lastName': '',
      'username': '',
      'password': '',
      'confirmPassword': ''
    };
  }
})();
