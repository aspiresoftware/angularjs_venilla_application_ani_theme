(function() {
  'use strict';

/**
 * @ngdoc function
 * @name nd.controller:ChangePassword
 * @description
 * # ChangePassword
 * Controller of nd
 */
angular.module('nd')
  .controller('ChangePasswordController', ChangePasswordController);

  function ChangePasswordController($scope,
   $state,
   modelFactory,
   Session,
   ChangePasswordService,
   ChangePassword) {

    //Model for changepassword
    $scope.changePasswordModel = modelFactory.create('changePasswordModel', ChangePassword);

    //Function Declaration
    $scope.changePasswordSubmit = changePasswordSubmit;

    function changePasswordSubmit() {
      var dummyChangePasswordModel = {};
      dummyChangePasswordModel.username    = Session.username;
      dummyChangePasswordModel.password    = $scope.changePasswordModel.oldPassword;
      dummyChangePasswordModel.oldPassword = $scope.changePasswordModel.newPassword;
      ChangePasswordService.changePassword(dummyChangePasswordModel)
      .then(changePasswordSuccess, changePasswordFailure);
    }

    function changePasswordSuccess() {
      $state.go('dashboard');
    }
    function changePasswordFailure() {
      console.log('error while changing password');
    }
  }
}());
