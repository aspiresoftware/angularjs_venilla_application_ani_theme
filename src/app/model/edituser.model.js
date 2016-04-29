(function () {
  'use strict';

  angular.module('nd')
    .factory('EditUser', EditUser);

  /* @ngInject */
  function EditUser () {
    return {
      'firstName'  : '',
      'lastName'   : '',
      'isActivate': false
    };
  }
})();
