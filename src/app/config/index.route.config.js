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
        controllerAs: 'loginController',
        authenticate: false
      })
      .state('404', {
        url: PAGE_URL.error404,
        templateUrl: TEMPLATE_URL.error404,
        authenticate: false
      })
      .state('dashboard', {
        url: PAGE_URL.dashboard,
        parent: 'base',
        controller: 'DashboardCtrl',
        templateUrl: TEMPLATE_URL.dashboard,
        authenticate: false
      })
      .state('overview', {
        url: PAGE_URL.overview,
        parent: 'dashboard',
        templateUrl: TEMPLATE_URL.overview,
        authenticate: false
      })
      .state('reports', {
        url: PAGE_URL.reports,
        parent: 'dashboard',
        templateUrl: TEMPLATE_URL.reports,
        authenticate: false
      })
      .state('changepassword', {
        url: PAGE_URL.changepassword,
        parent: 'dashboard',
        templateUrl: TEMPLATE_URL.changepassword,
        authenticate: false,
        controller:'ChangePasswordController'
      })
      .state('register', {
        url: PAGE_URL.register,
        templateUrl: TEMPLATE_URL.register,
        authenticate: false,
        controller:'RegisterControler'
      })
      .state('users', {
        url: PAGE_URL.showusers,
        templateUrl: TEMPLATE_URL.showusers,
        parent: 'dashboard',
        authenticate: false,
        controller:'ShowUserController'
      })
      .state('edituser', {
        url: PAGE_URL.edituser,
        templateUrl: TEMPLATE_URL.edituser,
        parent: 'dashboard',
        authenticate: false,
        controller:'EditUserController'
      })
      .state('forgotpassword', {
        url: PAGE_URL.forgotpassword,
        templateUrl: TEMPLATE_URL.forgotpassword,
        authenticate: false,
        controller: 'ForgotPasswordController'
      });
    $urlRouterProvider.otherwise(PAGE_URL.login);
  }
})();
