(function() {
  'use strict';

  angular.module('nd')
  .config(configRoutes);

  /* @ngInject */
  function configRoutes (
    $stateProvider,
    $urlRouterProvider,
    PAGE_URL,
    TEMPLATE_URL
    ) {
    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $stateProvider
      .state('base', {
        abstract: true,
        url: PAGE_URL.root,
        templateUrl: TEMPLATE_URL.base
      })
      .state('login', {
        url: PAGE_URL.login,
        templateUrl: TEMPLATE_URL.login,
        parent: 'base',
        controller: 'LoginController',
        controllerAs: 'loginController'
      })
      .state('404', {
        url: PAGE_URL.error404,
        templateUrl: TEMPLATE_URL.error404
      })
      .state('dashboard', {
        url: PAGE_URL.dashboard,
        parent: 'base',
        controller: 'DashboardCtrl',
        templateUrl: TEMPLATE_URL.dashboard
      })
      .state('overview', {
        url: PAGE_URL.overview,
        parent: 'dashboard',
        templateUrl: TEMPLATE_URL.overview
      })
      .state('reports', {
        url: PAGE_URL.reports,
        parent: 'dashboard',
        templateUrl: TEMPLATE_URL.reports
      });
    $urlRouterProvider.otherwise(PAGE_URL.login);
  }
})();
