(function() {
  angular.module('nd')
    .controller('ForgotPasswordController', ForgotPasswordController);

  function ForgotPasswordController(
    $scope,
    $state,
    $timeout,
    $q,
    modelFactory,
    ForgotPassword,
    ForgotPasswordService
    ) {

    //Model declaration
    $scope.forgotPasswordModel = modelFactory.create('forgotpassword', ForgotPassword);

    //Function Declaration
    $scope.forgotPasswordAction = forgotPasswordAction;

    //Variable Declaration
    $scope.forgotPasswordMessages = {'showConfirmStatus':false,
    'showAlreadyRegisteredStatus':false};

    function forgotPasswordAction() {
      var deferred = $q.defer();
      ForgotPasswordService.forgotPassword($scope.forgotPasswordModel).then(function () {
        $scope.forgotPasswordMessages.showConfirmStatus = true;
        deferred.resolve();
      },
      function() {
        $scope.forgotPasswordMessages.showAlreadyRegisteredStatus = true;
        deferred.reject();
      });
      return deferred.promise;
    }

  }
})();
