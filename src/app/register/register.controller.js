(function() {
  'use strict';

/**
 * @ngdoc function
 * @name nd.controller:RegisterControler
 * @description
 * # RegisterControler
 * Controller of nd
 */
angular.module('nd')
  .controller('RegisterControler', RegisterControler);

  function RegisterControler($scope,
   $state,
   $q,
   Register,
   RegisterUserService,
   lodash,

   modelFactory) {

    //Model for register
    $scope.registerModel = modelFactory.create('registerModel', Register);

    //Function Declaration
    $scope.registerUser = registerUser;

    //TODO: handle the already logged in users
    function registerUser() {
      var deferred,
      registerUserModel,
      registerUserPromise;
      if ($scope.registerForm.$invalid) {
        deferred = $q.defer();

        return $q.reject();
      }

      registerUserModel = angular.copy($scope.registerModel, registerUserModel);
      lodash.unset(registerUserModel,'confirmPassword');

      registerUserPromise = RegisterUserService.registerUser(registerUserModel);
      registerUserPromise.then(registerUserSucess, registerUserFailure);
      return registerUserPromise;
    }

    function registerUserSucess() {
      $state.go('login');
    }
    function registerUserFailure() {
      console.log('error to register user');
    }

  }
}());
