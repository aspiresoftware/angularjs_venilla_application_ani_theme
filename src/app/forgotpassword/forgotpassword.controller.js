(function() {
  angular.module('nd')
    .controller('ForgotPasswordController', ForgotPasswordController);

  function ForgotPasswordController(
    $scope,
    $state,
    $timeout,
    $q,
    modelFactory,
    ForgotPassword
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
      
      $timeout(function(){
        // $scope.forgotPasswordMessages.showConfirmStatus = true;
        $scope.forgotPasswordMessages.showAlreadyRegisteredStatus = true;
        deferred.reject();
      }, 500);
      return deferred;
    }

  }
})();
