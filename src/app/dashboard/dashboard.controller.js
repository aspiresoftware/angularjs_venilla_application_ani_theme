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
   Session) {

    $scope.$state = $state;
    $scope.logout = logout;

    function logout() {
        Session.logout();
    }

  });
