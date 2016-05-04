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
   ALERT_MESSAGE,
   ChangePasswordService,
   ChangePassword) {

    //Model for changepassword
    $scope.changePasswordModel = modelFactory.create('changePasswordModel', ChangePassword);

    //Function Declaration
    $scope.changePasswordSubmit = changePasswordSubmit;
    $scope.closeAlert           = closeAlert;

    //Variable Declaration
    $scope.alerts = [];
    $scope.wrongOldPassword = false;

    function changePasswordSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      var dummyChangePasswordModel = {},
      params = {};
      params.id = Session.getValue('id');
      dummyChangePasswordModel.newpassword    = $scope.changePasswordModel.newPassword;
      dummyChangePasswordModel.oldpassword    = $scope.changePasswordModel.oldPassword;
      ChangePasswordService.changePassword(params, dummyChangePasswordModel)
      .then(changePasswordSuccess, changePasswordFailure);
    }

    function changePasswordSuccess(data) {
      if (data.error) {
        $scope.wrongOldPassword = true;
        return;
      }
      $scope.alerts.push(
        { type: 'success',
              msg: ALERT_MESSAGE.passwordUpdatedSuccessfully
            }
        );
      $scope.changePasswordModel = modelFactory.create('changePasswordModel', ChangePassword);
      $scope.changePasswordForm.$setPristine();
    }
    function changePasswordFailure() {
      console.log('error while changing password');
    }

    function closeAlert(index) {
      $scope.alerts.splice(index, 1);
    }
  }
}());
