'use strict';

/**
 * @ngdoc function
 * @name nd.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of nd
 */
angular.module('nd')
  .controller('DashboardCtrl', function($scope,
   $state,
   LoginService,
   Session) {

    $scope.$state = $state;
    $scope.logout = logout;

    function logout() {
      LoginService.logout().then(angular.noop,angular.noop);
      Session.logout();
    }

  });
