(function() {
  angular.module('nd')
    .controller('LoginController', loginController);

  function loginController(
    $scope,
    modelFactory,
    $location,
    User,
    LoginService,
    Session
    ) {

    $scope.user = modelFactory.create('user', User);

    $scope.login  = login;
    $scope.submit = submit;

    function submit() {

      $location.path('/dashboard');

      return false;
    }

    function login() {
      var authPromise = LoginService.authentication($scope.user);
      /*return authPromise;*/
      authPromise.then(loginSuccess, failure);
    }

    function loginSuccess (result) {
      $scope.user.accessToken = result.accessToken;
      $scope.user.refreshToken = result.refreshToken;
      $scope.user.expireDate = result.expireDate;
      $scope.user.status = result.status;
      //Create a new user session
      Session.create($scope.user);
    }

    function failure (error) {
      console.log(error);
    }
  }
})();
