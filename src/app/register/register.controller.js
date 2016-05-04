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
   $sce,
   Register,
   RegisterUserService,
   lodash,
   ALERT_MESSAGE,
   modelFactory) {

    //Model for register
    $scope.registerModel = modelFactory.create('registerModel', Register);

    //Function Declaration
    $scope.registerUser = registerUser;
    $scope.htmlPopover = $sce.trustAsHtml('<b style="color: red">  Username already taken!! </b>');
    $scope.popoverIsOpen = false;
    $scope.ALERT_MESSAGE = ALERT_MESSAGE;

    //TODO: handle the already logged in users
    function registerUser() {
      var deferred,
      registerUserModel,
      registerUserPromise;
      deferred = $q.defer();
      if ($scope.registerForm.$invalid) {
        deferred.reject();
      }

      registerUserModel = angular.copy($scope.registerModel, registerUserModel);
      lodash.unset(registerUserModel,'confirmPassword');

      registerUserPromise = RegisterUserService.registerUser(registerUserModel);
      registerUserPromise.then(registerUserSucess, registerUserFailure);
      function registerUserSucess(data) {
        if(data.error) {
          deferred.reject();
          $scope.popoverIsOpen = true;
          return;
        }
        $state.go('login');
      }
      function registerUserFailure() {
        console.log('error to register user');
      }
      return deferred.promise;
    }


    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };
    $scope.popup1 = {
      opened: false
    };

  }
}());
