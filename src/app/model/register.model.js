(function () {
  'use strict';

  angular.module('nd')
    .factory('Register', Register);

  /* @ngInject */
  function Register () {
    return {
      'firstname': '',
      'lastname': '',
      'username': '',
      'email': '',
      'password': '',
      'dob': '',
      'rolename': 'user',

    };
  }
})();
