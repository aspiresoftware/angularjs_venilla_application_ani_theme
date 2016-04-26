'use strict';

/**
 * @ngdoc function
 * @name nd.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of nd
 */
angular.module('nd')
  .controller('DashboardCtrl', function($scope, $state) {

    $scope.$state = $state;

  });
