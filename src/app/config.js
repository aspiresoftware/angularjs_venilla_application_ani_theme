(function() {
  'use strict';

  angular.module('nd')
  .constant('APPLICATION', {
    host: 'http://192.168.1.12:3000/api/v1',
    // host: 'http://192.168.1.12:3002/api/v1',
    // host: 'http://192.168.1.12:8080/api/v1',
    // host: 'http://192.168.1.30:3000/api/v1',
    username: 'username',
    cache: 'appCache',
    email: 'email',
    rolename: 'rolename',
    firstname: 'firstname',
    lastname: 'lastname',
    paramCache: 'appParamCache',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    id: 'id',
    sessionName: 'myAppSession'
  })
  .constant('REST_URL', {
    login: '/authenticate',
    changePassword: '/changepassword/:id',
    forgotPassword: '/forgotpassword',
    'registerUser': '/user',
    'getUsers':'/users',
    'getUser': '/user/:id',
    'logout':'/logout',
    'updateUser':'/user/:id',
    'deleteUser':'/user/:id'
  })
  .constant('PAGE_URL', {
    login: '/login',
    error404: '/404',
    root: '',
    dashboard: '/dashboard',
    overview: '/overview',
    reports: '/reports',
    changepassword:'/changepassword',
    register: '/register',
    showusers: '/users',
    edituser:'/user/edit/:id',
    forgotpassword:'/forgotpassword'
  })
  .constant('TEMPLATE_URL', {
    login: 'app/login/login.html',
    error404: 'app/common/html/404.html',
    base: 'app/base/base.html',
    dashboard: 'app/dashboard/dashboard.html',
    overview: 'app/dashboard/overview/overview.html',
    reports: 'app/dashboard/reports/reports.html',
    changepassword: 'app/changepassword/changepassword.html',
    register: 'app/register/register.html',
    showusers: 'app/crud/show-user/show-user.html',
    edituser: 'app/crud/edit-user/edit-user.html',
    forgotpassword: 'app/forgotpassword/forgotpassword.html'
  })
  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized',
    badRequest: 'bad-request',
    notFound: 'not-found',
    requestTimeout: 'request-timeout',
    upgradeRequired: 'upgrade-required',
    unprocessableEntity: 'unprocessable-entity',
    tooManyRequests: 'too-many-requests',
    notImplemented: 'not-implemented',
    internalServerError: 'internal-server-error',
    serviceUnavailable: 'service-unavailable',
    gatewayTimeout: 'gateway-timeout',
    proxyErrors: 'proxy-errors',
    networkIssue: 'networkIssue'
  })
  .constant('AUTH_MESSAGE', {
    notAuthenticated: 'You have entered an invalid email address and/or password.' +
      ' Please try again.',
    notAuthenticatedPasswordChanged: 'Your user name or password has been changed.' +
      ' Please log in again.',
    notAuthorized: 'You do not have access to perform that action.',
    badRequest: 'The server wasn\'t able to process your request. Please try again. (400)',
    notFound: 'The endpoint is not valid, or a resource represented by the' +
      ' request does not exist. (404)',
    requestTimeout: 'The server was not able to complete your request in the ' +
      'time allotted. This could be due to server load, and may be retried in the future. (408)',
    unprocessableEntity: null,
    tooManyRequests: 'An unhandled error has occurred. Please contact eBackpack. (429)',
    notImplemented: 'This functionality is not yet implemented. Please contact' +
      ' eBackpack for more information. (501)',
    internalServerError: 'An unhandled error has occurred, and eBackpack' +
      ' has been notified. (500)',
    serviceUnavailable: 'The service is temporarily unavailable. Please try again later. (503)',
    gatewayTimeout: 'The request was unable to be processed in time. This may' +
      ' be due to network availability. Please try again later. (504)',
    proxyErrors: 'The service is temporarily unavailable or the request was' +
      ' unable to be processed in time. This may be due to network availability.' +
      ' Please try again later. (520)',
    networkIssue: 'Please check your network connection and try again. (0)',
    notFoundRequest: 'The account associated with this email address cannot be' +
      ' found. Please correct your email address or create a new account.',
    alredyAssociatedEmail: 'An account is already associated with this email address.' +
      ' Please log in to add this child to your existing account.'
  })
  .constant('ALERT_MESSAGE', {
    'deactivatedUserSuccessfully':'Successfully deactivated user ',
    'usernameAlreadyExists':'User name already exists',
    passwordUpdatedSuccessfully:'Password Updated successfully'
   });
})();
