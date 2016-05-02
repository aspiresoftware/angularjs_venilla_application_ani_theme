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
      var dummyChangePasswordModel = {},
      params = {};
      params.id = Session.getValue('id');
      dummyChangePasswordModel.username    = Session.username;
      dummyChangePasswordModel.newpassword    = $scope.changePasswordModel.oldPassword;
      dummyChangePasswordModel.oldpassword = $scope.changePasswordModel.newPassword;
      ChangePasswordService.changePassword(params, dummyChangePasswordModel)
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
