(function () {
  'use strict';

  angular.module('nd')
    .factory('ForgotPassword', ForgotPassword);

  /* @ngInject */
  function ForgotPassword () {
    return {
      'email'  : ''
    };
  }
})();
